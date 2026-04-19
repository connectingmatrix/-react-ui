import { jsx as e, jsxs as s, Fragment as Vt } from "react/jsx-runtime";
import Zt, { createContext as hr, useContext as mr, useMemo as q, forwardRef as Ve, isValidElement as br, useState as fe, useRef as xe, useEffect as ne, useCallback as Ce, useId as at } from "react";
import { createPortal as mt } from "react-dom";
function c(...t) {
  return t.filter(Boolean).join(" ");
}
const Gt = "default", Jt = {
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
}, xr = {
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
}, Ut = hr(null);
function Xt(t, r, i) {
  return {
    ...Jt,
    ...xr[t] || {},
    ...(r == null ? void 0 : r[t]) || {},
    ...i || {}
  };
}
function Qt(t) {
  const r = { ...Jt, ...t };
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
function gr(t, r) {
  const i = mr(Ut), o = !!(i || t || r), a = (i == null ? void 0 : i.accentKey) ?? t ?? Gt, d = q(
    () => Xt(a, i == null ? void 0 : i.accents, i != null && i.tokens ? { ...i.tokens, ...r } : r),
    [i == null ? void 0 : i.accents, i == null ? void 0 : i.tokens, a, r]
  ), l = q(() => o ? Qt(d) : void 0, [o, d]);
  return { accentKey: a, tokens: d, style: l };
}
function he(t, r, i) {
  const o = gr(t, i);
  return q(() => o.style ? { ...o.style, ...r } : r, [o.style, r]);
}
function on({ accentKey: t = Gt, accents: r, tokens: i, children: o, className: a, style: d }) {
  const l = q(() => ({ accentKey: t, accents: r, tokens: i }), [t, r, i]), u = q(() => ({ ...Qt(Xt(t, r, i)), ...d }), [t, r, d, i]);
  return /* @__PURE__ */ e(Ut.Provider, { value: l, children: /* @__PURE__ */ e("div", { className: c("rui-theme", a), style: u, children: o }) });
}
const pr = {
  neutral: "border-[var(--rui-border-soft)] bg-white/[0.06] text-[var(--rui-text-secondary)]",
  accent: "border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] text-[var(--rui-accent)]",
  success: "border-[var(--rui-success-border)] bg-[var(--rui-success-soft)] text-[var(--rui-success)]",
  warning: "border-[var(--rui-warning-border)] bg-[var(--rui-warning-soft)] text-[var(--rui-warning)]",
  danger: "border-[var(--rui-danger-border)] bg-[var(--rui-danger-soft)] text-[var(--rui-danger)]",
  info: "border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] text-white"
};
function Yt({ children: t, tone: r = "accent", className: i, accentKey: o, style: a, ...d }) {
  const l = he(o, a);
  return /* @__PURE__ */ e(
    "span",
    {
      style: l,
      className: c("inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium leading-5", pr[r], i),
      ...d,
      children: t
    }
  );
}
const vr = {
  info: { bg: "rgba(52,212,232,0.10)", border: "rgba(52,212,232,0.25)", text: "white" },
  accent: { bg: "rgba(52,212,232,0.10)", border: "rgba(52,212,232,0.25)", text: "white" },
  success: { bg: "rgba(25,211,168,0.10)", border: "rgba(25,211,168,0.22)", text: "white" },
  warning: { bg: "rgba(240,180,79,0.10)", border: "rgba(240,180,79,0.22)", text: "white" },
  danger: { bg: "rgba(235,106,118,0.10)", border: "rgba(235,106,118,0.22)", text: "white" },
  neutral: { bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.10)", text: "white" }
};
function un({
  tone: t = "info",
  title: r,
  children: i,
  actions: o,
  icon: a,
  className: d,
  contentClassName: l,
  titleClassName: u,
  actionsClassName: b,
  accentClassName: f,
  accentKey: v,
  accentColor: w,
  backgroundColor: N,
  borderColor: B,
  textColor: m,
  showToneBadge: S = !1
}) {
  const M = vr[t], L = {
    borderColor: B ?? M.border,
    background: N ?? M.bg,
    color: m ?? M.text,
    boxShadow: "0 16px 36px rgba(4, 8, 26, 0.22)",
    "--rui-banner-accent": w ?? B ?? M.border
  }, j = he(v, L);
  return /* @__PURE__ */ s("section", { className: c("relative overflow-hidden rounded-[var(--rui-radius-panel)] border px-4 py-3", w && "pl-5", d), style: j, children: [
    w ? /* @__PURE__ */ e("div", { "aria-hidden": "true", className: c("absolute inset-y-0 left-0 w-1 bg-[var(--rui-banner-accent)]", f) }) : null,
    /* @__PURE__ */ s("div", { className: c("flex items-start gap-3", l), children: [
      a ? /* @__PURE__ */ e("div", { className: "mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-inherit", children: a }) : null,
      /* @__PURE__ */ s("div", { className: "min-w-0 flex-1", children: [
        r ? /* @__PURE__ */ s("div", { className: c("mb-1 flex items-center gap-2 text-sm font-semibold", u), children: [
          r,
          S ? /* @__PURE__ */ e(Yt, { tone: t === "neutral" ? "neutral" : t === "accent" ? "accent" : t, children: t }) : null
        ] }) : null,
        /* @__PURE__ */ e("div", { className: "text-sm leading-6 opacity-90", children: i })
      ] }),
      o ? /* @__PURE__ */ e("div", { className: c("flex flex-shrink-0 items-center gap-2", b), children: o }) : null
    ] })
  ] });
}
const wr = {
  primary: "border border-[var(--rui-accent)] bg-[var(--rui-accent)] text-white hover:brightness-110 focus-visible:ring-[var(--rui-accent)]",
  secondary: "border border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] text-white hover:brightness-110 focus-visible:ring-[var(--rui-accent)]",
  outline: "border border-[var(--rui-accent)] bg-transparent text-white hover:bg-white/5 focus-visible:ring-[var(--rui-accent)]",
  ghost: "border border-white/10 bg-transparent text-[var(--rui-text-secondary)] hover:bg-white/5 hover:text-white focus-visible:ring-white/30",
  danger: "border border-[var(--rui-danger-border)] bg-[var(--rui-danger-soft)] text-white hover:bg-[var(--rui-danger-soft)] focus-visible:ring-[var(--rui-danger)]",
  success: "border border-[var(--rui-success-border)] bg-[var(--rui-success-soft)] text-white hover:bg-[var(--rui-success-soft)] focus-visible:ring-[var(--rui-success)]",
  warning: "border border-[var(--rui-warning-border)] bg-[var(--rui-warning-soft)] text-white hover:bg-[var(--rui-warning-soft)] focus-visible:ring-[var(--rui-warning)]",
  subtle: "border border-white/10 bg-white/5 text-white hover:bg-white/10 focus-visible:ring-[var(--rui-accent)]",
  icon: "border border-white/10 bg-transparent text-[var(--rui-text-secondary)] hover:bg-white/5 hover:text-white focus-visible:ring-white/30"
}, yr = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-sm"
};
function Nr() {
  return /* @__PURE__ */ s("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", className: "h-4 w-4 animate-spin", children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9", fill: "none", stroke: "currentColor", strokeWidth: "2", opacity: "0.18" }),
    /* @__PURE__ */ e("path", { d: "M21 12a9 9 0 0 0-9-9", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
  ] });
}
const we = Ve(function({
  className: r,
  children: i,
  variant: o = "outline",
  size: a = "md",
  leftIcon: d,
  rightIcon: l,
  leftIconClassName: u,
  rightIconClassName: b,
  accentKey: f,
  loading: v = !1,
  fullWidth: w = !1,
  type: N = "button",
  disabled: B,
  style: m,
  ...S
}, M) {
  const L = B || v, j = he(f, m), G = i != null && i !== !1, z = G && !d && !l && br(i);
  return /* @__PURE__ */ s(
    "button",
    {
      ref: M,
      type: N,
      disabled: L,
      "aria-busy": v || void 0,
      style: j,
      className: c(
        "inline-flex items-center justify-center gap-2 rounded-[8px] font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:border-white/5 disabled:bg-white/5 disabled:text-white/35 disabled:opacity-80",
        wr[o],
        yr[a],
        w && "w-full",
        r
      ),
      ...S,
      children: [
        v ? /* @__PURE__ */ e(Nr, {}) : d ? /* @__PURE__ */ e("span", { className: c("inline-flex shrink-0 items-center", u), children: d }) : null,
        G ? /* @__PURE__ */ e("span", { className: c("inline-flex items-center justify-center", z ? "shrink-0" : "min-w-0 truncate"), children: i }) : null,
        l ? /* @__PURE__ */ e("span", { className: c("inline-flex shrink-0 items-center", b), children: l }) : null
      ]
    }
  );
}), Wt = {
  none: "",
  sm: "p-3",
  md: "p-5",
  lg: "p-6"
};
function Sr(t) {
  return t === !1 || t === "none" ? "" : t === !0 ? Wt.md : Wt[t];
}
const fn = Ve(function({ children: r, className: i, contentClassName: o, padded: a = !0, interactive: d = !1, accentKey: l, style: u, ...b }, f) {
  const v = he(l, u);
  return /* @__PURE__ */ e(
    "div",
    {
      ref: f,
      style: v,
      className: c(
        "rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-panel)] text-[var(--rui-text-primary)] shadow-panel",
        d && "transition hover:border-[var(--rui-accent-border-soft)] hover:bg-[var(--rui-bg-panel-2)]",
        Sr(a),
        i
      ),
      ...b,
      children: o ? /* @__PURE__ */ e("div", { className: o, children: r }) : r
    }
  );
}), _t = {
  neutral: "border-[var(--rui-border-soft)] bg-[linear-gradient(180deg,var(--rui-bg-surface-2),var(--rui-bg-card))]",
  accent: "border-[var(--rui-accent-border-soft)] bg-[linear-gradient(180deg,var(--rui-accent-muted),var(--rui-bg-card))]",
  success: "border-[var(--rui-success-border)] bg-[linear-gradient(180deg,var(--rui-success-soft),var(--rui-bg-card))]",
  warning: "border-[var(--rui-warning-border)] bg-[linear-gradient(180deg,var(--rui-warning-soft),var(--rui-bg-card))]",
  danger: "border-[var(--rui-danger-border)] bg-[linear-gradient(180deg,var(--rui-danger-soft),var(--rui-bg-card))]"
};
function hn({
  title: t,
  value: r,
  helper: i,
  leading: o,
  trailing: a,
  tone: d = "accent",
  selected: l = !1,
  disabled: u = !1,
  onClick: b,
  accentKey: f,
  style: v,
  className: w,
  contentClassName: N,
  titleClassName: B,
  valueClassName: m,
  helperClassName: S
}) {
  const M = !!b, L = he(f, v);
  return M ? /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: b,
      disabled: u,
      "aria-pressed": l,
      style: L,
      className: c(
        "rounded-[var(--rui-radius-panel)] border p-4 text-left outline-none transition",
        _t[d],
        l && "border-[var(--rui-accent-border)] shadow-[0_0_0_1px_var(--rui-accent-muted)]",
        !u && "cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.36)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0",
        u && "cursor-not-allowed opacity-60",
        w
      ),
      children: /* @__PURE__ */ s("div", { className: c("flex h-full min-h-[104px] flex-col justify-between gap-3", N), children: [
        /* @__PURE__ */ s("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ s("div", { className: "min-w-0", children: [
            t ? /* @__PURE__ */ e("div", { className: c("text-xs uppercase tracking-[0.18em] text-[var(--rui-text-tertiary)]", B), children: t }) : null,
            r ? /* @__PURE__ */ e("div", { className: c("mt-2 text-2xl font-semibold text-white", m), children: r }) : null
          ] }),
          a ? /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: a }) : null
        ] }),
        /* @__PURE__ */ s("div", { className: "flex items-end justify-between gap-3", children: [
          i ? /* @__PURE__ */ e("div", { className: c("text-sm text-[var(--rui-text-secondary)]", S), children: i }) : /* @__PURE__ */ e("span", {}),
          o ? /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-[var(--rui-text-secondary)]", children: o }) : null
        ] })
      ] })
    }
  ) : /* @__PURE__ */ e(
    "div",
    {
      style: L,
      className: c(
        "rounded-[var(--rui-radius-panel)] border p-4 text-left outline-none transition",
        _t[d],
        l && "border-[var(--rui-accent-border)] shadow-[0_0_0_1px_var(--rui-accent-muted)]",
        w
      ),
      children: /* @__PURE__ */ s("div", { className: c("flex h-full min-h-[104px] flex-col justify-between gap-3", N), children: [
        /* @__PURE__ */ s("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ s("div", { className: "min-w-0", children: [
            t ? /* @__PURE__ */ e("div", { className: c("text-xs uppercase tracking-[0.18em] text-[var(--rui-text-tertiary)]", B), children: t }) : null,
            r ? /* @__PURE__ */ e("div", { className: c("mt-2 text-2xl font-semibold text-white", m), children: r }) : null
          ] }),
          a ? /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: a }) : null
        ] }),
        /* @__PURE__ */ s("div", { className: "flex items-end justify-between gap-3", children: [
          i ? /* @__PURE__ */ e("div", { className: c("text-sm text-[var(--rui-text-secondary)]", S), children: i }) : /* @__PURE__ */ e("span", {}),
          o ? /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-[var(--rui-text-secondary)]", children: o }) : null
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
function I({ className: t, title: r, children: i, viewBox: o = "0 0 24 24", ...a }) {
  return /* @__PURE__ */ s("svg", { viewBox: o, className: c("h-5 w-5 shrink-0", t), "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ...a, children: [
    r ? /* @__PURE__ */ e("title", { children: r }) : null,
    i
  ] });
}
function De({ name: t, ...r }) {
  switch (t) {
    case "actions":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M5 7h14M8 12h11M11 17h8" }) });
    case "alert":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("path", { ...g, d: "M12 4.7 20 18H4z" }),
        /* @__PURE__ */ e("path", { ...g, d: "M12 9v4M12 15.5h.01" })
      ] });
    case "bars":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M6 18V9M12 18V5M18 18v-7" }) });
    case "bell":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M8 18h8M7 16h10l-1-2v-3.5A4 4 0 0 0 12 6a4 4 0 0 0-4 4.5V14Z" }) });
    case "card":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("rect", { x: "4", y: "6.5", width: "16", height: "11", rx: "2.5", ...g }),
        /* @__PURE__ */ e("path", { ...g, d: "M4 10h16" })
      ] });
    case "chart":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M6 18V9M12 18V6M18 18v-8M4.5 19.5h15" }) });
    case "check":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "3", ...g }),
        /* @__PURE__ */ e("path", { ...g, d: "m8.5 12 2.3 2.3 4.7-5.3" })
      ] });
    case "chevron-down":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "m6 9 6 6 6-6" }) });
    case "chevron-right":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "m10 6 6 6-6 6" }) });
    case "close":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "m6 6 12 12M18 6 6 18" }) });
    case "coins":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("ellipse", { cx: "12", cy: "7", rx: "5", ry: "2.6", ...g }),
        /* @__PURE__ */ e("path", { ...g, d: "M7 7v5c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6V7" }),
        /* @__PURE__ */ e("path", { ...g, d: "M7 12v5c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6v-5" })
      ] });
    case "discord":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("path", { ...g, d: "M8 8c2.5-1.4 5.5-1.4 8 0" }),
        /* @__PURE__ */ e("path", { ...g, d: "M8 8c-1.2 1.9-1.8 4-2 6 2 .9 4 1.3 6 1.4 2-.1 4-.5 6-1.4-.2-2-1-4.1-2-6" }),
        /* @__PURE__ */ e("circle", { cx: "10", cy: "12.4", r: "1.1", fill: "currentColor" }),
        /* @__PURE__ */ e("circle", { cx: "14", cy: "12.4", r: "1.1", fill: "currentColor" }),
        /* @__PURE__ */ e("path", { ...g, d: "M10 15c1.2.7 2.8.7 4 0" })
      ] });
    case "dollar":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M12 4v16M15.5 7.5C14.8 6.5 13.5 6 12 6c-2 0-3.5 1-3.5 2.5S9.8 11 12 11s3.5 1 3.5 2.5S14 16 12 16c-1.5 0-2.8-.5-3.7-1.6" }) });
    case "download":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M12 5v10M8 11l4 4 4-4M5 19h14" }) });
    case "exclamation":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "8.1", ...g }),
        /* @__PURE__ */ e("path", { ...g, d: "M12 7.8v6.1M12 16.7h.01" })
      ] });
    case "eye":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("path", { ...g, d: "M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" }),
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "2.6", fill: "none", stroke: "currentColor", strokeWidth: "1.8" })
      ] });
    case "filter":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M5 6h14l-5.5 6.2v5.3l-3-1.6v-3.7Z" }) });
    case "folder":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("path", { ...g, d: "M3.5 7.5h6l1.5 2h9v7.5a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2Z" }),
        /* @__PURE__ */ e("path", { ...g, d: "M3.5 10.5h17" })
      ] });
    case "grid":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z" }) });
    case "info":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "8.4", ...g }),
        /* @__PURE__ */ e("path", { ...g, d: "M12 10v5M12 8h.01" })
      ] });
    case "live":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "2.2", fill: "currentColor" }),
        /* @__PURE__ */ e("path", { ...g, d: "M6.5 12a5.5 5.5 0 0 1 11 0M4 12a8 8 0 0 1 16 0" })
      ] });
    case "maximize":
    case "maximize-screen":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M8 4H4v4M16 4h4v4M4 16v4h4M20 16v4h-4" }) });
    case "menu":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M4 7h16M4 12h16M4 17h16" }) });
    case "minimize":
    case "minimize-screen":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M9 4H4v5M15 4h5v5M4 15v5h5M20 15v5h-5" }) });
    case "minus":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M5 12h14" }) });
    case "moon":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M19 14.5A7.5 7.5 0 1 1 9.5 5a6.3 6.3 0 0 0 9.5 9.5Z" }) });
    case "panel":
    case "panel-restore":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("rect", { x: "6", y: "6", width: "12", height: "12", rx: "1.8", ...g }) });
    case "pause":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M8.5 6.5v11M15.5 6.5v11" }) });
    case "play":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M8 6.5v11l8-5.5-8-5.5Z" }) });
    case "plus":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M12 5v14M5 12h14" }) });
    case "refresh":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M18 8V4l-3 3m3 0a6.5 6.5 0 1 0 1.2 7.5" }) });
    case "save":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("path", { ...g, d: "M5 5h11l3 3v11H5Z" }),
        /* @__PURE__ */ e("path", { ...g, d: "M8 5v5h8" }),
        /* @__PURE__ */ e("path", { ...g, d: "M9 18h6" })
      ] });
    case "search":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "6", ...g }),
        /* @__PURE__ */ e("path", { ...g, d: "m16 16 4 4" })
      ] });
    case "settings":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "2.6", ...g }),
        /* @__PURE__ */ e("path", { ...g, d: "M12 4.8v1.8M12 17.4v1.8M19.2 12h-1.8M6.6 12H4.8M17.1 6.9l-1.3 1.3M8.2 15.8l-1.3 1.3M17.1 17.1l-1.3-1.3M8.2 8.2 6.9 6.9" })
      ] });
    case "share":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M8 12a4 4 0 0 1 8 0M7 7l5 5-5 5M17 7l-5 5 5 5" }) });
    case "sidebar-collapsed":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("rect", { x: "4", y: "5", width: "16", height: "14", rx: "2", ...g }),
        /* @__PURE__ */ e("path", { ...g, d: "M15 5v14" })
      ] });
    case "sidebar-open":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("rect", { x: "4", y: "5", width: "16", height: "14", rx: "2", ...g }),
        /* @__PURE__ */ e("path", { ...g, d: "M9 5v14" })
      ] });
    case "sparkle":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "m12 4 1.8 4.2L18 10l-4.2 1.8L12 16l-1.8-4.2L6 10l4.2-1.8Z" }) });
    case "stop":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("rect", { x: "7", y: "7", width: "10", height: "10", rx: "2", ...g }) });
    case "store":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("path", { ...g, d: "M4 9h16l-1 3a3 3 0 0 1-3 2H8a3 3 0 0 1-3-2Z" }),
        /* @__PURE__ */ e("path", { ...g, d: "M6 14v5h12v-5" })
      ] });
    case "support":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("path", { ...g, d: "M5 13v-1a7 7 0 0 1 14 0v1" }),
        /* @__PURE__ */ e("path", { ...g, d: "M5 12.5v3a2 2 0 0 0 2 2h2v-5H7a2 2 0 0 0-2 2ZM19 12.5v3a2 2 0 0 1-2 2h-2v-5h2a2 2 0 0 1 2 2Z" })
      ] });
    case "swap":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M7 8h10m0 0-3-3m3 3-3 3M17 16H7m0 0 3-3m-3 3 3 3" }) });
    case "timer":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "6.5", ...g }),
        /* @__PURE__ */ e("path", { ...g, d: "M12 9v4l2.5 2.5M9 4h6" })
      ] });
    case "trash":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e(
        "path",
        {
          ...g,
          d: "M5.5 7.5h13M9.5 7.5V5.8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.7M8.5 10.5v6M12 10.5v6M15.5 10.5v6M7 7.5l.7 10.2a1.5 1.5 0 0 0 1.5 1.3h5.6a1.5 1.5 0 0 0 1.5-1.3L17 7.5"
        }
      ) });
    case "trenddown":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "M5 8l6 6 3-3 5 5M19 16v-5h-5" }) });
    case "trendup":
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("path", { ...g, d: "m5 16 6-6 3 3 5-5M19 8v5h-5" }) });
    case "user":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("path", { ...g, d: "M12 12a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6Z" }),
        /* @__PURE__ */ e("path", { ...g, d: "M6 19c1.5-2.7 4-4 6-4s4.5 1.3 6 4" })
      ] });
    case "wallet":
      return /* @__PURE__ */ s(I, { ...r, children: [
        /* @__PURE__ */ e("path", { ...g, d: "M4.5 7h13a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 2 16.5V9.5A2.5 2.5 0 0 1 4.5 7Z" }),
        /* @__PURE__ */ e("path", { ...g, d: "M15 12h4" }),
        /* @__PURE__ */ e("circle", { cx: "15.8", cy: "12", r: "0.7", fill: "currentColor" })
      ] });
    default:
      return /* @__PURE__ */ e(I, { ...r, children: /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "7", ...g }) });
  }
}
const kr = {
  third: "xl:col-span-4",
  half: "xl:col-span-6",
  full: "xl:col-span-12"
};
function qt(t) {
  return t.map((r, i) => ({
    id: r.id,
    order: i,
    width: r.defaultWidth || "full",
    collapsed: !1,
    fullscreen: !1
  }));
}
function ht(t, r) {
  const i = qt(t);
  if (!(r != null && r.length)) return i;
  const o = new Map(r.map((a) => [a.id, a]));
  return t.map((a, d) => {
    const l = o.get(a.id);
    return {
      id: a.id,
      order: (l == null ? void 0 : l.order) ?? d,
      width: (l == null ? void 0 : l.width) ?? a.defaultWidth ?? "full",
      collapsed: !!(l != null && l.collapsed),
      fullscreen: !!(l != null && l.fullscreen)
    };
  }).sort((a, d) => a.order - d.order).map((a, d) => ({ ...a, order: d }));
}
function Kt(t, r = "rui:layout") {
  return `${r}:${t}`;
}
function Mr(t, r) {
  if (typeof window > "u") return null;
  try {
    const i = window.localStorage.getItem(Kt(t, r));
    return i ? JSON.parse(i) : null;
  } catch {
    return null;
  }
}
function Cr(t, r, i) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(Kt(t, i), JSON.stringify(r));
    } catch {
    }
}
function Ir({
  panel: t,
  state: r,
  allowMovement: i = !0,
  allowResize: o = !0,
  allowCollapse: a = !0,
  allowFullscreen: d = !0,
  onToggleCollapse: l,
  onToggleFullscreen: u,
  onReset: b,
  onCycleWidth: f,
  onDragStart: v,
  onDragOver: w,
  onDragEnter: N,
  onDrop: B,
  onDragEnd: m,
  renderActions: S,
  renderHeader: M,
  renderPanelControls: L,
  renderMoveHandle: j,
  renderResizeButton: G,
  renderCollapseButton: z,
  renderResetButton: K,
  renderFullscreenButton: F,
  accentKey: J,
  style: O,
  className: A,
  headerClassName: P,
  bodyClassName: W,
  actionsClassName: T
}) {
  const ee = !!r.collapsed, U = !!r.fullscreen, X = t.description ?? t.subtitle, _ = t.actions ?? t.action, te = t.content ?? t.children, H = he(J, O), je = {
    type: "button",
    draggable: !U,
    onDragStart: v,
    onDragEnd: m,
    className: "cursor-grab rounded border border-white/10 p-1 text-white/55 hover:bg-white/5 hover:text-white active:cursor-grabbing",
    title: "Drag handle"
  }, R = i ? (j == null ? void 0 : j({
    panel: t,
    state: r,
    buttonProps: je,
    defaultButton: /* @__PURE__ */ e("button", { ...je, children: /* @__PURE__ */ e(De, { name: "actions", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ e("button", { ...je, children: /* @__PURE__ */ e(De, { name: "actions", className: "h-4 w-4" }) }) : null, V = { title: "Cycle width", onClick: f }, ce = o ? (G == null ? void 0 : G({
    panel: t,
    state: r,
    buttonProps: V,
    defaultButton: /* @__PURE__ */ e(we, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...V, children: /* @__PURE__ */ e(De, { name: "grid", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ e(we, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...V, children: /* @__PURE__ */ e(De, { name: "grid", className: "h-4 w-4" }) }) : null, me = { title: ee ? "Restore panel" : "Minimize panel", onClick: l }, Me = a ? (z == null ? void 0 : z({
    panel: t,
    state: r,
    buttonProps: me,
    defaultButton: /* @__PURE__ */ e(we, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...me, children: /* @__PURE__ */ e(De, { name: ee ? "panel" : "minus", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ e(we, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...me, children: /* @__PURE__ */ e(De, { name: ee ? "panel" : "minus", className: "h-4 w-4" }) }) : null, ye = { title: "Restore default size", onClick: b }, be = o ? (K == null ? void 0 : K({
    panel: t,
    state: r,
    buttonProps: ye,
    defaultButton: /* @__PURE__ */ e(we, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...ye, children: /* @__PURE__ */ e(De, { name: "refresh", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ e(we, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...ye, children: /* @__PURE__ */ e(De, { name: "refresh", className: "h-4 w-4" }) }) : null, Z = { title: U ? "Exit fullscreen" : "Fullscreen", onClick: u }, Re = d ? (F == null ? void 0 : F({
    panel: t,
    state: r,
    buttonProps: Z,
    defaultButton: /* @__PURE__ */ e(we, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...Z, children: /* @__PURE__ */ e(De, { name: U ? "minimize" : "maximize", className: "h-4 w-4" }) })
  })) ?? /* @__PURE__ */ e(we, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", ...Z, children: /* @__PURE__ */ e(De, { name: U ? "minimize" : "maximize", className: "h-4 w-4" }) }) : null, Se = /* @__PURE__ */ s(Vt, { children: [
    _ ? /* @__PURE__ */ e("div", { className: "hidden lg:block", children: _ }) : null,
    S == null ? void 0 : S(t, r),
    ce,
    Me,
    be,
    Re
  ] }), Ie = (L == null ? void 0 : L({ panel: t, state: r, controls: Se })) ?? Se;
  return /* @__PURE__ */ e(
    "div",
    {
      onDragOver: w,
      onDragEnter: N,
      onDrop: B,
      className: c("min-w-0 w-full", !U && "col-span-12", !U && kr[r.width || "full"], U && "fixed inset-4 z-50", A),
      style: H,
      children: /* @__PURE__ */ s("section", { className: c("min-h-full w-full overflow-hidden rounded-panel rui-panel", t.className, U && "h-[calc(100vh-2rem)]"), children: [
        M ? M(t, r) : /* @__PURE__ */ s(
          "div",
          {
            className: c(
              "flex flex-col gap-3 border-b border-white/8 bg-black/10 px-3 py-3 sm:flex-row sm:items-start sm:justify-between sm:px-4 sm:py-4",
              t.headerClassName,
              P
            ),
            children: [
              /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                R,
                /* @__PURE__ */ s("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ e("div", { className: "truncate text-base font-semibold text-white", children: t.title }),
                  X ? /* @__PURE__ */ e("div", { className: "mt-1 text-sm text-white/60", children: X }) : null
                ] })
              ] }) }),
              /* @__PURE__ */ e("div", { className: c("flex flex-wrap items-center gap-2 sm:shrink-0 sm:justify-end", T), children: Ie })
            ]
          }
        ),
        ee ? null : /* @__PURE__ */ e("div", { className: c("min-h-0 p-3 sm:p-5", t.bodyClassName, W, U && "h-[calc(100%-76px)] overflow-auto rui-scrollbar"), children: te })
      ] })
    }
  );
}
function mn({
  panels: t,
  layout: r,
  defaultLayout: i,
  onLayoutChange: o,
  persistenceKey: a,
  storageNamespace: d,
  persistenceAdapter: l,
  allowMovement: u = !0,
  allowResize: b = !0,
  allowCollapse: f = !0,
  allowFullscreen: v = !0,
  renderPanelActions: w,
  renderHeader: N,
  renderPanelControls: B,
  renderMoveHandle: m,
  renderResizeButton: S,
  renderCollapseButton: M,
  renderResetButton: L,
  renderFullscreenButton: j,
  accentKey: G,
  style: z,
  className: K,
  panelClassName: F,
  panelHeaderClassName: J,
  panelBodyClassName: O,
  panelActionsClassName: A
}) {
  const [P, W] = fe(
    () => ht(t, i || (a ? Mr(a, d) : null))
  ), T = xe(null), [ee, U] = fe(null), [X, _] = fe(() => !a || !l), te = r !== void 0, H = q(() => ht(t, te ? r : P), [te, P, r, t]), je = q(() => new Map(t.map((C) => [C.id, C])), [t]), R = he(G, z), V = xe(t), ce = xe(H), me = xe(te), Me = xe(o);
  ne(() => {
    V.current = t;
  }, [t]), ne(() => {
    ce.current = H;
  }, [H]), ne(() => {
    me.current = te;
  }, [te]), ne(() => {
    Me.current = o;
  }, [o]);
  const ye = Ce((C) => {
    var Y;
    const re = typeof C == "function" ? C(ce.current) : C, k = ht(V.current, re);
    me.current || W(k), (Y = Me.current) == null || Y.call(Me, k);
  }, []);
  ne(() => {
    let C = !1;
    if (!a || !l) {
      _(!0);
      return;
    }
    return _(!1), Promise.resolve(l.load(a)).then((re) => {
      C || (re && ye(re), _(!0));
    }).catch(() => {
      C || _(!1);
    }), () => {
      C = !0;
    };
  }, [l, a, ye]), ne(() => {
    a && (l && !X || (Cr(a, H, d), l && Promise.resolve(l.save(a, H)).catch(() => {
    })));
  }, [X, H, l, a, d]);
  const be = (C) => {
    const re = qt(t).find((k) => k.id === C);
    re && ye((k) => k.map((Y) => Y.id === C ? { ...re, order: Y.order } : Y));
  }, Z = (C) => {
    ye(
      (re) => re.map((k) => {
        if (k.id !== C) return k;
        const Y = k.width === "third" ? "half" : k.width === "half" ? "full" : "third";
        return { ...k, width: Y, collapsed: !1 };
      })
    );
  }, Re = (C) => {
    ye((re) => re.map((k) => k.id === C ? { ...k, collapsed: !k.collapsed, fullscreen: k.collapsed ? k.fullscreen : !1 } : k));
  }, Se = (C) => {
    ye((re) => re.map((k) => ({ ...k, collapsed: k.id === C ? !1 : k.collapsed, fullscreen: k.id === C ? !k.fullscreen : !1 })));
  }, Ie = (C, re) => {
    !u || !C || C === re || ye((k) => {
      const Y = ht(t, k), ge = Y.findIndex((ae) => ae.id === C), ke = Y.findIndex((ae) => ae.id === re);
      if (ge < 0 || ke < 0) return k;
      const [oe] = Y.splice(ge, 1);
      return Y.splice(ke, 0, oe), Y.map((ae, ue) => ({ ...ae, order: ue }));
    });
  }, Ae = H.find((C) => C.fullscreen), _e = (C) => {
    const re = je.get(C.id);
    return re ? /* @__PURE__ */ e(
      Ir,
      {
        panel: re,
        state: C,
        allowMovement: u,
        allowResize: b,
        allowCollapse: f,
        allowFullscreen: v,
        className: F,
        headerClassName: J,
        bodyClassName: O,
        actionsClassName: A,
        renderActions: w,
        renderHeader: N,
        renderPanelControls: B,
        renderMoveHandle: m,
        renderResizeButton: S,
        renderCollapseButton: M,
        renderResetButton: L,
        renderFullscreenButton: j,
        accentKey: G,
        onToggleCollapse: () => Re(C.id),
        onToggleFullscreen: () => Se(C.id),
        onReset: () => be(C.id),
        onCycleWidth: () => Z(C.id),
        onDragStart: (k) => {
          u && (T.current = C.id, U(C.id), k.dataTransfer.effectAllowed = "move", k.dataTransfer.setData("text/plain", C.id), k.dataTransfer.setData("application/x-rui-panel-id", C.id));
        },
        onDragOver: (k) => {
          T.current && (k.preventDefault(), k.dataTransfer.dropEffect = "move");
        },
        onDragEnter: (k) => {
          T.current && k.preventDefault();
        },
        onDrop: (k) => {
          k.preventDefault();
          const Y = k.dataTransfer.getData("application/x-rui-panel-id") || k.dataTransfer.getData("text/plain") || T.current;
          Y && Ie(Y, C.id), T.current = null, U(null);
        },
        onDragEnd: () => {
          T.current = null, U(null);
        }
      },
      C.id
    ) : null;
  };
  return Ae ? /* @__PURE__ */ s(Vt, { children: [
    /* @__PURE__ */ e("div", { className: "fixed inset-0 z-40 bg-[#050816]/80 backdrop-blur-sm" }),
    _e(Ae)
  ] }) : /* @__PURE__ */ e("div", { className: c("rui-theme grid w-full grid-cols-12 gap-3 sm:gap-5", K, ee && "select-none"), style: R, children: H.map(_e) });
}
function Ge({ value: t, defaultValue: r, onChange: i }) {
  const [o, a] = fe(r), d = t !== void 0, l = d ? t : o, u = Ce(
    (b) => {
      const f = typeof b == "function" ? b(l) : b;
      d || a(f), i == null || i(f);
    },
    [d, l, i]
  );
  return [l, u];
}
function Br(t, r) {
  return typeof t == "string" || typeof t == "number" ? String(t) : r;
}
function Dr(t) {
  if (typeof t == "object" && t !== null && "value" in t) {
    const r = String(t.value), i = t.label ?? t.text ?? r;
    return {
      value: t.value,
      label: i,
      text: t.text ?? Br(t.label, r),
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
function Rr({ className: t }) {
  return /* @__PURE__ */ e("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: t, children: /* @__PURE__ */ e("path", { d: "M5 7.5 10 12.5 15 7.5", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function Lr({ className: t }) {
  return /* @__PURE__ */ s("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: t, children: [
    /* @__PURE__ */ e("circle", { cx: "8.5", cy: "8.5", r: "4.75", stroke: "currentColor", strokeWidth: "1.5" }),
    /* @__PURE__ */ e("path", { d: "m12.25 12.25 3.5 3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
  ] });
}
function jr({ className: t }) {
  return /* @__PURE__ */ e("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: t, children: /* @__PURE__ */ e("path", { d: "m4.75 10.25 3.25 3.25 7.5-7.5", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function Ar({ className: t }) {
  return /* @__PURE__ */ e("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", className: t, children: /* @__PURE__ */ e("path", { d: "m5 5 10 10m0-10L5 15", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round" }) });
}
function Tr({
  mode: t = "single",
  options: r,
  value: i,
  defaultValue: o,
  onChange: a,
  searchable: d = !0,
  placeholder: l = "Select an option",
  searchPlaceholder: u = "Search options",
  emptyState: b = "No matching options",
  disabled: f = !1,
  clearable: v = !0,
  label: w,
  description: N,
  error: B,
  helperText: m,
  labelPosition: S = "top",
  className: M,
  wrapperClassName: L,
  labelClassName: j,
  descriptionClassName: G,
  errorClassName: z,
  helperClassName: K,
  triggerClassName: F,
  menuClassName: J,
  optionClassName: O,
  searchClassName: A,
  summaryClassName: P,
  accentKey: W,
  style: T,
  endAdornment: ee,
  endAdornmentClassName: U,
  summaryText: X,
  menuHeader: _,
  showSelectAll: te = !1,
  showClear: H = !1,
  selectAllLabel: je = "Select all",
  clearLabel: R = "Clear",
  getOptionKey: V,
  isOptionEqual: ce,
  renderOption: me,
  renderValue: Me
}, ye) {
  const be = q(() => r.map(Dr), [r]), [Z, Re] = Ge({
    value: i,
    defaultValue: o ?? (t === "multiple" ? [] : null),
    onChange: a
  }), [Se, Ie] = fe(!1), [Ae, _e] = fe(""), C = xe(null), re = xe(null), k = at(), Y = he(W, T), ge = Ce((h) => V ? V(h) : String(h), [V]), ke = q(() => t === "multiple" ? (Z ?? []).slice() : Z == null ? [] : [Z], [Z, t]), oe = q(() => new Set(ke.map((h) => ge(h))), [ke, ge]), ae = Ce(
    (h) => ce ? ke.some((Q) => ce(h, Q)) : oe.has(ge(h)),
    [ce, oe, ke, ge]
  ), ue = q(() => be.filter((h) => ae(h.value)), [ae, be]), ze = q(() => {
    const h = Ae.trim().toLowerCase();
    return h ? be.filter((Q) => `${Q.text ?? ""} ${String(Q.value)} ${Q.keywords ?? ""}`.toLowerCase().includes(h)) : be;
  }, [be, Ae]), Xe = q(() => {
    if (X)
      return typeof X == "function" ? X({ value: Z, selectedOptions: ue, placeholder: l }) : X;
    if (Me) return Me(Z, ue);
    if (t === "multiple") {
      const h = Z;
      return h != null && h.length ? ue.length <= 2 ? ue.map((Q) => Q.text ?? String(Q.value)).join(", ") : `${h.length} selected` : l;
    }
    return ue[0] ? ue[0].text ?? String(ue[0].value) : Z == null || Z === "" ? l : String(Z);
  }, [Z, t, l, Me, ue, X]);
  ne(() => {
    if (!Se) {
      _e("");
      return;
    }
    const h = (se) => {
      var We;
      (We = C.current) != null && We.contains(se.target) || Ie(!1);
    }, Q = (se) => {
      se.key === "Escape" && Ie(!1);
    };
    document.addEventListener("mousedown", h), document.addEventListener("keydown", Q);
    const ie = window.setTimeout(() => {
      var se;
      return (se = re.current) == null ? void 0 : se.focus();
    }, 0);
    return () => {
      window.clearTimeout(ie), document.removeEventListener("mousedown", h), document.removeEventListener("keydown", Q);
    };
  }, [Se]);
  const Qe = (h) => {
    Re(h), Ie(!1);
  }, Te = (h) => {
    const Q = (Z ?? []).slice(), ie = ge(h), se = Q.findIndex((We) => ce ? ce(h, We) : ge(We) === ie);
    se >= 0 ? Q.splice(se, 1) : Q.push(h), Re(Q);
  }, Je = () => {
    Re(t === "multiple" ? [] : null), Ie(!1);
  }, $e = () => {
    t === "multiple" && Re(be.filter((h) => !h.disabled).map((h) => h.value));
  }, p = q(() => {
    const h = be.filter((Q) => !Q.disabled);
    return !!h.length && h.every((Q) => ae(Q.value));
  }, [ae, be]), pe = typeof _ == "function" ? _({ options: be, filteredOptions: ze, selectedOptions: ue, selectAll: $e, clear: Je }) : _, le = [N ? `${k}-description` : null, B ? `${k}-error` : null, m ? `${k}-helper` : null].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ s("div", { className: c(S === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", L), style: Y, children: [
    w || N ? /* @__PURE__ */ s("div", { className: c(S === "left" ? "pt-2" : "", "min-w-0"), children: [
      w ? /* @__PURE__ */ e("label", { htmlFor: k, className: c("block text-sm font-medium text-white", j), children: w }) : null,
      N ? /* @__PURE__ */ e("div", { id: `${k}-description`, className: c("mt-1 text-sm text-[var(--rui-text-secondary)]", G), children: N }) : null
    ] }) : null,
    /* @__PURE__ */ s("div", { ref: C, className: c("relative min-w-0", M), children: [
      /* @__PURE__ */ s(
        "button",
        {
          ref: ye,
          id: k,
          type: "button",
          disabled: f,
          "aria-invalid": !!B || void 0,
          "aria-describedby": le,
          "aria-expanded": Se,
          onClick: () => !f && Ie((h) => !h),
          className: c(
            "flex h-10 w-full items-center justify-between gap-3 rounded-[4px] border px-4 text-left text-[15px] outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
            Se ? "border-[var(--rui-accent)] bg-[var(--rui-bg-input)] text-[#1c1f31]" : "border-[rgba(18,22,50,0.28)] bg-[var(--rui-bg-input)] text-[#1c1f31] hover:border-[var(--rui-accent)]",
            F
          ),
          children: [
            /* @__PURE__ */ e(
              "span",
              {
                className: c(
                  "min-w-0 flex-1 truncate",
                  Z == null || Array.isArray(Z) && !Z.length ? "text-[#747a95]" : "text-[#1c1f31]",
                  P
                ),
                children: Xe
              }
            ),
            /* @__PURE__ */ s("span", { className: "flex items-center gap-2 text-[#737a98]", children: [
              ee ? /* @__PURE__ */ e("span", { className: c("inline-flex items-center", U), children: ee }) : null,
              !ee && t === "multiple" ? /* @__PURE__ */ e("span", { className: c("text-xs uppercase tracking-wider", U), children: ke.length }) : null,
              v && (t === "multiple" && (Z != null && Z.length) || t === "single" && Z != null) ? /* @__PURE__ */ e(
                "span",
                {
                  role: "button",
                  tabIndex: -1,
                  "aria-label": "Clear selection",
                  onClick: (h) => {
                    h.preventDefault(), h.stopPropagation(), Je();
                  },
                  className: "inline-flex h-5 w-5 items-center justify-center rounded-full border border-transparent transition hover:border-[var(--rui-border-soft)] hover:bg-white/[0.08]",
                  children: /* @__PURE__ */ e(Ar, { className: "h-3.5 w-3.5" })
                }
              ) : null,
              /* @__PURE__ */ e(Rr, { className: c("h-4 w-4 transition-transform", Se && "rotate-180") })
            ] })
          ]
        }
      ),
      Se && !f ? /* @__PURE__ */ s(
        "div",
        {
          className: c(
            "absolute left-0 right-0 top-full z-[130] mt-2 max-h-[320px] overflow-hidden rounded-[10px] border border-white/10 bg-[var(--rui-bg-panel)] shadow-panel",
            J
          ),
          children: [
            pe || t === "multiple" && (te || H) ? /* @__PURE__ */ s("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-[var(--rui-border-soft)] p-2.5", children: [
              /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: pe }),
              t === "multiple" && (te || H) ? /* @__PURE__ */ s("div", { className: "flex flex-shrink-0 items-center gap-2", children: [
                te ? /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    disabled: p,
                    className: "rounded-[6px] px-2 py-1 text-xs text-[var(--rui-accent)] transition hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-45",
                    onClick: $e,
                    children: je
                  }
                ) : null,
                H ? /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    disabled: !ke.length,
                    className: "rounded-[6px] px-2 py-1 text-xs text-[var(--rui-text-secondary)] transition hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-45",
                    onClick: Je,
                    children: R
                  }
                ) : null
              ] }) : null
            ] }) : null,
            d ? /* @__PURE__ */ e("div", { className: "border-b border-white/8 p-3", children: /* @__PURE__ */ s("div", { className: "relative", children: [
              /* @__PURE__ */ e(Lr, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: re,
                  value: Ae,
                  onChange: (h) => _e(h.target.value),
                  placeholder: u,
                  className: c(
                    "h-10 w-full rounded-[6px] border border-white/10 bg-black/20 pl-9 pr-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[var(--rui-accent)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0",
                    A
                  )
                }
              )
            ] }) }) : null,
            /* @__PURE__ */ e("div", { className: "rui-scrollbar max-h-[260px] overflow-auto p-1", children: ze.length ? ze.map((h) => {
              const Q = ae(h.value), ie = f || h.disabled;
              return /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  disabled: ie,
                  onClick: () => {
                    ie || (t === "multiple" ? Te(h.value) : Qe(h.value));
                  },
                  className: c(
                    "flex w-full items-start justify-between gap-3 rounded-[8px] px-3 py-2.5 text-left text-sm transition",
                    Q ? "bg-[var(--rui-accent-soft)] text-white" : "text-white/75 hover:bg-white/[0.06] hover:text-white",
                    ie && "cursor-not-allowed opacity-50",
                    O
                  ),
                  children: [
                    /* @__PURE__ */ s("span", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ e("span", { className: "block truncate", children: me ? me(h, Q) : h.label ?? h.text ?? String(h.value) }),
                      h.description ? /* @__PURE__ */ e("span", { className: "mt-1 block text-xs text-[var(--rui-text-tertiary)]", children: h.description }) : null
                    ] }),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: c(
                          "mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border",
                          Q ? "border-[var(--rui-accent)] bg-[var(--rui-accent)] text-[#07111d]" : "border-[var(--rui-border-soft)] text-transparent"
                        ),
                        children: /* @__PURE__ */ e(jr, { className: "h-3.5 w-3.5" })
                      }
                    )
                  ]
                },
                ge(h.value)
              );
            }) : /* @__PURE__ */ e("div", { className: "px-3 py-6 text-center text-sm text-[var(--rui-text-tertiary)]", children: b }) })
          ]
        }
      ) : null,
      B ? /* @__PURE__ */ e("div", { id: `${k}-error`, className: c("mt-1 text-sm text-[var(--rui-danger)]", z), children: B }) : m ? /* @__PURE__ */ e("div", { id: `${k}-helper`, className: c("mt-1 text-sm text-[var(--rui-text-tertiary)]", K), children: m }) : null
    ] })
  ] });
}
const zt = Ve(Tr), Er = ["ALL", "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "SUCCESS"].map((t) => ({ label: t, value: t })), Wr = [{ label: "All categories", value: "ALL" }];
function _r(t) {
  if (!t) return "";
  const r = t instanceof Date ? t : new Date(t);
  return Number.isNaN(r.getTime()) ? String(t) : r.toLocaleString();
}
function zr(t) {
  return !t || typeof t == "object" && !Object.keys(t).length ? "" : typeof t == "string" ? t : JSON.stringify(t, null, 2);
}
function Pr(t) {
  return t === "ERROR" ? "text-[var(--rui-danger)]" : t === "WARN" || t === "WARNING" ? "text-[var(--rui-warning)]" : t === "SUCCESS" ? "text-[var(--rui-success)]" : t === "INFO" ? "text-[var(--rui-accent)]" : "text-white/45";
}
function $r(t) {
  return t === "ERROR" ? "close" : t === "WARN" || t === "WARNING" ? "info" : t === "SUCCESS" ? "check" : t === "INFO" ? "info" : "actions";
}
function Fr(t, r) {
  const i = [...t];
  return i.sort((o, a) => new Date(o.createdAt ?? o.timestamp ?? 0).getTime() - new Date(a.createdAt ?? a.timestamp ?? 0).getTime()), r ? i : i.reverse();
}
function bn({
  entries: t,
  logs: r,
  levels: i = Er,
  categories: o = Wr,
  defaultLevel: a = "ALL",
  defaultCategory: d = "ALL",
  defaultSearch: l = "",
  level: u,
  category: b,
  search: f,
  autoScroll: v,
  onLevelChange: w,
  onCategoryChange: N,
  onSearchChange: B,
  onAutoScrollChange: m,
  onFiltersChange: S,
  searchPlaceholder: M = "Search logs",
  heightClassName: L = "max-h-[360px]",
  title: j = "Log stream",
  description: G,
  subtitle: z,
  action: K,
  onClear: F,
  trailing: J = !0,
  autoScrollDefault: O = !0,
  showHeader: A = !0,
  showToolbar: P = !0,
  showLevelFilter: W = !0,
  showCategoryFilter: T = !0,
  emptyContent: ee = "No log lines matched the current filters.",
  formatTimestamp: U,
  renderMetadata: X,
  renderPayload: _,
  getSearchText: te,
  accentKey: H,
  style: je,
  className: R,
  classNames: V
}) {
  const ce = q(() => t ?? r ?? [], [t, r]), [me, Me] = fe(a), [ye, be] = fe(d), [Z, Re] = fe(l), [Se, Ie] = fe(O), [Ae, _e] = fe(() => /* @__PURE__ */ new Set()), C = xe(null), re = G ?? z, k = he(H, je), Y = u ?? me, ge = b ?? ye, ke = f ?? Z, oe = v ?? Se, ae = Ce(
    (p) => {
      S == null || S({
        level: Y,
        category: ge,
        search: ke,
        autoScroll: oe,
        ...p
      });
    },
    [oe, ge, Y, S, ke]
  ), ue = Ce(
    (p) => {
      u === void 0 && Me(p), w == null || w(p), ae({ level: p });
    },
    [u, ae, w]
  ), ze = Ce(
    (p) => {
      b === void 0 && be(p), N == null || N(p), ae({ category: p });
    },
    [b, ae, N]
  ), Xe = Ce(
    (p) => {
      f === void 0 && Re(p), B == null || B(p), ae({ search: p });
    },
    [f, ae, B]
  ), Qe = Ce(
    (p) => {
      v === void 0 && Ie(p), m == null || m(p), ae({ autoScroll: p });
    },
    [v, ae, m]
  );
  ne(() => {
    u === void 0 && Me(a);
  }, [u, a]), ne(() => {
    b === void 0 && be(d);
  }, [b, d]), ne(() => {
    f === void 0 && Re(l);
  }, [f, l]), ne(() => {
    v === void 0 && Ie(O);
  }, [O, v]);
  const Te = q(() => {
    const p = ke.trim().toLowerCase(), pe = ce.filter((le) => W && Y !== "ALL" && le.level !== Y || T && ge !== "ALL" && le.category !== ge ? !1 : p ? ((te == null ? void 0 : te(le)) || [le.message, le.source, le.category, le.level, JSON.stringify(le.metadata || {}), JSON.stringify(le.payload || {})].join(" ").toLowerCase()).toLowerCase().includes(p) : !0);
    return Fr(pe, J);
  }, [ge, te, Y, ce, ke, T, W, J]);
  ne(() => {
    if (!oe || !J || !C.current) return;
    const p = C.current, pe = window.requestAnimationFrame(() => {
      p.scrollTop = p.scrollHeight;
    });
    return () => window.cancelAnimationFrame(pe);
  }, [oe, Te, J]), ne(() => {
    _e((p) => {
      const pe = /* @__PURE__ */ new Set();
      for (const le of p)
        Te.some((h) => h.id === le) && pe.add(le);
      return pe;
    });
  }, [Te]);
  const Je = (p) => {
    _e((pe) => {
      const le = new Set(pe);
      return le.has(p) ? le.delete(p) : le.add(p), le;
    });
  }, $e = () => {
    Xe(l), ue(a), ze(d);
  };
  return /* @__PURE__ */ s("div", { className: c("rui-theme flex h-full min-h-0 min-w-0 flex-col gap-3", R), style: k, children: [
    A ? /* @__PURE__ */ s("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ s("div", { children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-semibold text-white", children: j }),
        re ? /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-white/60", children: re }) : null
      ] }),
      K
    ] }) : null,
    P ? /* @__PURE__ */ s("div", { className: c("flex min-w-0 shrink-0 flex-wrap items-center gap-2", V == null ? void 0 : V.toolbar), children: [
      /* @__PURE__ */ e("div", { className: "min-w-[140px] flex-[1_1_180px] lg:max-w-[260px]", children: /* @__PURE__ */ e(
        "input",
        {
          className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input",
          value: ke,
          onChange: (p) => Xe(p.target.value),
          placeholder: M
        }
      ) }),
      W ? /* @__PURE__ */ e("div", { className: "min-w-[112px] flex-[0_1_132px]", children: /* @__PURE__ */ e(zt, { searchable: !0, value: Y, options: i, onChange: (p) => ue(String(p ?? a)) }) }) : null,
      T ? /* @__PURE__ */ e("div", { className: "min-w-[140px] flex-[0_1_176px]", children: /* @__PURE__ */ e(zt, { searchable: !0, value: ge, options: o, onChange: (p) => ze(String(p ?? d)) }) }) : null,
      A ? null : K,
      /* @__PURE__ */ e(we, { variant: "ghost", size: "sm", onClick: () => Qe(!oe), children: oe ? "Trailing on" : "Trailing off" }),
      F ? /* @__PURE__ */ e(we, { variant: "ghost", size: "sm", onClick: () => void F(), children: "Clear logs" }) : null,
      /* @__PURE__ */ e(we, { variant: "ghost", size: "sm", onClick: $e, children: "Clear filters" })
    ] }) : null,
    /* @__PURE__ */ e("div", { className: c("min-w-0 flex-1 overflow-hidden rounded-[10px] border border-white/8 bg-[#0b1022]", V == null ? void 0 : V.viewport), children: /* @__PURE__ */ e("div", { ref: C, className: c(L, "min-h-0 overflow-auto select-text rui-scrollbar [scrollbar-gutter:stable]"), children: Te.length ? Te.map((p) => {
      const pe = _ ? _(p) : zr(p.payload), le = !!pe, h = Ae.has(p.id);
      return /* @__PURE__ */ s(Zt.Fragment, { children: [
        /* @__PURE__ */ e("div", { className: c("border-b border-white/6 px-3 py-2 font-mono text-xs last:border-none", V == null ? void 0 : V.entry), children: /* @__PURE__ */ s("div", { className: "grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-3", children: [
          /* @__PURE__ */ s("div", { className: "min-w-0", children: [
            /* @__PURE__ */ s("div", { className: "flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-white/80", children: [
              /* @__PURE__ */ e("span", { className: "shrink-0 text-white/45", children: U ? U(p) : _r(p.createdAt ?? p.timestamp) }),
              p.source || p.category ? /* @__PURE__ */ e("span", { className: "shrink-0 text-white/35", children: "|" }) : null,
              p.source || p.category ? /* @__PURE__ */ e("span", { className: "shrink-0 text-white/50", children: [p.source, p.category].filter(Boolean).join("/") }) : null,
              X ? X(p) : Object.entries(p.metadata || {}).map(([Q, ie]) => /* @__PURE__ */ s("span", { className: "shrink-0 text-white/35", children: [
                "[",
                ie,
                "]"
              ] }, Q)),
              /* @__PURE__ */ e("span", { className: c("shrink-0", Pr(p.level)), title: p.level, children: /* @__PURE__ */ e(De, { name: $r(p.level), className: "h-4 w-4" }) })
            ] }),
            /* @__PURE__ */ e("div", { className: "mt-1 min-w-0 whitespace-pre-wrap break-words text-white/90", children: p.message })
          ] }),
          /* @__PURE__ */ e("div", { className: "shrink-0", children: le ? /* @__PURE__ */ e(
            we,
            {
              variant: "ghost",
              size: "sm",
              className: "h-7 px-2 text-[11px]",
              leftIcon: /* @__PURE__ */ e(De, { name: "info", className: "h-4 w-4" }),
              onClick: () => Je(p.id),
              children: h ? "Hide payload" : "View payload"
            }
          ) : /* @__PURE__ */ e("span", { className: "inline-flex h-7 items-center text-white/30", children: "-" }) })
        ] }) }),
        h && le ? /* @__PURE__ */ e("div", { className: "border-b border-white/6 bg-black/20 px-3 py-3 last:border-none", children: typeof pe == "string" ? /* @__PURE__ */ e(
          "pre",
          {
            className: c(
              "overflow-x-auto whitespace-pre-wrap break-words rounded-[8px] border border-white/8 bg-[#070b18] p-3 font-mono text-[11px] leading-5 text-white/75 select-text",
              V == null ? void 0 : V.payload
            ),
            children: pe
          }
        ) : /* @__PURE__ */ e("div", { className: V == null ? void 0 : V.payload, children: pe }) }) : null
      ] }, p.id);
    }) : /* @__PURE__ */ e("div", { className: "flex h-full min-h-[220px] items-center justify-center px-4 py-8 text-center text-sm text-white/55", children: ee }) }) })
  ] });
}
const Hr = {
  "top-right": "right-4 top-4",
  "top-left": "left-4 top-4",
  "bottom-right": "right-4 bottom-4",
  "bottom-left": "left-4 bottom-4"
};
function Or({
  items: t,
  onDismiss: r,
  placement: i = "top-right",
  accentKey: o,
  style: a,
  className: d,
  itemClassName: l,
  titleClassName: u,
  messageClassName: b,
  actionsClassName: f
}) {
  const v = he(o, a);
  return ne(() => {
    if (typeof window > "u" || !r) return;
    const w = t.filter((N) => N.timeout !== null).map((N) => window.setTimeout(() => r(N.id), N.timeout ?? 4200));
    return () => w.forEach((N) => window.clearTimeout(N));
  }, [t, r]), typeof document > "u" ? null : mt(
    /* @__PURE__ */ e("div", { className: c("pointer-events-none fixed z-[220] flex w-[min(92vw,380px)] flex-col gap-3", Hr[i], d), style: v, children: t.map((w) => /* @__PURE__ */ s(
      "div",
      {
        className: c(
          "pointer-events-auto rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-surface)] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.36)]",
          l
        ),
        children: [
          /* @__PURE__ */ s("div", { className: "mb-2 flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ e(Yt, { tone: w.tone ?? "neutral", children: w.tone ?? "neutral" }),
            r ? /* @__PURE__ */ e(we, { variant: "icon", size: "sm", className: "h-8 w-8 px-0", "aria-label": "Dismiss notification", onClick: () => r(w.id), children: /* @__PURE__ */ e("span", { "aria-hidden": "true", children: "×" }) }) : null
          ] }),
          /* @__PURE__ */ e("div", { className: c("text-sm font-semibold text-white", u), children: w.title }),
          w.message ? /* @__PURE__ */ e("div", { className: c("mt-1 text-sm text-[var(--rui-text-secondary)]", b), children: w.message }) : null,
          w.actions ? /* @__PURE__ */ e("div", { className: c("mt-3 flex flex-wrap gap-2", f), children: w.actions }) : null
        ]
      },
      w.id
    )) }),
    document.body
  );
}
const xn = Or;
function gn({
  title: t,
  pageName: r,
  description: i,
  actions: o,
  actionButtons: a,
  sidebar: d,
  topbar: l,
  footer: u,
  children: b,
  accentKey: f,
  style: v,
  className: w,
  headerClassName: N,
  contentClassName: B,
  sidebarClassName: m
}) {
  const S = t ?? r, M = o ?? a, L = he(f, v);
  return /* @__PURE__ */ s("div", { className: c("rui-theme min-h-screen bg-[var(--rui-bg-app)] text-[var(--rui-text-main)]", w), style: L, children: [
    l,
    /* @__PURE__ */ s("div", { className: c("grid gap-5 px-4 py-5", !!d && "xl:grid-cols-[minmax(84px,auto)_minmax(0,1fr)]"), children: [
      d ? /* @__PURE__ */ e("aside", { className: c("min-w-0", m), children: d }) : null,
      /* @__PURE__ */ s("main", { className: "min-w-0", children: [
        S || i || M ? /* @__PURE__ */ e(Vr, { title: S, description: i, actions: M, className: N }) : null,
        /* @__PURE__ */ e("div", { className: c("mt-5 min-w-0", B), children: b }),
        u ? /* @__PURE__ */ e("footer", { className: "mt-5", children: u }) : null
      ] })
    ] })
  ] });
}
function Vr({ title: t, pageName: r, description: i, subtitle: o, actions: a, actionButtons: d, children: l, accentKey: u, style: b, className: f }) {
  const v = t ?? r, w = i ?? o, N = a ?? d, B = he(u, b);
  return /* @__PURE__ */ s("div", { className: c("flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between", f), style: B, children: [
    /* @__PURE__ */ s("div", { className: "min-w-0", children: [
      v ? /* @__PURE__ */ e("h1", { className: "text-[28px] font-semibold text-white", children: v }) : null,
      w ? /* @__PURE__ */ e("p", { className: "mt-2 max-w-3xl text-sm text-white/70", children: w }) : null,
      l
    ] }),
    N ? /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-3", children: N }) : null
  ] });
}
function pn({ children: t, accentKey: r, style: i, className: o }) {
  const a = he(r, i);
  return /* @__PURE__ */ e("div", { className: c("rui-theme w-full space-y-5 px-2 py-4 sm:px-4 sm:py-5", o), style: a, children: t });
}
function vn({
  items: t,
  header: r,
  footer: i,
  activeId: o,
  onSelect: a,
  children: d,
  accentKey: l,
  style: u,
  className: b,
  itemClassName: f,
  activeItemClassName: v,
  headerClassName: w,
  footerClassName: N
}) {
  const B = he(l, u);
  return /* @__PURE__ */ s(
    "aside",
    {
      className: c(
        "rui-theme flex min-w-[220px] flex-col gap-3 rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[var(--rui-bg-surface)] p-3",
        b
      ),
      style: B,
      children: [
        r ? /* @__PURE__ */ e("div", { className: c("px-2 py-1", w), children: r }) : null,
        t != null && t.length ? /* @__PURE__ */ e("nav", { className: "flex flex-col gap-1", "aria-label": "Sidebar", children: t.map((m) => {
          const S = m.active ?? m.id === o;
          return /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              disabled: m.disabled,
              "aria-current": S ? "page" : void 0,
              onClick: () => {
                var M;
                (M = m.onSelect) == null || M.call(m, m.id), a == null || a(m.id, m);
              },
              className: c(
                "flex w-full items-start gap-3 rounded-[8px] px-3 py-2 text-left text-sm text-[var(--rui-text-secondary)] transition hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-50",
                S && "border border-[var(--rui-accent-border)] bg-[var(--rui-accent-muted)] text-white",
                f,
                S && v
              ),
              children: [
                m.icon ? /* @__PURE__ */ e("span", { className: "mt-0.5 flex-shrink-0 text-[var(--rui-accent)]", children: m.icon }) : null,
                /* @__PURE__ */ s("span", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ e("span", { className: "block font-medium", children: m.label }),
                  m.description ? /* @__PURE__ */ e("span", { className: "mt-0.5 block text-xs text-[var(--rui-text-tertiary)]", children: m.description }) : null
                ] }),
                m.badge ? /* @__PURE__ */ e("span", { className: "flex-shrink-0", children: m.badge }) : null
              ]
            },
            m.id
          );
        }) }) : null,
        d,
        i ? /* @__PURE__ */ e("div", { className: c("mt-auto px-2 py-1", N), children: i }) : null
      ]
    }
  );
}
const wn = Ve(function({
  checked: r,
  defaultChecked: i = !1,
  onCheckedChange: o,
  name: a,
  value: d,
  title: l,
  description: u,
  helper: b,
  leading: f,
  trailing: v,
  toggleable: w,
  disabled: N,
  accentKey: B,
  style: m,
  className: S,
  contentClassName: M,
  titleClassName: L,
  descriptionClassName: j,
  helperClassName: G,
  indicatorClassName: z
}, K) {
  const [F, J] = Ge({
    value: r,
    defaultValue: i,
    onChange: o
  }), O = he(B, m), A = w ?? !a;
  return /* @__PURE__ */ s(
    "label",
    {
      ref: K,
      style: O,
      className: c(
        "group flex cursor-pointer items-start gap-3 rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-[linear-gradient(180deg,var(--rui-bg-surface-2),var(--rui-bg-card))] p-4 transition hover:border-[var(--rui-accent-border-soft)] hover:shadow-[0_18px_44px_rgba(0,0,0,0.30)]",
        F && "border-[var(--rui-accent-border)] shadow-[0_0_0_1px_var(--rui-accent-muted)]",
        N && "cursor-not-allowed opacity-60 hover:border-[var(--rui-border-soft)] hover:shadow-none",
        S
      ),
      children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "radio",
            name: a,
            value: d,
            checked: F,
            onClick: (P) => {
              N || !A || !F || (P.preventDefault(), J(!1));
            },
            onChange: (P) => {
              A && F || N || J(P.target.checked);
            },
            disabled: N,
            className: "sr-only"
          }
        ),
        /* @__PURE__ */ e(
          "span",
          {
            className: c(
              "mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border transition",
              F ? "border-[var(--rui-accent)] bg-[var(--rui-accent)]" : "border-[var(--rui-border-strong)] bg-transparent",
              z
            ),
            "aria-hidden": "true",
            children: /* @__PURE__ */ e("span", { className: c("h-2.5 w-2.5 rounded-full bg-[#08111d] transition", !F && "scale-0") })
          }
        ),
        /* @__PURE__ */ s("div", { className: c("min-w-0 flex-1", M), children: [
          /* @__PURE__ */ s("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ s("div", { className: "min-w-0", children: [
              l ? /* @__PURE__ */ e("div", { className: c("text-sm font-semibold text-white", L), children: l }) : null,
              u ? /* @__PURE__ */ e("div", { className: c("mt-1 text-sm text-[var(--rui-text-secondary)]", j), children: u }) : null
            ] }),
            v ? /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: v }) : null
          ] }),
          b || f ? /* @__PURE__ */ s("div", { className: "mt-3 flex items-end justify-between gap-3", children: [
            b ? /* @__PURE__ */ e("div", { className: c("text-sm text-[var(--rui-text-tertiary)]", G), children: b }) : /* @__PURE__ */ e("span", {}),
            f ? /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-[var(--rui-text-secondary)]", children: f }) : null
          ] }) : null
        ] })
      ]
    }
  );
}), Zr = Ve(function({
  checked: r,
  defaultChecked: i = !1,
  onCheckedChange: o,
  label: a,
  description: d,
  disabled: l,
  className: u,
  trackClassName: b,
  thumbClassName: f,
  labelClassName: v,
  descriptionClassName: w,
  accentKey: N,
  style: B,
  ...m
}, S) {
  const [M, L] = Ge({
    value: r,
    defaultValue: i,
    onChange: o
  }), j = at(), G = he(N, B), z = /* @__PURE__ */ e(
    "button",
    {
      ref: S,
      type: "button",
      role: "switch",
      "aria-checked": M,
      "aria-labelledby": a ? j : void 0,
      "aria-label": typeof a == "string" ? a : m["aria-label"],
      disabled: l,
      style: G,
      onClick: () => {
        l || L((K) => !K);
      },
      className: c(
        "relative inline-flex h-8 w-[54px] flex-shrink-0 items-center rounded-full border outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0",
        M ? "border-[rgba(25,199,220,0.4)] bg-[var(--rui-success)]/90" : "border-white/10 bg-white/10",
        l && "opacity-60",
        !a && !d && u,
        b
      ),
      ...m,
      children: /* @__PURE__ */ e(
        "span",
        {
          className: c(
            "pointer-events-none absolute h-7 w-7 rounded-full bg-[#f1f1ee] shadow-[0_3px_10px_rgba(0,0,0,0.22)] transition-[left]",
            M ? "left-[24px]" : "left-[1px]",
            f
          )
        }
      )
    }
  );
  return !a && !d ? z : /* @__PURE__ */ s("div", { className: c("inline-flex items-start gap-3", l && "cursor-not-allowed opacity-60", u), children: [
    z,
    (a || d) && /* @__PURE__ */ s("span", { className: "min-w-0", children: [
      a ? /* @__PURE__ */ e("span", { id: j, className: c("block text-sm font-medium text-white", v), children: a }) : null,
      d ? /* @__PURE__ */ e("span", { className: c("mt-0.5 block text-sm text-[var(--rui-text-secondary)]", w), children: d }) : null
    ] })
  ] });
}), Gr = Ve(function({
  value: r,
  defaultValue: i = "",
  onChange: o,
  label: a,
  description: d,
  error: l,
  helperText: u,
  labelPosition: b = "top",
  wrapperClassName: f,
  labelClassName: v,
  descriptionClassName: w,
  errorClassName: N,
  helperClassName: B,
  inputClassName: m,
  prefix: S,
  suffix: M,
  accentKey: L,
  className: j,
  style: G,
  id: z,
  disabled: K,
  required: F,
  ...J
}, O) {
  const [A, P] = Ge({
    value: r,
    defaultValue: i,
    onChange: o
  }), W = at(), T = z ?? J.name ?? W, ee = [d ? `${T}-description` : null, l ? `${T}-error` : null, u ? `${T}-helper` : null].filter(Boolean).join(" ") || void 0, U = he(L, G), X = /* @__PURE__ */ e(
    "input",
    {
      ref: O,
      id: T,
      value: A,
      onChange: (te) => P(te.target.value),
      disabled: K,
      required: F,
      "aria-invalid": !!l || void 0,
      "aria-describedby": ee,
      style: U,
      className: c(
        "rui-input h-10 min-w-0 w-full rounded-[4px] px-4 text-[15px] outline-none transition placeholder:text-[#747a95] focus:border-[var(--rui-accent)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
        j,
        m
      ),
      ...J
    }
  ), _ = S || M ? /* @__PURE__ */ s("div", { className: c("flex min-w-0 items-stretch gap-2"), children: [
    S ? /* @__PURE__ */ e("div", { className: "inline-flex items-center text-[var(--rui-text-tertiary)]", children: S }) : null,
    X,
    M ? /* @__PURE__ */ e("div", { className: "inline-flex items-center text-[var(--rui-text-tertiary)]", children: M }) : null
  ] }) : X;
  return !a && !d && !l && !u && !S && !M ? X : /* @__PURE__ */ s("div", { className: c(b === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", f), children: [
    a || d ? /* @__PURE__ */ s("div", { className: c(b === "left" ? "pt-2" : "", "min-w-0"), children: [
      a ? /* @__PURE__ */ s("label", { htmlFor: T, className: c("block text-sm font-medium text-white", v), children: [
        a,
        F ? /* @__PURE__ */ e("span", { className: "ml-1 text-[var(--rui-accent)]", children: "*" }) : null
      ] }) : null,
      d ? /* @__PURE__ */ e("div", { id: `${T}-description`, className: c("mt-1 text-sm text-[var(--rui-text-secondary)]", w), children: d }) : null
    ] }) : null,
    /* @__PURE__ */ s("div", { className: "min-w-0", children: [
      _,
      l ? /* @__PURE__ */ e("div", { id: `${T}-error`, className: c("mt-1 text-sm text-[var(--rui-danger)]", N), children: l }) : u ? /* @__PURE__ */ e("div", { id: `${T}-helper`, className: c("mt-1 text-sm text-[var(--rui-text-tertiary)]", B), children: u }) : null
    ] })
  ] });
}), Pt = Ve(function({ type: r = "datetime-local", ...i }, o) {
  return /* @__PURE__ */ e(Gr, { ref: o, type: r, ...i });
});
function Le(t) {
  return t.kind === "action";
}
function er(t) {
  return !Le(t) && t.hideable !== !1;
}
function tr(t) {
  return Le(t) || t.hideable === !1 ? !0 : t.visibleByDefault !== !1;
}
function Ue(t, r) {
  return r.getValue ? r.getValue(t) : r.accessor ? r.accessor(t) : t == null ? void 0 : t[r.id];
}
function it(t) {
  return Array.isArray(t) ? t.map((r) => it(r)).join(" ") : t == null ? "" : typeof t == "object" ? JSON.stringify(t) : String(t);
}
function rt(t) {
  const r = Number(t);
  return Number.isFinite(r) ? r : null;
}
function nt(t) {
  if (t == null || t === "") return null;
  if (t instanceof Date) return t.getTime();
  if (typeof t == "number") return Number.isFinite(t) ? t : null;
  const r = Date.parse(String(t));
  return Number.isFinite(r) ? r : null;
}
function wt(t) {
  if (typeof t == "boolean") return t;
  if (typeof t == "number") return t > 0;
  if (typeof t == "string") {
    const r = t.trim().toLowerCase();
    if (["true", "yes", "1", "enabled", "open"].includes(r)) return !0;
    if (["false", "no", "0", "disabled", "closed"].includes(r)) return !1;
  }
  return null;
}
function Nt(t) {
  return t == null ? !1 : typeof t == "string" ? t.trim().length > 0 && t !== "all" : Array.isArray(t) ? t.length > 0 : typeof t == "object" ? Object.values(t).some((r) => Nt(r)) : !0;
}
function $t(t, r) {
  var i;
  return r == null ? !1 : t === "text" ? !!String(r || "").trim() : t === "enum" ? Array.isArray(r == null ? void 0 : r.values) && !!((i = r.values) != null && i.length) : t === "number" ? !!(String((r == null ? void 0 : r.min) || "").trim() || String((r == null ? void 0 : r.max) || "").trim()) : t === "datetime" ? !!(String((r == null ? void 0 : r.from) || "").trim() || String((r == null ? void 0 : r.to) || "").trim()) : t === "boolean" ? !!(r != null && r.value && r.value !== "all") : !1;
}
function rr(t) {
  return t == null || t === "" ? "-" : Array.isArray(t) ? t.join(", ") : typeof t == "object" ? JSON.stringify(t) : String(t);
}
function Jr(t, r, i, o) {
  if (i.compare) return i.compare(t, r, o);
  const a = Ue(t, i), d = Ue(r, i);
  let l = 0;
  switch (i.kind) {
    case "number": {
      const u = rt(a), b = rt(d);
      u == null && b == null ? l = 0 : u == null ? l = 1 : b == null ? l = -1 : l = u - b;
      break;
    }
    case "datetime": {
      const u = nt(a), b = nt(d);
      u == null && b == null ? l = 0 : u == null ? l = 1 : b == null ? l = -1 : l = u - b;
      break;
    }
    case "boolean": {
      const u = wt(a), b = wt(d);
      u == null && b == null ? l = 0 : u == null ? l = 1 : b == null ? l = -1 : l = Number(u) - Number(b);
      break;
    }
    default:
      l = it(a).localeCompare(it(d), void 0, { numeric: !0, sensitivity: "base" });
      break;
  }
  return o === "asc" ? l : l * -1;
}
function Ur(t, r, i) {
  if (r.filterFn) return r.filterFn(t, i);
  const o = r.kind || "text", a = Ue(t, r);
  switch (o) {
    case "enum": {
      const d = Array.isArray(i == null ? void 0 : i.values) ? i.values.map(String) : [];
      return d.length ? (Array.isArray(a) ? a.map((u) => String(u)) : [String(a ?? "")]).some((u) => d.includes(u)) : !0;
    }
    case "number": {
      const d = rt(a), l = rt(i == null ? void 0 : i.min), u = rt(i == null ? void 0 : i.max);
      return !(d == null || l != null && d < l || u != null && d > u);
    }
    case "datetime": {
      const d = nt(a), l = nt(i == null ? void 0 : i.from), u = nt(i == null ? void 0 : i.to);
      return !(d == null || l != null && d < l || u != null && d > u);
    }
    case "boolean": {
      const d = String((i == null ? void 0 : i.value) || "all");
      if (d === "all") return !0;
      const l = wt(a);
      return l == null ? !1 : d === "yes" ? l : !l;
    }
    default: {
      const d = String(i || "").trim().toLowerCase();
      return d ? it(a).toLowerCase().includes(d) : !0;
    }
  }
}
function yt(t, r) {
  return {
    visibleColumnIds: t.filter((i) => tr(i)).map((i) => i.id),
    columnWidths: Object.fromEntries(t.filter((i) => Number(i.width) > 0).map((i) => [i.id, Number(i.width)])),
    sort: null,
    filters: {},
    globalSearch: "",
    expandedRowIds: [],
    selectedRowIds: [],
    ...r
  };
}
function tt(t, r, i) {
  var N, B;
  const o = yt(r, i), a = new Map(r.map((m) => [m.id, m])), d = r.filter((m) => !er(m)).map((m) => m.id), l = Array.isArray(t == null ? void 0 : t.visibleColumnIds) ? t.visibleColumnIds.filter((m) => a.has(m)) : o.visibleColumnIds, u = /* @__PURE__ */ new Set([...l, ...d]);
  r.filter((m) => !Le(m) && u.has(m.id)).length || r.forEach((m) => {
    tr(m) && u.add(m.id);
  });
  const f = (N = t == null ? void 0 : t.sort) != null && N.columnId ? a.get(t.sort.columnId) : null, v = f && f.sortable !== !1 && u.has(f.id) && !Le(f) && ["asc", "desc"].includes(((B = t == null ? void 0 : t.sort) == null ? void 0 : B.direction) || "") ? { columnId: f.id, direction: t.sort.direction } : o.sort, w = Object.fromEntries(
    Object.entries((t == null ? void 0 : t.filters) || {}).filter(([m, S]) => {
      const M = a.get(m);
      return !!(M && u.has(m) && M.filterable !== !1 && !Le(M) && Nt(S));
    })
  );
  return {
    visibleColumnIds: r.filter((m) => u.has(m.id)).map((m) => m.id),
    columnWidths: {
      ...o.columnWidths,
      ...Object.fromEntries(
        Object.entries((t == null ? void 0 : t.columnWidths) || {}).filter(([m, S]) => a.has(m) && Number.isFinite(Number(S)) && Number(S) > 0).map(([m, S]) => [m, Number(S)])
      )
    },
    sort: v,
    filters: w,
    globalSearch: typeof (t == null ? void 0 : t.globalSearch) == "string" ? t.globalSearch : o.globalSearch,
    expandedRowIds: Array.isArray(t == null ? void 0 : t.expandedRowIds) ? t.expandedRowIds.map(String) : o.expandedRowIds,
    selectedRowIds: Array.isArray(t == null ? void 0 : t.selectedRowIds) ? t.selectedRowIds.map(String) : o.selectedRowIds
  };
}
function Xr(t, r, i = "rui:table") {
  return `${i}:${t}:${r || "__global__"}`;
}
function Qr(t, r, i) {
  if (t === !1) return null;
  const o = (t == null ? void 0 : t.key) || r;
  return o ? Xr(o, (t == null ? void 0 : t.scope) ?? i, t == null ? void 0 : t.namespace) : null;
}
function St(t) {
  const { expandedRowIds: r, selectedRowIds: i, ...o } = t;
  return o;
}
function Yr(t) {
  return { ...t, expandedRowIds: [], selectedRowIds: [] };
}
function qr(t, r) {
  if (typeof window > "u") return null;
  try {
    const o = (r || window.localStorage).getItem(t);
    return o ? St(JSON.parse(o)) : null;
  } catch {
    return null;
  }
}
function Kr(t, r, i) {
  if (!(typeof window > "u"))
    try {
      (i || window.localStorage).setItem(t, JSON.stringify(St(r)));
    } catch {
    }
}
function Ft(t) {
  return t === "center" ? "text-center" : t === "right" ? "text-right" : "text-left";
}
function en(t, r) {
  return !t || t.columnId !== r ? { columnId: r, direction: "asc" } : t.direction === "asc" ? { columnId: r, direction: "desc" } : null;
}
function tn(t, r) {
  const i = /* @__PURE__ */ new Set();
  return t.forEach((o) => {
    const a = Ue(o, r);
    Array.isArray(a) ? a.forEach((d) => i.add(String(d))) : a != null && a !== "" && i.add(String(a));
  }), Array.from(i).sort((o, a) => o.localeCompare(a, void 0, { numeric: !0, sensitivity: "base" })).map((o) => ({ label: o, value: o }));
}
function Ht(t, r) {
  const i = t.getBoundingClientRect(), o = window.innerWidth, a = window.innerHeight, d = 12, l = Math.max(d, Math.min(i.bottom + 8, a - d - 120)), u = Math.max(d, Math.min(i.right - r, o - r - d)), b = Math.max(180, a - l - d);
  return { left: u, top: l, maxHeight: b };
}
function rn(t, r) {
  return r.renderDetailValue ? r.renderDetailValue(t) : r.renderCell ? r.renderCell(t) : rr(Ue(t, r));
}
function nn(t, r) {
  return r ? { ...t, ...r } : t;
}
function yn({
  rows: t,
  columns: r,
  rowKey: i,
  tableId: o,
  scopeId: a = null,
  persistence: d,
  state: l,
  defaultState: u,
  onStateChange: b,
  selection: f,
  virtualization: v,
  loading: w = !1,
  emptyMessage: N = "No rows available.",
  loadingContent: B = "Loading rows.",
  toolbarContent: m,
  renderToolbar: S,
  headerFilters: M,
  renderHeaderFilters: L,
  renderSelectionActions: j,
  hideColumnControls: G = !1,
  searchable: z = !1,
  searchPlaceholder: K = "Search rows",
  globalSearchFn: F,
  sortRows: J,
  renderExpandedContent: O,
  expandedRowIds: A,
  defaultExpandedRowIds: P,
  onExpandedChange: W,
  onRowExpand: T,
  rowClassName: ee,
  detailRowClassName: U,
  containerClassName: X,
  tableClassName: _,
  accentKey: te,
  style: H,
  className: je,
  classNames: R
}) {
  const V = xe(null), ce = xe(null), me = xe(null), Me = xe(null), ye = xe(null), be = xe(null), [Z, Re] = fe(!1), [Se, Ie] = fe(!1), [Ae, _e] = fe(null), [C, re] = fe(null), [k, Y] = fe(!1), [ge, ke] = fe(0), oe = Qr(d, o, a), ae = d === !1, ue = ae || d == null ? void 0 : d.adapter, ze = ae || d == null ? void 0 : d.storage, Xe = he(te, H), [Qe, Te] = fe(() => !oe || !ue), Je = q(() => r.map((n) => n.id).join(""), [r]), $e = xe(r), p = xe(b), [pe, le] = fe(
    () => tt(
      nn(
        yt(r, { ...u, expandedRowIds: P || (u == null ? void 0 : u.expandedRowIds) }),
        oe && qr(oe, ze) || void 0
      ),
      r,
      {
        ...u,
        expandedRowIds: P || (u == null ? void 0 : u.expandedRowIds),
        selectedRowIds: (f == null ? void 0 : f.defaultSelectedKeys) || (u == null ? void 0 : u.selectedRowIds)
      }
    )
  ), h = q(() => {
    const n = { ...pe, ...l };
    return A !== void 0 && (n.expandedRowIds = A), tt(n, r);
  }, [r, l, A, pe]), Q = xe(h);
  Q.current = h;
  const ie = Ce(
    (n) => {
      var D;
      const x = tt(
        {
          ...Q.current,
          ...l,
          ...A !== void 0 ? { expandedRowIds: A } : {}
        },
        $e.current
      ), y = tt(typeof n == "function" ? n(x) : n, $e.current);
      return Q.current = y, le(y), (D = p.current) == null || D.call(p, y), y;
    },
    [l, A]
  );
  ne(() => {
    Y(!0);
  }, []), ne(() => {
    $e.current = r;
  }, [r]), ne(() => {
    p.current = b;
  }, [b]), ne(() => {
    let n = !1;
    if (!oe || !ue) {
      Te(!0);
      return;
    }
    return Te(!1), Promise.resolve(ue.load(oe)).then((x) => {
      n || (x && le((y) => {
        var E;
        const D = tt({ ...y, ...St(x) }, $e.current);
        return (E = p.current) == null || E.call(p, D), D;
      }), Te(!0));
    }).catch(() => {
      n || Te(!1);
    }), () => {
      n = !0;
    };
  }, [Je, ue, oe]), ne(() => {
    if (!(!oe || ae)) {
      if (ue) {
        if (!Qe) return;
        Promise.resolve(ue.save(oe, Yr(h))).catch(() => {
        });
        return;
      }
      Kr(oe, h, ze);
    }
  }, [Qe, h, ue, ae, oe, ze]);
  const se = q(
    () => r.filter((n) => Le(n) || n.hideable === !1 ? !0 : h.visibleColumnIds.includes(n.id)),
    [r, h.visibleColumnIds]
  ), We = q(
    () => r.filter((n) => Le(n) || n.hideable === !1 ? !1 : !se.some((x) => x.id === n.id)),
    [r, se]
  ), Fe = Ce(
    (n, x) => {
      ie((y) => {
        const D = { ...y.filters };
        return Nt(x) ? D[n] = x : delete D[n], { ...y, filters: D };
      });
    },
    [ie]
  ), kt = Ce(
    (n) => {
      ie((x) => ({ ...x, globalSearch: n }));
    },
    [ie]
  ), lt = Ce(
    (n) => {
      ie((x) => {
        if (!(n in x.filters)) return x;
        const y = { ...x.filters };
        return delete y[n], { ...x, filters: y };
      });
    },
    [ie]
  ), Mt = Ce(
    (n, x) => {
      !Number.isFinite(x) || x <= 0 || ie((y) => ({ ...y, columnWidths: { ...y.columnWidths, [n]: x } }));
    },
    [ie]
  ), bt = Ce(() => {
    ie(yt(r, { ...u, expandedRowIds: P || [], selectedRowIds: (f == null ? void 0 : f.defaultSelectedKeys) || [] }));
  }, [r, P, u, f == null ? void 0 : f.defaultSelectedKeys, ie]);
  ne(() => {
    const n = (y) => {
      const D = be.current;
      if (!D) return;
      const E = r.find((Be) => Be.id === D.columnId);
      if (!E) return;
      const $ = Math.max(E.minWidth || 96, 56), de = E.maxWidth || 720, Pe = Math.min(de, Math.max($, D.startWidth + (y.clientX - D.startX)));
      Mt(D.columnId, Pe);
    }, x = () => {
      be.current = null;
    };
    return window.addEventListener("mousemove", n), window.addEventListener("mouseup", x), () => {
      window.removeEventListener("mousemove", n), window.removeEventListener("mouseup", x);
    };
  }, [r, Mt]), ne(() => {
    const n = (x) => {
      !(x.target instanceof Node) || [V, ce, me, Me, ye].some((D) => {
        var E;
        return (E = D.current) == null ? void 0 : E.contains(x.target);
      }) || (Re(!1), Ie(!1));
    };
    return document.addEventListener("mousedown", n), () => document.removeEventListener("mousedown", n);
  }, []), ne(() => {
    if (!Z || !ce.current || typeof window > "u") return;
    const n = () => {
      ce.current && _e(Ht(ce.current, 320));
    };
    return n(), window.addEventListener("resize", n), window.addEventListener("scroll", n, !0), () => {
      window.removeEventListener("resize", n), window.removeEventListener("scroll", n, !0);
    };
  }, [Z]), ne(() => {
    if (!Se || !me.current || typeof window > "u") return;
    const n = () => {
      me.current && re(Ht(me.current, 260));
    };
    return n(), window.addEventListener("resize", n), window.addEventListener("scroll", n, !0), () => {
      window.removeEventListener("resize", n), window.removeEventListener("scroll", n, !0);
    };
  }, [Se]);
  const Ee = We.length > 0 || !!O, qe = q(() => {
    const n = h.globalSearch.trim().toLowerCase();
    return t.filter((x) => Object.entries(h.filters).every(([D, E]) => {
      const $ = r.find((de) => de.id === D);
      return !$ || Le($) ? !0 : Ur(x, $, E);
    }) ? n ? F ? F(x, n) : r.some((D) => !Le(D) && it(Ue(x, D)).toLowerCase().includes(n)) : !0 : !1);
  }, [r, F, h.filters, h.globalSearch, t]), Ze = q(() => {
    if (J) return J(qe, h.sort, r);
    if (!h.sort) return qe;
    const n = r.find((x) => {
      var y;
      return x.id === ((y = h.sort) == null ? void 0 : y.columnId);
    });
    return n ? qe.map((x, y) => ({ row: x, index: y })).sort((x, y) => Jr(x.row, y.row, n, h.sort.direction) || x.index - y.index).map((x) => x.row) : qe;
  }, [r, qe, h.sort, J]), st = q(() => new Map(t.map((n) => [i(n), n])), [i, t]), ve = f == null ? void 0 : f.mode, He = (f == null ? void 0 : f.selectedKeys) ?? h.selectedRowIds, ct = q(() => new Set(He), [He]), xt = q(() => He.map((n) => st.get(n)).filter(Boolean), [st, He]), Ke = Ce(
    (n) => {
      var x;
      ie((y) => ({ ...y, selectedRowIds: n })), (x = f == null ? void 0 : f.onChange) == null || x.call(f, n, n.map((y) => st.get(y)).filter(Boolean));
    },
    [st, f, ie]
  ), Ct = (n) => {
    var D;
    if (!ve || (D = f == null ? void 0 : f.isRowDisabled) != null && D.call(f, n)) return;
    const x = i(n);
    if (ve === "single") {
      Ke(ct.has(x) ? [] : [x]);
      return;
    }
    const y = new Set(He);
    y.has(x) ? y.delete(x) : y.add(x), Ke(Array.from(y));
  }, et = ((f == null ? void 0 : f.selectAllScope) === "all" ? t : Ze).filter((n) => {
    var x;
    return !((x = f == null ? void 0 : f.isRowDisabled) != null && x.call(f, n));
  }).map((n) => i(n)), dt = !!et.length && et.every((n) => ct.has(n)), nr = et.some((n) => ct.has(n)), ir = () => {
    !ve || ve === "single" || Ke(dt ? He.filter((n) => !et.includes(n)) : Array.from(/* @__PURE__ */ new Set([...He, ...et])));
  }, ar = () => Ke([]), It = A ?? h.expandedRowIds, lr = q(() => new Set(It), [It]), sr = (n) => {
    const x = i(n), D = ie(($) => {
      const de = new Set($.expandedRowIds);
      return de.has(x) ? de.delete(x) : de.add(x), { ...$, expandedRowIds: Array.from(de) };
    }).expandedRowIds, E = D.includes(x);
    W == null || W(D, n), T == null || T(n, E);
  }, gt = r.filter((n) => !Le(n) && n.hideable !== !1), ot = se.filter((n) => !Le(n) && n.filterable !== !1), pt = ot.filter((n) => $t(n.kind || "text", h.filters[n.id])).length, cr = q(() => se.reduce((x, y) => x + Number(h.columnWidths[y.id] || y.width || y.minWidth || 160), 0) + (Ee ? 56 : 0) + (ve ? 52 : 0), [Ee, h.columnWidths, ve, se]), Oe = !!(v != null && v.enabled && !Ee), ut = (v == null ? void 0 : v.rowHeight) || 48, Bt = (v == null ? void 0 : v.maxHeight) || 520, Dt = (v == null ? void 0 : v.overscan) || 6, ft = Oe ? Math.max(0, Math.floor(ge / ut) - Dt) : 0, dr = Oe ? Math.ceil(Bt / ut) + Dt * 2 : Ze.length, Rt = Oe ? Ze.slice(ft, ft + dr) : Ze, Lt = Oe ? ft * ut : 0, jt = Oe ? Math.max(0, (Ze.length - ft - Rt.length) * ut) : 0, or = (n) => {
    var y, D;
    if (n.renderFilter)
      return n.renderFilter({
        value: h.filters[n.id],
        setValue: (E) => Fe(n.id, E),
        clear: () => lt(n.id),
        rows: t
      });
    const x = n.kind || "text";
    if (x === "enum") {
      const E = n.getFilterOptions ? n.getFilterOptions(t) : n.getEnumOptions ? n.getEnumOptions(t) : tn(t, n), $ = Array.isArray((y = h.filters[n.id]) == null ? void 0 : y.values) ? h.filters[n.id].values.map(String) : [];
      return /* @__PURE__ */ e("div", { className: "max-h-[220px] space-y-2 overflow-auto pr-1 rui-scrollbar", children: E.map((de) => {
        const Pe = $.includes(String(de.value));
        return /* @__PURE__ */ s("label", { className: "flex items-center gap-3 text-sm text-white/75", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "checkbox",
              checked: Pe,
              onChange: () => {
                const Be = new Set($);
                Pe ? Be.delete(String(de.value)) : Be.add(String(de.value)), Fe(n.id, { values: Array.from(Be) });
              },
              className: "h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)]"
            }
          ),
          /* @__PURE__ */ e("span", { children: de.label })
        ] }, String(de.value));
      }) });
    }
    if (x === "number") {
      const E = h.filters[n.id] || {};
      return /* @__PURE__ */ s("div", { className: "space-y-3", children: [
        /* @__PURE__ */ e(
          "input",
          {
            className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input",
            type: "number",
            value: E.min || "",
            onChange: ($) => Fe(n.id, { ...E, min: $.target.value }),
            placeholder: "Minimum"
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input",
            type: "number",
            value: E.max || "",
            onChange: ($) => Fe(n.id, { ...E, max: $.target.value }),
            placeholder: "Maximum"
          }
        )
      ] });
    }
    if (x === "datetime") {
      const E = h.filters[n.id] || {};
      return /* @__PURE__ */ s("div", { className: "space-y-3", children: [
        /* @__PURE__ */ e(
          Pt,
          {
            type: "datetime-local",
            value: E.from || "",
            onChange: ($) => Fe(n.id, { ...E, from: $ })
          }
        ),
        /* @__PURE__ */ e(
          Pt,
          {
            type: "datetime-local",
            value: E.to || "",
            onChange: ($) => Fe(n.id, { ...E, to: $ })
          }
        )
      ] });
    }
    if (x === "boolean") {
      const E = ((D = h.filters[n.id]) == null ? void 0 : D.value) || "all";
      return /* @__PURE__ */ s("select", { className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input", value: E, onChange: ($) => Fe(n.id, { value: $.target.value }), children: [
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
        onChange: (E) => Fe(n.id, E.target.value),
        placeholder: `Filter ${String(n.label)}`
      }
    );
  }, At = S == null ? void 0 : S({ state: h, rows: t, visibleRows: Ze, selectedRows: xt, reset: bt }), Tt = He.length ? j == null ? void 0 : j({ selectedKeys: He, selectedRows: xt, clearSelection: ar }) : null, Et = se.some((n) => n.groupId || n.groupLabel), ur = Et ? /* @__PURE__ */ s("tr", { className: "sticky top-0 z-30 border-b border-white/10 bg-[var(--rui-bg-panel)] text-white/60", children: [
    ve ? /* @__PURE__ */ e("th", { className: "w-[52px] px-3 py-2", rowSpan: 2 }) : null,
    Ee ? /* @__PURE__ */ e("th", { className: "w-14 px-3 py-2", rowSpan: 2 }) : null,
    se.map((n) => /* @__PURE__ */ e("th", { className: "px-3 py-2 text-left text-xs font-medium uppercase tracking-[0.14em]", children: n.groupLabel || n.groupId || "" }, n.id))
  ] }) : null;
  return /* @__PURE__ */ s("div", { ref: V, className: c("rui-theme flex min-h-0 w-full flex-1 flex-col", je, R == null ? void 0 : R.root), style: Xe, children: [
    m || At || Tt || z || !G && gt.length ? /* @__PURE__ */ s("div", { className: c("mb-3 flex flex-wrap items-center justify-between gap-2", R == null ? void 0 : R.toolbar), children: [
      /* @__PURE__ */ s("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-2", children: [
        z ? /* @__PURE__ */ e("div", { className: "relative w-full max-w-[260px]", children: /* @__PURE__ */ e(
          "input",
          {
            className: "h-9 w-full rounded-[4px] px-4 text-sm outline-none rui-input",
            value: h.globalSearch,
            onChange: (n) => kt(n.target.value),
            placeholder: K
          }
        ) }) : null,
        m,
        At,
        Tt
      ] }),
      !G && gt.length ? /* @__PURE__ */ s("div", { className: "flex flex-wrap items-center justify-end gap-2", children: [
        ot.length ? /* @__PURE__ */ e("div", { ref: ce, className: "flex items-center", children: /* @__PURE__ */ s(
          we,
          {
            variant: "ghost",
            size: "sm",
            leftIcon: /* @__PURE__ */ e(De, { name: "filter", className: "h-4 w-4" }),
            className: c(pt ? "text-[var(--rui-accent)]" : ""),
            onClick: () => Re((n) => !n),
            children: [
              "Filters",
              pt ? /* @__PURE__ */ e("span", { className: "rounded-full border border-[var(--rui-accent-border)] bg-[var(--rui-accent-soft)] px-1.5 py-0 text-[10px] leading-4 text-[var(--rui-accent)]", children: pt }) : null
            ]
          }
        ) }) : null,
        /* @__PURE__ */ e("div", { ref: me, className: "flex items-center", children: /* @__PURE__ */ e(we, { variant: "ghost", size: "sm", leftIcon: /* @__PURE__ */ e(De, { name: "grid", className: "h-4 w-4" }), onClick: () => Ie((n) => !n), children: "Columns" }) }),
        /* @__PURE__ */ e(we, { variant: "ghost", size: "sm", onClick: bt, children: "Reset table" })
      ] }) : null
    ] }) : null,
    M || L ? /* @__PURE__ */ s("div", { className: c("mb-3 flex flex-wrap items-center gap-2 rounded-[10px] border border-white/8 bg-black/10 p-3", R == null ? void 0 : R.headerFilters), children: [
      M,
      L == null ? void 0 : L({
        state: h,
        rows: t,
        visibleRows: Ze,
        selectedRows: xt,
        setGlobalSearch: kt,
        setFilter: Fe,
        clearFilter: lt,
        reset: bt
      })
    ] }) : null,
    k && Z && Ae ? mt(
      /* @__PURE__ */ s(
        "div",
        {
          ref: Me,
          className: c(
            "fixed z-[130] w-[320px] overflow-auto rounded-[10px] border border-white/10 bg-[var(--rui-bg-panel)] p-3 shadow-panel rui-scrollbar",
            R == null ? void 0 : R.menu
          ),
          style: { left: Ae.left, top: Ae.top, maxHeight: Ae.maxHeight },
          children: [
            /* @__PURE__ */ s("div", { className: "mb-3 flex items-center justify-between", children: [
              /* @__PURE__ */ e("div", { className: "text-xs uppercase tracking-[0.14em] text-white/45", children: "Table filters" }),
              /* @__PURE__ */ e(we, { variant: "ghost", size: "sm", onClick: () => ot.forEach((n) => lt(n.id)), children: "Clear all" })
            ] }),
            /* @__PURE__ */ e("div", { className: "space-y-4", children: ot.map((n) => {
              const x = $t(n.kind || "text", h.filters[n.id]);
              return /* @__PURE__ */ s("div", { className: "rounded-[10px] border border-white/8 bg-black/10 p-3", children: [
                /* @__PURE__ */ s("div", { className: "mb-2 flex items-center justify-between gap-3", children: [
                  /* @__PURE__ */ e("div", { className: "text-sm font-medium text-white", children: n.label }),
                  x ? /* @__PURE__ */ e(we, { variant: "ghost", size: "sm", onClick: () => lt(n.id), children: "Clear" }) : null
                ] }),
                or(n)
              ] }, n.id);
            }) })
          ]
        }
      ),
      document.body
    ) : null,
    k && Se && C ? mt(
      /* @__PURE__ */ s(
        "div",
        {
          ref: ye,
          className: c("fixed z-[130] w-[260px] rounded-[10px] border border-white/10 bg-[var(--rui-bg-panel)] p-3 shadow-panel", R == null ? void 0 : R.menu),
          style: { left: C.left, top: C.top, maxHeight: C.maxHeight },
          children: [
            /* @__PURE__ */ e("div", { className: "mb-2 text-xs uppercase tracking-[0.14em] text-white/45", children: "Visible columns" }),
            /* @__PURE__ */ e("div", { className: "space-y-2 overflow-auto pr-1 rui-scrollbar", style: { maxHeight: Math.max(120, C.maxHeight - 36) }, children: gt.map((n) => {
              const x = h.visibleColumnIds.includes(n.id);
              return /* @__PURE__ */ s("label", { className: "flex items-center gap-3 text-sm text-white/75", children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "checkbox",
                    checked: x,
                    onChange: () => {
                      ie((y) => {
                        var Pe;
                        const D = y.visibleColumnIds.includes(n.id), E = y.visibleColumnIds.filter((Be) => {
                          const Ne = r.find((Ye) => Ye.id === Be);
                          return Ne && !Le(Ne);
                        });
                        if (D && E.length <= 1) return y;
                        const $ = new Set(y.visibleColumnIds);
                        D ? $.delete(n.id) : $.add(n.id);
                        const de = { ...y.filters };
                        return D && delete de[n.id], {
                          ...y,
                          visibleColumnIds: r.filter((Be) => $.has(Be.id) || !er(Be)).map((Be) => Be.id),
                          filters: de,
                          sort: ((Pe = y.sort) == null ? void 0 : Pe.columnId) === n.id && D ? null : y.sort
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
        className: c("min-h-0 w-full flex-1 overflow-auto rounded-[10px] border border-white/8", X, R == null ? void 0 : R.container),
        style: { scrollbarGutter: "stable both-edges", maxHeight: Oe ? Bt : void 0 },
        onScroll: (n) => {
          Oe && ke(n.currentTarget.scrollTop);
        },
        children: /* @__PURE__ */ s("table", { className: c("w-full table-fixed text-left text-sm", _, R == null ? void 0 : R.table), style: { minWidth: `${Math.max(cr, 720)}px` }, children: [
          /* @__PURE__ */ s("colgroup", { children: [
            ve ? /* @__PURE__ */ e("col", { style: { width: 52 } }) : null,
            Ee ? /* @__PURE__ */ e("col", { style: { width: 56 } }) : null,
            se.map((n) => /* @__PURE__ */ e("col", { style: { width: h.columnWidths[n.id] || n.width || n.minWidth || 160 } }, n.id))
          ] }),
          /* @__PURE__ */ s("thead", { children: [
            ur,
            /* @__PURE__ */ s("tr", { className: c("sticky top-0 z-20 border-b border-white/10 bg-[var(--rui-bg-panel)] text-white/70", Et && "top-[37px]", R == null ? void 0 : R.headerRow), children: [
              ve ? /* @__PURE__ */ e("th", { className: "w-[52px] px-3 py-3 font-medium", children: ve === "multi" ? /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: dt,
                  ref: (n) => {
                    n && (n.indeterminate = nr && !dt);
                  },
                  onChange: ir,
                  className: "h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)]",
                  "aria-label": dt ? "Clear row selection" : "Select rows"
                }
              ) : null }) : null,
              Ee ? /* @__PURE__ */ e("th", { className: "w-14 px-3 py-3 font-medium" }) : null,
              se.map((n) => {
                var E;
                const x = !Le(n) && n.sortable !== !1, y = ((E = h.sort) == null ? void 0 : E.columnId) === n.id ? h.sort.direction : null, D = n.renderHeader ? n.renderHeader() : n.label;
                return /* @__PURE__ */ s("th", { className: c("relative px-3 py-3 font-medium", Ft(n.align), n.headerClassName), children: [
                  /* @__PURE__ */ e("div", { className: "flex items-center gap-1 pr-3", children: n.renderHeader ? /* @__PURE__ */ e("div", { className: c("flex min-w-0 flex-1 items-center", n.align === "right" ? "justify-end" : n.align === "center" ? "justify-center" : ""), children: D }) : x ? /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: c(
                        "flex min-w-0 flex-1 items-center gap-1 text-left transition hover:text-white",
                        n.align === "right" ? "justify-end" : n.align === "center" ? "justify-center" : ""
                      ),
                      onClick: () => ie(($) => ({ ...$, sort: en($.sort, n.id) })),
                      children: [
                        /* @__PURE__ */ e("span", { className: "truncate", children: D }),
                        /* @__PURE__ */ e("span", { className: c("text-[10px] uppercase tracking-[0.14em]", y ? "text-[var(--rui-accent)]" : "text-white/25"), children: y === "asc" ? "↑" : y === "desc" ? "↓" : "•" })
                      ]
                    }
                  ) : /* @__PURE__ */ e("span", { className: "truncate", children: D }) }),
                  Le(n) ? null : /* @__PURE__ */ e(
                    "div",
                    {
                      className: "absolute inset-y-1 right-0 w-2 cursor-col-resize rounded-full transition hover:bg-white/10",
                      onMouseDown: ($) => {
                        $.preventDefault(), be.current = {
                          columnId: n.id,
                          startX: $.clientX,
                          startWidth: Number(h.columnWidths[n.id] || n.width || n.minWidth || 160)
                        };
                      }
                    }
                  )
                ] }, n.id);
              })
            ] })
          ] }),
          /* @__PURE__ */ s("tbody", { children: [
            Oe && Lt ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: se.length + (Ee ? 1 : 0) + (ve ? 1 : 0), style: { height: Lt } }) }) : null,
            w ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: se.length + (Ee ? 1 : 0) + (ve ? 1 : 0), className: "px-3 py-8 text-center text-white/55", children: B }) }) : null,
            w ? null : Rt.map((n) => {
              var Be;
              const x = i(n), y = lr.has(x), D = y ? O == null ? void 0 : O(n) : null, E = !!O || We.length > 0, $ = typeof ee == "function" ? ee(n) : ee, de = ct.has(x), Pe = (Be = f == null ? void 0 : f.isRowDisabled) == null ? void 0 : Be.call(f, n);
              return /* @__PURE__ */ s(Zt.Fragment, { children: [
                /* @__PURE__ */ s("tr", { className: c("border-b border-white/6 align-top last:border-none", de && "bg-[rgba(25,199,220,0.08)]", $, R == null ? void 0 : R.row), children: [
                  ve ? /* @__PURE__ */ e("td", { className: "px-3 py-3", children: /* @__PURE__ */ e(
                    "input",
                    {
                      type: ve === "single" ? "radio" : "checkbox",
                      checked: de,
                      disabled: Pe,
                      onClick: (Ne) => {
                        ve !== "single" || !de || Pe || (Ne.preventDefault(), Ct(n));
                      },
                      onChange: () => {
                        ve === "single" && de || Ct(n);
                      },
                      className: "h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--rui-accent)] disabled:opacity-35",
                      "aria-label": de ? "Deselect row" : "Select row"
                    }
                  ) }) : null,
                  Ee ? /* @__PURE__ */ e("td", { className: "px-3 py-3", children: E ? /* @__PURE__ */ e(we, { variant: "ghost", size: "sm", className: "w-9 px-0", onClick: () => sr(n), title: y ? "Collapse row" : "Expand row", children: /* @__PURE__ */ e(De, { name: y ? "chevron-down" : "chevron-right", className: "h-4 w-4" }) }) : null }) : null,
                  se.map((Ne) => {
                    const Ye = Ne.renderCell ? Ne.renderCell(n) : rr(Ue(n, Ne)), fr = typeof Ne.cellClassName == "function" ? Ne.cellClassName(n) : Ne.cellClassName;
                    return /* @__PURE__ */ e("td", { className: c("px-3 py-3 text-white/75", Ft(Ne.align), fr, R == null ? void 0 : R.cell), children: typeof Ye == "string" || typeof Ye == "number" ? /* @__PURE__ */ e("div", { className: c(Ne.wrap ? "whitespace-normal break-words" : "truncate"), children: Ye }) : Ye }, Ne.id);
                  })
                ] }),
                y && E ? /* @__PURE__ */ e("tr", { className: c("border-b border-white/6 last:border-none", U, R == null ? void 0 : R.detailRow), children: /* @__PURE__ */ e("td", { colSpan: se.length + (Ee ? 1 : 0) + (ve ? 1 : 0), className: "px-3 py-3", children: /* @__PURE__ */ s("div", { className: "rounded-[10px] border border-white/8 bg-black/10 p-4 text-sm text-white/75", children: [
                  We.length ? /* @__PURE__ */ e("div", { className: "grid gap-3 md:grid-cols-2 xl:grid-cols-3", children: We.map((Ne) => /* @__PURE__ */ s("div", { children: [
                    /* @__PURE__ */ e("div", { className: "text-xs uppercase tracking-[0.14em] text-white/40", children: Ne.label }),
                    /* @__PURE__ */ e("div", { className: "mt-1 whitespace-normal break-words text-white/85", children: rn(n, Ne) })
                  ] }, Ne.id)) }) : null,
                  D ? /* @__PURE__ */ e("div", { className: c(We.length ? "mt-4 border-t border-white/8 pt-4" : ""), children: D }) : null
                ] }) }) }) : null
              ] }, x);
            }),
            Oe && jt ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: se.length + (Ee ? 1 : 0) + (ve ? 1 : 0), style: { height: jt } }) }) : null,
            !w && !Ze.length ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: se.length + (Ee ? 1 : 0) + (ve ? 1 : 0), className: "px-3 py-8 text-center text-white/55", children: N }) }) : null
          ] })
        ] })
      }
    )
  ] });
}
const Nn = Ve(function({
  value: r,
  defaultValue: i = "",
  onChange: o,
  label: a,
  description: d,
  error: l,
  helperText: u,
  labelPosition: b = "top",
  wrapperClassName: f,
  labelClassName: v,
  descriptionClassName: w,
  errorClassName: N,
  helperClassName: B,
  textareaClassName: m,
  accentKey: S,
  className: M,
  style: L,
  id: j,
  disabled: G,
  required: z,
  rows: K = 5,
  ...F
}, J) {
  const [O, A] = Ge({
    value: r,
    defaultValue: i,
    onChange: o
  }), P = at(), W = j ?? F.name ?? P, T = [d ? `${W}-description` : null, l ? `${W}-error` : null, u ? `${W}-helper` : null].filter(Boolean).join(" ") || void 0, ee = he(S, L);
  return /* @__PURE__ */ s("div", { className: c(b === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", f), children: [
    a || d ? /* @__PURE__ */ s("div", { className: c(b === "left" ? "pt-2" : "", "min-w-0"), children: [
      a ? /* @__PURE__ */ s("label", { htmlFor: W, className: c("block text-sm font-medium text-white", v), children: [
        a,
        z ? /* @__PURE__ */ e("span", { className: "ml-1 text-[var(--rui-accent)]", children: "*" }) : null
      ] }) : null,
      d ? /* @__PURE__ */ e("div", { id: `${W}-description`, className: c("mt-1 text-sm text-[var(--rui-text-secondary)]", w), children: d }) : null
    ] }) : null,
    /* @__PURE__ */ s("div", { className: "min-w-0", children: [
      /* @__PURE__ */ e(
        "textarea",
        {
          ref: J,
          id: W,
          value: O,
          onChange: (U) => A(U.target.value),
          disabled: G,
          required: z,
          rows: K,
          "aria-invalid": !!l || void 0,
          "aria-describedby": T,
          style: ee,
          className: c(
            "rui-input min-h-[96px] w-full px-3 py-2.5 text-sm outline-none transition placeholder:text-[var(--rui-text-tertiary)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
            M,
            m
          ),
          ...F
        }
      ),
      l ? /* @__PURE__ */ e("div", { id: `${W}-error`, className: c("mt-1 text-sm text-[var(--rui-danger)]", N), children: l }) : u ? /* @__PURE__ */ e("div", { id: `${W}-helper`, className: c("mt-1 text-sm text-[var(--rui-text-tertiary)]", B), children: u }) : null
    ] })
  ] });
});
function an(t) {
  if (t.trim() === "") return null;
  const r = Number(t);
  return Number.isFinite(r) ? r : null;
}
function vt(t) {
  return t == null ? "" : String(t);
}
const Sn = Ve(function({
  value: r,
  defaultValue: i = null,
  onChange: o,
  onValueChange: a,
  label: d,
  description: l,
  error: u,
  helperText: b,
  labelPosition: f = "top",
  wrapperClassName: v,
  labelClassName: w,
  descriptionClassName: N,
  errorClassName: B,
  helperClassName: m,
  inputClassName: S,
  prefix: M,
  suffix: L,
  accentKey: j,
  className: G,
  style: z,
  id: K,
  disabled: F,
  required: J,
  step: O,
  min: A,
  max: P,
  ...W
}, T) {
  const [ee, U] = Ge({
    value: r,
    defaultValue: i,
    onChange: o
  }), [X, _] = fe(() => vt(r ?? i)), te = at(), H = K ?? W.name ?? te, je = [l ? `${H}-description` : null, u ? `${H}-error` : null, b ? `${H}-helper` : null].filter(Boolean).join(" ") || void 0, R = he(j, z);
  return ne(() => {
    r !== void 0 && _(vt(r));
  }, [r]), ne(() => {
    r === void 0 && X === "" && ee != null && _(vt(ee));
  }, [ee, X, r]), /* @__PURE__ */ s("div", { className: c(f === "left" ? "grid gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:items-start" : "space-y-2", v), children: [
    d || l ? /* @__PURE__ */ s("div", { className: c(f === "left" ? "pt-2" : "", "min-w-0"), children: [
      d ? /* @__PURE__ */ s("label", { htmlFor: H, className: c("block text-sm font-medium text-white", w), children: [
        d,
        J ? /* @__PURE__ */ e("span", { className: "ml-1 text-[var(--rui-accent)]", children: "*" }) : null
      ] }) : null,
      l ? /* @__PURE__ */ e("div", { id: `${H}-description`, className: c("mt-1 text-sm text-[var(--rui-text-secondary)]", N), children: l }) : null
    ] }) : null,
    /* @__PURE__ */ s("div", { className: "min-w-0", children: [
      /* @__PURE__ */ s("div", { className: "flex min-w-0 items-stretch gap-2", children: [
        M ? /* @__PURE__ */ e("div", { className: "inline-flex items-center text-[var(--rui-text-tertiary)]", children: M }) : null,
        /* @__PURE__ */ e(
          "input",
          {
            ref: T,
            id: H,
            type: "text",
            inputMode: "decimal",
            value: X,
            onChange: (V) => {
              const ce = V.target.value, me = an(ce);
              _(ce), U(me), a == null || a(me, ce);
            },
            disabled: F,
            required: J,
            min: A,
            max: P,
            step: O,
            "aria-invalid": !!u || void 0,
            "aria-describedby": je,
            style: R,
            className: c(
              "rui-input h-10 min-w-0 w-full px-3 text-sm outline-none transition placeholder:text-[var(--rui-text-tertiary)] focus-visible:ring-2 focus-visible:ring-[var(--rui-accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
              G,
              S
            ),
            ...W
          }
        ),
        L ? /* @__PURE__ */ e("div", { className: "inline-flex items-center text-[var(--rui-text-tertiary)]", children: L }) : null
      ] }),
      u ? /* @__PURE__ */ e("div", { id: `${H}-error`, className: c("mt-1 text-sm text-[var(--rui-danger)]", B), children: u }) : b ? /* @__PURE__ */ e("div", { id: `${H}-helper`, className: c("mt-1 text-sm text-[var(--rui-text-tertiary)]", m), children: b }) : null
    ] })
  ] });
});
function kn({
  checked: t,
  defaultChecked: r,
  onCheckedChange: i,
  title: o,
  description: a,
  helper: d,
  leading: l,
  trailing: u,
  disabled: b,
  accentKey: f,
  style: v,
  className: w,
  contentClassName: N,
  titleClassName: B,
  descriptionClassName: m,
  helperClassName: S
}) {
  const [M, L] = Ge({
    value: t,
    defaultValue: r ?? !1,
    onChange: i
  }), j = he(f, v);
  return /* @__PURE__ */ s(
    "div",
    {
      style: j,
      onClick: (G) => {
        if (b) return;
        const z = G.target;
        z != null && z.closest("button,a,input,select,textarea,label") || L((K) => !K);
      },
      className: c(
        "flex items-start justify-between gap-4 rounded-[var(--rui-radius-panel)] border border-[var(--rui-border-soft)] bg-black/10 px-4 py-3 transition",
        M && "border-[var(--rui-accent-border)] bg-[var(--rui-accent-muted)]",
        b ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:border-[var(--rui-accent-border-soft)]",
        w
      ),
      children: [
        /* @__PURE__ */ e("div", { className: c("min-w-0 flex-1", N), children: /* @__PURE__ */ s("div", { className: "flex items-start gap-3", children: [
          l ? /* @__PURE__ */ e("div", { className: "mt-0.5 flex-shrink-0 text-[var(--rui-text-secondary)]", children: l }) : null,
          /* @__PURE__ */ s("div", { className: "min-w-0", children: [
            o ? /* @__PURE__ */ e("div", { className: c("text-sm font-medium text-white", B), children: o }) : null,
            a ? /* @__PURE__ */ e("div", { className: c("mt-1 text-xs text-[var(--rui-text-secondary)]", m), children: a }) : null,
            d ? /* @__PURE__ */ e("div", { className: c("mt-2 text-xs text-[var(--rui-text-tertiary)]", S), children: d }) : null
          ] })
        ] }) }),
        /* @__PURE__ */ s("div", { className: "flex flex-shrink-0 items-center gap-3", children: [
          u,
          /* @__PURE__ */ e(
            Zr,
            {
              checked: M,
              onCheckedChange: L,
              disabled: b,
              "aria-label": typeof o == "string" ? o : void 0
            }
          )
        ] })
      ]
    }
  );
}
function Ot(t, r, i) {
  return Math.min(i, Math.max(r, t));
}
function Mn({
  content: t,
  children: r,
  placement: i = "top",
  delay: o = 120,
  open: a,
  defaultOpen: d = !1,
  onOpenChange: l,
  accentKey: u,
  className: b,
  panelClassName: f
}) {
  const [v, w] = Ge({
    value: a,
    defaultValue: d,
    onChange: l
  }), [N, B] = fe(!1), [m, S] = fe({ top: 0, left: 0, placement: i }), M = xe(null), L = xe(null), j = xe(null), G = he(u);
  ne(() => B(!0), []);
  const z = q(
    () => () => {
      if (typeof window > "u") return;
      const J = M.current, O = L.current;
      if (!J || !O) return;
      const A = J.getBoundingClientRect(), P = O.getBoundingClientRect(), W = 10, T = 12, ee = window.innerWidth, U = window.innerHeight, X = i;
      let _ = X;
      X === "top" && A.top - P.height - W < T && (_ = "bottom"), X === "bottom" && A.bottom + P.height + W > U - T && (_ = "top"), X === "left" && A.left - P.width - W < T && (_ = "right"), X === "right" && A.right + P.width + W > ee - T && (_ = "left");
      let te = A.top, H = A.left;
      _ === "top" && (te = A.top - P.height - W), _ === "bottom" && (te = A.bottom + W), _ === "left" && (H = A.left - P.width - W), _ === "right" && (H = A.right + W), (_ === "top" || _ === "bottom") && (H = A.left + A.width / 2 - P.width / 2), (_ === "left" || _ === "right") && (te = A.top + A.height / 2 - P.height / 2), S({
        placement: _,
        top: Ot(te, T, U - P.height - T),
        left: Ot(H, T, ee - P.width - T)
      });
    },
    [i]
  );
  ne(() => {
    if (!v) {
      j.current && window.clearTimeout(j.current), j.current = null;
      return;
    }
    const J = window.setTimeout(z, 0), O = () => z();
    return window.addEventListener("resize", O), window.addEventListener("scroll", O, !0), () => {
      window.clearTimeout(J), window.removeEventListener("resize", O), window.removeEventListener("scroll", O, !0);
    };
  }, [v, z]);
  const K = () => {
    if (typeof window < "u" && j.current && window.clearTimeout(j.current), o > 0) {
      j.current = window.setTimeout(() => w(!0), o);
      return;
    }
    w(!0);
  }, F = () => {
    typeof window < "u" && j.current && window.clearTimeout(j.current), j.current = null, w(!1);
  };
  return /* @__PURE__ */ s("span", { ref: M, className: c("inline-flex", b), onMouseEnter: K, onMouseLeave: F, onFocus: K, onBlur: F, children: [
    r,
    N && v && typeof document < "u" ? mt(
      /* @__PURE__ */ e(
        "div",
        {
          ref: L,
          role: "tooltip",
          style: { ...G, position: "fixed", top: m.top, left: m.left },
          className: c(
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
  on as AccentProvider,
  Yt as Badge,
  Yt as BadgeDefault,
  un as Banner,
  un as BannerDefault,
  we as Button,
  we as ButtonDefault,
  fn as Card,
  fn as CardDefault,
  hn as ChipCard,
  hn as ChipCardDefault,
  Pt as DateTimeSelector,
  Pt as DateTimeSelectorDefault,
  Ir as DynamicPanel,
  mn as GridLayout,
  mn as GridLayoutDefault,
  De as Icon,
  bn as Logger,
  bn as LoggerDefault,
  xn as Notification,
  Or as NotificationViewport,
  Or as NotificationViewportDefault,
  Sn as Number,
  Sn as NumberInput,
  Sn as NumberInputDefault,
  gn as Page,
  pn as PageContainer,
  Vr as PageHeader,
  wn as RadioCard,
  wn as RadioCardDefault,
  zt as SelectBox,
  zt as SelectBoxDefault,
  vn as Sidebar,
  vn as SidebarDefault,
  Zr as Switch,
  Zr as SwitchDefault,
  yn as Table,
  yn as TableDefault,
  Gr as Text,
  Nn as TextArea,
  Nn as TextAreaDefault,
  Gr as TextDefault,
  kn as ToggleCard,
  kn as ToggleCardDefault,
  Mn as Tooltip,
  Mn as TooltipDefault,
  Qt as accentTokensToCssVars,
  Gt as defaultAccentKey,
  xr as defaultAccentPresets,
  Jt as defaultAccentTokens,
  gr as useAccent,
  he as useAccentStyle
};
//# sourceMappingURL=index.js.map
