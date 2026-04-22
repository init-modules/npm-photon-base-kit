import { getPhotonSurfaceModeStyle } from "@init/photon/public";
import type { CSSProperties } from "react";

export const marketingDemoBlockVariants = ["default", "air"] as const;

export type MarketingDemoBlockVariant =
	(typeof marketingDemoBlockVariants)[number];

export type MarketingDemoVariantTheme = {
	surfaceStyle: "framed" | "frameless";
	surface: string;
	heroSurface: string;
	panel: string;
	mediaFrame: string;
	heroOverlay: string;
	eyebrow: string;
	pill: string;
	title: string;
	body: string;
	mutedBody: string;
	label: string;
	emphasisText: string;
	metaText: string;
	metaDivider: string;
	listItem: string;
	primaryButton: string;
	secondaryButton: string;
	numberBadge: string;
	divider: string;
	richText: string;
};

export const getMarketingDemoFramelessBleedStyle = (
	frameless: boolean,
	allowBleed = true,
): CSSProperties | undefined =>
	frameless && allowBleed
		? getPhotonSurfaceModeStyle("bleed")
		: undefined;

export type MarketingDemoBlockVariantMap = Record<
	string,
	MarketingDemoBlockVariant
>;

export const marketingDemoBlockTypes = [
	"hero-spotlight",
	"proof-strip",
	"feature-grid",
	"media-frame",
	"media-gallery",
	"rich-text",
	"publication-spotlight",
	"command-center-cta",
] as const;

export type MarketingDemoBlockType = (typeof marketingDemoBlockTypes)[number];

export const createMarketingDemoVariantMap = (
	variant: MarketingDemoBlockVariant,
): MarketingDemoBlockVariantMap => ({
	...Object.fromEntries(
		marketingDemoBlockTypes.map((blockType) => [blockType, variant]),
	),
});

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
	eyebrow:
		"text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-100/68",
	pill: "inline-flex rounded-full border border-cyan-300/18 bg-cyan-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-100",
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
	pill: "inline-flex rounded-full bg-white/88 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-teal-700 shadow-[0_8px_22px_rgba(15,118,110,0.08)]",
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

export const marketingDemoVariantThemes: Record<
	MarketingDemoBlockVariant,
	MarketingDemoVariantTheme
> = {
	default: defaultMarketingDemoVariantTheme,
	air: airMarketingDemoVariantTheme,
};

const marketingDemoVariantSet = new Set<string>(marketingDemoBlockVariants);

type MarketingDemoSiteDesignCandidate = {
	componentVariants?: Record<string, unknown>;
};

const readSiteDesignCandidate = (
	value: unknown,
): MarketingDemoSiteDesignCandidate =>
	typeof value === "object" && value !== null
		? (value as MarketingDemoSiteDesignCandidate)
		: {};

export const resolveMarketingDemoSiteVariant = (
	componentVariants: Record<string, unknown> | undefined,
	blockType: string,
): MarketingDemoBlockVariant | null => {
	if (!componentVariants) {
		return null;
	}

	const candidateKeys = [
		`marketing-demo/${blockType}`,
		`marketing-demo.${blockType}`,
		blockType,
	];

	for (const key of candidateKeys) {
		const value = componentVariants[key];

		if (typeof value === "string" && marketingDemoVariantSet.has(value)) {
			return value as MarketingDemoBlockVariant;
		}
	}

	return null;
};

export const getMarketingDemoVariantTheme = (
	variant: MarketingDemoBlockVariant,
) => marketingDemoVariantThemes[variant];

export const isMarketingDemoFramelessVariant = (
	variant: MarketingDemoBlockVariant,
) => marketingDemoVariantThemes[variant].surfaceStyle === "frameless";

export const resolveMarketingDemoBlockVariant = ({
	blockType,
	explicitVariant,
	siteDesign,
}: {
	blockType: string;
	explicitVariant?: unknown;
	siteDesign?: unknown;
}): MarketingDemoBlockVariant => {
	if (
		typeof explicitVariant === "string" &&
		explicitVariant !== "default" &&
		marketingDemoVariantSet.has(explicitVariant)
	) {
		return explicitVariant as MarketingDemoBlockVariant;
	}

	const candidate = readSiteDesignCandidate(siteDesign);
	const mappedVariant = resolveMarketingDemoSiteVariant(
		candidate.componentVariants,
		blockType,
	);

	return mappedVariant ?? "default";
};
