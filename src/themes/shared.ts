import type { CSSProperties } from "react";
import { getWebsiteBuilderSurfaceModeStyle } from "@init-modules/website-builder/shared";

export const marketingDemoBlockVariants = ["default", "air"] as const;

export type MarketingDemoBlockVariant =
  (typeof marketingDemoBlockVariants)[number];

export const marketingDemoBlockVariantOptions = [
  { label: "Aurora current", value: "default" },
  { label: "Paper flow", value: "air" },
];

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
    ? getWebsiteBuilderSurfaceModeStyle("bleed")
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
