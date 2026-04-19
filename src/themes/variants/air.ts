import type { MarketingDemoVariantTheme } from "../shared";

export const airMarketingDemoVariantTheme: MarketingDemoVariantTheme = {
	surfaceStyle: "frameless",
	surface: "min-w-0 bg-transparent text-stone-950 shadow-none",
	heroSurface:
		"min-w-0 bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.32),rgba(238,246,243,0.9))] text-stone-950 shadow-none",
	panel: "min-w-0 rounded-none border-0 bg-transparent shadow-none",
	mediaFrame:
		"min-w-0 overflow-hidden rounded-[32px] bg-[#eef4f1] shadow-[0_18px_50px_rgba(70,87,84,0.08)]",
	heroOverlay:
		"bg-[linear-gradient(120deg,rgba(255,255,255,0.55),transparent_34%,rgba(15,118,110,0.06)_100%)]",
	eyebrow:
		"text-[11px] font-semibold uppercase tracking-[0.34em] text-teal-700/72",
	pill:
		"inline-flex rounded-full bg-white/88 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-teal-700 shadow-[0_8px_22px_rgba(15,118,110,0.08)]",
	title:
		"block text-balance font-serif text-3xl font-medium leading-[1] tracking-[-0.05em] text-stone-950 sm:text-5xl xl:text-[4rem]",
	body: "text-base leading-8 text-stone-700",
	mutedBody: "text-sm leading-7 text-stone-700/85",
	label: "text-[11px] font-semibold uppercase tracking-[0.3em] text-stone-500",
	emphasisText: "font-serif text-stone-950",
	metaText: "text-teal-700/76",
	metaDivider: "text-stone-300",
	listItem: "bg-transparent text-stone-700",
	primaryButton:
		"inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-stone-50 shadow-[0_16px_40px_rgba(28,25,23,0.12)]",
	secondaryButton:
		"inline-flex items-center justify-center rounded-full bg-white/82 px-5 py-3 text-sm font-semibold text-stone-700 shadow-[0_10px_28px_rgba(120,113,108,0.08)]",
	numberBadge:
		"mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg font-semibold text-teal-700 shadow-[0_10px_28px_rgba(15,118,110,0.08)]",
	divider: "border-stone-200/55",
	richText: "min-w-0 text-base text-stone-800",
};
