import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import React, { useMemo, useState } from 'react';
import {
  AccentProvider,
  Badge,
  Banner,
  Button,
  Card,
  ChipCard,
  DateTimeSelector,
  GridLayout,
  Icon,
  Logger,
  NumberInput,
  Page,
  PageContainer,
  PageHeader,
  RadioCard,
  SelectBox,
  Sidebar,
  Switch,
  Table,
  Text,
  TextArea,
  ToggleCard,
  type AccentKey,
  type GridPanelState,
  type LoggerEntry,
  type SidebarItem,
  type TableColumn,
  type TableState,
} from '../src/index';
import botRecipesStorySource from './bot-recipes.stories.tsx?raw';
import { formatDateTime, formatMoney, signedTone } from './story-helpers';

interface RecipeStoryArgs {
  accentKey: AccentKey;
  activeBotName: string;
  initialSearch: string;
  showMetricCards: boolean;
  onRefresh: (...payload: unknown[]) => void;
  onExport: (...payload: unknown[]) => void;
  onFieldChange: (...payload: unknown[]) => void;
  onSelectionChange: (...payload: unknown[]) => void;
  onTableStateChange: (...payload: unknown[]) => void;
  onRunAction: (...payload: unknown[]) => void;
}

const accentOptions: AccentKey[] = ['default', 'teal', 'warning', 'danger', 'neutral', 'tailadmin', 'light-blue', 'light-success', 'light-warning', 'light-danger', 'light-neutral'];

const meta: Meta<RecipeStoryArgs> = {
  title: 'Binance Bot UI/Recipes',
  args: {
    accentKey: 'default',
    activeBotName: 'CC Bot',
    initialSearch: '',
    showMetricCards: true,
    onRefresh: fn(),
    onExport: fn(),
    onFieldChange: fn(),
    onSelectionChange: fn(),
    onTableStateChange: fn(),
    onRunAction: fn(),
  },
  argTypes: {
    accentKey: { control: 'select', options: accentOptions },
    activeBotName: { control: 'text' },
    initialSearch: { control: 'text' },
    showMetricCards: { control: 'boolean' },
    onRefresh: { table: { category: 'Actions' } },
    onExport: { table: { category: 'Actions' } },
    onFieldChange: { table: { category: 'Actions' } },
    onSelectionChange: { table: { category: 'Actions' } },
    onTableStateChange: { table: { category: 'Actions' } },
    onRunAction: { table: { category: 'Actions' } },
  },
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component:
          'Bot-side usage recipes built from @react/ui components. These stories intentionally keep bot copy and sample data in Storybook only; the package runtime remains generic.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<RecipeStoryArgs>;
type AnyRow = Record<string, any>;

const botRows = [
  {
    id: 'bot_lvhxur7qmnqj8yzt',
    name: 'CC Bot',
    mode: 'live',
    status: 'stopped',
    assistantEnabled: true,
    trainerEnabled: true,
    allocatedCapital: 100,
    configVersion: 13,
    updatedAt: '2026-04-19T16:34:39.160Z',
  },
  {
    id: 'bot_bdw4we54mnvsjqih',
    name: 'Wide Gainer',
    mode: 'live',
    status: 'stopped',
    assistantEnabled: true,
    trainerEnabled: true,
    allocatedCapital: 100,
    configVersion: 7,
    updatedAt: '2026-04-19T16:34:39.160Z',
  },
  {
    id: 'bot_r7pa9nd1mo0erxgh',
    name: 'Fast Scalp Bot',
    mode: 'live',
    status: 'stopped',
    assistantEnabled: true,
    trainerEnabled: true,
    allocatedCapital: 3000,
    configVersion: 1,
    updatedAt: '2026-04-19T16:34:39.160Z',
  },
];

const tradeRows = [
  {
    id: 'trade-pixel-closed-1',
    time: '2026-04-14T17:45:07.183Z',
    bot: 'Wide Gainer',
    symbol: 'PIXEL - USDT',
    ongoing: false,
    side: 'SELL',
    quantity: 1852.2,
    usdtOut: 14.984298,
    usdtIn: 14.891688,
    entry: 0.00809,
    exit: 0.00804,
    entryDepth: 89.6,
    entryImbalance: 0.4,
    entryMicro: '5.56 bps',
    closeDepth: 89.6,
    closeImbalance: 0.4,
    closeMicro: '5.56 bps',
    gross: -0.09261,
    net: -0.12250135899999945,
    fees: 0.029891359,
    hold: '14m',
    botRun: 'Ran at 14/04/2026, 10:45:07 pm',
    decision: 'Exited because stop loss 0.7% hit at -0.74%.',
  },
  {
    id: 'trade-og-closed-1',
    time: '2026-04-14T17:30:29.415Z',
    bot: 'Wide Gainer',
    symbol: 'OG - USDT',
    ongoing: false,
    side: 'SELL',
    quantity: 4.6,
    usdtOut: 14.4716,
    usdtIn: 14.3105,
    entry: 3.146,
    exit: 3.1109782608695653,
    entryDepth: 81.4,
    entryImbalance: 0.33,
    entryMicro: '4.98 bps',
    closeDepth: 77.9,
    closeImbalance: 0.28,
    closeMicro: '4.64 bps',
    gross: -0.1611,
    net: -0.1901967,
    fees: 0.0290967,
    hold: '10m',
    botRun: 'Ran at 14/04/2026, 10:30:29 pm',
    decision: 'Exited because local technical sell signal aligned with stop loss protection.',
  },
  {
    id: 'trade-qkc-closed-1',
    time: '2026-04-14T17:29:55.771Z',
    bot: 'Wide Gainer',
    symbol: 'QKC - USDT',
    ongoing: false,
    side: 'SELL',
    quantity: 4833,
    usdtOut: 14.982607,
    usdtIn: 14.868309,
    entry: 0.0030996494419181482,
    exit: 0.003076,
    entryDepth: 64.2,
    entryImbalance: 0.18,
    entryMicro: '2.38 bps',
    closeDepth: 54.4,
    closeImbalance: 0.2,
    closeMicro: '0.04 bps',
    gross: -0.11429775279040957,
    net: -0.14416016679040958,
    fees: 0.029862414,
    hold: '9m',
    botRun: 'Ran at 14/04/2026, 10:29:55 pm',
    decision: 'Closed after short-window momentum faded and order book pressure weakened.',
  },
  {
    id: 'trade-super-closed-1',
    time: '2026-04-14T17:27:27.643Z',
    bot: 'Wide Gainer',
    symbol: 'SUPER - USDT',
    ongoing: false,
    side: 'SELL',
    quantity: 125,
    usdtOut: 14.825,
    usdtIn: 14.7,
    entry: 0.1186,
    exit: 0.1176,
    entryDepth: 70.5,
    entryImbalance: 0.24,
    entryMicro: '3.10 bps',
    closeDepth: 66.2,
    closeImbalance: 0.12,
    closeMicro: '1.72 bps',
    gross: -0.125,
    net: -0.1546436,
    fees: 0.0296436,
    hold: '8m',
    botRun: 'Ran at 14/04/2026, 10:27:27 pm',
    decision: 'Exited as risk guard saw adverse drift after entry.',
  },
  {
    id: 'trade-pixel-profit-1',
    time: '2026-04-14T16:58:24.236Z',
    bot: 'Wide Gainer',
    symbol: 'PIXEL - USDT',
    ongoing: false,
    side: 'SELL',
    quantity: 1868.4,
    usdtOut: 14.984568,
    usdtIn: 15.021936,
    entry: 0.00802,
    exit: 0.00804,
    entryDepth: 86.3,
    entryImbalance: 0.37,
    entryMicro: '5.22 bps',
    closeDepth: 89.6,
    closeImbalance: 0.4,
    closeMicro: '5.56 bps',
    gross: 0.037368,
    net: 0.007346254,
    fees: 0.030021746,
    hold: '17m',
    botRun: 'Ran at 14/04/2026, 09:58:24 pm',
    decision: 'Closed with small profit after immediate momentum cooled.',
  },
  {
    id: 'trade-mubarak-closed-1',
    time: '2026-04-14T16:56:10.987Z',
    bot: 'Wide Gainer',
    symbol: 'MUBARAK - USDT',
    ongoing: false,
    side: 'SELL',
    quantity: 1137.7,
    usdtOut: 14.985609,
    usdtIn: 14.996986,
    entry: 0.01317,
    exit: 0.01318,
    entryDepth: 72.1,
    entryImbalance: 0.21,
    entryMicro: '3.74 bps',
    closeDepth: 74.2,
    closeImbalance: 0.19,
    closeMicro: '3.42 bps',
    gross: 0.011377,
    net: -0.00361789,
    fees: 0.01499489,
    hold: '11m',
    botRun: 'Ran at 14/04/2026, 09:56:10 pm',
    decision: 'Closed near flat once fees and spread made continuation unattractive.',
  },
];

const lifecycleRows = [
  {
    id: 'life-scanner-pixel-1',
    level: 'Scanner',
    symbol: 'PIXEL - USDT',
    priceUsd: 0.00807,
    totalVolume: 1315305.5,
    liveTickCurrent: 0.75,
    updated: '2026-04-14T17:24:46Z',
    change5m: -0.12,
    volume5m: 69420.6,
    change15m: 0.75,
    volume15m: 128205.67,
    orderBookSource: 'tracker_bundle',
    spreadBps: 12.43,
    depth: 80.9,
    imbalance: 0.29,
    top: 0.76,
    micro: '4.72 bps',
    bidUsd: 31524.57,
    askUsd: 17183.7,
  },
  {
    id: 'life-signal-pixel-1',
    level: 'Signal',
    symbol: 'PIXEL - USDT',
    priceUsd: 0.00804,
    totalVolume: 1315305.5,
    liveTickCurrent: 0.37,
    updated: '2026-04-14T17:28:09Z',
    change5m: 0,
    volume5m: 45411.98,
    change15m: 0.37,
    volume15m: 128205.67,
    orderBookSource: 'tracker_bundle',
    spreadBps: 12.43,
    depth: 86.3,
    imbalance: 0.37,
    top: 0.84,
    micro: '5.22 bps',
    bidUsd: 35109.28,
    askUsd: 16325.33,
  },
  {
    id: 'life-close-pixel-1',
    level: 'Close',
    symbol: 'PIXEL - USDT',
    priceUsd: 0.00804,
    totalVolume: 1315305.5,
    liveTickCurrent: 0.37,
    updated: '2026-04-14T17:30:46Z',
    change5m: -0.12,
    volume5m: 26928.5,
    change15m: 0.37,
    volume15m: 128205.67,
    orderBookSource: 'tracker_bundle',
    spreadBps: 12.43,
    depth: 54.4,
    imbalance: 0.2,
    top: 0.01,
    micro: '0.04 bps',
    bidUsd: 30435.81,
    askUsd: 20110.77,
  },
];

const symbolRows = [
  {
    id: 'sym-pixel',
    level: 'Scanner',
    symbol: 'PIXEL - USDT',
    priceUsd: 0.00807,
    totalVolume: 1315305.5,
    liveTickCurrent: 0.75,
    updated: '2026-04-14T17:24:46Z',
    change5m: -0.12,
    vol5m: 69420.6,
    change15m: 0.75,
    vol15m: 128205.67,
    change1h: 7.17,
    vol1h: 152256.25,
    change1d: 9.8,
    vol1d: 1315305.5,
    obSource: 'tracker_bundle',
    spreadBps: 12.43,
    depth: 80.9,
    imbalance: 0.29,
    micro: '4.72 bps',
  },
  {
    id: 'sym-og',
    level: 'Scanner',
    symbol: 'OG - USDT',
    priceUsd: 3.1109,
    totalVolume: 2948804.32,
    liveTickCurrent: -0.44,
    updated: '2026-04-14T17:30:29Z',
    change5m: -0.31,
    vol5m: 50422.8,
    change15m: -0.74,
    vol15m: 185244.12,
    change1h: 2.18,
    vol1h: 414218.33,
    change1d: 5.92,
    vol1d: 2948804.32,
    obSource: 'tracker_bundle',
    spreadBps: 9.88,
    depth: 77.9,
    imbalance: 0.28,
    micro: '4.64 bps',
  },
  {
    id: 'sym-qkc',
    level: 'Scanner',
    symbol: 'QKC - USDT',
    priceUsd: 0.003076,
    totalVolume: 1076502.73,
    liveTickCurrent: -0.18,
    updated: '2026-04-14T17:29:55Z',
    change5m: -0.52,
    vol5m: 26844.42,
    change15m: 0.14,
    vol15m: 75490.2,
    change1h: 4.86,
    vol1h: 123557.9,
    change1d: 11.62,
    vol1d: 1076502.73,
    obSource: 'tracker_bundle',
    spreadBps: 8.16,
    depth: 54.4,
    imbalance: 0.2,
    micro: '0.04 bps',
  },
  {
    id: 'sym-super',
    level: 'Scanner',
    symbol: 'SUPER - USDT',
    priceUsd: 0.1176,
    totalVolume: 802924.43,
    liveTickCurrent: -0.22,
    updated: '2026-04-14T17:27:27Z',
    change5m: -0.21,
    vol5m: 18744.33,
    change15m: -0.59,
    vol15m: 82219.2,
    change1h: 3.12,
    vol1h: 203554.77,
    change1d: 7.8,
    vol1d: 802924.43,
    obSource: 'tracker_bundle',
    spreadBps: 10.04,
    depth: 66.2,
    imbalance: 0.12,
    micro: '1.72 bps',
  },
];

const patternRows = tradeRows.slice(0, 4).map((row) => ({
  ...row,
  tradeId: row.id,
  configVersion: row.bot === 'Wide Gainer' ? 7 : 13,
  pnlUsd: row.net,
  scannerCreatedAt: row.time,
  signalCreatedAt: row.time,
  tradeCreatedAt: row.time,
}));

const walletRows = [
  { id: 'asset-usdt', asset: 'USDT', free: 181.0281, locked: 0, total: 181.0281, valueUsdt: 181.0281 },
  { id: 'asset-pixel', asset: 'PIXEL', free: 1852.2, locked: 0, total: 1852.2, valueUsdt: 14.94 },
  { id: 'asset-og', asset: 'OG', free: 4.6, locked: 0, total: 4.6, valueUsdt: 14.31 },
  { id: 'asset-qkc', asset: 'QKC', free: 4833, locked: 0, total: 4833, valueUsdt: 14.86 },
];

const walletHistoryRows = [
  {
    id: 'wallet-history-1',
    createdAt: '2026-04-19T16:34:39.160Z',
    source: 'refresh',
    botName: 'CC Bot',
    runLabel: 'Config v13',
    accountLabel: 'Binance spot',
    totalValueUsdt: 181.0281,
    heldAssets: 'USDT 181.0281 · PIXEL 1852.2',
    context: 'Manual account refresh',
  },
  {
    id: 'wallet-history-2',
    createdAt: '2026-04-14T17:45:07.183Z',
    source: 'trade_close',
    botName: 'Wide Gainer',
    runLabel: 'Config v7',
    accountLabel: 'Binance spot',
    totalValueUsdt: 196.0124,
    heldAssets: 'USDT 181.02 · OG 4.6 · QKC 4833',
    context: 'Closed PIXELUSDT trade',
  },
];

const logEntries: LoggerEntry[] = [
  {
    id: 'log-1',
    createdAt: '2026-04-19T16:34:39.160Z',
    level: 'INFO',
    category: 'runtime',
    source: 'ui',
    message: 'Loaded active bot snapshot.',
    payload: { botId: 'bot_lvhxur7qmnqj8yzt', configVersion: 13 },
  },
  {
    id: 'log-2',
    createdAt: '2026-04-19T16:35:10.000Z',
    level: 'WARN',
    category: 'market',
    source: 'scanner',
    message: 'Scanner response is delayed.',
    payload: { feed: 'LIVE_SYMBOL_DATA', delayMs: 1840 },
  },
  {
    id: 'log-3',
    createdAt: '2026-04-19T16:36:21.000Z',
    level: 'SUCCESS',
    category: 'config',
    source: 'ui',
    message: 'Draft validation completed.',
    payload: { errors: 0, warnings: 2 },
  },
  {
    id: 'log-4',
    createdAt: '2026-04-19T16:37:12.000Z',
    level: 'ERROR',
    category: 'api',
    source: 'backend',
    message: 'Wallet history request timed out.',
    payload: { endpoint: '/api/wallets/history', retryable: true },
  },
];

interface RecipeProps {
  accentKey?: AccentKey;
  children: React.ReactNode;
}

function Recipe({ children, accentKey = 'default' }: RecipeProps) {
  return (
    <AccentProvider accentKey={accentKey} className="min-h-screen bg-[var(--rui-bg-app)] text-[var(--rui-text-primary)]">
      {children}
    </AccentProvider>
  );
}

function sourceParameters(code: string, description: string) {
  return {
    docs: {
      description: {
        story: description,
      },
      source: {
        code: code.trim(),
        language: 'tsx',
        type: 'code',
      },
      canvas: {
        sourceState: 'shown',
      },
    },
  };
}

const recipeSourceImports = `import React, { useMemo, useState } from 'react';
import {
  AccentProvider,
  Badge,
  Banner,
  Button,
  Card,
  ChipCard,
  DateTimeSelector,
  GridLayout,
  Icon,
  Logger,
  NumberInput,
  Page,
  PageContainer,
  PageHeader,
  RadioCard,
  SelectBox,
  Sidebar,
  Switch,
  Table,
  Text,
  TextArea,
  ToggleCard,
  type AccentKey,
  type GridPanelState,
  type LoggerEntry,
  type SidebarItem,
  type TableColumn,
  type TableState,
} from '@react/ui';
import '@react/ui/styles.css';`;

function extractFunctionSource(functionName: string) {
  const signatureIndex = botRecipesStorySource.indexOf(`function ${functionName}`);
  if (signatureIndex < 0) return `function ${functionName}() {\n  // Source unavailable.\n}`;

  const bodyStart = botRecipesStorySource.indexOf('{', signatureIndex);
  if (bodyStart < 0) return botRecipesStorySource.slice(signatureIndex).trim();

  let depth = 0;
  for (let index = bodyStart; index < botRecipesStorySource.length; index += 1) {
    const char = botRecipesStorySource[index];
    if (char === '{') depth += 1;
    if (char === '}') depth -= 1;
    if (depth === 0) return botRecipesStorySource.slice(signatureIndex, index + 1).trim();
  }

  return botRecipesStorySource.slice(signatureIndex).trim();
}

function recipeCode(functionName: string) {
  return `${recipeSourceImports}

${extractFunctionSource(functionName)}`;
}

function pctCell(value: number) {
  return (
    <span className={value > 0 ? 'text-[var(--rui-success)]' : value < 0 ? 'text-[var(--rui-danger)]' : 'text-white/70'}>{`${value > 0 ? '+' : ''}${value.toFixed(2)}%`}</span>
  );
}

function moneyCell(value: number, digits = 2) {
  return (
    <span className="text-white/80">
      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value)}
    </span>
  );
}

function tradeColumns(): TableColumn<AnyRow>[] {
  return [
    { id: 'time', label: 'Time', kind: 'datetime', width: 172, renderCell: (row) => <span className="text-white/65">{formatDateTime(row.time)}</span> },
    { id: 'bot', label: 'Bot', kind: 'text', width: 150 },
    { id: 'symbol', label: 'Symbol', kind: 'text', width: 140, renderCell: (row) => <span className="font-semibold text-white">{row.symbol}</span> },
    {
      id: 'ongoing',
      label: 'Ongoing',
      kind: 'boolean',
      width: 112,
      renderCell: (row) => <Badge tone={row.ongoing ? 'success' : 'neutral'}>{row.ongoing ? 'Open' : 'Closed'}</Badge>,
    },
    { id: 'side', label: 'Side', kind: 'enum', width: 90, renderCell: (row) => <Badge tone={row.side === 'SELL' ? 'warning' : 'success'}>{row.side}</Badge> },
    { id: 'quantity', label: 'Quantity', kind: 'number', width: 132, renderCell: (row) => Number(row.quantity).toFixed(6) },
    { id: 'usdtOut', label: 'USDT (Out)', kind: 'number', width: 130, renderCell: (row) => moneyCell(row.usdtOut, 6) },
    { id: 'usdtIn', label: 'USDT (In)', kind: 'number', width: 130, renderCell: (row) => moneyCell(row.usdtIn, 6) },
    { id: 'entry', label: 'Entry', kind: 'number', width: 120, renderCell: (row) => moneyCell(row.entry, 6) },
    { id: 'exit', label: 'Exit', kind: 'number', width: 120, renderCell: (row) => moneyCell(row.exit, 6) },
    { id: 'entryDepth', label: 'Entry Depth', kind: 'number', width: 132 },
    { id: 'entryImbalance', label: 'Entry Imb.', kind: 'number', width: 120, renderCell: (row) => Number(row.entryImbalance).toFixed(2) },
    { id: 'entryMicro', label: 'Entry Micro', kind: 'text', width: 130 },
    { id: 'closeDepth', label: 'Close Depth', kind: 'number', width: 132 },
    { id: 'closeImbalance', label: 'Close Imb.', kind: 'number', width: 120, renderCell: (row) => Number(row.closeImbalance).toFixed(2) },
    { id: 'closeMicro', label: 'Close Micro', kind: 'text', width: 130 },
    { id: 'gross', label: 'Gross', kind: 'number', width: 120, renderCell: (row) => <span className={signedTone(row.gross)}>{formatMoney(row.gross)}</span> },
    { id: 'net', label: 'Net', kind: 'number', width: 120, renderCell: (row) => <span className={signedTone(row.net)}>{formatMoney(row.net)}</span> },
    { id: 'fees', label: 'Fees', kind: 'number', width: 120, renderCell: (row) => moneyCell(row.fees, 6) },
    { id: 'hold', label: 'Hold', kind: 'text', width: 90 },
    { id: 'botRun', label: 'Bot run', kind: 'text', width: 260, wrap: true },
  ];
}

function lifecycleColumns(): TableColumn<AnyRow>[] {
  return [
    { id: 'level', label: 'Level', kind: 'enum', width: 110, renderCell: (row) => <span className="font-semibold text-white">{row.level}</span> },
    { id: 'symbol', label: 'Symbol', kind: 'text', width: 130 },
    { id: 'priceUsd', label: 'Price USD', kind: 'number', width: 120, renderCell: (row) => moneyCell(row.priceUsd, 6) },
    { id: 'totalVolume', label: 'Total Volume', kind: 'number', width: 150, renderCell: (row) => moneyCell(row.totalVolume, 2) },
    { id: 'liveTickCurrent', label: 'Live Tick Current', kind: 'number', width: 150, renderCell: (row) => pctCell(row.liveTickCurrent) },
    { id: 'updated', label: 'Updated', kind: 'datetime', width: 172, renderCell: (row) => formatDateTime(row.updated) },
    { id: 'change5m', label: '5m', kind: 'number', width: 90, renderCell: (row) => pctCell(row.change5m) },
    { id: 'volume5m', label: 'Vol 5m', kind: 'number', width: 130, renderCell: (row) => moneyCell(row.volume5m, 2) },
    { id: 'change15m', label: '15m', kind: 'number', width: 90, renderCell: (row) => pctCell(row.change15m) },
    { id: 'volume15m', label: 'Vol 15m', kind: 'number', width: 130, renderCell: (row) => moneyCell(row.volume15m, 2) },
    { id: 'orderBookSource', label: 'OB Source', kind: 'text', width: 140 },
    { id: 'spreadBps', label: 'OB Spread', kind: 'number', width: 110, renderCell: (row) => `${Number(row.spreadBps).toFixed(2)} bps` },
    { id: 'depth', label: 'OB Depth', kind: 'number', width: 110 },
    { id: 'imbalance', label: 'OB Imb.', kind: 'number', width: 110, renderCell: (row) => Number(row.imbalance).toFixed(2) },
    { id: 'top', label: 'OB Top', kind: 'number', width: 100, renderCell: (row) => Number(row.top).toFixed(2) },
    { id: 'micro', label: 'OB Micro', kind: 'text', width: 110 },
    { id: 'bidUsd', label: 'OB Bid USD', kind: 'number', width: 130, renderCell: (row) => moneyCell(row.bidUsd, 2) },
    { id: 'askUsd', label: 'OB Ask USD', kind: 'number', width: 130, renderCell: (row) => moneyCell(row.askUsd, 2) },
  ];
}

function TradeHistoryRecipe(args: RecipeStoryArgs) {
  const [search, setSearch] = useState(args.initialSearch);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [botIds, setBotIds] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [expandedRowIds, setExpandedRowIds] = useState<string[]>(['trade-pixel-closed-1']);
  const [, setTableState] = useState<TableState | null>(null);
  const botOptions = botRows.map((bot) => ({ label: bot.name, value: bot.id, keywords: `${bot.mode} ${bot.status}` }));
  const filteredTrades = useMemo(() => {
    const normalized = search.trim().toLowerCase();
    return tradeRows.filter((row) => {
      const matchesSearch = !normalized || `${row.symbol} ${row.bot} ${row.decision}`.toLowerCase().includes(normalized);
      const matchesBot = !botIds.length || botIds.some((id) => botRows.find((bot) => bot.id === id)?.name === row.bot);
      const time = Date.parse(row.time);
      const matchesFrom = !dateFrom || time >= Date.parse(dateFrom);
      const matchesTo = !dateTo || time <= Date.parse(dateTo);
      return matchesSearch && matchesBot && matchesFrom && matchesTo;
    });
  }, [botIds, dateFrom, dateTo, search]);

  return (
    <Recipe accentKey={args.accentKey}>
      <PageContainer>
        <PageHeader
          title="Trade history"
          description="Review closed trade performance with lifecycle context and exportable filters."
          actions={
            <>
              <Button variant="outline" size="sm" leftIcon={<Icon name="download" className="h-4 w-4" />} onClick={() => args.onExport('trade-history')}>
                Export CSV
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-9 px-0"
                title="Refresh trades"
                aria-label="Refresh trades"
                leftIcon={<Icon name="refresh" className="h-4 w-4" />}
                onClick={() => args.onRefresh('trade-history')}
              >
                <span className="sr-only">Refresh trades</span>
              </Button>
            </>
          }
        />
        {args.showMetricCards ? (
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-5">
            <ChipCard title="Net PnL" value="-$45.69" helper="After $2.516245 fees" tone="danger" />
            <ChipCard title="Gross before fees" value="-$43.18" helper="Across all closed trades" tone="danger" />
            <ChipCard title="Fees paid" value="$2.516245" helper="Exchange fees" tone="neutral" />
            <ChipCard title="Win rate" value="33.33%" helper="Closed winners" tone="warning" />
            <ChipCard title="Closed trades" value="69" helper="All 3 bots" tone="accent" />
          </div>
        ) : null}
        <Card contentClassName="space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-base font-semibold text-white">Trades</div>
              <div className="mt-1 text-sm text-[var(--rui-text-secondary)]">All 3 bots · 69 trades</div>
            </div>
            <Badge tone="neutral">All dates</Badge>
          </div>
          <Table
            tableId="storybook-trade-history-current-ui"
            rows={filteredTrades}
            columns={tradeColumns()}
            rowKey={(row) => row.id}
            searchable={false}
            selection={{
              mode: 'multi',
              selectedKeys,
              onChange: (keys, rows) => {
                setSelectedKeys(keys);
                args.onSelectionChange('trade-history', { selectedKeys: keys, selectedRows: rows.map((row) => row.id) });
              },
            }}
            expandedRowIds={expandedRowIds}
            onExpandedChange={(rowIds) => {
              setExpandedRowIds(rowIds);
              args.onFieldChange('trade-history.expandedRowIds', rowIds);
            }}
            onStateChange={(state) => {
              setTableState(state);
              args.onTableStateChange('trade-history', { sort: state.sort, filters: state.filters, globalSearch: state.globalSearch });
            }}
            renderSelectionActions={({ selectedRows, clearSelection }) => (
              <>
                <Button
                  size="sm"
                  variant="secondary"
                  leftIcon={<Icon name="download" className="h-4 w-4" />}
                  onClick={() => args.onExport('trade-history-selected', selectedRows.length)}
                >
                  Export {selectedRows.length}
                </Button>
                <Button size="sm" variant="ghost" onClick={clearSelection}>
                  Clear
                </Button>
              </>
            )}
            renderHeaderFilters={() => (
              <>
                <Text
                  value={search}
                  onChange={(value) => {
                    setSearch(value);
                    args.onFieldChange('trade-history.search', value);
                  }}
                  placeholder="Search by symbol, bot, or decision source"
                  className="w-full min-w-[280px] xl:w-[360px]"
                />
                <DateTimeSelector
                  type="datetime-local"
                  value={dateFrom}
                  onChange={(value) => {
                    setDateFrom(value);
                    args.onFieldChange('trade-history.dateFrom', value);
                  }}
                  className="w-full sm:w-[210px]"
                />
                <DateTimeSelector
                  type="datetime-local"
                  value={dateTo}
                  onChange={(value) => {
                    setDateTo(value);
                    args.onFieldChange('trade-history.dateTo', value);
                  }}
                  className="w-full sm:w-[210px]"
                />
                <SelectBox
                  mode="multiple"
                  value={botIds}
                  onChange={(value) => {
                    setBotIds(value);
                    args.onFieldChange('trade-history.botIds', value);
                  }}
                  options={botOptions}
                  placeholder="All bots"
                  className="w-full sm:w-[230px]"
                  showClear
                />
                <Button
                  variant="outline"
                  size="sm"
                  leftIcon={<Icon name="download" className="h-4 w-4" />}
                  onClick={() => args.onExport('trade-history-filtered', filteredTrades.length)}
                >
                  Export CSV
                </Button>
              </>
            )}
            renderExpandedContent={(row) => (
              <div className="space-y-4">
                <Banner tone={row.net < 0 ? 'danger' : 'success'} title="Exit decision">
                  {row.decision}
                </Banner>
                <Table
                  tableId={`storybook-trade-lifecycle-${row.id}`}
                  rows={lifecycleRows}
                  columns={lifecycleColumns()}
                  rowKey={(entry) => entry.id}
                  hideColumnControls
                  searchable={false}
                  emptyMessage="No lifecycle rows were stored for this trade."
                />
              </div>
            )}
          />
        </Card>
      </PageContainer>
    </Recipe>
  );
}

function BotOverviewRecipe(args: RecipeStoryArgs) {
  const [activeBotId, setActiveBotId] = useState(botRows.find((bot) => bot.name === args.activeBotName)?.id ?? botRows[0].id);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([botRows[1].id]);
  const [assistantById, setAssistantById] = useState<Record<string, boolean>>(() => Object.fromEntries(botRows.map((bot) => [bot.id, bot.assistantEnabled])));
  const [trainerById, setTrainerById] = useState<Record<string, boolean>>(() => Object.fromEntries(botRows.map((bot) => [bot.id, bot.trainerEnabled])));
  const columns: TableColumn<(typeof botRows)[number]>[] = [
    {
      id: 'name',
      label: 'Bot',
      kind: 'text',
      width: 180,
      renderCell: (bot) => (
        <button
          type="button"
          className="font-semibold text-white hover:text-[var(--rui-accent)]"
          onClick={() => {
            setActiveBotId(bot.id);
            args.onFieldChange('bots.activeBotId', bot.id);
          }}
        >
          {bot.name}
        </button>
      ),
    },
    { id: 'mode', label: 'Mode', kind: 'enum', width: 110, renderCell: (bot) => <Badge tone="neutral">{bot.mode === 'live' ? 'Live' : bot.mode}</Badge> },
    {
      id: 'status',
      label: 'Status',
      kind: 'enum',
      width: 120,
      renderCell: (bot) => <Badge tone={bot.status === 'running' ? 'success' : 'danger'}>{bot.status.toUpperCase()}</Badge>,
    },
    { id: 'allocatedCapital', label: 'Capital', kind: 'number', width: 120, renderCell: (bot) => formatMoney(bot.allocatedCapital) },
    { id: 'configVersion', label: 'Config', kind: 'number', width: 100, renderCell: (bot) => `v${bot.configVersion}` },
    {
      id: 'assistantEnabled',
      label: 'Assistant',
      kind: 'boolean',
      width: 120,
      renderCell: (bot) => (
        <Switch
          checked={assistantById[bot.id]}
          onCheckedChange={(checked) => {
            setAssistantById((current) => ({ ...current, [bot.id]: checked }));
            args.onFieldChange('bots.assistantEnabled', { botId: bot.id, checked });
          }}
          aria-label={`${bot.name} assistant`}
        />
      ),
    },
    {
      id: 'trainerEnabled',
      label: 'Trainer',
      kind: 'boolean',
      width: 120,
      renderCell: (bot) => (
        <Switch
          checked={trainerById[bot.id]}
          onCheckedChange={(checked) => {
            setTrainerById((current) => ({ ...current, [bot.id]: checked }));
            args.onFieldChange('bots.trainerEnabled', { botId: bot.id, checked });
          }}
          aria-label={`${bot.name} trainer`}
        />
      ),
    },
    { id: 'updatedAt', label: 'Updated', kind: 'datetime', width: 172, renderCell: (bot) => <span className="text-white/65">{formatDateTime(bot.updatedAt)}</span> },
    {
      id: 'actions',
      label: 'Actions',
      kind: 'action',
      hideable: false,
      width: 260,
      renderCell: (bot) => (
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              setActiveBotId(bot.id);
              args.onRunAction('open-dashboard', bot.id);
            }}
          >
            Dashboard
          </Button>
          <Button size="sm" variant="ghost" onClick={() => args.onRunAction('open-logs', bot.id)}>
            Logs
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Recipe accentKey={args.accentKey}>
      <PageContainer>
        <PageHeader
          title="Bots"
          description="Create, inspect, and operate configured bots."
          actions={
            <>
              <Button size="sm" leftIcon={<Icon name="plus" className="h-4 w-4" />} onClick={() => args.onRunAction('create-bot')}>
                Create bot
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-9 px-0"
                aria-label="Refresh bots"
                leftIcon={<Icon name="refresh" className="h-4 w-4" />}
                onClick={() => args.onRefresh('bots')}
              >
                <span className="sr-only">Refresh bots</span>
              </Button>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-3">
          {botRows.map((bot) => (
            <ChipCard
              key={bot.id}
              title={bot.name}
              value={formatMoney(bot.allocatedCapital)}
              helper={`Config v${bot.configVersion} · ${bot.status}`}
              selected={bot.id === activeBotId}
              onClick={() => {
                setActiveBotId(bot.id);
                args.onFieldChange('bots.activeBotId', bot.id);
              }}
              trailing={<Badge tone={bot.status === 'running' ? 'success' : 'danger'}>{bot.mode}</Badge>}
            />
          ))}
        </div>
        <Card contentClassName="space-y-4">
          <Table
            tableId="storybook-bots-overview-current-ui"
            rows={botRows}
            columns={columns}
            rowKey={(bot) => bot.id}
            selection={{
              mode: 'multi',
              selectedKeys,
              onChange: (keys, rows) => {
                setSelectedKeys(keys);
                args.onSelectionChange('bots', { selectedKeys: keys, selectedRows: rows.map((bot) => bot.id) });
              },
            }}
            rowClassName={(bot) => (bot.id === activeBotId ? 'bg-[var(--rui-accent-muted)]' : '')}
            renderSelectionActions={({ selectedRows, clearSelection }) => (
              <>
                <Button
                  size="sm"
                  variant="secondary"
                  leftIcon={<Icon name="play" className="h-4 w-4" />}
                  onClick={() =>
                    args.onRunAction(
                      'start-selected-bots',
                      selectedRows.map((bot) => bot.id),
                    )
                  }
                >
                  Start {selectedRows.length}
                </Button>
                <Button size="sm" variant="ghost" onClick={clearSelection}>
                  Clear
                </Button>
              </>
            )}
          />
        </Card>
      </PageContainer>
    </Recipe>
  );
}

function CryptoTrackerRecipe(args: RecipeStoryArgs) {
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>(['sym-pixel']);
  const [, setState] = useState<TableState | null>(null);
  const columns: TableColumn<AnyRow>[] = [
    { id: 'level', label: 'Level', kind: 'enum', width: 110 },
    { id: 'symbol', label: 'Symbol', kind: 'text', width: 130, renderCell: (row) => <span className="font-semibold text-white">{row.symbol}</span> },
    { id: 'priceUsd', label: 'Price USD', kind: 'number', width: 120, renderCell: (row) => moneyCell(row.priceUsd, 6) },
    { id: 'totalVolume', label: 'Total Volume', kind: 'number', width: 150, renderCell: (row) => moneyCell(row.totalVolume) },
    { id: 'liveTickCurrent', label: 'Live Tick Current', kind: 'number', width: 160, renderCell: (row) => pctCell(row.liveTickCurrent) },
    { id: 'updated', label: 'Updated', kind: 'datetime', width: 172, renderCell: (row) => formatDateTime(row.updated) },
    { id: 'change5m', label: '5m', kind: 'number', width: 90, renderCell: (row) => pctCell(row.change5m) },
    { id: 'vol5m', label: 'Vol 5m', kind: 'number', width: 130, renderCell: (row) => moneyCell(row.vol5m) },
    { id: 'change15m', label: '15m', kind: 'number', width: 90, renderCell: (row) => pctCell(row.change15m) },
    { id: 'vol15m', label: 'Vol 15m', kind: 'number', width: 130, renderCell: (row) => moneyCell(row.vol15m) },
    { id: 'change1h', label: '1h', kind: 'number', width: 90, renderCell: (row) => pctCell(row.change1h) },
    { id: 'vol1h', label: 'Vol 1h', kind: 'number', width: 130, renderCell: (row) => moneyCell(row.vol1h) },
    { id: 'change1d', label: '1d', kind: 'number', width: 90, renderCell: (row) => pctCell(row.change1d) },
    { id: 'vol1d', label: 'Vol 1d', kind: 'number', width: 130, renderCell: (row) => moneyCell(row.vol1d) },
    { id: 'obSource', label: 'OB Source', kind: 'text', width: 140 },
    { id: 'spreadBps', label: 'OB Spread', kind: 'number', width: 120, renderCell: (row) => `${row.spreadBps.toFixed(2)} bps` },
    { id: 'depth', label: 'OB Depth', kind: 'number', width: 110 },
    { id: 'imbalance', label: 'OB Imb.', kind: 'number', width: 110, renderCell: (row) => row.imbalance.toFixed(2) },
    { id: 'micro', label: 'OB Micro', kind: 'text', width: 110 },
  ];
  return (
    <Recipe accentKey={args.accentKey}>
      <PageContainer>
        <PageHeader
          title="Symbol analysis"
          description="Wide live table with sticky headers and market windows."
          actions={
            <Button
              variant="ghost"
              size="sm"
              className="w-9 px-0"
              aria-label="Refresh symbol analysis"
              leftIcon={<Icon name="refresh" className="h-4 w-4" />}
              onClick={() => args.onRefresh('symbol-analysis')}
            >
              <span className="sr-only">Refresh symbol analysis</span>
            </Button>
          }
        />
        <Card contentClassName="space-y-4">
          <Table
            tableId="storybook-crypto-tracker-current-ui"
            rows={symbolRows}
            columns={columns}
            rowKey={(row) => row.id}
            selection={{
              mode: 'multi',
              selectedKeys: selectedSymbols,
              onChange: (keys, rows) => {
                setSelectedSymbols(keys);
                args.onSelectionChange('symbol-analysis', { selectedKeys: keys, selectedRows: rows.map((row) => row.symbol) });
              },
            }}
            onStateChange={(nextState) => {
              setState(nextState);
              args.onTableStateChange('symbol-analysis', { sort: nextState.sort, globalSearch: nextState.globalSearch });
            }}
            containerClassName="max-h-[520px]"
            renderHeaderFilters={({ setGlobalSearch, reset }) => (
              <>
                <Text
                  onChange={(value) => {
                    setGlobalSearch(value);
                    args.onFieldChange('symbol-analysis.search', value);
                  }}
                  placeholder="Search symbols"
                  className="w-full sm:w-[260px]"
                />
                <Button size="sm" variant="ghost" onClick={reset}>
                  Reset table
                </Button>
              </>
            )}
          />
        </Card>
      </PageContainer>
    </Recipe>
  );
}

function PatternsRecipe(args: RecipeStoryArgs) {
  const [pnlFilter, setPnlFilter] = useState('all');
  const [expandedRowIds, setExpandedRowIds] = useState<string[]>(['trade-pixel-closed-1']);
  const rows = patternRows.filter((row) => (pnlFilter === 'all' ? true : pnlFilter === 'win' ? row.pnlUsd > 0 : row.pnlUsd < 0));
  return (
    <Recipe accentKey={args.accentKey}>
      <PageContainer>
        <PageHeader
          title="Patterns"
          description="Inspect trade lifecycle context used by model feedback and pattern review."
          actions={
            <Button
              variant="ghost"
              size="sm"
              className="w-9 px-0"
              aria-label="Refresh patterns"
              leftIcon={<Icon name="refresh" className="h-4 w-4" />}
              onClick={() => args.onRefresh('patterns')}
            >
              <span className="sr-only">Refresh patterns</span>
            </Button>
          }
        />
        <Card contentClassName="space-y-4">
          <div className="grid gap-4 md:grid-cols-4">
            <ChipCard title="Patterns" value={rows.length} helper="Filtered rows" />
            <ChipCard title="Winners" value={patternRows.filter((row) => row.pnlUsd > 0).length} helper="Positive net PnL" tone="success" />
            <ChipCard title="Losers" value={patternRows.filter((row) => row.pnlUsd < 0).length} helper="Negative net PnL" tone="danger" />
            <SelectBox
              value={pnlFilter}
              onChange={(value) => {
                const nextValue = value || 'all';
                setPnlFilter(nextValue);
                args.onFieldChange('patterns.pnlFilter', nextValue);
              }}
              options={[
                { label: 'All PnL', value: 'all' },
                { label: 'Winners only', value: 'win' },
                { label: 'Losers only', value: 'loss' },
              ]}
            />
          </div>
          <Table
            tableId="storybook-patterns-current-ui"
            rows={rows}
            columns={[
              { id: 'time', label: 'Trade time', kind: 'datetime', width: 172, renderCell: (row) => formatDateTime(row.time) },
              { id: 'bot', label: 'Bot', kind: 'text', width: 150 },
              { id: 'symbol', label: 'Symbol', kind: 'text', width: 140, renderCell: (row) => <span className="font-semibold text-white">{row.symbol}</span> },
              { id: 'pnlUsd', label: 'Net PnL', kind: 'number', width: 120, renderCell: (row) => <span className={signedTone(row.pnlUsd)}>{formatMoney(row.pnlUsd)}</span> },
              { id: 'configVersion', label: 'Config', kind: 'number', width: 110, renderCell: (row) => `v${row.configVersion}` },
              { id: 'decision', label: 'Decision source', kind: 'text', width: 340, wrap: true },
              {
                id: 'actions',
                label: 'Actions',
                kind: 'action',
                hideable: false,
                width: 260,
                renderCell: () => (
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant="outline" leftIcon={<Icon name="download" className="h-4 w-4" />} onClick={() => args.onExport('pattern-lifecycle-json')}>
                      Lifecycle JSON
                    </Button>
                    <Button size="sm" variant="outline" leftIcon={<Icon name="download" className="h-4 w-4" />} onClick={() => args.onExport('pattern-training-json')}>
                      Training JSON
                    </Button>
                  </div>
                ),
              },
            ]}
            rowKey={(row) => row.tradeId}
            expandedRowIds={expandedRowIds}
            onExpandedChange={(rowIds) => {
              setExpandedRowIds(rowIds);
              args.onFieldChange('patterns.expandedRowIds', rowIds);
            }}
            renderExpandedContent={() => (
              <Table
                tableId="storybook-pattern-lifecycle-nested"
                rows={lifecycleRows}
                columns={lifecycleColumns()}
                rowKey={(entry) => entry.id}
                hideColumnControls
                searchable={false}
              />
            )}
          />
        </Card>
      </PageContainer>
    </Recipe>
  );
}

function WalletsRecipe(args: RecipeStoryArgs) {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [botId, setBotId] = useState('');
  const botOptions = [{ label: 'All bots', value: '' }, ...botRows.map((bot) => ({ label: bot.name, value: bot.id }))];
  return (
    <Recipe accentKey={args.accentKey}>
      <PageContainer>
        <PageHeader title="Wallets" description="Realtime balances and persisted account snapshots." />
        {args.showMetricCards ? (
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            <ChipCard title="Active adapter" value="BINANCE" helper="Realtime wallet feed" />
            <ChipCard title="Realtime assets" value={walletRows.length} helper="Assets with positive balance" />
            <ChipCard title="Actual exchange balance" value="$181.03" helper="Full spot wallet" tone="neutral" />
            <ChipCard title="Bots book value" value="$196.01" helper="Allocated $3,200.00" tone="danger" />
            <ChipCard title="Left to trade" value="$181.03" helper="Free USDT" />
            <ChipCard title="Transaction rows" value={walletHistoryRows.length} helper="Filtered snapshots" />
          </div>
        ) : null}
        <GridLayout
          allowMovement={false}
          allowResize={false}
          panels={[
            {
              id: 'wallet-assets',
              title: 'Binance spot account',
              description: 'Updated from the live wallet feed.',
              defaultWidth: 'half',
              content: (
                <Table
                  tableId="storybook-wallet-assets"
                  rows={walletRows}
                  columns={[
                    { id: 'asset', label: 'Asset', kind: 'text', width: 100, renderCell: (row) => <span className="font-semibold text-white">{row.asset}</span> },
                    { id: 'free', label: 'Free', kind: 'number', width: 120 },
                    { id: 'locked', label: 'Locked', kind: 'number', width: 120 },
                    { id: 'total', label: 'Total', kind: 'number', width: 120 },
                    { id: 'valueUsdt', label: 'USDT value', kind: 'number', width: 130, renderCell: (row) => moneyCell(row.valueUsdt, 6) },
                  ]}
                  rowKey={(row) => row.id}
                />
              ),
            },
            {
              id: 'wallet-history',
              title: 'Transaction history',
              description: 'Persisted wallet snapshots across refreshes and bot runs.',
              defaultWidth: 'half',
              action: (
                <div className="flex flex-wrap items-center gap-2">
                  <DateTimeSelector
                    type="date"
                    value={dateFrom}
                    onChange={(value) => {
                      setDateFrom(value);
                      args.onFieldChange('wallets.dateFrom', value);
                    }}
                    className="w-[160px]"
                  />
                  <DateTimeSelector
                    type="date"
                    value={dateTo}
                    onChange={(value) => {
                      setDateTo(value);
                      args.onFieldChange('wallets.dateTo', value);
                    }}
                    className="w-[160px]"
                  />
                  <SelectBox
                    value={botId}
                    onChange={(value) => {
                      const nextValue = value || '';
                      setBotId(nextValue);
                      args.onFieldChange('wallets.botId', nextValue);
                    }}
                    options={botOptions}
                    className="w-[220px]"
                  />
                </div>
              ),
              content: (
                <Table
                  tableId="storybook-wallet-history"
                  rows={walletHistoryRows}
                  columns={[
                    { id: 'createdAt', label: 'Recorded at', kind: 'datetime', width: 172, renderCell: (row) => formatDateTime(row.createdAt) },
                    { id: 'source', label: 'Source', kind: 'enum', width: 120 },
                    { id: 'botName', label: 'Bot', kind: 'text', width: 160 },
                    { id: 'runLabel', label: 'Run', kind: 'text', width: 130 },
                    { id: 'accountLabel', label: 'Account', kind: 'text', width: 160 },
                    { id: 'totalValueUsdt', label: 'Account total', kind: 'number', width: 140, renderCell: (row) => moneyCell(row.totalValueUsdt, 4) },
                    { id: 'heldAssets', label: 'Held assets', kind: 'text', width: 320, wrap: true },
                    { id: 'context', label: 'Context', kind: 'text', width: 240, wrap: true },
                  ]}
                  rowKey={(row) => row.id}
                />
              ),
            },
          ]}
        />
      </PageContainer>
    </Recipe>
  );
}

function BotConfigRecipe(args: RecipeStoryArgs) {
  const [active, setActive] = useState('basic');
  const [name, setName] = useState('CC Bot');
  const [capital, setCapital] = useState<number | null>(1000);
  const [exchange, setExchange] = useState('binance');
  const [suspendBehavior, setSuspendBehavior] = useState('stop');
  const [autoSave, setAutoSave] = useState(false);
  const [notes, setNotes] = useState('Use conservative sizing while reviewing imported config.');
  const items: SidebarItem[] = [
    { id: 'basic', label: 'Basic settings', icon: <Icon name="settings" className="h-4 w-4" />, description: 'Identity and exchange' },
    { id: 'buy', label: 'Buy settings', icon: <Icon name="trendup" className="h-4 w-4" />, description: 'Entry and sizing' },
    { id: 'sell', label: 'Sell settings', icon: <Icon name="trenddown" className="h-4 w-4" />, description: 'Exit behavior' },
    { id: 'notifications', label: 'Notifications', icon: <Icon name="bell" className="h-4 w-4" />, description: 'Delivery channels' },
  ];
  const [layout, setLayout] = useState<GridPanelState[]>([
    { id: 'identity', order: 0, width: 'full', collapsed: false, fullscreen: false },
    { id: 'safety', order: 1, width: 'half', collapsed: false, fullscreen: false },
    { id: 'review', order: 2, width: 'half', collapsed: false, fullscreen: false },
  ]);
  return (
    <Recipe accentKey={args.accentKey}>
      <Page
        title="Bot configuration"
        description="Core bot identity, controls, presets, import/export, and recent config audit history."
        sidebar={
          <Sidebar
            items={items}
            activeId={active}
            onSelect={(nextActive) => {
              setActive(nextActive);
              args.onFieldChange('bot-config.activeSection', nextActive);
            }}
          />
        }
        actions={
          <>
            <Button variant="outline" size="sm" leftIcon={<Icon name="download" className="h-4 w-4" />} onClick={() => args.onExport('bot-config')}>
              Export config
            </Button>
            <Button
              size="sm"
              leftIcon={<Icon name="save" className="h-4 w-4" />}
              onClick={() => args.onRunAction('save-config', { name, capital, exchange, suspendBehavior, autoSave })}
            >
              Save config
            </Button>
          </>
        }
        className="min-h-[760px]"
        contentClassName="space-y-4"
      >
        <Banner tone="info" title="Core bot identity">
          Core bot identity, simplified controls, presets, import/export, and recent config audit history. Active bot: CC Bot · Capital $1,000.00
        </Banner>
        <Banner
          title="Import review"
          accentColor="#f0b44f"
          backgroundColor="rgba(240,180,79,0.10)"
          borderColor="rgba(240,180,79,0.30)"
          textColor="#fff7df"
          icon={<Icon name="alert" className="h-4 w-4" />}
        >
          Import never auto-saves. Review the draft, then use Save config once you are satisfied.
        </Banner>
        <GridLayout
          layout={layout}
          onLayoutChange={(nextLayout) => {
            setLayout(nextLayout);
            args.onFieldChange('bot-config.layout', nextLayout);
          }}
          panels={[
            {
              id: 'identity',
              title: 'Core bot identity',
              description: 'Reusable field examples used by bot config forms.',
              defaultWidth: 'full',
              action: (
                <Button
                  size="sm"
                  variant="ghost"
                  leftIcon={<Icon name="check" className="h-4 w-4" />}
                  onClick={() => args.onRunAction('validate-config', { name, capital, exchange })}
                >
                  Validate config
                </Button>
              ),
              content: (
                <div className="grid gap-4 md:grid-cols-2">
                  <Text
                    label="Bot name"
                    value={name}
                    onChange={(value) => {
                      setName(value);
                      args.onFieldChange('bot-config.name', value);
                    }}
                    description="Displayed in navigation, tables, and audit history."
                  />
                  <NumberInput
                    label="Capital"
                    value={capital}
                    onChange={(value) => {
                      setCapital(value);
                      args.onFieldChange('bot-config.capital', value);
                    }}
                    prefix="$"
                    description="Allocated capital for this bot."
                  />
                  <SelectBox
                    label="Exchange"
                    value={exchange}
                    onChange={(value) => {
                      const nextValue = value || 'binance';
                      setExchange(nextValue);
                      args.onFieldChange('bot-config.exchange', nextValue);
                    }}
                    options={[
                      { label: 'Binance', value: 'binance' },
                      { label: 'Simulator', value: 'simulator' },
                    ]}
                  />
                  <TextArea
                    label="Operator note"
                    value={notes}
                    onChange={(value) => {
                      setNotes(value);
                      args.onFieldChange('bot-config.notes', value);
                    }}
                    rows={4}
                  />
                </div>
              ),
            },
            {
              id: 'safety',
              title: 'Runtime safety',
              description: 'RadioCard and ToggleCard interactions emit controlled props.',
              defaultWidth: 'half',
              content: (
                <div className="space-y-3">
                  <RadioCard
                    checked={suspendBehavior === 'stop'}
                    onCheckedChange={(checked) => {
                      if (!checked) return;
                      setSuspendBehavior('stop');
                      args.onFieldChange('bot-config.suspendBehavior', 'stop');
                    }}
                    name="suspend-behavior"
                    value="stop"
                    title="Stop bots on system suspend"
                    description="Pause trading when the host is going to sleep."
                    helper="Matches the settings screen on/off card behavior."
                  />
                  <RadioCard
                    checked={suspendBehavior === 'keep'}
                    onCheckedChange={(checked) => {
                      if (!checked) return;
                      setSuspendBehavior('keep');
                      args.onFieldChange('bot-config.suspendBehavior', 'keep');
                    }}
                    name="suspend-behavior"
                    value="keep"
                    title="Keep runtime state"
                    description="Leave runtime flags untouched for controlled environments."
                  />
                  <ToggleCard
                    checked={autoSave}
                    onCheckedChange={(checked) => {
                      setAutoSave(checked);
                      args.onFieldChange('bot-config.autoSave', checked);
                    }}
                    title="Auto-save draft locally"
                    description="Storybook-only example of a controlled ToggleCard."
                  />
                </div>
              ),
            },
            {
              id: 'review',
              title: 'Execution preview',
              description: 'Panel action slots stay app-defined.',
              defaultWidth: 'half',
              action: (
                <Button size="sm" variant="outline" leftIcon={<Icon name="eye" className="h-4 w-4" />} onClick={() => args.onRunAction('execution-preview')}>
                  Preview
                </Button>
              ),
              content: (
                <Logger
                  entries={logEntries.slice(0, 3)}
                  categories={[
                    { label: 'All categories', value: 'ALL' },
                    { label: 'Runtime', value: 'runtime' },
                    { label: 'Config', value: 'config' },
                  ]}
                  heightClassName="max-h-[260px]"
                />
              ),
            },
          ]}
        />
      </Page>
    </Recipe>
  );
}

function ComponentFieldRecipe(args: RecipeStoryArgs) {
  const [accent, setAccent] = useState<AccentKey>(args.accentKey);
  const [text, setText] = useState('CC Bot');
  const [amount, setAmount] = useState<number | null>(1000);
  const [date, setDate] = useState('2026-04-19T16:34');
  const [selected, setSelected] = useState<string[]>(['bot_lvhxur7qmnqj8yzt']);
  const [enabled, setEnabled] = useState(true);
  return (
    <Recipe accentKey={args.accentKey}>
      <AccentProvider accentKey={accent}>
        <PageContainer>
          <div className="grid gap-4 lg:grid-cols-[260px_minmax(0,1fr)]">
            <Card contentClassName="space-y-3">
              <SelectBox
                label="Accent context"
                value={accent}
                onChange={(value) => {
                  const nextValue = (value || 'default') as AccentKey;
                  setAccent(nextValue);
                  args.onFieldChange('component-gallery.accentKey', nextValue);
                }}
                options={[
                  { label: 'Default', value: 'default' },
                  { label: 'Teal', value: 'teal' },
                  { label: 'Warning', value: 'warning' },
                  { label: 'Danger', value: 'danger' },
                  { label: 'Neutral', value: 'neutral' },
                  { label: 'TailAdmin', value: 'tailadmin' },
                  { label: 'Light Blue', value: 'light-blue' },
                  { label: 'Light Success', value: 'light-success' },
                  { label: 'Light Warning', value: 'light-warning' },
                  { label: 'Light Danger', value: 'light-danger' },
                  { label: 'Light Neutral', value: 'light-neutral' },
                ]}
              />
              <Banner tone="info">Children pick colors from AccentProvider unless an accentKey prop overrides it.</Banner>
            </Card>
            <div className="space-y-4">
              <Card contentClassName="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                <Button leftIcon={<Icon name="refresh" className="h-4 w-4" />} onClick={() => args.onRefresh('component-gallery')}>
                  Refresh
                </Button>
                <Button
                  variant="ghost"
                  className="w-9 px-0"
                  aria-label="Icon-only refresh"
                  leftIcon={<Icon name="refresh" className="h-4 w-4" />}
                  onClick={() => args.onRefresh('component-gallery-icon')}
                >
                  <span className="sr-only">Icon-only refresh</span>
                </Button>
                <Switch
                  checked={enabled}
                  onCheckedChange={(checked) => {
                    setEnabled(checked);
                    args.onFieldChange('component-gallery.enabled', checked);
                  }}
                  label="Runtime switch"
                />
                <Badge tone={enabled ? 'success' : 'warning'}>{enabled ? 'Enabled' : 'Paused'}</Badge>
              </Card>
              <Card contentClassName="grid gap-4 md:grid-cols-2">
                <Text
                  label="Text"
                  value={text}
                  onChange={(value) => {
                    setText(value);
                    args.onFieldChange('component-gallery.text', value);
                  }}
                  description="Controlled text input."
                />
                <NumberInput
                  label="Number"
                  value={amount}
                  onChange={(value) => {
                    setAmount(value);
                    args.onFieldChange('component-gallery.amount', value);
                  }}
                  prefix="$"
                />
                <DateTimeSelector
                  label="Date time selector"
                  type="datetime-local"
                  value={date}
                  onChange={(value) => {
                    setDate(value);
                    args.onFieldChange('component-gallery.date', value);
                  }}
                />
                <SelectBox
                  mode="multiple"
                  label="Multi select"
                  value={selected}
                  onChange={(value) => {
                    setSelected(value);
                    args.onFieldChange('component-gallery.selected', value);
                  }}
                  options={botRows.map((bot) => ({ label: bot.name, value: bot.id }))}
                  showClear
                />
              </Card>
              <Card contentClassName="grid gap-4 md:grid-cols-3">
                <ChipCard title="ChipCard" value="$1,000.00" helper="Wallet and overview metrics" />
                <RadioCard
                  checked={enabled}
                  onCheckedChange={(checked) => {
                    setEnabled(checked);
                    args.onFieldChange('component-gallery.radioCard', checked);
                  }}
                  title="RadioCard"
                  description="Card-like choice control"
                  toggleable
                />
                <ToggleCard
                  checked={enabled}
                  onCheckedChange={(checked) => {
                    setEnabled(checked);
                    args.onFieldChange('component-gallery.toggleCard', checked);
                  }}
                  title="ToggleCard"
                  description="Switch embedded in a card"
                />
              </Card>
            </div>
          </div>
        </PageContainer>
      </AccentProvider>
    </Recipe>
  );
}

function ScreenGalleryRecipe(args: RecipeStoryArgs) {
  const [logSearch, setLogSearch] = useState(args.initialSearch);
  const [backtestFrom, setBacktestFrom] = useState('2026-04-01');
  const [backtestTo, setBacktestTo] = useState('2026-04-19');
  const [riskLimit, setRiskLimit] = useState<number | null>(0.7);
  return (
    <Recipe accentKey={args.accentKey}>
      <PageContainer>
        <GridLayout
          panels={[
            {
              id: 'dashboard',
              title: 'Dashboard',
              description: 'Metrics, action buttons, and compact tables.',
              defaultWidth: 'full',
              action: (
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-9 px-0"
                  aria-label="Refresh dashboard"
                  leftIcon={<Icon name="refresh" className="h-4 w-4" />}
                  onClick={() => args.onRefresh('dashboard')}
                >
                  <span className="sr-only">Refresh dashboard</span>
                </Button>
              ),
              content: (
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-4">
                    <ChipCard title="Active bot" value="CC Bot" helper="Stopped" />
                    <ChipCard title="Quote balance" value="$181.03" helper="USDT free" tone="neutral" />
                    <ChipCard title="Open positions" value="0" helper="No active holdings" />
                    <ChipCard title="Net PnL" value="-$45.69" helper="Closed trades" tone="danger" />
                  </div>
                  <Table tableId="storybook-dashboard-positions" rows={tradeRows.slice(0, 3)} columns={tradeColumns().slice(1, 9)} rowKey={(row) => row.id} hideColumnControls />
                </div>
              ),
            },
            {
              id: 'settings',
              title: 'Settings',
              description: 'Radio buttons and toggles used by app-level preferences.',
              defaultWidth: 'half',
              content: (
                <div className="space-y-3">
                  <ToggleCard defaultChecked title="Enable debug stream" description="Keep the event stream visible in the UI." />
                  <RadioCard defaultChecked title="Stop bots on system suspend" description="Card selection works through controlled checked/onCheckedChange props." />
                </div>
              ),
            },
            {
              id: 'logs',
              title: 'Live logs',
              description: 'Logger filters, payload expansion, and clear action are prop-driven.',
              defaultWidth: 'half',
              action: (
                <Text
                  value={logSearch}
                  onChange={(value) => {
                    setLogSearch(value);
                    args.onFieldChange('screen-gallery.logSearch', value);
                  }}
                  placeholder="Search logs"
                  className="w-[220px]"
                />
              ),
              content: (
                <Logger
                  entries={logEntries}
                  search={logSearch}
                  onSearchChange={(value) => {
                    setLogSearch(value);
                    args.onFieldChange('screen-gallery.loggerSearch', value);
                  }}
                  categories={[
                    { label: 'All categories', value: 'ALL' },
                    { label: 'Runtime', value: 'runtime' },
                    { label: 'Market', value: 'market' },
                    { label: 'Config', value: 'config' },
                    { label: 'API', value: 'api' },
                  ]}
                  heightClassName="max-h-[360px]"
                />
              ),
            },
            {
              id: 'backtesting',
              title: 'Backtesting',
              description: 'Date fields, numeric settings, and results table.',
              defaultWidth: 'full',
              action: (
                <div className="flex flex-wrap gap-2">
                  <DateTimeSelector
                    type="date"
                    value={backtestFrom}
                    onChange={(value) => {
                      setBacktestFrom(value);
                      args.onFieldChange('screen-gallery.backtestFrom', value);
                    }}
                    className="w-[160px]"
                  />
                  <DateTimeSelector
                    type="date"
                    value={backtestTo}
                    onChange={(value) => {
                      setBacktestTo(value);
                      args.onFieldChange('screen-gallery.backtestTo', value);
                    }}
                    className="w-[160px]"
                  />
                  <NumberInput
                    value={riskLimit}
                    onChange={(value) => {
                      setRiskLimit(value);
                      args.onFieldChange('screen-gallery.riskLimit', value);
                    }}
                    suffix="%"
                    className="w-[120px]"
                  />
                  <Button size="sm" leftIcon={<Icon name="play" className="h-4 w-4" />} onClick={() => args.onRunAction('run-backtest', { backtestFrom, backtestTo, riskLimit })}>
                    Run
                  </Button>
                </div>
              ),
              content: <Table tableId="storybook-backtesting-results" rows={tradeRows} columns={tradeColumns().slice(0, 10)} rowKey={(row) => row.id} />,
            },
          ]}
        />
      </PageContainer>
    </Recipe>
  );
}

function AdditionalScreensRecipe(args: RecipeStoryArgs) {
  const [newBotName, setNewBotName] = useState('Momentum Review Bot');
  const [strategy, setStrategy] = useState('spot_bot');
  const [quoteAsset, setQuoteAsset] = useState('USDT');
  const [workspaceTab, setWorkspaceTab] = useState('runtime');
  const [symbol, setSymbol] = useState('PIXEL - USDT');
  const [trayEnabled, setTrayEnabled] = useState(true);
  const chartRows = symbolRows.map((row) => ({ ...row, selected: row.symbol === symbol }));
  return (
    <Recipe accentKey={args.accentKey}>
      <PageContainer>
        <GridLayout
          panels={[
            {
              id: 'create-bot',
              title: 'Create bot',
              description: 'BotCreateScreen-style form using fields and cards.',
              defaultWidth: 'half',
              content: (
                <div className="space-y-4">
                  <Text
                    label="Bot name"
                    value={newBotName}
                    onChange={(value) => {
                      setNewBotName(value);
                      args.onFieldChange('additional.createBot.name', value);
                    }}
                  />
                  <div className="grid gap-3 md:grid-cols-2">
                    <SelectBox
                      label="Strategy"
                      value={strategy}
                      onChange={(value) => {
                        const nextValue = value || 'spot_bot';
                        setStrategy(nextValue);
                        args.onFieldChange('additional.createBot.strategy', nextValue);
                      }}
                      options={[
                        { label: 'Spot bot', value: 'spot_bot' },
                        { label: 'Scanner review', value: 'scanner_review' },
                      ]}
                    />
                    <SelectBox
                      label="Quote asset"
                      value={quoteAsset}
                      onChange={(value) => {
                        const nextValue = value || 'USDT';
                        setQuoteAsset(nextValue);
                        args.onFieldChange('additional.createBot.quoteAsset', nextValue);
                      }}
                      options={[
                        { label: 'USDT', value: 'USDT' },
                        { label: 'BTC', value: 'BTC' },
                      ]}
                    />
                  </div>
                  <Banner tone="info">Create flows should pass app-side defaults into @react/ui fields; generated strategy metadata stays in the bot app.</Banner>
                  <Button leftIcon={<Icon name="plus" className="h-4 w-4" />} onClick={() => args.onRunAction('create-draft-bot', { newBotName, strategy, quoteAsset })}>
                    Create draft bot
                  </Button>
                </div>
              ),
            },
            {
              id: 'workspace',
              title: 'Bot workspace',
              description: 'Workspace tabs, runtime controls, and output panels.',
              defaultWidth: 'half',
              content: (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {[
                      ['runtime', 'Runtime'],
                      ['positions', 'Positions'],
                      ['logs', 'Logs'],
                    ].map(([id, label]) => (
                      <Button
                        key={id}
                        size="sm"
                        variant={workspaceTab === id ? 'secondary' : 'ghost'}
                        onClick={() => {
                          setWorkspaceTab(id);
                          args.onFieldChange('additional.workspaceTab', id);
                        }}
                      >
                        {label}
                      </Button>
                    ))}
                  </div>
                  <div className="grid gap-3 md:grid-cols-3">
                    <ChipCard title="Status" value="Stopped" helper="Manual control" tone="danger" />
                    <ChipCard title="Config" value="v13" helper="Current draft" />
                    <ChipCard title="Capital left" value="$55.31" helper="CC Bot" tone="warning" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" leftIcon={<Icon name="play" className="h-4 w-4" />} onClick={() => args.onRunAction('workspace-start')}>
                      Start
                    </Button>
                    <Button size="sm" variant="outline" leftIcon={<Icon name="stop" className="h-4 w-4" />} onClick={() => args.onRunAction('workspace-stop')}>
                      Stop
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-9 px-0"
                      aria-label="Refresh workspace"
                      leftIcon={<Icon name="refresh" className="h-4 w-4" />}
                      onClick={() => args.onRefresh('workspace')}
                    >
                      <span className="sr-only">Refresh workspace</span>
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              id: 'charts-overview',
              title: 'Charts overview',
              description: 'Tracker toolbar plus selectable symbols.',
              defaultWidth: 'full',
              content: (
                <div className="grid gap-4 xl:grid-cols-[320px_minmax(0,1fr)]">
                  <Card contentClassName="space-y-3">
                    <SelectBox
                      label="Focused symbol"
                      value={symbol}
                      onChange={(value) => {
                        const nextValue = value || 'PIXEL - USDT';
                        setSymbol(nextValue);
                        args.onFieldChange('additional.focusedSymbol', nextValue);
                      }}
                      options={symbolRows.map((row) => ({ label: row.symbol, value: row.symbol }))}
                    />
                    <ToggleCard
                      checked={trayEnabled}
                      onCheckedChange={(checked) => {
                        setTrayEnabled(checked);
                        args.onFieldChange('additional.liveTrackerUpdates', checked);
                      }}
                      title="Live tracker updates"
                      description="Example of toolbar toggle state."
                    />
                    <Banner tone="warning">Chart canvases and market-data adapters stay in the bot app; @react/ui provides the surrounding controls.</Banner>
                  </Card>
                  <Table
                    tableId="storybook-chart-overview"
                    rows={chartRows}
                    columns={[
                      { id: 'symbol', label: 'Symbol', kind: 'text', width: 140, renderCell: (row) => <span className="font-semibold text-white">{row.symbol}</span> },
                      { id: 'priceUsd', label: 'Price', kind: 'number', width: 120, renderCell: (row) => moneyCell(row.priceUsd, 6) },
                      { id: 'liveTickCurrent', label: 'Live tick', kind: 'number', width: 120, renderCell: (row) => pctCell(row.liveTickCurrent) },
                      { id: 'change5m', label: '5m', kind: 'number', width: 90, renderCell: (row) => pctCell(row.change5m) },
                      { id: 'change1h', label: '1h', kind: 'number', width: 90, renderCell: (row) => pctCell(row.change1h) },
                      { id: 'depth', label: 'Depth', kind: 'number', width: 100 },
                      { id: 'imbalance', label: 'Imbalance', kind: 'number', width: 110, renderCell: (row) => row.imbalance.toFixed(2) },
                    ]}
                    rowKey={(row) => row.id}
                    rowClassName={(row) => (row.selected ? 'bg-[var(--rui-accent-muted)]' : '')}
                    hideColumnControls
                  />
                </div>
              ),
            },
            {
              id: 'chart-detail',
              title: 'Chart detail',
              description: 'Market info card, order book summary, and action modal controls.',
              defaultWidth: 'half',
              content: (
                <div className="space-y-4">
                  <div className="grid gap-3 md:grid-cols-2">
                    <ChipCard title="Symbol" value={symbol} helper="Focused chart" />
                    <ChipCard title="Order book spread" value="12.43 bps" helper="tracker_bundle" tone="neutral" />
                    <ChipCard title="Depth pressure" value="80.9" helper="Entry context" />
                    <ChipCard title="Micro offset" value="4.72 bps" helper="Top-book signal" />
                  </div>
                  <div className="h-[220px] rounded-[10px] border border-white/8 bg-[linear-gradient(180deg,rgba(25,199,220,0.12),rgba(8,13,35,0.92))] p-4">
                    <div className="text-sm font-semibold text-white">Chart canvas slot</div>
                    <div className="mt-2 text-sm text-[var(--rui-text-secondary)]">The chart renderer remains app-owned; use Card, Button, Table, and Banner around it.</div>
                  </div>
                </div>
              ),
            },
            {
              id: 'tray-popup',
              title: 'Tray popup',
              description: 'Small-window route with compact status cards and action buttons.',
              defaultWidth: 'half',
              content: (
                <div className="max-w-[420px] space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <ChipCard title="Active bot" value="CC Bot" helper="Stopped" />
                    <ChipCard title="Net PnL" value="-$45.69" helper="69 trades" tone="danger" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" onClick={() => args.onRunAction('tray-open-dashboard')}>
                      Open dashboard
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-9 px-0"
                      aria-label="Refresh tray"
                      leftIcon={<Icon name="refresh" className="h-4 w-4" />}
                      onClick={() => args.onRefresh('tray')}
                    >
                      <span className="sr-only">Refresh tray</span>
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              id: 'placeholder',
              title: 'Feature placeholder',
              description: 'Simple route shell for upcoming bot screens.',
              defaultWidth: 'half',
              content: (
                <Banner
                  tone="neutral"
                  icon={<Icon name="sparkle" className="h-4 w-4" />}
                  actions={
                    <Button size="sm" onClick={() => args.onRunAction('placeholder-open-docs')}>
                      Open docs
                    </Button>
                  }
                >
                  This placeholder uses package-level Banner and Button only; route copy and navigation decisions stay inside the bot app.
                </Banner>
              ),
            },
          ]}
        />
      </PageContainer>
    </Recipe>
  );
}

export const ComponentsFieldsElementsLayouts: Story = {
  parameters: sourceParameters(recipeCode('ComponentFieldRecipe'), 'Use Controls to change accent and initial values; use Actions to inspect field and button events.'),
  render: (args) => <ComponentFieldRecipe {...args} />,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Refresh' }));
    await userEvent.clear(canvas.getByLabelText('Text'));
    await userEvent.type(canvas.getByLabelText('Text'), 'Storybook controlled value');
    await expect(args.onRefresh).toHaveBeenCalled();
    await expect(args.onFieldChange).toHaveBeenCalled();
  },
};

export const BotOverviewScreen: Story = {
  parameters: sourceParameters(recipeCode('BotOverviewRecipe'), 'Use the Actions panel for refresh, row selection, switch toggles, and bot actions.'),
  render: (args) => <BotOverviewRecipe {...args} />,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /refresh bots/i }));
    await userEvent.click(canvas.getAllByRole('checkbox', { name: /select row/i })[1]);
    await expect(args.onRefresh).toHaveBeenCalled();
    await expect(args.onSelectionChange).toHaveBeenCalled();
  },
};

export const TradeHistoryScreen: Story = {
  parameters: sourceParameters(
    recipeCode('TradeHistoryRecipe'),
    'Docs Source provides the copyable table recipe; Actions records filter, expansion, selection, refresh, and export events.',
  ),
  render: (args) => <TradeHistoryRecipe {...args} />,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByPlaceholderText(/search by symbol/i), 'PIXEL');
    await userEvent.click(canvas.getByRole('button', { name: /refresh trades/i }));
    await expect(args.onFieldChange).toHaveBeenCalled();
    await expect(args.onRefresh).toHaveBeenCalled();
  },
};

export const CryptoTrackerTable: Story = {
  parameters: sourceParameters(recipeCode('CryptoTrackerRecipe'), 'Wide-table behavior is documented through Source, Controls, Actions, and the table itself.'),
  render: (args) => <CryptoTrackerRecipe {...args} />,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByPlaceholderText(/search symbols/i), 'PIXEL');
    await expect(args.onFieldChange).toHaveBeenCalled();
  },
};

export const PatternsScreen: Story = {
  parameters: sourceParameters(recipeCode('PatternsRecipe'), 'Use Actions to inspect PnL filter changes, expanded rows, JSON export buttons, and refresh.'),
  render: (args) => <PatternsRecipe {...args} />,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /refresh patterns/i }));
    await expect(args.onRefresh).toHaveBeenCalled();
  },
};

export const WalletsScreen: Story = {
  parameters: sourceParameters(recipeCode('WalletsRecipe'), 'Wallet date and bot filters are native controls in the canvas; value changes are reported through Actions.'),
  render: (args) => <WalletsRecipe {...args} />,
};

export const BotConfigScreen: Story = {
  args: {
    accentKey: 'teal',
  },

  parameters: sourceParameters(recipeCode('BotConfigRecipe'), 'The config screen recipe uses Storybook Controls for story args and Actions for every field/button state change.'),
  render: (args) => <BotConfigRecipe {...args} />,

  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /validate config/i }));
    await expect(args.onRunAction).toHaveBeenCalled();
  },
};

export const ScreenGallery: Story = {
  parameters: sourceParameters(recipeCode('ScreenGalleryRecipe'), 'Route-level examples for dashboard, settings, logs, and backtesting. Events are reported through Actions.'),
  render: (args) => <ScreenGalleryRecipe {...args} />,
};

export const AdditionalBotScreens: Story = {
  parameters: sourceParameters(recipeCode('AdditionalScreensRecipe'), 'Additional route recipes use Storybook docs source and Actions instead of custom in-canvas prop displays.'),
  render: (args) => <AdditionalScreensRecipe {...args} />,
};
