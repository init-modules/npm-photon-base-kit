"use client";
import {
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
} from "./chunk-7JTRUFAR.js";
import "./chunk-ZZUPCLBS.js";

// src/public.tsx
import {
  createWebsiteBuilderKit
} from "@init-modules/website-builder/public";
var basePublicWebsiteBuilderModule = {
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
var basePublicWebsiteBuilderKit = createWebsiteBuilderKit({
  key: "website-builder-base",
  label: "Website Builder Base Kit",
  modules: [basePublicWebsiteBuilderModule]
});
export {
  basePublicWebsiteBuilderKit,
  basePublicWebsiteBuilderModule
};
