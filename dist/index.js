import { jsx as e, jsxs as c, Fragment as Zt } from "react/jsx-runtime";
import Gt, { createContext as xr, useContext as pr, useMemo as ne, forwardRef as Ve, isValidElement as Jt, useState as he, useRef as ve, useEffect as ae, useCallback as Ie, useId as lt } from "react";
import { createPortal as bt } from "react-dom";
function l(...t) {
  return t.filter(Boolean).join(" ");
}
const Ut = "default", Xt = {
  bgApp: "#5d6180",
  bgSurface: "#2d305f",
  bgSurface2: "#303466",
  bgCard: "#2d305f",
  bgCard2: "#303466",
  bgPanel: "#2d305f",
  bgPanel2: "#303466",
  bgInput: "#e7e9ef",
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
  shadowPanel: "0 14px 30px rgba(6, 9, 35, 0.22)",
  radiusPanel: "14px",
  radiusControl: "4px"
}, Qt = {
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
}, Ue = {
  bgApp: "#f9fafb",
  bgSurface: "#ffffff",
  bgSurface2: "#f9fafb",
  bgCard: "#ffffff",
  bgCard2: "#f9fafb",
  bgPanel: "#ffffff",
  bgPanel2: "#f9fafb",
  bgInput: "#ffffff",
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
Object.assign(Qt, {
  light: {
    ...Ue,
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
    ...Ue,
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
    ...Ue,
    accent: "#0ba5ec",
    accentStrong: "#007aff",
    accentSoft: "#f0f9ff",
    accentMuted: "rgba(11, 165, 236, 0.08)",
    accentBorder: "#569ff7",
    accentBorderSoft: "rgba(11, 165, 236, 0.22)",
    accentSoftText: "#0ba5ec",
    accentOutlineText: "#0ba5ec"
  },
  "light-success": {
    ...Ue,
    accent: "#12b76a",
    accentStrong: "#039855",
    accentSoft: "#ecfdf3",
    accentMuted: "rgba(18, 183, 106, 0.08)",
    accentBorder: "#6ce9a6",
    accentBorderSoft: "rgba(18, 183, 106, 0.22)",
    accentSoftText: "#05603a",
    accentOutlineText: "#039855"
  },
  "light-warning": {
    ...Ue,
    accent: "#f79009",
    accentStrong: "#dc6803",
    accentSoft: "#fffaeb",
    accentMuted: "rgba(247, 144, 9, 0.08)",
    accentBorder: "rgba(247, 144, 9, 0.42)",
    accentBorderSoft: "rgba(247, 144, 9, 0.24)",
    accentSoftText: "#dc6803",
    accentOutlineText: "#dc6803"
  },
  "light-danger": {
    ...Ue,
    accent: "#f04438",
    accentStrong: "#d92d20",
    accentSoft: "#fef3f2",
    accentMuted: "rgba(240, 68, 56, 0.08)",
    accentBorder: "#fda29b",
    accentBorderSoft: "rgba(240, 68, 56, 0.22)",
    accentSoftText: "#912018",
    accentOutlineText: "#d92d20"
  },
  "light-neutral": {
    ...Ue,
    accent: "#667085",
    accentStrong: "#344054",
    accentSoft: "#f2f4f7",
    accentMuted: "rgba(16, 24, 40, 0.05)",
    accentBorder: "#d0d5dd",
    accentBorderSoft: "#e4e7ec",
    accentSoftText: "#344054",
    accentOutlineText: "#344054"
  }
});
const Yt = xr(null);
function qt(t, r, i) {
  return {
    ...Xt,
    ...Qt[t] || {},
    ...(r == null ? void 0 : r[t]) || {},
    ...i || {}
  };
}
function Kt(t) {
  const r = { ...Xt, ...t };
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
    "--rui-shadow-panel": r.shadowPanel,
    "--rui-radius-panel": r.radiusPanel,
    "--rui-radius-control": r.radiusControl
  };
}
function vr(t, r) {
  const i = pr(Yt), d = !!(i || t || r), s = (i == null ? void 0 : i.accentKey) ?? t ?? Ut, o = ne(
    () => qt(s, i == null ? void 0 : i.accents, i != null && i.tokens ? { ...i.tokens, ...r } : r),
    [i == null ? void 0 : i.accents, i == null ? void 0 : i.tokens, s, r]
  ), a = ne(() => d ? Kt(o) : void 0, [d, o]);
  return { accentKey: s, tokens: o, style: a };
}
function pe(t, r, i) {
  const d = vr(t, i);
  return ne(() => d.style ? { ...d.style, ...r } : r, [d.style, r]);
}
function fn({ accentKey: t = Ut, accents: r, tokens: i, children: d, className: s, style: o }) {
  const a = ne(() => ({ accentKey: t, accents: r, tokens: i }), [t, r, i]), u = ne(() => ({ ...Kt(qt(t, r, i)), ...o }), [t, r, o, i]);
  return /* @__PURE__ */ e(Yt.Provider, { value: a, children: /* @__PURE__ */ e("div", { className: l("rui-theme", s), style: u, children: d }) });
}
const gr = {
  neutral: "border-[var(--rui-border-soft)] bg-white/[0.06] text-[var(--rui-text-secondary)]",
  accent: "border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] text-[var(--rui-accent)]",
  success: "border-[var(--rui-success-border)] bg-[var(--rui-success-soft)] text-[var(--rui-success)]",
  warning: "border-[var(--rui-warning-border)] bg-[var(--rui-warning-soft)] text-[var(--rui-warning)]",
  danger: "border-[var(--rui-danger-border)] bg-[var(--rui-danger-soft)] text-[var(--rui-danger)]",
  info: "border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] text-[var(--rui-accent-soft-text)]"
};
function er({ children: t, tone: r = "accent", className: i, accentKey: d, style: s, ...o }) {
  const a = pe(d, s);
  return /* @__PURE__ */ e(
    "span",
    {
      style: a,
      className: l("inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium leading-5", gr[r], i),
      ...o,
      children: t
    }
  );
}
const wr = {
  info: { bg: "var(--rui-accent-soft)", border: "var(--rui-accent-border)", text: "var(--rui-text-primary)" },
  accent: { bg: "var(--rui-accent-soft)", border: "var(--rui-accent-border)", text: "var(--rui-text-primary)" },
  success: { bg: "var(--rui-success-soft)", border: "var(--rui-success-border)", text: "var(--rui-text-primary)" },
  warning: { bg: "var(--rui-warning-soft)", border: "var(--rui-warning-border)", text: "var(--rui-text-primary)" },
  danger: { bg: "var(--rui-danger-soft)", border: "var(--rui-danger-border)", text: "var(--rui-text-primary)" },
  neutral: { bg: "var(--rui-bg-panel-2)", border: "var(--rui-border-soft)", text: "var(--rui-text-primary)" }
};
function hn({
  tone: t = "info",
  title: r,
  children: i,
  actions: d,
  icon: s,
  className: o,
  contentClassName: a,
  titleClassName: u,
  actionsClassName: m,
  accentClassName: f,
  accentKey: w,
  accentColor: g,
  backgroundColor: N,
  borderColor: I,
  textColor: p,
  showToneBadge: k = !1
}) {
  const C = wr[t], T = {
    borderColor: I ?? C.border,
    background: N ?? C.bg,
    color: p ?? C.text,
    boxShadow: "0 16px 36px rgba(4, 8, 26, 0.22)",
    "--rui-banner-accent": g ?? I ?? C.border
  }, L = pe(w, T);
  return /* @__PURE__ */ c("section", { className: l("relative overflow-hidden rounded-[var(--rui-radius-panel)] border px-4 py-3", g && "pl-5", o), style: L, children: [
    g ? /* @__PURE__ */ e("div", { "aria-hidden": "true", className: l("absolute inset-y-0 left-0 w-1 bg-[var(--rui-banner-accent)]", f) }) : null,
    /* @__PURE__ */ c("div", { className: l("flex items-start gap-3", a), children: [
      s ? /* @__PURE__ */ e("div", { className: "mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)] text-inherit", children: s }) : null,
      /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
        r ? /* @__PURE__ */ c("div", { className: l("mb-1 flex items-center gap-2 text-sm font-semibold", u), children: [
          r,
          k ? /* @__PURE__ */ e(er, { tone: t === "neutral" ? "neutral" : t === "accent" ? "accent" : t, children: t }) : null
        ] }) : null,
        /* @__PURE__ */ e("div", { className: "text-sm leading-6 opacity-90", children: i })
      ] }),
      d ? /* @__PURE__ */ e("div", { className: l("flex flex-shrink-0 items-center gap-2", m), children: d }) : null
    ] })
  ] });
}
const yr = {
  primary: "border border-[var(--rui-accent)] bg-[var(--rui-accent)] text-[var(--rui-accent-contrast)] hover:brightness-110 focus-visible:ring-[var(--rui-accent)]",
  secondary: "border border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] text-[var(--rui-accent-soft-text)] hover:brightness-110 focus-visible:ring-[var(--rui-accent)]",
  outline: "border border-[var(--rui-accent)] bg-transparent text-[var(--rui-accent-outline-text)] hover:bg-[var(--rui-accent-muted)] focus-visible:ring-[var(--rui-accent)]",
  ghost: "border border-[var(--rui-border-soft)] bg-transparent text-[var(--rui-text-secondary)] hover:bg-[var(--rui-accent-muted)] hover:text-[var(--rui-text-primary)] focus-visible:ring-[var(--rui-accent)]",
  danger: "border border-[var(--rui-danger-border)] bg-[var(--rui-danger-soft)] text-[var(--rui-text-primary)] hover:bg-[var(--rui-danger-soft)] focus-visible:ring-[var(--rui-danger)]",
  success: "border border-[var(--rui-success-border)] bg-[var(--rui-success-soft)] text-[var(--rui-text-primary)] hover:bg-[var(--rui-success-soft)] focus-visible:ring-[var(--rui-success)]",
  warning: "border border-[var(--rui-warning-border)] bg-[var(--rui-warning-soft)] text-[var(--rui-text-primary)] hover:bg-[var(--rui-warning-soft)] focus-visible:ring-[var(--rui-warning)]",
  subtle: "border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)] text-[var(--rui-text-primary)] hover:bg-[var(--rui-accent-muted)] focus-visible:ring-[var(--rui-accent)]",
  icon: "border border-[var(--rui-border-soft)] bg-transparent text-[var(--rui-text-secondary)] hover:bg-[var(--rui-accent-muted)] hover:text-[var(--rui-text-primary)] focus-visible:ring-[var(--rui-accent)]"
}, Nr = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-sm"
};
function Sr() {
  return /* @__PURE__ */ c("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", className: "h-4 w-4 animate-spin", children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9", fill: "none", stroke: "currentColor", strokeWidth: "2", opacity: "0.18" }),
    /* @__PURE__ */ e("path", { d: "M21 12a9 9 0 0 0-9-9", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
  ] });
}
function kr(t) {
  return Jt(t) && String(t.props.className || "").split(/\s+/).includes("sr-only");
}
const ge = Ve(function({
  className: r,
  children: i,
  variant: d = "outline",
  size: s = "md",
  leftIcon: o,
  rightIcon: a,
  leftIconClassName: u,
  rightIconClassName: m,
  accentKey: f,
  loading: w = !1,
  fullWidth: g = !1,
  type: N = "button",
  disabled: I,
  style: p,
  ...k
}, C) {
  const T = I || w, L = pe(f, p), U = i != null && i !== !1, z = kr(i), $ = U && !z && !o && !a && Jt(i);
  return /* @__PURE__ */ c(
    "button",
    {
      ref: C,
      type: N,
      disabled: T,
      "aria-busy": w || void 0,
      style: L,
      className: l(
        "inline-flex items-center justify-center gap-2 rounded-[8px] font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:border-white/5 disabled:bg-white/5 disabled:text-white/35 disabled:opacity-80",
        yr[d],
        Nr[s],
        g && "w-full",
        r
      ),
      ...k,
      children: [
        w ? /* @__PURE__ */ e(Sr, {}) : o ? /* @__PURE__ */ e("span", { className: l("inline-flex shrink-0 items-center", u), children: o }) : null,
        U ? z ? i : /* @__PURE__ */ e("span", { className: l("inline-flex items-center justify-center", $ ? "shrink-0" : "min-w-0 truncate"), children: i }) : null,
        a ? /* @__PURE__ */ e("span", { className: l("inline-flex shrink-0 items-center", m), children: a }) : null
      ]
    }
  );
}), Wt = {
  none: "",
  sm: "p-3",
  md: "p-5",
  lg: "p-6"
};
function Mr(t) {
  return t === !1 || t === "none" ? "" : t === !0 ? Wt.md : Wt[t];
}
const mn = Ve(function({ children: r, className: i, contentClassName: d, padded: s = !0, interactive: o = !1, accentKey: a, style: u, ...m }, f) {
  const w = pe(a, u);
  return /* @__PURE__ */ e(
    "div",
    {
      ref: f,
      style: w,
      className: l(
        "rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] text-[var(--rui-text-primary)] shadow-panel",
        o && "transition hover:border-[var(--rui-accent-border-soft)] hover:bg-[var(--rui-bg-panel-2)]",
        Mr(s),
        i
      ),
      ...m,
      children: d ? /* @__PURE__ */ e("div", { className: d, children: r }) : r
    }
  );
}), _t = {
  neutral: "border-[var(--rui-border-soft)] bg-[linear-gradient(180deg,var(--rui-bg-surface-2),var(--rui-bg-card))]",
  accent: "border-[var(--rui-accent-border-soft)] bg-[linear-gradient(180deg,var(--rui-accent-muted),var(--rui-bg-card))]",
  success: "border-[var(--rui-success-border)] bg-[linear-gradient(180deg,var(--rui-success-soft),var(--rui-bg-card))]",
  warning: "border-[var(--rui-warning-border)] bg-[linear-gradient(180deg,var(--rui-warning-soft),var(--rui-bg-card))]",
  danger: "border-[var(--rui-danger-border)] bg-[linear-gradient(180deg,var(--rui-danger-soft),var(--rui-bg-card))]"
};
function bn({
  title: t,
  value: r,
  helper: i,
  leading: d,
  trailing: s,
  tone: o = "accent",
  selected: a = !1,
  disabled: u = !1,
  onClick: m,
  accentKey: f,
  style: w,
  className: g,
  contentClassName: N,
  titleClassName: I,
  valueClassName: p,
  helperClassName: k
}) {
  const C = !!m, T = pe(f, w);
  return C ? /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: m,
      disabled: u,
      "aria-pressed": a,
      style: T,
      className: l(
        "rounded-[var(--rui-radius-panel)] border p-4 text-left outline-none transition",
        _t[o],
        a && "border-[var(--rui-accent-border)] shadow-[0_0_0_1px_var(--rui-accent-muted)]",
        !u && "cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.36)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0",
        u && "cursor-not-allowed opacity-60",
        g
      ),
      children: /* @__PURE__ */ c("div", { className: l("flex h-full min-h-[104px] flex-col justify-between gap-3", N), children: [
        /* @__PURE__ */ c("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ c("div", { className: "min-w-0", children: [
            t ? /* @__PURE__ */ e("div", { className: l("text-xs uppercase tracking-[0.18em] text-[var(--rui-text-tertiary)]", I), children: t }) : null,
            r ? /* @__PURE__ */ e("div", { className: l("mt-2 text-2xl font-semibold text-[var(--rui-text-primary)]", p), children: r }) : null
          ] }),
          s ? /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: s }) : null
        ] }),
        /* @__PURE__ */ c("div", { className: "flex items-end justify-between gap-3", children: [
          i ? /* @__PURE__ */ e("div", { className: l("text-sm text-[var(--rui-text-secondary)]", k), children: i }) : /* @__PURE__ */ e("span", {}),
          d ? /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-[var(--rui-text-secondary)]", children: d }) : null
        ] })
      ] })
    }
  ) : /* @__PURE__ */ e(
    "div",
    {
      style: T,
      className: l(
        "rounded-[var(--rui-radius-panel)] border p-4 text-left outline-none transition",
        _t[o],
        a && "border-[var(--rui-accent-border)] shadow-[0_0_0_1px_var(--rui-accent-muted)]",
        g
      ),
      children: /* @__PURE__ */ c("div", { className: l("flex h-full min-h-[104px] flex-col justify-between gap-3", N), children: [
        /* @__PURE__ */ c("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ c("div", { className: "min-w-0", children: [
            t ? /* @__PURE__ */ e("div", { className: l("text-xs uppercase tracking-[0.18em] text-[var(--rui-text-tertiary)]", I), children: t }) : null,
            r ? /* @__PURE__ */ e("div", { className: l("mt-2 text-2xl font-semibold text-[var(--rui-text-primary)]", p), children: r }) : null
          ] }),
          s ? /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: s }) : null
        ] }),
        /* @__PURE__ */ c("div", { className: "flex items-end justify-between gap-3", children: [
          i ? /* @__PURE__ */ e("div", { className: l("text-sm text-[var(--rui-text-secondary)]", k), children: i }) : /* @__PURE__ */ e("span", {}),
          d ? /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-[var(--rui-text-secondary)]", children: d }) : null
        ] })
      ] })
    }
  );
}
const x = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
function B({ className: t, title: r, children: i, viewBox: d = "0 0 24 24", ...s }) {
  return /* @__PURE__ */ c("svg", { viewBox: d, className: l("h-5 w-5 shrink-0", t), "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ...s, children: [
    r ? /* @__PURE__ */ e("title", { children: r }) : null,
    i
  ] });
}
function Be({ name: t, ...r }) {
  switch (t) {
    case "actions":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M5 7h14M8 12h11M11 17h8" }) });
    case "alert":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("path", { ...x, d: "M12 4.7 20 18H4z" }),
        /* @__PURE__ */ e("path", { ...x, d: "M12 9v4M12 15.5h.01" })
      ] });
    case "bars":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M6 18V9M12 18V5M18 18v-7" }) });
    case "bell":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M8 18h8M7 16h10l-1-2v-3.5A4 4 0 0 0 12 6a4 4 0 0 0-4 4.5V14Z" }) });
    case "card":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("rect", { x: "4", y: "6.5", width: "16", height: "11", rx: "2.5", ...x }),
        /* @__PURE__ */ e("path", { ...x, d: "M4 10h16" })
      ] });
    case "chart":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M6 18V9M12 18V6M18 18v-8M4.5 19.5h15" }) });
    case "check":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "3", ...x }),
        /* @__PURE__ */ e("path", { ...x, d: "m8.5 12 2.3 2.3 4.7-5.3" })
      ] });
    case "chevron-down":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "m6 9 6 6 6-6" }) });
    case "chevron-right":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "m10 6 6 6-6 6" }) });
    case "close":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "m6 6 12 12M18 6 6 18" }) });
    case "coins":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("ellipse", { cx: "12", cy: "7", rx: "5", ry: "2.6", ...x }),
        /* @__PURE__ */ e("path", { ...x, d: "M7 7v5c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6V7" }),
        /* @__PURE__ */ e("path", { ...x, d: "M7 12v5c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6v-5" })
      ] });
    case "discord":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("path", { ...x, d: "M8 8c2.5-1.4 5.5-1.4 8 0" }),
        /* @__PURE__ */ e("path", { ...x, d: "M8 8c-1.2 1.9-1.8 4-2 6 2 .9 4 1.3 6 1.4 2-.1 4-.5 6-1.4-.2-2-1-4.1-2-6" }),
        /* @__PURE__ */ e("circle", { cx: "10", cy: "12.4", r: "1.1", fill: "currentColor" }),
        /* @__PURE__ */ e("circle", { cx: "14", cy: "12.4", r: "1.1", fill: "currentColor" }),
        /* @__PURE__ */ e("path", { ...x, d: "M10 15c1.2.7 2.8.7 4 0" })
      ] });
    case "dollar":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M12 4v16M15.5 7.5C14.8 6.5 13.5 6 12 6c-2 0-3.5 1-3.5 2.5S9.8 11 12 11s3.5 1 3.5 2.5S14 16 12 16c-1.5 0-2.8-.5-3.7-1.6" }) });
    case "download":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M12 5v10M8 11l4 4 4-4M5 19h14" }) });
    case "exclamation":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "8.1", ...x }),
        /* @__PURE__ */ e("path", { ...x, d: "M12 7.8v6.1M12 16.7h.01" })
      ] });
    case "eye":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("path", { ...x, d: "M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" }),
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "2.6", fill: "none", stroke: "currentColor", strokeWidth: "1.8" })
      ] });
    case "filter":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M5 6h14l-5.5 6.2v5.3l-3-1.6v-3.7Z" }) });
    case "folder":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("path", { ...x, d: "M3.5 7.5h6l1.5 2h9v7.5a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2Z" }),
        /* @__PURE__ */ e("path", { ...x, d: "M3.5 10.5h17" })
      ] });
    case "grid":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z" }) });
    case "info":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "8.4", ...x }),
        /* @__PURE__ */ e("path", { ...x, d: "M12 10v5M12 8h.01" })
      ] });
    case "live":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "2.2", fill: "currentColor" }),
        /* @__PURE__ */ e("path", { ...x, d: "M6.5 12a5.5 5.5 0 0 1 11 0M4 12a8 8 0 0 1 16 0" })
      ] });
    case "maximize":
    case "maximize-screen":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M8 4H4v4M16 4h4v4M4 16v4h4M20 16v4h-4" }) });
    case "menu":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M4 7h16M4 12h16M4 17h16" }) });
    case "minimize":
    case "minimize-screen":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M9 4H4v5M15 4h5v5M4 15v5h5M20 15v5h-5" }) });
    case "minus":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M5 12h14" }) });
    case "moon":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M19 14.5A7.5 7.5 0 1 1 9.5 5a6.3 6.3 0 0 0 9.5 9.5Z" }) });
    case "panel":
    case "panel-restore":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("rect", { x: "6", y: "6", width: "12", height: "12", rx: "1.8", ...x }) });
    case "pause":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M8.5 6.5v11M15.5 6.5v11" }) });
    case "play":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M8 6.5v11l8-5.5-8-5.5Z" }) });
    case "plus":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M12 5v14M5 12h14" }) });
    case "refresh":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M18 8V4l-3 3m3 0a6.5 6.5 0 1 0 1.2 7.5" }) });
    case "save":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("path", { ...x, d: "M5 5h11l3 3v11H5Z" }),
        /* @__PURE__ */ e("path", { ...x, d: "M8 5v5h8" }),
        /* @__PURE__ */ e("path", { ...x, d: "M9 18h6" })
      ] });
    case "search":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "6", ...x }),
        /* @__PURE__ */ e("path", { ...x, d: "m16 16 4 4" })
      ] });
    case "settings":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "2.6", ...x }),
        /* @__PURE__ */ e("path", { ...x, d: "M12 4.8v1.8M12 17.4v1.8M19.2 12h-1.8M6.6 12H4.8M17.1 6.9l-1.3 1.3M8.2 15.8l-1.3 1.3M17.1 17.1l-1.3-1.3M8.2 8.2 6.9 6.9" })
      ] });
    case "share":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M8 12a4 4 0 0 1 8 0M7 7l5 5-5 5M17 7l-5 5 5 5" }) });
    case "sidebar-collapsed":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("rect", { x: "4", y: "5", width: "16", height: "14", rx: "2", ...x }),
        /* @__PURE__ */ e("path", { ...x, d: "M15 5v14" })
      ] });
    case "sidebar-open":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("rect", { x: "4", y: "5", width: "16", height: "14", rx: "2", ...x }),
        /* @__PURE__ */ e("path", { ...x, d: "M9 5v14" })
      ] });
    case "sparkle":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "m12 4 1.8 4.2L18 10l-4.2 1.8L12 16l-1.8-4.2L6 10l4.2-1.8Z" }) });
    case "stop":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("rect", { x: "7", y: "7", width: "10", height: "10", rx: "2", ...x }) });
    case "store":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("path", { ...x, d: "M4 9h16l-1 3a3 3 0 0 1-3 2H8a3 3 0 0 1-3-2Z" }),
        /* @__PURE__ */ e("path", { ...x, d: "M6 14v5h12v-5" })
      ] });
    case "support":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("path", { ...x, d: "M5 13v-1a7 7 0 0 1 14 0v1" }),
        /* @__PURE__ */ e("path", { ...x, d: "M5 12.5v3a2 2 0 0 0 2 2h2v-5H7a2 2 0 0 0-2 2ZM19 12.5v3a2 2 0 0 1-2 2h-2v-5h2a2 2 0 0 1 2 2Z" })
      ] });
    case "swap":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M7 8h10m0 0-3-3m3 3-3 3M17 16H7m0 0 3-3m-3 3 3 3" }) });
    case "timer":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "6.5", ...x }),
        /* @__PURE__ */ e("path", { ...x, d: "M12 9v4l2.5 2.5M9 4h6" })
      ] });
    case "trash":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e(
        "path",
        {
          ...x,
          d: "M5.5 7.5h13M9.5 7.5V5.8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.7M8.5 10.5v6M12 10.5v6M15.5 10.5v6M7 7.5l.7 10.2a1.5 1.5 0 0 0 1.5 1.3h5.6a1.5 1.5 0 0 0 1.5-1.3L17 7.5"
        }
      ) });
    case "trenddown":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "M5 8l6 6 3-3 5 5M19 16v-5h-5" }) });
    case "trendup":
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("path", { ...x, d: "m5 16 6-6 3 3 5-5M19 8v5h-5" }) });
    case "user":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("path", { ...x, d: "M12 12a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6Z" }),
        /* @__PURE__ */ e("path", { ...x, d: "M6 19c1.5-2.7 4-4 6-4s4.5 1.3 6 4" })
      ] });
    case "wallet":
      return /* @__PURE__ */ c(B, { ...r, children: [
        /* @__PURE__ */ e("path", { ...x, d: "M4.5 7h13a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 2 16.5V9.5A2.5 2.5 0 0 1 4.5 7Z" }),
        /* @__PURE__ */ e("path", { ...x, d: "M15 12h4" }),
        /* @__PURE__ */ e("circle", { cx: "15.8", cy: "12", r: "0.7", fill: "currentColor" })
      ] });
    default:
      return /* @__PURE__ */ e(B, { ...r, children: /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "7", ...x }) });
  }
}
const Cr = {
  third: "xl:col-span-4",
  half: "xl:col-span-6",
  full: "xl:col-span-12"
};
function tr(t) {
  return t.map((r, i) => ({
    id: r.id,
    order: i,
    width: r.defaultWidth || "full",
    collapsed: !1,
    fullscreen: !1
  }));
}
function mt(t, r) {
  const i = tr(t);
  if (!(r != null && r.length)) return i;
  const d = new Map(r.map((s) => [s.id, s]));
  return t.map((s, o) => {
    const a = d.get(s.id);
    return {
      id: s.id,
      order: (a == null ? void 0 : a.order) ?? o,
      width: (a == null ? void 0 : a.width) ?? s.defaultWidth ?? "full",
      collapsed: !!(a != null && a.collapsed),
      fullscreen: !!(a != null && a.fullscreen)
    };
  }).sort((s, o) => s.order - o.order).map((s, o) => ({ ...s, order: o }));
}
function rr(t, r = "rui:layout") {
  return `${r}:${t}`;
}
function Br(t, r) {
  if (typeof window > "u") return null;
  try {
    const i = window.localStorage.getItem(rr(t, r));
    return i ? JSON.parse(i) : null;
  } catch {
    return null;
  }
}
function Ir(t, r, i) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(rr(t, i), JSON.stringify(r));
    } catch {
    }
}
function Rr({
  panel: t,
  state: r,
  allowMovement: i = !0,
  allowResize: d = !0,
  allowCollapse: s = !0,
  allowFullscreen: o = !0,
  onToggleCollapse: a,
  onToggleFullscreen: u,
  onReset: m,
  onCycleWidth: f,
  onDragStart: w,
  onDragOver: g,
  onDragEnter: N,
  onDrop: I,
  onDragEnd: p,
  renderActions: k,
  renderHeader: C,
  renderPanelControls: T,
  renderMoveHandle: L,
  renderResizeButton: U,
  renderCollapseButton: z,
  renderResetButton: q,
  renderFullscreenButton: $,
  accentKey: X,
  style: Z,
  className: A,
  headerClassName: O,
  bodyClassName: _,
  actionsClassName: E
}) {
  const ee = !!r.collapsed, G = !!r.fullscreen, D = t.description ?? t.subtitle, P = t.actions ?? t.action, te = t.content ?? t.children, H = pe(X, Z), Ce = {
    type: "button",
    draggable: !G,
    onDragStart: w,
    onDragEnd: p,
    className: "cursor-grab rounded border border-white/10 p-1 text-white/55 hover:bg-white/5 hover:text-white active:cursor-grabbing",
    title: "Drag handle"
  }, R = i ? (L == null ? void 0 : L({
    panel: t,
    state: r,
    buttonProps: Ce,
    defaultButton: /* @__PURE__ */ e("button", { ...Ce, children: /* @__PURE__ */ e(Be, { name: "actions", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ e("button", { ...Ce, children: /* @__PURE__ */ e(Be, { name: "actions", className: "h-4 w-4" }) }) : null, V = { title: "Cycle width", onClick: f }, Q = d ? (U == null ? void 0 : U({
    panel: t,
    state: r,
    buttonProps: V,
    defaultButton: /* @__PURE__ */ e(ge, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...V, children: /* @__PURE__ */ e(Be, { name: "grid", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ e(ge, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...V, children: /* @__PURE__ */ e(Be, { name: "grid", className: "h-4 w-4" }) }) : null, me = { title: ee ? "Restore panel" : "Minimize panel", onClick: a }, F = s ? (z == null ? void 0 : z({
    panel: t,
    state: r,
    buttonProps: me,
    defaultButton: /* @__PURE__ */ e(ge, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...me, children: /* @__PURE__ */ e(Be, { name: ee ? "panel" : "minus", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ e(ge, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...me, children: /* @__PURE__ */ e(Be, { name: ee ? "panel" : "minus", className: "h-4 w-4" }) }) : null, de = { title: "Restore default size", onClick: m }, ue = d ? (q == null ? void 0 : q({
    panel: t,
    state: r,
    buttonProps: de,
    defaultButton: /* @__PURE__ */ e(ge, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...de, children: /* @__PURE__ */ e(Be, { name: "refresh", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ e(ge, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...de, children: /* @__PURE__ */ e(Be, { name: "refresh", className: "h-4 w-4" }) }) : null, Y = { title: G ? "Exit fullscreen" : "Fullscreen", onClick: u }, De = o ? ($ == null ? void 0 : $({
    panel: t,
    state: r,
    buttonProps: Y,
    defaultButton: /* @__PURE__ */ e(ge, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...Y, children: /* @__PURE__ */ e(Be, { name: G ? "minimize" : "maximize", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ e(ge, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...Y, children: /* @__PURE__ */ e(Be, { name: G ? "minimize" : "maximize", className: "h-4 w-4" }) }) : null, ke = /* @__PURE__ */ c(Zt, { children: [
    P ? /* @__PURE__ */ e("div", { className: "hidden lg:block", children: P }) : null,
    k == null ? void 0 : k(t, r),
    Q,
    F,
    ue,
    De
  ] }), Re = (T == null ? void 0 : T({ panel: t, state: r, controls: ke })) ?? ke;
  return /* @__PURE__ */ e(
    "div",
    {
      onDragOver: g,
      onDragEnter: N,
      onDrop: I,
      className: l("min-w-0 w-full", !G && "col-span-12", !G && Cr[r.width || "full"], G && "fixed inset-4 z-50", A),
      style: H,
      children: /* @__PURE__ */ c("section", { className: l("min-h-full w-full overflow-hidden rounded-panel rui-panel", t.className, G && "h-[calc(100vh-2rem)]"), children: [
        C ? C(t, r) : /* @__PURE__ */ c(
          "div",
          {
            className: l(
              "flex flex-col gap-3 border-b border-white/8 bg-black/10 px-3 py-3 sm:flex-row sm:items-start sm:justify-between sm:px-4 sm:py-4",
              t.headerClassName,
              O
            ),
            children: [
              /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                R,
                /* @__PURE__ */ c("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ e("div", { className: "truncate text-base font-semibold text-white", children: t.title }),
                  D ? /* @__PURE__ */ e("div", { className: "mt-1 text-sm text-white/60", children: D }) : null
                ] })
              ] }) }),
              /* @__PURE__ */ e("div", { className: l("flex flex-wrap items-center gap-2 sm:shrink-0 sm:justify-end", E), children: Re })
            ]
          }
        ),
        ee ? null : /* @__PURE__ */ e("div", { className: l("min-h-0 p-3 sm:p-5", t.bodyClassName, _, G && "h-[calc(100%-76px)] overflow-auto rui-scrollbar"), children: te })
      ] })
    }
  );
}
function xn({
  panels: t,
  layout: r,
  defaultLayout: i,
  onLayoutChange: d,
  persistenceKey: s,
  storageNamespace: o,
  persistenceAdapter: a,
  allowMovement: u = !0,
  allowResize: m = !0,
  allowCollapse: f = !0,
  allowFullscreen: w = !0,
  renderPanelActions: g,
  renderHeader: N,
  renderPanelControls: I,
  renderMoveHandle: p,
  renderResizeButton: k,
  renderCollapseButton: C,
  renderResetButton: T,
  renderFullscreenButton: L,
  accentKey: U,
  style: z,
  className: q,
  panelClassName: $,
  panelHeaderClassName: X,
  panelBodyClassName: Z,
  panelActionsClassName: A
}) {
  const [O, _] = he(
    () => mt(t, i || (s ? Br(s, o) : null))
  ), E = ve(null), [ee, G] = he(null), [D, P] = he(() => !s || !a), te = r !== void 0, H = ne(() => mt(t, te ? r : O), [te, O, r, t]), Ce = ne(() => new Map(t.map((M) => [M.id, M])), [t]), R = pe(U, z), V = ve(t), Q = ve(H), me = ve(te), F = ve(d);
  ae(() => {
    V.current = t;
  }, [t]), ae(() => {
    Q.current = H;
  }, [H]), ae(() => {
    me.current = te;
  }, [te]), ae(() => {
    F.current = d;
  }, [d]);
  const de = Ie((M) => {
    var re;
    const ie = typeof M == "function" ? M(Q.current) : M, S = mt(V.current, ie);
    me.current || _(S), (re = F.current) == null || re.call(F, S);
  }, []);
  ae(() => {
    let M = !1;
    if (!s || !a) {
      P(!0);
      return;
    }
    return P(!1), Promise.resolve(a.load(s)).then((ie) => {
      M || (ie && de(ie), P(!0));
    }).catch(() => {
      M || P(!1);
    }), () => {
      M = !0;
    };
  }, [a, s, de]), ae(() => {
    s && (a && !D || (Ir(s, H, o), a && Promise.resolve(a.save(s, H)).catch(() => {
    })));
  }, [D, H, a, s, o]);
  const ue = (M) => {
    const ie = tr(t).find((S) => S.id === M);
    ie && de((S) => S.map((re) => re.id === M ? { ...ie, order: re.order } : re));
  }, Y = (M) => {
    de(
      (ie) => ie.map((S) => {
        if (S.id !== M) return S;
        const re = S.width === "third" ? "half" : S.width === "half" ? "full" : "third";
        return { ...S, width: re, collapsed: !1 };
      })
    );
  }, De = (M) => {
    de((ie) => ie.map((S) => S.id === M ? { ...S, collapsed: !S.collapsed, fullscreen: S.collapsed ? S.fullscreen : !1 } : S));
  }, ke = (M) => {
    de((ie) => ie.map((S) => ({ ...S, collapsed: S.id === M ? !1 : S.collapsed, fullscreen: S.id === M ? !S.fullscreen : !1 })));
  }, Re = (M, ie) => {
    !u || !M || M === ie || de((S) => {
      const re = mt(t, S), we = re.findIndex((se) => se.id === M), Me = re.findIndex((se) => se.id === ie);
      if (we < 0 || Me < 0) return S;
      const [be] = re.splice(we, 1);
      return re.splice(Me, 0, be), re.map((se, xe) => ({ ...se, order: xe }));
    });
  }, Le = H.find((M) => M.fullscreen), We = (M) => {
    const ie = Ce.get(M.id);
    return ie ? /* @__PURE__ */ e(
      Rr,
      {
        panel: ie,
        state: M,
        allowMovement: u,
        allowResize: m,
        allowCollapse: f,
        allowFullscreen: w,
        className: $,
        headerClassName: X,
        bodyClassName: Z,
        actionsClassName: A,
        renderActions: g,
        renderHeader: N,
        renderPanelControls: I,
        renderMoveHandle: p,
        renderResizeButton: k,
        renderCollapseButton: C,
        renderResetButton: T,
        renderFullscreenButton: L,
        accentKey: U,
        onToggleCollapse: () => De(M.id),
        onToggleFullscreen: () => ke(M.id),
        onReset: () => ue(M.id),
        onCycleWidth: () => Y(M.id),
        onDragStart: (S) => {
          u && (E.current = M.id, G(M.id), S.dataTransfer.effectAllowed = "move", S.dataTransfer.setData("text/plain", M.id), S.dataTransfer.setData("application/x-rui-panel-id", M.id));
        },
        onDragOver: (S) => {
          E.current && (S.preventDefault(), S.dataTransfer.dropEffect = "move");
        },
        onDragEnter: (S) => {
          E.current && S.preventDefault();
        },
        onDrop: (S) => {
          S.preventDefault();
          const re = S.dataTransfer.getData("application/x-rui-panel-id") || S.dataTransfer.getData("text/plain") || E.current;
          re && Re(re, M.id), E.current = null, G(null);
        },
        onDragEnd: () => {
          E.current = null, G(null);
        }
      },
      M.id
    ) : null;
  };
  return Le ? /* @__PURE__ */ c(Zt, { children: [
    /* @__PURE__ */ e("div", { className: "fixed inset-0 z-40 bg-[#050816]/80 backdrop-blur-sm" }),
    We(Le)
  ] }) : /* @__PURE__ */ e("div", { className: l("rui-theme grid w-full grid-cols-12 gap-3 sm:gap-5", q, ee && "select-none"), style: R, children: H.map(We) });
}
function Ge({ value: t, defaultValue: r, onChange: i }) {
  const [d, s] = he(r), o = t !== void 0, a = o ? t : d, u = Ie(
    (m) => {
      const f = typeof m == "function" ? m(a) : m;
      o || s(f), i == null || i(f);
    },
    [o, a, i]
  );
  return [a, u];
}
function Tr(t, r) {
  return typeof t == "string" || typeof t == "number" ? String(t) : r;
}
function Dr(t) {
  if (typeof t == "object" && t !== null && "value" in t) {
    const r = String(t.value), i = t.label ?? t.text ?? r;
    return {
      value: t.value,
      label: i,
      text: t.text ?? Tr(t.label, r),
      keywords: t.keywords ?? "",
      description: t.description,
      disabled: t.disabled
    };
  }
  return {
    value: t,
    label: String(t),
    text: String(t),
    keywords: String(t)
  };
}
function jr({ className: t }) {
  return /* @__PURE__ */ e("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: t, children: /* @__PURE__ */ e("path", { d: "M5 7.5 10 12.5 15 7.5", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function Lr({ className: t }) {
  return /* @__PURE__ */ c("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: t, children: [
    /* @__PURE__ */ e("circle", { cx: "8.5", cy: "8.5", r: "4.75", stroke: "currentColor", strokeWidth: "1.5" }),
    /* @__PURE__ */ e("path", { d: "m12.25 12.25 3.5 3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
  ] });
}
function Ar({ className: t }) {
  return /* @__PURE__ */ e("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: t, children: /* @__PURE__ */ e("path", { d: "m4.75 10.25 3.25 3.25 7.5-7.5", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function Er({ className: t }) {
  return /* @__PURE__ */ e("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: t, children: /* @__PURE__ */ e("path", { d: "m5 5 10 10m0-10L5 15", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round" }) });
}
function Pr({
  mode: t = "single",
  options: r,
  value: i,
  defaultValue: d,
  onChange: s,
  searchable: o = !0,
  placeholder: a = "Select an option",
  searchPlaceholder: u = "Search options",
  emptyState: m = "No matching options",
  disabled: f = !1,
  clearable: w = !0,
  label: g,
  description: N,
  error: I,
  helperText: p,
  labelPosition: k = "top",
  className: C,
  wrapperClassName: T,
  labelClassName: L,
  descriptionClassName: U,
  errorClassName: z,
  helperClassName: q,
  triggerClassName: $,
  menuClassName: X,
  optionClassName: Z,
  searchClassName: A,
  summaryClassName: O,
  accentKey: _,
  style: E,
  endAdornment: ee,
  endAdornmentClassName: G,
  summaryText: D,
  menuHeader: P,
  showSelectAll: te = !1,
  showClear: H = !1,
  selectAllLabel: Ce = "Select all",
  clearLabel: R = "Clear",
  getOptionKey: V,
  isOptionEqual: Q,
  renderOption: me,
  renderValue: F
}, de) {
  const ue = ne(() => r.map(Dr), [r]), [Y, De] = Ge({
    value: i,
    defaultValue: d ?? (t === "multiple" ? [] : null),
    onChange: s
  }), [ke, Re] = he(!1), [Le, We] = he(""), M = ve(null), ie = ve(null), S = lt(), re = pe(_, E), we = Ie((h) => V ? V(h) : String(h), [V]), Me = ne(() => t === "multiple" ? (Y ?? []).slice() : Y == null ? [] : [Y], [Y, t]), be = ne(() => new Set(Me.map((h) => we(h))), [Me, we]), se = Ie(
    (h) => Q ? Me.some((K) => Q(h, K)) : be.has(we(h)),
    [Q, be, Me, we]
  ), xe = ne(() => ue.filter((h) => se(h.value)), [se, ue]), _e = ne(() => {
    const h = Le.trim().toLowerCase();
    return h ? ue.filter((K) => `${K.text ?? ""} ${String(K.value)} ${K.keywords ?? ""}`.toLowerCase().includes(h)) : ue;
  }, [ue, Le]), Qe = ne(() => {
    if (D)
      return typeof D == "function" ? D({ value: Y, selectedOptions: xe, placeholder: a }) : D;
    if (F) return F(Y, xe);
    if (t === "multiple") {
      const h = Y;
      return h != null && h.length ? xe.length <= 2 ? xe.map((K) => K.text ?? String(K.value)).join(", ") : `${h.length} selected` : a;
    }
    return xe[0] ? xe[0].text ?? String(xe[0].value) : Y == null || Y === "" ? a : String(Y);
  }, [Y, t, a, F, xe, D]);
  ae(() => {
    if (!ke) {
      We("");
      return;
    }
    const h = (oe) => {
      var Pe;
      (Pe = M.current) != null && Pe.contains(oe.target) || Re(!1);
    }, K = (oe) => {
      oe.key === "Escape" && Re(!1);
    };
    document.addEventListener("mousedown", h), document.addEventListener("keydown", K);
    const le = window.setTimeout(() => {
      var oe;
      return (oe = ie.current) == null ? void 0 : oe.focus();
    }, 0);
    return () => {
      window.clearTimeout(le), document.removeEventListener("mousedown", h), document.removeEventListener("keydown", K);
    };
  }, [ke]);
  const Ye = (h) => {
    De(h), Re(!1);
  }, Ae = (h) => {
    const K = (Y ?? []).slice(), le = we(h), oe = K.findIndex((Pe) => Q ? Q(h, Pe) : we(Pe) === le);
    oe >= 0 ? K.splice(oe, 1) : K.push(h), De(K);
  }, Je = () => {
    De(t === "multiple" ? [] : null), Re(!1);
  }, $e = () => {
    t === "multiple" && De(ue.filter((h) => !h.disabled).map((h) => h.value));
  }, v = ne(() => {
    const h = ue.filter((K) => !K.disabled);
    return !!h.length && h.every((K) => se(K.value));
  }, [se, ue]), ye = typeof P == "function" ? P({ options: ue, filteredOptions: _e, selectedOptions: xe, selectAll: $e, clear: Je }) : P, ce = [N ? `${S}-description` : null, I ? `${S}-error` : null, p ? `${S}-helper` : null].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ c("div", { className: l(k === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", T), style: re, children: [
    g || N ? /* @__PURE__ */ c("div", { className: l(k === "left" ? "pt-2" : "", "min-w-0"), children: [
      g ? /* @__PURE__ */ e("label", { htmlFor: S, className: l("block text-sm font-medium text-white", L), children: g }) : null,
      N ? /* @__PURE__ */ e("div", { id: `${S}-description`, className: l("mt-1 text-sm text-[var(--rui-text-secondary)]", U), children: N }) : null
    ] }) : null,
    /* @__PURE__ */ c("div", { ref: M, className: l("relative min-w-0", C), children: [
      /* @__PURE__ */ c(
        "button",
        {
          ref: de,
          id: S,
          type: "button",
          disabled: f,
          "aria-invalid": !!I || void 0,
          "aria-describedby": ce,
          "aria-expanded": ke,
          onClick: () => !f && Re((h) => !h),
          className: l(
            "flex h-10 w-full items-center justify-between gap-3 rounded-[4px] border px-4 text-left text-[15px] outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
            ke ? "border-[var(--rui-accent)] bg-[var(--rui-bg-input)] text-[#1c1f31]" : "border-[rgba(18,22,50,0.28)] bg-[var(--rui-bg-input)] text-[#1c1f31] hover:border-[var(--rui-accent)]",
            $
          ),
          children: [
            /* @__PURE__ */ e(
              "span",
              {
                className: l(
                  "min-w-0 flex-1 truncate",
                  Y == null || Array.isArray(Y) && !Y.length ? "text-[#747a95]" : "text-[#1c1f31]",
                  O
                ),
                children: Qe
              }
            ),
            /* @__PURE__ */ c("span", { className: "flex items-center gap-2 text-[var(--rui-text-tertiary)]", children: [
              ee ? /* @__PURE__ */ e("span", { className: l("inline-flex items-center", G), children: ee }) : null,
              !ee && t === "multiple" ? /* @__PURE__ */ e("span", { className: l("text-xs uppercase tracking-wider", G), children: Me.length }) : null,
              w && (t === "multiple" && (Y != null && Y.length) || t === "single" && Y != null) ? /* @__PURE__ */ e(
                "span",
                {
                  role: "button",
                  tabIndex: -1,
                  "aria-label": "Clear selection",
                  onClick: (h) => {
                    h.preventDefault(), h.stopPropagation(), Je();
                  },
                  className: "inline-flex h-5 w-5 items-center justify-center rounded-full border border-transparent transition hover:border-[var(--rui-border-soft)] hover:bg-white/[0.08]",
                  children: /* @__PURE__ */ e(Er, { className: "h-3.5 w-3.5" })
                }
              ) : null,
              /* @__PURE__ */ e(jr, { className: l("h-4 w-4 transition-transform", ke && "rotate-180") })
            ] })
          ]
        }
      ),
      ke && !f ? /* @__PURE__ */ c(
        "div",
        {
          className: l(
            "absolute left-0 right-0 top-full z-[130] mt-2 max-h-[320px] overflow-hidden rounded-[10px] border border-white/10 bg-[var(--rui-bg-panel)] shadow-panel",
            X
          ),
          children: [
            ye || t === "multiple" && (te || H) ? /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-[var(--rui-border-soft)] p-2.5", children: [
              /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: ye }),
              t === "multiple" && (te || H) ? /* @__PURE__ */ c("div", { className: "flex flex-shrink-0 items-center gap-2", children: [
                te ? /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    disabled: v,
                    className: "rounded-[6px] px-2 py-1 text-xs text-[var(--rui-accent)] transition hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-45",
                    onClick: $e,
                    children: Ce
                  }
                ) : null,
                H ? /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    disabled: !Me.length,
                    className: "rounded-[6px] px-2 py-1 text-xs text-[var(--rui-text-secondary)] transition hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-45",
                    onClick: Je,
                    children: R
                  }
                ) : null
              ] }) : null
            ] }) : null,
            o ? /* @__PURE__ */ e("div", { className: "border-b border-white/8 p-3", children: /* @__PURE__ */ c("div", { className: "relative", children: [
              /* @__PURE__ */ e(Lr, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--rui-text-tertiary)]" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: ie,
                  value: Le,
                  onChange: (h) => We(h.target.value),
                  placeholder: u,
                  className: l(
                    "h-10 w-full rounded-[6px] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)] pl-9 pr-3 text-sm text-[var(--rui-text-primary)] outline-none placeholder:text-[var(--rui-text-tertiary)] focus:border-[var(--rui-accent)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0",
                    A
                  )
                }
              )
            ] }) }) : null,
            /* @__PURE__ */ e("div", { className: "rui-scrollbar max-h-[260px] overflow-auto p-1", children: _e.length ? _e.map((h) => {
              const K = se(h.value), le = f || h.disabled;
              return /* @__PURE__ */ c(
                "button",
                {
                  type: "button",
                  disabled: le,
                  onClick: () => {
                    le || (t === "multiple" ? Ae(h.value) : Ye(h.value));
                  },
                  className: l(
                    "flex w-full items-start justify-between gap-3 rounded-[8px] px-3 py-2.5 text-left text-sm transition",
                    K ? "bg-[var(--rui-accent-soft)] text-[var(--rui-accent-soft-text)]" : "text-[var(--rui-text-secondary)] hover:bg-[var(--rui-accent-muted)] hover:text-[var(--rui-text-primary)]",
                    le && "cursor-not-allowed opacity-50",
                    Z
                  ),
                  children: [
                    /* @__PURE__ */ c("span", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ e("span", { className: "block truncate", children: me ? me(h, K) : h.label ?? h.text ?? String(h.value) }),
                      h.description ? /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-[var(--rui-text-tertiary)]", children: h.description }) : null
                    ] }),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: l(
                          "mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border",
                          K ? "border-[var(--rui-accent)] bg-[var(--rui-accent)] text-[#07111d]" : "border-[var(--rui-border-soft)] text-transparent"
                        ),
                        children: /* @__PURE__ */ e(Ar, { className: "h-3.5 w-3.5" })
                      }
                    )
                  ]
                },
                we(h.value)
              );
            }) : /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-[var(--rui-text-tertiary)]", children: m }) })
          ]
        }
      ) : null,
      I ? /* @__PURE__ */ e("div", { id: `${S}-error`, className: l("mt-1 text-sm text-[var(--rui-danger)]", z), children: I }) : p ? /* @__PURE__ */ e("div", { id: `${S}-helper`, className: l("mt-1 text-sm text-[var(--rui-text-tertiary)]", q), children: p }) : null
    ] })
  ] });
}
const zt = Ve(Pr), Wr = ["ALL", "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "SUCCESS"].map((t) => ({ label: t, value: t })), _r = [{ label: "All categories", value: "ALL" }];
function zr(t) {
  if (!t) return "";
  const r = t instanceof Date ? t : new Date(t);
  return Number.isNaN(r.getTime()) ? String(t) : r.toLocaleString();
}
function $r(t) {
  return !t || typeof t == "object" && !Object.keys(t).length ? "" : typeof t == "string" ? t : JSON.stringify(t, null, 2);
}
function Or(t) {
  return t === "ERROR" ? "text-[var(--rui-danger)]" : t === "WARN" || t === "WARNING" ? "text-[var(--rui-warning)]" : t === "SUCCESS" ? "text-[var(--rui-success)]" : t === "INFO" ? "text-[var(--rui-accent)]" : "text-white/45";
}
function Fr(t) {
  return t === "ERROR" ? "close" : t === "WARN" || t === "WARNING" ? "info" : t === "SUCCESS" ? "check" : t === "INFO" ? "info" : "actions";
}
function Hr(t, r) {
  const i = [...t];
  return i.sort((d, s) => new Date(d.createdAt ?? d.timestamp ?? 0).getTime() - new Date(s.createdAt ?? s.timestamp ?? 0).getTime()), r ? i : i.reverse();
}
function pn({
  entries: t,
  logs: r,
  levels: i = Wr,
  categories: d = _r,
  defaultLevel: s = "ALL",
  defaultCategory: o = "ALL",
  defaultSearch: a = "",
  level: u,
  category: m,
  search: f,
  autoScroll: w,
  onLevelChange: g,
  onCategoryChange: N,
  onSearchChange: I,
  onAutoScrollChange: p,
  onFiltersChange: k,
  searchPlaceholder: C = "Search logs",
  heightClassName: T = "max-h-[360px]",
  title: L = "Log stream",
  description: U,
  subtitle: z,
  action: q,
  onClear: $,
  trailing: X = !0,
  autoScrollDefault: Z = !0,
  showHeader: A = !0,
  showToolbar: O = !0,
  showLevelFilter: _ = !0,
  showCategoryFilter: E = !0,
  emptyContent: ee = "No log lines matched the current filters.",
  formatTimestamp: G,
  renderMetadata: D,
  renderPayload: P,
  getSearchText: te,
  accentKey: H,
  style: Ce,
  className: R,
  classNames: V
}) {
  const Q = ne(() => t ?? r ?? [], [t, r]), [me, F] = he(s), [de, ue] = he(o), [Y, De] = he(a), [ke, Re] = he(Z), [Le, We] = he(() => /* @__PURE__ */ new Set()), M = ve(null), ie = U ?? z, S = pe(H, Ce), re = u ?? me, we = m ?? de, Me = f ?? Y, be = w ?? ke, se = Ie(
    (v) => {
      k == null || k({
        level: re,
        category: we,
        search: Me,
        autoScroll: be,
        ...v
      });
    },
    [be, we, re, k, Me]
  ), xe = Ie(
    (v) => {
      u === void 0 && F(v), g == null || g(v), se({ level: v });
    },
    [u, se, g]
  ), _e = Ie(
    (v) => {
      m === void 0 && ue(v), N == null || N(v), se({ category: v });
    },
    [m, se, N]
  ), Qe = Ie(
    (v) => {
      f === void 0 && De(v), I == null || I(v), se({ search: v });
    },
    [f, se, I]
  ), Ye = Ie(
    (v) => {
      w === void 0 && Re(v), p == null || p(v), se({ autoScroll: v });
    },
    [w, se, p]
  );
  ae(() => {
    u === void 0 && F(s);
  }, [u, s]), ae(() => {
    m === void 0 && ue(o);
  }, [m, o]), ae(() => {
    f === void 0 && De(a);
  }, [f, a]), ae(() => {
    w === void 0 && Re(Z);
  }, [Z, w]);
  const Ae = ne(() => {
    const v = Me.trim().toLowerCase(), ye = Q.filter((ce) => _ && re !== "ALL" && ce.level !== re || E && we !== "ALL" && ce.category !== we ? !1 : v ? ((te == null ? void 0 : te(ce)) || [ce.message, ce.source, ce.category, ce.level, JSON.stringify(ce.metadata || {}), JSON.stringify(ce.payload || {})].join(" ").toLowerCase()).toLowerCase().includes(v) : !0);
    return Hr(ye, X);
  }, [we, te, re, Q, Me, E, _, X]);
  ae(() => {
    if (!be || !X || !M.current) return;
    const v = M.current, ye = window.requestAnimationFrame(() => {
      v.scrollTop = v.scrollHeight;
    });
    return () => window.cancelAnimationFrame(ye);
  }, [be, Ae, X]), ae(() => {
    We((v) => {
      const ye = /* @__PURE__ */ new Set();
      for (const ce of v)
        Ae.some((h) => h.id === ce) && ye.add(ce);
      return ye;
    });
  }, [Ae]);
  const Je = (v) => {
    We((ye) => {
      const ce = new Set(ye);
      return ce.has(v) ? ce.delete(v) : ce.add(v), ce;
    });
  }, $e = () => {
    Qe(a), xe(s), _e(o);
  };
  return /* @__PURE__ */ c("div", { className: l("rui-theme flex h-full min-h-0 min-w-0 flex-col gap-3", R), style: S, children: [
    A ? /* @__PURE__ */ c("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-white", children: L }),
        ie ? /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-white/60", children: ie }) : null
      ] }),
      q
    ] }) : null,
    O ? /* @__PURE__ */ c("div", { className: l("flex min-w-0 shrink-0 flex-wrap items-center gap-2", V == null ? void 0 : V.toolbar), children: [
      /* @__PURE__ */ e("div", { className: "min-w-[140px] flex-[1_1_180px] lg:max-w-[260px]", children: /* @__PURE__ */ e(
        "input",
        {
          className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input",
          value: Me,
          onChange: (v) => Qe(v.target.value),
          placeholder: C
        }
      ) }),
      _ ? /* @__PURE__ */ e("div", { className: "min-w-[112px] flex-[0_1_132px]", children: /* @__PURE__ */ e(zt, { searchable: !0, value: re, options: i, onChange: (v) => xe(String(v ?? s)) }) }) : null,
      E ? /* @__PURE__ */ e("div", { className: "min-w-[140px] flex-[0_1_176px]", children: /* @__PURE__ */ e(zt, { searchable: !0, value: we, options: d, onChange: (v) => _e(String(v ?? o)) }) }) : null,
      A ? null : q,
      /* @__PURE__ */ e(ge, { variant: "ghost", size: "sm", onClick: () => Ye(!be), children: be ? "Trailing on" : "Trailing off" }),
      $ ? /* @__PURE__ */ e(ge, { variant: "ghost", size: "sm", onClick: () => void $(), children: "Clear logs" }) : null,
      /* @__PURE__ */ e(ge, { variant: "ghost", size: "sm", onClick: $e, children: "Clear filters" })
    ] }) : null,
    /* @__PURE__ */ e("div", { className: l("min-w-0 flex-1 overflow-hidden rounded-[10px] border border-white/8 bg-[#0b1022]", V == null ? void 0 : V.viewport), children: /* @__PURE__ */ e("div", { ref: M, className: l(T, "min-h-0 overflow-auto select-text rui-scrollbar [scrollbar-gutter:stable]"), children: Ae.length ? Ae.map((v) => {
      const ye = P ? P(v) : $r(v.payload), ce = !!ye, h = Le.has(v.id);
      return /* @__PURE__ */ c(Gt.Fragment, { children: [
        /* @__PURE__ */ e("div", { className: l("border-b border-white/6 px-3 py-2 font-mono text-xs last:border-none", V == null ? void 0 : V.entry), children: /* @__PURE__ */ c("div", { className: "grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-3", children: [
          /* @__PURE__ */ c("div", { className: "min-w-0", children: [
            /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-white/80", children: [
              /* @__PURE__ */ e("span", { className: "shrink-0 text-white/45", children: G ? G(v) : zr(v.createdAt ?? v.timestamp) }),
              v.source || v.category ? /* @__PURE__ */ e("span", { className: "shrink-0 text-white/35", children: "|" }) : null,
              v.source || v.category ? /* @__PURE__ */ e("span", { className: "shrink-0 text-white/50", children: [v.source, v.category].filter(Boolean).join("/") }) : null,
              D ? D(v) : Object.entries(v.metadata || {}).map(([K, le]) => /* @__PURE__ */ c("span", { className: "shrink-0 text-white/35", children: [
                "[",
                le,
                "]"
              ] }, K)),
              /* @__PURE__ */ e("span", { className: l("shrink-0", Or(v.level)), title: v.level, children: /* @__PURE__ */ e(Be, { name: Fr(v.level), className: "h-4 w-4" }) })
            ] }),
            /* @__PURE__ */ e("div", { className: "mt-1 min-w-0 whitespace-pre-wrap break-words text-white/90", children: v.message })
          ] }),
          /* @__PURE__ */ e("div", { className: "shrink-0", children: ce ? /* @__PURE__ */ e(
            ge,
            {
              variant: "ghost",
              size: "sm",
              className: "h-7 px-2 text-[11px]",
              leftIcon: /* @__PURE__ */ e(Be, { name: "info", className: "h-4 w-4" }),
              onClick: () => Je(v.id),
              children: h ? "Hide payload" : "View payload"
            }
          ) : /* @__PURE__ */ e("span", { className: "inline-flex h-7 items-center text-white/30", children: "-" }) })
        ] }) }),
        h && ce ? /* @__PURE__ */ e("div", { className: "border-b border-white/6 bg-black/20 px-3 py-3 last:border-none", children: typeof ye == "string" ? /* @__PURE__ */ e(
          "pre",
          {
            className: l(
              "overflow-x-auto whitespace-pre-wrap break-words rounded-[8px] border border-white/8 bg-[#070b18] p-3 font-mono text-[11px] leading-5 text-white/75 select-text",
              V == null ? void 0 : V.payload
            ),
            children: ye
          }
        ) : /* @__PURE__ */ e("div", { className: V == null ? void 0 : V.payload, children: ye }) }) : null
      ] }, v.id);
    }) : /* @__PURE__ */ e("div", { className: "flex h-full min-h-[220px] items-center justify-center px-4 py-8 text-center text-sm text-white/55", children: ee }) }) })
  ] });
}
const Vr = {
  "top-right": "right-4 top-4",
  "top-left": "left-4 top-4",
  "bottom-right": "right-4 bottom-4",
  "bottom-left": "left-4 bottom-4"
};
function Zr({
  items: t,
  onDismiss: r,
  placement: i = "top-right",
  accentKey: d,
  style: s,
  className: o,
  itemClassName: a,
  titleClassName: u,
  messageClassName: m,
  actionsClassName: f
}) {
  const w = pe(d, s);
  return ae(() => {
    if (typeof window > "u" || !r) return;
    const g = t.filter((N) => N.timeout !== null).map((N) => window.setTimeout(() => r(N.id), N.timeout ?? 4200));
    return () => g.forEach((N) => window.clearTimeout(N));
  }, [t, r]), typeof document > "u" ? null : bt(
    /* @__PURE__ */ e("div", { className: l("pointer-events-none fixed z-[220] flex w-[min(92vw,380px)] flex-col gap-3", Vr[i], o), style: w, children: t.map((g) => /* @__PURE__ */ c(
      "div",
      {
        className: l(
          "pointer-events-auto rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-surface)] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.36)]",
          a
        ),
        children: [
          /* @__PURE__ */ c("div", { className: "mb-2 flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ e(er, { tone: g.tone ?? "neutral", children: g.tone ?? "neutral" }),
            r ? /* @__PURE__ */ e(ge, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", "aria-label": "Dismiss notification", onClick: () => r(g.id), children: /* @__PURE__ */ e("span", { "aria-hidden": "true", children: "×" }) }) : null
          ] }),
          /* @__PURE__ */ e("div", { className: l("text-sm font-semibold text-white", u), children: g.title }),
          g.message ? /* @__PURE__ */ e("div", { className: l("mt-1 text-sm text-[var(--rui-text-secondary)]", m), children: g.message }) : null,
          g.actions ? /* @__PURE__ */ e("div", { className: l("mt-3 flex flex-wrap gap-2", f), children: g.actions }) : null
        ]
      },
      g.id
    )) }),
    document.body
  );
}
const vn = Zr;
function gn({
  title: t,
  pageName: r,
  description: i,
  actions: d,
  actionButtons: s,
  sidebar: o,
  topbar: a,
  footer: u,
  children: m,
  accentKey: f,
  style: w,
  className: g,
  headerClassName: N,
  contentClassName: I,
  sidebarClassName: p
}) {
  const k = t ?? r, C = d ?? s, T = pe(f, w);
  return /* @__PURE__ */ c("div", { className: l("rui-theme min-h-screen bg-[var(--rui-bg-app)] text-[var(--rui-text-main)]", g), style: T, children: [
    a,
    /* @__PURE__ */ c("div", { className: l("grid gap-5 px-4 py-5", !!o && "xl:grid-cols-[minmax(84px,auto)_minmax(0,1fr)]"), children: [
      o ? /* @__PURE__ */ e("aside", { className: l("min-w-0", p), children: o }) : null,
      /* @__PURE__ */ c("main", { className: "min-w-0", children: [
        k || i || C ? /* @__PURE__ */ e(Gr, { title: k, description: i, actions: C, className: N }) : null,
        /* @__PURE__ */ e("div", { className: l("mt-5 min-w-0", I), children: m }),
        u ? /* @__PURE__ */ e("footer", { className: "mt-5", children: u }) : null
      ] })
    ] })
  ] });
}
function Gr({ title: t, pageName: r, description: i, subtitle: d, actions: s, actionButtons: o, children: a, accentKey: u, style: m, className: f }) {
  const w = t ?? r, g = i ?? d, N = s ?? o, I = pe(u, m);
  return /* @__PURE__ */ c("div", { className: l("flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between", f), style: I, children: [
    /* @__PURE__ */ c("div", { className: "min-w-0", children: [
      w ? /* @__PURE__ */ e("h1", { className: "text-[28px] font-semibold text-white", children: w }) : null,
      g ? /* @__PURE__ */ e("p", { className: "mt-2 max-w-3xl text-sm text-white/70", children: g }) : null,
      a
    ] }),
    N ? /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-3", children: N }) : null
  ] });
}
function wn({ children: t, accentKey: r, style: i, className: d }) {
  const s = pe(r, i);
  return /* @__PURE__ */ e("div", { className: l("rui-theme w-full space-y-5 px-2 py-4 sm:px-4 sm:py-5", d), style: s, children: t });
}
function yn({
  items: t,
  groups: r,
  header: i,
  collapsedHeader: d,
  footer: s,
  activeId: o,
  onSelect: a,
  children: u,
  collapsible: m = !1,
  collapsed: f,
  defaultCollapsed: w = !1,
  onCollapsedChange: g,
  collapseTitle: N = "Collapse sidebar",
  expandTitle: I = "Expand sidebar",
  collapsedWidthClassName: p = "w-[92px] min-w-[92px]",
  expandedWidthClassName: k = "w-[360px] min-w-[220px]",
  collapseButtonClassName: C,
  renderCollapseButton: T,
  accentKey: L,
  style: U,
  className: z,
  itemClassName: q,
  activeItemClassName: $,
  groupClassName: X,
  groupLabelClassName: Z,
  headerClassName: A,
  footerClassName: O
}) {
  const _ = pe(L, U), [E, ee] = he(w), G = f !== void 0, D = !!(G ? f : E), P = r != null && r.length ? r : t != null && t.length ? [{ id: "items", items: t }] : [], te = (Q) => {
    G || ee(Q), g == null || g(Q);
  }, H = () => te(!D), Ce = D ? I : N, R = {
    "aria-expanded": !D,
    "aria-label": Ce,
    title: Ce,
    onClick: H
  }, V = m ? (T == null ? void 0 : T({
    collapsed: D,
    toggleCollapsed: H,
    buttonProps: R
  })) ?? /* @__PURE__ */ e(ge, { variant: "icon", size: "sm", className: l("h-8 w-8 px-0", C), ...R, children: /* @__PURE__ */ e(Be, { name: D ? "sidebar-open" : "sidebar-collapsed", className: "h-4 w-4" }) }) : null;
  return /* @__PURE__ */ c(
    "aside",
    {
      className: l(
        "rui-theme flex shrink-0 flex-col gap-4 overflow-hidden rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] p-4 shadow-[var(--rui-shadow-panel)] transition-all duration-200",
        D ? p : k,
        z
      ),
      style: _,
      children: [
        i || d || V ? /* @__PURE__ */ c("div", { className: l("flex items-center justify-between gap-3", A), children: [
          D ? d ? /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: d }) : /* @__PURE__ */ e("div", {}) : i ? /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: i }) : /* @__PURE__ */ e("div", {}),
          V
        ] }) : null,
        P.length ? /* @__PURE__ */ e("nav", { className: "flex flex-col gap-7", "aria-label": "Sidebar", children: P.map((Q, me) => /* @__PURE__ */ c("div", { className: l("space-y-4", X), children: [
          !D && Q.label ? /* @__PURE__ */ e("div", { className: l("px-3 text-[15px] font-semibold text-[var(--rui-text-primary)]", Z), children: Q.label }) : null,
          /* @__PURE__ */ e("div", { className: "space-y-2", children: Q.items.map((F) => {
            const de = F.active ?? F.id === o;
            return /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                disabled: F.disabled,
                title: D && typeof F.label == "string" ? F.label : void 0,
                "aria-current": de ? "page" : void 0,
                onClick: () => {
                  var ue;
                  (ue = F.onSelect) == null || ue.call(F, F.id), a == null || a(F.id, F);
                },
                className: l(
                  "flex w-full items-center rounded-full text-sm transition disabled:cursor-not-allowed disabled:opacity-50",
                  D ? "justify-center px-3 py-3" : "justify-between px-5 py-4 text-[15px]",
                  de ? "bg-[var(--rui-accent)] text-[var(--rui-accent-contrast)]" : "bg-[var(--rui-bg-panel-2)] text-[var(--rui-text-secondary)] hover:bg-[var(--rui-accent-muted)] hover:text-[var(--rui-text-primary)]",
                  q,
                  de && $
                ),
                children: [
                  /* @__PURE__ */ c("span", { className: l("flex min-w-0 items-center gap-3", D && "justify-center"), children: [
                    F.icon ? /* @__PURE__ */ e("span", { className: l("flex shrink-0", de ? "text-current" : "text-[var(--rui-accent)]"), children: F.icon }) : null,
                    D ? null : /* @__PURE__ */ c("span", { className: "min-w-0 flex-1 text-left", children: [
                      /* @__PURE__ */ e("span", { className: "block truncate font-medium", children: F.label }),
                      F.description ? /* @__PURE__ */ e("span", { className: "mt-0.5 block truncate text-xs text-[var(--rui-text-tertiary)]", children: F.description }) : null
                    ] })
                  ] }),
                  !D && F.badge ? /* @__PURE__ */ e("span", { className: "ml-3 shrink-0", children: F.badge }) : null
                ]
              },
              F.id
            );
          }) })
        ] }, Q.id ?? me)) }) : null,
        u,
        s ? /* @__PURE__ */ e("div", { className: l("mt-auto px-2 py-1", O), children: s }) : null
      ]
    }
  );
}
const Nn = Ve(function({
  checked: r,
  defaultChecked: i = !1,
  onCheckedChange: d,
  name: s,
  value: o,
  title: a,
  description: u,
  helper: m,
  leading: f,
  trailing: w,
  toggleable: g,
  disabled: N,
  accentKey: I,
  style: p,
  className: k,
  contentClassName: C,
  titleClassName: T,
  descriptionClassName: L,
  helperClassName: U,
  indicatorClassName: z
}, q) {
  const [$, X] = Ge({
    value: r,
    defaultValue: i,
    onChange: d
  }), Z = pe(I, p), A = g ?? !s;
  return /* @__PURE__ */ c(
    "label",
    {
      ref: q,
      style: Z,
      className: l(
        "group flex cursor-pointer items-start gap-3 rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[linear-gradient(180deg,var(--rui-bg-surface-2),var(--rui-bg-card))] p-4 transition hover:border-[var(--rui-accent-border-soft)] hover:shadow-[0_18px_44px_rgba(0,0,0,0.30)]",
        $ && "border-[var(--rui-accent-border)] shadow-[0_0_0_1px_var(--rui-accent-muted)]",
        N && "cursor-not-allowed opacity-60 hover:border-[var(--rui-border-soft)] hover:shadow-none",
        k
      ),
      children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "radio",
            name: s,
            value: o,
            checked: $,
            onClick: (O) => {
              N || !A || !$ || (O.preventDefault(), X(!1));
            },
            onChange: (O) => {
              A && $ || N || X(O.target.checked);
            },
            disabled: N,
            className: "sr-only"
          }
        ),
        /* @__PURE__ */ e(
          "span",
          {
            className: l(
              "mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border transition",
              $ ? "border-[var(--rui-accent)] bg-[var(--rui-accent)]" : "border-[var(--rui-border-strong)] bg-transparent",
              z
            ),
            "aria-hidden": "true",
            children: /* @__PURE__ */ e("span", { className: l("h-2.5 w-2.5 rounded-full bg-[#08111d] transition", !$ && "scale-0") })
          }
        ),
        /* @__PURE__ */ c("div", { className: l("min-w-0 flex-1", C), children: [
          /* @__PURE__ */ c("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ c("div", { className: "min-w-0", children: [
              a ? /* @__PURE__ */ e("div", { className: l("text-sm font-semibold text-[var(--rui-text-primary)]", T), children: a }) : null,
              u ? /* @__PURE__ */ e("div", { className: l("mt-1 text-sm text-[var(--rui-text-secondary)]", L), children: u }) : null
            ] }),
            w ? /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: w }) : null
          ] }),
          m || f ? /* @__PURE__ */ c("div", { className: "mt-3 flex items-end justify-between gap-3", children: [
            m ? /* @__PURE__ */ e("div", { className: l("text-sm text-[var(--rui-text-tertiary)]", U), children: m }) : /* @__PURE__ */ e("span", {}),
            f ? /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-[var(--rui-text-secondary)]", children: f }) : null
          ] }) : null
        ] })
      ]
    }
  );
}), Jr = Ve(function({
  checked: r,
  defaultChecked: i = !1,
  onCheckedChange: d,
  label: s,
  description: o,
  disabled: a,
  className: u,
  trackClassName: m,
  thumbClassName: f,
  labelClassName: w,
  descriptionClassName: g,
  accentKey: N,
  style: I,
  ...p
}, k) {
  const [C, T] = Ge({
    value: r,
    defaultValue: i,
    onChange: d
  }), L = lt(), U = pe(N, I), z = /* @__PURE__ */ e(
    "button",
    {
      ref: k,
      type: "button",
      role: "switch",
      "aria-checked": C,
      "aria-labelledby": s ? L : void 0,
      "aria-label": typeof s == "string" ? s : p["aria-label"],
      disabled: a,
      style: U,
      onClick: () => {
        a || T((q) => !q);
      },
      className: l(
        "relative inline-flex h-8 w-[54px] flex-shrink-0 items-center rounded-full border outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0",
        C ? "border-[var(--rui-success-border)] bg-[var(--rui-success)]" : "border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)]",
        a && "opacity-60",
        !s && !o && u,
        m
      ),
      ...p,
      children: /* @__PURE__ */ e(
        "span",
        {
          className: l(
            "pointer-events-none absolute h-7 w-7 rounded-full bg-[#f1f1ee] shadow-[0_3px_10px_rgba(0,0,0,0.22)] transition-[left]",
            C ? "left-[24px]" : "left-[1px]",
            f
          )
        }
      )
    }
  );
  return !s && !o ? z : /* @__PURE__ */ c("div", { className: l("inline-flex items-start gap-3", a && "cursor-not-allowed opacity-60", u), children: [
    z,
    (s || o) && /* @__PURE__ */ c("span", { className: "min-w-0", children: [
      s ? /* @__PURE__ */ e("span", { id: L, className: l("block text-sm font-medium text-[var(--rui-text-primary)]", w), children: s }) : null,
      o ? /* @__PURE__ */ e("span", { className: l("mt-0.5 block text-sm text-[var(--rui-text-secondary)]", g), children: o }) : null
    ] })
  ] });
}), Ur = Ve(function({
  value: r,
  defaultValue: i = "",
  onChange: d,
  label: s,
  description: o,
  error: a,
  helperText: u,
  labelPosition: m = "top",
  wrapperClassName: f,
  labelClassName: w,
  descriptionClassName: g,
  errorClassName: N,
  helperClassName: I,
  inputClassName: p,
  prefix: k,
  suffix: C,
  accentKey: T,
  className: L,
  style: U,
  id: z,
  disabled: q,
  required: $,
  ...X
}, Z) {
  const [A, O] = Ge({
    value: r,
    defaultValue: i,
    onChange: d
  }), _ = lt(), E = z ?? X.name ?? _, ee = [o ? `${E}-description` : null, a ? `${E}-error` : null, u ? `${E}-helper` : null].filter(Boolean).join(" ") || void 0, G = pe(T, U), D = /* @__PURE__ */ e(
    "input",
    {
      ref: Z,
      id: E,
      value: A,
      onChange: (te) => O(te.target.value),
      disabled: q,
      required: $,
      "aria-invalid": !!a || void 0,
      "aria-describedby": ee,
      style: G,
      className: l(
        "rui-input h-10 min-w-0 w-full rounded-[4px] px-4 text-[15px] outline-none transition placeholder:text-[#747a95] focus:border-[var(--rui-accent)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
        L,
        p
      ),
      ...X
    }
  ), P = k || C ? /* @__PURE__ */ c("div", { className: l("flex min-w-0 items-stretch gap-2"), children: [
    k ? /* @__PURE__ */ e("div", { className: "inline-flex items-center text-[var(--rui-text-tertiary)]", children: k }) : null,
    D,
    C ? /* @__PURE__ */ e("div", { className: "inline-flex items-center text-[var(--rui-text-tertiary)]", children: C }) : null
  ] }) : D;
  return !s && !o && !a && !u && !k && !C ? D : /* @__PURE__ */ c("div", { className: l(m === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", f), children: [
    s || o ? /* @__PURE__ */ c("div", { className: l(m === "left" ? "pt-2" : "", "min-w-0"), children: [
      s ? /* @__PURE__ */ c("label", { htmlFor: E, className: l("block text-sm font-medium text-white", w), children: [
        s,
        $ ? /* @__PURE__ */ e("span", { className: "ml-1 text-[var(--rui-accent)]", children: "*" }) : null
      ] }) : null,
      o ? /* @__PURE__ */ e("div", { id: `${E}-description`, className: l("mt-1 text-sm text-[var(--rui-text-secondary)]", g), children: o }) : null
    ] }) : null,
    /* @__PURE__ */ c("div", { className: "min-w-0", children: [
      P,
      a ? /* @__PURE__ */ e("div", { id: `${E}-error`, className: l("mt-1 text-sm text-[var(--rui-danger)]", N), children: a }) : u ? /* @__PURE__ */ e("div", { id: `${E}-helper`, className: l("mt-1 text-sm text-[var(--rui-text-tertiary)]", I), children: u }) : null
    ] })
  ] });
}), $t = Ve(function({ type: r = "datetime-local", ...i }, d) {
  return /* @__PURE__ */ e(Ur, { ref: d, type: r, ...i });
});
function je(t) {
  return t.kind === "action";
}
function nr(t) {
  return !je(t) && t.hideable !== !1;
}
function ir(t) {
  return je(t) || t.hideable === !1 ? !0 : t.visibleByDefault !== !1;
}
function Xe(t, r) {
  return r.getValue ? r.getValue(t) : r.accessor ? r.accessor(t) : t == null ? void 0 : t[r.id];
}
function at(t) {
  return Array.isArray(t) ? t.map((r) => at(r)).join(" ") : t == null ? "" : typeof t == "object" ? JSON.stringify(t) : String(t);
}
function nt(t) {
  const r = Number(t);
  return Number.isFinite(r) ? r : null;
}
function it(t) {
  if (t == null || t === "") return null;
  if (t instanceof Date) return t.getTime();
  if (typeof t == "number") return Number.isFinite(t) ? t : null;
  const r = Date.parse(String(t));
  return Number.isFinite(r) ? r : null;
}
function yt(t) {
  if (typeof t == "boolean") return t;
  if (typeof t == "number") return t > 0;
  if (typeof t == "string") {
    const r = t.trim().toLowerCase();
    if (["true", "yes", "1", "enabled", "open"].includes(r)) return !0;
    if (["false", "no", "0", "disabled", "closed"].includes(r)) return !1;
  }
  return null;
}
function St(t) {
  return t == null ? !1 : typeof t == "string" ? t.trim().length > 0 && t !== "all" : Array.isArray(t) ? t.length > 0 : typeof t == "object" ? Object.values(t).some((r) => St(r)) : !0;
}
function Ot(t, r) {
  var i;
  return r == null ? !1 : t === "text" ? !!String(r || "").trim() : t === "enum" ? Array.isArray(r == null ? void 0 : r.values) && !!((i = r.values) != null && i.length) : t === "number" ? !!(String((r == null ? void 0 : r.min) || "").trim() || String((r == null ? void 0 : r.max) || "").trim()) : t === "datetime" ? !!(String((r == null ? void 0 : r.from) || "").trim() || String((r == null ? void 0 : r.to) || "").trim()) : t === "boolean" ? !!(r != null && r.value && r.value !== "all") : !1;
}
function ar(t) {
  return t == null || t === "" ? "-" : Array.isArray(t) ? t.join(", ") : typeof t == "object" ? JSON.stringify(t) : String(t);
}
function Xr(t, r, i, d) {
  if (i.compare) return i.compare(t, r, d);
  const s = Xe(t, i), o = Xe(r, i);
  let a = 0;
  switch (i.kind) {
    case "number": {
      const u = nt(s), m = nt(o);
      u == null && m == null ? a = 0 : u == null ? a = 1 : m == null ? a = -1 : a = u - m;
      break;
    }
    case "datetime": {
      const u = it(s), m = it(o);
      u == null && m == null ? a = 0 : u == null ? a = 1 : m == null ? a = -1 : a = u - m;
      break;
    }
    case "boolean": {
      const u = yt(s), m = yt(o);
      u == null && m == null ? a = 0 : u == null ? a = 1 : m == null ? a = -1 : a = Number(u) - Number(m);
      break;
    }
    default:
      a = at(s).localeCompare(at(o), void 0, { numeric: !0, sensitivity: "base" });
      break;
  }
  return d === "asc" ? a : a * -1;
}
function Qr(t, r, i) {
  if (r.filterFn) return r.filterFn(t, i);
  const d = r.kind || "text", s = Xe(t, r);
  switch (d) {
    case "enum": {
      const o = Array.isArray(i == null ? void 0 : i.values) ? i.values.map(String) : [];
      return o.length ? (Array.isArray(s) ? s.map((u) => String(u)) : [String(s ?? "")]).some((u) => o.includes(u)) : !0;
    }
    case "number": {
      const o = nt(s), a = nt(i == null ? void 0 : i.min), u = nt(i == null ? void 0 : i.max);
      return !(o == null || a != null && o < a || u != null && o > u);
    }
    case "datetime": {
      const o = it(s), a = it(i == null ? void 0 : i.from), u = it(i == null ? void 0 : i.to);
      return !(o == null || a != null && o < a || u != null && o > u);
    }
    case "boolean": {
      const o = String((i == null ? void 0 : i.value) || "all");
      if (o === "all") return !0;
      const a = yt(s);
      return a == null ? !1 : o === "yes" ? a : !a;
    }
    default: {
      const o = String(i || "").trim().toLowerCase();
      return o ? at(s).toLowerCase().includes(o) : !0;
    }
  }
}
function Nt(t, r) {
  return {
    visibleColumnIds: t.filter((i) => ir(i)).map((i) => i.id),
    columnWidths: Object.fromEntries(t.filter((i) => Number(i.width) > 0).map((i) => [i.id, Number(i.width)])),
    sort: null,
    filters: {},
    globalSearch: "",
    expandedRowIds: [],
    selectedRowIds: [],
    ...r
  };
}
function rt(t, r, i) {
  var N, I;
  const d = Nt(r, i), s = new Map(r.map((p) => [p.id, p])), o = r.filter((p) => !nr(p)).map((p) => p.id), a = Array.isArray(t == null ? void 0 : t.visibleColumnIds) ? t.visibleColumnIds.filter((p) => s.has(p)) : d.visibleColumnIds, u = /* @__PURE__ */ new Set([...a, ...o]);
  r.filter((p) => !je(p) && u.has(p.id)).length || r.forEach((p) => {
    ir(p) && u.add(p.id);
  });
  const f = (N = t == null ? void 0 : t.sort) != null && N.columnId ? s.get(t.sort.columnId) : null, w = f && f.sortable !== !1 && u.has(f.id) && !je(f) && ["asc", "desc"].includes(((I = t == null ? void 0 : t.sort) == null ? void 0 : I.direction) || "") ? { columnId: f.id, direction: t.sort.direction } : d.sort, g = Object.fromEntries(
    Object.entries((t == null ? void 0 : t.filters) || {}).filter(([p, k]) => {
      const C = s.get(p);
      return !!(C && u.has(p) && C.filterable !== !1 && !je(C) && St(k));
    })
  );
  return {
    visibleColumnIds: r.filter((p) => u.has(p.id)).map((p) => p.id),
    columnWidths: {
      ...d.columnWidths,
      ...Object.fromEntries(
        Object.entries((t == null ? void 0 : t.columnWidths) || {}).filter(([p, k]) => s.has(p) && Number.isFinite(Number(k)) && Number(k) > 0).map(([p, k]) => [p, Number(k)])
      )
    },
    sort: w,
    filters: g,
    globalSearch: typeof (t == null ? void 0 : t.globalSearch) == "string" ? t.globalSearch : d.globalSearch,
    expandedRowIds: Array.isArray(t == null ? void 0 : t.expandedRowIds) ? t.expandedRowIds.map(String) : d.expandedRowIds,
    selectedRowIds: Array.isArray(t == null ? void 0 : t.selectedRowIds) ? t.selectedRowIds.map(String) : d.selectedRowIds
  };
}
function Yr(t, r, i = "rui:table") {
  return `${i}:${t}:${r || "__global__"}`;
}
function qr(t, r, i) {
  if (t === !1) return null;
  const d = (t == null ? void 0 : t.key) || r;
  return d ? Yr(d, (t == null ? void 0 : t.scope) ?? i, t == null ? void 0 : t.namespace) : null;
}
function kt(t) {
  const { expandedRowIds: r, selectedRowIds: i, ...d } = t;
  return d;
}
function Kr(t) {
  return { ...t, expandedRowIds: [], selectedRowIds: [] };
}
function en(t, r) {
  if (typeof window > "u") return null;
  try {
    const d = (r || window.localStorage).getItem(t);
    return d ? kt(JSON.parse(d)) : null;
  } catch {
    return null;
  }
}
function tn(t, r, i) {
  if (!(typeof window > "u"))
    try {
      (i || window.localStorage).setItem(t, JSON.stringify(kt(r)));
    } catch {
    }
}
function Ft(t) {
  return t === "center" ? "text-center" : t === "right" ? "text-right" : "text-left";
}
function rn(t, r) {
  return !t || t.columnId !== r ? { columnId: r, direction: "asc" } : t.direction === "asc" ? { columnId: r, direction: "desc" } : null;
}
function nn(t, r) {
  const i = /* @__PURE__ */ new Set();
  return t.forEach((d) => {
    const s = Xe(d, r);
    Array.isArray(s) ? s.forEach((o) => i.add(String(o))) : s != null && s !== "" && i.add(String(s));
  }), Array.from(i).sort((d, s) => d.localeCompare(s, void 0, { numeric: !0, sensitivity: "base" })).map((d) => ({ label: d, value: d }));
}
function Ht(t, r) {
  const i = t.getBoundingClientRect(), d = window.innerWidth, s = window.innerHeight, o = 12, a = Math.max(o, Math.min(i.bottom + 8, s - o - 120)), u = Math.max(o, Math.min(i.right - r, d - r - o)), m = Math.max(180, s - a - o);
  return { left: u, top: a, maxHeight: m };
}
function an(t, r) {
  return r.renderDetailValue ? r.renderDetailValue(t) : r.renderCell ? r.renderCell(t) : ar(Xe(t, r));
}
function ln(t, r) {
  return r ? { ...t, ...r } : t;
}
function Sn({
  rows: t,
  columns: r,
  rowKey: i,
  tableId: d,
  scopeId: s = null,
  persistence: o,
  state: a,
  defaultState: u,
  onStateChange: m,
  selection: f,
  virtualization: w,
  loading: g = !1,
  emptyMessage: N = "No rows available.",
  loadingContent: I = "Loading rows.",
  toolbarContent: p,
  renderToolbar: k,
  headerFilters: C,
  renderHeaderFilters: T,
  renderSelectionActions: L,
  hideColumnControls: U = !1,
  searchable: z = !1,
  searchPlaceholder: q = "Search rows",
  globalSearchFn: $,
  sortRows: X,
  renderExpandedContent: Z,
  expandedRowIds: A,
  defaultExpandedRowIds: O,
  onExpandedChange: _,
  onRowExpand: E,
  rowClassName: ee,
  detailRowClassName: G,
  containerClassName: D,
  tableClassName: P,
  accentKey: te,
  style: H,
  className: Ce,
  classNames: R
}) {
  const V = ve(null), Q = ve(null), me = ve(null), F = ve(null), de = ve(null), ue = ve(null), [Y, De] = he(!1), [ke, Re] = he(!1), [Le, We] = he(null), [M, ie] = he(null), [S, re] = he(!1), [we, Me] = he(0), be = qr(o, d, s), se = o === !1, xe = se || o == null ? void 0 : o.adapter, _e = se || o == null ? void 0 : o.storage, Qe = pe(te, H), [Ye, Ae] = he(() => !be || !xe), Je = ne(() => r.map((n) => n.id).join(""), [r]), $e = ve(r), v = ve(m), [ye, ce] = he(
    () => rt(
      ln(
        Nt(r, { ...u, expandedRowIds: O || (u == null ? void 0 : u.expandedRowIds) }),
        be && en(be, _e) || void 0
      ),
      r,
      {
        ...u,
        expandedRowIds: O || (u == null ? void 0 : u.expandedRowIds),
        selectedRowIds: (f == null ? void 0 : f.defaultSelectedKeys) || (u == null ? void 0 : u.selectedRowIds)
      }
    )
  ), h = ne(() => {
    const n = { ...ye, ...a };
    return A !== void 0 && (n.expandedRowIds = A), rt(n, r);
  }, [r, a, A, ye]), K = ve(h);
  K.current = h;
  const le = Ie(
    (n) => {
      var j;
      const b = rt(
        {
          ...K.current,
          ...a,
          ...A !== void 0 ? { expandedRowIds: A } : {}
        },
        $e.current
      ), y = rt(typeof n == "function" ? n(b) : n, $e.current);
      return K.current = y, ce(y), (j = v.current) == null || j.call(v, y), y;
    },
    [a, A]
  );
  ae(() => {
    re(!0);
  }, []), ae(() => {
    $e.current = r;
  }, [r]), ae(() => {
    v.current = m;
  }, [m]), ae(() => {
    let n = !1;
    if (!be || !xe) {
      Ae(!0);
      return;
    }
    return Ae(!1), Promise.resolve(xe.load(be)).then((b) => {
      n || (b && ce((y) => {
        var W;
        const j = rt({ ...y, ...kt(b) }, $e.current);
        return (W = v.current) == null || W.call(v, j), j;
      }), Ae(!0));
    }).catch(() => {
      n || Ae(!1);
    }), () => {
      n = !0;
    };
  }, [Je, xe, be]), ae(() => {
    if (!(!be || se)) {
      if (xe) {
        if (!Ye) return;
        Promise.resolve(xe.save(be, Kr(h))).catch(() => {
        });
        return;
      }
      tn(be, h, _e);
    }
  }, [Ye, h, xe, se, be, _e]);
  const oe = ne(
    () => r.filter((n) => je(n) || n.hideable === !1 ? !0 : h.visibleColumnIds.includes(n.id)),
    [r, h.visibleColumnIds]
  ), Pe = ne(
    () => r.filter((n) => je(n) || n.hideable === !1 ? !1 : !oe.some((b) => b.id === n.id)),
    [r, oe]
  ), Oe = Ie(
    (n, b) => {
      le((y) => {
        const j = { ...y.filters };
        return St(b) ? j[n] = b : delete j[n], { ...y, filters: j };
      });
    },
    [le]
  ), Mt = Ie(
    (n) => {
      le((b) => ({ ...b, globalSearch: n }));
    },
    [le]
  ), st = Ie(
    (n) => {
      le((b) => {
        if (!(n in b.filters)) return b;
        const y = { ...b.filters };
        return delete y[n], { ...b, filters: y };
      });
    },
    [le]
  ), Ct = Ie(
    (n, b) => {
      !Number.isFinite(b) || b <= 0 || le((y) => ({ ...y, columnWidths: { ...y.columnWidths, [n]: b } }));
    },
    [le]
  ), xt = Ie(() => {
    le(Nt(r, { ...u, expandedRowIds: O || [], selectedRowIds: (f == null ? void 0 : f.defaultSelectedKeys) || [] }));
  }, [r, O, u, f == null ? void 0 : f.defaultSelectedKeys, le]);
  ae(() => {
    const n = (y) => {
      const j = ue.current;
      if (!j) return;
      const W = r.find((Te) => Te.id === j.columnId);
      if (!W) return;
      const J = Math.max(W.minWidth || 96, 56), fe = W.maxWidth || 720, ze = Math.min(fe, Math.max(J, j.startWidth + (y.clientX - j.startX)));
      Ct(j.columnId, ze);
    }, b = () => {
      ue.current = null;
    };
    return window.addEventListener("mousemove", n), window.addEventListener("mouseup", b), () => {
      window.removeEventListener("mousemove", n), window.removeEventListener("mouseup", b);
    };
  }, [r, Ct]), ae(() => {
    const n = (b) => {
      !(b.target instanceof Node) || [V, Q, me, F, de].some((j) => {
        var W;
        return (W = j.current) == null ? void 0 : W.contains(b.target);
      }) || (De(!1), Re(!1));
    };
    return document.addEventListener("mousedown", n), () => document.removeEventListener("mousedown", n);
  }, []), ae(() => {
    if (!Y || !Q.current || typeof window > "u") return;
    const n = () => {
      Q.current && We(Ht(Q.current, 320));
    };
    return n(), window.addEventListener("resize", n), window.addEventListener("scroll", n, !0), () => {
      window.removeEventListener("resize", n), window.removeEventListener("scroll", n, !0);
    };
  }, [Y]), ae(() => {
    if (!ke || !me.current || typeof window > "u") return;
    const n = () => {
      me.current && ie(Ht(me.current, 260));
    };
    return n(), window.addEventListener("resize", n), window.addEventListener("scroll", n, !0), () => {
      window.removeEventListener("resize", n), window.removeEventListener("scroll", n, !0);
    };
  }, [ke]);
  const Ee = Pe.length > 0 || !!Z, Ke = ne(() => {
    const n = h.globalSearch.trim().toLowerCase();
    return t.filter((b) => Object.entries(h.filters).every(([j, W]) => {
      const J = r.find((fe) => fe.id === j);
      return !J || je(J) ? !0 : Qr(b, J, W);
    }) ? n ? $ ? $(b, n) : r.some((j) => !je(j) && at(Xe(b, j)).toLowerCase().includes(n)) : !0 : !1);
  }, [r, $, h.filters, h.globalSearch, t]), Ze = ne(() => {
    if (X) return X(Ke, h.sort, r);
    if (!h.sort) return Ke;
    const n = r.find((b) => {
      var y;
      return b.id === ((y = h.sort) == null ? void 0 : y.columnId);
    });
    return n ? Ke.map((b, y) => ({ row: b, index: y })).sort((b, y) => Xr(b.row, y.row, n, h.sort.direction) || b.index - y.index).map((b) => b.row) : Ke;
  }, [r, Ke, h.sort, X]), ct = ne(() => new Map(t.map((n) => [i(n), n])), [i, t]), Ne = f == null ? void 0 : f.mode, Fe = (f == null ? void 0 : f.selectedKeys) ?? h.selectedRowIds, ot = ne(() => new Set(Fe), [Fe]), pt = ne(() => Fe.map((n) => ct.get(n)).filter(Boolean), [ct, Fe]), et = Ie(
    (n) => {
      var b;
      le((y) => ({ ...y, selectedRowIds: n })), (b = f == null ? void 0 : f.onChange) == null || b.call(f, n, n.map((y) => ct.get(y)).filter(Boolean));
    },
    [ct, f, le]
  ), Bt = (n) => {
    var j;
    if (!Ne || (j = f == null ? void 0 : f.isRowDisabled) != null && j.call(f, n)) return;
    const b = i(n);
    if (Ne === "single") {
      et(ot.has(b) ? [] : [b]);
      return;
    }
    const y = new Set(Fe);
    y.has(b) ? y.delete(b) : y.add(b), et(Array.from(y));
  }, tt = ((f == null ? void 0 : f.selectAllScope) === "all" ? t : Ze).filter((n) => {
    var b;
    return !((b = f == null ? void 0 : f.isRowDisabled) != null && b.call(f, n));
  }).map((n) => i(n)), dt = !!tt.length && tt.every((n) => ot.has(n)), lr = tt.some((n) => ot.has(n)), sr = () => {
    !Ne || Ne === "single" || et(dt ? Fe.filter((n) => !tt.includes(n)) : Array.from(/* @__PURE__ */ new Set([...Fe, ...tt])));
  }, cr = () => et([]), It = A ?? h.expandedRowIds, or = ne(() => new Set(It), [It]), dr = (n) => {
    const b = i(n), j = le((J) => {
      const fe = new Set(J.expandedRowIds);
      return fe.has(b) ? fe.delete(b) : fe.add(b), { ...J, expandedRowIds: Array.from(fe) };
    }).expandedRowIds, W = j.includes(b);
    _ == null || _(j, n), E == null || E(n, W);
  }, vt = r.filter((n) => !je(n) && n.hideable !== !1), ut = oe.filter((n) => !je(n) && n.filterable !== !1), gt = ut.filter((n) => Ot(n.kind || "text", h.filters[n.id])).length, ur = ne(() => oe.reduce((b, y) => b + Number(h.columnWidths[y.id] || y.width || y.minWidth || 160), 0) + (Ee ? 56 : 0) + (Ne ? 52 : 0), [Ee, h.columnWidths, Ne, oe]), He = !!(w != null && w.enabled && !Ee), ft = (w == null ? void 0 : w.rowHeight) || 48, Rt = (w == null ? void 0 : w.maxHeight) || 520, Tt = (w == null ? void 0 : w.overscan) || 6, ht = He ? Math.max(0, Math.floor(we / ft) - Tt) : 0, fr = He ? Math.ceil(Rt / ft) + Tt * 2 : Ze.length, Dt = He ? Ze.slice(ht, ht + fr) : Ze, jt = He ? ht * ft : 0, Lt = He ? Math.max(0, (Ze.length - ht - Dt.length) * ft) : 0, hr = (n) => {
    var y, j;
    if (n.renderFilter)
      return n.renderFilter({
        value: h.filters[n.id],
        setValue: (W) => Oe(n.id, W),
        clear: () => st(n.id),
        rows: t
      });
    const b = n.kind || "text";
    if (b === "enum") {
      const W = n.getFilterOptions ? n.getFilterOptions(t) : n.getEnumOptions ? n.getEnumOptions(t) : nn(t, n), J = Array.isArray((y = h.filters[n.id]) == null ? void 0 : y.values) ? h.filters[n.id].values.map(String) : [];
      return /* @__PURE__ */ e("div", { className: "max-h-[220px] space-y-2 overflow-auto pr-1 rui-scrollbar", children: W.map((fe) => {
        const ze = J.includes(String(fe.value));
        return /* @__PURE__ */ c("label", { className: "flex items-center gap-3 text-sm text-[var(--rui-text-secondary)]", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "checkbox",
              checked: ze,
              onChange: () => {
                const Te = new Set(J);
                ze ? Te.delete(String(fe.value)) : Te.add(String(fe.value)), Oe(n.id, { values: Array.from(Te) });
              },
              className: "h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)]"
            }
          ),
          /* @__PURE__ */ e("span", { children: fe.label })
        ] }, String(fe.value));
      }) });
    }
    if (b === "number") {
      const W = h.filters[n.id] || {};
      return /* @__PURE__ */ c("div", { className: "space-y-3", children: [
        /* @__PURE__ */ e(
          "input",
          {
            className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input",
            type: "number",
            value: W.min || "",
            onChange: (J) => Oe(n.id, { ...W, min: J.target.value }),
            placeholder: "Minimum"
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input",
            type: "number",
            value: W.max || "",
            onChange: (J) => Oe(n.id, { ...W, max: J.target.value }),
            placeholder: "Maximum"
          }
        )
      ] });
    }
    if (b === "datetime") {
      const W = h.filters[n.id] || {};
      return /* @__PURE__ */ c("div", { className: "space-y-3", children: [
        /* @__PURE__ */ e($t, { type: "datetime-local", value: W.from || "", onChange: (J) => Oe(n.id, { ...W, from: J }) }),
        /* @__PURE__ */ e($t, { type: "datetime-local", value: W.to || "", onChange: (J) => Oe(n.id, { ...W, to: J }) })
      ] });
    }
    if (b === "boolean") {
      const W = ((j = h.filters[n.id]) == null ? void 0 : j.value) || "all";
      return /* @__PURE__ */ c("select", { className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input", value: W, onChange: (J) => Oe(n.id, { value: J.target.value }), children: [
        /* @__PURE__ */ e("option", { value: "all", children: "All" }),
        /* @__PURE__ */ e("option", { value: "yes", children: "Yes" }),
        /* @__PURE__ */ e("option", { value: "no", children: "No" })
      ] });
    }
    return /* @__PURE__ */ e(
      "input",
      {
        className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input",
        value: String(h.filters[n.id] || ""),
        onChange: (W) => Oe(n.id, W.target.value),
        placeholder: `Filter ${String(n.label)}`
      }
    );
  }, At = k == null ? void 0 : k({ state: h, rows: t, visibleRows: Ze, selectedRows: pt, reset: xt }), Et = Fe.length ? L == null ? void 0 : L({ selectedKeys: Fe, selectedRows: pt, clearSelection: cr }) : null, Pt = oe.some((n) => n.groupId || n.groupLabel), mr = Pt ? /* @__PURE__ */ c("tr", { className: "sticky top-0 z-30 border-b border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] text-[var(--rui-text-secondary)]", children: [
    Ne ? /* @__PURE__ */ e("th", { className: "w-[52px] px-3 py-2", rowSpan: 2 }) : null,
    Ee ? /* @__PURE__ */ e("th", { className: "w-14 px-3 py-2", rowSpan: 2 }) : null,
    oe.map((n) => /* @__PURE__ */ e("th", { className: "px-3 py-2 text-left text-xs font-medium uppercase tracking-[0.14em]", children: n.groupLabel || n.groupId || "" }, n.id))
  ] }) : null;
  return /* @__PURE__ */ c("div", { ref: V, className: l("rui-theme flex min-h-0 w-full flex-1 flex-col", Ce, R == null ? void 0 : R.root), style: Qe, children: [
    p || At || Et || z || !U && vt.length ? /* @__PURE__ */ c("div", { className: l("mb-3 flex flex-wrap items-center justify-between gap-2", R == null ? void 0 : R.toolbar), children: [
      /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-2", children: [
        z ? /* @__PURE__ */ e("div", { className: "relative w-full max-w-[260px]", children: /* @__PURE__ */ e(
          "input",
          {
            className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input",
            value: h.globalSearch,
            onChange: (n) => Mt(n.target.value),
            placeholder: q
          }
        ) }) : null,
        p,
        At,
        Et
      ] }),
      !U && vt.length ? /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center justify-end gap-2", children: [
        ut.length ? /* @__PURE__ */ e("div", { ref: Q, className: "flex items-center", children: /* @__PURE__ */ c(
          ge,
          {
            variant: "ghost",
            size: "sm",
            leftIcon: /* @__PURE__ */ e(Be, { name: "filter", className: "h-4 w-4" }),
            className: l(gt ? "text-[var(--rui-accent)]" : ""),
            onClick: () => De((n) => !n),
            children: [
              "Filters",
              gt ? /* @__PURE__ */ e("span", { className: "rounded-full border border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] px-1.5 py-0 text-[10px] leading-4 text-[var(--rui-accent)]", children: gt }) : null
            ]
          }
        ) }) : null,
        /* @__PURE__ */ e("div", { ref: me, className: "flex items-center", children: /* @__PURE__ */ e(ge, { variant: "ghost", size: "sm", leftIcon: /* @__PURE__ */ e(Be, { name: "grid", className: "h-4 w-4" }), onClick: () => Re((n) => !n), children: "Columns" }) }),
        /* @__PURE__ */ e(ge, { variant: "ghost", size: "sm", onClick: xt, children: "Reset table" })
      ] }) : null
    ] }) : null,
    C || T ? /* @__PURE__ */ c("div", { className: l("mb-3 flex flex-wrap items-center gap-2 rounded-[10px] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)] p-3", R == null ? void 0 : R.headerFilters), children: [
      C,
      T == null ? void 0 : T({
        state: h,
        rows: t,
        visibleRows: Ze,
        selectedRows: pt,
        setGlobalSearch: Mt,
        setFilter: Oe,
        clearFilter: st,
        reset: xt
      })
    ] }) : null,
    S && Y && Le ? bt(
      /* @__PURE__ */ c(
        "div",
        {
          ref: F,
          className: l(
            "rui-theme fixed z-[130] w-[320px] overflow-auto rounded-[10px] border border-solid border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] p-3 shadow-panel rui-scrollbar",
            R == null ? void 0 : R.menu
          ),
          style: { left: Le.left, top: Le.top, maxHeight: Le.maxHeight },
          children: [
            /* @__PURE__ */ c("div", { className: "mb-3 flex items-center justify-between", children: [
              /* @__PURE__ */ e("div", { className: "text-xs uppercase tracking-[0.14em] text-[var(--rui-text-tertiary)]", children: "Table filters" }),
              /* @__PURE__ */ e(ge, { variant: "ghost", size: "sm", onClick: () => ut.forEach((n) => st(n.id)), children: "Clear all" })
            ] }),
            /* @__PURE__ */ e("div", { className: "space-y-4", children: ut.map((n) => {
              const b = Ot(n.kind || "text", h.filters[n.id]);
              return /* @__PURE__ */ c("div", { className: "rounded-[10px] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)] p-3", children: [
                /* @__PURE__ */ c("div", { className: "mb-2 flex items-center justify-between gap-3", children: [
                  /* @__PURE__ */ e("div", { className: "text-sm font-medium text-[var(--rui-text-primary)]", children: n.label }),
                  b ? /* @__PURE__ */ e(ge, { variant: "ghost", size: "sm", onClick: () => st(n.id), children: "Clear" }) : null
                ] }),
                hr(n)
              ] }, n.id);
            }) })
          ]
        }
      ),
      document.body
    ) : null,
    S && ke && M ? bt(
      /* @__PURE__ */ c(
        "div",
        {
          ref: de,
          className: l("rui-theme fixed z-[130] w-[260px] rounded-[10px] border border-solid border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] p-3 shadow-panel", R == null ? void 0 : R.menu),
          style: { left: M.left, top: M.top, maxHeight: M.maxHeight },
          children: [
            /* @__PURE__ */ e("div", { className: "mb-2 text-xs uppercase tracking-[0.14em] text-[var(--rui-text-tertiary)]", children: "Visible columns" }),
            /* @__PURE__ */ e("div", { className: "space-y-2 overflow-auto pr-1 rui-scrollbar", style: { maxHeight: Math.max(120, M.maxHeight - 36) }, children: vt.map((n) => {
              const b = h.visibleColumnIds.includes(n.id);
              return /* @__PURE__ */ c("label", { className: "flex items-center gap-3 text-sm text-[var(--rui-text-secondary)]", children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "checkbox",
                    checked: b,
                    onChange: () => {
                      le((y) => {
                        var ze;
                        const j = y.visibleColumnIds.includes(n.id), W = y.visibleColumnIds.filter((Te) => {
                          const Se = r.find((qe) => qe.id === Te);
                          return Se && !je(Se);
                        });
                        if (j && W.length <= 1) return y;
                        const J = new Set(y.visibleColumnIds);
                        j ? J.delete(n.id) : J.add(n.id);
                        const fe = { ...y.filters };
                        return j && delete fe[n.id], {
                          ...y,
                          visibleColumnIds: r.filter((Te) => J.has(Te.id) || !nr(Te)).map((Te) => Te.id),
                          filters: fe,
                          sort: ((ze = y.sort) == null ? void 0 : ze.columnId) === n.id && j ? null : y.sort
                        };
                      });
                    },
                    className: "h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)]"
                  }
                ),
                /* @__PURE__ */ e("span", { children: n.label })
              ] }, n.id);
            }) })
          ]
        }
      ),
      document.body
    ) : null,
    /* @__PURE__ */ e(
      "div",
      {
        className: l("min-h-0 w-full flex-1 overflow-auto rounded-[10px] border border-[var(--rui-border-soft)]", D, R == null ? void 0 : R.container),
        style: { scrollbarGutter: "stable both-edges", maxHeight: He ? Rt : void 0 },
        onScroll: (n) => {
          He && Me(n.currentTarget.scrollTop);
        },
        children: /* @__PURE__ */ c("table", { className: l("w-full table-fixed text-left text-sm", P, R == null ? void 0 : R.table), style: { minWidth: `${Math.max(ur, 720)}px` }, children: [
          /* @__PURE__ */ c("colgroup", { children: [
            Ne ? /* @__PURE__ */ e("col", { style: { width: 52 } }) : null,
            Ee ? /* @__PURE__ */ e("col", { style: { width: 56 } }) : null,
            oe.map((n) => /* @__PURE__ */ e("col", { style: { width: h.columnWidths[n.id] || n.width || n.minWidth || 160 } }, n.id))
          ] }),
          /* @__PURE__ */ c("thead", { children: [
            mr,
            /* @__PURE__ */ c("tr", { className: l("sticky top-0 z-20 border-b border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] text-[var(--rui-text-secondary)]", Pt && "top-[37px]", R == null ? void 0 : R.headerRow), children: [
              Ne ? /* @__PURE__ */ e("th", { className: "w-[52px] px-3 py-3 font-medium", children: Ne === "multi" ? /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: dt,
                  ref: (n) => {
                    n && (n.indeterminate = lr && !dt);
                  },
                  onChange: sr,
                  className: "h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)]",
                  "aria-label": dt ? "Clear row selection" : "Select rows"
                }
              ) : null }) : null,
              Ee ? /* @__PURE__ */ e("th", { className: "w-14 px-3 py-3 font-medium" }) : null,
              oe.map((n) => {
                var W;
                const b = !je(n) && n.sortable !== !1, y = ((W = h.sort) == null ? void 0 : W.columnId) === n.id ? h.sort.direction : null, j = n.renderHeader ? n.renderHeader() : n.label;
                return /* @__PURE__ */ c("th", { className: l("relative px-3 py-3 font-medium", Ft(n.align), n.headerClassName), children: [
                  /* @__PURE__ */ e("div", { className: "flex items-center gap-1 pr-3", children: n.renderHeader ? /* @__PURE__ */ e("div", { className: l("flex min-w-0 flex-1 items-center", n.align === "right" ? "justify-end" : n.align === "center" ? "justify-center" : ""), children: j }) : b ? /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      className: l(
                        "flex min-w-0 flex-1 appearance-none items-center gap-1 border-0 bg-transparent p-0 text-left font-medium text-inherit transition hover:text-[var(--rui-text-primary)]",
                        n.align === "right" ? "justify-end" : n.align === "center" ? "justify-center" : ""
                      ),
                      onClick: () => le((J) => ({ ...J, sort: rn(J.sort, n.id) })),
                      children: [
                        /* @__PURE__ */ e("span", { className: "truncate", children: j }),
                        /* @__PURE__ */ e("span", { className: l("text-[10px] uppercase tracking-[0.14em]", y ? "text-[var(--rui-accent)]" : "text-[var(--rui-text-tertiary)]"), children: y === "asc" ? "↑" : y === "desc" ? "↓" : "•" })
                      ]
                    }
                  ) : /* @__PURE__ */ e("span", { className: "truncate", children: j }) }),
                  je(n) ? null : /* @__PURE__ */ e(
                    "div",
                    {
                      className: "absolute inset-y-1 right-0 w-2 cursor-col-resize rounded-full transition hover:bg-white/10",
                      onMouseDown: (J) => {
                        J.preventDefault(), ue.current = {
                          columnId: n.id,
                          startX: J.clientX,
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
            He && jt ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: oe.length + (Ee ? 1 : 0) + (Ne ? 1 : 0), style: { height: jt } }) }) : null,
            g ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: oe.length + (Ee ? 1 : 0) + (Ne ? 1 : 0), className: "px-3 py-8 text-center text-[var(--rui-text-tertiary)]", children: I }) }) : null,
            g ? null : Dt.map((n) => {
              var Te;
              const b = i(n), y = or.has(b), j = y ? Z == null ? void 0 : Z(n) : null, W = !!Z || Pe.length > 0, J = typeof ee == "function" ? ee(n) : ee, fe = ot.has(b), ze = (Te = f == null ? void 0 : f.isRowDisabled) == null ? void 0 : Te.call(f, n);
              return /* @__PURE__ */ c(Gt.Fragment, { children: [
                /* @__PURE__ */ c("tr", { className: l("border-b border-[var(--rui-border-soft)] align-top last:border-none", fe && "bg-[var(--rui-accent-muted)]", J, R == null ? void 0 : R.row), children: [
                  Ne ? /* @__PURE__ */ e("td", { className: "px-3 py-3", children: /* @__PURE__ */ e(
                    "input",
                    {
                      type: Ne === "single" ? "radio" : "checkbox",
                      checked: fe,
                      disabled: ze,
                      onClick: (Se) => {
                        Ne !== "single" || !fe || ze || (Se.preventDefault(), Bt(n));
                      },
                      onChange: () => {
                        Ne === "single" && fe || Bt(n);
                      },
                      className: "h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)] disabled:opacity-35",
                      "aria-label": fe ? "Deselect row" : "Select row"
                    }
                  ) }) : null,
                  Ee ? /* @__PURE__ */ e("td", { className: "px-3 py-3", children: W ? /* @__PURE__ */ e(ge, { variant: "ghost", size: "sm", className: "w-9 px-0", onClick: () => dr(n), title: y ? "Collapse row" : "Expand row", children: /* @__PURE__ */ e(Be, { name: y ? "chevron-down" : "chevron-right", className: "h-4 w-4" }) }) : null }) : null,
                  oe.map((Se) => {
                    const qe = Se.renderCell ? Se.renderCell(n) : ar(Xe(n, Se)), br = typeof Se.cellClassName == "function" ? Se.cellClassName(n) : Se.cellClassName;
                    return /* @__PURE__ */ e("td", { className: l("px-3 py-3 text-[var(--rui-text-secondary)]", Ft(Se.align), br, R == null ? void 0 : R.cell), children: typeof qe == "string" || typeof qe == "number" ? /* @__PURE__ */ e("div", { className: l(Se.wrap ? "whitespace-normal break-words" : "truncate"), children: qe }) : qe }, Se.id);
                  })
                ] }),
                y && W ? /* @__PURE__ */ e("tr", { className: l("border-b border-[var(--rui-border-soft)] last:border-none", G, R == null ? void 0 : R.detailRow), children: /* @__PURE__ */ e("td", { colSpan: oe.length + (Ee ? 1 : 0) + (Ne ? 1 : 0), className: "px-3 py-3", children: /* @__PURE__ */ c("div", { className: "rounded-[10px] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel-2)] p-4 text-sm text-[var(--rui-text-secondary)]", children: [
                  Pe.length ? /* @__PURE__ */ e("div", { className: "grid gap-3 md:grid-cols-2 xl:grid-cols-3", children: Pe.map((Se) => /* @__PURE__ */ c("div", { children: [
                    /* @__PURE__ */ e("div", { className: "text-xs uppercase tracking-[0.14em] text-[var(--rui-text-tertiary)]", children: Se.label }),
                    /* @__PURE__ */ e("div", { className: "mt-1 whitespace-normal break-words text-[var(--rui-text-primary)]", children: an(n, Se) })
                  ] }, Se.id)) }) : null,
                  j ? /* @__PURE__ */ e("div", { className: l(Pe.length ? "mt-4 border-t border-[var(--rui-border-soft)] pt-4" : ""), children: j }) : null
                ] }) }) }) : null
              ] }, b);
            }),
            He && Lt ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: oe.length + (Ee ? 1 : 0) + (Ne ? 1 : 0), style: { height: Lt } }) }) : null,
            !g && !Ze.length ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: oe.length + (Ee ? 1 : 0) + (Ne ? 1 : 0), className: "px-3 py-8 text-center text-[var(--rui-text-tertiary)]", children: N }) }) : null
          ] })
        ] })
      }
    )
  ] });
}
const kn = Ve(function({
  value: r,
  defaultValue: i = "",
  onChange: d,
  label: s,
  description: o,
  error: a,
  helperText: u,
  labelPosition: m = "top",
  wrapperClassName: f,
  labelClassName: w,
  descriptionClassName: g,
  errorClassName: N,
  helperClassName: I,
  textareaClassName: p,
  accentKey: k,
  className: C,
  style: T,
  id: L,
  disabled: U,
  required: z,
  rows: q = 5,
  ...$
}, X) {
  const [Z, A] = Ge({
    value: r,
    defaultValue: i,
    onChange: d
  }), O = lt(), _ = L ?? $.name ?? O, E = [o ? `${_}-description` : null, a ? `${_}-error` : null, u ? `${_}-helper` : null].filter(Boolean).join(" ") || void 0, ee = pe(k, T);
  return /* @__PURE__ */ c("div", { className: l(m === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", f), children: [
    s || o ? /* @__PURE__ */ c("div", { className: l(m === "left" ? "pt-2" : "", "min-w-0"), children: [
      s ? /* @__PURE__ */ c("label", { htmlFor: _, className: l("block text-sm font-medium text-white", w), children: [
        s,
        z ? /* @__PURE__ */ e("span", { className: "ml-1 text-[var(--rui-accent)]", children: "*" }) : null
      ] }) : null,
      o ? /* @__PURE__ */ e("div", { id: `${_}-description`, className: l("mt-1 text-sm text-[var(--rui-text-secondary)]", g), children: o }) : null
    ] }) : null,
    /* @__PURE__ */ c("div", { className: "min-w-0", children: [
      /* @__PURE__ */ e(
        "textarea",
        {
          ref: X,
          id: _,
          value: Z,
          onChange: (G) => A(G.target.value),
          disabled: U,
          required: z,
          rows: q,
          "aria-invalid": !!a || void 0,
          "aria-describedby": E,
          style: ee,
          className: l(
            "rui-input min-h-[96px] w-full px-3 py-2.5 text-sm outline-none transition placeholder:text-[var(--rui-text-tertiary)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
            C,
            p
          ),
          ...$
        }
      ),
      a ? /* @__PURE__ */ e("div", { id: `${_}-error`, className: l("mt-1 text-sm text-[var(--rui-danger)]", N), children: a }) : u ? /* @__PURE__ */ e("div", { id: `${_}-helper`, className: l("mt-1 text-sm text-[var(--rui-text-tertiary)]", I), children: u }) : null
    ] })
  ] });
});
function sn(t) {
  if (t.trim() === "") return null;
  const r = Number(t);
  return Number.isFinite(r) ? r : null;
}
function wt(t) {
  return t == null ? "" : String(t);
}
const Mn = Ve(function({
  value: r,
  defaultValue: i = null,
  onChange: d,
  onValueChange: s,
  label: o,
  description: a,
  error: u,
  helperText: m,
  labelPosition: f = "top",
  wrapperClassName: w,
  labelClassName: g,
  descriptionClassName: N,
  errorClassName: I,
  helperClassName: p,
  inputClassName: k,
  prefix: C,
  suffix: T,
  accentKey: L,
  className: U,
  style: z,
  id: q,
  disabled: $,
  required: X,
  step: Z,
  min: A,
  max: O,
  ..._
}, E) {
  const [ee, G] = Ge({
    value: r,
    defaultValue: i,
    onChange: d
  }), [D, P] = he(() => wt(r ?? i)), te = lt(), H = q ?? _.name ?? te, Ce = [a ? `${H}-description` : null, u ? `${H}-error` : null, m ? `${H}-helper` : null].filter(Boolean).join(" ") || void 0, R = pe(L, z);
  return ae(() => {
    r !== void 0 && P(wt(r));
  }, [r]), ae(() => {
    r === void 0 && D === "" && ee != null && P(wt(ee));
  }, [ee, D, r]), /* @__PURE__ */ c("div", { className: l(f === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", w), children: [
    o || a ? /* @__PURE__ */ c("div", { className: l(f === "left" ? "pt-2" : "", "min-w-0"), children: [
      o ? /* @__PURE__ */ c("label", { htmlFor: H, className: l("block text-sm font-medium text-white", g), children: [
        o,
        X ? /* @__PURE__ */ e("span", { className: "ml-1 text-[var(--rui-accent)]", children: "*" }) : null
      ] }) : null,
      a ? /* @__PURE__ */ e("div", { id: `${H}-description`, className: l("mt-1 text-sm text-[var(--rui-text-secondary)]", N), children: a }) : null
    ] }) : null,
    /* @__PURE__ */ c("div", { className: "min-w-0", children: [
      /* @__PURE__ */ c("div", { className: "flex min-w-0 items-stretch gap-2", children: [
        C ? /* @__PURE__ */ e("div", { className: "inline-flex items-center text-[var(--rui-text-tertiary)]", children: C }) : null,
        /* @__PURE__ */ e(
          "input",
          {
            ref: E,
            id: H,
            type: "text",
            inputMode: "decimal",
            value: D,
            onChange: (V) => {
              const Q = V.target.value, me = sn(Q);
              P(Q), G(me), s == null || s(me, Q);
            },
            disabled: $,
            required: X,
            min: A,
            max: O,
            step: Z,
            "aria-invalid": !!u || void 0,
            "aria-describedby": Ce,
            style: R,
            className: l(
              "rui-input h-10 min-w-0 w-full px-3 text-sm outline-none transition placeholder:text-[var(--rui-text-tertiary)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
              U,
              k
            ),
            ..._
          }
        ),
        T ? /* @__PURE__ */ e("div", { className: "inline-flex items-center text-[var(--rui-text-tertiary)]", children: T }) : null
      ] }),
      u ? /* @__PURE__ */ e("div", { id: `${H}-error`, className: l("mt-1 text-sm text-[var(--rui-danger)]", I), children: u }) : m ? /* @__PURE__ */ e("div", { id: `${H}-helper`, className: l("mt-1 text-sm text-[var(--rui-text-tertiary)]", p), children: m }) : null
    ] })
  ] });
});
function Cn({
  checked: t,
  defaultChecked: r,
  onCheckedChange: i,
  title: d,
  description: s,
  helper: o,
  leading: a,
  trailing: u,
  disabled: m,
  accentKey: f,
  style: w,
  className: g,
  contentClassName: N,
  titleClassName: I,
  descriptionClassName: p,
  helperClassName: k
}) {
  const [C, T] = Ge({
    value: t,
    defaultValue: r ?? !1,
    onChange: i
  }), L = pe(f, w);
  return /* @__PURE__ */ c(
    "div",
    {
      style: L,
      onClick: (U) => {
        if (m) return;
        const z = U.target;
        z != null && z.closest("button,a,input,select,textarea,label") || T((q) => !q);
      },
      className: l(
        "flex items-start justify-between gap-4 rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-accent-muted)] px-4 py-3 transition",
        C && "border-[var(--rui-accent-border)] bg-[var(--rui-accent-muted)]",
        m ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:border-[var(--rui-accent-border-soft)]",
        g
      ),
      children: [
        /* @__PURE__ */ e("div", { className: l("min-w-0 flex-1", N), children: /* @__PURE__ */ c("div", { className: "flex items-start gap-3", children: [
          a ? /* @__PURE__ */ e("div", { className: "mt-0.5 flex-shrink-0 text-[var(--rui-text-secondary)]", children: a }) : null,
          /* @__PURE__ */ c("div", { className: "min-w-0", children: [
            d ? /* @__PURE__ */ e("div", { className: l("text-sm font-medium text-[var(--rui-text-primary)]", I), children: d }) : null,
            s ? /* @__PURE__ */ e("div", { className: l("mt-1 text-xs text-[var(--rui-text-secondary)]", p), children: s }) : null,
            o ? /* @__PURE__ */ e("div", { className: l("mt-2 text-xs text-[var(--rui-text-tertiary)]", k), children: o }) : null
          ] })
        ] }) }),
        /* @__PURE__ */ c("div", { className: "flex flex-shrink-0 items-center gap-3", children: [
          u,
          /* @__PURE__ */ e(Jr, { checked: C, onCheckedChange: T, disabled: m, "aria-label": typeof d == "string" ? d : void 0 })
        ] })
      ]
    }
  );
}
function Vt(t, r, i) {
  return Math.min(i, Math.max(r, t));
}
function Bn({
  content: t,
  children: r,
  placement: i = "top",
  delay: d = 120,
  open: s,
  defaultOpen: o = !1,
  onOpenChange: a,
  accentKey: u,
  className: m,
  panelClassName: f
}) {
  const [w, g] = Ge({
    value: s,
    defaultValue: o,
    onChange: a
  }), [N, I] = he(!1), [p, k] = he({ top: 0, left: 0, placement: i }), C = ve(null), T = ve(null), L = ve(null), U = pe(u);
  ae(() => I(!0), []);
  const z = ne(
    () => () => {
      if (typeof window > "u") return;
      const X = C.current, Z = T.current;
      if (!X || !Z) return;
      const A = X.getBoundingClientRect(), O = Z.getBoundingClientRect(), _ = 10, E = 12, ee = window.innerWidth, G = window.innerHeight, D = i;
      let P = D;
      D === "top" && A.top - O.height - _ < E && (P = "bottom"), D === "bottom" && A.bottom + O.height + _ > G - E && (P = "top"), D === "left" && A.left - O.width - _ < E && (P = "right"), D === "right" && A.right + O.width + _ > ee - E && (P = "left");
      let te = A.top, H = A.left;
      P === "top" && (te = A.top - O.height - _), P === "bottom" && (te = A.bottom + _), P === "left" && (H = A.left - O.width - _), P === "right" && (H = A.right + _), (P === "top" || P === "bottom") && (H = A.left + A.width / 2 - O.width / 2), (P === "left" || P === "right") && (te = A.top + A.height / 2 - O.height / 2), k({
        placement: P,
        top: Vt(te, E, G - O.height - E),
        left: Vt(H, E, ee - O.width - E)
      });
    },
    [i]
  );
  ae(() => {
    if (!w) {
      L.current && window.clearTimeout(L.current), L.current = null;
      return;
    }
    const X = window.setTimeout(z, 0), Z = () => z();
    return window.addEventListener("resize", Z), window.addEventListener("scroll", Z, !0), () => {
      window.clearTimeout(X), window.removeEventListener("resize", Z), window.removeEventListener("scroll", Z, !0);
    };
  }, [w, z]);
  const q = () => {
    if (typeof window < "u" && L.current && window.clearTimeout(L.current), d > 0) {
      L.current = window.setTimeout(() => g(!0), d);
      return;
    }
    g(!0);
  }, $ = () => {
    typeof window < "u" && L.current && window.clearTimeout(L.current), L.current = null, g(!1);
  };
  return /* @__PURE__ */ c("span", { ref: C, className: l("inline-flex", m), onMouseEnter: q, onMouseLeave: $, onFocus: q, onBlur: $, children: [
    r,
    N && w && typeof document < "u" ? bt(
      /* @__PURE__ */ e(
        "div",
        {
          ref: T,
          role: "tooltip",
          style: { ...U, position: "fixed", top: p.top, left: p.left },
          className: l(
            "z-[140] max-w-[360px] rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[rgba(14,20,35,0.98)] px-3 py-2 text-left text-sm text-white shadow-[0_18px_44px_rgba(0,0,0,0.38)] backdrop-blur",
            f
          ),
          children: t
        }
      ),
      document.body
    ) : null
  ] });
}
export {
  fn as AccentProvider,
  er as Badge,
  er as BadgeDefault,
  hn as Banner,
  hn as BannerDefault,
  ge as Button,
  ge as ButtonDefault,
  mn as Card,
  mn as CardDefault,
  bn as ChipCard,
  bn as ChipCardDefault,
  $t as DateTimeSelector,
  $t as DateTimeSelectorDefault,
  Rr as DynamicPanel,
  xn as GridLayout,
  xn as GridLayoutDefault,
  Be as Icon,
  pn as Logger,
  pn as LoggerDefault,
  vn as Notification,
  Zr as NotificationViewport,
  Zr as NotificationViewportDefault,
  Mn as Number,
  Mn as NumberInput,
  Mn as NumberInputDefault,
  gn as Page,
  wn as PageContainer,
  Gr as PageHeader,
  Nn as RadioCard,
  Nn as RadioCardDefault,
  zt as SelectBox,
  zt as SelectBoxDefault,
  yn as Sidebar,
  yn as SidebarDefault,
  Jr as Switch,
  Jr as SwitchDefault,
  Sn as Table,
  Sn as TableDefault,
  Ur as Text,
  kn as TextArea,
  kn as TextAreaDefault,
  Ur as TextDefault,
  Cn as ToggleCard,
  Cn as ToggleCardDefault,
  Bn as Tooltip,
  Bn as TooltipDefault,
  Kt as accentTokensToCssVars,
  Ut as defaultAccentKey,
  Qt as defaultAccentPresets,
  Xt as defaultAccentTokens,
  vr as useAccent,
  pe as useAccentStyle
};
//# sourceMappingURL=index.js.map
