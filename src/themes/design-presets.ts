import {
  getWebsiteBuilderSiteDesignPreset,
  websiteBuilderSiteDesignPresets,
  type WebsiteBuilderSiteDesignAppearance,
  type WebsiteBuilderSiteDesignPresetDefinition,
} from "@init-modules/website-builder/server";
import {
  marketingDemoBlockTypes,
  marketingDemoBlockVariants,
  type MarketingDemoBlockVariant,
  type MarketingDemoBlockVariantMap,
} from "./shared";
import { marketingDemoVariantThemes } from "./variant-themes";

const marketingDemoVariantSet = new Set<string>(marketingDemoBlockVariants);

const marketingDemoVariantFallbackByPresetId: Record<
  string,
  MarketingDemoBlockVariant
> = {
  "aurora-current": "default",
  "init-landing": "air",
  "paper-flow": "air",
};

type MarketingDemoSiteDesignCandidate = {
  presetId?: unknown;
  componentVariants?: Record<string, unknown>;
};

const readSiteDesignCandidate = (
  value: unknown,
): MarketingDemoSiteDesignCandidate =>
  typeof value === "object" && value !== null
    ? (value as MarketingDemoSiteDesignCandidate)
    : {};

const resolveSiteVariant = (
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

const resolvePresetVariantMap = (
  preset: Pick<
    WebsiteBuilderSiteDesignPresetDefinition,
    "id" | "componentVariants"
  >,
): MarketingDemoBlockVariantMap | null => {
  const fallbackVariant = marketingDemoVariantFallbackByPresetId[preset.id];
  const entries = marketingDemoBlockTypes.map((blockType) => {
    const resolvedVariant = resolveSiteVariant(
      preset.componentVariants,
      blockType,
    );

    return [blockType, resolvedVariant ?? fallbackVariant] as const;
  });

  if (entries.some(([, variant]) => variant === undefined)) {
    return null;
  }

  return Object.fromEntries(entries) as MarketingDemoBlockVariantMap;
};

export type MarketingDemoDesignPreset = {
  id: string;
  label: string;
  appearance: WebsiteBuilderSiteDesignAppearance;
  description: string;
  componentVariants: MarketingDemoBlockVariantMap;
};

export const marketingDemoDesignPresets: MarketingDemoDesignPreset[] =
  websiteBuilderSiteDesignPresets
    .map((preset) => {
      const componentVariants = resolvePresetVariantMap(preset);

      if (!componentVariants) {
        return null;
      }

      return {
        id: preset.id,
        label: preset.label,
        appearance: preset.appearance,
        description: preset.description,
        componentVariants,
      };
    })
    .filter((preset): preset is MarketingDemoDesignPreset => preset !== null);

export type MarketingDemoDesignPresetId = MarketingDemoDesignPreset["id"];

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
  const mappedVariant = resolveSiteVariant(
    candidate.componentVariants,
    blockType,
  );

  if (mappedVariant) {
    return mappedVariant;
  }

  if (typeof candidate.presetId === "string") {
    const preset = getWebsiteBuilderSiteDesignPreset(candidate.presetId);
    const presetVariantMap = preset
      ? resolvePresetVariantMap(preset)
      : undefined;

    if (presetVariantMap) {
      return presetVariantMap[blockType] ?? "default";
    }
  }

  return "default";
};

export const baseWebsiteBuilderThemes = marketingDemoDesignPresets;
