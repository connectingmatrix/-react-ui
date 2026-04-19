import { jsx as t, jsxs as o, Fragment as fr } from "react/jsx-runtime";
import hr, { createContext as zr, useContext as Or, useMemo as te, forwardRef as Ze, isValidElement as mr, useState as ce, useRef as fe, useEffect as ae, useCallback as Ce, useId as pt } from "react";
import { createPortal as Bt } from "react-dom";
function s(...e) {
  return e.filter(Boolean).join(" ");
}
const br = "default", xr = {
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
}, pr = {
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
}, Ke = {
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
Object.assign(pr, {
  light: {
    ...Ke,
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
    ...Ke,
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
    ...Ke,
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
    ...Ke,
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
    ...Ke,
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
    ...Ke,
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
    ...Ke,
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
const gr = zr(null);
function vr(e, r, i) {
  return {
    ...xr,
    ...pr[e] || {},
    ...(r == null ? void 0 : r[e]) || {},
    ...i || {}
  };
}
function yr(e) {
  const r = { ...xr, ...e };
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
function $r(e, r) {
  const i = Or(gr), d = !!(i || e || r), l = (i == null ? void 0 : i.accentKey) ?? e ?? br, c = te(
    () => vr(l, i == null ? void 0 : i.accents, i != null && i.tokens ? { ...i.tokens, ...r } : r),
    [i == null ? void 0 : i.accents, i == null ? void 0 : i.tokens, l, r]
  ), a = te(() => d ? yr(c) : void 0, [d, c]);
  return { accentKey: l, tokens: c, style: a };
}
function be(e, r, i) {
  const d = $r(e, i);
  return te(() => d.style ? { ...d.style, ...r } : r, [d.style, r]);
}
function En({ accentKey: e = br, accents: r, tokens: i, children: d, className: l, style: c }) {
  const a = te(() => ({ accentKey: e, accents: r, tokens: i }), [e, r, i]), u = te(() => ({ ...yr(vr(e, r, i)), ...c }), [e, r, c, i]);
  return /* @__PURE__ */ t(gr.Provider, { value: a, children: /* @__PURE__ */ t("div", { className: s("rui-theme", l), style: u, children: d }) });
}
const Fr = {
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
      className: s("inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium leading-5", Fr[r], i),
      ...c,
      children: e
    }
  );
}
const Hr = {
  info: { bg: "var(--rui-accent-soft)", border: "var(--rui-accent-border)", text: "var(--rui-text-primary)" },
  accent: { bg: "var(--rui-accent-soft)", border: "var(--rui-accent-border)", text: "var(--rui-text-primary)" },
  success: { bg: "var(--rui-success-soft)", border: "var(--rui-success-border)", text: "var(--rui-text-primary)" },
  warning: { bg: "var(--rui-warning-soft)", border: "var(--rui-warning-border)", text: "var(--rui-text-primary)" },
  danger: { bg: "var(--rui-danger-soft)", border: "var(--rui-danger-border)", text: "var(--rui-text-primary)" },
  neutral: { bg: "var(--rui-bg-panel-2)", border: "var(--rui-border-soft)", text: "var(--rui-text-primary)" }
};
function _n({
  tone: e = "info",
  title: r,
  children: i,
  actions: d,
  icon: l,
  className: c,
  contentClassName: a,
  titleClassName: u,
  actionsClassName: m,
  accentClassName: f,
  accentKey: b,
  accentColor: v,
  backgroundColor: N,
  borderColor: A,
  textColor: j,
  showToneBadge: B = !1
}) {
  const I = Hr[e], x = {
    borderColor: A ?? I.border,
    background: N ?? I.bg,
    color: j ?? I.text,
    boxShadow: "0 16px 36px rgba(4, 8, 26, 0.22)",
    "--rui-banner-accent": v ?? A ?? I.border
  }, D = be(b, x);
  return /* @__PURE__ */ o("section", { className: s("relative overflow-hidden rounded-[var(--rui-radius-panel)] border px-4 py-3", v && "pl-5", c), style: D, children: [
    v ? /* @__PURE__ */ t("div", { "aria-hidden": "true", className: s("absolute inset-y-0 left-0 w-1 bg-[var(--rui-banner-accent)]", f) }) : null,
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
const Vr = {
  primary: "border border-[var(--rui-accent)] bg-[var(--rui-accent)] text-[var(--rui-accent-contrast)] hover:brightness-110 focus-visible:ring-[var(--rui-accent)]",
  secondary: "border border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] text-[var(--rui-accent-soft-text)] hover:brightness-110 focus-visible:ring-[var(--rui-accent)]",
  outline: "border border-[var(--rui-accent)] bg-transparent text-[var(--rui-accent-outline-text)] hover:bg-[var(--rui-accent-muted)] focus-visible:ring-[var(--rui-accent)]",
  ghost: "border border-[var(--rui-border-soft)] bg-transparent text-[var(--rui-text-secondary)] hover:bg-[var(--rui-accent-muted)] hover:text-[var(--rui-text-primary)] focus-visible:ring-[var(--rui-accent)]",
  danger: "border border-[var(--rui-danger-border)] bg-[var(--rui-danger-soft)] text-[var(--rui-text-primary)] hover:bg-[var(--rui-danger-soft)] focus-visible:ring-[var(--rui-danger)]",
  success: "border border-[var(--rui-success-border)] bg-[var(--rui-success-soft)] text-[var(--rui-text-primary)] hover:bg-[var(--rui-success-soft)] focus-visible:ring-[var(--rui-success)]",
  warning: "border border-[var(--rui-warning-border)] bg-[var(--rui-warning-soft)] text-[var(--rui-text-primary)] hover:bg-[var(--rui-warning-soft)] focus-visible:ring-[var(--rui-warning)]",
  subtle: "border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)] text-[var(--rui-text-primary)] hover:bg-[var(--rui-accent-muted)] focus-visible:ring-[var(--rui-accent)]",
  icon: "border border-[var(--rui-border-soft)] bg-transparent text-[var(--rui-text-secondary)] hover:bg-[var(--rui-accent-muted)] hover:text-[var(--rui-text-primary)] focus-visible:ring-[var(--rui-accent)]"
}, Zr = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-sm"
};
function Gr() {
  return /* @__PURE__ */ o("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", className: "h-4 w-4 animate-spin", children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "9", fill: "none", stroke: "currentColor", strokeWidth: "2", opacity: "0.18" }),
    /* @__PURE__ */ t("path", { d: "M21 12a9 9 0 0 0-9-9", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
  ] });
}
function Jr(e) {
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
  accentKey: f,
  loading: b = !1,
  fullWidth: v = !1,
  type: N = "button",
  disabled: A,
  style: j,
  ...B
}, I) {
  const x = A || b, D = be(f, j), V = i != null && i !== !1, Z = Jr(i), G = V && !Z && !c && !a && mr(i);
  return /* @__PURE__ */ o(
    "button",
    {
      ref: I,
      type: N,
      disabled: x,
      "aria-busy": b || void 0,
      style: D,
      className: s(
        "inline-flex items-center justify-center gap-2 rounded-[8px] font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:border-white/5 disabled:bg-white/5 disabled:text-white/35 disabled:opacity-80",
        Vr[d],
        Zr[l],
        v && "w-full",
        r
      ),
      ...B,
      children: [
        b ? /* @__PURE__ */ t(Gr, {}) : c ? /* @__PURE__ */ t("span", { className: s("inline-flex shrink-0 items-center", u), children: c }) : null,
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
function Ur(e) {
  return e === !1 || e === "none" ? "" : e === !0 ? ir.md : ir[e];
}
const zn = Ze(function({ children: r, className: i, contentClassName: d, padded: l = !0, interactive: c = !1, accentKey: a, style: u, ...m }, f) {
  const b = be(a, u);
  return /* @__PURE__ */ t(
    "div",
    {
      ref: f,
      style: b,
      className: s(
        "rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] text-[var(--rui-text-primary)] shadow-panel",
        c && "transition hover:border-[var(--rui-accent-border-soft)] hover:bg-[var(--rui-bg-panel-2)]",
        Ur(l),
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
function On({
  title: e,
  value: r,
  helper: i,
  leading: d,
  trailing: l,
  tone: c = "accent",
  selected: a = !1,
  disabled: u = !1,
  onClick: m,
  accentKey: f,
  style: b,
  className: v,
  contentClassName: N,
  titleClassName: A,
  valueClassName: j,
  helperClassName: B
}) {
  const I = !!m, x = be(f, b);
  return I ? /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: m,
      disabled: u,
      "aria-pressed": a,
      style: x,
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
      style: x,
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
const p = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
function R({ className: e, title: r, children: i, viewBox: d = "0 0 24 24", ...l }) {
  return /* @__PURE__ */ o("svg", { viewBox: d, className: s("h-5 w-5 shrink-0", e), "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ...l, children: [
    r ? /* @__PURE__ */ t("title", { children: r }) : null,
    i
  ] });
}
function Be({ name: e, ...r }) {
  switch (e) {
    case "actions":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M5 7h14M8 12h11M11 17h8" }) });
    case "alert":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("path", { ...p, d: "M12 4.7 20 18H4z" }),
        /* @__PURE__ */ t("path", { ...p, d: "M12 9v4M12 15.5h.01" })
      ] });
    case "bars":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M6 18V9M12 18V5M18 18v-7" }) });
    case "bell":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M8 18h8M7 16h10l-1-2v-3.5A4 4 0 0 0 12 6a4 4 0 0 0-4 4.5V14Z" }) });
    case "card":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("rect", { x: "4", y: "6.5", width: "16", height: "11", rx: "2.5", ...p }),
        /* @__PURE__ */ t("path", { ...p, d: "M4 10h16" })
      ] });
    case "chart":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M6 18V9M12 18V6M18 18v-8M4.5 19.5h15" }) });
    case "check":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "3", ...p }),
        /* @__PURE__ */ t("path", { ...p, d: "m8.5 12 2.3 2.3 4.7-5.3" })
      ] });
    case "chevron-down":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "m6 9 6 6 6-6" }) });
    case "chevron-right":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "m10 6 6 6-6 6" }) });
    case "close":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "m6 6 12 12M18 6 6 18" }) });
    case "coins":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("ellipse", { cx: "12", cy: "7", rx: "5", ry: "2.6", ...p }),
        /* @__PURE__ */ t("path", { ...p, d: "M7 7v5c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6V7" }),
        /* @__PURE__ */ t("path", { ...p, d: "M7 12v5c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6v-5" })
      ] });
    case "discord":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("path", { ...p, d: "M8 8c2.5-1.4 5.5-1.4 8 0" }),
        /* @__PURE__ */ t("path", { ...p, d: "M8 8c-1.2 1.9-1.8 4-2 6 2 .9 4 1.3 6 1.4 2-.1 4-.5 6-1.4-.2-2-1-4.1-2-6" }),
        /* @__PURE__ */ t("circle", { cx: "10", cy: "12.4", r: "1.1", fill: "currentColor" }),
        /* @__PURE__ */ t("circle", { cx: "14", cy: "12.4", r: "1.1", fill: "currentColor" }),
        /* @__PURE__ */ t("path", { ...p, d: "M10 15c1.2.7 2.8.7 4 0" })
      ] });
    case "dollar":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M12 4v16M15.5 7.5C14.8 6.5 13.5 6 12 6c-2 0-3.5 1-3.5 2.5S9.8 11 12 11s3.5 1 3.5 2.5S14 16 12 16c-1.5 0-2.8-.5-3.7-1.6" }) });
    case "download":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M12 5v10M8 11l4 4 4-4M5 19h14" }) });
    case "exclamation":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "8.1", ...p }),
        /* @__PURE__ */ t("path", { ...p, d: "M12 7.8v6.1M12 16.7h.01" })
      ] });
    case "eye":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("path", { ...p, d: "M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" }),
        /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "2.6", fill: "none", stroke: "currentColor", strokeWidth: "1.8" })
      ] });
    case "filter":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M5 6h14l-5.5 6.2v5.3l-3-1.6v-3.7Z" }) });
    case "folder":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("path", { ...p, d: "M3.5 7.5h6l1.5 2h9v7.5a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2Z" }),
        /* @__PURE__ */ t("path", { ...p, d: "M3.5 10.5h17" })
      ] });
    case "grid":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z" }) });
    case "info":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "8.4", ...p }),
        /* @__PURE__ */ t("path", { ...p, d: "M12 10v5M12 8h.01" })
      ] });
    case "live":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "2.2", fill: "currentColor" }),
        /* @__PURE__ */ t("path", { ...p, d: "M6.5 12a5.5 5.5 0 0 1 11 0M4 12a8 8 0 0 1 16 0" })
      ] });
    case "maximize":
    case "maximize-screen":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M8 4H4v4M16 4h4v4M4 16v4h4M20 16v4h-4" }) });
    case "menu":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M4 7h16M4 12h16M4 17h16" }) });
    case "minimize":
    case "minimize-screen":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M9 4H4v5M15 4h5v5M4 15v5h5M20 15v5h-5" }) });
    case "minus":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M5 12h14" }) });
    case "moon":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M19 14.5A7.5 7.5 0 1 1 9.5 5a6.3 6.3 0 0 0 9.5 9.5Z" }) });
    case "panel":
    case "panel-restore":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("rect", { x: "6", y: "6", width: "12", height: "12", rx: "1.8", ...p }) });
    case "pause":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M8.5 6.5v11M15.5 6.5v11" }) });
    case "play":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M8 6.5v11l8-5.5-8-5.5Z" }) });
    case "plus":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M12 5v14M5 12h14" }) });
    case "refresh":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M18 8V4l-3 3m3 0a6.5 6.5 0 1 0 1.2 7.5" }) });
    case "save":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("path", { ...p, d: "M5 5h11l3 3v11H5Z" }),
        /* @__PURE__ */ t("path", { ...p, d: "M8 5v5h8" }),
        /* @__PURE__ */ t("path", { ...p, d: "M9 18h6" })
      ] });
    case "search":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("circle", { cx: "11", cy: "11", r: "6", ...p }),
        /* @__PURE__ */ t("path", { ...p, d: "m16 16 4 4" })
      ] });
    case "settings":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "2.6", ...p }),
        /* @__PURE__ */ t("path", { ...p, d: "M12 4.8v1.8M12 17.4v1.8M19.2 12h-1.8M6.6 12H4.8M17.1 6.9l-1.3 1.3M8.2 15.8l-1.3 1.3M17.1 17.1l-1.3-1.3M8.2 8.2 6.9 6.9" })
      ] });
    case "share":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M8 12a4 4 0 0 1 8 0M7 7l5 5-5 5M17 7l-5 5 5 5" }) });
    case "sidebar-collapsed":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("rect", { x: "4", y: "5", width: "16", height: "14", rx: "2", ...p }),
        /* @__PURE__ */ t("path", { ...p, d: "M15 5v14" })
      ] });
    case "sidebar-open":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("rect", { x: "4", y: "5", width: "16", height: "14", rx: "2", ...p }),
        /* @__PURE__ */ t("path", { ...p, d: "M9 5v14" })
      ] });
    case "sparkle":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "m12 4 1.8 4.2L18 10l-4.2 1.8L12 16l-1.8-4.2L6 10l4.2-1.8Z" }) });
    case "stop":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("rect", { x: "7", y: "7", width: "10", height: "10", rx: "2", ...p }) });
    case "store":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("path", { ...p, d: "M4 9h16l-1 3a3 3 0 0 1-3 2H8a3 3 0 0 1-3-2Z" }),
        /* @__PURE__ */ t("path", { ...p, d: "M6 14v5h12v-5" })
      ] });
    case "support":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("path", { ...p, d: "M5 13v-1a7 7 0 0 1 14 0v1" }),
        /* @__PURE__ */ t("path", { ...p, d: "M5 12.5v3a2 2 0 0 0 2 2h2v-5H7a2 2 0 0 0-2 2ZM19 12.5v3a2 2 0 0 1-2 2h-2v-5h2a2 2 0 0 1 2 2Z" })
      ] });
    case "swap":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M7 8h10m0 0-3-3m3 3-3 3M17 16H7m0 0 3-3m-3 3 3 3" }) });
    case "timer":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("circle", { cx: "12", cy: "13", r: "6.5", ...p }),
        /* @__PURE__ */ t("path", { ...p, d: "M12 9v4l2.5 2.5M9 4h6" })
      ] });
    case "trash":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t(
        "path",
        {
          ...p,
          d: "M5.5 7.5h13M9.5 7.5V5.8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.7M8.5 10.5v6M12 10.5v6M15.5 10.5v6M7 7.5l.7 10.2a1.5 1.5 0 0 0 1.5 1.3h5.6a1.5 1.5 0 0 0 1.5-1.3L17 7.5"
        }
      ) });
    case "trenddown":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "M5 8l6 6 3-3 5 5M19 16v-5h-5" }) });
    case "trendup":
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("path", { ...p, d: "m5 16 6-6 3 3 5-5M19 8v5h-5" }) });
    case "user":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("path", { ...p, d: "M12 12a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6Z" }),
        /* @__PURE__ */ t("path", { ...p, d: "M6 19c1.5-2.7 4-4 6-4s4.5 1.3 6 4" })
      ] });
    case "wallet":
      return /* @__PURE__ */ o(R, { ...r, children: [
        /* @__PURE__ */ t("path", { ...p, d: "M4.5 7h13a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 2 16.5V9.5A2.5 2.5 0 0 1 4.5 7Z" }),
        /* @__PURE__ */ t("path", { ...p, d: "M15 12h4" }),
        /* @__PURE__ */ t("circle", { cx: "15.8", cy: "12", r: "0.7", fill: "currentColor" })
      ] });
    default:
      return /* @__PURE__ */ t(R, { ...r, children: /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "7", ...p }) });
  }
}
const Xr = {
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
function qr(e, r) {
  if (typeof window > "u") return null;
  try {
    const i = window.localStorage.getItem(Sr(e, r));
    return i ? JSON.parse(i) : null;
  } catch {
    return null;
  }
}
function Qr(e, r, i) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(Sr(e, i), JSON.stringify(r));
    } catch {
    }
}
function Yr({
  panel: e,
  state: r,
  allowMovement: i = !0,
  allowResize: d = !0,
  allowCollapse: l = !0,
  allowFullscreen: c = !0,
  onToggleCollapse: a,
  onToggleFullscreen: u,
  onReset: m,
  onCycleWidth: f,
  onDragStart: b,
  onDragOver: v,
  onDragEnter: N,
  onDrop: A,
  onDragEnd: j,
  renderActions: B,
  renderHeader: I,
  renderPanelControls: x,
  renderMoveHandle: D,
  renderResizeButton: V,
  renderCollapseButton: Z,
  renderResetButton: Y,
  renderFullscreenButton: G,
  accentKey: K,
  style: Q,
  className: O,
  headerClassName: F,
  bodyClassName: P,
  actionsClassName: W
}) {
  const re = !!r.collapsed, J = !!r.fullscreen, T = e.description ?? e.subtitle, _ = e.actions ?? e.action, ne = e.content ?? e.children, U = be(K, Q), Ie = {
    type: "button",
    draggable: !J,
    onDragStart: b,
    onDragEnd: j,
    className: "cursor-grab rounded border border-white/10 p-1 text-white/55 hover:bg-white/5 hover:text-white active:cursor-grabbing",
    title: "Drag handle"
  }, Le = i ? (D == null ? void 0 : D({
    panel: e,
    state: r,
    buttonProps: Ie,
    defaultButton: /* @__PURE__ */ t("button", { ...Ie, children: /* @__PURE__ */ t(Be, { name: "actions", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ t("button", { ...Ie, children: /* @__PURE__ */ t(Be, { name: "actions", className: "h-4 w-4" }) }) : null, q = { title: "Cycle width", onClick: f }, S = d ? (V == null ? void 0 : V({
    panel: e,
    state: r,
    buttonProps: q,
    defaultButton: /* @__PURE__ */ t(ve, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...q, children: /* @__PURE__ */ t(Be, { name: "grid", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ t(ve, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...q, children: /* @__PURE__ */ t(Be, { name: "grid", className: "h-4 w-4" }) }) : null, ye = { title: re ? "Restore panel" : "Minimize panel", onClick: a }, z = l ? (Z == null ? void 0 : Z({
    panel: e,
    state: r,
    buttonProps: ye,
    defaultButton: /* @__PURE__ */ t(ve, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...ye, children: /* @__PURE__ */ t(Be, { name: re ? "panel" : "minus", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ t(ve, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...ye, children: /* @__PURE__ */ t(Be, { name: re ? "panel" : "minus", className: "h-4 w-4" }) }) : null, oe = { title: "Restore default size", onClick: m }, me = d ? (Y == null ? void 0 : Y({
    panel: e,
    state: r,
    buttonProps: oe,
    defaultButton: /* @__PURE__ */ t(ve, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...oe, children: /* @__PURE__ */ t(Be, { name: "refresh", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ t(ve, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...oe, children: /* @__PURE__ */ t(Be, { name: "refresh", className: "h-4 w-4" }) }) : null, ee = { title: J ? "Exit fullscreen" : "Fullscreen", onClick: u }, De = c ? (G == null ? void 0 : G({
    panel: e,
    state: r,
    buttonProps: ee,
    defaultButton: /* @__PURE__ */ t(ve, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...ee, children: /* @__PURE__ */ t(Be, { name: J ? "minimize" : "maximize", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ t(ve, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...ee, children: /* @__PURE__ */ t(Be, { name: J ? "minimize" : "maximize", className: "h-4 w-4" }) }) : null, we = /* @__PURE__ */ o(fr, { children: [
    _ ? /* @__PURE__ */ t("div", { className: "hidden lg:block", children: _ }) : null,
    B == null ? void 0 : B(e, r),
    S,
    z,
    me,
    De
  ] }), xe = (x == null ? void 0 : x({ panel: e, state: r, controls: we })) ?? we;
  return /* @__PURE__ */ t(
    "div",
    {
      onDragOver: v,
      onDragEnter: N,
      onDrop: A,
      className: s("min-w-0 w-full", !J && "col-span-12", !J && Xr[r.width || "full"], J && "fixed inset-4 z-50", O),
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
                Le,
                /* @__PURE__ */ o("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ t("div", { className: "truncate text-base font-semibold text-white", children: e.title }),
                  T ? /* @__PURE__ */ t("div", { className: "mt-1 text-sm text-white/60", children: T }) : null
                ] })
              ] }) }),
              /* @__PURE__ */ t("div", { className: s("flex flex-wrap items-center gap-2 sm:shrink-0 sm:justify-end", W), children: xe })
            ]
          }
        ),
        re ? null : /* @__PURE__ */ t("div", { className: s("min-h-0 p-3 sm:p-5", e.bodyClassName, P, J && "h-[calc(100%-76px)] overflow-auto rui-scrollbar"), children: ne })
      ] })
    }
  );
}
function $n({
  panels: e,
  layout: r,
  defaultLayout: i,
  onLayoutChange: d,
  persistenceKey: l,
  storageNamespace: c,
  persistenceAdapter: a,
  allowMovement: u = !0,
  allowResize: m = !0,
  allowCollapse: f = !0,
  allowFullscreen: b = !0,
  renderPanelActions: v,
  renderHeader: N,
  renderPanelControls: A,
  renderMoveHandle: j,
  renderResizeButton: B,
  renderCollapseButton: I,
  renderResetButton: x,
  renderFullscreenButton: D,
  accentKey: V,
  style: Z,
  className: Y,
  panelClassName: G,
  panelHeaderClassName: K,
  panelBodyClassName: Q,
  panelActionsClassName: O
}) {
  const [F, P] = ce(
    () => It(e, i || (l ? qr(l, c) : null))
  ), W = fe(null), [re, J] = ce(null), [T, _] = ce(() => !l || !a), ne = r !== void 0, U = te(() => It(e, ne ? r : F), [ne, F, r, e]), Ie = te(() => new Map(e.map((k) => [k.id, k])), [e]), Le = be(V, Z), q = fe(e), S = fe(U), ye = fe(ne), z = fe(d);
  ae(() => {
    q.current = e;
  }, [e]), ae(() => {
    S.current = U;
  }, [U]), ae(() => {
    ye.current = ne;
  }, [ne]), ae(() => {
    z.current = d;
  }, [d]);
  const oe = Ce((k) => {
    var ie;
    const le = typeof k == "function" ? k(S.current) : k, M = It(q.current, le);
    ye.current || P(M), (ie = z.current) == null || ie.call(z, M);
  }, []);
  ae(() => {
    let k = !1;
    if (!l || !a) {
      _(!0);
      return;
    }
    return _(!1), Promise.resolve(a.load(l)).then((le) => {
      k || (le && oe(le), _(!0));
    }).catch(() => {
      k || _(!1);
    }), () => {
      k = !0;
    };
  }, [a, l, oe]), ae(() => {
    l && (a && !T || (Qr(l, U, c), a && Promise.resolve(a.save(l, U)).catch(() => {
    })));
  }, [T, U, a, l, c]);
  const me = (k) => {
    const le = Nr(e).find((M) => M.id === k);
    le && oe((M) => M.map((ie) => ie.id === k ? { ...le, order: ie.order } : ie));
  }, ee = (k) => {
    oe(
      (le) => le.map((M) => {
        if (M.id !== k) return M;
        const ie = M.width === "third" ? "half" : M.width === "half" ? "full" : "third";
        return { ...M, width: ie, collapsed: !1 };
      })
    );
  }, De = (k) => {
    oe((le) => le.map((M) => M.id === k ? { ...M, collapsed: !M.collapsed, fullscreen: M.collapsed ? M.fullscreen : !1 } : M));
  }, we = (k) => {
    oe((le) => le.map((M) => ({ ...M, collapsed: M.id === k ? !1 : M.collapsed, fullscreen: M.id === k ? !M.fullscreen : !1 })));
  }, xe = (k, le) => {
    !u || !k || k === le || oe((M) => {
      const ie = It(e, M), pe = ie.findIndex((he) => he.id === k), Me = ie.findIndex((he) => he.id === le);
      if (pe < 0 || Me < 0) return M;
      const [Te] = ie.splice(pe, 1);
      return ie.splice(Me, 0, Te), ie.map((he, Ne) => ({ ...he, order: Ne }));
    });
  }, We = U.find((k) => k.fullscreen), Re = (k) => {
    const le = Ie.get(k.id);
    return le ? /* @__PURE__ */ t(
      Yr,
      {
        panel: le,
        state: k,
        allowMovement: u,
        allowResize: m,
        allowCollapse: f,
        allowFullscreen: b,
        className: G,
        headerClassName: K,
        bodyClassName: Q,
        actionsClassName: O,
        renderActions: v,
        renderHeader: N,
        renderPanelControls: A,
        renderMoveHandle: j,
        renderResizeButton: B,
        renderCollapseButton: I,
        renderResetButton: x,
        renderFullscreenButton: D,
        accentKey: V,
        onToggleCollapse: () => De(k.id),
        onToggleFullscreen: () => we(k.id),
        onReset: () => me(k.id),
        onCycleWidth: () => ee(k.id),
        onDragStart: (M) => {
          u && (W.current = k.id, J(k.id), M.dataTransfer.effectAllowed = "move", M.dataTransfer.setData("text/plain", k.id), M.dataTransfer.setData("application/x-rui-panel-id", k.id));
        },
        onDragOver: (M) => {
          W.current && (M.preventDefault(), M.dataTransfer.dropEffect = "move");
        },
        onDragEnter: (M) => {
          W.current && M.preventDefault();
        },
        onDrop: (M) => {
          M.preventDefault();
          const ie = M.dataTransfer.getData("application/x-rui-panel-id") || M.dataTransfer.getData("text/plain") || W.current;
          ie && xe(ie, k.id), W.current = null, J(null);
        },
        onDragEnd: () => {
          W.current = null, J(null);
        }
      },
      k.id
    ) : null;
  };
  return We ? /* @__PURE__ */ o(fr, { children: [
    /* @__PURE__ */ t("div", { className: "fixed inset-0 z-40 bg-[#050816]/80 backdrop-blur-sm" }),
    Re(We)
  ] }) : /* @__PURE__ */ t("div", { className: s("rui-theme grid w-full grid-cols-12 gap-3 sm:gap-5", Y, re && "select-none"), style: Le, children: U.map(Re) });
}
function Xe({ value: e, defaultValue: r, onChange: i }) {
  const [d, l] = ce(r), c = e !== void 0, a = c ? e : d, u = Ce(
    (m) => {
      const f = typeof m == "function" ? m(a) : m;
      c || l(f), i == null || i(f);
    },
    [c, a, i]
  );
  return [a, u];
}
function Kr(e, r) {
  return typeof e == "string" || typeof e == "number" ? String(e) : r;
}
function en(e) {
  if (typeof e == "object" && e !== null && "value" in e) {
    const r = String(e.value), i = e.label ?? e.text ?? r;
    return {
      value: e.value,
      label: i,
      text: e.text ?? Kr(e.label, r),
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
function tn({ className: e }) {
  return /* @__PURE__ */ t("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: e, children: /* @__PURE__ */ t("path", { d: "M5 7.5 10 12.5 15 7.5", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function rn({ className: e }) {
  return /* @__PURE__ */ o("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: e, children: [
    /* @__PURE__ */ t("circle", { cx: "8.5", cy: "8.5", r: "4.75", stroke: "currentColor", strokeWidth: "1.5" }),
    /* @__PURE__ */ t("path", { d: "m12.25 12.25 3.5 3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
  ] });
}
function nn({ className: e }) {
  return /* @__PURE__ */ t("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: e, children: /* @__PURE__ */ t("path", { d: "m4.75 10.25 3.25 3.25 7.5-7.5", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function an({ className: e }) {
  return /* @__PURE__ */ t("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: e, children: /* @__PURE__ */ t("path", { d: "m5 5 10 10m0-10L5 15", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round" }) });
}
function ln({
  mode: e = "single",
  options: r,
  value: i,
  defaultValue: d,
  onChange: l,
  searchable: c = !0,
  placeholder: a = "Select an option",
  searchPlaceholder: u = "Search options",
  emptyState: m = "No matching options",
  disabled: f = !1,
  clearable: b = !0,
  label: v,
  description: N,
  error: A,
  helperText: j,
  labelPosition: B = "top",
  className: I,
  wrapperClassName: x,
  labelClassName: D,
  descriptionClassName: V,
  errorClassName: Z,
  helperClassName: Y,
  triggerClassName: G,
  menuClassName: K,
  optionClassName: Q,
  searchClassName: O,
  summaryClassName: F,
  accentKey: P,
  style: W,
  endAdornment: re,
  endAdornmentClassName: J,
  summaryText: T,
  menuHeader: _,
  showSelectAll: ne = !1,
  showClear: U = !1,
  selectAllLabel: Ie = "Select all",
  clearLabel: Le = "Clear",
  getOptionKey: q,
  isOptionEqual: S,
  renderOption: ye,
  renderValue: z
}, oe) {
  const me = te(() => r.map(en), [r]), [ee, De] = Xe({
    value: i,
    defaultValue: d ?? (e === "multiple" ? [] : null),
    onChange: l
  }), [we, xe] = ce(!1), [We, Re] = ce(""), k = fe(null), le = fe(null), M = pt(), ie = be(P, W), pe = Ce((w) => q ? q(w) : String(w), [q]), Me = te(() => e === "multiple" ? (ee ?? []).slice() : ee == null ? [] : [ee], [ee, e]), Te = te(() => new Set(Me.map((w) => pe(w))), [Me, pe]), he = Ce(
    (w) => S ? Me.some((se) => S(w, se)) : Te.has(pe(w)),
    [S, Te, Me, pe]
  ), Ne = te(() => me.filter((w) => he(w.value)), [he, me]), Ge = te(() => {
    const w = We.trim().toLowerCase();
    return w ? me.filter((se) => `${se.text ?? ""} ${String(se.value)} ${se.keywords ?? ""}`.toLowerCase().includes(w)) : me;
  }, [me, We]), Oe = te(() => {
    if (T)
      return typeof T == "function" ? T({ value: ee, selectedOptions: Ne, placeholder: a }) : T;
    if (z) return z(ee, Ne);
    if (e === "multiple") {
      const w = ee;
      return w != null && w.length ? Ne.length <= 2 ? Ne.map((se) => se.text ?? String(se.value)).join(", ") : `${w.length} selected` : a;
    }
    return Ne[0] ? Ne[0].text ?? String(Ne[0].value) : ee == null || ee === "" ? a : String(ee);
  }, [ee, e, a, z, Ne, T]);
  ae(() => {
    if (!we) {
      Re("");
      return;
    }
    const w = (Pe) => {
      var Ee;
      (Ee = k.current) != null && Ee.contains(Pe.target) || xe(!1);
    }, se = (Pe) => {
      Pe.key === "Escape" && xe(!1);
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
  const nt = (w) => {
    De(w), xe(!1);
  }, $e = (w) => {
    const se = (ee ?? []).slice(), ge = pe(w), Pe = se.findIndex((Ee) => S ? S(w, Ee) : pe(Ee) === ge);
    Pe >= 0 ? se.splice(Pe, 1) : se.push(w), De(se);
  }, qe = () => {
    De(e === "multiple" ? [] : null), xe(!1);
  }, Qe = () => {
    e === "multiple" && De(me.filter((w) => !w.disabled).map((w) => w.value));
  }, y = te(() => {
    const w = me.filter((se) => !se.disabled);
    return !!w.length && w.every((se) => he(se.value));
  }, [he, me]), Se = typeof _ == "function" ? _({ options: me, filteredOptions: Ge, selectedOptions: Ne, selectAll: Qe, clear: qe }) : _, de = [N ? `${M}-description` : null, A ? `${M}-error` : null, j ? `${M}-helper` : null].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ o("div", { className: s(B === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", x), style: ie, children: [
    v || N ? /* @__PURE__ */ o("div", { className: s(B === "left" ? "pt-2" : "", "min-w-0"), children: [
      v ? /* @__PURE__ */ t("label", { htmlFor: M, className: s("block text-sm font-medium text-white", D), children: v }) : null,
      N ? /* @__PURE__ */ t("div", { id: `${M}-description`, className: s("mt-1 text-sm text-[var(--rui-text-secondary)]", V), children: N }) : null
    ] }) : null,
    /* @__PURE__ */ o("div", { ref: k, className: s("relative min-w-0", I), children: [
      /* @__PURE__ */ o(
        "button",
        {
          ref: oe,
          id: M,
          type: "button",
          disabled: f,
          "aria-invalid": !!A || void 0,
          "aria-describedby": de,
          "aria-expanded": we,
          onClick: () => !f && xe((w) => !w),
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
                  ee == null || Array.isArray(ee) && !ee.length ? "text-[var(--rui-text-tertiary)]" : "text-[var(--rui-text-primary)]",
                  F
                ),
                children: Oe
              }
            ),
            /* @__PURE__ */ o("span", { className: "flex items-center gap-2 text-[var(--rui-text-tertiary)]", children: [
              re ? /* @__PURE__ */ t("span", { className: s("inline-flex items-center", J), children: re }) : null,
              !re && e === "multiple" ? /* @__PURE__ */ t("span", { className: s("text-xs uppercase tracking-wider", J), children: Me.length }) : null,
              b && (e === "multiple" && (ee != null && ee.length) || e === "single" && ee != null) ? /* @__PURE__ */ t(
                "span",
                {
                  role: "button",
                  tabIndex: -1,
                  "aria-label": "Clear selection",
                  onClick: (w) => {
                    w.preventDefault(), w.stopPropagation(), qe();
                  },
                  className: "inline-flex h-5 w-5 items-center justify-center rounded-full border border-transparent transition hover:border-[var(--rui-accent-border-soft)] hover:bg-[var(--rui-accent-muted)]",
                  children: /* @__PURE__ */ t(an, { className: "h-3.5 w-3.5" })
                }
              ) : null,
              /* @__PURE__ */ t(tn, { className: s("h-4 w-4 transition-transform", we && "rotate-180") })
            ] })
          ]
        }
      ),
      we && !f ? /* @__PURE__ */ o(
        "div",
        {
          className: s(
            "absolute left-0 right-0 top-full z-[130] mt-2 max-h-[320px] overflow-hidden rounded-[10px] border border-[var(--rui-accent-border-soft)] bg-[var(--rui-bg-panel)] shadow-panel",
            K
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
                    disabled: !Me.length,
                    className: "rounded-[6px] px-2 py-1 text-xs text-[var(--rui-text-secondary)] transition hover:bg-[var(--rui-accent-muted)] hover:text-[var(--rui-text-primary)] disabled:cursor-not-allowed disabled:opacity-45",
                    onClick: qe,
                    children: Le
                  }
                ) : null
              ] }) : null
            ] }) : null,
            c ? /* @__PURE__ */ t("div", { className: "border-b border-[var(--rui-border-soft)] p-3", children: /* @__PURE__ */ o("div", { className: "relative", children: [
              /* @__PURE__ */ t(rn, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--rui-text-tertiary)]" }),
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
              const se = he(w.value), ge = f || w.disabled;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  disabled: ge,
                  onClick: () => {
                    ge || (e === "multiple" ? $e(w.value) : nt(w.value));
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
                        children: /* @__PURE__ */ t(nn, { className: "h-3.5 w-3.5" })
                      }
                    )
                  ]
                },
                pe(w.value)
              );
            }) : /* @__PURE__ */ t("div", { className: "px-3 py-6 text-center text-sm text-[var(--rui-text-tertiary)]", children: m }) })
          ]
        }
      ) : null,
      A ? /* @__PURE__ */ t("div", { id: `${M}-error`, className: s("mt-1 text-sm text-[var(--rui-danger)]", Z), children: A }) : j ? /* @__PURE__ */ t("div", { id: `${M}-helper`, className: s("mt-1 text-sm text-[var(--rui-text-tertiary)]", Y), children: j }) : null
    ] })
  ] });
}
const lr = Ze(ln), sn = ["ALL", "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "SUCCESS"].map((e) => ({ label: e, value: e })), cn = [{ label: "All categories", value: "ALL" }];
function on(e) {
  if (!e) return "";
  const r = e instanceof Date ? e : new Date(e);
  return Number.isNaN(r.getTime()) ? String(e) : r.toLocaleString();
}
function dn(e) {
  return !e || typeof e == "object" && !Object.keys(e).length ? "" : typeof e == "string" ? e : JSON.stringify(e, null, 2);
}
function un(e) {
  return e === "ERROR" ? "text-[var(--rui-danger)]" : e === "WARN" || e === "WARNING" ? "text-[var(--rui-warning)]" : e === "SUCCESS" ? "text-[var(--rui-success)]" : e === "INFO" ? "text-[var(--rui-accent)]" : "text-white/45";
}
function fn(e) {
  return e === "ERROR" ? "close" : e === "WARN" || e === "WARNING" ? "timer" : e === "SUCCESS" ? "check" : e === "INFO" ? "info" : "actions";
}
function hn(e, r) {
  const i = [...e];
  return i.sort((d, l) => new Date(d.createdAt ?? d.timestamp ?? 0).getTime() - new Date(l.createdAt ?? l.timestamp ?? 0).getTime()), r ? i : i.reverse();
}
function Fn({
  entries: e,
  logs: r,
  levels: i = sn,
  categories: d = cn,
  defaultLevel: l = "ALL",
  defaultCategory: c = "ALL",
  defaultSearch: a = "",
  level: u,
  category: m,
  search: f,
  autoScroll: b,
  onLevelChange: v,
  onCategoryChange: N,
  onSearchChange: A,
  onAutoScrollChange: j,
  onFiltersChange: B,
  searchPlaceholder: I = "Search logs",
  heightClassName: x = "max-h-[360px]",
  title: D = "Log stream",
  description: V,
  subtitle: Z,
  action: Y,
  onClear: G,
  trailing: K = !0,
  autoScrollDefault: Q = !0,
  showHeader: O = !0,
  showToolbar: F = !0,
  showLevelFilter: P = !0,
  showCategoryFilter: W = !0,
  emptyContent: re = "No log lines matched the current filters.",
  formatTimestamp: J,
  renderMetadata: T,
  renderPayload: _,
  getSearchText: ne,
  accentKey: U,
  style: Ie,
  className: Le,
  classNames: q
}) {
  const S = te(() => e ?? r ?? [], [e, r]), [ye, z] = ce(l), [oe, me] = ce(c), [ee, De] = ce(a), [we, xe] = ce(Q), [We, Re] = ce(() => /* @__PURE__ */ new Set()), k = fe(null), le = V ?? Z, M = be(U, Ie), ie = u ?? ye, pe = m ?? oe, Me = f ?? ee, Te = b ?? we, he = Ce(
    (y) => {
      B == null || B({
        level: ie,
        category: pe,
        search: Me,
        autoScroll: Te,
        ...y
      });
    },
    [Te, pe, ie, B, Me]
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
      f === void 0 && De(y), A == null || A(y), he({ search: y });
    },
    [f, he, A]
  ), nt = Ce(
    (y) => {
      b === void 0 && xe(y), j == null || j(y), he({ autoScroll: y });
    },
    [b, he, j]
  );
  ae(() => {
    u === void 0 && z(l);
  }, [u, l]), ae(() => {
    m === void 0 && me(c);
  }, [m, c]), ae(() => {
    f === void 0 && De(a);
  }, [f, a]), ae(() => {
    b === void 0 && xe(Q);
  }, [Q, b]);
  const $e = te(() => {
    const y = Me.trim().toLowerCase(), Se = S.filter((de) => P && ie !== "ALL" && de.level !== ie || W && pe !== "ALL" && de.category !== pe ? !1 : y ? ((ne == null ? void 0 : ne(de)) || [de.message, de.source, de.category, de.level, JSON.stringify(de.metadata || {}), JSON.stringify(de.payload || {})].join(" ").toLowerCase()).toLowerCase().includes(y) : !0);
    return hn(Se, K);
  }, [pe, ne, ie, S, Me, W, P, K]);
  ae(() => {
    if (!Te || !K || !k.current) return;
    const y = k.current, Se = window.requestAnimationFrame(() => {
      y.scrollTop = y.scrollHeight;
    });
    return () => window.cancelAnimationFrame(Se);
  }, [Te, $e, K]), ae(() => {
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
  return /* @__PURE__ */ o("div", { className: s("rui-theme flex h-full min-h-0 min-w-0 flex-col gap-3", Le), style: M, children: [
    O ? /* @__PURE__ */ o("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ t("h2", { className: "text-lg font-semibold text-white", children: D }),
        le ? /* @__PURE__ */ t("p", { className: "mt-1 text-sm text-white/60", children: le }) : null
      ] }),
      Y
    ] }) : null,
    F ? /* @__PURE__ */ o("div", { className: s("flex min-w-0 shrink-0 flex-wrap items-center gap-2", q == null ? void 0 : q.toolbar), children: [
      /* @__PURE__ */ t("div", { className: "min-w-[140px] flex-[1_1_180px] lg:max-w-[260px]", children: /* @__PURE__ */ t(
        "input",
        {
          className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input",
          value: Me,
          onChange: (y) => Oe(y.target.value),
          placeholder: I
        }
      ) }),
      P ? /* @__PURE__ */ t("div", { className: "min-w-[112px] flex-[0_1_132px]", children: /* @__PURE__ */ t(lr, { searchable: !0, value: ie, options: i, onChange: (y) => Ne(String(y ?? l)) }) }) : null,
      W ? /* @__PURE__ */ t("div", { className: "min-w-[140px] flex-[0_1_176px]", children: /* @__PURE__ */ t(lr, { searchable: !0, value: pe, options: d, onChange: (y) => Ge(String(y ?? c)) }) }) : null,
      O ? null : Y,
      /* @__PURE__ */ t(ve, { variant: "ghost", size: "sm", onClick: () => nt(!Te), children: Te ? "Trailing on" : "Trailing off" }),
      G ? /* @__PURE__ */ t(ve, { variant: "ghost", size: "sm", onClick: () => void G(), children: "Clear logs" }) : null,
      /* @__PURE__ */ t(ve, { variant: "ghost", size: "sm", onClick: Qe, children: "Clear filters" })
    ] }) : null,
    /* @__PURE__ */ t("div", { className: s("rui-logger-viewport min-w-0 flex-1 overflow-hidden rounded-[10px] border", q == null ? void 0 : q.viewport), children: /* @__PURE__ */ t("div", { ref: k, className: s(x, "min-h-0 overflow-auto select-text rui-scrollbar [scrollbar-gutter:stable]"), children: $e.length ? $e.map((y) => {
      const Se = _ ? _(y) : dn(y.payload), de = !!Se, w = We.has(y.id);
      return /* @__PURE__ */ o(hr.Fragment, { children: [
        /* @__PURE__ */ t("div", { className: s("rui-logger-row border-b px-3 py-2 font-mono text-xs last:border-none", q == null ? void 0 : q.entry), children: /* @__PURE__ */ o("div", { className: "grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-3", children: [
          /* @__PURE__ */ o("div", { className: "min-w-0", children: [
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-white/80", children: [
              /* @__PURE__ */ t("span", { className: "shrink-0 text-white/45", children: J ? J(y) : on(y.createdAt ?? y.timestamp) }),
              y.source || y.category ? /* @__PURE__ */ t("span", { className: "shrink-0 text-white/35", children: "|" }) : null,
              y.source || y.category ? /* @__PURE__ */ t("span", { className: "shrink-0 text-white/50", children: [y.source, y.category].filter(Boolean).join("/") }) : null,
              T ? T(y) : Object.entries(y.metadata || {}).map(([se, ge]) => /* @__PURE__ */ o("span", { className: "shrink-0 text-white/35", children: [
                "[",
                ge,
                "]"
              ] }, se)),
              /* @__PURE__ */ t("span", { className: s("shrink-0", un(y.level)), title: y.level, children: /* @__PURE__ */ t(Be, { name: fn(y.level), className: "h-4 w-4" }) })
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
const mn = {
  "top-right": "right-4 top-4",
  "top-left": "left-4 top-4",
  "bottom-right": "right-4 bottom-4",
  "bottom-left": "left-4 bottom-4"
};
function bn({
  items: e,
  onDismiss: r,
  placement: i = "top-right",
  accentKey: d,
  style: l,
  className: c,
  itemClassName: a,
  titleClassName: u,
  messageClassName: m,
  actionsClassName: f
}) {
  const b = be(d, l);
  return ae(() => {
    if (typeof window > "u" || !r) return;
    const v = e.filter((N) => N.timeout !== null).map((N) => window.setTimeout(() => r(N.id), N.timeout ?? 4200));
    return () => v.forEach((N) => window.clearTimeout(N));
  }, [e, r]), typeof document > "u" ? null : Bt(
    /* @__PURE__ */ t("div", { className: s("pointer-events-none fixed z-[220] flex w-[min(92vw,380px)] flex-col gap-3", mn[i], c), style: b, children: e.map((v) => /* @__PURE__ */ o(
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
          v.actions ? /* @__PURE__ */ t("div", { className: s("mt-3 flex flex-wrap gap-2", f), children: v.actions }) : null
        ]
      },
      v.id
    )) }),
    document.body
  );
}
const Hn = bn;
function Vn({
  title: e,
  pageName: r,
  description: i,
  actions: d,
  actionButtons: l,
  sidebar: c,
  topbar: a,
  footer: u,
  children: m,
  accentKey: f,
  style: b,
  className: v,
  headerClassName: N,
  contentClassName: A,
  sidebarClassName: j
}) {
  const B = e ?? r, I = d ?? l, x = be(f, b);
  return /* @__PURE__ */ o("div", { className: s("rui-theme min-h-screen bg-[var(--rui-bg-app)] text-[var(--rui-text-main)]", v), style: x, children: [
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
function xn({ title: e, pageName: r, description: i, subtitle: d, actions: l, actionButtons: c, children: a, accentKey: u, style: m, className: f }) {
  const b = e ?? r, v = i ?? d, N = l ?? c, A = be(u, m);
  return /* @__PURE__ */ o("div", { className: s("flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between", f), style: A, children: [
    /* @__PURE__ */ o("div", { className: "min-w-0", children: [
      b ? /* @__PURE__ */ t("h1", { className: "text-[28px] font-semibold text-white", children: b }) : null,
      v ? /* @__PURE__ */ t("p", { className: "mt-2 max-w-3xl text-sm text-white/70", children: v }) : null,
      a
    ] }),
    N ? /* @__PURE__ */ t("div", { className: "flex flex-wrap items-center gap-3", children: N }) : null
  ] });
}
function Zn({ children: e, accentKey: r, style: i, className: d }) {
  const l = be(r, i);
  return /* @__PURE__ */ t("div", { className: s("rui-theme w-full space-y-5 px-2 py-4 sm:px-4 sm:py-5", d), style: l, children: e });
}
function Gn({
  items: e,
  groups: r,
  header: i,
  collapsedHeader: d,
  footer: l,
  activeId: c,
  onSelect: a,
  children: u,
  collapsible: m = !1,
  collapsed: f,
  defaultCollapsed: b = !1,
  onCollapsedChange: v,
  collapseTitle: N = "Collapse sidebar",
  expandTitle: A = "Expand sidebar",
  collapsedWidthClassName: j = "w-[92px] min-w-[92px]",
  expandedWidthClassName: B = "w-[360px] min-w-[220px]",
  collapseButtonClassName: I,
  renderCollapseButton: x,
  accentKey: D,
  style: V,
  className: Z,
  itemClassName: Y,
  activeItemClassName: G,
  groupClassName: K,
  groupLabelClassName: Q,
  headerClassName: O,
  footerClassName: F
}) {
  const P = be(D, V), [W, re] = ce(b), J = f !== void 0, T = !!(J ? f : W), _ = r != null && r.length ? r : e != null && e.length ? [{ id: "items", items: e }] : [], ne = (S) => {
    J || re(S), v == null || v(S);
  }, U = () => ne(!T), Ie = T ? A : N, Le = {
    "aria-expanded": !T,
    "aria-label": Ie,
    title: Ie,
    onClick: U
  }, q = m ? (x == null ? void 0 : x({
    collapsed: T,
    toggleCollapsed: U,
    buttonProps: Le
  })) ?? /* @__PURE__ */ t(ve, { variant: "icon", size: "sm", className: s("h-8 w-8 px-0", I), ...Le, children: /* @__PURE__ */ t(Be, { name: T ? "sidebar-open" : "sidebar-collapsed", className: "h-4 w-4" }) }) : null;
  return /* @__PURE__ */ o(
    "aside",
    {
      className: s(
        "rui-theme flex shrink-0 flex-col gap-4 overflow-hidden rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] p-4 shadow-[var(--rui-shadow-panel)] transition-all duration-200",
        T ? j : B,
        Z
      ),
      style: P,
      children: [
        i || d || q ? /* @__PURE__ */ o("div", { className: s("flex items-center justify-between gap-3", O), children: [
          T ? d ? /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: d }) : /* @__PURE__ */ t("div", {}) : i ? /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: i }) : /* @__PURE__ */ t("div", {}),
          q
        ] }) : null,
        _.length ? /* @__PURE__ */ t("nav", { className: "flex flex-col gap-7", "aria-label": "Sidebar", children: _.map((S, ye) => /* @__PURE__ */ o("div", { className: s("space-y-4", K), children: [
          !T && S.label ? /* @__PURE__ */ t("div", { className: s("px-3 text-[15px] font-semibold text-[var(--rui-text-primary)]", Q), children: S.label }) : null,
          /* @__PURE__ */ t("div", { className: "space-y-2", children: S.items.map((z) => {
            const oe = z.active ?? z.id === c;
            return /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                disabled: z.disabled,
                title: T && typeof z.label == "string" ? z.label : void 0,
                "aria-current": oe ? "page" : void 0,
                onClick: () => {
                  var me;
                  (me = z.onSelect) == null || me.call(z, z.id), a == null || a(z.id, z);
                },
                className: s(
                  "flex w-full items-center rounded-full text-sm transition disabled:cursor-not-allowed disabled:opacity-50",
                  T ? "justify-center px-3 py-3" : "justify-between px-5 py-4 text-[15px]",
                  oe ? "bg-[var(--rui-accent)] text-[var(--rui-accent-contrast)]" : "bg-[var(--rui-bg-panel-2)] text-[var(--rui-text-secondary)] hover:bg-[var(--rui-accent-muted)] hover:text-[var(--rui-text-primary)]",
                  Y,
                  oe && G
                ),
                children: [
                  /* @__PURE__ */ o("span", { className: s("flex min-w-0 items-center gap-3", T && "justify-center"), children: [
                    z.icon ? /* @__PURE__ */ t("span", { className: s("flex shrink-0", oe ? "text-current" : "text-[var(--rui-accent)]"), children: z.icon }) : null,
                    T ? null : /* @__PURE__ */ o("span", { className: "min-w-0 flex-1 text-left", children: [
                      /* @__PURE__ */ t("span", { className: "block truncate font-medium", children: z.label }),
                      z.description ? /* @__PURE__ */ t("span", { className: "mt-0.5 block truncate text-xs text-[var(--rui-text-tertiary)]", children: z.description }) : null
                    ] })
                  ] }),
                  !T && z.badge ? /* @__PURE__ */ t("span", { className: "ml-3 shrink-0", children: z.badge }) : null
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
const Jn = Ze(function({
  checked: r,
  defaultChecked: i = !1,
  onCheckedChange: d,
  name: l,
  value: c,
  title: a,
  description: u,
  helper: m,
  leading: f,
  trailing: b,
  toggleable: v,
  disabled: N,
  accentKey: A,
  style: j,
  className: B,
  contentClassName: I,
  titleClassName: x,
  descriptionClassName: D,
  helperClassName: V,
  indicatorClassName: Z
}, Y) {
  const [G, K] = Xe({
    value: r,
    defaultValue: i,
    onChange: d
  }), Q = be(A, j), O = v ?? !l;
  return /* @__PURE__ */ o(
    "label",
    {
      ref: Y,
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
              N || !O || !G || (F.preventDefault(), K(!1));
            },
            onChange: (F) => {
              O && G || N || K(F.target.checked);
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
              a ? /* @__PURE__ */ t("div", { className: s("text-sm font-semibold text-[var(--rui-text-primary)]", x), children: a }) : null,
              u ? /* @__PURE__ */ t("div", { className: s("mt-1 text-sm text-[var(--rui-text-secondary)]", D), children: u }) : null
            ] }),
            b ? /* @__PURE__ */ t("div", { className: "flex-shrink-0", children: b }) : null
          ] }),
          m || f ? /* @__PURE__ */ o("div", { className: "mt-3 flex items-end justify-between gap-3", children: [
            m ? /* @__PURE__ */ t("div", { className: s("text-sm text-[var(--rui-text-tertiary)]", V), children: m }) : /* @__PURE__ */ t("span", {}),
            f ? /* @__PURE__ */ t("div", { className: "flex-shrink-0 text-[var(--rui-text-secondary)]", children: f }) : null
          ] }) : null
        ] })
      ]
    }
  );
}), pn = Ze(function({
  checked: r,
  defaultChecked: i = !1,
  onCheckedChange: d,
  label: l,
  description: c,
  disabled: a,
  className: u,
  trackClassName: m,
  thumbClassName: f,
  labelClassName: b,
  descriptionClassName: v,
  accentKey: N,
  style: A,
  ...j
}, B) {
  const [I, x] = Xe({
    value: r,
    defaultValue: i,
    onChange: d
  }), D = pt(), V = be(N, A), Z = /* @__PURE__ */ t(
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
        a || x((Y) => !Y);
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
            f
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
}), gn = Ze(function({
  value: r,
  defaultValue: i = "",
  onChange: d,
  label: l,
  description: c,
  error: a,
  helperText: u,
  labelPosition: m = "top",
  wrapperClassName: f,
  labelClassName: b,
  descriptionClassName: v,
  errorClassName: N,
  helperClassName: A,
  inputClassName: j,
  prefix: B,
  suffix: I,
  accentKey: x,
  className: D,
  style: V,
  id: Z,
  disabled: Y,
  required: G,
  ...K
}, Q) {
  const [O, F] = Xe({
    value: r,
    defaultValue: i,
    onChange: d
  }), P = pt(), W = Z ?? K.name ?? P, re = [c ? `${W}-description` : null, a ? `${W}-error` : null, u ? `${W}-helper` : null].filter(Boolean).join(" ") || void 0, J = be(x, V), T = /* @__PURE__ */ t(
    "input",
    {
      ref: Q,
      id: W,
      value: O,
      onChange: (ne) => F(ne.target.value),
      disabled: Y,
      required: G,
      "aria-invalid": !!a || void 0,
      "aria-describedby": re,
      style: J,
      className: s(
        "rui-input h-10 min-w-0 w-full rounded-[4px] px-4 text-[15px] outline-none transition placeholder:text-[var(--rui-text-tertiary)] focus:border-[var(--rui-accent)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
        D,
        j
      ),
      ...K
    }
  ), _ = B || I ? /* @__PURE__ */ o("div", { className: s("flex min-w-0 items-stretch gap-2"), children: [
    B ? /* @__PURE__ */ t("div", { className: "inline-flex items-center text-[var(--rui-text-tertiary)]", children: B }) : null,
    T,
    I ? /* @__PURE__ */ t("div", { className: "inline-flex items-center text-[var(--rui-text-tertiary)]", children: I }) : null
  ] }) : T;
  return !l && !c && !a && !u && !B && !I ? T : /* @__PURE__ */ o("div", { className: s(m === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", f), children: [
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
  return /* @__PURE__ */ t(gn, { ref: d, type: r, ...i });
});
function je(e) {
  return e.kind === "action";
}
function Mr(e) {
  return !je(e) && e.hideable !== !1;
}
function kr(e) {
  return je(e) || e.hideable === !1 ? !0 : e.visibleByDefault !== !1;
}
function et(e, r) {
  return r.getValue ? r.getValue(e) : r.accessor ? r.accessor(e) : e == null ? void 0 : e[r.id];
}
function xt(e) {
  return Array.isArray(e) ? e.map((r) => xt(r)).join(" ") : e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
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
function vn(e, r, i, d) {
  if (i.compare) return i.compare(e, r, d);
  const l = et(e, i), c = et(r, i);
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
      a = xt(l).localeCompare(xt(c), void 0, { numeric: !0, sensitivity: "base" });
      break;
  }
  return d === "asc" ? a : a * -1;
}
function yn(e, r, i) {
  if (r.filterFn) return r.filterFn(e, i);
  const d = r.kind || "text", l = et(e, r);
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
      return c ? xt(l).toLowerCase().includes(c) : !0;
    }
  }
}
function Ot(e, r) {
  return {
    visibleColumnIds: e.filter((i) => kr(i)).map((i) => i.id),
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
  const d = Ot(r, i), l = new Map(r.map((x) => [x.id, x])), c = Array.isArray(e == null ? void 0 : e.columnOrder) ? e.columnOrder.map(String).filter((x) => l.has(x)) : d.columnOrder, a = [...c, ...r.map((x) => x.id).filter((x) => !c.includes(x))], u = a.map((x) => l.get(x)).filter(Boolean), m = r.filter((x) => !Mr(x)).map((x) => x.id), f = Array.isArray(e == null ? void 0 : e.visibleColumnIds) ? e.visibleColumnIds.filter((x) => l.has(x)) : d.visibleColumnIds, b = /* @__PURE__ */ new Set([...f, ...m]);
  r.filter((x) => !je(x) && b.has(x.id)).length || r.forEach((x) => {
    kr(x) && b.add(x.id);
  });
  const N = (B = e == null ? void 0 : e.sort) != null && B.columnId ? l.get(e.sort.columnId) : null, A = N && N.sortable !== !1 && b.has(N.id) && !je(N) && ["asc", "desc"].includes(((I = e == null ? void 0 : e.sort) == null ? void 0 : I.direction) || "") ? { columnId: N.id, direction: e.sort.direction } : d.sort, j = Object.fromEntries(
    Object.entries((e == null ? void 0 : e.filters) || {}).filter(([x, D]) => {
      const V = l.get(x);
      return !!(V && b.has(x) && V.filterable !== !1 && !je(V) && $t(D));
    })
  );
  return {
    visibleColumnIds: u.filter((x) => b.has(x.id)).map((x) => x.id),
    columnOrder: a,
    columnWidths: {
      ...d.columnWidths,
      ...Object.fromEntries(
        Object.entries((e == null ? void 0 : e.columnWidths) || {}).filter(([x, D]) => l.has(x) && Number.isFinite(Number(D)) && Number(D) > 0).map(([x, D]) => [x, Number(D)])
      )
    },
    sort: A,
    filters: j,
    globalSearch: typeof (e == null ? void 0 : e.globalSearch) == "string" ? e.globalSearch : d.globalSearch,
    expandedRowIds: Array.isArray(e == null ? void 0 : e.expandedRowIds) ? e.expandedRowIds.map(String) : d.expandedRowIds,
    selectedRowIds: Array.isArray(e == null ? void 0 : e.selectedRowIds) ? e.selectedRowIds.map(String) : d.selectedRowIds
  };
}
function wn(e, r, i = "rui:table") {
  return `${i}:${e}:${r || "__global__"}`;
}
function Nn(e, r, i) {
  if (e === !1) return null;
  const d = (e == null ? void 0 : e.key) || r;
  return d ? wn(d, (e == null ? void 0 : e.scope) ?? i, e == null ? void 0 : e.namespace) : null;
}
function Ft(e) {
  const { expandedRowIds: r, selectedRowIds: i, ...d } = e;
  return d;
}
function Sn(e) {
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
function kn(e, r, i) {
  if (!(typeof window > "u"))
    try {
      (i || window.localStorage).setItem(e, JSON.stringify(Ft(r)));
    } catch {
    }
}
function or(e) {
  return e === "center" ? "text-center" : e === "right" ? "text-right" : "text-left";
}
function Cn(e, r) {
  return !e || e.columnId !== r ? { columnId: r, direction: "asc" } : e.direction === "asc" ? { columnId: r, direction: "desc" } : null;
}
function In(e, r, i) {
  if (r === i) return e;
  const d = e.indexOf(r), l = e.indexOf(i);
  if (d < 0 || l < 0) return e;
  const c = [...e], [a] = c.splice(d, 1);
  return c.splice(l, 0, a), c;
}
function Bn(e, r) {
  const i = /* @__PURE__ */ new Set();
  return e.forEach((d) => {
    const l = et(d, r);
    Array.isArray(l) ? l.forEach((c) => i.add(String(c))) : l != null && l !== "" && i.add(String(l));
  }), Array.from(i).sort((d, l) => d.localeCompare(l, void 0, { numeric: !0, sensitivity: "base" })).map((d) => ({ label: d, value: d }));
}
function dr(e, r) {
  const i = e.getBoundingClientRect(), d = window.innerWidth, l = window.innerHeight, c = 12, a = Math.max(c, Math.min(i.bottom + 8, l - c - 120)), u = Math.max(c, Math.min(i.right - r, d - r - c)), m = Math.max(180, l - a - c);
  return { left: u, top: a, maxHeight: m };
}
function Dn(e, r) {
  return r.renderDetailValue ? r.renderDetailValue(e) : r.renderCell ? r.renderCell(e) : Cr(et(e, r));
}
function Rn(e, r) {
  return r ? { ...e, ...r } : e;
}
function Et(e) {
  var r;
  (r = e == null ? void 0 : e.parentNode) == null || r.removeChild(e);
}
function Tn(e, r) {
  const i = e == null ? void 0 : e.querySelector("table"), d = i == null ? void 0 : i.querySelector(`thead tr:last-child th:nth-child(${r})`);
  if (!d || typeof document > "u") return null;
  const l = Array.from((i == null ? void 0 : i.querySelectorAll(`tbody tr:not([data-rui-detail-row="true"]) td:nth-child(${r})`)) || []).slice(0, 7), c = Math.max(140, Math.min(d.getBoundingClientRect().width || 180, 340)), a = document.createElement("div");
  a.style.position = "fixed", a.style.left = "-10000px", a.style.top = "-10000px", a.style.width = `${c}px`, a.style.pointerEvents = "none", a.style.zIndex = "2147483647", a.style.overflow = "hidden", a.style.border = "1px solid var(--rui-accent-border-soft)", a.style.borderRadius = "10px", a.style.background = "var(--rui-bg-panel)", a.style.boxShadow = "0 18px 45px rgba(6, 9, 35, 0.35)", a.style.color = "var(--rui-text-primary)";
  const u = (m, f = !1) => {
    const b = m.cloneNode(!0);
    b.removeAttribute("draggable"), b.style.display = "block", b.style.width = "100%", b.style.boxSizing = "border-box", b.style.borderBottom = "1px solid var(--rui-border-soft)", b.style.background = f ? "var(--rui-bg-panel)" : "var(--rui-bg-panel-2)", b.style.padding = f ? "12px" : "10px 12px", b.style.fontSize = f ? "12px" : "13px", b.style.color = f ? "var(--rui-text-secondary)" : "var(--rui-text-primary)", b.style.opacity = "1", a.appendChild(b);
  };
  return u(d, !0), l.forEach((m) => u(m)), document.body.appendChild(a), a;
}
function Un({
  rows: e,
  columns: r,
  rowKey: i,
  tableId: d,
  scopeId: l = null,
  persistence: c,
  state: a,
  defaultState: u,
  onStateChange: m,
  selection: f,
  virtualization: b,
  loading: v = !1,
  emptyMessage: N = "No rows available.",
  loadingContent: A = "Loading rows.",
  toolbarContent: j,
  renderToolbar: B,
  headerFilters: I,
  renderHeaderFilters: x,
  renderSelectionActions: D,
  hideColumnControls: V = !1,
  allowColumnResize: Z = !0,
  allowColumnReorder: Y = !0,
  searchable: G = !1,
  searchPlaceholder: K = "Search rows",
  globalSearchFn: Q,
  sortRows: O,
  renderExpandedContent: F,
  expandedRowIds: P,
  defaultExpandedRowIds: W,
  onExpandedChange: re,
  onRowExpand: J,
  rowClassName: T,
  detailRowClassName: _,
  containerClassName: ne,
  tableClassName: U,
  accentKey: Ie,
  style: Le,
  className: q,
  classNames: S
}) {
  const ye = fe(null), z = fe(null), oe = fe(null), me = fe(null), ee = fe(null), De = fe(null), we = fe(null), xe = fe(null), We = fe(null), Re = fe(null), [k, le] = ce(null), [M, ie] = ce(null), [pe, Me] = ce(!1), [Te, he] = ce(!1), [Ne, Ge] = ce(null), [Oe, nt] = ce(null), [$e, qe] = ce(!1), [Qe, y] = ce(0), [Se, de] = ce({}), [w, se] = ce(0), ge = Nn(c, d, l), Pe = c === !1, Ee = Pe || c == null ? void 0 : c.adapter, Dt = Pe || c == null ? void 0 : c.storage, Ir = be(Ie, Le), [Ht, gt] = ce(() => !ge || !Ee), Br = te(() => r.map((n) => n.id).join(""), [r]), vt = fe(r), Ye = fe(m), [Vt, Zt] = ce(
    () => ht(
      Rn(
        Ot(r, { ...u, expandedRowIds: W || (u == null ? void 0 : u.expandedRowIds) }),
        ge && Mn(ge, Dt) || void 0
      ),
      r,
      {
        ...u,
        expandedRowIds: W || (u == null ? void 0 : u.expandedRowIds),
        selectedRowIds: (f == null ? void 0 : f.defaultSelectedKeys) || (u == null ? void 0 : u.selectedRowIds)
      }
    )
  ), $ = te(() => {
    const n = { ...Vt, ...a };
    return P !== void 0 && (n.expandedRowIds = P), ht(n, r);
  }, [r, a, P, Vt]), Rt = fe($);
  Rt.current = $;
  const ke = Ce(
    (n) => {
      var C;
      const h = ht(
        {
          ...Rt.current,
          ...a,
          ...P !== void 0 ? { expandedRowIds: P } : {}
        },
        vt.current
      ), g = ht(typeof n == "function" ? n(h) : n, vt.current);
      return Rt.current = g, Zt(g), (C = Ye.current) == null || C.call(Ye, g), g;
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
    const h = new ResizeObserver(([g]) => {
      const C = Math.round(g.contentRect.width);
      y((L) => Math.abs(L - C) > 1 ? C : L);
    });
    return h.observe(n), y(n.clientWidth), () => h.disconnect();
  }, []), ae(
    () => () => {
      xe.current != null && window.cancelAnimationFrame(xe.current), Re.current = null, Et(We.current), document.body.style.cursor = "", document.body.style.userSelect = "";
    },
    []
  ), ae(() => {
    let n = !1;
    if (!ge || !Ee) {
      gt(!0);
      return;
    }
    return gt(!1), Promise.resolve(Ee.load(ge)).then((h) => {
      n || (h && Zt((g) => {
        var L;
        const C = ht({ ...g, ...Ft(h) }, vt.current);
        return (L = Ye.current) == null || L.call(Ye, C), C;
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
        Promise.resolve(Ee.save(ge, Sn($))).catch(() => {
        });
        return;
      }
      kn(ge, $, Dt);
    }
  }, [Ht, $, Ee, Pe, ge, Dt]);
  const tt = te(() => {
    const n = new Map(r.map((h) => [h.id, h]));
    return [...$.columnOrder, ...r.map((h) => h.id).filter((h) => !$.columnOrder.includes(h))].map((h) => n.get(h)).filter(Boolean);
  }, [r, $.columnOrder]), ze = te(
    () => tt.filter((n) => je(n) || n.hideable === !1 ? !0 : $.visibleColumnIds.includes(n.id)),
    [$.visibleColumnIds, tt]
  ), it = te(
    () => tt.filter((n) => je(n) || n.hideable === !1 ? !1 : !ze.some((h) => h.id === n.id)),
    [tt, ze]
  ), Fe = Ce(
    (n, h) => {
      ke((g) => {
        const C = { ...g.filters };
        return $t(h) ? C[n] = h : delete C[n], { ...g, filters: C };
      });
    },
    [ke]
  ), Gt = Ce(
    (n) => {
      ke((h) => ({ ...h, globalSearch: n }));
    },
    [ke]
  ), yt = Ce(
    (n) => {
      ke((h) => {
        if (!(n in h.filters)) return h;
        const g = { ...h.filters };
        return delete g[n], { ...h, filters: g };
      });
    },
    [ke]
  ), Jt = Ce(
    (n, h) => {
      !Number.isFinite(h) || h <= 0 || ke((g) => ({ ...g, columnWidths: { ...g.columnWidths, [n]: h } }));
    },
    [ke]
  ), Dr = Ce(
    (n, h) => {
      ke((g) => ({ ...g, columnOrder: In(g.columnOrder, n, h) }));
    },
    [ke]
  ), Tt = Ce(() => {
    ke(Ot(r, { ...u, expandedRowIds: W || [], selectedRowIds: (f == null ? void 0 : f.defaultSelectedKeys) || [] }));
  }, [r, W, u, f == null ? void 0 : f.defaultSelectedKeys, ke]);
  ae(() => {
    const n = (g) => {
      const C = we.current;
      if (!C) return;
      const L = r.find((E) => E.id === C.columnId);
      if (!L) return;
      const H = Math.max(L.minWidth || 96, 56), ue = L.maxWidth || 720, _e = Math.min(ue, Math.max(H, C.startWidth + (g.clientX - C.startX)));
      C.nextWidth = _e, xe.current == null && (xe.current = window.requestAnimationFrame(() => {
        xe.current = null;
        const E = we.current;
        E && de((X) => ({ ...X, [E.columnId]: E.nextWidth }));
      }));
    }, h = () => {
      const g = we.current;
      g && (xe.current != null && (window.cancelAnimationFrame(xe.current), xe.current = null), we.current = null, Jt(g.columnId, g.nextWidth), de((C) => {
        if (!(g.columnId in C)) return C;
        const { [g.columnId]: L, ...H } = C;
        return H;
      }), document.body.style.cursor = "", document.body.style.userSelect = "");
    };
    return window.addEventListener("mousemove", n), window.addEventListener("mouseup", h), () => {
      window.removeEventListener("mousemove", n), window.removeEventListener("mouseup", h);
    };
  }, [r, Jt]), ae(() => {
    const n = (h) => {
      !(h.target instanceof Node) || [ye, z, oe, me, ee].some((C) => {
        var L;
        return (L = C.current) == null ? void 0 : L.contains(h.target);
      }) || (Me(!1), he(!1));
    };
    return document.addEventListener("mousedown", n), () => document.removeEventListener("mousedown", n);
  }, []), ae(() => {
    if (!pe || !z.current || typeof window > "u") return;
    const n = () => {
      z.current && Ge(dr(z.current, 320));
    };
    return n(), window.addEventListener("resize", n), window.addEventListener("scroll", n, !0), () => {
      window.removeEventListener("resize", n), window.removeEventListener("scroll", n, !0);
    };
  }, [pe]), ae(() => {
    if (!Te || !oe.current || typeof window > "u") return;
    const n = () => {
      oe.current && nt(dr(oe.current, 260));
    };
    return n(), window.addEventListener("resize", n), window.addEventListener("scroll", n, !0), () => {
      window.removeEventListener("resize", n), window.removeEventListener("scroll", n, !0);
    };
  }, [Te]);
  const Je = it.length > 0 || !!F, at = te(() => {
    const n = $.globalSearch.trim().toLowerCase();
    return e.filter((h) => Object.entries($.filters).every(([C, L]) => {
      const H = r.find((ue) => ue.id === C);
      return !H || je(H) ? !0 : yn(h, H, L);
    }) ? n ? Q ? Q(h, n) : r.some((C) => !je(C) && xt(et(h, C)).toLowerCase().includes(n)) : !0 : !1);
  }, [r, Q, $.filters, $.globalSearch, e]), Ue = te(() => {
    if (O) return O(at, $.sort, r);
    if (!$.sort) return at;
    const n = r.find((h) => {
      var g;
      return h.id === ((g = $.sort) == null ? void 0 : g.columnId);
    });
    return n ? at.map((h, g) => ({ row: h, index: g })).sort((h, g) => vn(h.row, g.row, n, $.sort.direction) || h.index - g.index).map((h) => h.row) : at;
  }, [r, at, $.sort, O]), wt = te(() => new Map(e.map((n) => [i(n), n])), [i, e]), Ae = f == null ? void 0 : f.mode, He = (f == null ? void 0 : f.selectedKeys) ?? $.selectedRowIds, Nt = te(() => new Set(He), [He]), At = te(() => He.map((n) => wt.get(n)).filter(Boolean), [wt, He]), lt = Ce(
    (n) => {
      var h;
      ke((g) => ({ ...g, selectedRowIds: n })), (h = f == null ? void 0 : f.onChange) == null || h.call(f, n, n.map((g) => wt.get(g)).filter(Boolean));
    },
    [wt, f, ke]
  ), Ut = (n) => {
    var C;
    if (!Ae || (C = f == null ? void 0 : f.isRowDisabled) != null && C.call(f, n)) return;
    const h = i(n);
    if (Ae === "single") {
      lt(Nt.has(h) ? [] : [h]);
      return;
    }
    const g = new Set(He);
    g.has(h) ? g.delete(h) : g.add(h), lt(Array.from(g));
  }, st = ((f == null ? void 0 : f.selectAllScope) === "all" ? e : Ue).filter((n) => {
    var h;
    return !((h = f == null ? void 0 : f.isRowDisabled) != null && h.call(f, n));
  }).map((n) => i(n)), St = !!st.length && st.every((n) => Nt.has(n)), Rr = st.some((n) => Nt.has(n)), Tr = () => {
    !Ae || Ae === "single" || lt(St ? He.filter((n) => !st.includes(n)) : Array.from(/* @__PURE__ */ new Set([...He, ...st])));
  }, Ar = () => lt([]), Xt = P ?? $.expandedRowIds, jr = te(() => new Set(Xt), [Xt]), Lr = (n) => {
    const h = i(n), C = ke((H) => {
      const ue = new Set(H.expandedRowIds);
      return ue.has(h) ? ue.delete(h) : ue.add(h), { ...H, expandedRowIds: Array.from(ue) };
    }).expandedRowIds, L = C.includes(h);
    re == null || re(C, n), J == null || J(n, L);
  }, jt = tt.filter((n) => !je(n) && n.hideable !== !1), Mt = ze.filter((n) => !je(n) && n.filterable !== !1), Lt = Mt.filter((n) => cr(n.kind || "text", $.filters[n.id])).length, ct = te(
    () => Object.fromEntries(
      ze.map((n) => [n.id, Number(Se[n.id] || $.columnWidths[n.id] || n.width || n.minWidth || 160)])
    ),
    [Se, $.columnWidths, ze]
  ), Wt = (Je ? 56 : 0) + (Ae ? 72 : 0), Pt = ze.reduce((n, h) => n + ct[h.id], 0), ot = te(() => {
    const n = Math.max(Wt + Pt, 720), h = Math.max(n, Qe || 0), g = Math.max(0, h - Wt - Pt);
    return { tableWidth: h, fillerWidth: g, columnWidths: ct };
  }, [Pt, ct, Wt, Qe]), Ve = !!(b != null && b.enabled && !Je), kt = (b == null ? void 0 : b.rowHeight) || 48, qt = (b == null ? void 0 : b.maxHeight) || 520, Qt = (b == null ? void 0 : b.overscan) || 6, Ct = Ve ? Math.max(0, Math.floor(w / kt) - Qt) : 0, Wr = Ve ? Math.ceil(qt / kt) + Qt * 2 : Ue.length, Yt = Ve ? Ue.slice(Ct, Ct + Wr) : Ue, Kt = Ve ? Ct * kt : 0, er = Ve ? Math.max(0, (Ue.length - Ct - Yt.length) * kt) : 0, dt = ot.fillerWidth > 1, ut = ze.length + (Je ? 1 : 0) + (Ae ? 1 : 0) + (dt ? 1 : 0), Pr = (n) => {
    var g, C;
    if (n.renderFilter)
      return n.renderFilter({
        value: $.filters[n.id],
        setValue: (L) => Fe(n.id, L),
        clear: () => yt(n.id),
        rows: e
      });
    const h = n.kind || "text";
    if (h === "enum") {
      const L = n.getFilterOptions ? n.getFilterOptions(e) : n.getEnumOptions ? n.getEnumOptions(e) : Bn(e, n), H = Array.isArray((g = $.filters[n.id]) == null ? void 0 : g.values) ? $.filters[n.id].values.map(String) : [];
      return /* @__PURE__ */ t("div", { className: "max-h-[220px] space-y-2 overflow-auto pr-1 rui-scrollbar", children: L.map((ue) => {
        const _e = H.includes(String(ue.value));
        return /* @__PURE__ */ o("label", { className: "flex items-center gap-3 text-sm text-[var(--rui-text-secondary)]", children: [
          /* @__PURE__ */ t(
            "input",
            {
              type: "checkbox",
              checked: _e,
              onChange: () => {
                const E = new Set(H);
                _e ? E.delete(String(ue.value)) : E.add(String(ue.value)), Fe(n.id, { values: Array.from(E) });
              },
              className: "h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)]"
            }
          ),
          /* @__PURE__ */ t("span", { children: ue.label })
        ] }, String(ue.value));
      }) });
    }
    if (h === "number") {
      const L = $.filters[n.id] || {};
      return /* @__PURE__ */ o("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t(
          "input",
          {
            className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input",
            type: "number",
            value: L.min || "",
            onChange: (H) => Fe(n.id, { ...L, min: H.target.value }),
            placeholder: "Minimum"
          }
        ),
        /* @__PURE__ */ t(
          "input",
          {
            className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input",
            type: "number",
            value: L.max || "",
            onChange: (H) => Fe(n.id, { ...L, max: H.target.value }),
            placeholder: "Maximum"
          }
        )
      ] });
    }
    if (h === "datetime") {
      const L = $.filters[n.id] || {};
      return /* @__PURE__ */ o("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t(sr, { type: "datetime-local", value: L.from || "", onChange: (H) => Fe(n.id, { ...L, from: H }) }),
        /* @__PURE__ */ t(sr, { type: "datetime-local", value: L.to || "", onChange: (H) => Fe(n.id, { ...L, to: H }) })
      ] });
    }
    if (h === "boolean") {
      const L = ((C = $.filters[n.id]) == null ? void 0 : C.value) || "all";
      return /* @__PURE__ */ o("select", { className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input", value: L, onChange: (H) => Fe(n.id, { value: H.target.value }), children: [
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
        onChange: (L) => Fe(n.id, L.target.value),
        placeholder: `Filter ${String(n.label)}`
      }
    );
  }, tr = B == null ? void 0 : B({ state: $, rows: e, visibleRows: Ue, selectedRows: At, reset: Tt }), rr = He.length ? D == null ? void 0 : D({ selectedKeys: He, selectedRows: At, clearSelection: Ar }) : null, ft = ze.some((n) => n.groupId || n.groupLabel), nr = () => {
    Re.current = null, le(null), ie(null), Et(We.current), We.current = null;
  }, Er = ft ? /* @__PURE__ */ o("tr", { className: "sticky top-0 z-30 border-b border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] text-[var(--rui-text-secondary)]", children: [
    Je ? /* @__PURE__ */ t("th", { className: "w-14 px-3 py-2", rowSpan: 2 }) : null,
    Ae ? /* @__PURE__ */ t("th", { className: "w-[72px] px-3 py-2", rowSpan: 2 }) : null,
    ze.map((n) => /* @__PURE__ */ t("th", { className: "px-3 py-2 text-left text-xs font-medium uppercase tracking-[0.14em]", children: n.groupLabel || n.groupId || "" }, n.id)),
    dt ? /* @__PURE__ */ t("th", { className: "px-3 py-2", rowSpan: 2, "aria-hidden": "true" }) : null
  ] }) : null;
  return /* @__PURE__ */ o("div", { ref: ye, className: s("rui-theme flex min-h-0 w-full flex-1 flex-col", q, S == null ? void 0 : S.root), style: Ir, children: [
    j || tr || rr || G || !V && jt.length ? /* @__PURE__ */ o("div", { className: s("mb-3 flex flex-wrap items-center justify-between gap-2", S == null ? void 0 : S.toolbar), children: [
      /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-2", children: [
        G ? /* @__PURE__ */ t("div", { className: "relative w-full max-w-[260px]", children: /* @__PURE__ */ t(
          "input",
          {
            className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input",
            value: $.globalSearch,
            onChange: (n) => Gt(n.target.value),
            placeholder: K
          }
        ) }) : null,
        j,
        tr,
        rr
      ] }),
      !V && jt.length ? /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center justify-end gap-2", children: [
        Mt.length ? /* @__PURE__ */ t("div", { ref: z, className: "flex items-center", children: /* @__PURE__ */ o(
          ve,
          {
            variant: "ghost",
            size: "sm",
            leftIcon: /* @__PURE__ */ t(Be, { name: "filter", className: "h-4 w-4" }),
            className: s(Lt ? "text-[var(--rui-accent)]" : ""),
            onClick: () => Me((n) => !n),
            children: [
              "Filters",
              Lt ? /* @__PURE__ */ t("span", { className: "rounded-full border border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] px-1.5 py-0 text-[10px] leading-4 text-[var(--rui-accent)]", children: Lt }) : null
            ]
          }
        ) }) : null,
        /* @__PURE__ */ t("div", { ref: oe, className: "flex items-center", children: /* @__PURE__ */ t(ve, { variant: "ghost", size: "sm", leftIcon: /* @__PURE__ */ t(Be, { name: "grid", className: "h-4 w-4" }), onClick: () => he((n) => !n), children: "Columns" }) }),
        /* @__PURE__ */ t(ve, { variant: "ghost", size: "sm", onClick: Tt, children: "Reset table" })
      ] }) : null
    ] }) : null,
    I || x ? /* @__PURE__ */ o(
      "div",
      {
        className: s("mb-3 flex flex-wrap items-center gap-2 rounded-[10px] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)] p-3", S == null ? void 0 : S.headerFilters),
        children: [
          I,
          x == null ? void 0 : x({
            state: $,
            rows: e,
            visibleRows: Ue,
            selectedRows: At,
            setGlobalSearch: Gt,
            setFilter: Fe,
            clearFilter: yt,
            reset: Tt
          })
        ]
      }
    ) : null,
    $e && pe && Ne ? Bt(
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
              /* @__PURE__ */ t(ve, { variant: "ghost", size: "sm", onClick: () => Mt.forEach((n) => yt(n.id)), children: "Clear all" })
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-4", children: Mt.map((n) => {
              const h = cr(n.kind || "text", $.filters[n.id]);
              return /* @__PURE__ */ o("div", { className: "rounded-[10px] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)] p-3", children: [
                /* @__PURE__ */ o("div", { className: "mb-2 flex items-center justify-between gap-3", children: [
                  /* @__PURE__ */ t("div", { className: "text-sm font-medium text-[var(--rui-text-primary)]", children: n.label }),
                  h ? /* @__PURE__ */ t(ve, { variant: "ghost", size: "sm", onClick: () => yt(n.id), children: "Clear" }) : null
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
          ref: ee,
          className: s(
            "rui-theme fixed z-[130] w-[260px] rounded-[10px] border border-solid border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] p-3 shadow-panel",
            S == null ? void 0 : S.menu
          ),
          style: { left: Oe.left, top: Oe.top, maxHeight: Oe.maxHeight },
          children: [
            /* @__PURE__ */ t("div", { className: "mb-2 text-xs uppercase tracking-[0.14em] text-[var(--rui-text-tertiary)]", children: "Visible columns" }),
            /* @__PURE__ */ t("div", { className: "space-y-2 overflow-auto pr-1 rui-scrollbar", style: { maxHeight: Math.max(120, Oe.maxHeight - 36) }, children: jt.map((n) => {
              const h = $.visibleColumnIds.includes(n.id);
              return /* @__PURE__ */ o("label", { className: "flex items-center gap-3 text-sm text-[var(--rui-text-secondary)]", children: [
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: "checkbox",
                    checked: h,
                    onChange: () => {
                      ke((g) => {
                        var _e;
                        const C = g.visibleColumnIds.includes(n.id), L = g.visibleColumnIds.filter((E) => {
                          const X = r.find((rt) => rt.id === E);
                          return X && !je(X);
                        });
                        if (C && L.length <= 1) return g;
                        const H = new Set(g.visibleColumnIds);
                        C ? H.delete(n.id) : H.add(n.id);
                        const ue = { ...g.filters };
                        return C && delete ue[n.id], {
                          ...g,
                          visibleColumnIds: tt.filter((E) => H.has(E.id) || !Mr(E)).map((E) => E.id),
                          filters: ue,
                          sort: ((_e = g.sort) == null ? void 0 : _e.columnId) === n.id && C ? null : g.sort
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
        children: /* @__PURE__ */ o("table", { className: s("table-fixed text-left text-sm", U, S == null ? void 0 : S.table), style: { width: `${ot.tableWidth}px` }, children: [
          /* @__PURE__ */ o("colgroup", { children: [
            Je ? /* @__PURE__ */ t("col", { style: { width: 56 } }) : null,
            Ae ? /* @__PURE__ */ t("col", { style: { width: 72 } }) : null,
            ze.map((n) => /* @__PURE__ */ t("col", { style: { width: ot.columnWidths[n.id] || ct[n.id] || 160 } }, n.id)),
            dt ? /* @__PURE__ */ t("col", { style: { width: ot.fillerWidth } }) : null
          ] }),
          /* @__PURE__ */ o("thead", { children: [
            Er,
            /* @__PURE__ */ o(
              "tr",
              {
                className: s(
                  "sticky top-0 z-20 border-b border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] text-[var(--rui-text-secondary)]",
                  ft && "top-[37px]",
                  S == null ? void 0 : S.headerRow
                ),
                children: [
                  Je && !ft ? /* @__PURE__ */ t("th", { className: "w-14 px-3 py-3 font-medium" }) : null,
                  Ae && !ft ? /* @__PURE__ */ t("th", { className: "w-[72px] px-3 py-3 text-left font-medium", children: Ae === "multi" ? /* @__PURE__ */ t(
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
                  ze.map((n, h) => {
                    var _e;
                    const g = !je(n) && n.sortable !== !1, C = ((_e = $.sort) == null ? void 0 : _e.columnId) === n.id ? $.sort.direction : null, L = n.renderHeader ? n.renderHeader() : n.label, H = Y && !je(n), ue = h + (Je ? 1 : 0) + (Ae ? 1 : 0) + 1;
                    return /* @__PURE__ */ o(
                      "th",
                      {
                        draggable: H,
                        "aria-grabbed": H ? k === n.id : void 0,
                        "data-column-id": n.id,
                        className: s(
                          "relative px-3 py-3 font-medium",
                          H && "cursor-grab active:cursor-grabbing",
                          k === n.id && "opacity-60",
                          M === n.id && k !== n.id && "bg-[var(--rui-accent-muted)]",
                          or(n.align),
                          n.headerClassName
                        ),
                        onDragStart: (E) => {
                          if (!H) return;
                          Et(We.current), Re.current = n.id, le(n.id), E.dataTransfer.effectAllowed = "move", E.dataTransfer.setData("text/plain", n.id);
                          const X = Tn(De.current, ue);
                          We.current = X, X && typeof E.dataTransfer.setDragImage == "function" && E.dataTransfer.setDragImage(X, Math.min(X.offsetWidth / 2, 160), 18);
                        },
                        onDragEnter: () => {
                          const E = Re.current || k;
                          !H || !E || E === n.id || ie(n.id);
                        },
                        onDragOver: (E) => {
                          const X = Re.current || k;
                          !H || !X || X === n.id || (E.preventDefault(), E.dataTransfer.dropEffect = "move");
                        },
                        onDrop: (E) => {
                          if (!H) return;
                          E.preventDefault();
                          const X = E.dataTransfer.getData("text/plain") || Re.current || k;
                          X && Dr(X, n.id), nr();
                        },
                        onDragEnd: nr,
                        children: [
                          M === n.id && k !== n.id ? /* @__PURE__ */ t("span", { className: "pointer-events-none absolute inset-y-1 left-0 w-0.5 rounded-full bg-[var(--rui-accent)] shadow-[0_0_0_3px_var(--rui-accent-muted)]" }) : null,
                          /* @__PURE__ */ t("div", { className: "flex items-center gap-1 pr-3", children: n.renderHeader ? /* @__PURE__ */ t("div", { className: s("flex min-w-0 flex-1 items-center", n.align === "right" ? "justify-end" : n.align === "center" ? "justify-center" : ""), children: L }) : g ? /* @__PURE__ */ o(
                            "button",
                            {
                              type: "button",
                              className: s(
                                "flex min-w-0 flex-1 appearance-none items-center gap-1 border-0 bg-transparent p-0 text-left font-medium text-inherit transition hover:text-[var(--rui-text-primary)]",
                                n.align === "right" ? "justify-end" : n.align === "center" ? "justify-center" : ""
                              ),
                              onClick: () => ke((E) => ({ ...E, sort: Cn(E.sort, n.id) })),
                              children: [
                                /* @__PURE__ */ t("span", { className: "truncate", children: L }),
                                /* @__PURE__ */ t("span", { className: s("text-[10px] uppercase tracking-[0.14em]", C ? "text-[var(--rui-accent)]" : "text-[var(--rui-text-tertiary)]"), children: C === "asc" ? "↑" : C === "desc" ? "↓" : "•" })
                              ]
                            }
                          ) : /* @__PURE__ */ t("span", { className: "truncate", children: L }) }),
                          Z && !je(n) ? /* @__PURE__ */ t(
                            "div",
                            {
                              className: "absolute inset-y-1 right-0 w-2 cursor-col-resize rounded-full transition hover:bg-white/10",
                              "aria-hidden": "true",
                              onMouseDown: (E) => {
                                E.preventDefault(), E.stopPropagation(), document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
                                const X = Number(ot.columnWidths[n.id] || ct[n.id] || 160);
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
                  dt && !ft ? /* @__PURE__ */ t("th", { className: "px-3 py-3", "aria-hidden": "true" }) : null
                ]
              }
            )
          ] }),
          /* @__PURE__ */ o("tbody", { children: [
            Ve && Kt ? /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t("td", { colSpan: ut, style: { height: Kt } }) }) : null,
            v ? /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t("td", { colSpan: ut, className: "px-3 py-8 text-center text-[var(--rui-text-tertiary)]", children: A }) }) : null,
            v ? null : Yt.map((n) => {
              var E;
              const h = i(n), g = jr.has(h), C = g ? F == null ? void 0 : F(n) : null, L = !!F || it.length > 0, H = typeof T == "function" ? T(n) : T, ue = Nt.has(h), _e = (E = f == null ? void 0 : f.isRowDisabled) == null ? void 0 : E.call(f, n);
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
                      Je ? /* @__PURE__ */ t("td", { className: "px-3 py-3", children: L ? /* @__PURE__ */ t(ve, { variant: "ghost", size: "sm", className: "w-9 px-0", onClick: () => Lr(n), title: g ? "Collapse row" : "Expand row", children: /* @__PURE__ */ t(Be, { name: g ? "chevron-down" : "chevron-right", className: "h-4 w-4" }) }) : null }) : null,
                      Ae ? /* @__PURE__ */ t("td", { className: "px-3 py-3 text-left", children: /* @__PURE__ */ t(
                        "input",
                        {
                          type: Ae === "single" ? "radio" : "checkbox",
                          checked: ue,
                          disabled: _e,
                          onClick: (X) => {
                            Ae !== "single" || !ue || _e || (X.preventDefault(), Ut(n));
                          },
                          onChange: () => {
                            Ae === "single" && ue || Ut(n);
                          },
                          className: "h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)] disabled:opacity-35",
                          "aria-label": ue ? "Deselect row" : "Select row"
                        }
                      ) }) : null,
                      ze.map((X) => {
                        const rt = X.renderCell ? X.renderCell(n) : Cr(et(n, X)), _r = typeof X.cellClassName == "function" ? X.cellClassName(n) : X.cellClassName;
                        return /* @__PURE__ */ t(
                          "td",
                          {
                            className: s("px-3 py-3 text-[var(--rui-text-secondary)]", or(X.align), _r, S == null ? void 0 : S.cell),
                            children: typeof rt == "string" || typeof rt == "number" ? /* @__PURE__ */ t("div", { className: s(X.wrap ? "whitespace-normal break-words" : "truncate"), children: rt }) : rt
                          },
                          X.id
                        );
                      }),
                      dt ? /* @__PURE__ */ t("td", { "aria-hidden": "true", className: "px-3 py-3" }) : null
                    ]
                  }
                ),
                g && L ? /* @__PURE__ */ t("tr", { "data-rui-detail-row": "true", className: s("border-b border-[var(--rui-border-soft)] last:border-none", _, S == null ? void 0 : S.detailRow), children: /* @__PURE__ */ t("td", { colSpan: ut, className: "px-3 py-3", children: /* @__PURE__ */ o("div", { className: "rounded-[10px] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)] p-4 text-sm text-[var(--rui-text-secondary)]", children: [
                  it.length ? /* @__PURE__ */ t("div", { className: "grid gap-3 md:grid-cols-2 xl:grid-cols-3", children: it.map((X) => /* @__PURE__ */ o("div", { children: [
                    /* @__PURE__ */ t("div", { className: "text-xs uppercase tracking-[0.14em] text-[var(--rui-text-tertiary)]", children: X.label }),
                    /* @__PURE__ */ t("div", { className: "mt-1 whitespace-normal break-words text-[var(--rui-text-primary)]", children: Dn(n, X) })
                  ] }, X.id)) }) : null,
                  C ? /* @__PURE__ */ t("div", { className: s(it.length ? "mt-4 border-t border-[var(--rui-border-soft)] pt-4" : ""), children: C }) : null
                ] }) }) }) : null
              ] }, h);
            }),
            Ve && er ? /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t("td", { colSpan: ut, style: { height: er } }) }) : null,
            !v && !Ue.length ? /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t("td", { colSpan: ut, className: "px-3 py-8 text-center text-[var(--rui-text-tertiary)]", children: N }) }) : null
          ] })
        ] })
      }
    )
  ] });
}
const Xn = Ze(function({
  value: r,
  defaultValue: i = "",
  onChange: d,
  label: l,
  description: c,
  error: a,
  helperText: u,
  labelPosition: m = "top",
  wrapperClassName: f,
  labelClassName: b,
  descriptionClassName: v,
  errorClassName: N,
  helperClassName: A,
  textareaClassName: j,
  accentKey: B,
  className: I,
  style: x,
  id: D,
  disabled: V,
  required: Z,
  rows: Y = 5,
  ...G
}, K) {
  const [Q, O] = Xe({
    value: r,
    defaultValue: i,
    onChange: d
  }), F = pt(), P = D ?? G.name ?? F, W = [c ? `${P}-description` : null, a ? `${P}-error` : null, u ? `${P}-helper` : null].filter(Boolean).join(" ") || void 0, re = be(B, x);
  return /* @__PURE__ */ o("div", { className: s(m === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", f), children: [
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
          ref: K,
          id: P,
          value: Q,
          onChange: (J) => O(J.target.value),
          disabled: V,
          required: Z,
          rows: Y,
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
const qn = Ze(function({
  value: r,
  defaultValue: i = null,
  onChange: d,
  onValueChange: l,
  label: c,
  description: a,
  error: u,
  helperText: m,
  labelPosition: f = "top",
  wrapperClassName: b,
  labelClassName: v,
  descriptionClassName: N,
  errorClassName: A,
  helperClassName: j,
  inputClassName: B,
  prefix: I,
  suffix: x,
  accentKey: D,
  className: V,
  style: Z,
  id: Y,
  disabled: G,
  required: K,
  step: Q,
  min: O,
  max: F,
  ...P
}, W) {
  const [re, J] = Xe({
    value: r,
    defaultValue: i,
    onChange: d
  }), [T, _] = ce(() => _t(r ?? i)), ne = pt(), U = Y ?? P.name ?? ne, Ie = [a ? `${U}-description` : null, u ? `${U}-error` : null, m ? `${U}-helper` : null].filter(Boolean).join(" ") || void 0, Le = be(D, Z);
  return ae(() => {
    r !== void 0 && _(_t(r));
  }, [r]), ae(() => {
    r === void 0 && T === "" && re != null && _(_t(re));
  }, [re, T, r]), /* @__PURE__ */ o("div", { className: s(f === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", b), children: [
    c || a ? /* @__PURE__ */ o("div", { className: s(f === "left" ? "pt-2" : "", "min-w-0"), children: [
      c ? /* @__PURE__ */ o("label", { htmlFor: U, className: s("block text-sm font-medium text-white", v), children: [
        c,
        K ? /* @__PURE__ */ t("span", { className: "ml-1 text-[var(--rui-accent)]", children: "*" }) : null
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
            value: T,
            onChange: (q) => {
              const S = q.target.value, ye = An(S);
              _(S), J(ye), l == null || l(ye, S);
            },
            disabled: G,
            required: K,
            min: O,
            max: F,
            step: Q,
            "aria-invalid": !!u || void 0,
            "aria-describedby": Ie,
            style: Le,
            className: s(
              "rui-input h-10 min-w-0 w-full px-3 text-sm outline-none transition placeholder:text-[var(--rui-text-tertiary)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
              V,
              B
            ),
            ...P
          }
        ),
        x ? /* @__PURE__ */ t("div", { className: "inline-flex items-center text-[var(--rui-text-tertiary)]", children: x }) : null
      ] }),
      u ? /* @__PURE__ */ t("div", { id: `${U}-error`, className: s("mt-1 text-sm text-[var(--rui-danger)]", A), children: u }) : m ? /* @__PURE__ */ t("div", { id: `${U}-helper`, className: s("mt-1 text-sm text-[var(--rui-text-tertiary)]", j), children: m }) : null
    ] })
  ] });
});
function Qn({
  checked: e,
  defaultChecked: r,
  onCheckedChange: i,
  title: d,
  description: l,
  helper: c,
  leading: a,
  trailing: u,
  disabled: m,
  accentKey: f,
  style: b,
  className: v,
  contentClassName: N,
  titleClassName: A,
  descriptionClassName: j,
  helperClassName: B
}) {
  const [I, x] = Xe({
    value: e,
    defaultValue: r ?? !1,
    onChange: i
  }), D = be(f, b);
  return /* @__PURE__ */ o(
    "div",
    {
      style: D,
      onClick: (V) => {
        if (m) return;
        const Z = V.target;
        Z != null && Z.closest("button,a,input,select,textarea,label") || x((Y) => !Y);
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
          /* @__PURE__ */ t(pn, { checked: I, onCheckedChange: x, disabled: m, "aria-label": typeof d == "string" ? d : void 0 })
        ] })
      ]
    }
  );
}
function ur(e, r, i) {
  return Math.min(i, Math.max(r, e));
}
function Yn({
  content: e,
  children: r,
  placement: i = "top",
  delay: d = 120,
  open: l,
  defaultOpen: c = !1,
  onOpenChange: a,
  accentKey: u,
  className: m,
  panelClassName: f
}) {
  const [b, v] = Xe({
    value: l,
    defaultValue: c,
    onChange: a
  }), [N, A] = ce(!1), [j, B] = ce({ top: 0, left: 0, placement: i }), I = fe(null), x = fe(null), D = fe(null), V = be(u);
  ae(() => A(!0), []);
  const Z = te(
    () => () => {
      if (typeof window > "u") return;
      const K = I.current, Q = x.current;
      if (!K || !Q) return;
      const O = K.getBoundingClientRect(), F = Q.getBoundingClientRect(), P = 10, W = 12, re = window.innerWidth, J = window.innerHeight, T = i;
      let _ = T;
      T === "top" && O.top - F.height - P < W && (_ = "bottom"), T === "bottom" && O.bottom + F.height + P > J - W && (_ = "top"), T === "left" && O.left - F.width - P < W && (_ = "right"), T === "right" && O.right + F.width + P > re - W && (_ = "left");
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
    const K = window.setTimeout(Z, 0), Q = () => Z();
    return window.addEventListener("resize", Q), window.addEventListener("scroll", Q, !0), () => {
      window.clearTimeout(K), window.removeEventListener("resize", Q), window.removeEventListener("scroll", Q, !0);
    };
  }, [b, Z]);
  const Y = () => {
    if (typeof window < "u" && D.current && window.clearTimeout(D.current), d > 0) {
      D.current = window.setTimeout(() => v(!0), d);
      return;
    }
    v(!0);
  }, G = () => {
    typeof window < "u" && D.current && window.clearTimeout(D.current), D.current = null, v(!1);
  };
  return /* @__PURE__ */ o("span", { ref: I, className: s("inline-flex", m), onMouseEnter: Y, onMouseLeave: G, onFocus: Y, onBlur: G, children: [
    r,
    N && b && typeof document < "u" ? Bt(
      /* @__PURE__ */ t(
        "div",
        {
          ref: x,
          role: "tooltip",
          style: { ...V, position: "fixed", top: j.top, left: j.left },
          className: s(
            "z-[140] max-w-[360px] rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[rgba(14,20,35,0.98)] px-3 py-2 text-left text-sm text-white shadow-[0_18px_44px_rgba(0,0,0,0.38)] backdrop-blur",
            f
          ),
          children: e
        }
      ),
      document.body
    ) : null
  ] });
}
export {
  En as AccentProvider,
  wr as Badge,
  wr as BadgeDefault,
  _n as Banner,
  _n as BannerDefault,
  ve as Button,
  ve as ButtonDefault,
  zn as Card,
  zn as CardDefault,
  On as ChipCard,
  On as ChipCardDefault,
  sr as DateTimeSelector,
  sr as DateTimeSelectorDefault,
  Yr as DynamicPanel,
  $n as GridLayout,
  $n as GridLayoutDefault,
  Be as Icon,
  Fn as Logger,
  Fn as LoggerDefault,
  Hn as Notification,
  bn as NotificationViewport,
  bn as NotificationViewportDefault,
  qn as Number,
  qn as NumberInput,
  qn as NumberInputDefault,
  Vn as Page,
  Zn as PageContainer,
  xn as PageHeader,
  Jn as RadioCard,
  Jn as RadioCardDefault,
  lr as SelectBox,
  lr as SelectBoxDefault,
  Gn as Sidebar,
  Gn as SidebarDefault,
  pn as Switch,
  pn as SwitchDefault,
  Un as Table,
  Un as TableDefault,
  gn as Text,
  Xn as TextArea,
  Xn as TextAreaDefault,
  gn as TextDefault,
  Qn as ToggleCard,
  Qn as ToggleCardDefault,
  Yn as Tooltip,
  Yn as TooltipDefault,
  yr as accentTokensToCssVars,
  br as defaultAccentKey,
  pr as defaultAccentPresets,
  xr as defaultAccentTokens,
  $r as useAccent,
  be as useAccentStyle
};
//# sourceMappingURL=index.js.map
