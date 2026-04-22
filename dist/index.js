import { jsx as t, jsxs as o, Fragment as fr } from "react/jsx-runtime";
import hr, { createContext as Or, useContext as $r, useMemo as Y, forwardRef as Ze, isValidElement as mr, useState as ce, useRef as fe, useEffect as ae, useCallback as Ce, useId as xt } from "react";
import { createPortal as Bt } from "react-dom";
function s(...e) {
  return e.filter(Boolean).join(" ");
}
const br = "default", pr = {
  bgApp: "#5d6180",
  bgSurface: "#2d305f",
  bgSurface2: "#303466",
  bgCard: "#2d305f",
  bgCard2: "#303466",
  bgPanel: "#2d305f",
  bgPanel2: "#303466",
  bgInput: "rgba(25, 199, 220, 0.08)",
  borderSoft: "rgba(255, 255, 255, 0.08)",
  borderStrong: "rgba(255, 255, 255, 0.12)",
  textPrimary: "#f3f5fc",
  textSecondary: "#b0b6d3",
  textTertiary: "#8f95b7",
  accent: "#19c7dc",
  accentStrong: "#0fd1df",
  accentSoft: "rgba(25, 199, 220, 0.18)",
  accentMuted: "rgba(25, 199, 220, 0.08)",
  accentBorder: "rgba(25, 199, 220, 0.45)",
  accentBorderSoft: "rgba(25, 199, 220, 0.35)",
  accentContrast: "#ffffff",
  accentSoftText: "#ffffff",
  accentOutlineText: "#ffffff",
  success: "#17e4b6",
  successSoft: "rgba(23, 228, 182, 0.18)",
  successBorder: "rgba(23, 228, 182, 0.55)",
  warning: "#ffb347",
  warningSoft: "rgba(255, 179, 71, 0.18)",
  warningBorder: "rgba(255, 179, 71, 0.55)",
  danger: "#f06d78",
  dangerSoft: "rgba(240, 109, 120, 0.18)",
  dangerBorder: "rgba(240, 109, 120, 0.55)",
  logBg: "#0b1022",
  logRowBg: "transparent",
  logBorder: "rgba(255, 255, 255, 0.06)",
  logPayloadBg: "rgba(0, 0, 0, 0.2)",
  logPayloadPreBg: "#070b18",
  shadowPanel: "0 14px 30px rgba(6, 9, 35, 0.22)",
  radiusPanel: "14px",
  radiusControl: "4px"
}, xr = {
  default: {},
  accent: {},
  cyan: {},
  teal: {
    bgInput: "rgba(25, 211, 168, 0.08)",
    accent: "#19d3a8",
    accentStrong: "#11b891",
    accentSoft: "rgba(25, 211, 168, 0.14)",
    accentMuted: "rgba(25, 211, 168, 0.08)",
    accentBorder: "rgba(25, 211, 168, 0.35)",
    accentBorderSoft: "rgba(25, 211, 168, 0.28)"
  },
  success: {
    bgInput: "rgba(25, 211, 168, 0.08)",
    accent: "#19d3a8",
    accentStrong: "#11b891",
    accentSoft: "rgba(25, 211, 168, 0.14)",
    accentMuted: "rgba(25, 211, 168, 0.08)",
    accentBorder: "rgba(25, 211, 168, 0.35)",
    accentBorderSoft: "rgba(25, 211, 168, 0.28)"
  },
  warning: {
    bgInput: "rgba(240, 180, 79, 0.08)",
    accent: "#f0b44f",
    accentStrong: "#d99725",
    accentSoft: "rgba(240, 180, 79, 0.14)",
    accentMuted: "rgba(240, 180, 79, 0.08)",
    accentBorder: "rgba(240, 180, 79, 0.35)",
    accentBorderSoft: "rgba(240, 180, 79, 0.28)"
  },
  danger: {
    bgInput: "rgba(235, 106, 118, 0.08)",
    accent: "#eb6a76",
    accentStrong: "#d84d5c",
    accentSoft: "rgba(235, 106, 118, 0.14)",
    accentMuted: "rgba(235, 106, 118, 0.08)",
    accentBorder: "rgba(235, 106, 118, 0.35)",
    accentBorderSoft: "rgba(235, 106, 118, 0.28)"
  },
  neutral: {
    bgInput: "rgba(255, 255, 255, 0.06)",
    accent: "#c1c8dc",
    accentStrong: "#f5f7ff",
    accentSoft: "rgba(255, 255, 255, 0.08)",
    accentMuted: "rgba(255, 255, 255, 0.05)",
    accentBorder: "rgba(255, 255, 255, 0.16)",
    accentBorderSoft: "rgba(255, 255, 255, 0.10)"
  }
}, et = {
  bgApp: "#f9fafb",
  bgSurface: "#ffffff",
  bgSurface2: "#f9fafb",
  bgCard: "#ffffff",
  bgCard2: "#f9fafb",
  bgPanel: "#ffffff",
  bgPanel2: "#f9fafb",
  bgInput: "#ecf3ff",
  borderSoft: "#e4e7ec",
  borderStrong: "#d0d5dd",
  textPrimary: "#101828",
  textSecondary: "#475467",
  textTertiary: "#667085",
  accentContrast: "#ffffff",
  success: "#12b76a",
  successSoft: "#ecfdf3",
  successBorder: "#6ce9a6",
  warning: "#f79009",
  warningSoft: "#fffaeb",
  warningBorder: "rgba(247, 144, 9, 0.36)",
  danger: "#f04438",
  dangerSoft: "#fef3f2",
  dangerBorder: "#fda29b",
  shadowPanel: "0 1px 2px rgba(16, 24, 40, 0.05)",
  radiusPanel: "16px",
  radiusControl: "8px"
};
Object.assign(xr, {
  light: {
    ...et,
    accent: "#465fff",
    accentStrong: "#3641f5",
    accentSoft: "#ecf3ff",
    accentMuted: "rgba(70, 95, 255, 0.08)",
    accentBorder: "#9cb9ff",
    accentBorderSoft: "#dde9ff",
    accentSoftText: "#465fff",
    accentOutlineText: "#465fff"
  },
  tailadmin: {
    ...et,
    accent: "#465fff",
    accentStrong: "#3641f5",
    accentSoft: "#ecf3ff",
    accentMuted: "rgba(70, 95, 255, 0.08)",
    accentBorder: "#9cb9ff",
    accentBorderSoft: "#dde9ff",
    accentSoftText: "#465fff",
    accentOutlineText: "#465fff"
  },
  "light-blue": {
    ...et,
    accent: "#0ba5ec",
    bgInput: "#f0f9ff",
    accentStrong: "#007aff",
    accentSoft: "#f0f9ff",
    accentMuted: "rgba(11, 165, 236, 0.08)",
    accentBorder: "#569ff7",
    accentBorderSoft: "rgba(11, 165, 236, 0.22)",
    accentSoftText: "#0ba5ec",
    accentOutlineText: "#0ba5ec"
  },
  "light-success": {
    ...et,
    accent: "#12b76a",
    bgInput: "#ecfdf3",
    accentStrong: "#039855",
    accentSoft: "#ecfdf3",
    accentMuted: "rgba(18, 183, 106, 0.08)",
    accentBorder: "#6ce9a6",
    accentBorderSoft: "rgba(18, 183, 106, 0.22)",
    accentSoftText: "#05603a",
    accentOutlineText: "#039855"
  },
  "light-warning": {
    ...et,
    accent: "#f79009",
    bgInput: "#fffaeb",
    accentStrong: "#dc6803",
    accentSoft: "#fffaeb",
    accentMuted: "rgba(247, 144, 9, 0.08)",
    accentBorder: "rgba(247, 144, 9, 0.42)",
    accentBorderSoft: "rgba(247, 144, 9, 0.24)",
    accentSoftText: "#dc6803",
    accentOutlineText: "#dc6803"
  },
  "light-danger": {
    ...et,
    accent: "#f04438",
    bgInput: "#fef3f2",
    accentStrong: "#d92d20",
    accentSoft: "#fef3f2",
    accentMuted: "rgba(240, 68, 56, 0.08)",
    accentBorder: "#fda29b",
    accentBorderSoft: "rgba(240, 68, 56, 0.22)",
    accentSoftText: "#912018",
    accentOutlineText: "#d92d20"
  },
  "light-neutral": {
    ...et,
    accent: "#667085",
    bgInput: "#f2f4f7",
    accentStrong: "#344054",
    accentSoft: "#f2f4f7",
    accentMuted: "rgba(16, 24, 40, 0.05)",
    accentBorder: "#d0d5dd",
    accentBorderSoft: "#e4e7ec",
    accentSoftText: "#344054",
    accentOutlineText: "#344054"
  }
});
const gr = Or(null);
function vr(e, r, i) {
  return {
    ...pr,
    ...xr[e] || {},
    ...(r == null ? void 0 : r[e]) || {},
    ...i || {}
  };
}
function yr(e) {
  const r = { ...pr, ...e };
  return {
    "--rui-bg-app": r.bgApp,
    "--rui-bg-surface": r.bgSurface,
    "--rui-bg-surface-2": r.bgSurface2,
    "--rui-bg-card": r.bgCard,
    "--rui-bg-card-2": r.bgCard2,
    "--rui-bg-panel": r.bgPanel,
    "--rui-bg-panel-2": r.bgPanel2,
    "--rui-bg-input": r.bgInput,
    "--rui-border-soft": r.borderSoft,
    "--rui-border-strong": r.borderStrong,
    "--rui-text-primary": r.textPrimary,
    "--rui-text-secondary": r.textSecondary,
    "--rui-text-tertiary": r.textTertiary,
    "--rui-text-main": r.textPrimary,
    "--rui-text-soft": r.textSecondary,
    "--rui-text-muted": r.textTertiary,
    "--rui-accent": r.accent,
    "--rui-accent-strong": r.accentStrong,
    "--rui-accent-soft": r.accentSoft,
    "--rui-accent-muted": r.accentMuted,
    "--rui-accent-border": r.accentBorder,
    "--rui-accent-border-soft": r.accentBorderSoft,
    "--rui-accent-contrast": r.accentContrast,
    "--rui-accent-soft-text": r.accentSoftText,
    "--rui-accent-outline-text": r.accentOutlineText,
    "--rui-success": r.success,
    "--rui-success-soft": r.successSoft,
    "--rui-success-border": r.successBorder,
    "--rui-warning": r.warning,
    "--rui-warning-soft": r.warningSoft,
    "--rui-warning-border": r.warningBorder,
    "--rui-danger": r.danger,
    "--rui-danger-soft": r.dangerSoft,
    "--rui-danger-border": r.dangerBorder,
    "--rui-log-bg": r.logBg,
    "--rui-log-row-bg": r.logRowBg,
    "--rui-log-border": r.logBorder,
    "--rui-log-payload-bg": r.logPayloadBg,
    "--rui-log-payload-pre-bg": r.logPayloadPreBg,
    "--rui-shadow-panel": r.shadowPanel,
    "--rui-radius-panel": r.radiusPanel,
    "--rui-radius-control": r.radiusControl
  };
}
function Fr(e, r) {
  const i = $r(gr), d = !!(i || e || r), l = (i == null ? void 0 : i.accentKey) ?? e ?? br, c = Y(
    () => vr(l, i == null ? void 0 : i.accents, i != null && i.tokens ? { ...i.tokens, ...r } : r),
    [i == null ? void 0 : i.accents, i == null ? void 0 : i.tokens, l, r]
  ), a = Y(() => d ? yr(c) : void 0, [d, c]);
  return { accentKey: l, tokens: c, style: a };
}
function be(e, r, i) {
  const d = Fr(e, i);
  return Y(() => d.style ? { ...d.style, ...r } : r, [d.style, r]);
}
function _n({ accentKey: e = br, accents: r, tokens: i, children: d, className: l, style: c }) {
  const a = Y(() => ({ accentKey: e, accents: r, tokens: i }), [e, r, i]), u = Y(() => ({ ...yr(vr(e, r, i)), ...c }), [e, r, c, i]);
  return /* @__PURE__ */ t(gr.Provider, { value: a, children: /* @__PURE__ */ t("div", { className: s("rui-theme", l), style: u, children: d }) });
}
const Hr = {
  neutral: "border-[var(--rui-border-soft)] bg-white/[0.06] text-[var(--rui-text-secondary)]",
  accent: "border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] text-[var(--rui-accent)]",
  success: "border-[var(--rui-success-border)] bg-[var(--rui-success-soft)] text-[var(--rui-success)]",
  warning: "border-[var(--rui-warning-border)] bg-[var(--rui-warning-soft)] text-[var(--rui-warning)]",
  danger: "border-[var(--rui-danger-border)] bg-[var(--rui-danger-soft)] text-[var(--rui-danger)]",
  info: "border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] text-[var(--rui-accent-soft-text)]"
};
function wr({ children: e, tone: r = "accent", className: i, accentKey: d, style: l, ...c }) {
  const a = be(d, l);
  return /* @__PURE__ */ t(
    "span",
    {
      style: a,
      className: s("inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium leading-5", Hr[r], i),
      ...c,
      children: e
    }
  );
}
const Vr = {
  info: { bg: "var(--rui-accent-soft)", border: "var(--rui-accent-border)", text: "var(--rui-text-primary)" },
  accent: { bg: "var(--rui-accent-soft)", border: "var(--rui-accent-border)", text: "var(--rui-text-primary)" },
  success: { bg: "var(--rui-success-soft)", border: "var(--rui-success-border)", text: "var(--rui-text-primary)" },
  warning: { bg: "var(--rui-warning-soft)", border: "var(--rui-warning-border)", text: "var(--rui-text-primary)" },
  danger: { bg: "var(--rui-danger-soft)", border: "var(--rui-danger-border)", text: "var(--rui-text-primary)" },
  neutral: { bg: "var(--rui-bg-panel-2)", border: "var(--rui-border-soft)", text: "var(--rui-text-primary)" }
};
function zn({
  tone: e = "info",
  title: r,
  children: i,
  actions: d,
  icon: l,
  className: c,
  contentClassName: a,
  titleClassName: u,
  actionsClassName: m,
  accentClassName: h,
  accentKey: b,
  accentColor: v,
  backgroundColor: N,
  borderColor: A,
  textColor: j,
  showToneBadge: B = !1
}) {
  const I = Vr[e], p = {
    borderColor: A ?? I.border,
    background: N ?? I.bg,
    color: j ?? I.text,
    boxShadow: "0 16px 36px rgba(4, 8, 26, 0.22)",
    "--rui-banner-accent": v ?? A ?? I.border
  }, D = be(b, p);
  return /* @__PURE__ */ o("section", { className: s("relative overflow-hidden rounded-[var(--rui-radius-panel)] border px-4 py-3", v && "pl-5", c), style: D, children: [
    v ? /* @__PURE__ */ t("div", { "aria-hidden": "true", className: s("absolute inset-y-0 left-0 w-1 bg-[var(--rui-banner-accent)]", h) }) : null,
    /* @__PURE__ */ o("div", { className: s("flex items-start gap-3", a), children: [
      l ? /* @__PURE__ */ t("div", { className: "mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)] text-inherit", children: l }) : null,
      /* @__PURE__ */ o("div", { className: "min-w-0 flex-1", children: [
        r ? /* @__PURE__ */ o("div", { className: s("mb-1 flex items-center gap-2 text-sm font-semibold", u), children: [
          r,
          B ? /* @__PURE__ */ t(wr, { tone: e === "neutral" ? "neutral" : e === "accent" ? "accent" : e, children: e }) : null
        ] }) : null,
        /* @__PURE__ */ t("div", { className: "text-sm leading-6 opacity-90", children: i })
      ] }),
      d ? /* @__PURE__ */ t("div", { className: s("flex flex-shrink-0 items-center gap-2", m), children: d }) : null
    ] })
  ] });
}
const Zr = {
  primary: "border border-[var(--rui-accent)] bg-[var(--rui-accent)] text-[var(--rui-accent-contrast)] hover:brightness-110 focus-visible:ring-[var(--rui-accent)]",
  secondary: "border border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] text-[var(--rui-accent-soft-text)] hover:brightness-110 focus-visible:ring-[var(--rui-accent)]",
  outline: "border border-[var(--rui-accent)] bg-transparent text-[var(--rui-accent-outline-text)] hover:bg-[var(--rui-accent-muted)] focus-visible:ring-[var(--rui-accent)]",
  ghost: "border border-[var(--rui-border-soft)] bg-transparent text-[var(--rui-text-secondary)] hover:bg-[var(--rui-accent-muted)] hover:text-[var(--rui-text-primary)] focus-visible:ring-[var(--rui-accent)]",
  danger: "border border-[var(--rui-danger-border)] bg-[var(--rui-danger-soft)] text-[var(--rui-text-primary)] hover:bg-[var(--rui-danger-soft)] focus-visible:ring-[var(--rui-danger)]",
  success: "border border-[var(--rui-success-border)] bg-[var(--rui-success-soft)] text-[var(--rui-text-primary)] hover:bg-[var(--rui-success-soft)] focus-visible:ring-[var(--rui-success)]",
  warning: "border border-[var(--rui-warning-border)] bg-[var(--rui-warning-soft)] text-[var(--rui-text-primary)] hover:bg-[var(--rui-warning-soft)] focus-visible:ring-[var(--rui-warning)]",
  subtle: "border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)] text-[var(--rui-text-primary)] hover:bg-[var(--rui-accent-muted)] focus-visible:ring-[var(--rui-accent)]",
  icon: "border border-[var(--rui-border-soft)] bg-transparent text-[var(--rui-text-secondary)] hover:bg-[var(--rui-accent-muted)] hover:text-[var(--rui-text-primary)] focus-visible:ring-[var(--rui-accent)]"
}, Gr = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-sm"
};
function Jr() {
  return /* @__PURE__ */ o("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", className: "h-4 w-4 animate-spin", children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "9", fill: "none", stroke: "currentColor", strokeWidth: "2", opacity: "0.18" }),
    /* @__PURE__ */ t("path", { d: "M21 12a9 9 0 0 0-9-9", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
  ] });
}
function Ur(e) {
  return mr(e) && String(e.props.className || "").split(/\s+/).includes("sr-only");
}
const ve = Ze(function({
  className: r,
  children: i,
  variant: d = "outline",
  size: l = "md",
  leftIcon: c,
  rightIcon: a,
  leftIconClassName: u,
  rightIconClassName: m,
  accentKey: h,
  loading: b = !1,
  fullWidth: v = !1,
  type: N = "button",
  disabled: A,
  style: j,
  ...B
}, I) {
  const p = A || b, D = be(h, j), V = i != null && i !== !1, Z = Ur(i), G = V && !Z && !c && !a && mr(i);
  return /* @__PURE__ */ o(
    "button",
    {
      ref: I,
      type: N,
      disabled: p,
      "aria-busy": b || void 0,
      style: D,
      className: s(
        "inline-flex items-center justify-center gap-2 rounded-[8px] font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:border-white/5 disabled:bg-white/5 disabled:text-white/35 disabled:opacity-80",
        Zr[d],
        Gr[l],
        v && "w-full",
        r
      ),
      ...B,
      children: [
        b ? /* @__PURE__ */ t(Jr, {}) : c ? /* @__PURE__ */ t("span", { className: s("inline-flex shrink-0 items-center", u), children: c }) : null,
        V ? Z ? i : /* @__PURE__ */ t("span", { className: s("inline-flex items-center justify-center", G ? "shrink-0" : "min-w-0 truncate"), children: i }) : null,
        a ? /* @__PURE__ */ t("span", { className: s("inline-flex shrink-0 items-center", m), children: a }) : null
      ]
    }
  );
}), ir = {
  none: "",
  sm: "p-3",
  md: "p-5",
  lg: "p-6"
};
function Xr(e) {
  return e === !1 || e === "none" ? "" : e === !0 ? ir.md : ir[e];
}
const On = Ze(function({ children: r, className: i, contentClassName: d, padded: l = !0, interactive: c = !1, accentKey: a, style: u, ...m }, h) {
  const b = be(a, u);
  return /* @__PURE__ */ t(
    "div",
    {
      ref: h,
      style: b,
      className: s(
        "rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] text-[var(--rui-text-primary)] shadow-panel",
        c && "transition hover:border-[var(--rui-accent-border-soft)] hover:bg-[var(--rui-bg-panel-2)]",
        Xr(l),
        i
      ),
      ...m,
      children: d ? /* @__PURE__ */ t("div", { className: d, children: r }) : r
    }
  );
}), ar = {
  neutral: "border-[var(--rui-border-soft)] bg-[linear-gradient(180deg,var(--rui-bg-surface-2),var(--rui-bg-card))]",
  accent: "border-[var(--rui-accent-border-soft)] bg-[linear-gradient(180deg,var(--rui-accent-muted),var(--rui-bg-card))]",
  success: "border-[var(--rui-success-border)] bg-[linear-gradient(180deg,var(--rui-success-soft),var(--rui-bg-card))]",
  warning: "border-[var(--rui-warning-border)] bg-[linear-gradient(180deg,var(--rui-warning-soft),var(--rui-bg-card))]",
  danger: "border-[var(--rui-danger-border)] bg-[linear-gradient(180deg,var(--rui-danger-soft),var(--rui-bg-card))]"
};
function $n({
  title: e,
  value: r,
  helper: i,
  leading: d,
  trailing: l,
  tone: c = "accent",
  selected: a = !1,
  disabled: u = !1,
  onClick: m,
  accentKey: h,
  style: b,
  className: v,
  contentClassName: N,
  titleClassName: A,
  valueClassName: j,
  helperClassName: B
}) {
  const I = !!m, p = be(h, b);
  return I ? /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: m,
      disabled: u,
      "aria-pressed": a,
      style: p,
      className: s(
        "rounded-[var(--rui-radius-panel)] border p-4 text-left outline-none transition",
        ar[c],
        a && "border-[var(--rui-accent-border)] shadow-[0_0_0_1px_var(--rui-accent-muted)]",
        !u && "cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.36)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0",
        u && "cursor-not-allowed opacity-60",
        v
      ),
      children: /* @__PURE__ */ o("div", { className: s("flex h-full min-h-[104px] flex-col justify-between gap-3", N), children: [
        /* @__PURE__ */ o("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ o("div", { className: "min-w-0", children: [
            e ? /* @__PURE__ */ t("div", { className: s("text-xs uppercase tracking-[0.18em] text-[var(--rui-text-tertiary)]", A), children: e }) : null,
            r ? /* @__PURE__ */ t("div", { className: s("mt-2 text-2xl font-semibold text-[var(--rui-text-primary)]", j), children: r }) : null
          ] }),
          l ? /* @__PURE__ */ t("div", { className: "flex-shrink-0", children: l }) : null
        ] }),
        /* @__PURE__ */ o("div", { className: "flex items-end justify-between gap-3", children: [
          i ? /* @__PURE__ */ t("div", { className: s("text-sm text-[var(--rui-text-secondary)]", B), children: i }) : /* @__PURE__ */ t("span", {}),
          d ? /* @__PURE__ */ t("div", { className: "flex-shrink-0 text-[var(--rui-text-secondary)]", children: d }) : null
        ] })
      ] })
    }
  ) : /* @__PURE__ */ t(
    "div",
    {
      style: p,
      className: s(
        "rounded-[var(--rui-radius-panel)] border p-4 text-left outline-none transition",
        ar[c],
        a && "border-[var(--rui-accent-border)] shadow-[0_0_0_1px_var(--rui-accent-muted)]",
        v
      ),
      children: /* @__PURE__ */ o("div", { className: s("flex h-full min-h-[104px] flex-col justify-between gap-3", N), children: [
        /* @__PURE__ */ o("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ o("div", { className: "min-w-0", children: [
            e ? /* @__PURE__ */ t("div", { className: s("text-xs uppercase tracking-[0.18em] text-[var(--rui-text-tertiary)]", A), children: e }) : null,
            r ? /* @__PURE__ */ t("div", { className: s("mt-2 text-2xl font-semibold text-[var(--rui-text-primary)]", j), children: r }) : null
          ] }),
          l ? /* @__PURE__ */ t("div", { className: "flex-shrink-0", children: l }) : null
        ] }),
        /* @__PURE__ */ o("div", { className: "flex items-end justify-between gap-3", children: [
          i ? /* @__PURE__ */ t("div", { className: s("text-sm text-[var(--rui-text-secondary)]", B), children: i }) : /* @__PURE__ */ t("span", {}),
          d ? /* @__PURE__ */ t("div", { className: "flex-shrink-0 text-[var(--rui-text-secondary)]", children: d }) : null
        ] })
      ] })
    }
  );
}
const g = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
function T({ className: e, title: r, children: i, viewBox: d = "0 0 24 24", ...l }) {
  return /* @__PURE__ */ o("svg", { viewBox: d, className: s("h-5 w-5 shrink-0", e), "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ...l, children: [
    r ? /* @__PURE__ */ t("title", { children: r }) : null,
    i
  ] });
}
function Be({ name: e, ...r }) {
  switch (e) {
    case "actions":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M5 7h14M8 12h11M11 17h8" }) });
    case "alert":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("path", { ...g, d: "M12 4.7 20 18H4z" }),
        /* @__PURE__ */ t("path", { ...g, d: "M12 9v4M12 15.5h.01" })
      ] });
    case "bars":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M6 18V9M12 18V5M18 18v-7" }) });
    case "bell":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M8 18h8M7 16h10l-1-2v-3.5A4 4 0 0 0 12 6a4 4 0 0 0-4 4.5V14Z" }) });
    case "card":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("rect", { x: "4", y: "6.5", width: "16", height: "11", rx: "2.5", ...g }),
        /* @__PURE__ */ t("path", { ...g, d: "M4 10h16" })
      ] });
    case "chart":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M6 18V9M12 18V6M18 18v-8M4.5 19.5h15" }) });
    case "check":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "3", ...g }),
        /* @__PURE__ */ t("path", { ...g, d: "m8.5 12 2.3 2.3 4.7-5.3" })
      ] });
    case "chevron-down":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "m6 9 6 6 6-6" }) });
    case "chevron-right":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "m10 6 6 6-6 6" }) });
    case "close":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "m6 6 12 12M18 6 6 18" }) });
    case "coins":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("ellipse", { cx: "12", cy: "7", rx: "5", ry: "2.6", ...g }),
        /* @__PURE__ */ t("path", { ...g, d: "M7 7v5c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6V7" }),
        /* @__PURE__ */ t("path", { ...g, d: "M7 12v5c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6v-5" })
      ] });
    case "discord":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("path", { ...g, d: "M8 8c2.5-1.4 5.5-1.4 8 0" }),
        /* @__PURE__ */ t("path", { ...g, d: "M8 8c-1.2 1.9-1.8 4-2 6 2 .9 4 1.3 6 1.4 2-.1 4-.5 6-1.4-.2-2-1-4.1-2-6" }),
        /* @__PURE__ */ t("circle", { cx: "10", cy: "12.4", r: "1.1", fill: "currentColor" }),
        /* @__PURE__ */ t("circle", { cx: "14", cy: "12.4", r: "1.1", fill: "currentColor" }),
        /* @__PURE__ */ t("path", { ...g, d: "M10 15c1.2.7 2.8.7 4 0" })
      ] });
    case "dollar":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M12 4v16M15.5 7.5C14.8 6.5 13.5 6 12 6c-2 0-3.5 1-3.5 2.5S9.8 11 12 11s3.5 1 3.5 2.5S14 16 12 16c-1.5 0-2.8-.5-3.7-1.6" }) });
    case "download":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M12 5v10M8 11l4 4 4-4M5 19h14" }) });
    case "exclamation":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "8.1", ...g }),
        /* @__PURE__ */ t("path", { ...g, d: "M12 7.8v6.1M12 16.7h.01" })
      ] });
    case "eye":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("path", { ...g, d: "M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" }),
        /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "2.6", fill: "none", stroke: "currentColor", strokeWidth: "1.8" })
      ] });
    case "filter":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M5 6h14l-5.5 6.2v5.3l-3-1.6v-3.7Z" }) });
    case "folder":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("path", { ...g, d: "M3.5 7.5h6l1.5 2h9v7.5a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2Z" }),
        /* @__PURE__ */ t("path", { ...g, d: "M3.5 10.5h17" })
      ] });
    case "grid":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z" }) });
    case "info":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "8.4", ...g }),
        /* @__PURE__ */ t("path", { ...g, d: "M12 10v5M12 8h.01" })
      ] });
    case "live":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "2.2", fill: "currentColor" }),
        /* @__PURE__ */ t("path", { ...g, d: "M6.5 12a5.5 5.5 0 0 1 11 0M4 12a8 8 0 0 1 16 0" })
      ] });
    case "maximize":
    case "maximize-screen":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M8 4H4v4M16 4h4v4M4 16v4h4M20 16v4h-4" }) });
    case "menu":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M4 7h16M4 12h16M4 17h16" }) });
    case "minimize":
    case "minimize-screen":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M9 4H4v5M15 4h5v5M4 15v5h5M20 15v5h-5" }) });
    case "minus":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M5 12h14" }) });
    case "moon":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M19 14.5A7.5 7.5 0 1 1 9.5 5a6.3 6.3 0 0 0 9.5 9.5Z" }) });
    case "panel":
    case "panel-restore":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("rect", { x: "6", y: "6", width: "12", height: "12", rx: "1.8", ...g }) });
    case "pause":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M8.5 6.5v11M15.5 6.5v11" }) });
    case "play":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M8 6.5v11l8-5.5-8-5.5Z" }) });
    case "plus":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M12 5v14M5 12h14" }) });
    case "refresh":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M18 8V4l-3 3m3 0a6.5 6.5 0 1 0 1.2 7.5" }) });
    case "save":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("path", { ...g, d: "M5 5h11l3 3v11H5Z" }),
        /* @__PURE__ */ t("path", { ...g, d: "M8 5v5h8" }),
        /* @__PURE__ */ t("path", { ...g, d: "M9 18h6" })
      ] });
    case "search":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("circle", { cx: "11", cy: "11", r: "6", ...g }),
        /* @__PURE__ */ t("path", { ...g, d: "m16 16 4 4" })
      ] });
    case "settings":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "2.6", ...g }),
        /* @__PURE__ */ t("path", { ...g, d: "M12 4.8v1.8M12 17.4v1.8M19.2 12h-1.8M6.6 12H4.8M17.1 6.9l-1.3 1.3M8.2 15.8l-1.3 1.3M17.1 17.1l-1.3-1.3M8.2 8.2 6.9 6.9" })
      ] });
    case "share":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M8 12a4 4 0 0 1 8 0M7 7l5 5-5 5M17 7l-5 5 5 5" }) });
    case "sidebar-collapsed":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("rect", { x: "4", y: "5", width: "16", height: "14", rx: "2", ...g }),
        /* @__PURE__ */ t("path", { ...g, d: "M15 5v14" })
      ] });
    case "sidebar-open":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("rect", { x: "4", y: "5", width: "16", height: "14", rx: "2", ...g }),
        /* @__PURE__ */ t("path", { ...g, d: "M9 5v14" })
      ] });
    case "sparkle":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "m12 4 1.8 4.2L18 10l-4.2 1.8L12 16l-1.8-4.2L6 10l4.2-1.8Z" }) });
    case "stop":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("rect", { x: "7", y: "7", width: "10", height: "10", rx: "2", ...g }) });
    case "store":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("path", { ...g, d: "M4 9h16l-1 3a3 3 0 0 1-3 2H8a3 3 0 0 1-3-2Z" }),
        /* @__PURE__ */ t("path", { ...g, d: "M6 14v5h12v-5" })
      ] });
    case "support":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("path", { ...g, d: "M5 13v-1a7 7 0 0 1 14 0v1" }),
        /* @__PURE__ */ t("path", { ...g, d: "M5 12.5v3a2 2 0 0 0 2 2h2v-5H7a2 2 0 0 0-2 2ZM19 12.5v3a2 2 0 0 1-2 2h-2v-5h2a2 2 0 0 1 2 2Z" })
      ] });
    case "swap":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M7 8h10m0 0-3-3m3 3-3 3M17 16H7m0 0 3-3m-3 3 3 3" }) });
    case "timer":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("circle", { cx: "12", cy: "13", r: "6.5", ...g }),
        /* @__PURE__ */ t("path", { ...g, d: "M12 9v4l2.5 2.5M9 4h6" })
      ] });
    case "trash":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t(
        "path",
        {
          ...g,
          d: "M5.5 7.5h13M9.5 7.5V5.8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.7M8.5 10.5v6M12 10.5v6M15.5 10.5v6M7 7.5l.7 10.2a1.5 1.5 0 0 0 1.5 1.3h5.6a1.5 1.5 0 0 0 1.5-1.3L17 7.5"
        }
      ) });
    case "trenddown":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "M5 8l6 6 3-3 5 5M19 16v-5h-5" }) });
    case "trendup":
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("path", { ...g, d: "m5 16 6-6 3 3 5-5M19 8v5h-5" }) });
    case "user":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("path", { ...g, d: "M12 12a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6Z" }),
        /* @__PURE__ */ t("path", { ...g, d: "M6 19c1.5-2.7 4-4 6-4s4.5 1.3 6 4" })
      ] });
    case "wallet":
      return /* @__PURE__ */ o(T, { ...r, children: [
        /* @__PURE__ */ t("path", { ...g, d: "M4.5 7h13a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 2 16.5V9.5A2.5 2.5 0 0 1 4.5 7Z" }),
        /* @__PURE__ */ t("path", { ...g, d: "M15 12h4" }),
        /* @__PURE__ */ t("circle", { cx: "15.8", cy: "12", r: "0.7", fill: "currentColor" })
      ] });
    default:
      return /* @__PURE__ */ t(T, { ...r, children: /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "7", ...g }) });
  }
}
const qr = {
  third: "xl:col-span-4",
  half: "xl:col-span-6",
  full: "xl:col-span-12"
};
function Nr(e) {
  return e.map((r, i) => ({
    id: r.id,
    order: i,
    width: r.defaultWidth || "full",
    collapsed: !1,
    fullscreen: !1
  }));
}
function It(e, r) {
  const i = Nr(e);
  if (!(r != null && r.length)) return i;
  const d = new Map(r.map((l) => [l.id, l]));
  return e.map((l, c) => {
    const a = d.get(l.id);
    return {
      id: l.id,
      order: (a == null ? void 0 : a.order) ?? c,
      width: (a == null ? void 0 : a.width) ?? l.defaultWidth ?? "full",
      collapsed: !!(a != null && a.collapsed),
      fullscreen: !!(a != null && a.fullscreen)
    };
  }).sort((l, c) => l.order - c.order).map((l, c) => ({ ...l, order: c }));
}
function Sr(e, r = "rui:layout") {
  return `${r}:${e}`;
}
function Qr(e, r) {
  if (typeof window > "u") return null;
  try {
    const i = window.localStorage.getItem(Sr(e, r));
    return i ? JSON.parse(i) : null;
  } catch {
    return null;
  }
}
function Yr(e, r, i) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(Sr(e, i), JSON.stringify(r));
    } catch {
    }
}
function Kr({
  panel: e,
  state: r,
  allowMovement: i = !0,
  allowResize: d = !0,
  allowCollapse: l = !0,
  allowFullscreen: c = !0,
  onToggleCollapse: a,
  onToggleFullscreen: u,
  onReset: m,
  onCycleWidth: h,
  onDragStart: b,
  onDragOver: v,
  onDragEnter: N,
  onDrop: A,
  onDragEnd: j,
  renderActions: B,
  renderHeader: I,
  renderPanelControls: p,
  renderMoveHandle: D,
  renderResizeButton: V,
  renderCollapseButton: Z,
  renderResetButton: K,
  renderFullscreenButton: G,
  accentKey: ee,
  style: Q,
  className: O,
  headerClassName: F,
  bodyClassName: P,
  actionsClassName: W
}) {
  const re = !!r.collapsed, J = !!r.fullscreen, L = e.description ?? e.subtitle, _ = e.actions ?? e.action, ne = e.content ?? e.children, U = be(ee, Q), Ie = {
    type: "button",
    draggable: !J,
    onDragStart: b,
    onDragEnd: j,
    className: "cursor-grab rounded border border-white/10 p-1 text-white/55 hover:bg-white/5 hover:text-white active:cursor-grabbing",
    title: "Drag handle"
  }, je = i ? (D == null ? void 0 : D({
    panel: e,
    state: r,
    buttonProps: Ie,
    defaultButton: /* @__PURE__ */ t("button", { ...Ie, children: /* @__PURE__ */ t(Be, { name: "actions", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ t("button", { ...Ie, children: /* @__PURE__ */ t(Be, { name: "actions", className: "h-4 w-4" }) }) : null, q = { title: "Cycle width", onClick: h }, S = d ? (V == null ? void 0 : V({
    panel: e,
    state: r,
    buttonProps: q,
    defaultButton: /* @__PURE__ */ t(ve, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...q, children: /* @__PURE__ */ t(Be, { name: "grid", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ t(ve, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...q, children: /* @__PURE__ */ t(Be, { name: "grid", className: "h-4 w-4" }) }) : null, ye = { title: re ? "Restore panel" : "Minimize panel", onClick: a }, z = l ? (Z == null ? void 0 : Z({
    panel: e,
    state: r,
    buttonProps: ye,
    defaultButton: /* @__PURE__ */ t(ve, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...ye, children: /* @__PURE__ */ t(Be, { name: re ? "panel" : "minus", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ t(ve, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...ye, children: /* @__PURE__ */ t(Be, { name: re ? "panel" : "minus", className: "h-4 w-4" }) }) : null, oe = { title: "Restore default size", onClick: m }, me = d ? (K == null ? void 0 : K({
    panel: e,
    state: r,
    buttonProps: oe,
    defaultButton: /* @__PURE__ */ t(ve, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...oe, children: /* @__PURE__ */ t(Be, { name: "refresh", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ t(ve, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...oe, children: /* @__PURE__ */ t(Be, { name: "refresh", className: "h-4 w-4" }) }) : null, te = { title: J ? "Exit fullscreen" : "Fullscreen", onClick: u }, De = c ? (G == null ? void 0 : G({
    panel: e,
    state: r,
    buttonProps: te,
    defaultButton: /* @__PURE__ */ t(ve, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...te, children: /* @__PURE__ */ t(Be, { name: J ? "minimize" : "maximize", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ t(ve, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...te, children: /* @__PURE__ */ t(Be, { name: J ? "minimize" : "maximize", className: "h-4 w-4" }) }) : null, we = /* @__PURE__ */ o(fr, { children: [
    _ ? /* @__PURE__ */ t("div", { className: "hidden lg:block", children: _ }) : null,
    B == null ? void 0 : B(e, r),
    S,
    z,
    me,
    De
  ] }), pe = (p == null ? void 0 : p({ panel: e, state: r, controls: we })) ?? we;
  return /* @__PURE__ */ t(
    "div",
    {
      onDragOver: v,
      onDragEnter: N,
      onDrop: A,
      className: s("min-w-0 w-full", !J && "col-span-12", !J && qr[r.width || "full"], J && "fixed inset-4 z-50", O),
      style: U,
      children: /* @__PURE__ */ o("section", { className: s("min-h-full w-full overflow-hidden rounded-panel rui-panel", e.className, J && "h-[calc(100vh-2rem)]"), children: [
        I ? I(e, r) : /* @__PURE__ */ o(
          "div",
          {
            className: s(
              "flex flex-col gap-3 border-b border-white/8 bg-black/10 px-3 py-3 sm:flex-row sm:items-start sm:justify-between sm:px-4 sm:py-4",
              e.headerClassName,
              F
            ),
            children: [
              /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                je,
                /* @__PURE__ */ o("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate text-base font-semibold text-white", children: e.title }),
                  L ? /* @__PURE__ */ t("div", { className: "mt-1 text-sm text-white/60", children: L }) : null
                ] })
              ] }) }),
              /* @__PURE__ */ t("div", { className: s("flex flex-wrap items-center gap-2 sm:shrink-0 sm:justify-end", W), children: pe })
            ]
          }
        ),
        re ? null : /* @__PURE__ */ t("div", { className: s("min-h-0 p-3 sm:p-5", e.bodyClassName, P, J && "h-[calc(100%-76px)] overflow-auto rui-scrollbar"), children: ne })
      ] })
    }
  );
}
function Fn({
  panels: e,
  layout: r,
  defaultLayout: i,
  onLayoutChange: d,
  persistenceKey: l,
  storageNamespace: c,
  persistenceAdapter: a,
  allowMovement: u = !0,
  allowResize: m = !0,
  allowCollapse: h = !0,
  allowFullscreen: b = !0,
  renderPanelActions: v,
  renderHeader: N,
  renderPanelControls: A,
  renderMoveHandle: j,
  renderResizeButton: B,
  renderCollapseButton: I,
  renderResetButton: p,
  renderFullscreenButton: D,
  accentKey: V,
  style: Z,
  className: K,
  panelClassName: G,
  panelHeaderClassName: ee,
  panelBodyClassName: Q,
  panelActionsClassName: O
}) {
  const [F, P] = ce(
    () => It(e, i || (l ? Qr(l, c) : null))
  ), W = fe(null), [re, J] = ce(null), [L, _] = ce(() => !l || !a), ne = r !== void 0, U = Y(() => It(e, ne ? r : F), [ne, F, r, e]), Ie = Y(() => new Map(e.map((M) => [M.id, M])), [e]), je = be(V, Z), q = fe(e), S = fe(U), ye = fe(ne), z = fe(d);
  ae(() => {
    q.current = e;
  }, [e]), ae(() => {
    S.current = U;
  }, [U]), ae(() => {
    ye.current = ne;
  }, [ne]), ae(() => {
    z.current = d;
  }, [d]);
  const oe = Ce((M) => {
    var ie;
    const le = typeof M == "function" ? M(S.current) : M, k = It(q.current, le);
    ye.current || P(k), (ie = z.current) == null || ie.call(z, k);
  }, []);
  ae(() => {
    let M = !1;
    if (!l || !a) {
      _(!0);
      return;
    }
    return _(!1), Promise.resolve(a.load(l)).then((le) => {
      M || (le && oe(le), _(!0));
    }).catch(() => {
      M || _(!1);
    }), () => {
      M = !0;
    };
  }, [a, l, oe]), ae(() => {
    l && (a && !L || (Yr(l, U, c), a && Promise.resolve(a.save(l, U)).catch(() => {
    })));
  }, [L, U, a, l, c]);
  const me = (M) => {
    const le = Nr(e).find((k) => k.id === M);
    le && oe((k) => k.map((ie) => ie.id === M ? { ...le, order: ie.order } : ie));
  }, te = (M) => {
    oe(
      (le) => le.map((k) => {
        if (k.id !== M) return k;
        const ie = k.width === "third" ? "half" : k.width === "half" ? "full" : "third";
        return { ...k, width: ie, collapsed: !1 };
      })
    );
  }, De = (M) => {
    oe((le) => le.map((k) => k.id === M ? { ...k, collapsed: !k.collapsed, fullscreen: k.collapsed ? k.fullscreen : !1 } : k));
  }, we = (M) => {
    oe((le) => le.map((k) => ({ ...k, collapsed: k.id === M ? !1 : k.collapsed, fullscreen: k.id === M ? !k.fullscreen : !1 })));
  }, pe = (M, le) => {
    !u || !M || M === le || oe((k) => {
      const ie = It(e, k), xe = ie.findIndex((he) => he.id === M), ke = ie.findIndex((he) => he.id === le);
      if (xe < 0 || ke < 0) return k;
      const [Te] = ie.splice(xe, 1);
      return ie.splice(ke, 0, Te), ie.map((he, Ne) => ({ ...he, order: Ne }));
    });
  }, We = U.find((M) => M.fullscreen), Re = (M) => {
    const le = Ie.get(M.id);
    return le ? /* @__PURE__ */ t(
      Kr,
      {
        panel: le,
        state: M,
        allowMovement: u,
        allowResize: m,
        allowCollapse: h,
        allowFullscreen: b,
        className: G,
        headerClassName: ee,
        bodyClassName: Q,
        actionsClassName: O,
        renderActions: v,
        renderHeader: N,
        renderPanelControls: A,
        renderMoveHandle: j,
        renderResizeButton: B,
        renderCollapseButton: I,
        renderResetButton: p,
        renderFullscreenButton: D,
        accentKey: V,
        onToggleCollapse: () => De(M.id),
        onToggleFullscreen: () => we(M.id),
        onReset: () => me(M.id),
        onCycleWidth: () => te(M.id),
        onDragStart: (k) => {
          u && (W.current = M.id, J(M.id), k.dataTransfer.effectAllowed = "move", k.dataTransfer.setData("text/plain", M.id), k.dataTransfer.setData("application/x-rui-panel-id", M.id));
        },
        onDragOver: (k) => {
          W.current && (k.preventDefault(), k.dataTransfer.dropEffect = "move");
        },
        onDragEnter: (k) => {
          W.current && k.preventDefault();
        },
        onDrop: (k) => {
          k.preventDefault();
          const ie = k.dataTransfer.getData("application/x-rui-panel-id") || k.dataTransfer.getData("text/plain") || W.current;
          ie && pe(ie, M.id), W.current = null, J(null);
        },
        onDragEnd: () => {
          W.current = null, J(null);
        }
      },
      M.id
    ) : null;
  };
  return We ? /* @__PURE__ */ o(fr, { children: [
    /* @__PURE__ */ t("div", { className: "fixed inset-0 z-40 bg-[#050816]/80 backdrop-blur-sm" }),
    Re(We)
  ] }) : /* @__PURE__ */ t("div", { className: s("rui-theme grid w-full grid-cols-12 gap-3 sm:gap-5", K, re && "select-none"), style: je, children: U.map(Re) });
}
function Xe({ value: e, defaultValue: r, onChange: i }) {
  const [d, l] = ce(r), c = e !== void 0, a = c ? e : d, u = Ce(
    (m) => {
      const h = typeof m == "function" ? m(a) : m;
      c || l(h), i == null || i(h);
    },
    [c, a, i]
  );
  return [a, u];
}
function en(e, r) {
  return typeof e == "string" || typeof e == "number" ? String(e) : r;
}
function tn(e) {
  if (typeof e == "object" && e !== null && "value" in e) {
    const r = String(e.value), i = e.label ?? e.text ?? r;
    return {
      value: e.value,
      label: i,
      text: e.text ?? en(e.label, r),
      keywords: e.keywords ?? "",
      description: e.description,
      disabled: e.disabled
    };
  }
  return {
    value: e,
    label: String(e),
    text: String(e),
    keywords: String(e)
  };
}
function rn({ className: e }) {
  return /* @__PURE__ */ t("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: e, children: /* @__PURE__ */ t("path", { d: "M5 7.5 10 12.5 15 7.5", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function nn({ className: e }) {
  return /* @__PURE__ */ o("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: e, children: [
    /* @__PURE__ */ t("circle", { cx: "8.5", cy: "8.5", r: "4.75", stroke: "currentColor", strokeWidth: "1.5" }),
    /* @__PURE__ */ t("path", { d: "m12.25 12.25 3.5 3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
  ] });
}
function an({ className: e }) {
  return /* @__PURE__ */ t("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: e, children: /* @__PURE__ */ t("path", { d: "m4.75 10.25 3.25 3.25 7.5-7.5", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function ln({ className: e }) {
  return /* @__PURE__ */ t("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: e, children: /* @__PURE__ */ t("path", { d: "m5 5 10 10m0-10L5 15", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round" }) });
}
function sn({
  mode: e = "single",
  options: r,
  value: i,
  defaultValue: d,
  onChange: l,
  searchable: c = !0,
  placeholder: a = "Select an option",
  searchPlaceholder: u = "Search options",
  emptyState: m = "No matching options",
  disabled: h = !1,
  clearable: b = !0,
  label: v,
  description: N,
  error: A,
  helperText: j,
  labelPosition: B = "top",
  className: I,
  wrapperClassName: p,
  labelClassName: D,
  descriptionClassName: V,
  errorClassName: Z,
  helperClassName: K,
  triggerClassName: G,
  menuClassName: ee,
  optionClassName: Q,
  searchClassName: O,
  summaryClassName: F,
  accentKey: P,
  style: W,
  endAdornment: re,
  endAdornmentClassName: J,
  summaryText: L,
  menuHeader: _,
  showSelectAll: ne = !1,
  showClear: U = !1,
  selectAllLabel: Ie = "Select all",
  clearLabel: je = "Clear",
  getOptionKey: q,
  isOptionEqual: S,
  renderOption: ye,
  renderValue: z
}, oe) {
  const me = Y(() => r.map(tn), [r]), [te, De] = Xe({
    value: i,
    defaultValue: d ?? (e === "multiple" ? [] : null),
    onChange: l
  }), [we, pe] = ce(!1), [We, Re] = ce(""), M = fe(null), le = fe(null), k = xt(), ie = be(P, W), xe = Ce((w) => q ? q(w) : String(w), [q]), ke = Y(() => e === "multiple" ? (te ?? []).slice() : te == null ? [] : [te], [te, e]), Te = Y(() => new Set(ke.map((w) => xe(w))), [ke, xe]), he = Ce(
    (w) => S ? ke.some((se) => S(w, se)) : Te.has(xe(w)),
    [S, Te, ke, xe]
  ), Ne = Y(() => me.filter((w) => he(w.value)), [he, me]), Ge = Y(() => {
    const w = We.trim().toLowerCase();
    return w ? me.filter((se) => `${se.text ?? ""} ${String(se.value)} ${se.keywords ?? ""}`.toLowerCase().includes(w)) : me;
  }, [me, We]), Oe = Y(() => {
    if (L)
      return typeof L == "function" ? L({ value: te, selectedOptions: Ne, placeholder: a }) : L;
    if (z) return z(te, Ne);
    if (e === "multiple") {
      const w = te;
      return w != null && w.length ? Ne.length <= 2 ? Ne.map((se) => se.text ?? String(se.value)).join(", ") : `${w.length} selected` : a;
    }
    return Ne[0] ? Ne[0].text ?? String(Ne[0].value) : te == null || te === "" ? a : String(te);
  }, [te, e, a, z, Ne, L]);
  ae(() => {
    if (!we) {
      Re("");
      return;
    }
    const w = (Pe) => {
      var Ee;
      (Ee = M.current) != null && Ee.contains(Pe.target) || pe(!1);
    }, se = (Pe) => {
      Pe.key === "Escape" && pe(!1);
    };
    document.addEventListener("mousedown", w), document.addEventListener("keydown", se);
    const ge = window.setTimeout(() => {
      var Pe;
      return (Pe = le.current) == null ? void 0 : Pe.focus();
    }, 0);
    return () => {
      window.clearTimeout(ge), document.removeEventListener("mousedown", w), document.removeEventListener("keydown", se);
    };
  }, [we]);
  const it = (w) => {
    De(w), pe(!1);
  }, $e = (w) => {
    const se = (te ?? []).slice(), ge = xe(w), Pe = se.findIndex((Ee) => S ? S(w, Ee) : xe(Ee) === ge);
    Pe >= 0 ? se.splice(Pe, 1) : se.push(w), De(se);
  }, qe = () => {
    De(e === "multiple" ? [] : null), pe(!1);
  }, Qe = () => {
    e === "multiple" && De(me.filter((w) => !w.disabled).map((w) => w.value));
  }, y = Y(() => {
    const w = me.filter((se) => !se.disabled);
    return !!w.length && w.every((se) => he(se.value));
  }, [he, me]), Se = typeof _ == "function" ? _({ options: me, filteredOptions: Ge, selectedOptions: Ne, selectAll: Qe, clear: qe }) : _, de = [N ? `${k}-description` : null, A ? `${k}-error` : null, j ? `${k}-helper` : null].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ o("div", { className: s(B === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", p), style: ie, children: [
    v || N ? /* @__PURE__ */ o("div", { className: s(B === "left" ? "pt-2" : "", "min-w-0"), children: [
      v ? /* @__PURE__ */ t("label", { htmlFor: k, className: s("block text-sm font-medium text-white", D), children: v }) : null,
      N ? /* @__PURE__ */ t("div", { id: `${k}-description`, className: s("mt-1 text-sm text-[var(--rui-text-secondary)]", V), children: N }) : null
    ] }) : null,
    /* @__PURE__ */ o("div", { ref: M, className: s("relative min-w-0", I), children: [
      /* @__PURE__ */ o(
        "button",
        {
          ref: oe,
          id: k,
          type: "button",
          disabled: h,
          "aria-invalid": !!A || void 0,
          "aria-describedby": de,
          "aria-expanded": we,
          onClick: () => !h && pe((w) => !w),
          className: s(
            "flex h-10 w-full items-center justify-between gap-3 rounded-[4px] border px-4 text-left text-[15px] outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
            we ? "border-[var(--rui-accent)] bg-[var(--rui-bg-input)] text-[var(--rui-text-primary)] shadow-[0_0_0_1px_var(--rui-accent-muted)]" : "border-[var(--rui-accent-border-soft)] bg-[var(--rui-bg-input)] text-[var(--rui-text-primary)] hover:border-[var(--rui-accent)]",
            G
          ),
          children: [
            /* @__PURE__ */ t(
              "span",
              {
                className: s(
                  "min-w-0 flex-1 truncate",
                  te == null || Array.isArray(te) && !te.length ? "text-[var(--rui-text-tertiary)]" : "text-[var(--rui-text-primary)]",
                  F
                ),
                children: Oe
              }
            ),
            /* @__PURE__ */ o("span", { className: "flex items-center gap-2 text-[var(--rui-text-tertiary)]", children: [
              re ? /* @__PURE__ */ t("span", { className: s("inline-flex items-center", J), children: re }) : null,
              !re && e === "multiple" ? /* @__PURE__ */ t("span", { className: s("text-xs uppercase tracking-wider", J), children: ke.length }) : null,
              b && (e === "multiple" && (te != null && te.length) || e === "single" && te != null) ? /* @__PURE__ */ t(
                "span",
                {
                  role: "button",
                  tabIndex: -1,
                  "aria-label": "Clear selection",
                  onClick: (w) => {
                    w.preventDefault(), w.stopPropagation(), qe();
                  },
                  className: "inline-flex h-5 w-5 items-center justify-center rounded-full border border-transparent transition hover:border-[var(--rui-accent-border-soft)] hover:bg-[var(--rui-accent-muted)]",
                  children: /* @__PURE__ */ t(ln, { className: "h-3.5 w-3.5" })
                }
              ) : null,
              /* @__PURE__ */ t(rn, { className: s("h-4 w-4 transition-transform", we && "rotate-180") })
            ] })
          ]
        }
      ),
      we && !h ? /* @__PURE__ */ o(
        "div",
        {
          className: s(
            "absolute left-0 right-0 top-full z-[130] mt-2 max-h-[320px] overflow-hidden rounded-[10px] border border-[var(--rui-accent-border-soft)] bg-[var(--rui-bg-panel)] shadow-panel",
            ee
          ),
          children: [
            Se || e === "multiple" && (ne || U) ? /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-[var(--rui-border-soft)] p-2.5", children: [
              /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: Se }),
              e === "multiple" && (ne || U) ? /* @__PURE__ */ o("div", { className: "flex flex-shrink-0 items-center gap-2", children: [
                ne ? /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    disabled: y,
                    className: "rounded-[6px] px-2 py-1 text-xs text-[var(--rui-accent)] transition hover:bg-[var(--rui-accent-muted)] disabled:cursor-not-allowed disabled:opacity-45",
                    onClick: Qe,
                    children: Ie
                  }
                ) : null,
                U ? /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    disabled: !ke.length,
                    className: "rounded-[6px] px-2 py-1 text-xs text-[var(--rui-text-secondary)] transition hover:bg-[var(--rui-accent-muted)] hover:text-[var(--rui-text-primary)] disabled:cursor-not-allowed disabled:opacity-45",
                    onClick: qe,
                    children: je
                  }
                ) : null
              ] }) : null
            ] }) : null,
            c ? /* @__PURE__ */ t("div", { className: "border-b border-[var(--rui-border-soft)] p-3", children: /* @__PURE__ */ o("div", { className: "relative", children: [
              /* @__PURE__ */ t(nn, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--rui-text-tertiary)]" }),
              /* @__PURE__ */ t(
                "input",
                {
                  ref: le,
                  value: We,
                  onChange: (w) => Re(w.target.value),
                  placeholder: u,
                  className: s(
                    "h-10 w-full rounded-[6px] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)] pl-9 pr-3 text-sm text-[var(--rui-text-primary)] outline-none placeholder:text-[var(--rui-text-tertiary)] focus:border-[var(--rui-accent)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0",
                    O
                  )
                }
              )
            ] }) }) : null,
            /* @__PURE__ */ t("div", { className: "rui-scrollbar max-h-[260px] overflow-auto p-1", children: Ge.length ? Ge.map((w) => {
              const se = he(w.value), ge = h || w.disabled;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  disabled: ge,
                  onClick: () => {
                    ge || (e === "multiple" ? $e(w.value) : it(w.value));
                  },
                  className: s(
                    "flex w-full items-start justify-between gap-3 rounded-[8px] px-3 py-2.5 text-left text-sm transition",
                    se ? "bg-[var(--rui-accent-soft)] text-[var(--rui-accent-soft-text)]" : "text-[var(--rui-text-secondary)] hover:bg-[var(--rui-accent-muted)] hover:text-[var(--rui-text-primary)]",
                    ge && "cursor-not-allowed opacity-50",
                    Q
                  ),
                  children: [
                    /* @__PURE__ */ o("span", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ t("span", { className: "block truncate", children: ye ? ye(w, se) : w.label ?? w.text ?? String(w.value) }),
                      w.description ? /* @__PURE__ */ t("span", { className: "mt-1 block text-xs text-[var(--rui-text-tertiary)]", children: w.description }) : null
                    ] }),
                    /* @__PURE__ */ t(
                      "span",
                      {
                        className: s(
                          "mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border",
                          se ? "border-[var(--rui-accent)] bg-[var(--rui-accent)] text-[#07111d]" : "border-[var(--rui-border-soft)] text-transparent"
                        ),
                        children: /* @__PURE__ */ t(an, { className: "h-3.5 w-3.5" })
                      }
                    )
                  ]
                },
                xe(w.value)
              );
            }) : /* @__PURE__ */ t("div", { className: "px-3 py-6 text-center text-sm text-[var(--rui-text-tertiary)]", children: m }) })
          ]
        }
      ) : null,
      A ? /* @__PURE__ */ t("div", { id: `${k}-error`, className: s("mt-1 text-sm text-[var(--rui-danger)]", Z), children: A }) : j ? /* @__PURE__ */ t("div", { id: `${k}-helper`, className: s("mt-1 text-sm text-[var(--rui-text-tertiary)]", K), children: j }) : null
    ] })
  ] });
}
const lr = Ze(sn), cn = ["ALL", "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "SUCCESS"].map((e) => ({ label: e, value: e })), on = [{ label: "All categories", value: "ALL" }];
function dn(e) {
  if (!e) return "";
  const r = e instanceof Date ? e : new Date(e);
  return Number.isNaN(r.getTime()) ? String(e) : r.toLocaleString();
}
function un(e) {
  return !e || typeof e == "object" && !Object.keys(e).length ? "" : typeof e == "string" ? e : JSON.stringify(e, null, 2);
}
function fn(e) {
  return e === "ERROR" ? "text-[var(--rui-danger)]" : e === "WARN" || e === "WARNING" ? "text-[var(--rui-warning)]" : e === "SUCCESS" ? "text-[var(--rui-success)]" : e === "INFO" ? "text-[var(--rui-accent)]" : "text-white/45";
}
function hn(e) {
  return e === "ERROR" ? "close" : e === "WARN" || e === "WARNING" ? "timer" : e === "SUCCESS" ? "check" : e === "INFO" ? "info" : "actions";
}
function mn(e, r) {
  const i = [...e];
  return i.sort((d, l) => new Date(d.createdAt ?? d.timestamp ?? 0).getTime() - new Date(l.createdAt ?? l.timestamp ?? 0).getTime()), r ? i : i.reverse();
}
function Hn({
  entries: e,
  logs: r,
  levels: i = cn,
  categories: d = on,
  defaultLevel: l = "ALL",
  defaultCategory: c = "ALL",
  defaultSearch: a = "",
  level: u,
  category: m,
  search: h,
  autoScroll: b,
  onLevelChange: v,
  onCategoryChange: N,
  onSearchChange: A,
  onAutoScrollChange: j,
  onFiltersChange: B,
  searchPlaceholder: I = "Search logs",
  heightClassName: p = "max-h-[360px]",
  title: D = "Log stream",
  description: V,
  subtitle: Z,
  action: K,
  onClear: G,
  trailing: ee = !0,
  autoScrollDefault: Q = !0,
  showHeader: O = !0,
  showToolbar: F = !0,
  showLevelFilter: P = !0,
  showCategoryFilter: W = !0,
  emptyContent: re = "No log lines matched the current filters.",
  formatTimestamp: J,
  renderMetadata: L,
  renderPayload: _,
  getSearchText: ne,
  accentKey: U,
  style: Ie,
  className: je,
  classNames: q
}) {
  const S = Y(() => e ?? r ?? [], [e, r]), [ye, z] = ce(l), [oe, me] = ce(c), [te, De] = ce(a), [we, pe] = ce(Q), [We, Re] = ce(() => /* @__PURE__ */ new Set()), M = fe(null), le = V ?? Z, k = be(U, Ie), ie = u ?? ye, xe = m ?? oe, ke = h ?? te, Te = b ?? we, he = Ce(
    (y) => {
      B == null || B({
        level: ie,
        category: xe,
        search: ke,
        autoScroll: Te,
        ...y
      });
    },
    [Te, xe, ie, B, ke]
  ), Ne = Ce(
    (y) => {
      u === void 0 && z(y), v == null || v(y), he({ level: y });
    },
    [u, he, v]
  ), Ge = Ce(
    (y) => {
      m === void 0 && me(y), N == null || N(y), he({ category: y });
    },
    [m, he, N]
  ), Oe = Ce(
    (y) => {
      h === void 0 && De(y), A == null || A(y), he({ search: y });
    },
    [h, he, A]
  ), it = Ce(
    (y) => {
      b === void 0 && pe(y), j == null || j(y), he({ autoScroll: y });
    },
    [b, he, j]
  );
  ae(() => {
    u === void 0 && z(l);
  }, [u, l]), ae(() => {
    m === void 0 && me(c);
  }, [m, c]), ae(() => {
    h === void 0 && De(a);
  }, [h, a]), ae(() => {
    b === void 0 && pe(Q);
  }, [Q, b]);
  const $e = Y(() => {
    const y = ke.trim().toLowerCase(), Se = S.filter((de) => P && ie !== "ALL" && de.level !== ie || W && xe !== "ALL" && de.category !== xe ? !1 : y ? ((ne == null ? void 0 : ne(de)) || [de.message, de.source, de.category, de.level, JSON.stringify(de.metadata || {}), JSON.stringify(de.payload || {})].join(" ").toLowerCase()).toLowerCase().includes(y) : !0);
    return mn(Se, ee);
  }, [xe, ne, ie, S, ke, W, P, ee]);
  ae(() => {
    if (!Te || !ee || !M.current) return;
    const y = M.current, Se = window.requestAnimationFrame(() => {
      y.scrollTop = y.scrollHeight;
    });
    return () => window.cancelAnimationFrame(Se);
  }, [Te, $e, ee]), ae(() => {
    Re((y) => {
      const Se = /* @__PURE__ */ new Set();
      for (const de of y)
        $e.some((w) => w.id === de) && Se.add(de);
      return Se;
    });
  }, [$e]);
  const qe = (y) => {
    Re((Se) => {
      const de = new Set(Se);
      return de.has(y) ? de.delete(y) : de.add(y), de;
    });
  }, Qe = () => {
    Oe(a), Ne(l), Ge(c);
  };
  return /* @__PURE__ */ o("div", { className: s("rui-theme flex h-full min-h-0 min-w-0 flex-col gap-3", je), style: k, children: [
    O ? /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ t("h2", { className: "text-lg font-semibold text-white", children: D }),
        le ? /* @__PURE__ */ t("p", { className: "mt-1 text-sm text-white/60", children: le }) : null
      ] }),
      K
    ] }) : null,
    F ? /* @__PURE__ */ o("div", { className: s("flex min-w-0 shrink-0 flex-wrap items-center gap-2", q == null ? void 0 : q.toolbar), children: [
      /* @__PURE__ */ t("div", { className: "min-w-[140px] flex-[1_1_180px] lg:max-w-[260px]", children: /* @__PURE__ */ t(
        "input",
        {
          className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input",
          value: ke,
          onChange: (y) => Oe(y.target.value),
          placeholder: I
        }
      ) }),
      P ? /* @__PURE__ */ t("div", { className: "min-w-[112px] flex-[0_1_132px]", children: /* @__PURE__ */ t(lr, { searchable: !0, value: ie, options: i, onChange: (y) => Ne(String(y ?? l)) }) }) : null,
      W ? /* @__PURE__ */ t("div", { className: "min-w-[140px] flex-[0_1_176px]", children: /* @__PURE__ */ t(lr, { searchable: !0, value: xe, options: d, onChange: (y) => Ge(String(y ?? c)) }) }) : null,
      O ? null : K,
      /* @__PURE__ */ t(ve, { variant: "ghost", size: "sm", onClick: () => it(!Te), children: Te ? "Trailing on" : "Trailing off" }),
      G ? /* @__PURE__ */ t(ve, { variant: "ghost", size: "sm", onClick: () => void G(), children: "Clear logs" }) : null,
      /* @__PURE__ */ t(ve, { variant: "ghost", size: "sm", onClick: Qe, children: "Clear filters" })
    ] }) : null,
    /* @__PURE__ */ t("div", { className: s("rui-logger-viewport min-w-0 flex-1 overflow-hidden rounded-[10px] border", q == null ? void 0 : q.viewport), children: /* @__PURE__ */ t("div", { ref: M, className: s(p, "min-h-0 overflow-auto select-text rui-scrollbar [scrollbar-gutter:stable]"), children: $e.length ? $e.map((y) => {
      const Se = _ ? _(y) : un(y.payload), de = !!Se, w = We.has(y.id);
      return /* @__PURE__ */ o(hr.Fragment, { children: [
        /* @__PURE__ */ t("div", { className: s("rui-logger-row border-b px-3 py-2 font-mono text-xs last:border-none", q == null ? void 0 : q.entry), children: /* @__PURE__ */ o("div", { className: "grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-3", children: [
          /* @__PURE__ */ o("div", { className: "min-w-0", children: [
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-white/80", children: [
              /* @__PURE__ */ t("span", { className: "shrink-0 text-white/45", children: J ? J(y) : dn(y.createdAt ?? y.timestamp) }),
              y.source || y.category ? /* @__PURE__ */ t("span", { className: "shrink-0 text-white/35", children: "|" }) : null,
              y.source || y.category ? /* @__PURE__ */ t("span", { className: "shrink-0 text-white/50", children: [y.source, y.category].filter(Boolean).join("/") }) : null,
              L ? L(y) : Object.entries(y.metadata || {}).map(([se, ge]) => /* @__PURE__ */ o("span", { className: "shrink-0 text-white/35", children: [
                "[",
                ge,
                "]"
              ] }, se)),
              /* @__PURE__ */ t("span", { className: s("shrink-0", fn(y.level)), title: y.level, children: /* @__PURE__ */ t(Be, { name: hn(y.level), className: "h-4 w-4" }) })
            ] }),
            /* @__PURE__ */ t("div", { className: "mt-1 min-w-0 whitespace-pre-wrap break-words text-white/90", children: y.message })
          ] }),
          /* @__PURE__ */ t("div", { className: "shrink-0", children: de ? /* @__PURE__ */ t(
            ve,
            {
              variant: "ghost",
              size: "sm",
              className: "h-7 px-2 text-[11px]",
              leftIcon: /* @__PURE__ */ t(Be, { name: "eye", className: "h-4 w-4" }),
              onClick: () => qe(y.id),
              children: w ? "Hide payload" : "View payload"
            }
          ) : /* @__PURE__ */ t("span", { className: "inline-flex h-7 items-center text-white/30", children: "-" }) })
        ] }) }),
        w && de ? /* @__PURE__ */ t("div", { className: "rui-logger-payload-row border-b px-3 py-3 last:border-none", children: typeof Se == "string" ? /* @__PURE__ */ t(
          "pre",
          {
            className: s(
              "rui-logger-payload-pre overflow-x-auto whitespace-pre-wrap break-words rounded-[8px] border p-3 font-mono text-[11px] leading-5 text-white/75 select-text",
              q == null ? void 0 : q.payload
            ),
            children: Se
          }
        ) : /* @__PURE__ */ t("div", { className: q == null ? void 0 : q.payload, children: Se }) }) : null
      ] }, y.id);
    }) : /* @__PURE__ */ t("div", { className: "flex h-full min-h-[220px] items-center justify-center px-4 py-8 text-center text-sm text-white/55", children: re }) }) })
  ] });
}
const bn = {
  "top-right": "right-4 top-4",
  "top-left": "left-4 top-4",
  "bottom-right": "right-4 bottom-4",
  "bottom-left": "left-4 bottom-4"
};
function pn({
  items: e,
  onDismiss: r,
  placement: i = "top-right",
  accentKey: d,
  style: l,
  className: c,
  itemClassName: a,
  titleClassName: u,
  messageClassName: m,
  actionsClassName: h
}) {
  const b = be(d, l);
  return ae(() => {
    if (typeof window > "u" || !r) return;
    const v = e.filter((N) => N.timeout !== null).map((N) => window.setTimeout(() => r(N.id), N.timeout ?? 4200));
    return () => v.forEach((N) => window.clearTimeout(N));
  }, [e, r]), typeof document > "u" ? null : Bt(
    /* @__PURE__ */ t("div", { className: s("pointer-events-none fixed z-[220] flex w-[min(92vw,380px)] flex-col gap-3", bn[i], c), style: b, children: e.map((v) => /* @__PURE__ */ o(
      "div",
      {
        className: s(
          "pointer-events-auto rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-surface)] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.36)]",
          a
        ),
        children: [
          /* @__PURE__ */ o("div", { className: "mb-2 flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ t(wr, { tone: v.tone ?? "neutral", children: v.tone ?? "neutral" }),
            r ? /* @__PURE__ */ t(ve, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", "aria-label": "Dismiss notification", onClick: () => r(v.id), children: /* @__PURE__ */ t("span", { "aria-hidden": "true", children: "×" }) }) : null
          ] }),
          /* @__PURE__ */ t("div", { className: s("text-sm font-semibold text-white", u), children: v.title }),
          v.message ? /* @__PURE__ */ t("div", { className: s("mt-1 text-sm text-[var(--rui-text-secondary)]", m), children: v.message }) : null,
          v.actions ? /* @__PURE__ */ t("div", { className: s("mt-3 flex flex-wrap gap-2", h), children: v.actions }) : null
        ]
      },
      v.id
    )) }),
    document.body
  );
}
const Vn = pn;
function Zn({
  title: e,
  pageName: r,
  description: i,
  actions: d,
  actionButtons: l,
  sidebar: c,
  topbar: a,
  footer: u,
  children: m,
  accentKey: h,
  style: b,
  className: v,
  headerClassName: N,
  contentClassName: A,
  sidebarClassName: j
}) {
  const B = e ?? r, I = d ?? l, p = be(h, b);
  return /* @__PURE__ */ o("div", { className: s("rui-theme min-h-screen bg-[var(--rui-bg-app)] text-[var(--rui-text-main)]", v), style: p, children: [
    a,
    /* @__PURE__ */ o("div", { className: s("grid gap-5 px-4 py-5", !!c && "xl:grid-cols-[minmax(84px,auto)_minmax(0,1fr)]"), children: [
      c ? /* @__PURE__ */ t("aside", { className: s("min-w-0", j), children: c }) : null,
      /* @__PURE__ */ o("main", { className: "min-w-0", children: [
        B || i || I ? /* @__PURE__ */ t(xn, { title: B, description: i, actions: I, className: N }) : null,
        /* @__PURE__ */ t("div", { className: s("mt-5 min-w-0", A), children: m }),
        u ? /* @__PURE__ */ t("footer", { className: "mt-5", children: u }) : null
      ] })
    ] })
  ] });
}
function xn({ title: e, pageName: r, description: i, subtitle: d, actions: l, actionButtons: c, children: a, accentKey: u, style: m, className: h }) {
  const b = e ?? r, v = i ?? d, N = l ?? c, A = be(u, m);
  return /* @__PURE__ */ o("div", { className: s("flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between", h), style: A, children: [
    /* @__PURE__ */ o("div", { className: "min-w-0", children: [
      b ? /* @__PURE__ */ t("h1", { className: "text-[28px] font-semibold text-white", children: b }) : null,
      v ? /* @__PURE__ */ t("p", { className: "mt-2 max-w-3xl text-sm text-white/70", children: v }) : null,
      a
    ] }),
    N ? /* @__PURE__ */ t("div", { className: "flex flex-wrap items-center gap-3", children: N }) : null
  ] });
}
function Gn({ children: e, accentKey: r, style: i, className: d }) {
  const l = be(r, i);
  return /* @__PURE__ */ t("div", { className: s("rui-theme w-full space-y-5 px-2 py-4 sm:px-4 sm:py-5", d), style: l, children: e });
}
function Jn({
  items: e,
  groups: r,
  header: i,
  collapsedHeader: d,
  footer: l,
  activeId: c,
  onSelect: a,
  children: u,
  collapsible: m = !1,
  collapsed: h,
  defaultCollapsed: b = !1,
  onCollapsedChange: v,
  collapseTitle: N = "Collapse sidebar",
  expandTitle: A = "Expand sidebar",
  collapsedWidthClassName: j = "w-[92px] min-w-[92px]",
  expandedWidthClassName: B = "w-[360px] min-w-[220px]",
  collapseButtonClassName: I,
  renderCollapseButton: p,
  accentKey: D,
  style: V,
  className: Z,
  itemClassName: K,
  activeItemClassName: G,
  groupClassName: ee,
  groupLabelClassName: Q,
  headerClassName: O,
  footerClassName: F
}) {
  const P = be(D, V), [W, re] = ce(b), J = h !== void 0, L = !!(J ? h : W), _ = r != null && r.length ? r : e != null && e.length ? [{ id: "items", items: e }] : [], ne = (S) => {
    J || re(S), v == null || v(S);
  }, U = () => ne(!L), Ie = L ? A : N, je = {
    "aria-expanded": !L,
    "aria-label": Ie,
    title: Ie,
    onClick: U
  }, q = m ? (p == null ? void 0 : p({
    collapsed: L,
    toggleCollapsed: U,
    buttonProps: je
  })) ?? /* @__PURE__ */ t(ve, { variant: "icon", size: "sm", className: s("h-8 w-8 px-0", I), ...je, children: /* @__PURE__ */ t(Be, { name: L ? "sidebar-open" : "sidebar-collapsed", className: "h-4 w-4" }) }) : null;
  return /* @__PURE__ */ o(
    "aside",
    {
      className: s(
        "rui-theme flex shrink-0 flex-col gap-4 overflow-hidden rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] p-4 shadow-[var(--rui-shadow-panel)] transition-all duration-200",
        L ? j : B,
        Z
      ),
      style: P,
      children: [
        i || d || q ? /* @__PURE__ */ o("div", { className: s("flex items-center justify-between gap-3", O), children: [
          L ? d ? /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: d }) : /* @__PURE__ */ t("div", {}) : i ? /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: i }) : /* @__PURE__ */ t("div", {}),
          q
        ] }) : null,
        _.length ? /* @__PURE__ */ t("nav", { className: "flex flex-col gap-7", "aria-label": "Sidebar", children: _.map((S, ye) => /* @__PURE__ */ o("div", { className: s("space-y-4", ee), children: [
          !L && S.label ? /* @__PURE__ */ t("div", { className: s("px-3 text-[15px] font-semibold text-[var(--rui-text-primary)]", Q), children: S.label }) : null,
          /* @__PURE__ */ t("div", { className: "space-y-2", children: S.items.map((z) => {
            const oe = z.active ?? z.id === c;
            return /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                disabled: z.disabled,
                title: L && typeof z.label == "string" ? z.label : void 0,
                "aria-current": oe ? "page" : void 0,
                onClick: () => {
                  var me;
                  (me = z.onSelect) == null || me.call(z, z.id), a == null || a(z.id, z);
                },
                className: s(
                  "flex w-full items-center rounded-full text-sm transition disabled:cursor-not-allowed disabled:opacity-50",
                  L ? "justify-center px-3 py-3" : "justify-between px-5 py-4 text-[15px]",
                  oe ? "bg-[var(--rui-accent)] text-[var(--rui-accent-contrast)]" : "bg-[var(--rui-bg-panel-2)] text-[var(--rui-text-secondary)] hover:bg-[var(--rui-accent-muted)] hover:text-[var(--rui-text-primary)]",
                  K,
                  oe && G
                ),
                children: [
                  /* @__PURE__ */ o("span", { className: s("flex min-w-0 items-center gap-3", L && "justify-center"), children: [
                    z.icon ? /* @__PURE__ */ t("span", { className: s("flex shrink-0", oe ? "text-current" : "text-[var(--rui-accent)]"), children: z.icon }) : null,
                    L ? null : /* @__PURE__ */ o("span", { className: "min-w-0 flex-1 text-left", children: [
                      /* @__PURE__ */ t("span", { className: "block truncate font-medium", children: z.label }),
                      z.description ? /* @__PURE__ */ t("span", { className: "mt-0.5 block truncate text-xs text-[var(--rui-text-tertiary)]", children: z.description }) : null
                    ] })
                  ] }),
                  !L && z.badge ? /* @__PURE__ */ t("span", { className: "ml-3 shrink-0", children: z.badge }) : null
                ]
              },
              z.id
            );
          }) })
        ] }, S.id ?? ye)) }) : null,
        u,
        l ? /* @__PURE__ */ t("div", { className: s("mt-auto px-2 py-1", F), children: l }) : null
      ]
    }
  );
}
const Un = Ze(function({
  checked: r,
  defaultChecked: i = !1,
  onCheckedChange: d,
  name: l,
  value: c,
  title: a,
  description: u,
  helper: m,
  leading: h,
  trailing: b,
  toggleable: v,
  disabled: N,
  accentKey: A,
  style: j,
  className: B,
  contentClassName: I,
  titleClassName: p,
  descriptionClassName: D,
  helperClassName: V,
  indicatorClassName: Z
}, K) {
  const [G, ee] = Xe({
    value: r,
    defaultValue: i,
    onChange: d
  }), Q = be(A, j), O = v ?? !l;
  return /* @__PURE__ */ o(
    "label",
    {
      ref: K,
      style: Q,
      className: s(
        "group flex cursor-pointer items-start gap-3 rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[linear-gradient(180deg,var(--rui-bg-surface-2),var(--rui-bg-card))] p-4 transition hover:border-[var(--rui-accent-border-soft)] hover:shadow-[0_18px_44px_rgba(0,0,0,0.30)]",
        G && "border-[var(--rui-accent-border)] shadow-[0_0_0_1px_var(--rui-accent-muted)]",
        N && "cursor-not-allowed opacity-60 hover:border-[var(--rui-border-soft)] hover:shadow-none",
        B
      ),
      children: [
        /* @__PURE__ */ t(
          "input",
          {
            type: "radio",
            name: l,
            value: c,
            checked: G,
            onClick: (F) => {
              N || !O || !G || (F.preventDefault(), ee(!1));
            },
            onChange: (F) => {
              O && G || N || ee(F.target.checked);
            },
            disabled: N,
            className: "sr-only"
          }
        ),
        /* @__PURE__ */ t(
          "span",
          {
            className: s(
              "mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border transition",
              G ? "border-[var(--rui-accent)] bg-[var(--rui-accent)]" : "border-[var(--rui-border-strong)] bg-transparent",
              Z
            ),
            "aria-hidden": "true",
            children: /* @__PURE__ */ t("span", { className: s("h-2.5 w-2.5 rounded-full bg-[#08111d] transition", !G && "scale-0") })
          }
        ),
        /* @__PURE__ */ o("div", { className: s("min-w-0 flex-1", I), children: [
          /* @__PURE__ */ o("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ o("div", { className: "min-w-0", children: [
              a ? /* @__PURE__ */ t("div", { className: s("text-sm font-semibold text-[var(--rui-text-primary)]", p), children: a }) : null,
              u ? /* @__PURE__ */ t("div", { className: s("mt-1 text-sm text-[var(--rui-text-secondary)]", D), children: u }) : null
            ] }),
            b ? /* @__PURE__ */ t("div", { className: "flex-shrink-0", children: b }) : null
          ] }),
          m || h ? /* @__PURE__ */ o("div", { className: "mt-3 flex items-end justify-between gap-3", children: [
            m ? /* @__PURE__ */ t("div", { className: s("text-sm text-[var(--rui-text-tertiary)]", V), children: m }) : /* @__PURE__ */ t("span", {}),
            h ? /* @__PURE__ */ t("div", { className: "flex-shrink-0 text-[var(--rui-text-secondary)]", children: h }) : null
          ] }) : null
        ] })
      ]
    }
  );
}), gn = Ze(function({
  checked: r,
  defaultChecked: i = !1,
  onCheckedChange: d,
  label: l,
  description: c,
  disabled: a,
  className: u,
  trackClassName: m,
  thumbClassName: h,
  labelClassName: b,
  descriptionClassName: v,
  accentKey: N,
  style: A,
  ...j
}, B) {
  const [I, p] = Xe({
    value: r,
    defaultValue: i,
    onChange: d
  }), D = xt(), V = be(N, A), Z = /* @__PURE__ */ t(
    "button",
    {
      ref: B,
      type: "button",
      role: "switch",
      "aria-checked": I,
      "aria-labelledby": l ? D : void 0,
      "aria-label": typeof l == "string" ? l : j["aria-label"],
      disabled: a,
      style: V,
      onClick: () => {
        a || p((K) => !K);
      },
      className: s(
        "relative inline-flex h-8 w-[54px] flex-shrink-0 items-center rounded-full border outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0",
        I ? "border-[var(--rui-success-border)] bg-[var(--rui-success)]" : "border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)]",
        a && "opacity-60",
        !l && !c && u,
        m
      ),
      ...j,
      children: /* @__PURE__ */ t(
        "span",
        {
          className: s(
            "pointer-events-none absolute h-7 w-7 rounded-full bg-[#f1f1ee] shadow-[0_3px_10px_rgba(0,0,0,0.22)] transition-[left]",
            I ? "left-[24px]" : "left-[1px]",
            h
          )
        }
      )
    }
  );
  return !l && !c ? Z : /* @__PURE__ */ o("div", { className: s("inline-flex items-start gap-3", a && "cursor-not-allowed opacity-60", u), children: [
    Z,
    (l || c) && /* @__PURE__ */ o("span", { className: "min-w-0", children: [
      l ? /* @__PURE__ */ t("span", { id: D, className: s("block text-sm font-medium text-[var(--rui-text-primary)]", b), children: l }) : null,
      c ? /* @__PURE__ */ t("span", { className: s("mt-0.5 block text-sm text-[var(--rui-text-secondary)]", v), children: c }) : null
    ] })
  ] });
}), vn = Ze(function({
  value: r,
  defaultValue: i = "",
  onChange: d,
  label: l,
  description: c,
  error: a,
  helperText: u,
  labelPosition: m = "top",
  wrapperClassName: h,
  labelClassName: b,
  descriptionClassName: v,
  errorClassName: N,
  helperClassName: A,
  inputClassName: j,
  prefix: B,
  suffix: I,
  accentKey: p,
  className: D,
  style: V,
  id: Z,
  disabled: K,
  required: G,
  ...ee
}, Q) {
  const [O, F] = Xe({
    value: r,
    defaultValue: i,
    onChange: d
  }), P = xt(), W = Z ?? ee.name ?? P, re = [c ? `${W}-description` : null, a ? `${W}-error` : null, u ? `${W}-helper` : null].filter(Boolean).join(" ") || void 0, J = be(p, V), L = /* @__PURE__ */ t(
    "input",
    {
      ref: Q,
      id: W,
      value: O,
      onChange: (ne) => F(ne.target.value),
      disabled: K,
      required: G,
      "aria-invalid": !!a || void 0,
      "aria-describedby": re,
      style: J,
      className: s(
        "rui-input h-10 min-w-0 w-full rounded-[4px] px-4 text-[15px] outline-none transition placeholder:text-[var(--rui-text-tertiary)] focus:border-[var(--rui-accent)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
        D,
        j
      ),
      ...ee
    }
  ), _ = B || I ? /* @__PURE__ */ o("div", { className: s("flex min-w-0 items-stretch gap-2"), children: [
    B ? /* @__PURE__ */ t("div", { className: "inline-flex items-center text-[var(--rui-text-tertiary)]", children: B }) : null,
    L,
    I ? /* @__PURE__ */ t("div", { className: "inline-flex items-center text-[var(--rui-text-tertiary)]", children: I }) : null
  ] }) : L;
  return !l && !c && !a && !u && !B && !I ? L : /* @__PURE__ */ o("div", { className: s(m === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", h), children: [
    l || c ? /* @__PURE__ */ o("div", { className: s(m === "left" ? "pt-2" : "", "min-w-0"), children: [
      l ? /* @__PURE__ */ o("label", { htmlFor: W, className: s("block text-sm font-medium text-white", b), children: [
        l,
        G ? /* @__PURE__ */ t("span", { className: "ml-1 text-[var(--rui-accent)]", children: "*" }) : null
      ] }) : null,
      c ? /* @__PURE__ */ t("div", { id: `${W}-description`, className: s("mt-1 text-sm text-[var(--rui-text-secondary)]", v), children: c }) : null
    ] }) : null,
    /* @__PURE__ */ o("div", { className: "min-w-0", children: [
      _,
      a ? /* @__PURE__ */ t("div", { id: `${W}-error`, className: s("mt-1 text-sm text-[var(--rui-danger)]", N), children: a }) : u ? /* @__PURE__ */ t("div", { id: `${W}-helper`, className: s("mt-1 text-sm text-[var(--rui-text-tertiary)]", A), children: u }) : null
    ] })
  ] });
}), sr = Ze(function({ type: r = "datetime-local", ...i }, d) {
  return /* @__PURE__ */ t(vn, { ref: d, type: r, ...i });
});
function Ae(e) {
  return e.kind === "action";
}
function kr(e) {
  return !Ae(e) && e.hideable !== !1;
}
function Mr(e) {
  return Ae(e) || e.hideable === !1 ? !0 : e.visibleByDefault !== !1;
}
function tt(e, r) {
  return r.getValue ? r.getValue(e) : r.accessor ? r.accessor(e) : e == null ? void 0 : e[r.id];
}
function pt(e) {
  return Array.isArray(e) ? e.map((r) => pt(r)).join(" ") : e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
}
function mt(e) {
  const r = Number(e);
  return Number.isFinite(r) ? r : null;
}
function bt(e) {
  if (e == null || e === "") return null;
  if (e instanceof Date) return e.getTime();
  if (typeof e == "number") return Number.isFinite(e) ? e : null;
  const r = Date.parse(String(e));
  return Number.isFinite(r) ? r : null;
}
function zt(e) {
  if (typeof e == "boolean") return e;
  if (typeof e == "number") return e > 0;
  if (typeof e == "string") {
    const r = e.trim().toLowerCase();
    if (["true", "yes", "1", "enabled", "open"].includes(r)) return !0;
    if (["false", "no", "0", "disabled", "closed"].includes(r)) return !1;
  }
  return null;
}
function $t(e) {
  return e == null ? !1 : typeof e == "string" ? e.trim().length > 0 && e !== "all" : Array.isArray(e) ? e.length > 0 : typeof e == "object" ? Object.values(e).some((r) => $t(r)) : !0;
}
function cr(e, r) {
  var i;
  return r == null ? !1 : e === "text" ? !!String(r || "").trim() : e === "enum" ? Array.isArray(r == null ? void 0 : r.values) && !!((i = r.values) != null && i.length) : e === "number" ? !!(String((r == null ? void 0 : r.min) || "").trim() || String((r == null ? void 0 : r.max) || "").trim()) : e === "datetime" ? !!(String((r == null ? void 0 : r.from) || "").trim() || String((r == null ? void 0 : r.to) || "").trim()) : e === "boolean" ? !!(r != null && r.value && r.value !== "all") : !1;
}
function Cr(e) {
  return e == null || e === "" ? "-" : Array.isArray(e) ? e.join(", ") : typeof e == "object" ? JSON.stringify(e) : String(e);
}
function yn(e, r, i, d) {
  if (i.compare) return i.compare(e, r, d);
  const l = tt(e, i), c = tt(r, i);
  let a = 0;
  switch (i.kind) {
    case "number": {
      const u = mt(l), m = mt(c);
      u == null && m == null ? a = 0 : u == null ? a = 1 : m == null ? a = -1 : a = u - m;
      break;
    }
    case "datetime": {
      const u = bt(l), m = bt(c);
      u == null && m == null ? a = 0 : u == null ? a = 1 : m == null ? a = -1 : a = u - m;
      break;
    }
    case "boolean": {
      const u = zt(l), m = zt(c);
      u == null && m == null ? a = 0 : u == null ? a = 1 : m == null ? a = -1 : a = Number(u) - Number(m);
      break;
    }
    default:
      a = pt(l).localeCompare(pt(c), void 0, { numeric: !0, sensitivity: "base" });
      break;
  }
  return d === "asc" ? a : a * -1;
}
function wn(e, r, i) {
  if (r.filterFn) return r.filterFn(e, i);
  const d = r.kind || "text", l = tt(e, r);
  switch (d) {
    case "enum": {
      const c = Array.isArray(i == null ? void 0 : i.values) ? i.values.map(String) : [];
      return c.length ? (Array.isArray(l) ? l.map((u) => String(u)) : [String(l ?? "")]).some((u) => c.includes(u)) : !0;
    }
    case "number": {
      const c = mt(l), a = mt(i == null ? void 0 : i.min), u = mt(i == null ? void 0 : i.max);
      return !(c == null || a != null && c < a || u != null && c > u);
    }
    case "datetime": {
      const c = bt(l), a = bt(i == null ? void 0 : i.from), u = bt(i == null ? void 0 : i.to);
      return !(c == null || a != null && c < a || u != null && c > u);
    }
    case "boolean": {
      const c = String((i == null ? void 0 : i.value) || "all");
      if (c === "all") return !0;
      const a = zt(l);
      return a == null ? !1 : c === "yes" ? a : !a;
    }
    default: {
      const c = String(i || "").trim().toLowerCase();
      return c ? pt(l).toLowerCase().includes(c) : !0;
    }
  }
}
function Ot(e, r) {
  return {
    visibleColumnIds: e.filter((i) => Mr(i)).map((i) => i.id),
    columnOrder: e.map((i) => i.id),
    columnWidths: Object.fromEntries(e.filter((i) => Number(i.width) > 0).map((i) => [i.id, Number(i.width)])),
    sort: null,
    filters: {},
    globalSearch: "",
    expandedRowIds: [],
    selectedRowIds: [],
    ...r
  };
}
function ht(e, r, i) {
  var B, I;
  const d = Ot(r, i), l = new Map(r.map((p) => [p.id, p])), c = Array.isArray(e == null ? void 0 : e.columnOrder) ? e.columnOrder.map(String).filter((p) => l.has(p)) : d.columnOrder, a = [...c, ...r.map((p) => p.id).filter((p) => !c.includes(p))], u = a.map((p) => l.get(p)).filter(Boolean), m = r.filter((p) => !kr(p)).map((p) => p.id), h = Array.isArray(e == null ? void 0 : e.visibleColumnIds) ? e.visibleColumnIds.filter((p) => l.has(p)) : d.visibleColumnIds, b = /* @__PURE__ */ new Set([...h, ...m]);
  r.filter((p) => !Ae(p) && b.has(p.id)).length || r.forEach((p) => {
    Mr(p) && b.add(p.id);
  });
  const N = (B = e == null ? void 0 : e.sort) != null && B.columnId ? l.get(e.sort.columnId) : null, A = N && N.sortable !== !1 && b.has(N.id) && !Ae(N) && ["asc", "desc"].includes(((I = e == null ? void 0 : e.sort) == null ? void 0 : I.direction) || "") ? { columnId: N.id, direction: e.sort.direction } : d.sort, j = Object.fromEntries(
    Object.entries((e == null ? void 0 : e.filters) || {}).filter(([p, D]) => {
      const V = l.get(p);
      return !!(V && b.has(p) && V.filterable !== !1 && !Ae(V) && $t(D));
    })
  );
  return {
    visibleColumnIds: u.filter((p) => b.has(p.id)).map((p) => p.id),
    columnOrder: a,
    columnWidths: {
      ...d.columnWidths,
      ...Object.fromEntries(
        Object.entries((e == null ? void 0 : e.columnWidths) || {}).filter(([p, D]) => l.has(p) && Number.isFinite(Number(D)) && Number(D) > 0).map(([p, D]) => [p, Number(D)])
      )
    },
    sort: A,
    filters: j,
    globalSearch: typeof (e == null ? void 0 : e.globalSearch) == "string" ? e.globalSearch : d.globalSearch,
    expandedRowIds: Array.isArray(e == null ? void 0 : e.expandedRowIds) ? e.expandedRowIds.map(String) : d.expandedRowIds,
    selectedRowIds: Array.isArray(e == null ? void 0 : e.selectedRowIds) ? e.selectedRowIds.map(String) : d.selectedRowIds
  };
}
function Nn(e, r, i = "rui:table") {
  return `${i}:${e}:${r || "__global__"}`;
}
function Sn(e, r, i) {
  if (e === !1) return null;
  const d = (e == null ? void 0 : e.key) || r;
  return d ? Nn(d, (e == null ? void 0 : e.scope) ?? i, e == null ? void 0 : e.namespace) : null;
}
function Ft(e) {
  const { expandedRowIds: r, selectedRowIds: i, ...d } = e;
  return d;
}
function kn(e) {
  return { ...e, expandedRowIds: [], selectedRowIds: [] };
}
function Mn(e, r) {
  if (typeof window > "u") return null;
  try {
    const d = (r || window.localStorage).getItem(e);
    return d ? Ft(JSON.parse(d)) : null;
  } catch {
    return null;
  }
}
function Cn(e, r, i) {
  if (!(typeof window > "u"))
    try {
      (i || window.localStorage).setItem(e, JSON.stringify(Ft(r)));
    } catch {
    }
}
function or(e) {
  return e === "center" ? "text-center" : e === "right" ? "text-right" : "text-left";
}
function In(e, r) {
  return !e || e.columnId !== r ? { columnId: r, direction: "asc" } : e.direction === "asc" ? { columnId: r, direction: "desc" } : null;
}
function Bn(e, r, i) {
  if (r === i) return e;
  const d = e.indexOf(r), l = e.indexOf(i);
  if (d < 0 || l < 0) return e;
  const c = [...e], [a] = c.splice(d, 1);
  return c.splice(l, 0, a), c;
}
function Dn(e, r) {
  const i = /* @__PURE__ */ new Set();
  return e.forEach((d) => {
    const l = tt(d, r);
    Array.isArray(l) ? l.forEach((c) => i.add(String(c))) : l != null && l !== "" && i.add(String(l));
  }), Array.from(i).sort((d, l) => d.localeCompare(l, void 0, { numeric: !0, sensitivity: "base" })).map((d) => ({ label: d, value: d }));
}
function dr(e, r) {
  const i = e.getBoundingClientRect(), d = window.innerWidth, l = window.innerHeight, c = 12, a = Math.max(c, Math.min(i.bottom + 8, l - c - 120)), u = Math.max(c, Math.min(i.right - r, d - r - c)), m = Math.max(180, l - a - c);
  return { left: u, top: a, maxHeight: m };
}
function Rn(e, r) {
  return r.renderDetailValue ? r.renderDetailValue(e) : r.renderCell ? r.renderCell(e) : Cr(tt(e, r));
}
function Tn(e, r) {
  return r ? { ...e, ...r } : e;
}
function Et(e) {
  var r;
  (r = e == null ? void 0 : e.parentNode) == null || r.removeChild(e);
}
function Ln(e, r) {
  const i = e == null ? void 0 : e.querySelector("table"), d = i == null ? void 0 : i.querySelector(`thead tr:last-child th:nth-child(${r})`);
  if (!d || typeof document > "u") return null;
  const l = Array.from((i == null ? void 0 : i.querySelectorAll(`tbody tr:not([data-rui-detail-row="true"]) td:nth-child(${r})`)) || []).slice(0, 7), c = Math.max(140, Math.min(d.getBoundingClientRect().width || 180, 340)), a = document.createElement("div");
  a.style.position = "fixed", a.style.left = "-10000px", a.style.top = "-10000px", a.style.width = `${c}px`, a.style.pointerEvents = "none", a.style.zIndex = "2147483647", a.style.overflow = "hidden", a.style.border = "1px solid var(--rui-accent-border-soft)", a.style.borderRadius = "10px", a.style.background = "var(--rui-bg-panel)", a.style.boxShadow = "0 18px 45px rgba(6, 9, 35, 0.35)", a.style.color = "var(--rui-text-primary)";
  const u = (m, h = !1) => {
    const b = m.cloneNode(!0);
    b.removeAttribute("draggable"), b.style.display = "block", b.style.width = "100%", b.style.boxSizing = "border-box", b.style.borderBottom = "1px solid var(--rui-border-soft)", b.style.background = h ? "var(--rui-bg-panel)" : "var(--rui-bg-panel-2)", b.style.padding = h ? "12px" : "10px 12px", b.style.fontSize = h ? "12px" : "13px", b.style.color = h ? "var(--rui-text-secondary)" : "var(--rui-text-primary)", b.style.opacity = "1", a.appendChild(b);
  };
  return u(d, !0), l.forEach((m) => u(m)), document.body.appendChild(a), a;
}
function Xn({
  rows: e,
  columns: r,
  rowKey: i,
  tableId: d,
  scopeId: l = null,
  persistence: c,
  state: a,
  defaultState: u,
  onStateChange: m,
  selection: h,
  virtualization: b,
  loading: v = !1,
  emptyMessage: N = "No rows available.",
  loadingContent: A = "Loading rows.",
  toolbarContent: j,
  renderToolbar: B,
  headerFilters: I,
  renderHeaderFilters: p,
  renderSelectionActions: D,
  hideColumnControls: V = !1,
  allowColumnResize: Z = !0,
  allowColumnReorder: K = !0,
  searchable: G = !1,
  searchPlaceholder: ee = "Search rows",
  globalSearchFn: Q,
  sortRows: O,
  renderExpandedContent: F,
  expandedRowIds: P,
  defaultExpandedRowIds: W,
  onExpandedChange: re,
  onRowExpand: J,
  rowClassName: L,
  detailRowClassName: _,
  containerClassName: ne,
  tableClassName: U,
  accentKey: Ie,
  style: je,
  className: q,
  classNames: S
}) {
  const ye = fe(null), z = fe(null), oe = fe(null), me = fe(null), te = fe(null), De = fe(null), we = fe(null), pe = fe(null), We = fe(null), Re = fe(null), [M, le] = ce(null), [k, ie] = ce(null), [xe, ke] = ce(!1), [Te, he] = ce(!1), [Ne, Ge] = ce(null), [Oe, it] = ce(null), [$e, qe] = ce(!1), [Qe, y] = ce(0), [Se, de] = ce({}), [w, se] = ce(0), ge = Sn(c, d, l), Pe = c === !1, Ee = Pe || c == null ? void 0 : c.adapter, Dt = Pe || c == null ? void 0 : c.storage, Ir = be(Ie, je), [Ht, gt] = ce(() => !ge || !Ee), Br = Y(() => r.map((n) => n.id).join(""), [r]), vt = fe(r), Ye = fe(m), [Vt, Zt] = ce(
    () => ht(
      Tn(
        Ot(r, { ...u, expandedRowIds: W || (u == null ? void 0 : u.expandedRowIds) }),
        ge && Mn(ge, Dt) || void 0
      ),
      r,
      {
        ...u,
        expandedRowIds: W || (u == null ? void 0 : u.expandedRowIds),
        selectedRowIds: (h == null ? void 0 : h.defaultSelectedKeys) || (u == null ? void 0 : u.selectedRowIds)
      }
    )
  ), $ = Y(() => {
    const n = { ...Vt, ...a };
    return P !== void 0 && (n.expandedRowIds = P), ht(n, r);
  }, [r, a, P, Vt]), Rt = fe($);
  Rt.current = $;
  const Me = Ce(
    (n) => {
      var C;
      const f = ht(
        {
          ...Rt.current,
          ...a,
          ...P !== void 0 ? { expandedRowIds: P } : {}
        },
        vt.current
      ), x = ht(typeof n == "function" ? n(f) : n, vt.current);
      return Rt.current = x, Zt(x), (C = Ye.current) == null || C.call(Ye, x), x;
    },
    [a, P]
  );
  ae(() => {
    qe(!0);
  }, []), ae(() => {
    vt.current = r;
  }, [r]), ae(() => {
    Ye.current = m;
  }, [m]), ae(() => {
    const n = De.current;
    if (!n || typeof ResizeObserver > "u") return;
    const f = new ResizeObserver(([x]) => {
      const C = Math.round(x.contentRect.width);
      y((R) => Math.abs(R - C) > 1 ? C : R);
    });
    return f.observe(n), y(n.clientWidth), () => f.disconnect();
  }, []), ae(
    () => () => {
      pe.current != null && window.cancelAnimationFrame(pe.current), Re.current = null, Et(We.current), document.body.style.cursor = "", document.body.style.userSelect = "";
    },
    []
  ), ae(() => {
    let n = !1;
    if (!ge || !Ee) {
      gt(!0);
      return;
    }
    return gt(!1), Promise.resolve(Ee.load(ge)).then((f) => {
      n || (f && Zt((x) => {
        var R;
        const C = ht({ ...x, ...Ft(f) }, vt.current);
        return (R = Ye.current) == null || R.call(Ye, C), C;
      }), gt(!0));
    }).catch(() => {
      n || gt(!1);
    }), () => {
      n = !0;
    };
  }, [Br, Ee, ge]), ae(() => {
    if (!(!ge || Pe)) {
      if (Ee) {
        if (!Ht) return;
        Promise.resolve(Ee.save(ge, kn($))).catch(() => {
        });
        return;
      }
      Cn(ge, $, Dt);
    }
  }, [Ht, $, Ee, Pe, ge, Dt]);
  const rt = Y(() => {
    const n = new Map(r.map((f) => [f.id, f]));
    return [...$.columnOrder, ...r.map((f) => f.id).filter((f) => !$.columnOrder.includes(f))].map((f) => n.get(f)).filter(Boolean);
  }, [r, $.columnOrder]), _e = Y(
    () => rt.filter((n) => Ae(n) || n.hideable === !1 ? !0 : $.visibleColumnIds.includes(n.id)),
    [$.visibleColumnIds, rt]
  ), at = Y(
    () => rt.filter((n) => Ae(n) || n.hideable === !1 ? !1 : !_e.some((f) => f.id === n.id)),
    [rt, _e]
  ), Fe = Ce(
    (n, f) => {
      Me((x) => {
        const C = { ...x.filters };
        return $t(f) ? C[n] = f : delete C[n], { ...x, filters: C };
      });
    },
    [Me]
  ), Gt = Ce(
    (n) => {
      Me((f) => ({ ...f, globalSearch: n }));
    },
    [Me]
  ), yt = Ce(
    (n) => {
      Me((f) => {
        if (!(n in f.filters)) return f;
        const x = { ...f.filters };
        return delete x[n], { ...f, filters: x };
      });
    },
    [Me]
  ), Jt = Ce(
    (n, f) => {
      !Number.isFinite(f) || f <= 0 || Me((x) => ({ ...x, columnWidths: { ...x.columnWidths, [n]: f } }));
    },
    [Me]
  ), Dr = Ce(
    (n, f) => {
      Me((x) => ({ ...x, columnOrder: Bn(x.columnOrder, n, f) }));
    },
    [Me]
  ), Tt = Ce(() => {
    Me(Ot(r, { ...u, expandedRowIds: W || [], selectedRowIds: (h == null ? void 0 : h.defaultSelectedKeys) || [] }));
  }, [r, W, u, h == null ? void 0 : h.defaultSelectedKeys, Me]);
  ae(() => {
    const n = (x) => {
      const C = we.current;
      if (!C) return;
      const R = r.find((E) => E.id === C.columnId);
      if (!R) return;
      const H = Math.max(R.minWidth || 96, 56), ue = R.maxWidth || 720, ze = Math.min(ue, Math.max(H, C.startWidth + (x.clientX - C.startX)));
      C.nextWidth = ze, pe.current == null && (pe.current = window.requestAnimationFrame(() => {
        pe.current = null;
        const E = we.current;
        E && de((X) => ({ ...X, [E.columnId]: E.nextWidth }));
      }));
    }, f = () => {
      const x = we.current;
      x && (pe.current != null && (window.cancelAnimationFrame(pe.current), pe.current = null), we.current = null, Jt(x.columnId, x.nextWidth), de((C) => {
        if (!(x.columnId in C)) return C;
        const { [x.columnId]: R, ...H } = C;
        return H;
      }), document.body.style.cursor = "", document.body.style.userSelect = "");
    };
    return window.addEventListener("mousemove", n), window.addEventListener("mouseup", f), () => {
      window.removeEventListener("mousemove", n), window.removeEventListener("mouseup", f);
    };
  }, [r, Jt]), ae(() => {
    const n = (f) => {
      !(f.target instanceof Node) || [ye, z, oe, me, te].some((C) => {
        var R;
        return (R = C.current) == null ? void 0 : R.contains(f.target);
      }) || (ke(!1), he(!1));
    };
    return document.addEventListener("mousedown", n), () => document.removeEventListener("mousedown", n);
  }, []), ae(() => {
    if (!xe || !z.current || typeof window > "u") return;
    const n = () => {
      z.current && Ge(dr(z.current, 320));
    };
    return n(), window.addEventListener("resize", n), window.addEventListener("scroll", n, !0), () => {
      window.removeEventListener("resize", n), window.removeEventListener("scroll", n, !0);
    };
  }, [xe]), ae(() => {
    if (!Te || !oe.current || typeof window > "u") return;
    const n = () => {
      oe.current && it(dr(oe.current, 260));
    };
    return n(), window.addEventListener("resize", n), window.addEventListener("scroll", n, !0), () => {
      window.removeEventListener("resize", n), window.removeEventListener("scroll", n, !0);
    };
  }, [Te]);
  const Je = at.length > 0 || !!F, lt = Y(() => {
    const n = $.globalSearch.trim().toLowerCase();
    return e.filter((f) => Object.entries($.filters).every(([C, R]) => {
      const H = r.find((ue) => ue.id === C);
      return !H || Ae(H) ? !0 : wn(f, H, R);
    }) ? n ? Q ? Q(f, n) : r.some((C) => !Ae(C) && pt(tt(f, C)).toLowerCase().includes(n)) : !0 : !1);
  }, [r, Q, $.filters, $.globalSearch, e]), Ue = Y(() => {
    if (O) return O(lt, $.sort, r);
    if (!$.sort) return lt;
    const n = r.find((f) => {
      var x;
      return f.id === ((x = $.sort) == null ? void 0 : x.columnId);
    });
    return n ? lt.map((f, x) => ({ row: f, index: x })).sort((f, x) => yn(f.row, x.row, n, $.sort.direction) || f.index - x.index).map((f) => f.row) : lt;
  }, [r, lt, $.sort, O]), wt = Y(() => new Map(e.map((n) => [i(n), n])), [i, e]), Le = h == null ? void 0 : h.mode, He = (h == null ? void 0 : h.selectedKeys) ?? $.selectedRowIds, Nt = Y(() => new Set(He), [He]), Lt = Y(() => He.map((n) => wt.get(n)).filter(Boolean), [wt, He]), st = Ce(
    (n) => {
      var f;
      Me((x) => ({ ...x, selectedRowIds: n })), (f = h == null ? void 0 : h.onChange) == null || f.call(h, n, n.map((x) => wt.get(x)).filter(Boolean));
    },
    [wt, h, Me]
  ), Ut = (n) => {
    var C;
    if (!Le || (C = h == null ? void 0 : h.isRowDisabled) != null && C.call(h, n)) return;
    const f = i(n);
    if (Le === "single") {
      st(Nt.has(f) ? [] : [f]);
      return;
    }
    const x = new Set(He);
    x.has(f) ? x.delete(f) : x.add(f), st(Array.from(x));
  }, ct = ((h == null ? void 0 : h.selectAllScope) === "all" ? e : Ue).filter((n) => {
    var f;
    return !((f = h == null ? void 0 : h.isRowDisabled) != null && f.call(h, n));
  }).map((n) => i(n)), St = !!ct.length && ct.every((n) => Nt.has(n)), Rr = ct.some((n) => Nt.has(n)), Tr = () => {
    !Le || Le === "single" || st(St ? He.filter((n) => !ct.includes(n)) : Array.from(/* @__PURE__ */ new Set([...He, ...ct])));
  }, Lr = () => st([]), Xt = P ?? $.expandedRowIds, Ar = Y(() => new Set(Xt), [Xt]), jr = (n) => {
    const f = i(n), C = Me((H) => {
      const ue = new Set(H.expandedRowIds);
      return ue.has(f) ? ue.delete(f) : ue.add(f), { ...H, expandedRowIds: Array.from(ue) };
    }).expandedRowIds, R = C.includes(f);
    re == null || re(C, n), J == null || J(n, R);
  }, At = rt.filter((n) => !Ae(n) && n.hideable !== !1), kt = _e.filter((n) => !Ae(n) && n.filterable !== !1), jt = kt.filter((n) => cr(n.kind || "text", $.filters[n.id])).length, ot = Y(
    () => Object.fromEntries(
      _e.map((n) => [n.id, Number(Se[n.id] || $.columnWidths[n.id] || n.width || n.minWidth || 160)])
    ),
    [Se, $.columnWidths, _e]
  ), Wt = (Je ? 56 : 0) + (Le ? 72 : 0), Pt = _e.reduce((n, f) => n + ot[f.id], 0), dt = Y(() => {
    const n = Math.max(Wt + Pt, 720), f = Math.max(n, Qe || 0), x = Math.max(0, f - Wt - Pt);
    return { tableWidth: f, fillerWidth: x, columnWidths: ot };
  }, [Pt, ot, Wt, Qe]), Ve = !!(b != null && b.enabled && !Je), Mt = (b == null ? void 0 : b.rowHeight) || 48, qt = (b == null ? void 0 : b.maxHeight) || 520, Qt = (b == null ? void 0 : b.overscan) || 6, Ct = Ve ? Math.max(0, Math.floor(w / Mt) - Qt) : 0, Wr = Ve ? Math.ceil(qt / Mt) + Qt * 2 : Ue.length, Yt = Ve ? Ue.slice(Ct, Ct + Wr) : Ue, Kt = Ve ? Ct * Mt : 0, er = Ve ? Math.max(0, (Ue.length - Ct - Yt.length) * Mt) : 0, ut = dt.fillerWidth > 1, ft = _e.length + (Je ? 1 : 0) + (Le ? 1 : 0) + (ut ? 1 : 0), Pr = (n) => {
    var x, C;
    if (n.renderFilter)
      return n.renderFilter({
        value: $.filters[n.id],
        setValue: (R) => Fe(n.id, R),
        clear: () => yt(n.id),
        rows: e
      });
    const f = n.kind || "text";
    if (f === "enum") {
      const R = n.getFilterOptions ? n.getFilterOptions(e) : n.getEnumOptions ? n.getEnumOptions(e) : Dn(e, n), H = Array.isArray((x = $.filters[n.id]) == null ? void 0 : x.values) ? $.filters[n.id].values.map(String) : [];
      return /* @__PURE__ */ t("div", { className: "max-h-[220px] space-y-2 overflow-auto pr-1 rui-scrollbar", children: R.map((ue) => {
        const ze = H.includes(String(ue.value));
        return /* @__PURE__ */ o("label", { className: "flex items-center gap-3 text-sm text-[var(--rui-text-secondary)]", children: [
          /* @__PURE__ */ t(
            "input",
            {
              type: "checkbox",
              checked: ze,
              onChange: () => {
                const E = new Set(H);
                ze ? E.delete(String(ue.value)) : E.add(String(ue.value)), Fe(n.id, { values: Array.from(E) });
              },
              className: "h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)]"
            }
          ),
          /* @__PURE__ */ t("span", { children: ue.label })
        ] }, String(ue.value));
      }) });
    }
    if (f === "number") {
      const R = $.filters[n.id] || {};
      return /* @__PURE__ */ o("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t(
          "input",
          {
            className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input",
            type: "number",
            value: R.min || "",
            onChange: (H) => Fe(n.id, { ...R, min: H.target.value }),
            placeholder: "Minimum"
          }
        ),
        /* @__PURE__ */ t(
          "input",
          {
            className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input",
            type: "number",
            value: R.max || "",
            onChange: (H) => Fe(n.id, { ...R, max: H.target.value }),
            placeholder: "Maximum"
          }
        )
      ] });
    }
    if (f === "datetime") {
      const R = $.filters[n.id] || {};
      return /* @__PURE__ */ o("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t(sr, { type: "datetime-local", value: R.from || "", onChange: (H) => Fe(n.id, { ...R, from: H }) }),
        /* @__PURE__ */ t(sr, { type: "datetime-local", value: R.to || "", onChange: (H) => Fe(n.id, { ...R, to: H }) })
      ] });
    }
    if (f === "boolean") {
      const R = ((C = $.filters[n.id]) == null ? void 0 : C.value) || "all";
      return /* @__PURE__ */ o("select", { className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input", value: R, onChange: (H) => Fe(n.id, { value: H.target.value }), children: [
        /* @__PURE__ */ t("option", { value: "all", children: "All" }),
        /* @__PURE__ */ t("option", { value: "yes", children: "Yes" }),
        /* @__PURE__ */ t("option", { value: "no", children: "No" })
      ] });
    }
    return /* @__PURE__ */ t(
      "input",
      {
        className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input",
        value: String($.filters[n.id] || ""),
        onChange: (R) => Fe(n.id, R.target.value),
        placeholder: `Filter ${String(n.label)}`
      }
    );
  }, tr = B == null ? void 0 : B({ state: $, rows: e, visibleRows: Ue, selectedRows: Lt, reset: Tt }), rr = He.length ? D == null ? void 0 : D({ selectedKeys: He, selectedRows: Lt, clearSelection: Lr }) : null, Ke = _e.some((n) => n.groupId || n.groupLabel), Er = Y(() => Ke ? _e.reduce((n, f) => {
    const x = f.groupId ? `group:${f.groupId}` : typeof f.groupLabel == "string" || typeof f.groupLabel == "number" ? `label:${f.groupLabel}` : f.groupLabel ? `node:${f.id}` : "ungrouped", C = f.groupLabel ?? f.groupId ?? "", R = n[n.length - 1];
    return (R == null ? void 0 : R.key) === x ? (R.span += 1, n) : (n.push({ key: x, label: C, span: 1 }), n);
  }, []) : [], [Ke, _e]), nr = () => {
    Re.current = null, le(null), ie(null), Et(We.current), We.current = null;
  }, _r = Ke ? /* @__PURE__ */ o("tr", { className: "sticky top-0 z-30 border-b border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] text-[var(--rui-text-secondary)]", children: [
    Je ? /* @__PURE__ */ t("th", { className: "w-14 px-3 py-2", rowSpan: 2 }) : null,
    Le ? /* @__PURE__ */ t("th", { className: "w-[72px] px-3 py-2", rowSpan: 2 }) : null,
    Er.map((n) => /* @__PURE__ */ t(
      "th",
      {
        colSpan: n.span,
        className: "border-r border-[var(--rui-border-soft)] px-3 py-2 text-left text-xs font-medium uppercase tracking-[0.14em] last:border-r-0",
        children: n.label
      },
      n.key
    )),
    ut ? /* @__PURE__ */ t("th", { className: "px-3 py-2", rowSpan: 2, "aria-hidden": "true" }) : null
  ] }) : null;
  return /* @__PURE__ */ o("div", { ref: ye, className: s("rui-theme flex min-h-0 w-full flex-1 flex-col", q, S == null ? void 0 : S.root), style: Ir, children: [
    j || tr || rr || G || !V && At.length ? /* @__PURE__ */ o("div", { className: s("mb-3 flex flex-wrap items-center justify-between gap-2", S == null ? void 0 : S.toolbar), children: [
      /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-2", children: [
        G ? /* @__PURE__ */ t("div", { className: "relative w-full max-w-[260px]", children: /* @__PURE__ */ t(
          "input",
          {
            className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input",
            value: $.globalSearch,
            onChange: (n) => Gt(n.target.value),
            placeholder: ee
          }
        ) }) : null,
        j,
        tr,
        rr
      ] }),
      !V && At.length ? /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center justify-end gap-2", children: [
        kt.length ? /* @__PURE__ */ t("div", { ref: z, className: "flex items-center", children: /* @__PURE__ */ o(
          ve,
          {
            variant: "ghost",
            size: "sm",
            leftIcon: /* @__PURE__ */ t(Be, { name: "filter", className: "h-4 w-4" }),
            className: s(jt ? "text-[var(--rui-accent)]" : ""),
            onClick: () => ke((n) => !n),
            children: [
              "Filters",
              jt ? /* @__PURE__ */ t("span", { className: "rounded-full border border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] px-1.5 py-0 text-[10px] leading-4 text-[var(--rui-accent)]", children: jt }) : null
            ]
          }
        ) }) : null,
        /* @__PURE__ */ t("div", { ref: oe, className: "flex items-center", children: /* @__PURE__ */ t(ve, { variant: "ghost", size: "sm", leftIcon: /* @__PURE__ */ t(Be, { name: "grid", className: "h-4 w-4" }), onClick: () => he((n) => !n), children: "Columns" }) }),
        /* @__PURE__ */ t(ve, { variant: "ghost", size: "sm", onClick: Tt, children: "Reset table" })
      ] }) : null
    ] }) : null,
    I || p ? /* @__PURE__ */ o(
      "div",
      {
        className: s("mb-3 flex flex-wrap items-center gap-2 rounded-[10px] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)] p-3", S == null ? void 0 : S.headerFilters),
        children: [
          I,
          p == null ? void 0 : p({
            state: $,
            rows: e,
            visibleRows: Ue,
            selectedRows: Lt,
            setGlobalSearch: Gt,
            setFilter: Fe,
            clearFilter: yt,
            reset: Tt
          })
        ]
      }
    ) : null,
    $e && xe && Ne ? Bt(
      /* @__PURE__ */ o(
        "div",
        {
          ref: me,
          className: s(
            "rui-theme fixed z-[130] w-[320px] overflow-auto rounded-[10px] border border-solid border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] p-3 shadow-panel rui-scrollbar",
            S == null ? void 0 : S.menu
          ),
          style: { left: Ne.left, top: Ne.top, maxHeight: Ne.maxHeight },
          children: [
            /* @__PURE__ */ o("div", { className: "mb-3 flex items-center justify-between", children: [
              /* @__PURE__ */ t("div", { className: "text-xs uppercase tracking-[0.14em] text-[var(--rui-text-tertiary)]", children: "Table filters" }),
              /* @__PURE__ */ t(ve, { variant: "ghost", size: "sm", onClick: () => kt.forEach((n) => yt(n.id)), children: "Clear all" })
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-4", children: kt.map((n) => {
              const f = cr(n.kind || "text", $.filters[n.id]);
              return /* @__PURE__ */ o("div", { className: "rounded-[10px] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)] p-3", children: [
                /* @__PURE__ */ o("div", { className: "mb-2 flex items-center justify-between gap-3", children: [
                  /* @__PURE__ */ t("div", { className: "text-sm font-medium text-[var(--rui-text-primary)]", children: n.label }),
                  f ? /* @__PURE__ */ t(ve, { variant: "ghost", size: "sm", onClick: () => yt(n.id), children: "Clear" }) : null
                ] }),
                Pr(n)
              ] }, n.id);
            }) })
          ]
        }
      ),
      document.body
    ) : null,
    $e && Te && Oe ? Bt(
      /* @__PURE__ */ o(
        "div",
        {
          ref: te,
          className: s(
            "rui-theme fixed z-[130] w-[260px] rounded-[10px] border border-solid border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] p-3 shadow-panel",
            S == null ? void 0 : S.menu
          ),
          style: { left: Oe.left, top: Oe.top, maxHeight: Oe.maxHeight },
          children: [
            /* @__PURE__ */ t("div", { className: "mb-2 text-xs uppercase tracking-[0.14em] text-[var(--rui-text-tertiary)]", children: "Visible columns" }),
            /* @__PURE__ */ t("div", { className: "space-y-2 overflow-auto pr-1 rui-scrollbar", style: { maxHeight: Math.max(120, Oe.maxHeight - 36) }, children: At.map((n) => {
              const f = $.visibleColumnIds.includes(n.id);
              return /* @__PURE__ */ o("label", { className: "flex items-center gap-3 text-sm text-[var(--rui-text-secondary)]", children: [
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: "checkbox",
                    checked: f,
                    onChange: () => {
                      Me((x) => {
                        var ze;
                        const C = x.visibleColumnIds.includes(n.id), R = x.visibleColumnIds.filter((E) => {
                          const X = r.find((nt) => nt.id === E);
                          return X && !Ae(X);
                        });
                        if (C && R.length <= 1) return x;
                        const H = new Set(x.visibleColumnIds);
                        C ? H.delete(n.id) : H.add(n.id);
                        const ue = { ...x.filters };
                        return C && delete ue[n.id], {
                          ...x,
                          visibleColumnIds: rt.filter((E) => H.has(E.id) || !kr(E)).map((E) => E.id),
                          filters: ue,
                          sort: ((ze = x.sort) == null ? void 0 : ze.columnId) === n.id && C ? null : x.sort
                        };
                      });
                    },
                    className: "h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)]"
                  }
                ),
                /* @__PURE__ */ t("span", { children: n.label })
              ] }, n.id);
            }) })
          ]
        }
      ),
      document.body
    ) : null,
    /* @__PURE__ */ t(
      "div",
      {
        ref: De,
        className: s(
          "min-h-0 w-full flex-1 overflow-auto rounded-[10px] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)]",
          ne,
          S == null ? void 0 : S.container
        ),
        style: { scrollbarGutter: "stable both-edges", maxHeight: Ve ? qt : void 0 },
        onScroll: (n) => {
          Ve && se(n.currentTarget.scrollTop);
        },
        children: /* @__PURE__ */ o("table", { className: s("table-fixed text-left text-sm", U, S == null ? void 0 : S.table), style: { width: `${dt.tableWidth}px` }, children: [
          /* @__PURE__ */ o("colgroup", { children: [
            Je ? /* @__PURE__ */ t("col", { style: { width: 56 } }) : null,
            Le ? /* @__PURE__ */ t("col", { style: { width: 72 } }) : null,
            _e.map((n) => /* @__PURE__ */ t("col", { style: { width: dt.columnWidths[n.id] || ot[n.id] || 160 } }, n.id)),
            ut ? /* @__PURE__ */ t("col", { style: { width: dt.fillerWidth } }) : null
          ] }),
          /* @__PURE__ */ o("thead", { children: [
            _r,
            /* @__PURE__ */ o(
              "tr",
              {
                className: s(
                  "sticky top-0 z-20 border-b border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] text-[var(--rui-text-secondary)]",
                  Ke && "top-[37px]",
                  S == null ? void 0 : S.headerRow
                ),
                children: [
                  Je && !Ke ? /* @__PURE__ */ t("th", { className: "w-14 px-3 py-3 font-medium" }) : null,
                  Le && !Ke ? /* @__PURE__ */ t("th", { className: "w-[72px] px-3 py-3 text-left font-medium", children: Le === "multi" ? /* @__PURE__ */ t(
                    "input",
                    {
                      type: "checkbox",
                      checked: St,
                      ref: (n) => {
                        n && (n.indeterminate = Rr && !St);
                      },
                      onChange: Tr,
                      className: "h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)]",
                      "aria-label": St ? "Clear row selection" : "Select rows"
                    }
                  ) : null }) : null,
                  _e.map((n, f) => {
                    var ze;
                    const x = !Ae(n) && n.sortable !== !1, C = ((ze = $.sort) == null ? void 0 : ze.columnId) === n.id ? $.sort.direction : null, R = n.renderHeader ? n.renderHeader() : n.label, H = K && !Ae(n), ue = f + (Je ? 1 : 0) + (Le ? 1 : 0) + 1;
                    return /* @__PURE__ */ o(
                      "th",
                      {
                        draggable: H,
                        "aria-grabbed": H ? M === n.id : void 0,
                        "data-column-id": n.id,
                        className: s(
                          "relative px-3 py-3 font-medium",
                          H && "cursor-grab active:cursor-grabbing",
                          M === n.id && "opacity-60",
                          k === n.id && M !== n.id && "bg-[var(--rui-accent-muted)]",
                          or(n.align),
                          n.headerClassName
                        ),
                        onDragStart: (E) => {
                          if (!H) return;
                          Et(We.current), Re.current = n.id, le(n.id), E.dataTransfer.effectAllowed = "move", E.dataTransfer.setData("text/plain", n.id);
                          const X = Ln(De.current, ue);
                          We.current = X, X && typeof E.dataTransfer.setDragImage == "function" && E.dataTransfer.setDragImage(X, Math.min(X.offsetWidth / 2, 160), 18);
                        },
                        onDragEnter: () => {
                          const E = Re.current || M;
                          !H || !E || E === n.id || ie(n.id);
                        },
                        onDragOver: (E) => {
                          const X = Re.current || M;
                          !H || !X || X === n.id || (E.preventDefault(), E.dataTransfer.dropEffect = "move");
                        },
                        onDrop: (E) => {
                          if (!H) return;
                          E.preventDefault();
                          const X = E.dataTransfer.getData("text/plain") || Re.current || M;
                          X && Dr(X, n.id), nr();
                        },
                        onDragEnd: nr,
                        children: [
                          k === n.id && M !== n.id ? /* @__PURE__ */ t("span", { className: "pointer-events-none absolute inset-y-1 left-0 w-0.5 rounded-full bg-[var(--rui-accent)] shadow-[0_0_0_3px_var(--rui-accent-muted)]" }) : null,
                          /* @__PURE__ */ t("div", { className: "flex items-center gap-1 pr-3", children: n.renderHeader ? /* @__PURE__ */ t("div", { className: s("flex min-w-0 flex-1 items-center", n.align === "right" ? "justify-end" : n.align === "center" ? "justify-center" : ""), children: R }) : x ? /* @__PURE__ */ o(
                            "button",
                            {
                              type: "button",
                              className: s(
                                "flex min-w-0 flex-1 appearance-none items-center gap-1 border-0 bg-transparent p-0 text-left font-medium text-inherit transition hover:text-[var(--rui-text-primary)]",
                                n.align === "right" ? "justify-end" : n.align === "center" ? "justify-center" : ""
                              ),
                              onClick: () => Me((E) => ({ ...E, sort: In(E.sort, n.id) })),
                              children: [
                                /* @__PURE__ */ t("span", { className: "truncate", children: R }),
                                /* @__PURE__ */ t("span", { className: s("text-[10px] uppercase tracking-[0.14em]", C ? "text-[var(--rui-accent)]" : "text-[var(--rui-text-tertiary)]"), children: C === "asc" ? "↑" : C === "desc" ? "↓" : "•" })
                              ]
                            }
                          ) : /* @__PURE__ */ t("span", { className: "truncate", children: R }) }),
                          Z && !Ae(n) ? /* @__PURE__ */ t(
                            "div",
                            {
                              className: "absolute inset-y-1 right-0 w-2 cursor-col-resize rounded-full transition hover:bg-white/10",
                              "aria-hidden": "true",
                              onMouseDown: (E) => {
                                E.preventDefault(), E.stopPropagation(), document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
                                const X = Number(dt.columnWidths[n.id] || ot[n.id] || 160);
                                we.current = {
                                  columnId: n.id,
                                  startX: E.clientX,
                                  startWidth: X,
                                  nextWidth: X
                                };
                              }
                            }
                          ) : null
                        ]
                      },
                      n.id
                    );
                  }),
                  ut && !Ke ? /* @__PURE__ */ t("th", { className: "px-3 py-3", "aria-hidden": "true" }) : null
                ]
              }
            )
          ] }),
          /* @__PURE__ */ o("tbody", { children: [
            Ve && Kt ? /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t("td", { colSpan: ft, style: { height: Kt } }) }) : null,
            v ? /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t("td", { colSpan: ft, className: "px-3 py-8 text-center text-[var(--rui-text-tertiary)]", children: A }) }) : null,
            v ? null : Yt.map((n) => {
              var E;
              const f = i(n), x = Ar.has(f), C = x ? F == null ? void 0 : F(n) : null, R = !!F || at.length > 0, H = typeof L == "function" ? L(n) : L, ue = Nt.has(f), ze = (E = h == null ? void 0 : h.isRowDisabled) == null ? void 0 : E.call(h, n);
              return /* @__PURE__ */ o(hr.Fragment, { children: [
                /* @__PURE__ */ o(
                  "tr",
                  {
                    className: s(
                      "border-b border-[var(--rui-border-soft)] align-top last:border-none",
                      ue && "bg-[var(--rui-accent-muted)]",
                      H,
                      S == null ? void 0 : S.row
                    ),
                    children: [
                      Je ? /* @__PURE__ */ t("td", { className: "px-3 py-3", children: R ? /* @__PURE__ */ t(ve, { variant: "ghost", size: "sm", className: "w-9 px-0", onClick: () => jr(n), title: x ? "Collapse row" : "Expand row", children: /* @__PURE__ */ t(Be, { name: x ? "chevron-down" : "chevron-right", className: "h-4 w-4" }) }) : null }) : null,
                      Le ? /* @__PURE__ */ t("td", { className: "px-3 py-3 text-left", children: /* @__PURE__ */ t(
                        "input",
                        {
                          type: Le === "single" ? "radio" : "checkbox",
                          checked: ue,
                          disabled: ze,
                          onClick: (X) => {
                            Le !== "single" || !ue || ze || (X.preventDefault(), Ut(n));
                          },
                          onChange: () => {
                            Le === "single" && ue || Ut(n);
                          },
                          className: "h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)] disabled:opacity-35",
                          "aria-label": ue ? "Deselect row" : "Select row"
                        }
                      ) }) : null,
                      _e.map((X) => {
                        const nt = X.renderCell ? X.renderCell(n) : Cr(tt(n, X)), zr = typeof X.cellClassName == "function" ? X.cellClassName(n) : X.cellClassName;
                        return /* @__PURE__ */ t(
                          "td",
                          {
                            className: s("px-3 py-3 text-[var(--rui-text-secondary)]", or(X.align), zr, S == null ? void 0 : S.cell),
                            children: typeof nt == "string" || typeof nt == "number" ? /* @__PURE__ */ t("div", { className: s(X.wrap ? "whitespace-normal break-words" : "truncate"), children: nt }) : nt
                          },
                          X.id
                        );
                      }),
                      ut ? /* @__PURE__ */ t("td", { "aria-hidden": "true", className: "px-3 py-3" }) : null
                    ]
                  }
                ),
                x && R ? /* @__PURE__ */ t("tr", { "data-rui-detail-row": "true", className: s("border-b border-[var(--rui-border-soft)] last:border-none", _, S == null ? void 0 : S.detailRow), children: /* @__PURE__ */ t("td", { colSpan: ft, className: "px-3 py-3", children: /* @__PURE__ */ o("div", { className: "rounded-[10px] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)] p-4 text-sm text-[var(--rui-text-secondary)]", children: [
                  at.length ? /* @__PURE__ */ t("div", { className: "grid gap-3 md:grid-cols-2 xl:grid-cols-3", children: at.map((X) => /* @__PURE__ */ o("div", { children: [
                    /* @__PURE__ */ t("div", { className: "text-xs uppercase tracking-[0.14em] text-[var(--rui-text-tertiary)]", children: X.label }),
                    /* @__PURE__ */ t("div", { className: "mt-1 whitespace-normal break-words text-[var(--rui-text-primary)]", children: Rn(n, X) })
                  ] }, X.id)) }) : null,
                  C ? /* @__PURE__ */ t("div", { className: s(at.length ? "mt-4 border-t border-[var(--rui-border-soft)] pt-4" : ""), children: C }) : null
                ] }) }) }) : null
              ] }, f);
            }),
            Ve && er ? /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t("td", { colSpan: ft, style: { height: er } }) }) : null,
            !v && !Ue.length ? /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t("td", { colSpan: ft, className: "px-3 py-8 text-center text-[var(--rui-text-tertiary)]", children: N }) }) : null
          ] })
        ] })
      }
    )
  ] });
}
const qn = Ze(function({
  value: r,
  defaultValue: i = "",
  onChange: d,
  label: l,
  description: c,
  error: a,
  helperText: u,
  labelPosition: m = "top",
  wrapperClassName: h,
  labelClassName: b,
  descriptionClassName: v,
  errorClassName: N,
  helperClassName: A,
  textareaClassName: j,
  accentKey: B,
  className: I,
  style: p,
  id: D,
  disabled: V,
  required: Z,
  rows: K = 5,
  ...G
}, ee) {
  const [Q, O] = Xe({
    value: r,
    defaultValue: i,
    onChange: d
  }), F = xt(), P = D ?? G.name ?? F, W = [c ? `${P}-description` : null, a ? `${P}-error` : null, u ? `${P}-helper` : null].filter(Boolean).join(" ") || void 0, re = be(B, p);
  return /* @__PURE__ */ o("div", { className: s(m === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", h), children: [
    l || c ? /* @__PURE__ */ o("div", { className: s(m === "left" ? "pt-2" : "", "min-w-0"), children: [
      l ? /* @__PURE__ */ o("label", { htmlFor: P, className: s("block text-sm font-medium text-white", b), children: [
        l,
        Z ? /* @__PURE__ */ t("span", { className: "ml-1 text-[var(--rui-accent)]", children: "*" }) : null
      ] }) : null,
      c ? /* @__PURE__ */ t("div", { id: `${P}-description`, className: s("mt-1 text-sm text-[var(--rui-text-secondary)]", v), children: c }) : null
    ] }) : null,
    /* @__PURE__ */ o("div", { className: "min-w-0", children: [
      /* @__PURE__ */ t(
        "textarea",
        {
          ref: ee,
          id: P,
          value: Q,
          onChange: (J) => O(J.target.value),
          disabled: V,
          required: Z,
          rows: K,
          "aria-invalid": !!a || void 0,
          "aria-describedby": W,
          style: re,
          className: s(
            "rui-input min-h-[96px] w-full px-3 py-2.5 text-sm outline-none transition placeholder:text-[var(--rui-text-tertiary)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
            I,
            j
          ),
          ...G
        }
      ),
      a ? /* @__PURE__ */ t("div", { id: `${P}-error`, className: s("mt-1 text-sm text-[var(--rui-danger)]", N), children: a }) : u ? /* @__PURE__ */ t("div", { id: `${P}-helper`, className: s("mt-1 text-sm text-[var(--rui-text-tertiary)]", A), children: u }) : null
    ] })
  ] });
});
function An(e) {
  if (e.trim() === "") return null;
  const r = Number(e);
  return Number.isFinite(r) ? r : null;
}
function _t(e) {
  return e == null ? "" : String(e);
}
const Qn = Ze(function({
  value: r,
  defaultValue: i = null,
  onChange: d,
  onValueChange: l,
  label: c,
  description: a,
  error: u,
  helperText: m,
  labelPosition: h = "top",
  wrapperClassName: b,
  labelClassName: v,
  descriptionClassName: N,
  errorClassName: A,
  helperClassName: j,
  inputClassName: B,
  prefix: I,
  suffix: p,
  accentKey: D,
  className: V,
  style: Z,
  id: K,
  disabled: G,
  required: ee,
  step: Q,
  min: O,
  max: F,
  ...P
}, W) {
  const [re, J] = Xe({
    value: r,
    defaultValue: i,
    onChange: d
  }), [L, _] = ce(() => _t(r ?? i)), ne = xt(), U = K ?? P.name ?? ne, Ie = [a ? `${U}-description` : null, u ? `${U}-error` : null, m ? `${U}-helper` : null].filter(Boolean).join(" ") || void 0, je = be(D, Z);
  return ae(() => {
    r !== void 0 && _(_t(r));
  }, [r]), ae(() => {
    r === void 0 && L === "" && re != null && _(_t(re));
  }, [re, L, r]), /* @__PURE__ */ o("div", { className: s(h === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", b), children: [
    c || a ? /* @__PURE__ */ o("div", { className: s(h === "left" ? "pt-2" : "", "min-w-0"), children: [
      c ? /* @__PURE__ */ o("label", { htmlFor: U, className: s("block text-sm font-medium text-white", v), children: [
        c,
        ee ? /* @__PURE__ */ t("span", { className: "ml-1 text-[var(--rui-accent)]", children: "*" }) : null
      ] }) : null,
      a ? /* @__PURE__ */ t("div", { id: `${U}-description`, className: s("mt-1 text-sm text-[var(--rui-text-secondary)]", N), children: a }) : null
    ] }) : null,
    /* @__PURE__ */ o("div", { className: "min-w-0", children: [
      /* @__PURE__ */ o("div", { className: "flex min-w-0 items-stretch gap-2", children: [
        I ? /* @__PURE__ */ t("div", { className: "inline-flex items-center text-[var(--rui-text-tertiary)]", children: I }) : null,
        /* @__PURE__ */ t(
          "input",
          {
            ref: W,
            id: U,
            type: "text",
            inputMode: "decimal",
            value: L,
            onChange: (q) => {
              const S = q.target.value, ye = An(S);
              _(S), J(ye), l == null || l(ye, S);
            },
            disabled: G,
            required: ee,
            min: O,
            max: F,
            step: Q,
            "aria-invalid": !!u || void 0,
            "aria-describedby": Ie,
            style: je,
            className: s(
              "rui-input h-10 min-w-0 w-full px-3 text-sm outline-none transition placeholder:text-[var(--rui-text-tertiary)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
              V,
              B
            ),
            ...P
          }
        ),
        p ? /* @__PURE__ */ t("div", { className: "inline-flex items-center text-[var(--rui-text-tertiary)]", children: p }) : null
      ] }),
      u ? /* @__PURE__ */ t("div", { id: `${U}-error`, className: s("mt-1 text-sm text-[var(--rui-danger)]", A), children: u }) : m ? /* @__PURE__ */ t("div", { id: `${U}-helper`, className: s("mt-1 text-sm text-[var(--rui-text-tertiary)]", j), children: m }) : null
    ] })
  ] });
});
function Yn({
  checked: e,
  defaultChecked: r,
  onCheckedChange: i,
  title: d,
  description: l,
  helper: c,
  leading: a,
  trailing: u,
  disabled: m,
  accentKey: h,
  style: b,
  className: v,
  contentClassName: N,
  titleClassName: A,
  descriptionClassName: j,
  helperClassName: B
}) {
  const [I, p] = Xe({
    value: e,
    defaultValue: r ?? !1,
    onChange: i
  }), D = be(h, b);
  return /* @__PURE__ */ o(
    "div",
    {
      style: D,
      onClick: (V) => {
        if (m) return;
        const Z = V.target;
        Z != null && Z.closest("button,a,input,select,textarea,label") || p((K) => !K);
      },
      className: s(
        "flex items-start justify-between gap-4 rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-accent-muted)] px-4 py-3 transition",
        I && "border-[var(--rui-accent-border)] bg-[var(--rui-accent-muted)]",
        m ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:border-[var(--rui-accent-border-soft)]",
        v
      ),
      children: [
        /* @__PURE__ */ t("div", { className: s("min-w-0 flex-1", N), children: /* @__PURE__ */ o("div", { className: "flex items-start gap-3", children: [
          a ? /* @__PURE__ */ t("div", { className: "mt-0.5 flex-shrink-0 text-[var(--rui-text-secondary)]", children: a }) : null,
          /* @__PURE__ */ o("div", { className: "min-w-0", children: [
            d ? /* @__PURE__ */ t("div", { className: s("text-sm font-medium text-[var(--rui-text-primary)]", A), children: d }) : null,
            l ? /* @__PURE__ */ t("div", { className: s("mt-1 text-xs text-[var(--rui-text-secondary)]", j), children: l }) : null,
            c ? /* @__PURE__ */ t("div", { className: s("mt-2 text-xs text-[var(--rui-text-tertiary)]", B), children: c }) : null
          ] })
        ] }) }),
        /* @__PURE__ */ o("div", { className: "flex flex-shrink-0 items-center gap-3", children: [
          u,
          /* @__PURE__ */ t(gn, { checked: I, onCheckedChange: p, disabled: m, "aria-label": typeof d == "string" ? d : void 0 })
        ] })
      ]
    }
  );
}
function ur(e, r, i) {
  return Math.min(i, Math.max(r, e));
}
function Kn({
  content: e,
  children: r,
  placement: i = "top",
  delay: d = 120,
  open: l,
  defaultOpen: c = !1,
  onOpenChange: a,
  accentKey: u,
  className: m,
  panelClassName: h
}) {
  const [b, v] = Xe({
    value: l,
    defaultValue: c,
    onChange: a
  }), [N, A] = ce(!1), [j, B] = ce({ top: 0, left: 0, placement: i }), I = fe(null), p = fe(null), D = fe(null), V = be(u);
  ae(() => A(!0), []);
  const Z = Y(
    () => () => {
      if (typeof window > "u") return;
      const ee = I.current, Q = p.current;
      if (!ee || !Q) return;
      const O = ee.getBoundingClientRect(), F = Q.getBoundingClientRect(), P = 10, W = 12, re = window.innerWidth, J = window.innerHeight, L = i;
      let _ = L;
      L === "top" && O.top - F.height - P < W && (_ = "bottom"), L === "bottom" && O.bottom + F.height + P > J - W && (_ = "top"), L === "left" && O.left - F.width - P < W && (_ = "right"), L === "right" && O.right + F.width + P > re - W && (_ = "left");
      let ne = O.top, U = O.left;
      _ === "top" && (ne = O.top - F.height - P), _ === "bottom" && (ne = O.bottom + P), _ === "left" && (U = O.left - F.width - P), _ === "right" && (U = O.right + P), (_ === "top" || _ === "bottom") && (U = O.left + O.width / 2 - F.width / 2), (_ === "left" || _ === "right") && (ne = O.top + O.height / 2 - F.height / 2), B({
        placement: _,
        top: ur(ne, W, J - F.height - W),
        left: ur(U, W, re - F.width - W)
      });
    },
    [i]
  );
  ae(() => {
    if (!b) {
      D.current && window.clearTimeout(D.current), D.current = null;
      return;
    }
    const ee = window.setTimeout(Z, 0), Q = () => Z();
    return window.addEventListener("resize", Q), window.addEventListener("scroll", Q, !0), () => {
      window.clearTimeout(ee), window.removeEventListener("resize", Q), window.removeEventListener("scroll", Q, !0);
    };
  }, [b, Z]);
  const K = () => {
    if (typeof window < "u" && D.current && window.clearTimeout(D.current), d > 0) {
      D.current = window.setTimeout(() => v(!0), d);
      return;
    }
    v(!0);
  }, G = () => {
    typeof window < "u" && D.current && window.clearTimeout(D.current), D.current = null, v(!1);
  };
  return /* @__PURE__ */ o("span", { ref: I, className: s("inline-flex", m), onMouseEnter: K, onMouseLeave: G, onFocus: K, onBlur: G, children: [
    r,
    N && b && typeof document < "u" ? Bt(
      /* @__PURE__ */ t(
        "div",
        {
          ref: p,
          role: "tooltip",
          style: { ...V, position: "fixed", top: j.top, left: j.left },
          className: s(
            "z-[140] max-w-[360px] rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[rgba(14,20,35,0.98)] px-3 py-2 text-left text-sm text-white shadow-[0_18px_44px_rgba(0,0,0,0.38)] backdrop-blur",
            h
          ),
          children: e
        }
      ),
      document.body
    ) : null
  ] });
}
export {
  _n as AccentProvider,
  wr as Badge,
  wr as BadgeDefault,
  zn as Banner,
  zn as BannerDefault,
  ve as Button,
  ve as ButtonDefault,
  On as Card,
  On as CardDefault,
  $n as ChipCard,
  $n as ChipCardDefault,
  sr as DateTimeSelector,
  sr as DateTimeSelectorDefault,
  Kr as DynamicPanel,
  Fn as GridLayout,
  Fn as GridLayoutDefault,
  Be as Icon,
  Hn as Logger,
  Hn as LoggerDefault,
  Vn as Notification,
  pn as NotificationViewport,
  pn as NotificationViewportDefault,
  Qn as Number,
  Qn as NumberInput,
  Qn as NumberInputDefault,
  Zn as Page,
  Gn as PageContainer,
  xn as PageHeader,
  Un as RadioCard,
  Un as RadioCardDefault,
  lr as SelectBox,
  lr as SelectBoxDefault,
  Jn as Sidebar,
  Jn as SidebarDefault,
  gn as Switch,
  gn as SwitchDefault,
  Xn as Table,
  Xn as TableDefault,
  vn as Text,
  qn as TextArea,
  qn as TextAreaDefault,
  vn as TextDefault,
  Yn as ToggleCard,
  Yn as ToggleCardDefault,
  Kn as Tooltip,
  Kn as TooltipDefault,
  yr as accentTokensToCssVars,
  br as defaultAccentKey,
  xr as defaultAccentPresets,
  pr as defaultAccentTokens,
  Fr as useAccent,
  be as useAccentStyle
};
//# sourceMappingURL=index.js.map
