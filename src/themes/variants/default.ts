import type { MarketingDemoVariantTheme } from "../shared";

export const defaultMarketingDemoVariantTheme: MarketingDemoVariantTheme = {
	surfaceStyle: "framed",
	surface:
		"min-w-0 rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.1),transparent_44%),linear-gradient(180deg,rgba(8,17,30,0.95),rgba(5,11,20,0.99))] text-white shadow-[0_28px_84px_rgba(2,12,27,0.28)]",
	heroSurface:
		"min-w-0 rounded-[40px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.1),transparent_22%),linear-gradient(135deg,#07111f_0%,#09182d_44%,#10213a_100%)] text-white shadow-[0_34px_96px_rgba(2,12,27,0.34)]",
	panel:
		"min-w-0 rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
	mediaFrame:
		"min-w-0 overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_54%),linear-gradient(180deg,rgba(9,18,31,0.94),rgba(6,12,22,0.99))]",
	heroOverlay:
		"bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.04),transparent)]",
	eyebrow: "text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-100/68",
	pill:
		"inline-flex rounded-full border border-cyan-300/18 bg-cyan-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-100",
	title:
		"block text-balance text-3xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-4xl xl:text-5xl",
	body: "text-base leading-8 text-slate-300",
	mutedBody: "text-sm leading-7 text-white/65",
	label: "text-[11px] font-semibold uppercase tracking-[0.3em] text-white/45",
	emphasisText: "text-white",
	metaText: "text-cyan-100",
	metaDivider: "text-white/25",
	listItem: "border border-white/6 bg-white/[0.03] text-white/70",
	primaryButton:
		"inline-flex items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/15 px-5 py-3 text-sm font-semibold text-white backdrop-blur",
	secondaryButton:
		"inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/80",
	numberBadge:
		"mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-300/10 text-lg font-semibold text-cyan-100",
	divider: "border-white/10",
	richText: "min-w-0 text-base text-slate-200",
};
