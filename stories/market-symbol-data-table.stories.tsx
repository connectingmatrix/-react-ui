import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Button, DateTimeSelector, Icon, SelectBox, Text, Tooltip } from '../src/index';
import { docsSource } from './story-source';
import storySource from './market-symbol-data-table.stories.tsx?raw';

const meta: Meta = {
  title: 'React UI/Bot Recipes/Market Symbol Data Table',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const ROW_HEIGHT = 70;
const SYMBOL_ANALYSIS_WINDOWS = ['5m', '15m', '30m', '1h', '2h', '4h', '6h', '12h', '15h', '1d', '3d', '5d', '7d'] as const;
type SymbolAnalysisWindow = (typeof SYMBOL_ANALYSIS_WINDOWS)[number];
type Decision = 'Accepted' | 'Rejected' | 'Pending' | 'Watch';
type ColumnGroup = 'base' | 'price' | 'volume' | 'historic' | 'live' | 'combined';
type RenderKind = 'symbol' | 'usd' | 'compact' | 'pct' | 'datetime' | 'integer' | 'score' | 'pnl' | 'bps' | 'decision' | 'duration';

interface SymbolAnalysisRow {
  symbol: string;
  quoteAsset: 'USDT';
  priceUsd: number;
  liveTickCurrentPct: number | null;
  shortTermProfitPct: number | null;
  overHoursProfitPct: number | null;
  longTermProfitPct: number | null;
  spreadBps: number | null;
  orderBookImbalance: number | null;
  topLevelImbalance: number | null;
  microPriceOffsetBps: number | null;
  bidDepthNotionalUsd: number | null;
  askDepthNotionalUsd: number | null;
  depthPressureScore: number | null;
  livePerformanceScore: number | null;
  livePerformanceDecision: Decision;
  livePerformanceReasons: string[];
  totalScore: number | null;
  totalDecision: Decision;
  totalDecisionReasons: string[];
  probableWatchTimeMinutes: number | null;
  priceChangePctByWindow: Record<SymbolAnalysisWindow, number | null>;
  quoteVolumeByWindow: Record<SymbolAnalysisWindow, number | null>;
  lastUpdatedAt: string;
  profitCount: number;
  profitTradeSizeUsd: number;
  lossCount: number;
  lossTradeSizeUsd: number;
  grossProfitUsd: number;
  grossLossUsd: number;
  netPnlUsd: number;
  symbolScore: number;
  averageProfitHoldMinutes: number | null;
  averageLossHoldMinutes: number | null;
  combinedScore: number | null;
  combinedDecision: Decision;
  combinedDecisionReasons: string[];
}

interface SymbolAnalysisColumnConfig {
  id: string;
  label: string;
  group: ColumnGroup;
  kind: 'text' | 'number' | 'datetime' | 'action';
  width: number;
  sortable?: boolean;
  filterable?: boolean;
  hideable?: boolean;
  visibleByDefault?: boolean;
  renderKind: RenderKind;
  description: string;
}

interface SymbolAnalysisSelectionColumn {
  id: '__selection__';
  label: 'Select';
  group: 'base';
  kind: 'action';
  width: number;
  sortable: false;
  filterable: false;
  hideable: false;
  visibleByDefault: true;
  renderKind: 'selection';
  description: string;
}

type VisibleColumn = SymbolAnalysisColumnConfig | SymbolAnalysisSelectionColumn;

const SYMBOL_ANALYSIS_COLUMN_GROUPS = [
  { id: 'base', label: 'Base' },
  { id: 'price', label: 'Price change %' },
  { id: 'volume', label: 'Volume' },
  { id: 'historic', label: 'Historic Performance' },
  { id: 'live', label: 'Live Performance' },
  { id: 'combined', label: 'Combined Intelligence' },
] as const;

const SYMBOL_ANALYSIS_TABLE_COLUMNS: SymbolAnalysisColumnConfig[] = [
  {
    id: 'symbol',
    label: 'Symbol',
    group: 'base',
    kind: 'text',
    width: 246,
    sortable: true,
    filterable: true,
    hideable: false,
    visibleByDefault: true,
    renderKind: 'symbol',
    description: 'Exchange trading pair symbol shown as BASE-QUOTE.',
  },
  {
    id: 'priceUsd',
    label: 'Price USD',
    group: 'base',
    kind: 'number',
    width: 214,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'usd',
    description: 'Latest last-traded price for the symbol in USD terms.',
  },
  {
    id: 'totalVolume',
    label: 'Total Volume',
    group: 'base',
    kind: 'number',
    width: 230,
    sortable: true,
    filterable: true,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'compact',
    description: 'Current 1-day quote volume used as the default liquidity sort column.',
  },
  {
    id: 'liveTickCurrentPct',
    label: 'Live Tick Current',
    group: 'base',
    kind: 'number',
    width: 240,
    sortable: true,
    filterable: true,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'pct',
    description: 'Current percent change versus the 15-minute anchor used for the live tick view.',
  },
  {
    id: 'lastUpdatedAt',
    label: 'Updated',
    group: 'base',
    kind: 'datetime',
    width: 280,
    sortable: true,
    filterable: true,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'datetime',
    description: 'Most recent timestamp when this symbol row was refreshed by the live market pipeline.',
  },
  ...SYMBOL_ANALYSIS_WINDOWS.flatMap((windowSize) => [
    {
      id: `priceChangePctByWindow:${windowSize}`,
      label: windowSize,
      group: 'price' as const,
      kind: 'number' as const,
      width: 164,
      sortable: true,
      filterable: windowSize === '15m' || windowSize === '1d',
      hideable: true,
      visibleByDefault: true,
      renderKind: 'pct' as const,
      description: `Percent price change for the ${windowSize} rolling window.`,
    },
    {
      id: `quoteVolumeByWindow:${windowSize}`,
      label: windowSize,
      group: 'volume' as const,
      kind: 'number' as const,
      width: 184,
      sortable: true,
      filterable: windowSize === '1d',
      hideable: true,
      visibleByDefault: true,
      renderKind: 'compact' as const,
      description: `Quote-volume traded during the ${windowSize} rolling window.`,
    },
  ]),
  {
    id: 'profitCount',
    label: 'Profit Count',
    group: 'historic',
    kind: 'number',
    width: 118,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'integer',
    description: 'Number of realized trades for this symbol that closed with positive net PnL.',
  },
  {
    id: 'profitTradeSizeUsd',
    label: 'Winning Notional (USD)',
    group: 'historic',
    kind: 'number',
    width: 168,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'usd',
    description: 'Total entry notional deployed across winning trades for this symbol. This is exposure, not profit.',
  },
  {
    id: 'lossCount',
    label: 'Loss Count',
    group: 'historic',
    kind: 'number',
    width: 112,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'integer',
    description: 'Number of realized trades for this symbol that closed with negative net PnL.',
  },
  {
    id: 'lossTradeSizeUsd',
    label: 'Losing Notional (USD)',
    group: 'historic',
    kind: 'number',
    width: 158,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'usd',
    description: 'Total entry notional deployed across losing trades for this symbol. This is exposure, not realized loss.',
  },
  {
    id: 'grossProfitUsd',
    label: 'Gross Profit (USD)',
    group: 'historic',
    kind: 'number',
    width: 152,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'usd',
    description: 'Sum of positive realized net PnL across all closed trades for this symbol.',
  },
  {
    id: 'grossLossUsd',
    label: 'Gross Loss (USD)',
    group: 'historic',
    kind: 'number',
    width: 148,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'usd',
    description: 'Sum of realized losses in absolute USD terms across all losing trades for this symbol.',
  },
  {
    id: 'netPnlUsd',
    label: 'Net PnL (USD)',
    group: 'historic',
    kind: 'number',
    width: 132,
    sortable: true,
    filterable: true,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'pnl',
    description: 'Net realized PnL for this symbol after combining all winning and losing closed trades.',
  },
  {
    id: 'symbolScore',
    label: 'Symbol Score',
    group: 'historic',
    kind: 'number',
    width: 126,
    sortable: true,
    filterable: true,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'score',
    description: 'Bounded historic-performance score derived from win/loss balance, realized PnL efficiency, and pattern outcomes.',
  },
  {
    id: 'averageLossHoldMinutes',
    label: 'Failure Time',
    group: 'historic',
    kind: 'number',
    width: 136,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'duration',
    description: 'Average time a losing trade stayed open before it closed red for this symbol.',
  },
  {
    id: 'spreadBps',
    label: 'Spread',
    group: 'live',
    kind: 'number',
    width: 112,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'bps',
    description: 'Current bid/ask spread in basis points used by the live scanner-compatible market evaluation.',
  },
  {
    id: 'depthPressureScore',
    label: 'Depth Pressure',
    group: 'live',
    kind: 'number',
    width: 136,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'score',
    description: 'Order-book pressure score derived from depth imbalance, top-level imbalance, spread, and micro-price offset.',
  },
  {
    id: 'orderBookImbalance',
    label: 'Depth Imbalance',
    group: 'live',
    kind: 'number',
    width: 140,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'score',
    description: 'Normalized depth imbalance across the captured order-book levels.',
  },
  {
    id: 'topLevelImbalance',
    label: 'Top Level Imb.',
    group: 'live',
    kind: 'number',
    width: 138,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'score',
    description: 'Normalized imbalance at the best bid and best ask only.',
  },
  {
    id: 'microPriceOffsetBps',
    label: 'Micro Offset',
    group: 'live',
    kind: 'number',
    width: 128,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'bps',
    description: 'Micro-price offset from the midpoint in basis points.',
  },
  {
    id: 'bidDepthNotionalUsd',
    label: 'Bid Depth USD',
    group: 'live',
    kind: 'number',
    width: 148,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'compact',
    description: 'Visible bid-side notional in USD across the captured order-book depth snapshot.',
  },
  {
    id: 'askDepthNotionalUsd',
    label: 'Ask Depth USD',
    group: 'live',
    kind: 'number',
    width: 148,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'compact',
    description: 'Visible ask-side notional in USD across the captured order-book depth snapshot.',
  },
  {
    id: 'livePerformanceScore',
    label: 'Score',
    group: 'live',
    kind: 'number',
    width: 118,
    sortable: true,
    filterable: true,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'score',
    description: 'Live scanner-compatible score for this symbol, using the same formula as bot scanner candidates.',
  },
  {
    id: 'livePerformanceDecision',
    label: 'Decision',
    group: 'live',
    kind: 'text',
    width: 122,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'decision',
    description: 'Live scanner-compatible candidate decision.',
  },
  {
    id: 'shortTermProfitPct',
    label: 'Short-term Profit %',
    group: 'live',
    kind: 'number',
    width: 166,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'pct',
    description: 'EMA-style weighted profit trend across the 15m, 30m, and 1h windows.',
  },
  {
    id: 'overHoursProfitPct',
    label: 'Over Hours Profit %',
    group: 'live',
    kind: 'number',
    width: 168,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'pct',
    description: 'Weighted profit trend from 1h through 1d.',
  },
  {
    id: 'longTermProfitPct',
    label: 'Long-term Profit %',
    group: 'live',
    kind: 'number',
    width: 164,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'pct',
    description: 'Weighted profit trend from 1d through 7d.',
  },
  {
    id: 'totalScore',
    label: 'Total Score',
    group: 'live',
    kind: 'number',
    width: 126,
    sortable: true,
    filterable: true,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'score',
    description: 'Combined score from 1-minute-derived technicals through 7-day momentum.',
  },
  {
    id: 'totalDecision',
    label: 'Total Decision',
    group: 'live',
    kind: 'text',
    width: 132,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'decision',
    description: 'Combined decision across 1-minute to 7-day context.',
  },
  {
    id: 'probableWatchTimeMinutes',
    label: 'Probable Watch Time',
    group: 'live',
    kind: 'number',
    width: 170,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'duration',
    description: 'Estimated time to keep the symbol on watch before it resolves.',
  },
  {
    id: 'combinedScore',
    label: 'Combined Score',
    group: 'combined',
    kind: 'number',
    width: 146,
    sortable: true,
    filterable: true,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'score',
    description: 'Blended score that combines live total context with historic symbol damage.',
  },
  {
    id: 'combinedDecision',
    label: 'Combined Decision',
    group: 'combined',
    kind: 'text',
    width: 160,
    sortable: true,
    filterable: false,
    hideable: true,
    visibleByDefault: true,
    renderKind: 'decision',
    description: 'Final combined judgment after live context is cross-checked against historical damage.',
  },
];

const FILTER_MENU_COLUMN_IDS = [
  'liveTickCurrentPct',
  'priceChangePctByWindow:15m',
  'priceChangePctByWindow:1d',
  'quoteVolumeByWindow:1d',
  'netPnlUsd',
  'symbolScore',
  'livePerformanceScore',
  'totalScore',
  'combinedScore',
  'lastUpdatedAt',
];

const _CAPTURED_MARKET_SYMBOL_ROWS: SymbolAnalysisRow[] = [
  {
    symbol: 'USDCUSDT',
    quoteAsset: 'USDT',
    priceUsd: 0.99945,
    liveTickCurrentPct: -0.003001560811630599,
    shortTermProfitPct: -0.005,
    overHoursProfitPct: -0.002,
    longTermProfitPct: -0.032,
    spreadBps: 0.1,
    orderBookImbalance: -0.07043693317575654,
    topLevelImbalance: -0.07043195521804461,
    microPriceOffsetBps: -0.003523553333280188,
    bidDepthNotionalUsd: 2593418.87168,
    askDepthNotionalUsd: 2986447.54995,
    depthPressureScore: 45.02687424931222,
    livePerformanceScore: 38.06,
    livePerformanceDecision: 'Rejected',
    livePerformanceReasons: [
      'Rejected because move -0.01% is below minPriceChangePct 2.',
      'Rejected because volume spike ratio 0.61 was below 1.4.',
      'Rejected because price did not confirm a breakout above 0.9996.',
      'Rejected because price is below VWAP 0.9995.',
    ],
    totalScore: 50.41,
    totalDecision: 'Rejected',
    totalDecisionReasons: [
      'Live scanner score is 38.1 and the immediate decision is rejected.',
      'Profit bands are short -0.01%, over-hours -0.00%, and long-term -0.03%.',
      'Technical alignment scored 65.0, volume confirmation 38.7, order-book quality 45.5, liquidity 100.0, and spread quality 99.7.',
      'Total score 50.4 is too weak once all live horizons are combined, so the setup stays rejected.',
    ],
    probableWatchTimeMinutes: null,
    priceChangePctByWindow: {
      '5m': 0,
      '15m': -0.003001560811630599,
      '30m': -0.005002501250635869,
      '1h': -0.005002501250635869,
      '2h': 0,
      '4h': 0,
      '6h': 0.007004342692459671,
      '12h': -0.003001560811630599,
      '15h': -0.005002501250635869,
      '1d': -0.009004141905279879,
      '3d': -0.04500450045005115,
      '5d': -0.04500450045005115,
      '7d': -0.055000000000005045,
    },
    quoteVolumeByWindow: {
      '5m': 21559181.71706,
      '15m': 27599649.23126,
      '30m': 58003480.64114,
      '1h': 130228254.60887001,
      '2h': 392740878.22255,
      '4h': 595728020.6923499,
      '6h': 933130740.2479304,
      '12h': 1913124938.17235,
      '15h': 2108062584.4460201,
      '1d': 2705801315.28858,
      '3d': 3506553892.9859,
      '5d': 6969723899.3886,
      '7d': 8631966751.1448,
    },
    lastUpdatedAt: '2026-04-20T19:50:15.483Z',
    profitCount: 0,
    profitTradeSizeUsd: 0,
    lossCount: 0,
    lossTradeSizeUsd: 0,
    grossProfitUsd: 0,
    grossLossUsd: 0,
    netPnlUsd: 0,
    symbolScore: 0,
    averageProfitHoldMinutes: null,
    averageLossHoldMinutes: null,
    combinedScore: 42.7,
    combinedDecision: 'Rejected',
    combinedDecisionReasons: [
      'Total live score is 50.4 with a rejected decision before history is applied.',
      'Historic symbol score is 0.0 with net realized PnL 0.00 USD across 0 closed trades.',
      'Combined score 42.7 turns negative enough after historic damage and failure speed are blended in, so the symbol stays rejected.',
    ],
  },
  {
    symbol: 'FARMUSDT',
    quoteAsset: 'USDT',
    priceUsd: 12.01,
    liveTickCurrentPct: 0.08333333333333157,
    shortTermProfitPct: -0.191,
    overHoursProfitPct: -0.087,
    longTermProfitPct: 2.907,
    spreadBps: 8.32,
    orderBookImbalance: 0.7878169481017441,
    topLevelImbalance: 0.787974759225342,
    microPriceOffsetBps: 3.2791292518735218,
    bidDepthNotionalUsd: 2554538.7698,
    askDepthNotionalUsd: 303179.71475999994,
    depthPressureScore: 100,
    livePerformanceScore: 35.57,
    livePerformanceDecision: 'Rejected',
    livePerformanceReasons: [
      'Rejected because move -0.17% is below minPriceChangePct 2.',
      'Rejected because volume spike ratio 0.37 was below 1.4.',
      'Rejected because price did not confirm a breakout above 12.3200.',
      'Rejected because price is below VWAP 12.7951.',
      'Rejected because fast EMA is below slow EMA.',
    ],
    totalScore: 49.13,
    totalDecision: 'Rejected',
    totalDecisionReasons: [
      'Live scanner score is 35.6 and the immediate decision is rejected.',
      'Profit bands are short -0.19%, over-hours -0.09%, and long-term +2.91%.',
      'Technical alignment scored 46.3, volume confirmation 19.6, order-book quality 95.2, liquidity 100.0, and spread quality 70.9.',
      'Total score 49.1 is too weak once all live horizons are combined, so the setup stays rejected.',
    ],
    probableWatchTimeMinutes: null,
    priceChangePctByWindow: {
      '5m': -0.3319502074688873,
      '15m': 0.08333333333333157,
      '30m': -0.41459369817579356,
      '1h': -0.16625103906899064,
      '2h': -1.1522633744856012,
      '4h': -3.3011272141706938,
      '6h': -5.20915548539858,
      '12h': 3.9826839826839744,
      '15h': 3.090128755364802,
      '1d': 4.707933740191797,
      '3d': 1.2647554806070858,
      '5d': 0.7550335570469787,
      '7d': 3.7132987910189956,
    },
    quoteVolumeByWindow: {
      '5m': 1545000.03085,
      '15m': 1586132.83671,
      '30m': 13578127.551540002,
      '1h': 15609893.384200003,
      '2h': 38862666.08848999,
      '4h': 106251126.42396003,
      '6h': 438528708.6215101,
      '12h': 1512896690.4426982,
      '15h': 1558421101.2839482,
      '1d': 1695112511.7869682,
      '3d': 275901700.53078,
      '5d': 595589945.83285,
      '7d': 836393841.04756,
    },
    lastUpdatedAt: '2026-04-20T19:50:15.483Z',
    profitCount: 0,
    profitTradeSizeUsd: 0,
    lossCount: 1,
    lossTradeSizeUsd: 14.95629,
    grossProfitUsd: 0,
    grossLossUsd: 0.19006655,
    netPnlUsd: -0.19006655,
    symbolScore: -15.017,
    averageProfitHoldMinutes: null,
    averageLossHoldMinutes: 2.049,
    combinedScore: 15.79,
    combinedDecision: 'Rejected',
    combinedDecisionReasons: [
      'Total live score is 49.1 with a rejected decision before history is applied.',
      'Historic symbol score is -15.0 with net realized PnL -0.19 USD across 1 closed trades.',
      'Average loss hold time is 2m, which tells us how quickly this symbol tends to damage us when it fails.',
      'Combined score 15.8 turns negative enough after historic damage and failure speed are blended in, so the symbol stays rejected.',
    ],
  },
  {
    symbol: 'BTCUSDT',
    quoteAsset: 'USDT',
    priceUsd: 76262.92,
    liveTickCurrentPct: 0.04802803651390259,
    shortTermProfitPct: 0.07,
    overHoursProfitPct: 1.227,
    longTermProfitPct: 6.575,
    spreadBps: 0.6,
    orderBookImbalance: -0.892032850668862,
    topLevelImbalance: -0.8920267031408817,
    microPriceOffsetBps: -0.26843948910152204,
    bidDepthNotionalUsd: 26247.424935,
    askDepthNotionalUsd: 459963.89207400003,
    depthPressureScore: 0,
    livePerformanceScore: 44.03,
    livePerformanceDecision: 'Rejected',
    livePerformanceReasons: [
      'Rejected because move 0.11% is below minPriceChangePct 2.',
      'Rejected because order-book pressure 0.0 and depth imbalance -0.89 imply weak near-book support.',
      'Rejected because volume spike ratio 1.01 was below 1.4.',
      'Rejected because price did not confirm a breakout above 76486.6700.',
    ],
    totalScore: 58.69,
    totalDecision: 'Watch',
    totalDecisionReasons: [
      'Live scanner score is 44.0 and the immediate decision is rejected.',
      'Profit bands are short +0.07%, over-hours +1.23%, and long-term +6.58%.',
      'Technical alignment scored 100.0, volume confirmation 54.6, order-book quality 1.9, liquidity 100.0, and spread quality 97.9.',
      'Total score 58.7 is close but not clean enough yet, so the symbol stays on watch instead of becoming a fresh entry.',
      'Estimated watch window is about 2d before the setup is likely to resolve.',
    ],
    probableWatchTimeMinutes: 2880,
    priceChangePctByWindow: {
      '5m': 0.01619660023523925,
      '15m': 0.04802803651390259,
      '30m': 0.040547271415253903,
      '1h': 0.11017473452981329,
      '2h': 0.45254602416905887,
      '4h': 0.955452630062862,
      '6h': 1.5517406681438453,
      '12h': 1.8786581600932595,
      '15h': 2.268994705844403,
      '1d': 1.7024438590932203,
      '3d': 7.441981297414392,
      '5d': 9.981942942814321,
      '7d': 13.578060406440773,
    },
    quoteVolumeByWindow: {
      '5m': 10706245.6888171,
      '15m': 13937695.2352425,
      '30m': 30186348.243391093,
      '1h': 100606855.238836,
      '2h': 204818260.78593972,
      '4h': 299787613.243071,
      '6h': 471587077.1767025,
      '12h': 712672941.6539948,
      '15h': 864783302.0137323,
      '1d': 1252072832.7699993,
      '3d': 3316751574.982287,
      '5d': 6464899760.673264,
      '7d': 8404020568.106482,
    },
    lastUpdatedAt: '2026-04-20T19:50:15.483Z',
    profitCount: 0,
    profitTradeSizeUsd: 0,
    lossCount: 0,
    lossTradeSizeUsd: 0,
    grossProfitUsd: 0,
    grossLossUsd: 0,
    netPnlUsd: 0,
    symbolScore: 0,
    averageProfitHoldMinutes: null,
    averageLossHoldMinutes: null,
    combinedScore: 46.78,
    combinedDecision: 'Watch',
    combinedDecisionReasons: [
      'Total live score is 58.7 with a watch decision before history is applied.',
      'Historic symbol score is 0.0 with net realized PnL 0.00 USD across 0 closed trades.',
      'Combined score 46.8 is mixed, so the symbol should be watched rather than traded aggressively.',
    ],
  },
  {
    symbol: 'BIFIUSDT',
    quoteAsset: 'USDT',
    priceUsd: 47.7,
    liveTickCurrentPct: 0.42105263157895334,
    shortTermProfitPct: -0.062,
    overHoursProfitPct: -3.937,
    longTermProfitPct: -35.333,
    spreadBps: 20.99,
    orderBookImbalance: 0.06150670351953323,
    topLevelImbalance: 0.06255198435231803,
    microPriceOffsetBps: 0.6563691957215967,
    bidDepthNotionalUsd: 4734856.3472,
    askDepthNotionalUsd: 4186154.3850000002,
    depthPressureScore: 46.429334617283374,
    livePerformanceScore: 1.88,
    livePerformanceDecision: 'Rejected',
    livePerformanceReasons: [
      'Rejected because move -0.42% is below minPriceChangePct 2.',
      'Rejected because spread 21.0 bps exceeded maxSpreadBps 20.',
      'Rejected because volume spike ratio 0.14 was below 1.4.',
      'Rejected because price did not confirm a breakout above 49.2000.',
      'Rejected because price is below VWAP 49.0727.',
      'Rejected because fast EMA is below slow EMA.',
    ],
    totalScore: 25.47,
    totalDecision: 'Rejected',
    totalDecisionReasons: [
      'Live scanner score is 1.9 and the immediate decision is rejected.',
      'Profit bands are short -0.06%, over-hours -3.94%, and long-term -35.33%.',
      'Technical alignment scored 47.5, volume confirmation 32.2, order-book quality 48.8, liquidity 99.0, and spread quality 26.6.',
      'Total score 25.5 is too weak once all live horizons are combined, so the setup stays rejected.',
    ],
    probableWatchTimeMinutes: null,
    priceChangePctByWindow: {
      '5m': -0.4175365344467552,
      '15m': 0.42105263157895334,
      '30m': 0,
      '1h': -0.4175365344467552,
      '2h': 0.6329113924050723,
      '4h': -3.048780487804878,
      '6h': -4.408817635270533,
      '12h': -5.9171597633136095,
      '15h': -7.017543859649113,
      '1d': -8.44529750479846,
      '3d': -53.689320388349515,
      '5d': -53.189401373895976,
      '7d': -52.63157894736842,
    },
    quoteVolumeByWindow: {
      '5m': 3377661.9131000005,
      '15m': 7939033.955700001,
      '30m': 12164329.380799996,
      '1h': 12360943.920599999,
      '2h': 24026692.54960001,
      '4h': 202337138.85720012,
      '6h': 401423249.31689984,
      '12h': 701096411.5907006,
      '15h': 775464261.7232001,
      '1d': 1078551880.3882997,
      '3d': 12244968721.3316,
      '5d': 12596602304.8388,
      '7d': 13583642656.7543,
    },
    lastUpdatedAt: '2026-04-20T19:50:15.483Z',
    profitCount: 0,
    profitTradeSizeUsd: 0,
    lossCount: 2,
    lossTradeSizeUsd: 29.874,
    grossProfitUsd: 0,
    grossLossUsd: 0.7006065,
    netPnlUsd: -0.7006065,
    symbolScore: -31.752,
    averageProfitHoldMinutes: null,
    averageLossHoldMinutes: 0.833,
    combinedScore: 0,
    combinedDecision: 'Rejected',
    combinedDecisionReasons: [
      'Total live score is 25.5 with a rejected decision before history is applied.',
      'Historic symbol score is -31.8 with net realized PnL -0.70 USD across 2 closed trades.',
      'Average loss hold time is 1m, which tells us how quickly this symbol tends to damage us when it fails.',
      'Combined score 0.0 turns negative enough after historic damage and failure speed are blended in, so the symbol stays rejected.',
    ],
  },
  {
    symbol: 'ETHUSDT',
    quoteAsset: 'USDT',
    priceUsd: 2330.09,
    liveTickCurrentPct: 0.04164663048706184,
    shortTermProfitPct: -0.016,
    overHoursProfitPct: 1.006,
    longTermProfitPct: 5.798,
    spreadBps: 0.04,
    orderBookImbalance: -0.4053694308113159,
    topLevelImbalance: -0.4053676376644947,
    microPriceOffsetBps: -0.008698148387400427,
    bidDepthNotionalUsd: 17352.225873,
    askDepthNotionalUsd: 41010.82093999999,
    depthPressureScore: 21.600495115248936,
    livePerformanceScore: 42.71,
    livePerformanceDecision: 'Rejected',
    livePerformanceReasons: [
      'Rejected because move -0.05% is below minPriceChangePct 2.',
      'Rejected because order-book pressure 21.6 and depth imbalance -0.41 imply weak near-book support.',
      'Rejected because volume spike ratio 0.38 was below 1.4.',
      'Rejected because price did not confirm a breakout above 2344.1900.',
    ],
    totalScore: 57.09,
    totalDecision: 'Watch',
    totalDecisionReasons: [
      'Live scanner score is 42.7 and the immediate decision is rejected.',
      'Profit bands are short -0.02%, over-hours +1.01%, and long-term +5.80%.',
      'Technical alignment scored 100.0, volume confirmation 26.5, order-book quality 24.4, liquidity 100.0, and spread quality 99.8.',
      'Total score 57.1 is close but not clean enough yet, so the symbol stays on watch instead of becoming a fresh entry.',
      'Estimated watch window is about 2.5d before the setup is likely to resolve.',
    ],
    probableWatchTimeMinutes: 3600,
    priceChangePctByWindow: {
      '5m': 0.06570584395507095,
      '15m': 0.04164663048706184,
      '30m': -0.015876693871591484,
      '1h': -0.053188523289271865,
      '2h': 0.44010897115368197,
      '4h': 1.014440605369603,
      '6h': 1.0288940148112184,
      '12h': 1.4887343144984033,
      '15h': 2.045204717547168,
      '1d': 1.3677593370021557,
      '3d': 5.9733939738487845,
      '5d': 8.60409510181825,
      '7d': 13.58037328965778,
    },
    quoteVolumeByWindow: {
      '5m': 1103404.115716,
      '15m': 3660100.8260960006,
      '30m': 7229787.945377001,
      '1h': 25471189.454247985,
      '2h': 74692738.70118797,
      '4h': 129076700.88642994,
      '6h': 257874771.19101617,
      '12h': 422076840.5594366,
      '15h': 532444190.3284668,
      '1d': 763834907.2805939,
      '3d': 1668650713.147393,
      '5d': 3556220134.950271,
      '7d': 4460606937.737367,
    },
    lastUpdatedAt: '2026-04-20T19:50:15.483Z',
    profitCount: 0,
    profitTradeSizeUsd: 0,
    lossCount: 0,
    lossTradeSizeUsd: 0,
    grossProfitUsd: 0,
    grossLossUsd: 0,
    netPnlUsd: 0,
    symbolScore: 0,
    averageProfitHoldMinutes: null,
    averageLossHoldMinutes: null,
    combinedScore: 46,
    combinedDecision: 'Watch',
    combinedDecisionReasons: [
      'Total live score is 57.1 with a watch decision before history is applied.',
      'Historic symbol score is 0.0 with net realized PnL 0.00 USD across 0 closed trades.',
      'Combined score 46.0 is mixed, so the symbol should be watched rather than traded aggressively.',
    ],
  },
  {
    symbol: 'QKCUSDT',
    quoteAsset: 'USDT',
    priceUsd: 0.003188,
    liveTickCurrentPct: 0.2831078955646396,
    shortTermProfitPct: 0.17,
    overHoursProfitPct: 1.025,
    longTermProfitPct: 4.158,
    spreadBps: 28.27,
    orderBookImbalance: -0.9594313775678247,
    topLevelImbalance: -0.9593188607694949,
    microPriceOffsetBps: -13.560341992969793,
    bidDepthNotionalUsd: 440.307395,
    askDepthNotionalUsd: 21266.488084,
    depthPressureScore: 0,
    livePerformanceScore: 23.77,
    livePerformanceDecision: 'Rejected',
    livePerformanceReasons: [
      'Rejected because move 1.40% is below minPriceChangePct 2.',
      'Rejected because spread 28.3 bps exceeded maxSpreadBps 20.',
      'Rejected because order-book pressure 0.0 and depth imbalance -0.96 imply weak near-book support.',
      'Rejected because volume spike ratio 0.70 was below 1.4.',
      'Rejected because price did not confirm a breakout above 0.0032.',
    ],
    totalScore: 48.89,
    totalDecision: 'Rejected',
    totalDecisionReasons: [
      'Live scanner score is 23.8 and the immediate decision is rejected.',
      'Profit bands are short +0.17%, over-hours +1.02%, and long-term +4.16%.',
      'Technical alignment scored 100.0, volume confirmation 30.6, order-book quality 0.0, liquidity 91.0, and spread quality 1.1.',
      'Total score 48.9 is too weak once all live horizons are combined, so the setup stays rejected.',
    ],
    probableWatchTimeMinutes: null,
    priceChangePctByWindow: {
      '5m': 0.2831078955646396,
      '15m': 0.2831078955646396,
      '30m': 0.2831078955646396,
      '1h': 0,
      '2h': 0.9499683343888424,
      '4h': 1.2063492063492012,
      '6h': 0.8222643896268179,
      '12h': 1.1100539169045314,
      '15h': 1.918158567774927,
      '1d': 1.3994910941475753,
      '3d': 5.4930509596293815,
      '5d': 5.562913907284759,
      '7d': 7.4123989218328745,
    },
    quoteVolumeByWindow: {
      '5m': 84440.876744,
      '15m': 298485.89002500003,
      '30m': 1350813.6359,
      '1h': 6863278.308969,
      '2h': 12000577.510880005,
      '4h': 27699142.098784994,
      '6h': 54508342.79099098,
      '12h': 114057742.92417605,
      '15h': 146276291.40933707,
      '1d': 265012380.57443973,
      '3d': 1077060871.990082,
      '5d': 2248296446.34137,
      '7d': 3073926672.58572,
    },
    lastUpdatedAt: '2026-04-20T19:50:15.483Z',
    profitCount: 0,
    profitTradeSizeUsd: 0,
    lossCount: 2,
    lossTradeSizeUsd: 29.96034275,
    grossProfitUsd: 0,
    grossLossUsd: 0.29683706,
    netPnlUsd: -0.29683706,
    symbolScore: -29.585,
    averageProfitHoldMinutes: null,
    averageLossHoldMinutes: 7.626,
    combinedScore: 14.12,
    combinedDecision: 'Rejected',
    combinedDecisionReasons: [
      'Total live score is 48.9 with a rejected decision before history is applied.',
      'Historic symbol score is -29.6 with net realized PnL -0.30 USD across 2 closed trades.',
      'Average loss hold time is 8m, which tells us how quickly this symbol tends to damage us when it fails.',
      'Combined score 14.1 turns negative enough after historic damage and failure speed are blended in, so the symbol stays rejected.',
    ],
  },
  {
    symbol: 'SOLUSDT',
    quoteAsset: 'USDT',
    priceUsd: 85.86,
    liveTickCurrentPct: -0.04656577415600262,
    shortTermProfitPct: 0.025,
    overHoursProfitPct: 0.647,
    longTermProfitPct: 3.331,
    spreadBps: 1.16,
    orderBookImbalance: -0.5609572992507937,
    topLevelImbalance: -0.560917390714405,
    microPriceOffsetBps: -0.3266274912464121,
    bidDepthNotionalUsd: 20421.45756,
    askDepthNotionalUsd: 72605.74697,
    depthPressureScore: 10.023168596030303,
    livePerformanceScore: 40.01,
    livePerformanceDecision: 'Rejected',
    livePerformanceReasons: [
      'Rejected because move 0.08% is below minPriceChangePct 2.',
      'Rejected because order-book pressure 10.0 and depth imbalance -0.56 imply weak near-book support.',
      'Rejected because volume spike ratio 0.33 was below 1.4.',
      'Rejected because price did not confirm a breakout above 86.2100.',
    ],
    totalScore: 52.61,
    totalDecision: 'Watch',
    totalDecisionReasons: [
      'Live scanner score is 40.0 and the immediate decision is rejected.',
      'Profit bands are short +0.03%, over-hours +0.65%, and long-term +3.33%.',
      'Technical alignment scored 82.5, volume confirmation 21.9, order-book quality 14.2, liquidity 100.0, and spread quality 95.9.',
      'Total score 52.6 is close but not clean enough yet, so the symbol stays on watch instead of becoming a fresh entry.',
      'Estimated watch window is about 3d before the setup is likely to resolve.',
    ],
    probableWatchTimeMinutes: 4320,
    priceChangePctByWindow: {
      '5m': 0.011648223645899961,
      '15m': -0.04656577415600262,
      '30m': 0.011648223645899961,
      '1h': 0.08159459144421631,
      '2h': -0.1511803698104378,
      '4h': 0.5033360646142954,
      '6h': 0.8575120404087913,
      '12h': 1.2977819726285917,
      '15h': 1.537369914853355,
      '1d': 0.6683081252198302,
      '3d': 3.8461538461538365,
      '5d': 4.886391399951137,
      '7d': 7.499686991360955,
    },
    quoteVolumeByWindow: {
      '5m': 167536.42966999998,
      '15m': 497155.5976200001,
      '30m': 1340443.6275,
      '1h': 6767914.0235899985,
      '2h': 19442511.067369994,
      '4h': 33342645.32454002,
      '6h': 66991519.075980015,
      '12h': 112249384.83359998,
      '15h': 140179802.44202998,
      '1d': 220140328.67607996,
      '3d': 551028898.3163,
      '5d': 1152840352.06042,
      '7d': 1521783485.74343,
    },
    lastUpdatedAt: '2026-04-20T19:50:15.483Z',
    profitCount: 0,
    profitTradeSizeUsd: 0,
    lossCount: 0,
    lossTradeSizeUsd: 0,
    grossProfitUsd: 0,
    grossLossUsd: 0,
    netPnlUsd: 0,
    symbolScore: 0,
    averageProfitHoldMinutes: null,
    averageLossHoldMinutes: null,
    combinedScore: 43.79,
    combinedDecision: 'Watch',
    combinedDecisionReasons: [
      'Total live score is 52.6 with a watch decision before history is applied.',
      'Historic symbol score is 0.0 with net realized PnL 0.00 USD across 0 closed trades.',
      'Combined score 43.8 is mixed, so the symbol should be watched rather than traded aggressively.',
    ],
  },
  {
    symbol: 'XRPUSDT',
    quoteAsset: 'USDT',
    priceUsd: 1.4297,
    liveTickCurrentPct: -0.09084556254368126,
    shortTermProfitPct: 0.02,
    overHoursProfitPct: 0.507,
    longTermProfitPct: 4.387,
    spreadBps: 0.7,
    orderBookImbalance: 0.701545751774148,
    topLevelImbalance: 0.7015635121035464,
    microPriceOffsetBps: 0.24536198094014428,
    bidDepthNotionalUsd: 31357.704159999998,
    askDepthNotionalUsd: 5500.19887,
    depthPressureScore: 99.01287935864387,
    livePerformanceScore: 59.05,
    livePerformanceDecision: 'Rejected',
    livePerformanceReasons: [
      'Rejected because move 0.03% is below minPriceChangePct 2.',
      'Rejected because volume spike ratio 0.33 was below 1.4.',
      'Rejected because price did not confirm a breakout above 1.4369.',
    ],
    totalScore: 62.19,
    totalDecision: 'Watch',
    totalDecisionReasons: [
      'Live scanner score is 59.0 and the immediate decision is rejected.',
      'Profit bands are short +0.02%, over-hours +0.51%, and long-term +4.39%.',
      'Technical alignment scored 82.5, volume confirmation 22.0, order-book quality 94.1, liquidity 100.0, and spread quality 97.5.',
      'Total score 62.2 is close but not clean enough yet, so the symbol stays on watch instead of becoming a fresh entry.',
      'Estimated watch window is about 1.5d before the setup is likely to resolve.',
    ],
    probableWatchTimeMinutes: 2160,
    priceChangePctByWindow: {
      '5m': 0.006994963626188374,
      '15m': -0.09084556254368126,
      '30m': 0.09101092131056279,
      '1h': 0.027985727279084584,
      '2h': 0.0769984600307909,
      '4h': -0.05592450192241411,
      '6h': 0.6830985915492988,
      '12h': 1.0460103187504364,
      '15h': 1.4187415762218925,
      '1d': 0.7469522937072752,
      '3d': 5.754863525408674,
      '5d': 6.479481641468681,
      '7d': 9.020893701387836,
    },
    quoteVolumeByWindow: {
      '5m': 188898.33844,
      '15m': 433737.47592999996,
      '30m': 1288139.2883200003,
      '1h': 3551384.039340001,
      '2h': 9465182.113959998,
      '4h': 18946401.168480005,
      '6h': 47613385.518669985,
      '12h': 83028395.50671995,
      '15h': 102439170.83265005,
      '1d': 159884008.90995997,
      '3d': 339391177.02247,
      '5d': 674587935.2008,
      '7d': 893202921.68846,
    },
    lastUpdatedAt: '2026-04-20T19:50:13.214Z',
    profitCount: 0,
    profitTradeSizeUsd: 0,
    lossCount: 0,
    lossTradeSizeUsd: 0,
    grossProfitUsd: 0,
    grossLossUsd: 0,
    netPnlUsd: 0,
    symbolScore: 0,
    averageProfitHoldMinutes: null,
    averageLossHoldMinutes: null,
    combinedScore: 48.51,
    combinedDecision: 'Watch',
    combinedDecisionReasons: [
      'Total live score is 62.2 with a watch decision before history is applied.',
      'Historic symbol score is 0.0 with net realized PnL 0.00 USD across 0 closed trades.',
      'Combined score 48.5 is mixed, so the symbol should be watched rather than traded aggressively.',
    ],
  },
];

function createWindowValues(overrides: Partial<Record<SymbolAnalysisWindow, number | null>> = {}) {
  return SYMBOL_ANALYSIS_WINDOWS.reduce<Record<SymbolAnalysisWindow, number | null>>(
    (values, windowSize) => {
      values[windowSize] = overrides[windowSize] ?? null;
      return values;
    },
    {} as Record<SymbolAnalysisWindow, number | null>,
  );
}

function screenshotSymbolRow({
  symbol,
  priceUsd,
  totalVolume,
  liveTickCurrentPct,
  lastUpdatedAt,
  priceChange5m,
  quoteVolume5m,
  priceChange15m,
  quoteVolume15m,
}: {
  symbol: string;
  priceUsd: number;
  totalVolume: number;
  liveTickCurrentPct: number;
  lastUpdatedAt: string;
  priceChange5m: number;
  quoteVolume5m: number;
  priceChange15m: number;
  quoteVolume15m: number;
}): SymbolAnalysisRow {
  return {
    symbol,
    quoteAsset: 'USDT',
    priceUsd,
    liveTickCurrentPct,
    shortTermProfitPct: liveTickCurrentPct,
    overHoursProfitPct: null,
    longTermProfitPct: null,
    spreadBps: null,
    orderBookImbalance: null,
    topLevelImbalance: null,
    microPriceOffsetBps: null,
    bidDepthNotionalUsd: null,
    askDepthNotionalUsd: null,
    depthPressureScore: null,
    livePerformanceScore: null,
    livePerformanceDecision: 'Pending',
    livePerformanceReasons: [],
    totalScore: null,
    totalDecision: 'Pending',
    totalDecisionReasons: [],
    probableWatchTimeMinutes: null,
    priceChangePctByWindow: createWindowValues({ '5m': priceChange5m, '15m': priceChange15m, '1d': liveTickCurrentPct }),
    quoteVolumeByWindow: createWindowValues({ '5m': quoteVolume5m, '15m': quoteVolume15m, '1d': totalVolume }),
    lastUpdatedAt,
    profitCount: 0,
    profitTradeSizeUsd: 0,
    lossCount: 0,
    lossTradeSizeUsd: 0,
    grossProfitUsd: 0,
    grossLossUsd: 0,
    netPnlUsd: 0,
    symbolScore: 0,
    averageProfitHoldMinutes: null,
    averageLossHoldMinutes: null,
    combinedScore: null,
    combinedDecision: 'Pending',
    combinedDecisionReasons: [],
  };
}

const SCREENSHOT_SYMBOL_ROWS: SymbolAnalysisRow[] = [
  screenshotSymbolRow({
    symbol: '0GUSDT',
    priceUsd: 0.605,
    totalVolume: 1_800_000,
    liveTickCurrentPct: 0,
    lastUpdatedAt: '2026-04-16T15:32:43',
    priceChange5m: 0,
    quoteVolume5m: 162.52,
    priceChange15m: 0,
    quoteVolume15m: 162.52,
  }),
  screenshotSymbolRow({
    symbol: '1INCHUSDT',
    priceUsd: 0.0961,
    totalVolume: 265_700,
    liveTickCurrentPct: 1.16,
    lastUpdatedAt: '2026-04-16T14:13:10',
    priceChange5m: 1.26,
    quoteVolume5m: 5.12,
    priceChange15m: 1.16,
    quoteVolume15m: 14.23,
  }),
  screenshotSymbolRow({
    symbol: '1MBABYDOGEUSDT',
    priceUsd: 0.000422,
    totalVolume: 256_800,
    liveTickCurrentPct: 5.22,
    lastUpdatedAt: '2026-04-16T15:31:38',
    priceChange5m: 5.35,
    quoteVolume5m: 1.14,
    priceChange15m: 5.22,
    quoteVolume15m: 7.71,
  }),
  screenshotSymbolRow({
    symbol: '2ZUSDT',
    priceUsd: 0.0854,
    totalVolume: 509_100,
    liveTickCurrentPct: -0.05,
    lastUpdatedAt: '2026-04-16T15:32:53',
    priceChange5m: -0.05,
    quoteVolume5m: 1_900,
    priceChange15m: -0.05,
    quoteVolume15m: 1_900,
  }),
  screenshotSymbolRow({
    symbol: '1000CATUSDT',
    priceUsd: 0.00186,
    totalVolume: 243_900,
    liveTickCurrentPct: 6.9,
    lastUpdatedAt: '2026-04-16T15:32:43',
    priceChange5m: 7.51,
    quoteVolume5m: 23.93,
    priceChange15m: 6.9,
    quoteVolume15m: 23.93,
  }),
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function formatUsd(value: number, digits = 2) {
  const number = Number(value ?? 0);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(Number.isFinite(number) ? number : 0);
}

function formatCompactNumber(value: number, digits = 2) {
  const number = Number(value ?? 0);
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(Number.isFinite(number) ? number : 0);
}

function formatInteger(value: number) {
  const number = Number(value ?? 0);
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(Number.isFinite(number) ? number : 0);
}

function formatNumber(value: number, digits = 2) {
  const number = Number(value ?? 0);
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(Number.isFinite(number) ? number : 0);
}

function formatDateTime(value: unknown) {
  if (!value) return '-';
  const date = new Date(String(value));
  if (Number.isNaN(date.getTime())) return '-';
  return date.toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}

function renderNumberCell(value: number | null | undefined, kind: 'usd' | 'compact' | 'pct' | 'integer' | 'score' | 'pnl' | 'bps') {
  if (value == null || !Number.isFinite(Number(value))) return '-';
  const numeric = Number(value);
  if (kind === 'usd') return formatUsd(numeric, Math.abs(numeric) >= 1 ? 2 : 6);
  if (kind === 'compact') return formatCompactNumber(numeric, Math.abs(numeric) >= 1000 ? 1 : 2);
  if (kind === 'integer') return formatInteger(numeric);
  if (kind === 'score') return formatNumber(numeric, 2);
  if (kind === 'pnl') return formatUsd(numeric, 2);
  if (kind === 'bps') return `${formatNumber(numeric, 2)} bps`;
  return `${numeric >= 0 ? '+' : ''}${numeric.toFixed(2)}%`;
}

function formatWatchDuration(value: number | null | undefined) {
  if (value == null || !Number.isFinite(Number(value))) return '-';
  const minutes = Math.max(0, Math.round(Number(value)));
  if (minutes < 60) return `${minutes}m`;
  if (minutes < 24 * 60) {
    const hours = minutes / 60;
    return `${Number.isInteger(hours) ? hours.toFixed(0) : hours.toFixed(1)}h`;
  }
  const days = minutes / (24 * 60);
  return `${Number.isInteger(days) ? days.toFixed(0) : days.toFixed(1)}d`;
}

function formatSignedUsd(value: number | null | undefined, sign: 'positive' | 'negative' | 'auto' = 'auto') {
  if (value == null || !Number.isFinite(Number(value))) return '-';
  const numeric = Number(value);
  const signedValue = sign === 'negative' ? -Math.abs(numeric) : sign === 'positive' ? Math.abs(numeric) : numeric;
  const absText = formatUsd(Math.abs(signedValue), 2);
  if (signedValue > 0) return `+${absText}`;
  if (signedValue < 0) return `-${absText}`;
  return absText;
}

function formatSymbolAnalysisSymbol(symbol: string) {
  const raw = String(symbol || '')
    .trim()
    .toUpperCase();
  if (!raw) return '-';
  if (raw.endsWith('USDT') && raw.length > 4) return `${raw.slice(0, -4)}-USDT`;
  return raw;
}

function getRowValue(row: SymbolAnalysisRow, columnId: string) {
  if (columnId === 'symbol') return row.symbol;
  if (columnId === 'priceUsd') return row.priceUsd;
  if (columnId === 'totalVolume') return row.quoteVolumeByWindow['1d'] ?? null;
  if (columnId === 'liveTickCurrentPct') return row.liveTickCurrentPct;
  if (columnId === 'shortTermProfitPct') return row.shortTermProfitPct;
  if (columnId === 'overHoursProfitPct') return row.overHoursProfitPct;
  if (columnId === 'longTermProfitPct') return row.longTermProfitPct;
  if (columnId === 'spreadBps') return row.spreadBps;
  if (columnId === 'depthPressureScore') return row.depthPressureScore;
  if (columnId === 'orderBookImbalance') return row.orderBookImbalance;
  if (columnId === 'topLevelImbalance') return row.topLevelImbalance;
  if (columnId === 'microPriceOffsetBps') return row.microPriceOffsetBps;
  if (columnId === 'bidDepthNotionalUsd') return row.bidDepthNotionalUsd;
  if (columnId === 'askDepthNotionalUsd') return row.askDepthNotionalUsd;
  if (columnId === 'livePerformanceScore') return row.livePerformanceScore;
  if (columnId === 'livePerformanceDecision') return row.livePerformanceDecision;
  if (columnId === 'totalScore') return row.totalScore;
  if (columnId === 'totalDecision') return row.totalDecision;
  if (columnId === 'probableWatchTimeMinutes') return row.probableWatchTimeMinutes;
  if (columnId === 'lastUpdatedAt') return row.lastUpdatedAt;
  if (columnId === 'profitCount') return row.profitCount;
  if (columnId === 'profitTradeSizeUsd') return row.profitTradeSizeUsd;
  if (columnId === 'lossCount') return row.lossCount;
  if (columnId === 'lossTradeSizeUsd') return row.lossTradeSizeUsd;
  if (columnId === 'grossProfitUsd') return row.grossProfitUsd;
  if (columnId === 'grossLossUsd') return row.grossLossUsd;
  if (columnId === 'netPnlUsd') return row.netPnlUsd;
  if (columnId === 'symbolScore') return row.symbolScore;
  if (columnId === 'averageLossHoldMinutes') return row.averageLossHoldMinutes;
  if (columnId === 'combinedScore') return row.combinedScore;
  if (columnId === 'combinedDecision') return row.combinedDecision;
  if (columnId.startsWith('priceChangePctByWindow:')) {
    const windowKey = columnId.split(':')[1] as SymbolAnalysisWindow | undefined;
    return windowKey ? (row.priceChangePctByWindow[windowKey] ?? null) : null;
  }
  if (columnId.startsWith('quoteVolumeByWindow:')) {
    const windowKey = columnId.split(':')[1] as SymbolAnalysisWindow | undefined;
    return windowKey ? (row.quoteVolumeByWindow[windowKey] ?? null) : null;
  }
  return null;
}

function compareNullableNumbers(left: number | null, right: number | null) {
  if (left == null && right == null) return 0;
  if (left == null) return 1;
  if (right == null) return -1;
  if (!Number.isFinite(left) && !Number.isFinite(right)) return 0;
  if (!Number.isFinite(left)) return 1;
  if (!Number.isFinite(right)) return -1;
  return left - right;
}

function compareSymbolRows(left: SymbolAnalysisRow, right: SymbolAnalysisRow, columnId: string, direction: 'asc' | 'desc') {
  let result = 0;
  if (columnId === 'symbol') {
    result = formatSymbolAnalysisSymbol(left.symbol).localeCompare(formatSymbolAnalysisSymbol(right.symbol), undefined, { numeric: true, sensitivity: 'base' });
  } else if (columnId === 'lastUpdatedAt') {
    result = Date.parse(left.lastUpdatedAt) - Date.parse(right.lastUpdatedAt);
  } else if (columnId === 'livePerformanceDecision' || columnId === 'totalDecision' || columnId === 'combinedDecision') {
    result = String(getRowValue(left, columnId) || 'Pending').localeCompare(String(getRowValue(right, columnId) || 'Pending'));
  } else {
    const leftValue = getRowValue(left, columnId);
    const rightValue = getRowValue(right, columnId);
    result = compareNullableNumbers(leftValue == null ? null : Number(leftValue), rightValue == null ? null : Number(rightValue));
  }
  return direction === 'asc' ? result : result * -1;
}

function isPositive(value: number | null | undefined) {
  return value != null && Number.isFinite(Number(value)) && Number(value) > 0;
}

function isFilterActive(value: unknown): boolean {
  if (value == null) return false;
  if (typeof value === 'string') return value.trim().length > 0 && value !== 'all';
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === 'object') return Object.values(value as Record<string, unknown>).some((entry) => isFilterActive(entry));
  return true;
}

function parseOptionalNumber(value: unknown): number | null {
  if (value == null || value === '') return null;
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : null;
}

function parseOptionalTime(value: unknown): number | null {
  if (!value) return null;
  const numeric = Date.parse(String(value));
  return Number.isFinite(numeric) ? numeric : null;
}

function matchesNumericFilter(value: number | null | undefined, filterValue: unknown): boolean {
  const active = filterValue && typeof filterValue === 'object' ? (filterValue as Record<string, unknown>) : null;
  if (!active) return true;
  const min = parseOptionalNumber(active.min);
  const max = parseOptionalNumber(active.max);
  const numeric = value == null ? null : Number(value);
  if (min != null && (numeric == null || numeric < min)) return false;
  if (max != null && (numeric == null || numeric > max)) return false;
  return true;
}

function matchesDateFilter(value: string | null | undefined, filterValue: unknown): boolean {
  const active = filterValue && typeof filterValue === 'object' ? (filterValue as Record<string, unknown>) : null;
  if (!active) return true;
  const from = parseOptionalTime(active.from);
  const to = parseOptionalTime(active.to);
  const timestamp = value ? Date.parse(String(value)) : Number.NaN;
  if (from != null && (!Number.isFinite(timestamp) || timestamp < from)) return false;
  if (to != null && (!Number.isFinite(timestamp) || timestamp > to)) return false;
  return true;
}

function decisionReasonsForColumn(row: SymbolAnalysisRow, columnId: string) {
  if (columnId === 'livePerformanceDecision') return row.livePerformanceReasons || [];
  if (columnId === 'totalDecision') return row.totalDecisionReasons || [];
  if (columnId === 'combinedDecision') return row.combinedDecisionReasons || [];
  return [];
}

function decisionFooter(row: SymbolAnalysisRow, columnId: string) {
  if (columnId === 'livePerformanceDecision') {
    return `live score ${renderNumberCell(row.livePerformanceScore, 'score')} | spread ${renderNumberCell(row.spreadBps, 'bps')} | updated ${formatDateTime(row.lastUpdatedAt)}`;
  }
  if (columnId === 'totalDecision') {
    return `total score ${renderNumberCell(row.totalScore, 'score')} | short ${renderNumberCell(row.shortTermProfitPct, 'pct')} | hours ${renderNumberCell(row.overHoursProfitPct, 'pct')} | long ${renderNumberCell(row.longTermProfitPct, 'pct')} | watch ${formatWatchDuration(row.probableWatchTimeMinutes)}`;
  }
  return `combined score ${renderNumberCell(row.combinedScore, 'score')} | symbol score ${renderNumberCell(row.symbolScore, 'score')} | net pnl ${formatSignedUsd(row.netPnlUsd)} | failure ${formatWatchDuration(row.averageLossHoldMinutes)}`;
}

function HeaderTooltip({ label, description, columnId }: { label: string; description: string; columnId: string }) {
  return (
    <span className="inline-flex min-w-0 max-w-full items-center gap-2">
      <span className="truncate">{label}</span>
      <Tooltip
        className="shrink-0"
        panelClassName="max-w-[340px]"
        content={
          <div className="space-y-1.5">
            <div className="text-sm font-semibold text-white">{label}</div>
            <div className="text-xs leading-5 text-white/70">{description}</div>
            <div className="text-[11px] uppercase tracking-[0.14em] text-white/35">API field: {columnId}</div>
          </div>
        }
      >
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#566071] text-[#566071] transition hover:border-[#8b93a5] hover:text-[#8b93a5]">
          <Icon name="info" className="h-5 w-5" />
        </span>
      </Tooltip>
    </span>
  );
}

function DecisionReasonBadge({ label, title, reasons, footer }: { label: React.ReactNode; title: string; reasons: string[]; footer?: React.ReactNode }) {
  if (!reasons.length) return <span>{label}</span>;
  return (
    <Tooltip
      content={
        <div className="space-y-2 text-xs text-white/80">
          <div className="font-semibold text-white">{title}</div>
          {reasons.map((reason, index) => (
            <div key={`${index}-${reason}`}>- {reason}</div>
          ))}
          {footer ? <div className="border-t border-white/10 pt-2 text-white/65">{footer}</div> : null}
        </div>
      }
    >
      <span className="cursor-help">{label}</span>
    </Tooltip>
  );
}

function SelectionCheckbox({
  checked,
  indeterminate,
  onChange,
  ariaLabel,
  disabled = false,
}: {
  checked: boolean;
  indeterminate: boolean;
  onChange: () => void;
  ariaLabel: string;
  disabled?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <input
      ref={inputRef}
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      aria-label={ariaLabel}
      className="market-symbol-checkbox h-6 w-6 rounded-[3px] border border-[#e5e5df] bg-[#f7f7f1] accent-[var(--accent)]"
    />
  );
}

function useVirtualRows(rowCount: number, rowHeight: number, overscan = 10) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useLayoutEffect(() => {
    const element = scrollRef.current;
    if (!element) return undefined;
    const update = () => setViewportHeight(element.clientHeight || 0);
    update();
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null;
    observer?.observe(element);
    window.addEventListener('resize', update);
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  const start = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan);
  const visibleCount = Math.ceil((viewportHeight || rowHeight * rowCount) / rowHeight) + overscan * 2;
  const end = Math.min(rowCount, start + visibleCount);

  return {
    scrollRef,
    start,
    end,
    totalHeight: rowCount * rowHeight,
    onScroll: (event: React.UIEvent<HTMLDivElement>) => setScrollTop(event.currentTarget.scrollTop),
  };
}

function getDisplayGroupId(column: VisibleColumn): ColumnGroup {
  return column.id.startsWith('quoteVolumeByWindow:') ? 'price' : column.group;
}

function getDisplayGroupLabel(groupId: ColumnGroup) {
  return SYMBOL_ANALYSIS_COLUMN_GROUPS.find((group) => group.id === groupId)?.label || groupId;
}

function getColumnHeaderLabel(column: VisibleColumn) {
  return column.id.startsWith('quoteVolumeByWindow:') ? column.label : column.group === 'volume' ? `Vol ${column.label}` : column.label;
}

function MarketSymbolDataTableRecipe({
  initialSearch = '',
  initialOpenMenu = null,
  enableRowSelection = true,
  tableHeight = 520,
  showChrome = false,
}: {
  initialSearch?: string;
  initialOpenMenu?: 'sort' | 'filters' | 'columns' | null;
  enableRowSelection?: boolean;
  tableHeight?: number;
  showChrome?: boolean;
}) {
  const rows = SCREENSHOT_SYMBOL_ROWS;
  const [search, setSearch] = useState(initialSearch);
  const [openMenu, setOpenMenu] = useState<'sort' | 'filters' | 'columns' | null>(initialOpenMenu);
  const [sort, setSort] = useState<{ columnId: string; direction: 'asc' | 'desc' }>({ columnId: 'symbol', direction: 'asc' });
  const [filters, setFilters] = useState<Record<string, unknown>>({});
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>([]);
  const [visibleColumnIds, setVisibleColumnIds] = useState(() => SYMBOL_ANALYSIS_TABLE_COLUMNS.filter((column) => column.visibleByDefault !== false).map((column) => column.id));

  useEffect(() => setSearch(initialSearch), [initialSearch]);
  useEffect(() => setOpenMenu(initialOpenMenu), [initialOpenMenu]);

  const filterMenuColumns = useMemo(() => SYMBOL_ANALYSIS_TABLE_COLUMNS.filter((column) => FILTER_MENU_COLUMN_IDS.includes(column.id)), []);
  const dataVisibleColumns = useMemo(
    () =>
      visibleColumnIds
        .map((columnId) => SYMBOL_ANALYSIS_TABLE_COLUMNS.find((column) => column.id === columnId))
        .filter((column): column is SymbolAnalysisColumnConfig => Boolean(column)),
    [visibleColumnIds],
  );
  const selectionColumn = useMemo<SymbolAnalysisSelectionColumn | null>(
    () =>
      enableRowSelection
        ? {
            id: '__selection__',
            label: 'Select',
            group: 'base',
            kind: 'action',
            width: 92,
            sortable: false,
            filterable: false,
            hideable: false,
            visibleByDefault: true,
            renderKind: 'selection',
            description: 'Select this symbol for the active draft.',
          }
        : null,
    [enableRowSelection],
  );
  const visibleColumns = useMemo<VisibleColumn[]>(() => (selectionColumn ? [selectionColumn, ...dataVisibleColumns] : dataVisibleColumns), [dataVisibleColumns, selectionColumn]);

  const filteredRows = useMemo(() => {
    const needle = search.trim().toLowerCase();
    return rows.filter((row) => {
      const matchesSearch = !needle || row.symbol.toLowerCase().includes(needle) || formatSymbolAnalysisSymbol(row.symbol).toLowerCase().includes(needle);
      if (!matchesSearch) return false;
      return Object.entries(filters).every(([columnId, filterValue]) => {
        if (!isFilterActive(filterValue)) return true;
        const value = getRowValue(row, columnId);
        if (columnId === 'lastUpdatedAt') return matchesDateFilter(value as string | null | undefined, filterValue);
        return matchesNumericFilter(value as number | null | undefined, filterValue);
      });
    });
  }, [filters, rows, search]);

  const sortedRows = useMemo(() => [...filteredRows].sort((left, right) => compareSymbolRows(left, right, sort.columnId, sort.direction)), [filteredRows, sort]);
  const virtualRows = useVirtualRows(sortedRows.length, ROW_HEIGHT, 10);
  const visibleRows = sortedRows.slice(virtualRows.start, virtualRows.end);
  const selectedSet = useMemo(() => new Set(selectedSymbols), [selectedSymbols]);
  const selectableSymbols = useMemo(() => sortedRows.map((row) => row.symbol), [sortedRows]);
  const selectedVisibleCount = selectableSymbols.reduce((count, symbol) => (selectedSet.has(symbol) ? count + 1 : count), 0);
  const allSelected = selectableSymbols.length > 0 && selectedVisibleCount === selectableSymbols.length;
  const selectionIndeterminate = selectedVisibleCount > 0 && !allSelected;
  const gridTemplateColumns = visibleColumns.map((column) => `${column.width}px`).join(' ');
  const totalWidth = visibleColumns.reduce((sum, column) => sum + column.width, 0);
  const visibleGroups = visibleColumns.reduce<Array<{ id: ColumnGroup; label: string; span: number }>>((groups, column) => {
    const groupId = getDisplayGroupId(column);
    const lastGroup = groups[groups.length - 1];
    if (lastGroup?.id === groupId) {
      lastGroup.span += 1;
      return groups;
    }
    groups.push({ id: groupId, label: getDisplayGroupLabel(groupId), span: 1 });
    return groups;
  }, []);
  const activeFilterCount = Object.values(filters).reduce<number>((count, value) => count + (isFilterActive(value) ? 1 : 0), 0);
  const sortLabel = SYMBOL_ANALYSIS_TABLE_COLUMNS.find((column) => column.id === sort.columnId)?.label || 'Default';

  const setFilter = (columnId: string, value: unknown) => {
    setFilters((current) => ({ ...current, [columnId]: value }));
  };
  const clearFilter = (columnId: string) => {
    setFilters((current) => {
      const next = { ...current };
      delete next[columnId];
      return next;
    });
  };
  const toggleAll = () => {
    setSelectedSymbols((current) => {
      if (allSelected) return current.filter((symbol) => !selectableSymbols.includes(symbol));
      return Array.from(new Set([...current, ...selectableSymbols]));
    });
  };
  const toggleSymbol = (symbol: string) => {
    setSelectedSymbols((current) => (current.includes(symbol) ? current.filter((entry) => entry !== symbol) : [...current, symbol]));
  };

  return (
    <div
      className="market-symbol-story min-h-screen bg-[var(--bg-app)] p-6 font-sans text-[var(--text-main)]"
      style={
        {
          '--bg-app': '#2f315f',
          '--bg-panel': '#2d305f',
          '--bg-panel-2': '#303466',
          '--table-bg': '#07101e',
          '--table-border': 'rgba(210,216,255,0.82)',
          '--grid-border': 'rgba(255,255,255,0.1)',
          '--accent': '#19c7dc',
          '--success': '#25e0b8',
          '--danger': '#ed6777',
          '--warning': '#ffb347',
          '--text-main': '#f3f5fc',
          backgroundColor: 'var(--bg-app)',
          fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        } as React.CSSProperties
      }
    >
      <style>
        {`
          .market-symbol-story .market-symbol-table {
            background: var(--table-bg) !important;
            border: 2px solid var(--table-border) !important;
            border-radius: 19px !important;
            box-shadow: 0 18px 44px rgba(3, 7, 26, 0.24);
            scrollbar-color: rgba(58, 67, 86, 0.95) rgba(21, 29, 47, 0.95);
          }
          .market-symbol-story .market-symbol-table-shell {
            min-width: var(--market-symbol-table-width);
          }
          .market-symbol-story .market-symbol-header-shell {
            background: var(--table-bg) !important;
            border-bottom: 1px solid var(--grid-border) !important;
          }
          .market-symbol-story .market-symbol-group-row {
            display: grid;
            height: 56px;
            min-height: 56px;
            color: #d9ddeb !important;
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 0.34em;
            line-height: 1;
            text-transform: uppercase;
            border-bottom: 1px solid var(--grid-border) !important;
          }
          .market-symbol-story .market-symbol-group-cell {
            display: flex;
            align-items: center;
            padding: 0 28px;
          }
          .market-symbol-story .market-symbol-column-row {
            display: grid;
            min-height: 74px;
            color: #c5c9d5 !important;
            font-size: 24px;
            font-weight: 700;
            line-height: 1;
          }
          .market-symbol-story .market-symbol-header-button,
          .market-symbol-story .market-symbol-selection-header {
            min-width: 0;
            height: 100%;
            padding: 20px 28px;
            color: #c5c9d5 !important;
            font: inherit;
            line-height: 1;
            background: transparent !important;
          }
          .market-symbol-story .market-symbol-header-button {
            display: flex;
            align-items: center;
            gap: 8px;
            text-align: left;
            transition: background-color 160ms ease;
          }
          .market-symbol-story .market-symbol-header-button:hover {
            background: rgba(255, 255, 255, 0.05) !important;
          }
          .market-symbol-story .market-symbol-selection-header,
          .market-symbol-story .market-symbol-selection-cell {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 24px;
            padding-right: 24px;
          }
          .market-symbol-story .market-symbol-body-row {
            display: grid;
            align-items: stretch;
            color: #f4f6fb !important;
            font-size: 24px;
            font-weight: 600;
            line-height: 1;
            border-bottom: 1px solid var(--grid-border) !important;
            transition: background-color 160ms ease, box-shadow 160ms ease;
          }
          .market-symbol-story .market-symbol-row-even {
            background: rgba(255, 255, 255, 0.006) !important;
          }
          .market-symbol-story .market-symbol-body-row:hover {
            background: rgba(255, 255, 255, 0.05) !important;
          }
          .market-symbol-story .market-symbol-row-selected {
            background: rgba(25, 199, 220, 0.08) !important;
            box-shadow: inset 0 0 0 1px rgba(25, 199, 220, 0.12);
          }
          .market-symbol-story .market-symbol-cell {
            display: flex;
            min-width: 0;
            align-items: center;
            padding-left: 28px;
            padding-right: 28px;
          }
          .market-symbol-story .market-symbol-align-start {
            justify-content: flex-start;
          }
          .market-symbol-story .market-symbol-align-end {
            justify-content: flex-end;
            text-align: right;
          }
          .market-symbol-story .market-symbol-symbol-text {
            color: #f7f8fc !important;
            font-weight: 800;
          }
          .market-symbol-story .market-symbol-positive {
            color: var(--success) !important;
          }
          .market-symbol-story .market-symbol-negative {
            color: var(--danger) !important;
          }
          .market-symbol-story .market-symbol-warning {
            color: var(--warning) !important;
          }
          .market-symbol-story .market-symbol-neutral {
            color: #f4f6fb !important;
          }
          .market-symbol-story .market-symbol-muted {
            color: #98a0b0 !important;
          }
          .market-symbol-story .market-symbol-cell.market-symbol-muted,
          .market-symbol-story .market-symbol-cell .market-symbol-muted {
            font-size: 22px;
          }
          .market-symbol-story .market-symbol-checkbox {
            width: 24px;
            height: 24px;
            border: 1px solid #e5e5df !important;
            border-radius: 3px;
            background-color: #f7f7f1 !important;
            accent-color: var(--accent);
          }
          .market-symbol-story .market-symbol-table::-webkit-scrollbar {
            height: 16px;
            width: 16px;
          }
          .market-symbol-story .market-symbol-table::-webkit-scrollbar-track {
            background: rgba(21, 29, 47, 0.95);
            border-radius: 999px;
          }
          .market-symbol-story .market-symbol-table::-webkit-scrollbar-thumb {
            background: rgba(58, 67, 86, 0.95);
            border-radius: 999px;
          }
          .market-symbol-story .market-symbol-border-r {
            border-right: 1px solid var(--grid-border) !important;
          }
          .market-symbol-story .market-symbol-border-b {
            border-bottom: 1px solid var(--grid-border) !important;
          }
        `}
      </style>
      <div
        className={cn(
          'mx-auto flex w-full max-w-none flex-col',
          showChrome ? 'max-w-[1500px] gap-3 rounded-panel border border-white/8 bg-[var(--bg-panel)] p-4 shadow-panel' : 'gap-0',
        )}
      >
        {showChrome ? (
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">LIVE_SYMBOL_DATA replica</div>
              <h1 className="mt-1 text-xl font-semibold text-white">Market symbol analysis table</h1>
            </div>
            <Text value={search} onChange={setSearch} placeholder="Search symbols" className="w-full sm:w-[260px]" prefix={<Icon name="search" className="h-4 w-4" />} />
          </div>
        ) : null}

        {showChrome ? (
          <div className="relative flex flex-wrap items-center justify-between gap-3 rounded-[10px] border border-white/8 bg-black/10 px-4 py-3 text-xs text-white/55">
            <div className="flex flex-wrap items-center gap-4">
              <span>
                Showing <span className="font-semibold text-white">{formatCompactNumber(sortedRows.length, 0)}</span> of{' '}
                <span className="font-semibold text-white">{formatCompactNumber(rows.length, 0)}</span> symbols
              </span>
              {enableRowSelection ? (
                <span>
                  Selected <span className="font-semibold text-white">{formatCompactNumber(selectedSymbols.length, 0)}</span>
                  {selectedVisibleCount !== selectedSymbols.length ? <span className="text-white/45"> | visible {formatCompactNumber(selectedVisibleCount, 0)}</span> : null}
                </span>
              ) : null}
              <span>
                Sorted by <span className="text-white">{sortLabel}</span> {sort.direction}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="text-white/45">Quote asset USDT</div>
              <Button variant="ghost" size="sm" leftIcon={<Icon name="bars" className="h-4 w-4" />} onClick={() => setOpenMenu((current) => (current === 'sort' ? null : 'sort'))}>
                Sort
              </Button>
              <Button
                variant="ghost"
                size="sm"
                leftIcon={<Icon name="filter" className="h-4 w-4" />}
                className={activeFilterCount ? 'text-[var(--accent)]' : ''}
                onClick={() => setOpenMenu((current) => (current === 'filters' ? null : 'filters'))}
              >
                Filters
                {activeFilterCount ? (
                  <span className="rounded-full border border-[rgba(25,199,220,0.35)] bg-[rgba(25,199,220,0.16)] px-1.5 py-0 text-[10px] leading-4 text-[var(--accent)]">
                    {activeFilterCount}
                  </span>
                ) : null}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                leftIcon={<Icon name="grid" className="h-4 w-4" />}
                onClick={() => setOpenMenu((current) => (current === 'columns' ? null : 'columns'))}
              >
                Columns
              </Button>
              <Button variant="ghost" size="sm" leftIcon={<Icon name="download" className="h-4 w-4" />} disabled={!sortedRows.length}>
                Export CSV
              </Button>
            </div>

            {openMenu === 'sort' ? (
              <div className="absolute right-4 top-[calc(100%+8px)] z-20 w-[280px] rounded-[12px] border border-white/10 bg-[var(--bg-panel)] p-3 shadow-panel">
                <div className="mb-3 text-xs uppercase tracking-[0.14em] text-white/45">Sort rows</div>
                <div className="space-y-3">
                  <SelectBox
                    value={sort.columnId}
                    options={SYMBOL_ANALYSIS_TABLE_COLUMNS.filter((column) => column.sortable !== false).map((column) => ({
                      label: column.group === 'volume' ? `Vol ${column.label}` : column.label,
                      value: column.id,
                    }))}
                    onChange={(value) => setSort((current) => ({ ...current, columnId: String(value) }))}
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant={sort.direction === 'asc' ? 'primary' : 'ghost'} size="sm" onClick={() => setSort((current) => ({ ...current, direction: 'asc' }))}>
                      Ascending
                    </Button>
                    <Button variant={sort.direction === 'desc' ? 'primary' : 'ghost'} size="sm" onClick={() => setSort((current) => ({ ...current, direction: 'desc' }))}>
                      Descending
                    </Button>
                  </div>
                </div>
              </div>
            ) : null}

            {openMenu === 'filters' ? (
              <div className="absolute right-4 top-[calc(100%+8px)] z-20 flex max-h-[min(72vh,620px)] w-[360px] flex-col overflow-hidden rounded-[12px] border border-white/10 bg-[var(--bg-panel)] p-3 shadow-panel">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <div className="text-xs uppercase tracking-[0.14em] text-white/45">Filters</div>
                  <Button variant="ghost" size="sm" onClick={() => setFilters({})}>
                    Clear all
                  </Button>
                </div>
                <div className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain pr-1">
                  {filterMenuColumns.map((column) => {
                    const filterValue = filters[column.id] as Record<string, unknown> | undefined;
                    return (
                      <div key={column.id} className="rounded-[10px] border border-white/8 bg-black/10 p-3">
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <div className="text-sm font-medium text-white">{column.group === 'volume' ? `Vol ${column.label}` : column.label}</div>
                          {isFilterActive(filterValue) ? (
                            <Button variant="ghost" size="sm" onClick={() => clearFilter(column.id)}>
                              Clear
                            </Button>
                          ) : null}
                        </div>
                        {column.kind === 'datetime' ? (
                          <div className="space-y-2">
                            <DateTimeSelector
                              type="datetime-local"
                              value={String(filterValue?.from || '')}
                              onChange={(value) => setFilter(column.id, { ...filterValue, from: value })}
                            />
                            <DateTimeSelector
                              type="datetime-local"
                              value={String(filterValue?.to || '')}
                              onChange={(value) => setFilter(column.id, { ...filterValue, to: value })}
                            />
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-2">
                            <Text
                              type="number"
                              value={String(filterValue?.min || '')}
                              onChange={(value) => setFilter(column.id, { ...filterValue, min: value })}
                              placeholder="Minimum"
                            />
                            <Text
                              type="number"
                              value={String(filterValue?.max || '')}
                              onChange={(value) => setFilter(column.id, { ...filterValue, max: value })}
                              placeholder="Maximum"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}

            {openMenu === 'columns' ? (
              <div className="absolute right-4 top-[calc(100%+8px)] z-20 w-[300px] rounded-[12px] border border-white/10 bg-[var(--bg-panel)] p-3 shadow-panel">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <div className="text-xs uppercase tracking-[0.14em] text-white/45">Visible columns</div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setVisibleColumnIds(SYMBOL_ANALYSIS_TABLE_COLUMNS.filter((column) => column.visibleByDefault !== false).map((column) => column.id))}
                  >
                    Reset
                  </Button>
                </div>
                <div className="max-h-[420px] space-y-2 overflow-auto pr-1">
                  {SYMBOL_ANALYSIS_TABLE_COLUMNS.filter((column) => column.hideable !== false).map((column) => (
                    <label key={column.id} className="flex items-center gap-3 text-sm text-white/75">
                      <input
                        type="checkbox"
                        checked={visibleColumnIds.includes(column.id)}
                        onChange={() =>
                          setVisibleColumnIds((current) => (current.includes(column.id) ? current.filter((columnId) => columnId !== column.id) : [...current, column.id]))
                        }
                        className="h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--accent)]"
                      />
                      <span>{column.group === 'volume' ? `Vol ${column.label}` : column.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}

        <div
          className="market-symbol-table min-h-0 overflow-x-auto rounded-[19px] border-2 border-[var(--table-border)] bg-[var(--table-bg)] shadow-[0_18px_44px_rgba(3,7,26,0.24)]"
          style={{ height: tableHeight, backgroundColor: 'var(--table-bg)', borderColor: 'var(--table-border)' }}
        >
          <div
            style={{ '--market-symbol-table-width': `${totalWidth}px`, minWidth: totalWidth } as React.CSSProperties}
            className="market-symbol-table-shell flex h-full min-h-0 flex-col"
          >
            <div
              className="market-symbol-header-shell market-symbol-border-b shrink-0 border-b border-[var(--grid-border)] bg-[var(--table-bg)]"
              style={{ backgroundColor: 'var(--table-bg)', borderColor: 'var(--grid-border)' }}
            >
              <div
                className="market-symbol-group-row market-symbol-border-b grid min-h-[56px] items-stretch border-b border-[var(--grid-border)] text-[20px] font-bold uppercase tracking-[0.34em] text-[#d9ddeb]"
                style={{ gridTemplateColumns, borderColor: 'var(--grid-border)' }}
              >
                {visibleGroups.map((group) => (
                  <div
                    key={group.id}
                    className="market-symbol-group-cell market-symbol-border-r flex items-center border-r border-[var(--grid-border)] px-7 last:border-r-0"
                    style={{ gridColumn: `span ${group.span}`, borderColor: 'var(--grid-border)' }}
                  >
                    {group.label}
                  </div>
                ))}
              </div>
              <div className="market-symbol-column-row grid min-h-[74px] items-stretch text-[24px] font-bold leading-none text-[#c5c9d5]" style={{ gridTemplateColumns }}>
                {visibleColumns.map((column) => {
                  if (column.id === '__selection__') {
                    return (
                      <div
                        key={column.id}
                        className="market-symbol-selection-header market-symbol-border-r flex h-full items-center justify-center border-r border-[var(--grid-border)] px-6 py-5 last:border-r-0"
                      >
                        <SelectionCheckbox
                          checked={allSelected}
                          indeterminate={selectionIndeterminate}
                          disabled={!selectableSymbols.length}
                          onChange={toggleAll}
                          ariaLabel="Select all visible symbols"
                        />
                      </div>
                    );
                  }
                  const isSorted = sort.columnId === column.id;
                  return (
                    <button
                      key={column.id}
                      type="button"
                      onClick={() =>
                        setSort((current) =>
                          current.columnId !== column.id
                            ? { columnId: column.id, direction: 'asc' }
                            : { columnId: column.id, direction: current.direction === 'asc' ? 'desc' : 'asc' },
                        )
                      }
                      className={cn(
                        'market-symbol-header-button market-symbol-border-r group flex h-full min-w-0 items-center gap-2 border-r border-[var(--grid-border)] px-7 py-5 text-left text-[#c5c9d5] transition last:border-r-0 hover:bg-white/5',
                        getDisplayGroupId(column) === 'base' ? 'market-symbol-align-start justify-start' : 'market-symbol-align-end justify-end',
                      )}
                    >
                      <HeaderTooltip label={getColumnHeaderLabel(column)} description={column.description} columnId={column.id} />
                      {isSorted ? (
                        <span className="text-[15px] text-[var(--accent)]">{sort.direction === 'asc' ? '▲' : '▼'}</span>
                      ) : (
                        <span className="text-[22px] leading-none text-[#394255]">•</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div ref={virtualRows.scrollRef} className="min-h-0 flex-1 overflow-y-auto" onScroll={virtualRows.onScroll}>
              {sortedRows.length ? (
                <div className="relative" style={{ height: virtualRows.totalHeight }}>
                  {visibleRows.map((row, index) => {
                    const rowIndex = virtualRows.start + index;
                    return (
                      <div
                        key={row.symbol}
                        className={cn(
                          'market-symbol-body-row market-symbol-border-b absolute left-0 right-0 grid items-stretch border-b border-[var(--grid-border)] text-[24px] font-semibold leading-none text-[#f4f6fb] transition',
                          rowIndex % 2 === 0 ? 'market-symbol-row-even bg-white/[0.006]' : 'bg-transparent',
                          selectedSet.has(row.symbol)
                            ? 'market-symbol-row-selected bg-[rgba(25,199,220,0.08)] ring-1 ring-inset ring-[rgba(25,199,220,0.12)] hover:bg-[rgba(25,199,220,0.12)]'
                            : 'hover:bg-white/[0.05]',
                        )}
                        style={{ gridTemplateColumns, top: rowIndex * ROW_HEIGHT, height: ROW_HEIGHT }}
                      >
                        {visibleColumns.map((column) => renderCell(row, column, selectedSet, toggleSymbol))}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex h-full min-h-[220px] items-center justify-center px-6 py-10 text-center text-sm text-white/55">
                  No live symbol data matches the current search.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderCell(row: SymbolAnalysisRow, column: VisibleColumn, selectedSet: Set<string>, toggleSymbol: (symbol: string) => void) {
  if (column.id === '__selection__') {
    return (
      <div key={column.id} className="market-symbol-selection-cell market-symbol-border-r flex items-center justify-center border-r border-[var(--grid-border)] px-6">
        <SelectionCheckbox
          checked={selectedSet.has(row.symbol)}
          indeterminate={false}
          onChange={() => toggleSymbol(row.symbol)}
          ariaLabel={`Select ${formatSymbolAnalysisSymbol(row.symbol)}`}
        />
      </div>
    );
  }

  const value = getRowValue(row, column.id);
  const cellClass = cn(
    'market-symbol-cell market-symbol-border-r flex min-w-0 items-center border-r border-[var(--grid-border)] px-7',
    getDisplayGroupId(column) === 'base' ? 'market-symbol-align-start justify-start' : 'market-symbol-align-end justify-end',
    column.renderKind === 'datetime' && 'market-symbol-muted text-[22px] text-[#98a0b0]',
  );

  if (column.id === 'symbol') {
    return (
      <div key={column.id} className={cellClass}>
        <span className="market-symbol-symbol-text truncate font-extrabold text-[#f7f8fc]" title={row.symbol}>
          {formatSymbolAnalysisSymbol(row.symbol)}
        </span>
      </div>
    );
  }
  if (column.renderKind === 'datetime') {
    return (
      <div key={column.id} className={cellClass}>
        <span className="market-symbol-muted truncate text-[#98a0b0]" title={String(value || '')}>
          {formatDateTime(value)}
        </span>
      </div>
    );
  }
  if (column.renderKind === 'usd') {
    const numeric = value == null ? null : Number(value);
    const text =
      column.id === 'grossProfitUsd' || column.id === 'profitTradeSizeUsd'
        ? formatSignedUsd(numeric, 'positive')
        : column.id === 'grossLossUsd' || column.id === 'lossTradeSizeUsd'
          ? formatSignedUsd(numeric, 'negative')
          : renderNumberCell(numeric, 'usd');
    const tone =
      column.id === 'grossProfitUsd' || column.id === 'profitTradeSizeUsd'
        ? 'market-symbol-positive text-[var(--success)]'
        : column.id === 'grossLossUsd' || column.id === 'lossTradeSizeUsd'
          ? 'market-symbol-negative text-[var(--danger)]'
          : 'market-symbol-neutral text-[#f4f6fb]';
    return (
      <div key={column.id} className={cellClass}>
        <span className={cn('tabular-nums', tone)}>{text}</span>
      </div>
    );
  }
  if (column.renderKind === 'compact') {
    const numeric = value == null ? null : Number(value);
    return (
      <div key={column.id} className={cellClass}>
        <span className="market-symbol-neutral tabular-nums text-[#f4f6fb]">{renderNumberCell(numeric, 'compact')}</span>
      </div>
    );
  }
  if (column.renderKind === 'pct' || column.renderKind === 'score') {
    const numeric = value == null ? null : Number(value);
    return (
      <div key={column.id} className={cellClass}>
        <span
          className={cn(
            'tabular-nums',
            numeric == null
              ? 'market-symbol-muted text-white/45'
              : isPositive(numeric)
                ? 'market-symbol-positive text-[var(--success)]'
                : numeric < 0
                  ? 'market-symbol-negative text-[var(--danger)]'
                  : 'market-symbol-neutral text-[#f4f6fb]',
          )}
        >
          {renderNumberCell(numeric, column.renderKind)}
        </span>
      </div>
    );
  }
  if (column.renderKind === 'integer' || column.renderKind === 'bps') {
    const numeric = value == null ? null : Number(value);
    return (
      <div key={column.id} className={cellClass}>
        <span className="market-symbol-neutral tabular-nums text-[#f4f6fb]">{renderNumberCell(numeric, column.renderKind)}</span>
      </div>
    );
  }
  if (column.renderKind === 'decision') {
    const text = String(value || 'Pending');
    const tone =
      text === 'Accepted'
        ? 'market-symbol-positive text-[var(--success)]'
        : text === 'Rejected'
          ? 'market-symbol-negative text-[var(--danger)]'
          : text === 'Watch'
            ? 'market-symbol-warning text-[var(--warning)]'
            : 'market-symbol-muted text-white/60';
    return (
      <div key={column.id} className={cellClass}>
        <DecisionReasonBadge
          label={<span className={cn('font-medium', tone)}>{text}</span>}
          title={`${column.label} reasons`}
          reasons={decisionReasonsForColumn(row, column.id)}
          footer={decisionFooter(row, column.id)}
        />
      </div>
    );
  }
  if (column.renderKind === 'duration') {
    const numeric = value == null ? null : Number(value);
    return (
      <div key={column.id} className={cellClass}>
        <span className={cn('tabular-nums', numeric == null ? 'market-symbol-muted text-white/45' : 'market-symbol-neutral text-[#f4f6fb]')}>{formatWatchDuration(numeric)}</span>
      </div>
    );
  }
  if (column.renderKind === 'pnl') {
    const numeric = value == null ? null : Number(value);
    return (
      <div key={column.id} className={cellClass}>
        <span
          className={cn(
            'tabular-nums',
            numeric == null
              ? 'market-symbol-muted text-white/45'
              : isPositive(numeric)
                ? 'market-symbol-positive text-[var(--success)]'
                : numeric < 0
                  ? 'market-symbol-negative text-[var(--danger)]'
                  : 'market-symbol-neutral text-[#f4f6fb]',
          )}
        >
          {formatSignedUsd(numeric)}
        </span>
      </div>
    );
  }
  return (
    <div key={column.id} className={cellClass}>
      <span className="truncate">{String(value ?? '-')}</span>
    </div>
  );
}

interface MarketSymbolStoryArgs {
  search: string;
  openMenu: 'none' | 'sort' | 'filters' | 'columns';
  enableRowSelection: boolean;
  tableHeight: number;
  showChrome: boolean;
}

type Story = StoryObj<MarketSymbolStoryArgs>;
const recipeImplementationSource = storySource.slice(storySource.indexOf('const ROW_HEIGHT'), storySource.indexOf('interface MarketSymbolStoryArgs')).trim();
const marketSymbolDataTableRecipeSource = `import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Button, DateTimeSelector, Icon, SelectBox, Text, Tooltip } from '@react/ui';
import '@react/ui/styles.css';

${recipeImplementationSource}

export function Example() {
  return <MarketSymbolDataTableRecipe />;
}
`;

export const ExactMarketSymbolDataTable: Story = {
  args: {
    search: '',
    openMenu: 'none',
    enableRowSelection: true,
    tableHeight: 524,
    showChrome: false,
  },
  argTypes: {
    search: { control: 'text', table: { category: 'Recipe controls' } },
    openMenu: { control: 'select', options: ['none', 'sort', 'filters', 'columns'], table: { category: 'Recipe controls' } },
    enableRowSelection: { control: 'boolean', table: { category: 'Recipe controls' } },
    tableHeight: { control: { type: 'number', min: 320, max: 760, step: 4 }, table: { category: 'Recipe controls' } },
    showChrome: { control: 'boolean', table: { category: 'Recipe controls' } },
  },
  parameters: docsSource(
    marketSymbolDataTableRecipeSource,
    'Exact SymbolAnalysisTable visual recipe: captured live market rows, old bot colors, grouped columns, signed coloring, decision tooltips, sort, filters, columns, selection, and horizontal scrolling.',
  ),
  render: (args) => (
    <MarketSymbolDataTableRecipe
      initialSearch={args.search}
      initialOpenMenu={args.openMenu === 'none' ? null : args.openMenu}
      enableRowSelection={args.enableRowSelection}
      tableHeight={args.tableHeight}
      showChrome={args.showChrome}
    />
  ),
};

export const FiltersOpen: Story = {
  ...ExactMarketSymbolDataTable,
  args: {
    ...ExactMarketSymbolDataTable.args,
    openMenu: 'filters',
    showChrome: true,
  },
};

export const ColumnsOpen: Story = {
  ...ExactMarketSymbolDataTable,
  args: {
    ...ExactMarketSymbolDataTable.args,
    openMenu: 'columns',
    showChrome: true,
  },
};
