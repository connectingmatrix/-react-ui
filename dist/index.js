import { jsx as t, jsxs as c, Fragment as _t } from "react/jsx-runtime";
import Tt, { createContext as sr, useContext as lr, useMemo as X, forwardRef as Ge, useState as le, useRef as me, useEffect as q, useCallback as ke, useId as tt } from "react";
import { createPortal as dt } from "react-dom";
function l(...e) {
  return e.filter(Boolean).join(" ");
}
const zt = "default", Pt = {
  bgApp: "#0f1423",
  bgSurface: "#171d30",
  bgSurface2: "#1d2440",
  bgCard: "#222a48",
  bgCard2: "#262f52",
  bgPanel: "#171d30",
  bgPanel2: "#1d2440",
  bgInput: "#edf0f7",
  borderSoft: "rgba(255, 255, 255, 0.08)",
  borderStrong: "rgba(255, 255, 255, 0.14)",
  textPrimary: "#f5f7ff",
  textSecondary: "#c1c8dc",
  textTertiary: "#93a0bf",
  accent: "#34d4e8",
  accentStrong: "#13bfd5",
  accentSoft: "rgba(52, 212, 232, 0.14)",
  accentMuted: "rgba(52, 212, 232, 0.08)",
  accentBorder: "rgba(52, 212, 232, 0.35)",
  accentBorderSoft: "rgba(52, 212, 232, 0.28)",
  success: "#19d3a8",
  successSoft: "rgba(25, 211, 168, 0.14)",
  successBorder: "rgba(25, 211, 168, 0.35)",
  warning: "#f0b44f",
  warningSoft: "rgba(240, 180, 79, 0.14)",
  warningBorder: "rgba(240, 180, 79, 0.35)",
  danger: "#eb6a76",
  dangerSoft: "rgba(235, 106, 118, 0.14)",
  dangerBorder: "rgba(235, 106, 118, 0.35)",
  shadowPanel: "0 16px 36px rgba(4, 8, 26, 0.3)",
  radiusPanel: "10px",
  radiusControl: "8px"
}, cr = {
  default: {},
  accent: {},
  cyan: {},
  teal: {
    accent: "#19d3a8",
    accentStrong: "#11b891",
    accentSoft: "rgba(25, 211, 168, 0.14)",
    accentMuted: "rgba(25, 211, 168, 0.08)",
    accentBorder: "rgba(25, 211, 168, 0.35)",
    accentBorderSoft: "rgba(25, 211, 168, 0.28)"
  },
  success: {
    accent: "#19d3a8",
    accentStrong: "#11b891",
    accentSoft: "rgba(25, 211, 168, 0.14)",
    accentMuted: "rgba(25, 211, 168, 0.08)",
    accentBorder: "rgba(25, 211, 168, 0.35)",
    accentBorderSoft: "rgba(25, 211, 168, 0.28)"
  },
  warning: {
    accent: "#f0b44f",
    accentStrong: "#d99725",
    accentSoft: "rgba(240, 180, 79, 0.14)",
    accentMuted: "rgba(240, 180, 79, 0.08)",
    accentBorder: "rgba(240, 180, 79, 0.35)",
    accentBorderSoft: "rgba(240, 180, 79, 0.28)"
  },
  danger: {
    accent: "#eb6a76",
    accentStrong: "#d84d5c",
    accentSoft: "rgba(235, 106, 118, 0.14)",
    accentMuted: "rgba(235, 106, 118, 0.08)",
    accentBorder: "rgba(235, 106, 118, 0.35)",
    accentBorderSoft: "rgba(235, 106, 118, 0.28)"
  },
  neutral: {
    accent: "#c1c8dc",
    accentStrong: "#f5f7ff",
    accentSoft: "rgba(255, 255, 255, 0.08)",
    accentMuted: "rgba(255, 255, 255, 0.05)",
    accentBorder: "rgba(255, 255, 255, 0.16)",
    accentBorderSoft: "rgba(255, 255, 255, 0.10)"
  }
}, $t = sr(null);
function Ft(e, r, i) {
  return {
    ...Pt,
    ...cr[e] || {},
    ...(r == null ? void 0 : r[e]) || {},
    ...i || {}
  };
}
function Ht(e) {
  const r = { ...Pt, ...e };
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
    "--rui-success": r.success,
    "--rui-success-soft": r.successSoft,
    "--rui-success-border": r.successBorder,
    "--rui-warning": r.warning,
    "--rui-warning-soft": r.warningSoft,
    "--rui-warning-border": r.warningBorder,
    "--rui-danger": r.danger,
    "--rui-danger-soft": r.dangerSoft,
    "--rui-danger-border": r.dangerBorder,
    "--rui-shadow-panel": r.shadowPanel,
    "--rui-radius-panel": r.radiusPanel,
    "--rui-radius-control": r.radiusControl
  };
}
function or(e, r) {
  const i = lr($t), u = !!(i || e || r), a = (i == null ? void 0 : i.accentKey) ?? e ?? zt, o = X(
    () => Ft(a, i == null ? void 0 : i.accents, i != null && i.tokens ? { ...i.tokens, ...r } : r),
    [i == null ? void 0 : i.accents, i == null ? void 0 : i.tokens, a, r]
  ), s = X(() => u ? Ht(o) : void 0, [u, o]);
  return { accentKey: a, tokens: o, style: s };
}
function ce(e, r, i) {
  const u = or(e, i);
  return X(() => u.style ? { ...u.style, ...r } : r, [u.style, r]);
}
function Zr({ accentKey: e = zt, accents: r, tokens: i, children: u, className: a, style: o }) {
  const s = X(() => ({ accentKey: e, accents: r, tokens: i }), [e, r, i]), d = X(() => ({ ...Ht(Ft(e, r, i)), ...o }), [e, r, o, i]);
  return /* @__PURE__ */ t($t.Provider, { value: s, children: /* @__PURE__ */ t("div", { className: l("rui-theme", a), style: d, children: u }) });
}
const dr = {
  neutral: "border-[var(--rui-border-soft)] bg-white/[0.06] text-[var(--rui-text-secondary)]",
  accent: "border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] text-[var(--rui-accent)]",
  success: "border-[var(--rui-success-border)] bg-[var(--rui-success-soft)] text-[var(--rui-success)]",
  warning: "border-[var(--rui-warning-border)] bg-[var(--rui-warning-soft)] text-[var(--rui-warning)]",
  danger: "border-[var(--rui-danger-border)] bg-[var(--rui-danger-soft)] text-[var(--rui-danger)]",
  info: "border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] text-white"
};
function Ot({ children: e, tone: r = "neutral", className: i, accentKey: u, style: a, ...o }) {
  const s = ce(u, a);
  return /* @__PURE__ */ t(
    "span",
    {
      style: s,
      className: l("inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium leading-5", dr[r], i),
      ...o,
      children: e
    }
  );
}
const ur = {
  info: { bg: "rgba(52,212,232,0.10)", border: "rgba(52,212,232,0.25)", text: "white" },
  accent: { bg: "rgba(52,212,232,0.10)", border: "rgba(52,212,232,0.25)", text: "white" },
  success: { bg: "rgba(25,211,168,0.10)", border: "rgba(25,211,168,0.22)", text: "white" },
  warning: { bg: "rgba(240,180,79,0.10)", border: "rgba(240,180,79,0.22)", text: "white" },
  danger: { bg: "rgba(235,106,118,0.10)", border: "rgba(235,106,118,0.22)", text: "white" },
  neutral: { bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.10)", text: "white" }
};
function qr({
  tone: e = "info",
  title: r,
  children: i,
  actions: u,
  icon: a,
  className: o,
  contentClassName: s,
  titleClassName: d,
  actionsClassName: b,
  accentClassName: f,
  accentKey: w,
  accentColor: g,
  backgroundColor: N,
  borderColor: I,
  textColor: m,
  showToneBadge: S = !1
}) {
  const C = ur[e], A = {
    borderColor: I ?? C.border,
    background: N ?? C.bg,
    color: m ?? C.text,
    boxShadow: "0 16px 36px rgba(4, 8, 26, 0.22)",
    "--rui-banner-accent": g ?? I ?? C.border
  }, D = ce(w, A);
  return /* @__PURE__ */ c("section", { className: l("relative overflow-hidden rounded-[var(--rui-radius-panel)] border px-4 py-3", g && "pl-5", o), style: D, children: [
    g ? /* @__PURE__ */ t("div", { "aria-hidden": "true", className: l("absolute inset-y-0 left-0 w-1 bg-[var(--rui-banner-accent)]", f) }) : null,
    /* @__PURE__ */ c("div", { className: l("flex items-start gap-3", s), children: [
      a ? /* @__PURE__ */ t("div", { className: "mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-inherit", children: a }) : null,
      /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
        r ? /* @__PURE__ */ c("div", { className: l("mb-1 flex items-center gap-2 text-sm font-semibold", d), children: [
          r,
          S ? /* @__PURE__ */ t(Ot, { tone: e === "neutral" ? "neutral" : e === "accent" ? "accent" : e, children: e }) : null
        ] }) : null,
        /* @__PURE__ */ t("div", { className: "text-sm leading-6 opacity-90", children: i })
      ] }),
      u ? /* @__PURE__ */ t("div", { className: l("flex flex-shrink-0 items-center gap-2", b), children: u }) : null
    ] })
  ] });
}
const fr = {
  primary: "border border-[var(--rui-accent)] bg-[var(--rui-accent)] text-[#06111d] hover:border-[var(--rui-accent-strong)] hover:bg-[var(--rui-accent-strong)] focus-visible:ring-[var(--rui-accent)]",
  secondary: "border border-[var(--rui-accent-border-soft)] bg-[var(--rui-accent-muted)] text-white hover:bg-[var(--rui-accent-soft)] focus-visible:ring-[var(--rui-accent)]",
  outline: "border border-[var(--rui-border-strong)] bg-transparent text-white hover:border-[var(--rui-accent-border)] hover:bg-white/5 focus-visible:ring-[var(--rui-accent)]",
  ghost: "border border-transparent bg-transparent text-[var(--rui-text-secondary)] hover:bg-white/[0.06] hover:text-white focus-visible:ring-[var(--rui-accent)]",
  danger: "border border-[var(--rui-danger-border)] bg-[var(--rui-danger-soft)] text-white hover:bg-[var(--rui-danger-soft)] focus-visible:ring-[var(--rui-danger)]",
  success: "border border-[var(--rui-success-border)] bg-[var(--rui-success-soft)] text-white hover:bg-[var(--rui-success-soft)] focus-visible:ring-[var(--rui-success)]",
  warning: "border border-[var(--rui-warning-border)] bg-[var(--rui-warning-soft)] text-white hover:bg-[var(--rui-warning-soft)] focus-visible:ring-[var(--rui-warning)]",
  subtle: "border border-[var(--rui-border-soft)] bg-white/5 text-white hover:bg-white/10 focus-visible:ring-[var(--rui-accent)]",
  icon: "border border-[var(--rui-border-soft)] bg-white/5 text-[var(--rui-text-secondary)] hover:bg-white/10 hover:text-white focus-visible:ring-[var(--rui-accent)]"
}, hr = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-sm"
};
function mr() {
  return /* @__PURE__ */ c("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", className: "h-4 w-4 animate-spin", children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "9", fill: "none", stroke: "currentColor", strokeWidth: "2", opacity: "0.18" }),
    /* @__PURE__ */ t("path", { d: "M21 12a9 9 0 0 0-9-9", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
  ] });
}
const be = Ge(function({
  className: r,
  children: i,
  variant: u = "outline",
  size: a = "md",
  leftIcon: o,
  rightIcon: s,
  leftIconClassName: d,
  rightIconClassName: b,
  accentKey: f,
  loading: w = !1,
  fullWidth: g = !1,
  type: N = "button",
  disabled: I,
  style: m,
  ...S
}, C) {
  const A = I || w, D = ce(f, m);
  return /* @__PURE__ */ c(
    "button",
    {
      ref: C,
      type: N,
      disabled: A,
      "aria-busy": w || void 0,
      style: D,
      className: l(
        "inline-flex items-center justify-center gap-2 rounded-[var(--rui-radius-control)] font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
        fr[u],
        hr[a],
        g && "w-full",
        r
      ),
      ...S,
      children: [
        w ? /* @__PURE__ */ t(mr, {}) : o ? /* @__PURE__ */ t("span", { className: l("inline-flex items-center", d), children: o }) : null,
        /* @__PURE__ */ t("span", { className: "min-w-0 truncate", children: i }),
        s ? /* @__PURE__ */ t("span", { className: l("inline-flex items-center", b), children: s }) : null
      ]
    }
  );
}), jt = {
  neutral: "border-[var(--rui-border-soft)] bg-[linear-gradient(180deg,var(--rui-bg-surface-2),var(--rui-bg-card))]",
  accent: "border-[var(--rui-accent-border-soft)] bg-[linear-gradient(180deg,var(--rui-accent-muted),var(--rui-bg-card))]",
  success: "border-[var(--rui-success-border)] bg-[linear-gradient(180deg,var(--rui-success-soft),var(--rui-bg-card))]",
  warning: "border-[var(--rui-warning-border)] bg-[linear-gradient(180deg,var(--rui-warning-soft),var(--rui-bg-card))]",
  danger: "border-[var(--rui-danger-border)] bg-[linear-gradient(180deg,var(--rui-danger-soft),var(--rui-bg-card))]"
};
function Kr({
  title: e,
  value: r,
  helper: i,
  leading: u,
  trailing: a,
  tone: o = "neutral",
  selected: s = !1,
  disabled: d = !1,
  onClick: b,
  accentKey: f,
  style: w,
  className: g,
  contentClassName: N,
  titleClassName: I,
  valueClassName: m,
  helperClassName: S
}) {
  const C = !!b, A = ce(f, w);
  return C ? /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: b,
      disabled: d,
      "aria-pressed": s,
      style: A,
      className: l(
        "rounded-[var(--rui-radius-panel)] border p-4 text-left outline-none transition",
        jt[o],
        s && "border-[var(--rui-accent-border)] shadow-[0_0_0_1px_var(--rui-accent-muted)]",
        !d && "cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.36)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0",
        d && "cursor-not-allowed opacity-60",
        g
      ),
      children: /* @__PURE__ */ c("div", { className: l("flex h-full min-h-[104px] flex-col justify-between gap-3", N), children: [
        /* @__PURE__ */ c("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ c("div", { className: "min-w-0", children: [
            e ? /* @__PURE__ */ t("div", { className: l("text-xs uppercase tracking-[0.18em] text-[var(--rui-text-tertiary)]", I), children: e }) : null,
            r ? /* @__PURE__ */ t("div", { className: l("mt-2 text-2xl font-semibold text-white", m), children: r }) : null
          ] }),
          a ? /* @__PURE__ */ t("div", { className: "flex-shrink-0", children: a }) : null
        ] }),
        /* @__PURE__ */ c("div", { className: "flex items-end justify-between gap-3", children: [
          i ? /* @__PURE__ */ t("div", { className: l("text-sm text-[var(--rui-text-secondary)]", S), children: i }) : /* @__PURE__ */ t("span", {}),
          u ? /* @__PURE__ */ t("div", { className: "flex-shrink-0 text-[var(--rui-text-secondary)]", children: u }) : null
        ] })
      ] })
    }
  ) : /* @__PURE__ */ t(
    "div",
    {
      style: A,
      className: l(
        "rounded-[var(--rui-radius-panel)] border p-4 text-left outline-none transition",
        jt[o],
        s && "border-[var(--rui-accent-border)] shadow-[0_0_0_1px_var(--rui-accent-muted)]",
        g
      ),
      children: /* @__PURE__ */ c("div", { className: l("flex h-full min-h-[104px] flex-col justify-between gap-3", N), children: [
        /* @__PURE__ */ c("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ c("div", { className: "min-w-0", children: [
            e ? /* @__PURE__ */ t("div", { className: l("text-xs uppercase tracking-[0.18em] text-[var(--rui-text-tertiary)]", I), children: e }) : null,
            r ? /* @__PURE__ */ t("div", { className: l("mt-2 text-2xl font-semibold text-white", m), children: r }) : null
          ] }),
          a ? /* @__PURE__ */ t("div", { className: "flex-shrink-0", children: a }) : null
        ] }),
        /* @__PURE__ */ c("div", { className: "flex items-end justify-between gap-3", children: [
          i ? /* @__PURE__ */ t("div", { className: l("text-sm text-[var(--rui-text-secondary)]", S), children: i }) : /* @__PURE__ */ t("span", {}),
          u ? /* @__PURE__ */ t("div", { className: "flex-shrink-0 text-[var(--rui-text-secondary)]", children: u }) : null
        ] })
      ] })
    }
  );
}
function ve({ name: e, ...r }) {
  const i = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": !0,
    ...r
  };
  switch (e) {
    case "actions":
      return /* @__PURE__ */ c("svg", { ...i, children: [
        /* @__PURE__ */ t("circle", { cx: "5", cy: "6", r: "1.2" }),
        /* @__PURE__ */ t("circle", { cx: "5", cy: "12", r: "1.2" }),
        /* @__PURE__ */ t("circle", { cx: "5", cy: "18", r: "1.2" }),
        /* @__PURE__ */ t("circle", { cx: "12", cy: "6", r: "1.2" }),
        /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "1.2" }),
        /* @__PURE__ */ t("circle", { cx: "12", cy: "18", r: "1.2" })
      ] });
    case "bars":
      return /* @__PURE__ */ c("svg", { ...i, children: [
        /* @__PURE__ */ t("path", { d: "M5 7h14" }),
        /* @__PURE__ */ t("path", { d: "M5 12h10" }),
        /* @__PURE__ */ t("path", { d: "M5 17h14" })
      ] });
    case "check":
      return /* @__PURE__ */ t("svg", { ...i, children: /* @__PURE__ */ t("path", { d: "m5 12 4.2 4.2L19 6.8" }) });
    case "chevron-down":
      return /* @__PURE__ */ t("svg", { ...i, children: /* @__PURE__ */ t("path", { d: "m7 10 5 5 5-5" }) });
    case "chevron-right":
      return /* @__PURE__ */ t("svg", { ...i, children: /* @__PURE__ */ t("path", { d: "m9 6 6 6-6 6" }) });
    case "close":
      return /* @__PURE__ */ c("svg", { ...i, children: [
        /* @__PURE__ */ t("path", { d: "M6 6l12 12" }),
        /* @__PURE__ */ t("path", { d: "M18 6 6 18" })
      ] });
    case "filter":
      return /* @__PURE__ */ c("svg", { ...i, children: [
        /* @__PURE__ */ t("path", { d: "M4 6h16" }),
        /* @__PURE__ */ t("path", { d: "M7 12h10" }),
        /* @__PURE__ */ t("path", { d: "M10 18h4" })
      ] });
    case "grid":
      return /* @__PURE__ */ c("svg", { ...i, children: [
        /* @__PURE__ */ t("path", { d: "M4 4h7v7H4z" }),
        /* @__PURE__ */ t("path", { d: "M13 4h7v7h-7z" }),
        /* @__PURE__ */ t("path", { d: "M4 13h7v7H4z" }),
        /* @__PURE__ */ t("path", { d: "M13 13h7v7h-7z" })
      ] });
    case "info":
      return /* @__PURE__ */ c("svg", { ...i, children: [
        /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "9" }),
        /* @__PURE__ */ t("path", { d: "M12 11v5" }),
        /* @__PURE__ */ t("path", { d: "M12 8h.01" })
      ] });
    case "maximize":
      return /* @__PURE__ */ c("svg", { ...i, children: [
        /* @__PURE__ */ t("path", { d: "M8 4H4v4" }),
        /* @__PURE__ */ t("path", { d: "M16 4h4v4" }),
        /* @__PURE__ */ t("path", { d: "M20 16v4h-4" }),
        /* @__PURE__ */ t("path", { d: "M4 16v4h4" })
      ] });
    case "minimize":
      return /* @__PURE__ */ c("svg", { ...i, children: [
        /* @__PURE__ */ t("path", { d: "M8 4v4H4" }),
        /* @__PURE__ */ t("path", { d: "M16 4v4h4" }),
        /* @__PURE__ */ t("path", { d: "M20 16h-4v4" }),
        /* @__PURE__ */ t("path", { d: "M4 16h4v4" })
      ] });
    case "minus":
      return /* @__PURE__ */ t("svg", { ...i, children: /* @__PURE__ */ t("path", { d: "M6 12h12" }) });
    case "panel":
      return /* @__PURE__ */ c("svg", { ...i, children: [
        /* @__PURE__ */ t("path", { d: "M5 5h14v14H5z" }),
        /* @__PURE__ */ t("path", { d: "M5 9h14" })
      ] });
    case "refresh":
      return /* @__PURE__ */ c("svg", { ...i, children: [
        /* @__PURE__ */ t("path", { d: "M20 7v5h-5" }),
        /* @__PURE__ */ t("path", { d: "M4 17v-5h5" }),
        /* @__PURE__ */ t("path", { d: "M18.4 9A7 7 0 0 0 6.2 6.8L4 12" }),
        /* @__PURE__ */ t("path", { d: "M5.6 15A7 7 0 0 0 17.8 17.2L20 12" })
      ] });
    case "search":
      return /* @__PURE__ */ c("svg", { ...i, children: [
        /* @__PURE__ */ t("circle", { cx: "11", cy: "11", r: "6" }),
        /* @__PURE__ */ t("path", { d: "m16 16 4 4" })
      ] });
    default:
      return null;
  }
}
const br = {
  third: "xl:col-span-4",
  half: "xl:col-span-6",
  full: "xl:col-span-12"
};
function Gt(e) {
  return e.map((r, i) => ({
    id: r.id,
    order: i,
    width: r.defaultWidth || "full",
    collapsed: !1,
    fullscreen: !1
  }));
}
function ot(e, r) {
  const i = Gt(e);
  if (!(r != null && r.length)) return i;
  const u = new Map(r.map((a) => [a.id, a]));
  return e.map((a, o) => {
    const s = u.get(a.id);
    return {
      id: a.id,
      order: (s == null ? void 0 : s.order) ?? o,
      width: (s == null ? void 0 : s.width) ?? a.defaultWidth ?? "full",
      collapsed: !!(s != null && s.collapsed),
      fullscreen: !!(s != null && s.fullscreen)
    };
  }).sort((a, o) => a.order - o.order).map((a, o) => ({ ...a, order: o }));
}
function Jt(e, r = "rui:layout") {
  return `${r}:${e}`;
}
function pr(e, r) {
  if (typeof window > "u") return null;
  try {
    const i = window.localStorage.getItem(Jt(e, r));
    return i ? JSON.parse(i) : null;
  } catch {
    return null;
  }
}
function xr(e, r, i) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(Jt(e, i), JSON.stringify(r));
    } catch {
    }
}
function gr({
  panel: e,
  state: r,
  allowMovement: i = !0,
  allowResize: u = !0,
  allowCollapse: a = !0,
  allowFullscreen: o = !0,
  onToggleCollapse: s,
  onToggleFullscreen: d,
  onReset: b,
  onCycleWidth: f,
  onDragStart: w,
  onDragOver: g,
  onDragEnter: N,
  onDrop: I,
  onDragEnd: m,
  renderActions: S,
  renderHeader: C,
  renderPanelControls: A,
  renderMoveHandle: D,
  renderResizeButton: te,
  renderCollapseButton: Q,
  renderResetButton: K,
  renderFullscreenButton: Y,
  accentKey: O,
  style: P,
  className: _,
  headerClassName: F,
  bodyClassName: E,
  actionsClassName: R
}) {
  const ee = !!r.collapsed, G = !!r.fullscreen, U = e.description ?? e.subtitle, W = e.actions ?? e.action, re = e.content ?? e.children, T = ce(O, P), je = {
    type: "button",
    draggable: !G,
    onDragStart: w,
    onDragEnd: m,
    className: "cursor-grab rounded border border-white/10 p-1 text-white/55 hover:bg-white/5 hover:text-white active:cursor-grabbing",
    title: "Drag panel"
  }, M = i ? (D == null ? void 0 : D({
    panel: e,
    state: r,
    buttonProps: je,
    defaultButton: /* @__PURE__ */ t("button", { ...je, children: /* @__PURE__ */ t(ve, { name: "actions", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ t("button", { ...je, children: /* @__PURE__ */ t(ve, { name: "actions", className: "h-4 w-4" }) }) : null, $ = { title: "Cycle width", onClick: f }, ae = u ? (te == null ? void 0 : te({
    panel: e,
    state: r,
    buttonProps: $,
    defaultButton: /* @__PURE__ */ t(be, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...$, children: /* @__PURE__ */ t(ve, { name: "grid", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ t(be, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...$, children: /* @__PURE__ */ t(ve, { name: "grid", className: "h-4 w-4" }) }) : null, oe = { title: ee ? "Restore panel" : "Collapse panel", onClick: s }, we = a ? (Q == null ? void 0 : Q({
    panel: e,
    state: r,
    buttonProps: oe,
    defaultButton: /* @__PURE__ */ t(be, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...oe, children: /* @__PURE__ */ t(ve, { name: ee ? "panel" : "minus", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ t(be, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...oe, children: /* @__PURE__ */ t(ve, { name: ee ? "panel" : "minus", className: "h-4 w-4" }) }) : null, pe = { title: "Restore default size", onClick: b }, de = u ? (K == null ? void 0 : K({
    panel: e,
    state: r,
    buttonProps: pe,
    defaultButton: /* @__PURE__ */ t(be, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...pe, children: /* @__PURE__ */ t(ve, { name: "refresh", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ t(be, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...pe, children: /* @__PURE__ */ t(ve, { name: "refresh", className: "h-4 w-4" }) }) : null, H = { title: G ? "Exit fullscreen" : "Fullscreen", onClick: d }, Le = o ? (Y == null ? void 0 : Y({
    panel: e,
    state: r,
    buttonProps: H,
    defaultButton: /* @__PURE__ */ t(be, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...H, children: /* @__PURE__ */ t(ve, { name: G ? "minimize" : "maximize", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ t(be, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...H, children: /* @__PURE__ */ t(ve, { name: G ? "minimize" : "maximize", className: "h-4 w-4" }) }) : null, xe = /* @__PURE__ */ c(_t, { children: [
    W ? /* @__PURE__ */ t("div", { className: "hidden lg:block", children: W }) : null,
    S == null ? void 0 : S(e, r),
    ae,
    we,
    de,
    Le
  ] }), Ce = (A == null ? void 0 : A({ panel: e, state: r, controls: xe })) ?? xe;
  return /* @__PURE__ */ t(
    "div",
    {
      onDragOver: g,
      onDragEnter: N,
      onDrop: I,
      className: l("min-w-0", !G && "col-span-12", !G && br[r.width || "full"], G && "fixed inset-4 z-50", _),
      style: T,
      children: /* @__PURE__ */ c("section", { className: l("h-full overflow-hidden rounded-panel rui-panel", e.className, G && "h-[calc(100vh-2rem)]"), children: [
        C ? C(e, r) : /* @__PURE__ */ c("div", { className: l("flex items-start justify-between gap-3 border-b border-white/8 bg-black/10 px-4 py-4", e.headerClassName, F), children: [
          /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
            M,
            /* @__PURE__ */ c("div", { className: "min-w-0", children: [
              /* @__PURE__ */ t("div", { className: "truncate text-base font-semibold text-white", children: e.title }),
              U ? /* @__PURE__ */ t("div", { className: "mt-1 text-sm text-white/60", children: U }) : null
            ] })
          ] }) }),
          /* @__PURE__ */ t("div", { className: l("flex shrink-0 items-center gap-2", R), children: Ce })
        ] }),
        ee ? null : /* @__PURE__ */ t("div", { className: l("min-h-0 p-5", e.bodyClassName, E, G && "h-[calc(100%-76px)] overflow-auto rui-scrollbar"), children: re })
      ] })
    }
  );
}
function en({
  panels: e,
  layout: r,
  defaultLayout: i,
  onLayoutChange: u,
  persistenceKey: a,
  storageNamespace: o,
  persistenceAdapter: s,
  allowMovement: d = !0,
  allowResize: b = !0,
  allowCollapse: f = !0,
  allowFullscreen: w = !0,
  renderPanelActions: g,
  renderHeader: N,
  renderPanelControls: I,
  renderMoveHandle: m,
  renderResizeButton: S,
  renderCollapseButton: C,
  renderResetButton: A,
  renderFullscreenButton: D,
  accentKey: te,
  style: Q,
  className: K,
  panelClassName: Y,
  panelHeaderClassName: O,
  panelBodyClassName: P,
  panelActionsClassName: _
}) {
  const [F, E] = le(
    () => ot(e, i || (a ? pr(a, o) : null))
  ), R = me(null), [ee, G] = le(null), [U, W] = le(() => !a || !s), re = r !== void 0, T = X(() => ot(e, re ? r : F), [re, F, r, e]), je = X(() => new Map(e.map((k) => [k.id, k])), [e]), M = ce(te, Q), $ = me(e), ae = me(T), oe = me(re), we = me(u);
  q(() => {
    $.current = e;
  }, [e]), q(() => {
    ae.current = T;
  }, [T]), q(() => {
    oe.current = re;
  }, [re]), q(() => {
    we.current = u;
  }, [u]);
  const pe = ke((k) => {
    var V;
    const Z = typeof k == "function" ? k(ae.current) : k, y = ot($.current, Z);
    oe.current || E(y), (V = we.current) == null || V.call(we, y);
  }, []);
  q(() => {
    let k = !1;
    if (!a || !s) {
      W(!0);
      return;
    }
    return W(!1), Promise.resolve(s.load(a)).then((Z) => {
      k || (Z && pe(Z), W(!0));
    }).catch(() => {
      k || W(!1);
    }), () => {
      k = !0;
    };
  }, [s, a, pe]), q(() => {
    a && (s && !U || (xr(a, T, o), s && Promise.resolve(s.save(a, T)).catch(() => {
    })));
  }, [U, T, s, a, o]);
  const de = (k) => {
    const Z = Gt(e).find((y) => y.id === k);
    Z && pe((y) => y.map((V) => V.id === k ? { ...Z, order: V.order } : V));
  }, H = (k) => {
    pe(
      (Z) => Z.map((y) => {
        if (y.id !== k) return y;
        const V = y.width === "third" ? "half" : y.width === "half" ? "full" : "third";
        return { ...y, width: V, collapsed: !1 };
      })
    );
  }, Le = (k) => {
    pe((Z) => Z.map((y) => y.id === k ? { ...y, collapsed: !y.collapsed, fullscreen: y.collapsed ? y.fullscreen : !1 } : y));
  }, xe = (k) => {
    pe((Z) => Z.map((y) => ({ ...y, collapsed: y.id === k ? !1 : y.collapsed, fullscreen: y.id === k ? !y.fullscreen : !1 })));
  }, Ce = (k, Z) => {
    !d || !k || k === Z || pe((y) => {
      const V = ot(e, y), fe = V.findIndex((ne) => ne.id === k), ye = V.findIndex((ne) => ne.id === Z);
      if (fe < 0 || ye < 0) return y;
      const [se] = V.splice(fe, 1);
      return V.splice(ye, 0, se), V.map((ne, ue) => ({ ...ne, order: ue }));
    });
  }, De = T.find((k) => k.fullscreen), We = (k) => {
    const Z = je.get(k.id);
    return Z ? /* @__PURE__ */ t(
      gr,
      {
        panel: Z,
        state: k,
        allowMovement: d,
        allowResize: b,
        allowCollapse: f,
        allowFullscreen: w,
        className: Y,
        headerClassName: O,
        bodyClassName: P,
        actionsClassName: _,
        renderActions: g,
        renderHeader: N,
        renderPanelControls: I,
        renderMoveHandle: m,
        renderResizeButton: S,
        renderCollapseButton: C,
        renderResetButton: A,
        renderFullscreenButton: D,
        accentKey: te,
        onToggleCollapse: () => Le(k.id),
        onToggleFullscreen: () => xe(k.id),
        onReset: () => de(k.id),
        onCycleWidth: () => H(k.id),
        onDragStart: (y) => {
          d && (R.current = k.id, G(k.id), y.dataTransfer.effectAllowed = "move", y.dataTransfer.setData("text/plain", k.id), y.dataTransfer.setData("application/x-rui-panel-id", k.id));
        },
        onDragOver: (y) => {
          R.current && (y.preventDefault(), y.dataTransfer.dropEffect = "move");
        },
        onDragEnter: (y) => {
          R.current && y.preventDefault();
        },
        onDrop: (y) => {
          y.preventDefault();
          const V = y.dataTransfer.getData("application/x-rui-panel-id") || y.dataTransfer.getData("text/plain") || R.current;
          V && Ce(V, k.id), R.current = null, G(null);
        },
        onDragEnd: () => {
          R.current = null, G(null);
        }
      },
      k.id
    ) : null;
  };
  return De ? /* @__PURE__ */ c(_t, { children: [
    /* @__PURE__ */ t("div", { className: "fixed inset-0 z-40 bg-[#050816]/80 backdrop-blur-sm" }),
    We(De)
  ] }) : /* @__PURE__ */ t("div", { className: l("rui-theme grid grid-cols-12 gap-5", K, ee && "select-none"), style: M, children: T.map(We) });
}
const vr = ["ALL", "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "SUCCESS"].map((e) => ({ label: e, value: e })), wr = [{ label: "All categories", value: "ALL" }];
function yr(e) {
  if (!e) return "";
  const r = e instanceof Date ? e : new Date(e);
  return Number.isNaN(r.getTime()) ? String(e) : r.toLocaleString();
}
function Nr(e) {
  return !e || typeof e == "object" && !Object.keys(e).length ? "" : typeof e == "string" ? e : JSON.stringify(e, null, 2);
}
function Sr(e) {
  return e === "ERROR" ? "text-[var(--rui-danger)]" : e === "WARN" || e === "WARNING" ? "text-[var(--rui-warning)]" : e === "SUCCESS" ? "text-[var(--rui-success)]" : e === "INFO" ? "text-[var(--rui-accent)]" : "text-white/45";
}
function kr(e) {
  return e === "ERROR" ? "close" : e === "WARN" || e === "WARNING" ? "info" : e === "SUCCESS" ? "check" : e === "INFO" ? "info" : "actions";
}
function Cr(e, r) {
  const i = [...e];
  return i.sort((u, a) => new Date(u.createdAt ?? u.timestamp ?? 0).getTime() - new Date(a.createdAt ?? a.timestamp ?? 0).getTime()), r ? i : i.reverse();
}
function tn({
  entries: e,
  logs: r,
  levels: i = vr,
  categories: u = wr,
  defaultLevel: a = "ALL",
  defaultCategory: o = "ALL",
  defaultSearch: s = "",
  level: d,
  category: b,
  search: f,
  autoScroll: w,
  onLevelChange: g,
  onCategoryChange: N,
  onSearchChange: I,
  onAutoScrollChange: m,
  onFiltersChange: S,
  searchPlaceholder: C = "Search logs",
  heightClassName: A = "max-h-[360px]",
  title: D = "Log stream",
  description: te,
  subtitle: Q,
  action: K,
  onClear: Y,
  trailing: O = !0,
  autoScrollDefault: P = !0,
  showHeader: _ = !0,
  showToolbar: F = !0,
  showLevelFilter: E = !0,
  showCategoryFilter: R = !0,
  emptyContent: ee = "No log lines matched the current filters.",
  formatTimestamp: G,
  renderMetadata: U,
  renderPayload: W,
  getSearchText: re,
  accentKey: T,
  style: je,
  className: M,
  classNames: $
}) {
  const ae = X(() => e ?? r ?? [], [e, r]), [oe, we] = le(a), [pe, de] = le(o), [H, Le] = le(s), [xe, Ce] = le(P), [De, We] = le(() => /* @__PURE__ */ new Set()), k = me(null), Z = te ?? Q, y = ce(T, je), V = d ?? oe, fe = b ?? pe, ye = f ?? H, se = w ?? xe, ne = ke(
    (x) => {
      S == null || S({
        level: V,
        category: fe,
        search: ye,
        autoScroll: se,
        ...x
      });
    },
    [se, fe, V, S, ye]
  ), ue = ke(
    (x) => {
      d === void 0 && we(x), g == null || g(x), ne({ level: x });
    },
    [d, ne, g]
  ), _e = ke(
    (x) => {
      b === void 0 && de(x), N == null || N(x), ne({ category: x });
    },
    [b, ne, N]
  ), Ue = ke(
    (x) => {
      f === void 0 && Le(x), I == null || I(x), ne({ search: x });
    },
    [f, ne, I]
  ), Ve = ke(
    (x) => {
      w === void 0 && Ce(x), m == null || m(x), ne({ autoScroll: x });
    },
    [w, ne, m]
  );
  q(() => {
    d === void 0 && we(a);
  }, [d, a]), q(() => {
    b === void 0 && de(o);
  }, [b, o]), q(() => {
    f === void 0 && Le(s);
  }, [f, s]), q(() => {
    w === void 0 && Ce(P);
  }, [P, w]);
  const Ae = X(() => {
    const x = ye.trim().toLowerCase(), he = ae.filter((ie) => E && V !== "ALL" && ie.level !== V || R && fe !== "ALL" && ie.category !== fe ? !1 : x ? ((re == null ? void 0 : re(ie)) || [ie.message, ie.source, ie.category, ie.level, JSON.stringify(ie.metadata || {}), JSON.stringify(ie.payload || {})].join(" ").toLowerCase()).toLowerCase().includes(x) : !0);
    return Cr(he, O);
  }, [fe, re, V, ae, ye, R, E, O]);
  q(() => {
    if (!se || !O || !k.current) return;
    const x = k.current, he = window.requestAnimationFrame(() => {
      x.scrollTop = x.scrollHeight;
    });
    return () => window.cancelAnimationFrame(he);
  }, [se, Ae, O]), q(() => {
    We((x) => {
      const he = /* @__PURE__ */ new Set();
      for (const ie of x)
        Ae.some((h) => h.id === ie) && he.add(ie);
      return he;
    });
  }, [Ae]);
  const Fe = (x) => {
    We((he) => {
      const ie = new Set(he);
      return ie.has(x) ? ie.delete(x) : ie.add(x), ie;
    });
  }, He = () => {
    Ue(s), ue(a), _e(o);
  };
  return /* @__PURE__ */ c("div", { className: l("rui-theme flex h-full min-h-0 min-w-0 flex-col gap-3", M), style: y, children: [
    _ ? /* @__PURE__ */ c("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ t("h2", { className: "text-lg font-semibold text-white", children: D }),
        Z ? /* @__PURE__ */ t("p", { className: "mt-1 text-sm text-white/60", children: Z }) : null
      ] }),
      K
    ] }) : null,
    F ? /* @__PURE__ */ c("div", { className: l("flex min-w-0 shrink-0 flex-wrap items-center gap-2", $ == null ? void 0 : $.toolbar), children: [
      /* @__PURE__ */ c("div", { className: "relative min-w-[160px] flex-[1_1_220px] lg:max-w-[320px]", children: [
        /* @__PURE__ */ t("span", { className: "pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#737a98]", children: /* @__PURE__ */ t(ve, { name: "search", className: "h-4 w-4" }) }),
        /* @__PURE__ */ t(
          "input",
          {
            className: "h-9 w-full rounded-[8px] pl-10 pr-3 text-sm outline-none rui-input",
            value: ye,
            onChange: (x) => Ue(x.target.value),
            placeholder: C
          }
        )
      ] }),
      E ? /* @__PURE__ */ t("select", { className: "h-9 min-w-[112px] rounded-[8px] px-3 text-sm outline-none rui-input", value: V, onChange: (x) => ue(x.target.value), children: i.map((x) => /* @__PURE__ */ t("option", { value: x.value, children: x.label }, x.value)) }) : null,
      R ? /* @__PURE__ */ t("select", { className: "h-9 min-w-[140px] rounded-[8px] px-3 text-sm outline-none rui-input", value: fe, onChange: (x) => _e(x.target.value), children: u.map((x) => /* @__PURE__ */ t("option", { value: x.value, children: x.label }, x.value)) }) : null,
      _ ? null : K,
      /* @__PURE__ */ t(be, { variant: "ghost", size: "sm", onClick: () => Ve(!se), children: se ? "Trailing on" : "Trailing off" }),
      Y ? /* @__PURE__ */ t(be, { variant: "ghost", size: "sm", onClick: () => void Y(), children: "Clear logs" }) : null,
      /* @__PURE__ */ t(be, { variant: "ghost", size: "sm", onClick: He, children: "Clear filters" })
    ] }) : null,
    /* @__PURE__ */ t("div", { className: l("min-w-0 flex-1 overflow-hidden rounded-[10px] border border-white/8 bg-[#0b1022]", $ == null ? void 0 : $.viewport), children: /* @__PURE__ */ t("div", { ref: k, className: l(A, "min-h-0 overflow-auto select-text rui-scrollbar [scrollbar-gutter:stable]"), children: Ae.length ? Ae.map((x) => {
      const he = W ? W(x) : Nr(x.payload), ie = !!he, h = De.has(x.id);
      return /* @__PURE__ */ c(Tt.Fragment, { children: [
        /* @__PURE__ */ t("div", { className: l("border-b border-white/6 px-3 py-2 font-mono text-xs last:border-none", $ == null ? void 0 : $.entry), children: /* @__PURE__ */ c("div", { className: "grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-3", children: [
          /* @__PURE__ */ c("div", { className: "min-w-0", children: [
            /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-white/80", children: [
              /* @__PURE__ */ t("span", { className: "shrink-0 text-white/45", children: G ? G(x) : yr(x.createdAt ?? x.timestamp) }),
              x.source || x.category ? /* @__PURE__ */ t("span", { className: "shrink-0 text-white/50", children: [x.source, x.category].filter(Boolean).join("/") }) : null,
              U ? U(x) : Object.entries(x.metadata || {}).map(([B, J]) => /* @__PURE__ */ c("span", { className: "shrink-0 text-white/35", children: [
                "[",
                J,
                "]"
              ] }, B)),
              /* @__PURE__ */ t("span", { className: l("shrink-0", Sr(x.level)), title: x.level, children: /* @__PURE__ */ t(ve, { name: kr(x.level), className: "h-4 w-4" }) })
            ] }),
            /* @__PURE__ */ t("div", { className: "mt-1 min-w-0 whitespace-pre-wrap break-words text-white/90", children: x.message })
          ] }),
          /* @__PURE__ */ t("div", { className: "shrink-0", children: ie ? /* @__PURE__ */ t(
            be,
            {
              variant: "ghost",
              size: "sm",
              className: "h-7 px-2 text-[11px]",
              leftIcon: /* @__PURE__ */ t(ve, { name: "info", className: "h-4 w-4" }),
              onClick: () => Fe(x.id),
              children: h ? "Hide payload" : "View payload"
            }
          ) : /* @__PURE__ */ t("span", { className: "inline-flex h-7 items-center text-white/30", children: "-" }) })
        ] }) }),
        h && ie ? /* @__PURE__ */ t("div", { className: "border-b border-white/6 bg-black/20 px-3 py-3 last:border-none", children: typeof he == "string" ? /* @__PURE__ */ t(
          "pre",
          {
            className: l(
              "overflow-x-auto whitespace-pre-wrap break-words rounded-[8px] border border-white/8 bg-[#070b18] p-3 font-mono text-[11px] leading-5 text-white/75 select-text",
              $ == null ? void 0 : $.payload
            ),
            children: he
          }
        ) : /* @__PURE__ */ t("div", { className: $ == null ? void 0 : $.payload, children: he }) }) : null
      ] }, x.id);
    }) : /* @__PURE__ */ t("div", { className: "flex h-full min-h-[220px] items-center justify-center px-4 py-8 text-center text-sm text-white/55", children: ee }) }) })
  ] });
}
const Ir = {
  "top-right": "right-4 top-4",
  "top-left": "left-4 top-4",
  "bottom-right": "right-4 bottom-4",
  "bottom-left": "left-4 bottom-4"
};
function Br({
  items: e,
  onDismiss: r,
  placement: i = "top-right",
  accentKey: u,
  style: a,
  className: o,
  itemClassName: s,
  titleClassName: d,
  messageClassName: b,
  actionsClassName: f
}) {
  const w = ce(u, a);
  return q(() => {
    if (typeof window > "u" || !r) return;
    const g = e.filter((N) => N.timeout !== null).map((N) => window.setTimeout(() => r(N.id), N.timeout ?? 4200));
    return () => g.forEach((N) => window.clearTimeout(N));
  }, [e, r]), typeof document > "u" ? null : dt(
    /* @__PURE__ */ t("div", { className: l("pointer-events-none fixed z-[220] flex w-[min(92vw,380px)] flex-col gap-3", Ir[i], o), style: w, children: e.map((g) => /* @__PURE__ */ c(
      "div",
      {
        className: l(
          "pointer-events-auto rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-surface)] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.36)]",
          s
        ),
        children: [
          /* @__PURE__ */ c("div", { className: "mb-2 flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ t(Ot, { tone: g.tone ?? "neutral", children: g.tone ?? "neutral" }),
            r ? /* @__PURE__ */ t(be, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", "aria-label": "Dismiss notification", onClick: () => r(g.id), children: /* @__PURE__ */ t("span", { "aria-hidden": "true", children: "×" }) }) : null
          ] }),
          /* @__PURE__ */ t("div", { className: l("text-sm font-semibold text-white", d), children: g.title }),
          g.message ? /* @__PURE__ */ t("div", { className: l("mt-1 text-sm text-[var(--rui-text-secondary)]", b), children: g.message }) : null,
          g.actions ? /* @__PURE__ */ t("div", { className: l("mt-3 flex flex-wrap gap-2", f), children: g.actions }) : null
        ]
      },
      g.id
    )) }),
    document.body
  );
}
const rn = Br;
function nn({
  title: e,
  pageName: r,
  description: i,
  actions: u,
  actionButtons: a,
  sidebar: o,
  topbar: s,
  footer: d,
  children: b,
  accentKey: f,
  style: w,
  className: g,
  headerClassName: N,
  contentClassName: I,
  sidebarClassName: m
}) {
  const S = e ?? r, C = u ?? a, A = ce(f, w);
  return /* @__PURE__ */ c("div", { className: l("rui-theme min-h-screen bg-[var(--rui-bg-app)] text-[var(--rui-text-main)]", g), style: A, children: [
    s,
    /* @__PURE__ */ c("div", { className: l("grid gap-5 px-4 py-5", !!o && "xl:grid-cols-[minmax(84px,auto)_minmax(0,1fr)]"), children: [
      o ? /* @__PURE__ */ t("aside", { className: l("min-w-0", m), children: o }) : null,
      /* @__PURE__ */ c("main", { className: "min-w-0", children: [
        S || i || C ? /* @__PURE__ */ t(Mr, { title: S, description: i, actions: C, className: N }) : null,
        /* @__PURE__ */ t("div", { className: l("mt-5 min-w-0", I), children: b }),
        d ? /* @__PURE__ */ t("footer", { className: "mt-5", children: d }) : null
      ] })
    ] })
  ] });
}
function Mr({ title: e, pageName: r, description: i, subtitle: u, actions: a, actionButtons: o, children: s, accentKey: d, style: b, className: f }) {
  const w = e ?? r, g = i ?? u, N = a ?? o, I = ce(d, b);
  return /* @__PURE__ */ c("div", { className: l("flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between", f), style: I, children: [
    /* @__PURE__ */ c("div", { className: "min-w-0", children: [
      w ? /* @__PURE__ */ t("h1", { className: "text-[28px] font-semibold text-white", children: w }) : null,
      g ? /* @__PURE__ */ t("p", { className: "mt-2 max-w-3xl text-sm text-white/70", children: g }) : null,
      s
    ] }),
    N ? /* @__PURE__ */ t("div", { className: "flex flex-wrap items-center gap-3", children: N }) : null
  ] });
}
function an({ children: e, accentKey: r, style: i, className: u }) {
  const a = ce(r, i);
  return /* @__PURE__ */ t("div", { className: l("rui-theme space-y-5 px-4 py-5", u), style: a, children: e });
}
function sn({
  items: e,
  header: r,
  footer: i,
  activeId: u,
  onSelect: a,
  children: o,
  accentKey: s,
  style: d,
  className: b,
  itemClassName: f,
  activeItemClassName: w,
  headerClassName: g,
  footerClassName: N
}) {
  const I = ce(s, d);
  return /* @__PURE__ */ c(
    "aside",
    {
      className: l(
        "rui-theme flex min-w-[220px] flex-col gap-3 rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-surface)] p-3",
        b
      ),
      style: I,
      children: [
        r ? /* @__PURE__ */ t("div", { className: l("px-2 py-1", g), children: r }) : null,
        e != null && e.length ? /* @__PURE__ */ t("nav", { className: "flex flex-col gap-1", "aria-label": "Sidebar", children: e.map((m) => {
          const S = m.active ?? m.id === u;
          return /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              disabled: m.disabled,
              "aria-current": S ? "page" : void 0,
              onClick: () => {
                var C;
                (C = m.onSelect) == null || C.call(m, m.id), a == null || a(m.id, m);
              },
              className: l(
                "flex w-full items-start gap-3 rounded-[8px] px-3 py-2 text-left text-sm text-[var(--rui-text-secondary)] transition hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-50",
                S && "border border-[var(--rui-accent-border)] bg-[var(--rui-accent-muted)] text-white",
                f,
                S && w
              ),
              children: [
                m.icon ? /* @__PURE__ */ t("span", { className: "mt-0.5 flex-shrink-0 text-[var(--rui-accent)]", children: m.icon }) : null,
                /* @__PURE__ */ c("span", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ t("span", { className: "block font-medium", children: m.label }),
                  m.description ? /* @__PURE__ */ t("span", { className: "mt-0.5 block text-xs text-[var(--rui-text-tertiary)]", children: m.description }) : null
                ] }),
                m.badge ? /* @__PURE__ */ t("span", { className: "flex-shrink-0", children: m.badge }) : null
              ]
            },
            m.id
          );
        }) }) : null,
        o,
        i ? /* @__PURE__ */ t("div", { className: l("mt-auto px-2 py-1", N), children: i }) : null
      ]
    }
  );
}
function Je({ value: e, defaultValue: r, onChange: i }) {
  const [u, a] = le(r), o = e !== void 0, s = o ? e : u, d = ke(
    (b) => {
      const f = typeof b == "function" ? b(s) : b;
      o || a(f), i == null || i(f);
    },
    [o, s, i]
  );
  return [s, d];
}
const ln = Ge(function({
  checked: r,
  defaultChecked: i = !1,
  onCheckedChange: u,
  name: a,
  value: o,
  title: s,
  description: d,
  helper: b,
  leading: f,
  trailing: w,
  disabled: g,
  accentKey: N,
  style: I,
  className: m,
  contentClassName: S,
  titleClassName: C,
  descriptionClassName: A,
  helperClassName: D,
  indicatorClassName: te
}, Q) {
  const [K, Y] = Je({
    value: r,
    defaultValue: i,
    onChange: u
  }), O = ce(N, I);
  return /* @__PURE__ */ c(
    "label",
    {
      ref: Q,
      style: O,
      className: l(
        "group flex cursor-pointer items-start gap-3 rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[linear-gradient(180deg,var(--rui-bg-surface-2),var(--rui-bg-card))] p-4 transition hover:border-[var(--rui-accent-border-soft)] hover:shadow-[0_18px_44px_rgba(0,0,0,0.30)]",
        K && "border-[var(--rui-accent-border)] shadow-[0_0_0_1px_var(--rui-accent-muted)]",
        g && "cursor-not-allowed opacity-60 hover:border-[var(--rui-border-soft)] hover:shadow-none",
        m
      ),
      children: [
        /* @__PURE__ */ t(
          "input",
          {
            type: "radio",
            name: a,
            value: o,
            checked: K,
            onChange: (P) => {
              g || Y(P.target.checked);
            },
            disabled: g,
            className: "sr-only"
          }
        ),
        /* @__PURE__ */ t(
          "span",
          {
            className: l(
              "mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border transition",
              K ? "border-[var(--rui-accent)] bg-[var(--rui-accent)]" : "border-[var(--rui-border-strong)] bg-transparent",
              te
            ),
            "aria-hidden": "true",
            children: /* @__PURE__ */ t("span", { className: l("h-2.5 w-2.5 rounded-full bg-[#08111d] transition", !K && "scale-0") })
          }
        ),
        /* @__PURE__ */ c("div", { className: l("min-w-0 flex-1", S), children: [
          /* @__PURE__ */ c("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ c("div", { className: "min-w-0", children: [
              s ? /* @__PURE__ */ t("div", { className: l("text-sm font-semibold text-white", C), children: s }) : null,
              d ? /* @__PURE__ */ t("div", { className: l("mt-1 text-sm text-[var(--rui-text-secondary)]", A), children: d }) : null
            ] }),
            w ? /* @__PURE__ */ t("div", { className: "flex-shrink-0", children: w }) : null
          ] }),
          b || f ? /* @__PURE__ */ c("div", { className: "mt-3 flex items-end justify-between gap-3", children: [
            b ? /* @__PURE__ */ t("div", { className: l("text-sm text-[var(--rui-text-tertiary)]", D), children: b }) : /* @__PURE__ */ t("span", {}),
            f ? /* @__PURE__ */ t("div", { className: "flex-shrink-0 text-[var(--rui-text-secondary)]", children: f }) : null
          ] }) : null
        ] })
      ]
    }
  );
});
function Lr(e) {
  return typeof e == "object" && e !== null && "value" in e ? {
    value: e.value,
    label: e.label ?? e.text ?? String(e.value),
    text: e.text ?? String(e.value),
    keywords: e.keywords ?? "",
    description: e.description,
    disabled: e.disabled
  } : {
    value: e,
    label: String(e),
    text: String(e),
    keywords: String(e)
  };
}
function Rr({ className: e }) {
  return /* @__PURE__ */ t("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: e, children: /* @__PURE__ */ t("path", { d: "M5 7.5 10 12.5 15 7.5", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function jr({ className: e }) {
  return /* @__PURE__ */ c("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: e, children: [
    /* @__PURE__ */ t("circle", { cx: "8.5", cy: "8.5", r: "4.75", stroke: "currentColor", strokeWidth: "1.5" }),
    /* @__PURE__ */ t("path", { d: "m12.25 12.25 3.5 3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
  ] });
}
function Dr({ className: e }) {
  return /* @__PURE__ */ t("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: e, children: /* @__PURE__ */ t("path", { d: "m4.75 10.25 3.25 3.25 7.5-7.5", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function Ar({ className: e }) {
  return /* @__PURE__ */ t("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: e, children: /* @__PURE__ */ t("path", { d: "m5 5 10 10m0-10L5 15", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round" }) });
}
function Er({
  mode: e = "single",
  options: r,
  value: i,
  defaultValue: u,
  onChange: a,
  searchable: o = !0,
  placeholder: s = "Select an option",
  searchPlaceholder: d = "Search options",
  emptyState: b = "No matching options",
  disabled: f = !1,
  clearable: w = !0,
  label: g,
  description: N,
  error: I,
  helperText: m,
  labelPosition: S = "top",
  className: C,
  wrapperClassName: A,
  labelClassName: D,
  descriptionClassName: te,
  errorClassName: Q,
  helperClassName: K,
  triggerClassName: Y,
  menuClassName: O,
  optionClassName: P,
  searchClassName: _,
  summaryClassName: F,
  accentKey: E,
  style: R,
  endAdornment: ee,
  endAdornmentClassName: G,
  summaryText: U,
  menuHeader: W,
  showSelectAll: re = !1,
  showClear: T = !1,
  selectAllLabel: je = "Select all",
  clearLabel: M = "Clear",
  getOptionKey: $,
  isOptionEqual: ae,
  renderOption: oe,
  renderValue: we
}, pe) {
  const de = X(() => r.map(Lr), [r]), [H, Le] = Je({
    value: i,
    defaultValue: u ?? (e === "multiple" ? [] : null),
    onChange: a
  }), [xe, Ce] = le(!1), [De, We] = le(""), k = me(null), Z = me(null), y = tt(), V = ce(E, R), fe = ke((h) => $ ? $(h) : String(h), [$]), ye = X(() => e === "multiple" ? (H ?? []).slice() : H == null ? [] : [H], [H, e]), se = X(() => new Set(ye.map((h) => fe(h))), [ye, fe]), ne = ke(
    (h) => ae ? ye.some((B) => ae(h, B)) : se.has(fe(h)),
    [ae, se, ye, fe]
  ), ue = X(() => de.filter((h) => ne(h.value)), [ne, de]), _e = X(() => {
    const h = De.trim().toLowerCase();
    return h ? de.filter((B) => `${B.text ?? ""} ${String(B.value)} ${B.keywords ?? ""}`.toLowerCase().includes(h)) : de;
  }, [de, De]), Ue = X(() => {
    var h;
    if (U)
      return typeof U == "function" ? U({ value: H, selectedOptions: ue, placeholder: s }) : U;
    if (we) return we(H, ue);
    if (e === "multiple") {
      const B = H;
      return B != null && B.length ? ue.length <= 2 ? ue.map((J) => J.text ?? String(J.value)).join(", ") : `${B.length} selected` : s;
    }
    return H == null ? s : ((h = ue[0]) == null ? void 0 : h.text) ?? String(H);
  }, [H, e, s, we, ue, U]);
  q(() => {
    if (!xe) {
      We("");
      return;
    }
    const h = (Ie) => {
      var Be;
      (Be = k.current) != null && Be.contains(Ie.target) || Ce(!1);
    }, B = (Ie) => {
      Ie.key === "Escape" && Ce(!1);
    };
    document.addEventListener("mousedown", h), document.addEventListener("keydown", B);
    const J = window.setTimeout(() => {
      var Ie;
      return (Ie = Z.current) == null ? void 0 : Ie.focus();
    }, 0);
    return () => {
      window.clearTimeout(J), document.removeEventListener("mousedown", h), document.removeEventListener("keydown", B);
    };
  }, [xe]);
  const Ve = (h) => {
    Le(h), Ce(!1);
  }, Ae = (h) => {
    const B = (H ?? []).slice(), J = fe(h), Ie = B.findIndex((Be) => ae ? ae(h, Be) : fe(Be) === J);
    Ie >= 0 ? B.splice(Ie, 1) : B.push(h), Le(B);
  }, Fe = () => {
    Le(e === "multiple" ? [] : null), Ce(!1);
  }, He = () => {
    e === "multiple" && Le(de.filter((h) => !h.disabled).map((h) => h.value));
  }, x = X(() => {
    const h = de.filter((B) => !B.disabled);
    return !!h.length && h.every((B) => ne(B.value));
  }, [ne, de]), he = typeof W == "function" ? W({ options: de, filteredOptions: _e, selectedOptions: ue, selectAll: He, clear: Fe }) : W, ie = [N ? `${y}-description` : null, I ? `${y}-error` : null, m ? `${y}-helper` : null].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ c("div", { className: l(S === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", A), style: V, children: [
    g || N ? /* @__PURE__ */ c("div", { className: l(S === "left" ? "pt-2" : "", "min-w-0"), children: [
      g ? /* @__PURE__ */ t("label", { htmlFor: y, className: l("block text-sm font-medium text-white", D), children: g }) : null,
      N ? /* @__PURE__ */ t("div", { id: `${y}-description`, className: l("mt-1 text-sm text-[var(--rui-text-secondary)]", te), children: N }) : null
    ] }) : null,
    /* @__PURE__ */ c("div", { ref: k, className: l("relative min-w-0", C), children: [
      /* @__PURE__ */ c(
        "button",
        {
          ref: pe,
          id: y,
          type: "button",
          disabled: f,
          "aria-invalid": !!I || void 0,
          "aria-describedby": ie,
          "aria-expanded": xe,
          onClick: () => !f && Ce((h) => !h),
          className: l(
            "flex h-10 w-full items-center justify-between gap-3 rounded-[var(--rui-radius-control)] border px-3 text-left text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
            xe ? "border-[var(--rui-accent-border)] bg-white/[0.08] text-white" : "rui-input text-[#1c2134] hover:border-[var(--rui-accent-border)]",
            Y
          ),
          children: [
            /* @__PURE__ */ t(
              "span",
              {
                className: l(
                  "min-w-0 flex-1 truncate",
                  H == null || Array.isArray(H) && !H.length ? "text-[var(--rui-text-tertiary)]" : "text-inherit",
                  F
                ),
                children: Ue
              }
            ),
            /* @__PURE__ */ c("span", { className: "flex items-center gap-2 text-[var(--rui-text-tertiary)]", children: [
              ee ? /* @__PURE__ */ t("span", { className: l("inline-flex items-center", G), children: ee }) : null,
              w && (e === "multiple" && (H != null && H.length) || e === "single" && H != null) ? /* @__PURE__ */ t(
                "span",
                {
                  role: "button",
                  tabIndex: -1,
                  "aria-label": "Clear selection",
                  onClick: (h) => {
                    h.preventDefault(), h.stopPropagation(), Fe();
                  },
                  className: "inline-flex h-5 w-5 items-center justify-center rounded-full border border-transparent transition hover:border-[var(--rui-border-soft)] hover:bg-white/[0.08]",
                  children: /* @__PURE__ */ t(Ar, { className: "h-3.5 w-3.5" })
                }
              ) : null,
              /* @__PURE__ */ t(Rr, { className: l("h-4 w-4 transition-transform", xe && "rotate-180") })
            ] })
          ]
        }
      ),
      xe && !f ? /* @__PURE__ */ c(
        "div",
        {
          className: l(
            "absolute left-0 right-0 top-full z-[130] mt-2 max-h-[320px] overflow-hidden rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-surface)] shadow-[0_18px_44px_rgba(0,0,0,0.36)]",
            O
          ),
          children: [
            he || e === "multiple" && (re || T) ? /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-[var(--rui-border-soft)] p-2.5", children: [
              /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: he }),
              e === "multiple" && (re || T) ? /* @__PURE__ */ c("div", { className: "flex flex-shrink-0 items-center gap-2", children: [
                re ? /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    disabled: x,
                    className: "rounded-[6px] px-2 py-1 text-xs text-[var(--rui-accent)] transition hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-45",
                    onClick: He,
                    children: je
                  }
                ) : null,
                T ? /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    disabled: !ye.length,
                    className: "rounded-[6px] px-2 py-1 text-xs text-[var(--rui-text-secondary)] transition hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-45",
                    onClick: Fe,
                    children: M
                  }
                ) : null
              ] }) : null
            ] }) : null,
            o ? /* @__PURE__ */ t("div", { className: "border-b border-[var(--rui-border-soft)] p-2.5", children: /* @__PURE__ */ c("div", { className: "relative", children: [
              /* @__PURE__ */ t(jr, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--rui-text-tertiary)]" }),
              /* @__PURE__ */ t(
                "input",
                {
                  ref: Z,
                  value: De,
                  onChange: (h) => We(h.target.value),
                  placeholder: d,
                  className: l(
                    "rui-input h-9 w-full pl-9 pr-3 text-sm outline-none placeholder:text-[var(--rui-text-tertiary)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0",
                    _
                  )
                }
              )
            ] }) }) : null,
            /* @__PURE__ */ t("div", { className: "rui-scrollbar max-h-[260px] overflow-auto p-1", children: _e.length ? _e.map((h) => {
              const B = ne(h.value), J = f || h.disabled;
              return /* @__PURE__ */ c(
                "button",
                {
                  type: "button",
                  disabled: J,
                  onClick: () => {
                    J || (e === "multiple" ? Ae(h.value) : Ve(h.value));
                  },
                  className: l(
                    "flex w-full items-start justify-between gap-3 rounded-[8px] px-3 py-2.5 text-left text-sm transition",
                    B ? "bg-[rgba(52,212,232,0.14)] text-white" : "text-[var(--rui-text-secondary)] hover:bg-white/[0.06] hover:text-white",
                    J && "cursor-not-allowed opacity-50",
                    P
                  ),
                  children: [
                    /* @__PURE__ */ c("span", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ t("span", { className: "block truncate", children: oe ? oe(h, B) : h.label ?? h.text ?? String(h.value) }),
                      h.description ? /* @__PURE__ */ t("span", { className: "mt-1 block text-xs text-[var(--rui-text-tertiary)]", children: h.description }) : null
                    ] }),
                    /* @__PURE__ */ t(
                      "span",
                      {
                        className: l(
                          "mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border",
                          B ? "border-[var(--rui-accent)] bg-[var(--rui-accent)] text-[#07111d]" : "border-[var(--rui-border-soft)] text-transparent"
                        ),
                        children: /* @__PURE__ */ t(Dr, { className: "h-3.5 w-3.5" })
                      }
                    )
                  ]
                },
                fe(h.value)
              );
            }) : /* @__PURE__ */ t("div", { className: "px-3 py-6 text-center text-sm text-[var(--rui-text-tertiary)]", children: b }) })
          ]
        }
      ) : null,
      I ? /* @__PURE__ */ t("div", { id: `${y}-error`, className: l("mt-1 text-sm text-[var(--rui-danger)]", Q), children: I }) : m ? /* @__PURE__ */ t("div", { id: `${y}-helper`, className: l("mt-1 text-sm text-[var(--rui-text-tertiary)]", K), children: m }) : null
    ] })
  ] });
}
const cn = Ge(Er), Wr = Ge(function({
  checked: r,
  defaultChecked: i = !1,
  onCheckedChange: u,
  label: a,
  description: o,
  disabled: s,
  className: d,
  trackClassName: b,
  thumbClassName: f,
  labelClassName: w,
  descriptionClassName: g,
  accentKey: N,
  style: I,
  ...m
}, S) {
  const [C, A] = Je({
    value: r,
    defaultValue: i,
    onChange: u
  }), D = tt(), te = ce(N, I);
  return /* @__PURE__ */ c("div", { className: l("inline-flex items-start gap-3", s && "cursor-not-allowed opacity-60", d), children: [
    /* @__PURE__ */ t(
      "button",
      {
        ref: S,
        type: "button",
        role: "switch",
        "aria-checked": C,
        "aria-labelledby": a ? D : void 0,
        "aria-label": typeof a == "string" ? a : m["aria-label"],
        disabled: s,
        style: te,
        onClick: () => {
          s || A((Q) => !Q);
        },
        className: l(
          "relative mt-0.5 inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full border outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0",
          C ? "border-[var(--rui-accent-border)] bg-[var(--rui-accent)]" : "border-[var(--rui-border-soft)] bg-white/10",
          b
        ),
        ...m,
        children: /* @__PURE__ */ t(
          "span",
          {
            className: l(
              "pointer-events-none inline-flex h-5 w-5 translate-x-0 items-center justify-center rounded-full bg-white shadow-[0_3px_10px_rgba(0,0,0,0.22)] transition-transform",
              C && "translate-x-5",
              f
            )
          }
        )
      }
    ),
    (a || o) && /* @__PURE__ */ c("span", { className: "min-w-0", children: [
      a ? /* @__PURE__ */ t("span", { id: D, className: l("block text-sm font-medium text-white", w), children: a }) : null,
      o ? /* @__PURE__ */ t("span", { className: l("mt-0.5 block text-sm text-[var(--rui-text-secondary)]", g), children: o }) : null
    ] })
  ] });
});
function Re(e) {
  return e.kind === "action";
}
function Ut(e) {
  return !Re(e) && e.hideable !== !1;
}
function Vt(e) {
  return Re(e) || e.hideable === !1 ? !0 : e.visibleByDefault !== !1;
}
function Oe(e, r) {
  return r.getValue ? r.getValue(e) : r.accessor ? r.accessor(e) : e == null ? void 0 : e[r.id];
}
function et(e) {
  return Array.isArray(e) ? e.map((r) => et(r)).join(" ") : e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
}
function qe(e) {
  const r = Number(e);
  return Number.isFinite(r) ? r : null;
}
function Ke(e) {
  if (e == null || e === "") return null;
  if (e instanceof Date) return e.getTime();
  if (typeof e == "number") return Number.isFinite(e) ? e : null;
  const r = Date.parse(String(e));
  return Number.isFinite(r) ? r : null;
}
function gt(e) {
  if (typeof e == "boolean") return e;
  if (typeof e == "number") return e > 0;
  if (typeof e == "string") {
    const r = e.trim().toLowerCase();
    if (["true", "yes", "1", "enabled", "open"].includes(r)) return !0;
    if (["false", "no", "0", "disabled", "closed"].includes(r)) return !1;
  }
  return null;
}
function wt(e) {
  return e == null ? !1 : typeof e == "string" ? e.trim().length > 0 && e !== "all" : Array.isArray(e) ? e.length > 0 : typeof e == "object" ? Object.values(e).some((r) => wt(r)) : !0;
}
function Dt(e, r) {
  var i;
  return r == null ? !1 : e === "text" ? !!String(r || "").trim() : e === "enum" ? Array.isArray(r == null ? void 0 : r.values) && !!((i = r.values) != null && i.length) : e === "number" ? !!(String((r == null ? void 0 : r.min) || "").trim() || String((r == null ? void 0 : r.max) || "").trim()) : e === "datetime" ? !!(String((r == null ? void 0 : r.from) || "").trim() || String((r == null ? void 0 : r.to) || "").trim()) : e === "boolean" ? !!(r != null && r.value && r.value !== "all") : !1;
}
function Xt(e) {
  return e == null || e === "" ? "-" : Array.isArray(e) ? e.join(", ") : typeof e == "object" ? JSON.stringify(e) : String(e);
}
function _r(e, r, i, u) {
  if (i.compare) return i.compare(e, r, u);
  const a = Oe(e, i), o = Oe(r, i);
  let s = 0;
  switch (i.kind) {
    case "number": {
      const d = qe(a), b = qe(o);
      d == null && b == null ? s = 0 : d == null ? s = 1 : b == null ? s = -1 : s = d - b;
      break;
    }
    case "datetime": {
      const d = Ke(a), b = Ke(o);
      d == null && b == null ? s = 0 : d == null ? s = 1 : b == null ? s = -1 : s = d - b;
      break;
    }
    case "boolean": {
      const d = gt(a), b = gt(o);
      d == null && b == null ? s = 0 : d == null ? s = 1 : b == null ? s = -1 : s = Number(d) - Number(b);
      break;
    }
    default:
      s = et(a).localeCompare(et(o), void 0, { numeric: !0, sensitivity: "base" });
      break;
  }
  return u === "asc" ? s : s * -1;
}
function Tr(e, r, i) {
  if (r.filterFn) return r.filterFn(e, i);
  const u = r.kind || "text", a = Oe(e, r);
  switch (u) {
    case "enum": {
      const o = Array.isArray(i == null ? void 0 : i.values) ? i.values.map(String) : [];
      return o.length ? (Array.isArray(a) ? a.map((d) => String(d)) : [String(a ?? "")]).some((d) => o.includes(d)) : !0;
    }
    case "number": {
      const o = qe(a), s = qe(i == null ? void 0 : i.min), d = qe(i == null ? void 0 : i.max);
      return !(o == null || s != null && o < s || d != null && o > d);
    }
    case "datetime": {
      const o = Ke(a), s = Ke(i == null ? void 0 : i.from), d = Ke(i == null ? void 0 : i.to);
      return !(o == null || s != null && o < s || d != null && o > d);
    }
    case "boolean": {
      const o = String((i == null ? void 0 : i.value) || "all");
      if (o === "all") return !0;
      const s = gt(a);
      return s == null ? !1 : o === "yes" ? s : !s;
    }
    default: {
      const o = String(i || "").trim().toLowerCase();
      return o ? et(a).toLowerCase().includes(o) : !0;
    }
  }
}
function vt(e, r) {
  return {
    visibleColumnIds: e.filter((i) => Vt(i)).map((i) => i.id),
    columnWidths: Object.fromEntries(e.filter((i) => Number(i.width) > 0).map((i) => [i.id, Number(i.width)])),
    sort: null,
    filters: {},
    globalSearch: "",
    expandedRowIds: [],
    selectedRowIds: [],
    ...r
  };
}
function pt(e, r, i) {
  var N, I;
  const u = vt(r, i), a = new Map(r.map((m) => [m.id, m])), o = r.filter((m) => !Ut(m)).map((m) => m.id), s = Array.isArray(e == null ? void 0 : e.visibleColumnIds) ? e.visibleColumnIds.filter((m) => a.has(m)) : u.visibleColumnIds, d = /* @__PURE__ */ new Set([...s, ...o]);
  r.filter((m) => !Re(m) && d.has(m.id)).length || r.forEach((m) => {
    Vt(m) && d.add(m.id);
  });
  const f = (N = e == null ? void 0 : e.sort) != null && N.columnId ? a.get(e.sort.columnId) : null, w = f && f.sortable !== !1 && d.has(f.id) && !Re(f) && ["asc", "desc"].includes(((I = e == null ? void 0 : e.sort) == null ? void 0 : I.direction) || "") ? { columnId: f.id, direction: e.sort.direction } : u.sort, g = Object.fromEntries(
    Object.entries((e == null ? void 0 : e.filters) || {}).filter(([m, S]) => {
      const C = a.get(m);
      return !!(C && d.has(m) && C.filterable !== !1 && !Re(C) && wt(S));
    })
  );
  return {
    visibleColumnIds: r.filter((m) => d.has(m.id)).map((m) => m.id),
    columnWidths: {
      ...u.columnWidths,
      ...Object.fromEntries(
        Object.entries((e == null ? void 0 : e.columnWidths) || {}).filter(([m, S]) => a.has(m) && Number.isFinite(Number(S)) && Number(S) > 0).map(([m, S]) => [m, Number(S)])
      )
    },
    sort: w,
    filters: g,
    globalSearch: typeof (e == null ? void 0 : e.globalSearch) == "string" ? e.globalSearch : u.globalSearch,
    expandedRowIds: Array.isArray(e == null ? void 0 : e.expandedRowIds) ? e.expandedRowIds.map(String) : u.expandedRowIds,
    selectedRowIds: Array.isArray(e == null ? void 0 : e.selectedRowIds) ? e.selectedRowIds.map(String) : u.selectedRowIds
  };
}
function zr(e, r, i = "rui:table") {
  return `${i}:${e}:${r || "__global__"}`;
}
function Pr(e, r, i) {
  if (e === !1) return null;
  const u = (e == null ? void 0 : e.key) || r;
  return u ? zr(u, (e == null ? void 0 : e.scope) ?? i, e == null ? void 0 : e.namespace) : null;
}
function $r(e, r) {
  if (typeof window > "u") return null;
  try {
    const u = (r || window.localStorage).getItem(e);
    return u ? JSON.parse(u) : null;
  } catch {
    return null;
  }
}
function Fr(e, r, i) {
  if (!(typeof window > "u"))
    try {
      (i || window.localStorage).setItem(e, JSON.stringify(r));
    } catch {
    }
}
function At(e) {
  return e === "center" ? "text-center" : e === "right" ? "text-right" : "text-left";
}
function Hr(e, r) {
  return !e || e.columnId !== r ? { columnId: r, direction: "asc" } : e.direction === "asc" ? { columnId: r, direction: "desc" } : null;
}
function Or(e, r) {
  const i = /* @__PURE__ */ new Set();
  return e.forEach((u) => {
    const a = Oe(u, r);
    Array.isArray(a) ? a.forEach((o) => i.add(String(o))) : a != null && a !== "" && i.add(String(a));
  }), Array.from(i).sort((u, a) => u.localeCompare(a, void 0, { numeric: !0, sensitivity: "base" })).map((u) => ({ label: u, value: u }));
}
function Et(e, r) {
  const i = e.getBoundingClientRect(), u = window.innerWidth, a = window.innerHeight, o = 12, s = Math.max(o, Math.min(i.bottom + 8, a - o - 120)), d = Math.max(o, Math.min(i.right - r, u - r - o)), b = Math.max(180, a - s - o);
  return { left: d, top: s, maxHeight: b };
}
function Gr(e, r) {
  return r.renderDetailValue ? r.renderDetailValue(e) : r.renderCell ? r.renderCell(e) : Xt(Oe(e, r));
}
function Jr(e, r) {
  return r ? { ...e, ...r } : e;
}
function on({
  rows: e,
  columns: r,
  rowKey: i,
  tableId: u,
  scopeId: a = null,
  persistence: o,
  state: s,
  defaultState: d,
  onStateChange: b,
  selection: f,
  virtualization: w,
  loading: g = !1,
  emptyMessage: N = "No rows available.",
  loadingContent: I = "Loading rows.",
  toolbarContent: m,
  renderToolbar: S,
  headerFilters: C,
  renderHeaderFilters: A,
  renderSelectionActions: D,
  hideColumnControls: te = !1,
  searchable: Q = !1,
  searchPlaceholder: K = "Search rows",
  globalSearchFn: Y,
  sortRows: O,
  renderExpandedContent: P,
  expandedRowIds: _,
  defaultExpandedRowIds: F,
  onExpandedChange: E,
  onRowExpand: R,
  rowClassName: ee,
  detailRowClassName: G,
  containerClassName: U,
  tableClassName: W,
  accentKey: re,
  style: T,
  className: je,
  classNames: M
}) {
  const $ = me(null), ae = me(null), oe = me(null), we = me(null), pe = me(null), de = me(null), [H, Le] = le(!1), [xe, Ce] = le(!1), [De, We] = le(null), [k, Z] = le(null), [y, V] = le(!1), [fe, ye] = le(0), se = Pr(o, u, a), ne = o === !1, ue = ne || o == null ? void 0 : o.adapter, _e = ne || o == null ? void 0 : o.storage, Ue = ce(re, T), [Ve, Ae] = le(() => !se || !ue), Fe = X(() => r.map((n) => n.id).join(""), [r]), He = me(r), x = me(b), [he, ie] = le(
    () => pt(
      Jr(
        vt(r, { ...d, expandedRowIds: F || (d == null ? void 0 : d.expandedRowIds) }),
        se && $r(se, _e) || void 0
      ),
      r,
      {
        ...d,
        expandedRowIds: F || (d == null ? void 0 : d.expandedRowIds),
        selectedRowIds: (f == null ? void 0 : f.defaultSelectedKeys) || (d == null ? void 0 : d.selectedRowIds)
      }
    )
  ), h = X(() => {
    const n = { ...he, ...s };
    return _ !== void 0 && (n.expandedRowIds = _), pt(n, r);
  }, [r, s, _, he]), B = ke(
    (n) => {
      const p = typeof n == "function" ? n(h) : n;
      ie(p), b == null || b(p);
    },
    [h, b]
  );
  q(() => {
    V(!0);
  }, []), q(() => {
    He.current = r;
  }, [r]), q(() => {
    x.current = b;
  }, [b]), q(() => {
    let n = !1;
    if (!se || !ue) {
      Ae(!0);
      return;
    }
    return Ae(!1), Promise.resolve(ue.load(se)).then((p) => {
      n || (p && ie((v) => {
        var j;
        const L = pt({ ...v, ...p }, He.current);
        return (j = x.current) == null || j.call(x, L), L;
      }), Ae(!0));
    }).catch(() => {
      n || Ae(!1);
    }), () => {
      n = !0;
    };
  }, [Fe, ue, se]), q(() => {
    if (!(!se || ne)) {
      if (ue) {
        if (!Ve) return;
        Promise.resolve(ue.save(se, h)).catch(() => {
        });
        return;
      }
      Fr(se, h, _e);
    }
  }, [Ve, h, ue, ne, se, _e]);
  const J = X(
    () => r.filter((n) => Re(n) || n.hideable === !1 ? !0 : h.visibleColumnIds.includes(n.id)),
    [r, h.visibleColumnIds]
  ), Ie = X(
    () => r.filter((n) => Re(n) || n.hideable === !1 ? !1 : !J.some((p) => p.id === n.id)),
    [r, J]
  ), Be = ke(
    (n, p) => {
      B((v) => {
        const L = { ...v.filters };
        return wt(p) ? L[n] = p : delete L[n], { ...v, filters: L };
      });
    },
    [B]
  ), yt = ke(
    (n) => {
      B((p) => ({ ...p, globalSearch: n }));
    },
    [B]
  ), rt = ke(
    (n) => {
      B((p) => {
        if (!(n in p.filters)) return p;
        const v = { ...p.filters };
        return delete v[n], { ...p, filters: v };
      });
    },
    [B]
  ), Nt = ke(
    (n, p) => {
      !Number.isFinite(p) || p <= 0 || B((v) => ({ ...v, columnWidths: { ...v.columnWidths, [n]: p } }));
    },
    [B]
  ), ut = ke(() => {
    B(vt(r, { ...d, expandedRowIds: F || [], selectedRowIds: (f == null ? void 0 : f.defaultSelectedKeys) || [] }));
  }, [r, F, d, f == null ? void 0 : f.defaultSelectedKeys, B]);
  q(() => {
    const n = (v) => {
      const L = de.current;
      if (!L) return;
      const j = r.find((Me) => Me.id === L.columnId);
      if (!j) return;
      const z = Math.max(j.minWidth || 96, 56), Ne = j.maxWidth || 720, Pe = Math.min(Ne, Math.max(z, L.startWidth + (v.clientX - L.startX)));
      Nt(L.columnId, Pe);
    }, p = () => {
      de.current = null;
    };
    return window.addEventListener("mousemove", n), window.addEventListener("mouseup", p), () => {
      window.removeEventListener("mousemove", n), window.removeEventListener("mouseup", p);
    };
  }, [r, Nt]), q(() => {
    const n = (p) => {
      !(p.target instanceof Node) || [$, ae, oe, we, pe].some((L) => {
        var j;
        return (j = L.current) == null ? void 0 : j.contains(p.target);
      }) || (Le(!1), Ce(!1));
    };
    return document.addEventListener("mousedown", n), () => document.removeEventListener("mousedown", n);
  }, []), q(() => {
    if (!H || !ae.current || typeof window > "u") return;
    const n = () => {
      ae.current && We(Et(ae.current, 320));
    };
    return n(), window.addEventListener("resize", n), window.addEventListener("scroll", n, !0), () => {
      window.removeEventListener("resize", n), window.removeEventListener("scroll", n, !0);
    };
  }, [H]), q(() => {
    if (!xe || !oe.current || typeof window > "u") return;
    const n = () => {
      oe.current && Z(Et(oe.current, 260));
    };
    return n(), window.addEventListener("resize", n), window.addEventListener("scroll", n, !0), () => {
      window.removeEventListener("resize", n), window.removeEventListener("scroll", n, !0);
    };
  }, [xe]);
  const Ee = Ie.length > 0 || !!P, Qe = X(() => {
    const n = h.globalSearch.trim().toLowerCase();
    return e.filter((p) => Object.entries(h.filters).every(([L, j]) => {
      const z = r.find((Ne) => Ne.id === L);
      return !z || Re(z) ? !0 : Tr(p, z, j);
    }) ? n ? Y ? Y(p, n) : r.some((L) => !Re(L) && et(Oe(p, L)).toLowerCase().includes(n)) : !0 : !1);
  }, [r, Y, h.filters, h.globalSearch, e]), $e = X(() => {
    if (O) return O(Qe, h.sort, r);
    if (!h.sort) return Qe;
    const n = r.find((p) => {
      var v;
      return p.id === ((v = h.sort) == null ? void 0 : v.columnId);
    });
    return n ? Qe.map((p, v) => ({ row: p, index: v })).sort((p, v) => _r(p.row, v.row, n, h.sort.direction) || p.index - v.index).map((p) => p.row) : Qe;
  }, [r, Qe, h.sort, O]), nt = X(() => new Map(e.map((n) => [i(n), n])), [i, e]), ge = f == null ? void 0 : f.mode, Te = (f == null ? void 0 : f.selectedKeys) ?? h.selectedRowIds, it = X(() => new Set(Te), [Te]), ft = X(() => Te.map((n) => nt.get(n)).filter(Boolean), [nt, Te]), Ye = ke(
    (n) => {
      var p;
      B((v) => ({ ...v, selectedRowIds: n })), (p = f == null ? void 0 : f.onChange) == null || p.call(f, n, n.map((v) => nt.get(v)).filter(Boolean));
    },
    [nt, f, B]
  ), Qt = (n) => {
    var L;
    if (!ge || (L = f == null ? void 0 : f.isRowDisabled) != null && L.call(f, n)) return;
    const p = i(n);
    if (ge === "single") {
      Ye(it.has(p) ? [] : [p]);
      return;
    }
    const v = new Set(Te);
    v.has(p) ? v.delete(p) : v.add(p), Ye(Array.from(v));
  }, Ze = ((f == null ? void 0 : f.selectAllScope) === "all" ? e : $e).filter((n) => {
    var p;
    return !((p = f == null ? void 0 : f.isRowDisabled) != null && p.call(f, n));
  }).map((n) => i(n)), at = !!Ze.length && Ze.every((n) => it.has(n)), Yt = Ze.some((n) => it.has(n)), Zt = () => {
    !ge || ge === "single" || Ye(at ? Te.filter((n) => !Ze.includes(n)) : Array.from(/* @__PURE__ */ new Set([...Te, ...Ze])));
  }, qt = () => Ye([]), ht = _ ?? h.expandedRowIds, Kt = X(() => new Set(ht), [ht]), er = (n) => {
    const p = i(n), v = new Set(ht), L = !v.has(p);
    L ? v.add(p) : v.delete(p);
    const j = Array.from(v);
    B((z) => ({ ...z, expandedRowIds: j })), E == null || E(j, n), R == null || R(n, L);
  }, mt = r.filter((n) => !Re(n) && n.hideable !== !1), st = J.filter((n) => !Re(n) && n.filterable !== !1), bt = st.filter((n) => Dt(n.kind || "text", h.filters[n.id])).length, tr = X(() => J.reduce((p, v) => p + Number(h.columnWidths[v.id] || v.width || v.minWidth || 160), 0) + (Ee ? 56 : 0) + (ge ? 52 : 0), [Ee, h.columnWidths, ge, J]), ze = !!(w != null && w.enabled && !Ee), lt = (w == null ? void 0 : w.rowHeight) || 48, St = (w == null ? void 0 : w.maxHeight) || 520, kt = (w == null ? void 0 : w.overscan) || 6, ct = ze ? Math.max(0, Math.floor(fe / lt) - kt) : 0, rr = ze ? Math.ceil(St / lt) + kt * 2 : $e.length, Ct = ze ? $e.slice(ct, ct + rr) : $e, It = ze ? ct * lt : 0, Bt = ze ? Math.max(0, ($e.length - ct - Ct.length) * lt) : 0, nr = (n) => {
    var v, L;
    if (n.renderFilter)
      return n.renderFilter({
        value: h.filters[n.id],
        setValue: (j) => Be(n.id, j),
        clear: () => rt(n.id),
        rows: e
      });
    const p = n.kind || "text";
    if (p === "enum") {
      const j = n.getFilterOptions ? n.getFilterOptions(e) : n.getEnumOptions ? n.getEnumOptions(e) : Or(e, n), z = Array.isArray((v = h.filters[n.id]) == null ? void 0 : v.values) ? h.filters[n.id].values.map(String) : [];
      return /* @__PURE__ */ t("div", { className: "max-h-[220px] space-y-2 overflow-auto pr-1 rui-scrollbar", children: j.map((Ne) => {
        const Pe = z.includes(String(Ne.value));
        return /* @__PURE__ */ c("label", { className: "flex items-center gap-3 text-sm text-white/75", children: [
          /* @__PURE__ */ t(
            "input",
            {
              type: "checkbox",
              checked: Pe,
              onChange: () => {
                const Me = new Set(z);
                Pe ? Me.delete(String(Ne.value)) : Me.add(String(Ne.value)), Be(n.id, { values: Array.from(Me) });
              },
              className: "h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)]"
            }
          ),
          /* @__PURE__ */ t("span", { children: Ne.label })
        ] }, String(Ne.value));
      }) });
    }
    if (p === "number") {
      const j = h.filters[n.id] || {};
      return /* @__PURE__ */ c("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t(
          "input",
          {
            className: "h-10 w-full rounded-[8px] px-3 text-sm outline-none rui-input",
            type: "number",
            value: j.min || "",
            onChange: (z) => Be(n.id, { ...j, min: z.target.value }),
            placeholder: "Minimum"
          }
        ),
        /* @__PURE__ */ t(
          "input",
          {
            className: "h-10 w-full rounded-[8px] px-3 text-sm outline-none rui-input",
            type: "number",
            value: j.max || "",
            onChange: (z) => Be(n.id, { ...j, max: z.target.value }),
            placeholder: "Maximum"
          }
        )
      ] });
    }
    if (p === "datetime") {
      const j = h.filters[n.id] || {};
      return /* @__PURE__ */ c("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t(
          "input",
          {
            className: "h-10 w-full rounded-[8px] border border-white/10 bg-black/10 px-3 text-sm text-white outline-none",
            type: "datetime-local",
            value: j.from || "",
            onChange: (z) => Be(n.id, { ...j, from: z.target.value })
          }
        ),
        /* @__PURE__ */ t(
          "input",
          {
            className: "h-10 w-full rounded-[8px] border border-white/10 bg-black/10 px-3 text-sm text-white outline-none",
            type: "datetime-local",
            value: j.to || "",
            onChange: (z) => Be(n.id, { ...j, to: z.target.value })
          }
        )
      ] });
    }
    if (p === "boolean") {
      const j = ((L = h.filters[n.id]) == null ? void 0 : L.value) || "all";
      return /* @__PURE__ */ c("select", { className: "h-10 w-full rounded-[8px] px-3 text-sm outline-none rui-input", value: j, onChange: (z) => Be(n.id, { value: z.target.value }), children: [
        /* @__PURE__ */ t("option", { value: "all", children: "All" }),
        /* @__PURE__ */ t("option", { value: "yes", children: "Yes" }),
        /* @__PURE__ */ t("option", { value: "no", children: "No" })
      ] });
    }
    return /* @__PURE__ */ t(
      "input",
      {
        className: "h-10 w-full rounded-[8px] px-3 text-sm outline-none rui-input",
        value: String(h.filters[n.id] || ""),
        onChange: (j) => Be(n.id, j.target.value),
        placeholder: `Filter ${String(n.label)}`
      }
    );
  }, Mt = S == null ? void 0 : S({ state: h, rows: e, visibleRows: $e, selectedRows: ft, reset: ut }), Lt = Te.length ? D == null ? void 0 : D({ selectedKeys: Te, selectedRows: ft, clearSelection: qt }) : null, Rt = J.some((n) => n.groupId || n.groupLabel), ir = Rt ? /* @__PURE__ */ c("tr", { className: "sticky top-0 z-30 border-b border-white/10 bg-[var(--rui-bg-panel)] text-white/60", children: [
    ge ? /* @__PURE__ */ t("th", { className: "w-[52px] px-3 py-2", rowSpan: 2 }) : null,
    Ee ? /* @__PURE__ */ t("th", { className: "w-14 px-3 py-2", rowSpan: 2 }) : null,
    J.map((n) => /* @__PURE__ */ t("th", { className: "px-3 py-2 text-left text-xs font-medium uppercase tracking-[0.14em]", children: n.groupLabel || n.groupId || "" }, n.id))
  ] }) : null;
  return /* @__PURE__ */ c("div", { ref: $, className: l("rui-theme flex min-h-0 flex-1 flex-col", je, M == null ? void 0 : M.root), style: Ue, children: [
    m || Mt || Lt || Q || !te && mt.length ? /* @__PURE__ */ c("div", { className: l("mb-3 flex flex-wrap items-center justify-between gap-2", M == null ? void 0 : M.toolbar), children: [
      /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-2", children: [
        Q ? /* @__PURE__ */ c("div", { className: "relative w-full max-w-[320px]", children: [
          /* @__PURE__ */ t("span", { className: "pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#737a98]", children: /* @__PURE__ */ t(ve, { name: "search", className: "h-4 w-4" }) }),
          /* @__PURE__ */ t(
            "input",
            {
              className: "h-10 w-full rounded-[8px] pl-10 pr-3 text-sm outline-none rui-input",
              value: h.globalSearch,
              onChange: (n) => yt(n.target.value),
              placeholder: K
            }
          )
        ] }) : null,
        m,
        Mt,
        Lt
      ] }),
      !te && mt.length ? /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center justify-end gap-2", children: [
        st.length ? /* @__PURE__ */ t("div", { ref: ae, className: "flex items-center", children: /* @__PURE__ */ c(
          be,
          {
            variant: "ghost",
            size: "sm",
            leftIcon: /* @__PURE__ */ t(ve, { name: "filter", className: "h-4 w-4" }),
            className: l(bt ? "text-[var(--rui-accent)]" : ""),
            onClick: () => Le((n) => !n),
            children: [
              "Filters",
              bt ? /* @__PURE__ */ t("span", { className: "rounded-full border border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] px-1.5 py-0 text-[10px] leading-4 text-[var(--rui-accent)]", children: bt }) : null
            ]
          }
        ) }) : null,
        /* @__PURE__ */ t("div", { ref: oe, className: "flex items-center", children: /* @__PURE__ */ t(be, { variant: "ghost", size: "sm", leftIcon: /* @__PURE__ */ t(ve, { name: "grid", className: "h-4 w-4" }), onClick: () => Ce((n) => !n), children: "Columns" }) }),
        /* @__PURE__ */ t(be, { variant: "ghost", size: "sm", onClick: ut, children: "Reset table" })
      ] }) : null
    ] }) : null,
    C || A ? /* @__PURE__ */ c("div", { className: l("mb-3 flex flex-wrap items-center gap-2 rounded-[10px] border border-white/8 bg-black/10 p-3", M == null ? void 0 : M.headerFilters), children: [
      C,
      A == null ? void 0 : A({
        state: h,
        rows: e,
        visibleRows: $e,
        selectedRows: ft,
        setGlobalSearch: yt,
        setFilter: Be,
        clearFilter: rt,
        reset: ut
      })
    ] }) : null,
    y && H && De ? dt(
      /* @__PURE__ */ c(
        "div",
        {
          ref: we,
          className: l(
            "fixed z-[130] w-[320px] overflow-auto rounded-[10px] border border-white/10 bg-[var(--rui-bg-panel)] p-3 shadow-panel rui-scrollbar",
            M == null ? void 0 : M.menu
          ),
          style: { left: De.left, top: De.top, maxHeight: De.maxHeight },
          children: [
            /* @__PURE__ */ c("div", { className: "mb-3 flex items-center justify-between", children: [
              /* @__PURE__ */ t("div", { className: "text-xs uppercase tracking-[0.14em] text-white/45", children: "Table filters" }),
              /* @__PURE__ */ t(be, { variant: "ghost", size: "sm", onClick: () => st.forEach((n) => rt(n.id)), children: "Clear all" })
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-4", children: st.map((n) => {
              const p = Dt(n.kind || "text", h.filters[n.id]);
              return /* @__PURE__ */ c("div", { className: "rounded-[10px] border border-white/8 bg-black/10 p-3", children: [
                /* @__PURE__ */ c("div", { className: "mb-2 flex items-center justify-between gap-3", children: [
                  /* @__PURE__ */ t("div", { className: "text-sm font-medium text-white", children: n.label }),
                  p ? /* @__PURE__ */ t(be, { variant: "ghost", size: "sm", onClick: () => rt(n.id), children: "Clear" }) : null
                ] }),
                nr(n)
              ] }, n.id);
            }) })
          ]
        }
      ),
      document.body
    ) : null,
    y && xe && k ? dt(
      /* @__PURE__ */ c(
        "div",
        {
          ref: pe,
          className: l("fixed z-[130] w-[260px] rounded-[10px] border border-white/10 bg-[var(--rui-bg-panel)] p-3 shadow-panel", M == null ? void 0 : M.menu),
          style: { left: k.left, top: k.top, maxHeight: k.maxHeight },
          children: [
            /* @__PURE__ */ t("div", { className: "mb-2 text-xs uppercase tracking-[0.14em] text-white/45", children: "Visible columns" }),
            /* @__PURE__ */ t("div", { className: "space-y-2 overflow-auto pr-1 rui-scrollbar", style: { maxHeight: Math.max(120, k.maxHeight - 36) }, children: mt.map((n) => {
              const p = h.visibleColumnIds.includes(n.id);
              return /* @__PURE__ */ c("label", { className: "flex items-center gap-3 text-sm text-white/75", children: [
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: "checkbox",
                    checked: p,
                    onChange: () => {
                      B((v) => {
                        var Pe;
                        const L = v.visibleColumnIds.includes(n.id), j = v.visibleColumnIds.filter((Me) => {
                          const Se = r.find((Xe) => Xe.id === Me);
                          return Se && !Re(Se);
                        });
                        if (L && j.length <= 1) return v;
                        const z = new Set(v.visibleColumnIds);
                        L ? z.delete(n.id) : z.add(n.id);
                        const Ne = { ...v.filters };
                        return L && delete Ne[n.id], {
                          ...v,
                          visibleColumnIds: r.filter((Me) => z.has(Me.id) || !Ut(Me)).map((Me) => Me.id),
                          filters: Ne,
                          sort: ((Pe = v.sort) == null ? void 0 : Pe.columnId) === n.id && L ? null : v.sort
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
        className: l("min-h-0 flex-1 overflow-auto rounded-[10px] border border-white/8 rui-scrollbar", U, M == null ? void 0 : M.container),
        style: { scrollbarGutter: "stable both-edges", maxHeight: ze ? St : void 0 },
        onScroll: (n) => {
          ze && ye(n.currentTarget.scrollTop);
        },
        children: /* @__PURE__ */ c("table", { className: l("w-full table-fixed text-left text-sm", W, M == null ? void 0 : M.table), style: { minWidth: `${Math.max(tr, 720)}px` }, children: [
          /* @__PURE__ */ c("colgroup", { children: [
            ge ? /* @__PURE__ */ t("col", { style: { width: 52 } }) : null,
            Ee ? /* @__PURE__ */ t("col", { style: { width: 56 } }) : null,
            J.map((n) => /* @__PURE__ */ t("col", { style: { width: h.columnWidths[n.id] || n.width || n.minWidth || 160 } }, n.id))
          ] }),
          /* @__PURE__ */ c("thead", { children: [
            ir,
            /* @__PURE__ */ c("tr", { className: l("sticky top-0 z-20 border-b border-white/10 bg-[var(--rui-bg-panel)] text-white/70", Rt && "top-[37px]", M == null ? void 0 : M.headerRow), children: [
              ge ? /* @__PURE__ */ t("th", { className: "w-[52px] px-3 py-3 font-medium", children: ge === "multi" ? /* @__PURE__ */ t(
                "input",
                {
                  type: "checkbox",
                  checked: at,
                  ref: (n) => {
                    n && (n.indeterminate = Yt && !at);
                  },
                  onChange: Zt,
                  className: "h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)]",
                  "aria-label": at ? "Clear row selection" : "Select rows"
                }
              ) : null }) : null,
              Ee ? /* @__PURE__ */ t("th", { className: "w-14 px-3 py-3 font-medium" }) : null,
              J.map((n) => {
                var j;
                const p = !Re(n) && n.sortable !== !1, v = ((j = h.sort) == null ? void 0 : j.columnId) === n.id ? h.sort.direction : null, L = n.renderHeader ? n.renderHeader() : n.label;
                return /* @__PURE__ */ c("th", { className: l("relative px-3 py-3 font-medium", At(n.align), n.headerClassName), children: [
                  /* @__PURE__ */ t("div", { className: "flex items-center gap-1 pr-3", children: n.renderHeader ? /* @__PURE__ */ t("div", { className: l("flex min-w-0 flex-1 items-center", n.align === "right" ? "justify-end" : n.align === "center" ? "justify-center" : ""), children: L }) : p ? /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      className: l(
                        "flex min-w-0 flex-1 items-center gap-1 text-left transition hover:text-white",
                        n.align === "right" ? "justify-end" : n.align === "center" ? "justify-center" : ""
                      ),
                      onClick: () => B((z) => ({ ...z, sort: Hr(z.sort, n.id) })),
                      children: [
                        /* @__PURE__ */ t("span", { className: "truncate", children: L }),
                        /* @__PURE__ */ t("span", { className: l("text-[10px] uppercase tracking-[0.14em]", v ? "text-[var(--rui-accent)]" : "text-white/25"), children: v === "asc" ? "↑" : v === "desc" ? "↓" : "•" })
                      ]
                    }
                  ) : /* @__PURE__ */ t("span", { className: "truncate", children: L }) }),
                  Re(n) ? null : /* @__PURE__ */ t(
                    "div",
                    {
                      className: "absolute inset-y-1 right-0 w-2 cursor-col-resize rounded-full transition hover:bg-white/10",
                      onMouseDown: (z) => {
                        z.preventDefault(), de.current = {
                          columnId: n.id,
                          startX: z.clientX,
                          startWidth: Number(h.columnWidths[n.id] || n.width || n.minWidth || 160)
                        };
                      }
                    }
                  )
                ] }, n.id);
              })
            ] })
          ] }),
          /* @__PURE__ */ c("tbody", { children: [
            ze && It ? /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t("td", { colSpan: J.length + (Ee ? 1 : 0) + (ge ? 1 : 0), style: { height: It } }) }) : null,
            g ? /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t("td", { colSpan: J.length + (Ee ? 1 : 0) + (ge ? 1 : 0), className: "px-3 py-8 text-center text-white/55", children: I }) }) : null,
            g ? null : Ct.map((n) => {
              var Me;
              const p = i(n), v = Kt.has(p), L = v ? P == null ? void 0 : P(n) : null, j = !!P || Ie.length > 0, z = typeof ee == "function" ? ee(n) : ee, Ne = it.has(p), Pe = (Me = f == null ? void 0 : f.isRowDisabled) == null ? void 0 : Me.call(f, n);
              return /* @__PURE__ */ c(Tt.Fragment, { children: [
                /* @__PURE__ */ c("tr", { className: l("border-b border-white/6 align-top last:border-none", Ne && "bg-[rgba(25,199,220,0.08)]", z, M == null ? void 0 : M.row), children: [
                  ge ? /* @__PURE__ */ t("td", { className: "px-3 py-3", children: /* @__PURE__ */ t(
                    "input",
                    {
                      type: ge === "single" ? "radio" : "checkbox",
                      checked: Ne,
                      disabled: Pe,
                      onChange: () => Qt(n),
                      className: "h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)] disabled:opacity-35",
                      "aria-label": Ne ? "Deselect row" : "Select row"
                    }
                  ) }) : null,
                  Ee ? /* @__PURE__ */ t("td", { className: "px-3 py-3", children: j ? /* @__PURE__ */ t(be, { variant: "ghost", size: "sm", className: "w-9 px-0", onClick: () => er(n), title: v ? "Collapse row" : "Expand row", children: /* @__PURE__ */ t(ve, { name: v ? "chevron-down" : "chevron-right", className: "h-4 w-4" }) }) : null }) : null,
                  J.map((Se) => {
                    const Xe = Se.renderCell ? Se.renderCell(n) : Xt(Oe(n, Se)), ar = typeof Se.cellClassName == "function" ? Se.cellClassName(n) : Se.cellClassName;
                    return /* @__PURE__ */ t("td", { className: l("px-3 py-3 text-white/75", At(Se.align), ar, M == null ? void 0 : M.cell), children: typeof Xe == "string" || typeof Xe == "number" ? /* @__PURE__ */ t("div", { className: l(Se.wrap ? "whitespace-normal break-words" : "truncate"), children: Xe }) : Xe }, Se.id);
                  })
                ] }),
                v && j ? /* @__PURE__ */ t("tr", { className: l("border-b border-white/6 last:border-none", G, M == null ? void 0 : M.detailRow), children: /* @__PURE__ */ t("td", { colSpan: J.length + (Ee ? 1 : 0) + (ge ? 1 : 0), className: "px-3 py-3", children: /* @__PURE__ */ c("div", { className: "rounded-[10px] border border-white/8 bg-black/10 p-4 text-sm text-white/75", children: [
                  Ie.length ? /* @__PURE__ */ t("div", { className: "grid gap-3 md:grid-cols-2 xl:grid-cols-3", children: Ie.map((Se) => /* @__PURE__ */ c("div", { children: [
                    /* @__PURE__ */ t("div", { className: "text-xs uppercase tracking-[0.14em] text-white/40", children: Se.label }),
                    /* @__PURE__ */ t("div", { className: "mt-1 whitespace-normal break-words text-white/85", children: Gr(n, Se) })
                  ] }, Se.id)) }) : null,
                  L ? /* @__PURE__ */ t("div", { className: l(Ie.length ? "mt-4 border-t border-white/8 pt-4" : ""), children: L }) : null
                ] }) }) }) : null
              ] }, p);
            }),
            ze && Bt ? /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t("td", { colSpan: J.length + (Ee ? 1 : 0) + (ge ? 1 : 0), style: { height: Bt } }) }) : null,
            !g && !$e.length ? /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t("td", { colSpan: J.length + (Ee ? 1 : 0) + (ge ? 1 : 0), className: "px-3 py-8 text-center text-white/55", children: N }) }) : null
          ] })
        ] })
      }
    )
  ] });
}
const dn = Ge(function({
  value: r,
  defaultValue: i = "",
  onChange: u,
  label: a,
  description: o,
  error: s,
  helperText: d,
  labelPosition: b = "top",
  wrapperClassName: f,
  labelClassName: w,
  descriptionClassName: g,
  errorClassName: N,
  helperClassName: I,
  inputClassName: m,
  prefix: S,
  suffix: C,
  accentKey: A,
  className: D,
  style: te,
  id: Q,
  disabled: K,
  required: Y,
  ...O
}, P) {
  const [_, F] = Je({
    value: r,
    defaultValue: i,
    onChange: u
  }), E = tt(), R = Q ?? O.name ?? E, ee = [o ? `${R}-description` : null, s ? `${R}-error` : null, d ? `${R}-helper` : null].filter(Boolean).join(" ") || void 0, G = ce(A, te), U = /* @__PURE__ */ c("div", { className: l("flex min-w-0 items-stretch gap-2"), children: [
    S ? /* @__PURE__ */ t("div", { className: "inline-flex items-center text-[var(--rui-text-tertiary)]", children: S }) : null,
    /* @__PURE__ */ t(
      "input",
      {
        ref: P,
        id: R,
        value: _,
        onChange: (W) => F(W.target.value),
        disabled: K,
        required: Y,
        "aria-invalid": !!s || void 0,
        "aria-describedby": ee,
        style: G,
        className: l(
          "rui-input h-10 min-w-0 w-full px-3 text-sm outline-none transition placeholder:text-[var(--rui-text-tertiary)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
          D,
          m
        ),
        ...O
      }
    ),
    C ? /* @__PURE__ */ t("div", { className: "inline-flex items-center text-[var(--rui-text-tertiary)]", children: C }) : null
  ] });
  return /* @__PURE__ */ c("div", { className: l(b === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", f), children: [
    a || o ? /* @__PURE__ */ c("div", { className: l(b === "left" ? "pt-2" : "", "min-w-0"), children: [
      a ? /* @__PURE__ */ c("label", { htmlFor: R, className: l("block text-sm font-medium text-white", w), children: [
        a,
        Y ? /* @__PURE__ */ t("span", { className: "ml-1 text-[var(--rui-accent)]", children: "*" }) : null
      ] }) : null,
      o ? /* @__PURE__ */ t("div", { id: `${R}-description`, className: l("mt-1 text-sm text-[var(--rui-text-secondary)]", g), children: o }) : null
    ] }) : null,
    /* @__PURE__ */ c("div", { className: "min-w-0", children: [
      U,
      s ? /* @__PURE__ */ t("div", { id: `${R}-error`, className: l("mt-1 text-sm text-[var(--rui-danger)]", N), children: s }) : d ? /* @__PURE__ */ t("div", { id: `${R}-helper`, className: l("mt-1 text-sm text-[var(--rui-text-tertiary)]", I), children: d }) : null
    ] })
  ] });
}), un = Ge(function({
  value: r,
  defaultValue: i = "",
  onChange: u,
  label: a,
  description: o,
  error: s,
  helperText: d,
  labelPosition: b = "top",
  wrapperClassName: f,
  labelClassName: w,
  descriptionClassName: g,
  errorClassName: N,
  helperClassName: I,
  textareaClassName: m,
  accentKey: S,
  className: C,
  style: A,
  id: D,
  disabled: te,
  required: Q,
  rows: K = 5,
  ...Y
}, O) {
  const [P, _] = Je({
    value: r,
    defaultValue: i,
    onChange: u
  }), F = tt(), E = D ?? Y.name ?? F, R = [o ? `${E}-description` : null, s ? `${E}-error` : null, d ? `${E}-helper` : null].filter(Boolean).join(" ") || void 0, ee = ce(S, A);
  return /* @__PURE__ */ c("div", { className: l(b === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", f), children: [
    a || o ? /* @__PURE__ */ c("div", { className: l(b === "left" ? "pt-2" : "", "min-w-0"), children: [
      a ? /* @__PURE__ */ c("label", { htmlFor: E, className: l("block text-sm font-medium text-white", w), children: [
        a,
        Q ? /* @__PURE__ */ t("span", { className: "ml-1 text-[var(--rui-accent)]", children: "*" }) : null
      ] }) : null,
      o ? /* @__PURE__ */ t("div", { id: `${E}-description`, className: l("mt-1 text-sm text-[var(--rui-text-secondary)]", g), children: o }) : null
    ] }) : null,
    /* @__PURE__ */ c("div", { className: "min-w-0", children: [
      /* @__PURE__ */ t(
        "textarea",
        {
          ref: O,
          id: E,
          value: P,
          onChange: (G) => _(G.target.value),
          disabled: te,
          required: Q,
          rows: K,
          "aria-invalid": !!s || void 0,
          "aria-describedby": R,
          style: ee,
          className: l(
            "rui-input min-h-[96px] w-full px-3 py-2.5 text-sm outline-none transition placeholder:text-[var(--rui-text-tertiary)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
            C,
            m
          ),
          ...Y
        }
      ),
      s ? /* @__PURE__ */ t("div", { id: `${E}-error`, className: l("mt-1 text-sm text-[var(--rui-danger)]", N), children: s }) : d ? /* @__PURE__ */ t("div", { id: `${E}-helper`, className: l("mt-1 text-sm text-[var(--rui-text-tertiary)]", I), children: d }) : null
    ] })
  ] });
});
function Ur(e) {
  if (e.trim() === "") return null;
  const r = Number(e);
  return Number.isFinite(r) ? r : null;
}
function xt(e) {
  return e == null ? "" : String(e);
}
const fn = Ge(function({
  value: r,
  defaultValue: i = null,
  onChange: u,
  onValueChange: a,
  label: o,
  description: s,
  error: d,
  helperText: b,
  labelPosition: f = "top",
  wrapperClassName: w,
  labelClassName: g,
  descriptionClassName: N,
  errorClassName: I,
  helperClassName: m,
  inputClassName: S,
  prefix: C,
  suffix: A,
  accentKey: D,
  className: te,
  style: Q,
  id: K,
  disabled: Y,
  required: O,
  step: P,
  min: _,
  max: F,
  ...E
}, R) {
  const [ee, G] = Je({
    value: r,
    defaultValue: i,
    onChange: u
  }), [U, W] = le(() => xt(r ?? i)), re = tt(), T = K ?? E.name ?? re, je = [s ? `${T}-description` : null, d ? `${T}-error` : null, b ? `${T}-helper` : null].filter(Boolean).join(" ") || void 0, M = ce(D, Q);
  return q(() => {
    r !== void 0 && W(xt(r));
  }, [r]), q(() => {
    r === void 0 && U === "" && ee != null && W(xt(ee));
  }, [ee, U, r]), /* @__PURE__ */ c("div", { className: l(f === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", w), children: [
    o || s ? /* @__PURE__ */ c("div", { className: l(f === "left" ? "pt-2" : "", "min-w-0"), children: [
      o ? /* @__PURE__ */ c("label", { htmlFor: T, className: l("block text-sm font-medium text-white", g), children: [
        o,
        O ? /* @__PURE__ */ t("span", { className: "ml-1 text-[var(--rui-accent)]", children: "*" }) : null
      ] }) : null,
      s ? /* @__PURE__ */ t("div", { id: `${T}-description`, className: l("mt-1 text-sm text-[var(--rui-text-secondary)]", N), children: s }) : null
    ] }) : null,
    /* @__PURE__ */ c("div", { className: "min-w-0", children: [
      /* @__PURE__ */ c("div", { className: "flex min-w-0 items-stretch gap-2", children: [
        C ? /* @__PURE__ */ t("div", { className: "inline-flex items-center text-[var(--rui-text-tertiary)]", children: C }) : null,
        /* @__PURE__ */ t(
          "input",
          {
            ref: R,
            id: T,
            type: "text",
            inputMode: "decimal",
            value: U,
            onChange: ($) => {
              const ae = $.target.value, oe = Ur(ae);
              W(ae), G(oe), a == null || a(oe, ae);
            },
            disabled: Y,
            required: O,
            min: _,
            max: F,
            step: P,
            "aria-invalid": !!d || void 0,
            "aria-describedby": je,
            style: M,
            className: l(
              "rui-input h-10 min-w-0 w-full px-3 text-sm outline-none transition placeholder:text-[var(--rui-text-tertiary)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
              te,
              S
            ),
            ...E
          }
        ),
        A ? /* @__PURE__ */ t("div", { className: "inline-flex items-center text-[var(--rui-text-tertiary)]", children: A }) : null
      ] }),
      d ? /* @__PURE__ */ t("div", { id: `${T}-error`, className: l("mt-1 text-sm text-[var(--rui-danger)]", I), children: d }) : b ? /* @__PURE__ */ t("div", { id: `${T}-helper`, className: l("mt-1 text-sm text-[var(--rui-text-tertiary)]", m), children: b }) : null
    ] })
  ] });
});
function hn({
  checked: e,
  defaultChecked: r,
  onCheckedChange: i,
  title: u,
  description: a,
  helper: o,
  leading: s,
  trailing: d,
  disabled: b,
  accentKey: f,
  style: w,
  className: g,
  contentClassName: N,
  titleClassName: I,
  descriptionClassName: m,
  helperClassName: S
}) {
  const C = ce(f, w);
  return /* @__PURE__ */ c(
    "div",
    {
      style: C,
      className: l(
        "flex items-start justify-between gap-4 rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-black/10 px-4 py-3",
        b && "opacity-60",
        g
      ),
      children: [
        /* @__PURE__ */ t("div", { className: l("min-w-0 flex-1", N), children: /* @__PURE__ */ c("div", { className: "flex items-start gap-3", children: [
          s ? /* @__PURE__ */ t("div", { className: "mt-0.5 flex-shrink-0 text-[var(--rui-text-secondary)]", children: s }) : null,
          /* @__PURE__ */ c("div", { className: "min-w-0", children: [
            u ? /* @__PURE__ */ t("div", { className: l("text-sm font-medium text-white", I), children: u }) : null,
            a ? /* @__PURE__ */ t("div", { className: l("mt-1 text-xs text-[var(--rui-text-secondary)]", m), children: a }) : null,
            o ? /* @__PURE__ */ t("div", { className: l("mt-2 text-xs text-[var(--rui-text-tertiary)]", S), children: o }) : null
          ] })
        ] }) }),
        /* @__PURE__ */ c("div", { className: "flex flex-shrink-0 items-center gap-3", children: [
          d,
          /* @__PURE__ */ t(
            Wr,
            {
              checked: e,
              defaultChecked: r,
              onCheckedChange: i,
              disabled: b,
              "aria-label": typeof u == "string" ? u : void 0
            }
          )
        ] })
      ]
    }
  );
}
function Wt(e, r, i) {
  return Math.min(i, Math.max(r, e));
}
function mn({
  content: e,
  children: r,
  placement: i = "top",
  delay: u = 120,
  open: a,
  defaultOpen: o = !1,
  onOpenChange: s,
  accentKey: d,
  className: b,
  panelClassName: f
}) {
  const [w, g] = Je({
    value: a,
    defaultValue: o,
    onChange: s
  }), [N, I] = le(!1), [m, S] = le({ top: 0, left: 0, placement: i }), C = me(null), A = me(null), D = me(null), te = ce(d);
  q(() => I(!0), []);
  const Q = X(
    () => () => {
      if (typeof window > "u") return;
      const O = C.current, P = A.current;
      if (!O || !P) return;
      const _ = O.getBoundingClientRect(), F = P.getBoundingClientRect(), E = 10, R = 12, ee = window.innerWidth, G = window.innerHeight, U = i;
      let W = U;
      U === "top" && _.top - F.height - E < R && (W = "bottom"), U === "bottom" && _.bottom + F.height + E > G - R && (W = "top"), U === "left" && _.left - F.width - E < R && (W = "right"), U === "right" && _.right + F.width + E > ee - R && (W = "left");
      let re = _.top, T = _.left;
      W === "top" && (re = _.top - F.height - E), W === "bottom" && (re = _.bottom + E), W === "left" && (T = _.left - F.width - E), W === "right" && (T = _.right + E), (W === "top" || W === "bottom") && (T = _.left + _.width / 2 - F.width / 2), (W === "left" || W === "right") && (re = _.top + _.height / 2 - F.height / 2), S({
        placement: W,
        top: Wt(re, R, G - F.height - R),
        left: Wt(T, R, ee - F.width - R)
      });
    },
    [i]
  );
  q(() => {
    if (!w) {
      D.current && window.clearTimeout(D.current), D.current = null;
      return;
    }
    const O = window.setTimeout(Q, 0), P = () => Q();
    return window.addEventListener("resize", P), window.addEventListener("scroll", P, !0), () => {
      window.clearTimeout(O), window.removeEventListener("resize", P), window.removeEventListener("scroll", P, !0);
    };
  }, [w, Q]);
  const K = () => {
    if (typeof window < "u" && D.current && window.clearTimeout(D.current), u > 0) {
      D.current = window.setTimeout(() => g(!0), u);
      return;
    }
    g(!0);
  }, Y = () => {
    typeof window < "u" && D.current && window.clearTimeout(D.current), D.current = null, g(!1);
  };
  return /* @__PURE__ */ c("span", { ref: C, className: l("inline-flex", b), onMouseEnter: K, onMouseLeave: Y, onFocus: K, onBlur: Y, children: [
    r,
    N && w && typeof document < "u" ? dt(
      /* @__PURE__ */ t(
        "div",
        {
          ref: A,
          role: "tooltip",
          style: { ...te, position: "fixed", top: m.top, left: m.left },
          className: l(
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
  Zr as AccentProvider,
  Ot as Badge,
  Ot as BadgeDefault,
  qr as Banner,
  qr as BannerDefault,
  be as Button,
  be as ButtonDefault,
  Kr as ChipCard,
  Kr as ChipCardDefault,
  gr as DynamicPanel,
  en as GridLayout,
  en as GridLayoutDefault,
  ve as Icon,
  tn as Logger,
  tn as LoggerDefault,
  rn as Notification,
  Br as NotificationViewport,
  Br as NotificationViewportDefault,
  fn as Number,
  fn as NumberInput,
  fn as NumberInputDefault,
  nn as Page,
  an as PageContainer,
  Mr as PageHeader,
  ln as RadioCard,
  ln as RadioCardDefault,
  cn as SelectBox,
  cn as SelectBoxDefault,
  sn as Sidebar,
  sn as SidebarDefault,
  Wr as Switch,
  Wr as SwitchDefault,
  on as Table,
  on as TableDefault,
  dn as Text,
  un as TextArea,
  un as TextAreaDefault,
  dn as TextDefault,
  hn as ToggleCard,
  hn as ToggleCardDefault,
  mn as Tooltip,
  mn as TooltipDefault,
  Ht as accentTokensToCssVars,
  zt as defaultAccentKey,
  cr as defaultAccentPresets,
  Pt as defaultAccentTokens,
  or as useAccent,
  ce as useAccentStyle
};
//# sourceMappingURL=index.js.map
