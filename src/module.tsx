"use client";

import {
  createWebsiteBuilderKit,
  type WebsiteBuilderInstallableKit,
  type WebsiteBuilderModule,
} from "@init-modules/website-builder/public";
import {
  createMarketingDemoDocument,
  createMarketingDemoDesignTemplateDocument,
  createMarketingDemoProfileDocumentFromPresetSource,
  createMarketingDemoProfileDocumentFromTemplateSource,
  marketingDemoDesignTemplates,
  marketingDemoProfileStarterPresets,
  marketingWebsiteBuilderDocuments,
} from "./documents";
import {
  commandCenterCtaDefinition,
  breadcrumbsDefinition,
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
  richTextDefinition,
} from "./blocks";
import { marketingDemoDesignPresets } from "./themes";

export const marketingWebsiteBuilderModule: WebsiteBuilderModule = {
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
    initLandingFooterDefinition,
  ],
};

export { createMarketingDemoDocument, marketingWebsiteBuilderDocuments };
export {
  createMarketingDemoDesignTemplateDocument,
  createMarketingDemoProfileDocumentFromPresetSource,
  createMarketingDemoProfileDocumentFromTemplateSource,
  marketingDemoDesignPresets,
  marketingDemoDesignTemplates,
  marketingDemoProfileStarterPresets,
};

export const marketingWebsiteBuilderKit: WebsiteBuilderInstallableKit =
  createWebsiteBuilderKit({
    key: "website-builder-base",
    label: "Website Builder Base Kit",
    modules: [marketingWebsiteBuilderModule],
    documents: marketingWebsiteBuilderDocuments,
  });

export const baseWebsiteBuilderModule = marketingWebsiteBuilderModule;
export const baseWebsiteBuilderKit = marketingWebsiteBuilderKit;
