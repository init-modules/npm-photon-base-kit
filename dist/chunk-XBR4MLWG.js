import {
  marketingDemoBlockTypes,
  marketingDemoBlockVariants,
  resolveMarketingDemoSiteVariant
} from "./chunk-C3ON53CY.js";

// src/themes/design-presets.ts
import {
  getPhotonSiteDesignPreset,
  photonSiteDesignPresets
} from "@init/photon/server";
var marketingDemoVariantSet = new Set(marketingDemoBlockVariants);
var marketingDemoVariantFallbackByPresetId = {
  "aurora-current": "default",
  "init-landing": "air"
};
var readSiteDesignCandidate = (value) => typeof value === "object" && value !== null ? value : {};
var resolvePresetVariantMap = (preset) => {
  const fallbackVariant = marketingDemoVariantFallbackByPresetId[preset.id];
  const entries = marketingDemoBlockTypes.map((blockType) => {
    const resolvedVariant = resolveMarketingDemoSiteVariant(
      preset.componentVariants,
      blockType
    );
    return [blockType, resolvedVariant ?? fallbackVariant];
  });
  if (entries.some(([, variant]) => variant === void 0)) {
    return null;
  }
  return Object.fromEntries(entries);
};
var marketingDemoDesignPresets = photonSiteDesignPresets.map((preset) => {
  const componentVariants = resolvePresetVariantMap(preset);
  if (!componentVariants) {
    return null;
  }
  return {
    id: preset.id,
    label: preset.label,
    appearance: preset.appearance,
    description: preset.description,
    componentVariants
  };
}).filter((preset) => preset !== null);
var resolveMarketingDemoBlockVariant = ({
  blockType,
  explicitVariant,
  siteDesign
}) => {
  if (typeof explicitVariant === "string" && explicitVariant !== "default" && marketingDemoVariantSet.has(explicitVariant)) {
    return explicitVariant;
  }
  const candidate = readSiteDesignCandidate(siteDesign);
  const mappedVariant = resolveMarketingDemoSiteVariant(
    candidate.componentVariants,
    blockType
  );
  if (mappedVariant) {
    return mappedVariant;
  }
  if (typeof candidate.presetId === "string") {
    const preset = getPhotonSiteDesignPreset(candidate.presetId);
    const presetVariantMap = preset ? resolvePresetVariantMap(preset) : void 0;
    if (presetVariantMap) {
      return presetVariantMap[blockType] ?? "default";
    }
  }
  return "default";
};
var basePhotonThemes = marketingDemoDesignPresets;

export {
  marketingDemoDesignPresets,
  resolveMarketingDemoBlockVariant,
  basePhotonThemes
};
