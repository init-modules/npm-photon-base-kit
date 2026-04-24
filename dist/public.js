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
} from "./chunk-QS3WKOFT.js";
import "./chunk-C3ON53CY.js";

// src/public.tsx
import {
  createPhotonKit
} from "@init/photon/public";
var basePublicPhotonModule = {
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
var basePublicPhotonKit = createPhotonKit({
  key: "photon-base",
  label: "Photon Base Kit",
  modules: [basePublicPhotonModule]
});
export {
  basePublicPhotonKit,
  basePublicPhotonModule
};
