import {
  InitCheckListItem,
  InitStatWidget,
  InitStatusPill,
  InitTestimonialCard,
  InitTestimonialProfile,
  InitTypedText,
  RichText,
  breadcrumbsDefinition,
  commandCenterCtaDefinition,
  featureGridDefinition,
  heroSpotlightDefinition,
  initLandingCtaDefinition,
  initLandingFooterDefinition,
  initLandingHeaderDefinition,
  initLandingHeroDefinition,
  initLandingPricingDefinition,
  initLandingProcessDefinition,
  initLandingServicesDefinition,
  initLandingTestimonialsDefinition,
  initLandingWhyUsDefinition,
  mediaFrameDefinition,
  mediaGalleryDefinition,
  proofStripDefinition,
  publicationSpotlightDefinition,
  richTextDefinition
} from "./chunk-KU7IJI5N.js";
import "./chunk-JF3FEQHL.js";
import {
  baseDesignTemplates,
  basePhotonDocuments,
  baseProfileStarterPresets,
  createBaseDesignTemplateDocument,
  createBasePhotonDocument,
  createBaseProfileDocumentFromPresetSource,
  createBaseProfileDocumentFromTemplateSource,
  createBaseStarterProfileTree,
  createInitLandingFooterDocument,
  createInitLandingHeaderDocument,
  createMarketingDemoDesignTemplateDocument,
  createMarketingDemoDocument,
  createMarketingDemoProfileDocumentFromPresetSource,
  createMarketingDemoProfileDocumentFromTemplateSource,
  marketingDemoDesignTemplates,
  marketingDemoProfileStarterPresets,
  marketingPhotonDocuments
} from "./chunk-OKGMI2PK.js";
import {
  basePhotonThemes,
  marketingDemoDesignPresets,
  resolveMarketingDemoBlockVariant
} from "./chunk-OIRP3NX4.js";
import {
  airMarketingDemoVariantTheme,
  createMarketingDemoVariantMap,
  defaultMarketingDemoVariantTheme,
  getMarketingDemoFramelessBleedStyle,
  getMarketingDemoVariantTheme,
  isMarketingDemoFramelessVariant,
  marketingDemoBlockTypes,
  marketingDemoBlockVariantOptions,
  marketingDemoBlockVariants,
  marketingDemoVariantThemes,
  resolveMarketingDemoSiteVariant
} from "./chunk-C3ON53CY.js";

// src/module.tsx
import {
  createPhotonKit
} from "@init/photon/public";
var marketingPhotonModule = {
  module: "marketing-demo",
  label: "Photon Base Kit",
  labelKey: "marketingDemoKit.module.label",
  version: "0.1.0",
  blocks: [
    heroSpotlightDefinition,
    proofStripDefinition,
    featureGridDefinition,
    mediaFrameDefinition,
    mediaGalleryDefinition,
    richTextDefinition,
    publicationSpotlightDefinition,
    commandCenterCtaDefinition,
    breadcrumbsDefinition,
    initLandingHeaderDefinition,
    initLandingHeroDefinition,
    initLandingServicesDefinition,
    initLandingPricingDefinition,
    initLandingProcessDefinition,
    initLandingWhyUsDefinition,
    initLandingTestimonialsDefinition,
    initLandingCtaDefinition,
    initLandingFooterDefinition
  ]
};
var marketingPhotonKit = createPhotonKit({
  key: "photon-base",
  label: "Photon Base Kit",
  modules: [marketingPhotonModule],
  documents: marketingPhotonDocuments
});
var basePhotonModule = marketingPhotonModule;
var basePhotonKit = marketingPhotonKit;
export {
  InitCheckListItem,
  InitStatWidget,
  InitStatusPill,
  InitTestimonialCard,
  InitTestimonialProfile,
  InitTypedText,
  RichText,
  airMarketingDemoVariantTheme,
  baseDesignTemplates,
  basePhotonDocuments,
  basePhotonKit,
  basePhotonModule,
  basePhotonThemes,
  baseProfileStarterPresets,
  createBaseDesignTemplateDocument,
  createBasePhotonDocument,
  createBaseProfileDocumentFromPresetSource,
  createBaseProfileDocumentFromTemplateSource,
  createBaseStarterProfileTree,
  createInitLandingFooterDocument,
  createInitLandingHeaderDocument,
  createMarketingDemoDesignTemplateDocument,
  createMarketingDemoDocument,
  createMarketingDemoProfileDocumentFromPresetSource,
  createMarketingDemoProfileDocumentFromTemplateSource,
  createMarketingDemoVariantMap,
  defaultMarketingDemoVariantTheme,
  getMarketingDemoFramelessBleedStyle,
  getMarketingDemoVariantTheme,
  isMarketingDemoFramelessVariant,
  marketingDemoBlockTypes,
  marketingDemoBlockVariantOptions,
  marketingDemoBlockVariants,
  marketingDemoDesignPresets,
  marketingDemoDesignTemplates,
  marketingDemoProfileStarterPresets,
  marketingDemoVariantThemes,
  marketingPhotonDocuments,
  marketingPhotonKit,
  marketingPhotonModule,
  resolveMarketingDemoBlockVariant,
  resolveMarketingDemoSiteVariant
};
