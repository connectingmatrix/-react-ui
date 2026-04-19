import React from 'react';
import { AccentProvider, Badge, Card, type AccentKey } from '../src/index';

export interface PropUsage {
  name: string;
  value: string;
  note?: string;
}

export interface StoryCase {
  title: string;
  description: string;
  props: PropUsage[];
  render: React.ReactNode;
  accentKey?: AccentKey;
}

export const accentChoices: Array<{ key: AccentKey; label: string; description: string }> = [
  { key: 'default', label: 'Default', description: 'Balanced cyan default' },
  { key: 'teal', label: 'Teal', description: 'Positive and active states' },
  { key: 'warning', label: 'Warning', description: 'Review and caution states' },
  { key: 'danger', label: 'Danger', description: 'Critical and destructive states' },
  { key: 'neutral', label: 'Neutral', description: 'Quiet administrative states' },
];

export function StoryShell({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <AccentProvider accentKey="default" className="min-h-screen bg-[var(--rui-bg-app)] p-5">
      <div className="mx-auto max-w-[1500px] space-y-5">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <Badge>Storybook coverage</Badge>
            <h1 className="mt-3 text-3xl font-semibold text-white">{title}</h1>
            <p className="mt-2 max-w-4xl text-sm leading-6 text-[var(--rui-text-secondary)]">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {accentChoices.map((accent) => (
              <span key={accent.key} className="rounded-full border border-[var(--rui-border-soft)] bg-white/[0.04] px-3 py-1 text-xs text-[var(--rui-text-secondary)]">
                {accent.label}
              </span>
            ))}
          </div>
        </div>
        {children}
      </div>
    </AccentProvider>
  );
}

export function CaseGrid({ cases }: { cases: StoryCase[] }) {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      {cases.map((storyCase) => (
        <CaseCard key={storyCase.title} storyCase={storyCase} />
      ))}
    </div>
  );
}

export function CaseCard({ storyCase }: { storyCase: StoryCase }) {
  return (
    <AccentProvider accentKey={storyCase.accentKey ?? 'default'} className="h-full rounded-[var(--rui-radius-panel)] bg-[var(--rui-bg-app)] p-1">
      <Card className="h-full" contentClassName="flex h-full flex-col gap-4">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-base font-semibold text-white">{storyCase.title}</h2>
            <span className="h-3 w-3 rounded-full bg-[var(--rui-accent)] shadow-[0_0_0_4px_var(--rui-accent-muted)]" />
          </div>
          <p className="mt-1 text-sm leading-6 text-[var(--rui-text-secondary)]">{storyCase.description}</p>
        </div>
        <div className="rounded-[10px] border border-white/8 bg-black/10 p-3">{storyCase.render}</div>
        <PropsUsage props={storyCase.props} />
      </Card>
    </AccentProvider>
  );
}

export function PropsUsage({ props }: { props: PropUsage[] }) {
  return (
    <div className="mt-auto rounded-[10px] border border-white/8 bg-[#070b18] p-3">
      <div className="mb-2 text-xs uppercase tracking-[0.16em] text-[var(--rui-text-tertiary)]">Props usage</div>
      <div className="space-y-2">
        {props.map((prop) => (
          <div key={`${prop.name}-${prop.value}`} className="grid gap-2 text-xs md:grid-cols-[140px_minmax(0,1fr)]">
            <code className="text-[var(--rui-accent)]">{prop.name}</code>
            <div className="min-w-0">
              <code className="break-words text-white/80">{prop.value}</code>
              {prop.note ? <div className="mt-1 text-[var(--rui-text-tertiary)]">{prop.note}</div> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CodeSnippet({ code }: { code: string }) {
  return (
    <div className="rounded-[10px] border border-white/8 bg-[#050816]">
      <div className="border-b border-white/8 px-3 py-2 text-xs uppercase tracking-[0.16em] text-[var(--rui-text-tertiary)]">Copyable usage snippet</div>
      <pre className="max-h-[420px] overflow-auto p-3 text-[11px] leading-5 text-white/75">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}

export function LiveProps({ value }: { value: Record<string, unknown> }) {
  return (
    <div className="rounded-[10px] border border-[var(--rui-accent-border)] bg-[var(--rui-accent-muted)] p-3">
      <div className="mb-2 text-xs uppercase tracking-[0.16em] text-[var(--rui-text-tertiary)]">Updated props / state</div>
      <pre className="overflow-auto text-[11px] leading-5 text-white/80">
        <code>{JSON.stringify(value, null, 2)}</code>
      </pre>
    </div>
  );
}

export function Section({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="mt-1 text-sm leading-6 text-[var(--rui-text-secondary)]">{description}</p>
      </div>
      {children}
    </section>
  );
}

export function formatMoney(value: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: Math.abs(value) > 100 ? 2 : 4 }).format(value);
}

export function signedTone(value: number) {
  if (value > 0) return 'text-[var(--rui-success)]';
  if (value < 0) return 'text-[var(--rui-danger)]';
  return 'text-white/70';
}

export function formatDateTime(value: string) {
  return new Date(value).toLocaleString();
}
