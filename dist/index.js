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
} from "./chunk-OV7J4UH6.js";
import "./chunk-JF3FEQHL.js";
import {
  baseDesignTemplates,
  baseProfileStarterPresets,
  baseWebsiteBuilderDocuments,
  createBaseDesignTemplateDocument,
  createBaseProfileDocumentFromPresetSource,
  createBaseProfileDocumentFromTemplateSource,
  createBaseStarterProfileTree,
  createBaseWebsiteBuilderDocument,
  createInitLandingFooterDocument,
  createInitLandingHeaderDocument,
  createMarketingDemoDesignTemplateDocument,
  createMarketingDemoDocument,
  createMarketingDemoProfileDocumentFromPresetSource,
  createMarketingDemoProfileDocumentFromTemplateSource,
  marketingDemoDesignTemplates,
  marketingDemoProfileStarterPresets,
  marketingWebsiteBuilderDocuments
} from "./chunk-5FA5I5NM.js";
import {
  baseWebsiteBuilderThemes,
  marketingDemoDesignPresets,
  resolveMarketingDemoBlockVariant
} from "./chunk-7VB5UP22.js";
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
} from "./chunk-ZZUPCLBS.js";

// src/module.tsx
import {
  createWebsiteBuilderKit
} from "@init-modules/website-builder/public";
var marketingWebsiteBuilderModule = {
  module: "marketing-demo",
  label: "Website Builder Base Kit",
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
var marketingWebsiteBuilderKit = createWebsiteBuilderKit({
  key: "website-builder-base",
  label: "Website Builder Base Kit",
  modules: [marketingWebsiteBuilderModule],
  documents: marketingWebsiteBuilderDocuments
});
var baseWebsiteBuilderModule = marketingWebsiteBuilderModule;
var baseWebsiteBuilderKit = marketingWebsiteBuilderKit;
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
  baseProfileStarterPresets,
  baseWebsiteBuilderDocuments,
  baseWebsiteBuilderKit,
  baseWebsiteBuilderModule,
  baseWebsiteBuilderThemes,
  createBaseDesignTemplateDocument,
  createBaseProfileDocumentFromPresetSource,
  createBaseProfileDocumentFromTemplateSource,
  createBaseStarterProfileTree,
  createBaseWebsiteBuilderDocument,
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
  marketingWebsiteBuilderDocuments,
  marketingWebsiteBuilderKit,
  marketingWebsiteBuilderModule,
  resolveMarketingDemoBlockVariant,
  resolveMarketingDemoSiteVariant
};
