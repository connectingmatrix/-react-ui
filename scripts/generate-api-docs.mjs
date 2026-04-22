import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsDir = path.join(rootDir, 'docs', 'api');

const groups = [
  { id: 'components', title: 'Components', dir: 'src/components' },
  { id: 'fields', title: 'Fields', dir: 'src/fields' },
  { id: 'elements', title: 'Elements', dir: 'src/elements' },
  { id: 'layouts', title: 'Layouts', dir: 'src/layouts' },
  { id: 'context', title: 'Context', dir: 'src/context' },
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readSourceFiles(dir) {
  const absoluteDir = path.join(rootDir, dir);
  if (!fs.existsSync(absoluteDir)) return [];
  return fs
    .readdirSync(absoluteDir)
    .filter((file) => file.endsWith('.ts') || file.endsWith('.tsx'))
    .sort()
    .map((file) => path.join(absoluteDir, file));
}

function hasExportModifier(node) {
  return Boolean(node.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword));
}

function getJsDocText(node) {
  const docs = ts.getJSDocCommentsAndTags(node);
  if (!docs.length) return '';
  return docs
    .map((doc) => doc.getText())
    .join('\n')
    .replace(/^\/\*\*|\*\/$/g, '')
    .split('\n')
    .map((line) => line.replace(/^\s*\*\s?/, '').trim())
    .filter(Boolean)
    .join(' ');
}

function escapeTableText(value) {
  return String(value || '')
    .replace(/\|/g, '\\|')
    .replace(/\n+/g, ' ')
    .trim();
}

function inlineCode(value) {
  const text = String(value || '').trim();
  if (!text) return '';
  return `\`${escapeTableText(text.replace(/\s+/g, ' '))}\``;
}

function getTypeParameters(node, sourceFile) {
  if (!node.typeParameters?.length) return '';
  return `<${node.typeParameters.map((param) => param.getText(sourceFile)).join(', ')}>`;
}

function getInterfaceExtends(node, sourceFile) {
  return (node.heritageClauses || []).flatMap((clause) => clause.types.map((type) => type.getText(sourceFile))).join(', ');
}

function getMemberName(member, sourceFile) {
  if (!member.name) return '';
  if (ts.isIdentifier(member.name) || ts.isStringLiteral(member.name) || ts.isNumericLiteral(member.name)) return member.name.text;
  return member.name.getText(sourceFile);
}

function getMemberType(member, sourceFile) {
  if (member.type) return member.type.getText(sourceFile);
  if (ts.isMethodSignature(member)) return member.getText(sourceFile).replace(/;$/, '');
  return 'unknown';
}

function getMembersFromDeclaration(node) {
  if (ts.isInterfaceDeclaration(node)) return Array.from(node.members);
  if (ts.isTypeAliasDeclaration(node) && ts.isTypeLiteralNode(node.type)) return Array.from(node.type.members);
  return [];
}

function declarationKind(node) {
  if (ts.isInterfaceDeclaration(node)) return 'interface';
  if (ts.isTypeAliasDeclaration(node)) return 'type';
  return 'unknown';
}

function getDeclarationName(node, sourceFile) {
  return `${node.name.text}${getTypeParameters(node, sourceFile)}`;
}

function shouldDocument(node) {
  return (ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node)) && hasExportModifier(node);
}

function collectDeclarations(filePath) {
  const sourceText = fs.readFileSync(filePath, 'utf8');
  const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true, filePath.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const declarations = [];

  sourceFile.forEachChild((node) => {
    if (!shouldDocument(node)) return;
    declarations.push({
      node,
      sourceFile,
      sourcePath: path.relative(rootDir, filePath).replace(/\\/g, '/'),
      name: getDeclarationName(node, sourceFile),
      bareName: node.name.text,
      typeParameters: getTypeParameters(node, sourceFile),
      kind: declarationKind(node),
      description: getJsDocText(node),
      extendsText: ts.isInterfaceDeclaration(node) ? getInterfaceExtends(node, sourceFile) : '',
      members: getMembersFromDeclaration(node),
    });
  });

  return declarations;
}

function renderMembersTable(declaration) {
  if (!declaration.members.length) return '';

  const rows = declaration.members
    .map((member) => {
      const name = getMemberName(member, declaration.sourceFile);
      if (!name) return null;
      return {
        prop: member.questionToken ? `${name}?` : name,
        required: member.questionToken ? 'No' : 'Yes',
        type: getMemberType(member, declaration.sourceFile),
        description: getJsDocText(member),
      };
    })
    .filter(Boolean);

  if (!rows.length) return '';

  return [
    '| Prop | Required | Type | Description |',
    '| --- | --- | --- | --- |',
    ...rows.map((row) => `| \`${escapeTableText(row.prop)}\` | ${row.required} | ${inlineCode(row.type)} | ${escapeTableText(row.description) || '-'} |`),
  ].join('\n');
}

function renderTypeAlias(declaration) {
  if (!ts.isTypeAliasDeclaration(declaration.node) || ts.isTypeLiteralNode(declaration.node.type)) return '';
  return ['```ts', `export type ${declaration.name} = ${declaration.node.type.getText(declaration.sourceFile)};`, '```'].join('\n');
}

function renderDeclaration(declaration) {
  const lines = [`## ${declaration.bareName}`, '', `Source: \`${declaration.sourcePath}\``, '', `Kind: \`${declaration.kind}\``];
  if (declaration.typeParameters) lines.push('', `Type parameters: \`${declaration.typeParameters}\``);
  if (declaration.extendsText) lines.push('', `Extends: \`${declaration.extendsText}\``);
  if (declaration.description) lines.push('', declaration.description);

  const table = renderMembersTable(declaration);
  const alias = renderTypeAlias(declaration);
  if (table) lines.push('', table);
  else if (alias) lines.push('', alias);
  else lines.push('', '_No public properties found._');

  return lines.join('\n');
}

function renderGroup(group) {
  const declarations = readSourceFiles(group.dir).flatMap(collectDeclarations);
  const props = declarations.filter((declaration) => declaration.bareName.endsWith('Props'));
  const supporting = declarations.filter((declaration) => !declaration.bareName.endsWith('Props'));
  const ordered = [...props, ...supporting];

  const lines = [`# ${group.title} API Reference`, '', '<!-- This file is generated by yarn docs:api. Do not edit by hand. -->', '', `Generated from \`${group.dir}\`.`, ''];

  if (!ordered.length) {
    lines.push('_No exported TypeScript interfaces or type aliases found._');
    return lines.join('\n');
  }

  if (props.length) {
    lines.push('## Props', '', ...props.map((declaration) => `- [${declaration.name}](#${declaration.bareName.toLowerCase()})`), '');
  }

  if (supporting.length) {
    lines.push('## Supporting Types', '', ...supporting.map((declaration) => `- [${declaration.name}](#${declaration.bareName.toLowerCase()})`), '');
  }

  lines.push(...ordered.map(renderDeclaration).join('\n\n').split('\n'));
  return `${lines.join('\n')}\n`;
}

function renderIndex() {
  return `# API Reference

<!-- This file is generated by yarn docs:api. Do not edit by hand. -->

Generated from exported TypeScript interfaces and type aliases in \`src\`.

## Sections

${groups.map((group) => `- [${group.title}](./${group.id}.md)`).join('\n')}

## Regenerate

\`\`\`bash
yarn docs:api
\`\`\`
`;
}

ensureDir(docsDir);

for (const group of groups) {
  fs.writeFileSync(path.join(docsDir, `${group.id}.md`), renderGroup(group));
}

fs.writeFileSync(path.join(docsDir, 'index.md'), renderIndex());

console.log(`Generated API docs in ${path.relative(rootDir, docsDir)}`);
