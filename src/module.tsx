"use client";

import {
	createPhotonKit,
	type PhotonInstallableKit,
	type PhotonModule,
} from "@init/photon/public";
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
	richTextDefinition,
} from "./blocks";
import {
	createMarketingDemoDesignTemplateDocument,
	createMarketingDemoDocument,
	createMarketingDemoProfileDocumentFromPresetSource,
	createMarketingDemoProfileDocumentFromTemplateSource,
	marketingDemoDesignTemplates,
	marketingDemoProfileStarterPresets,
	marketingPhotonDocuments,
} from "./documents";
import { marketingDemoDesignPresets } from "./themes";

export const marketingPhotonModule: PhotonModule = {
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
		initLandingFooterDefinition,
	],
};

export {
	createMarketingDemoDesignTemplateDocument,
	createMarketingDemoDocument,
	createMarketingDemoProfileDocumentFromPresetSource,
	createMarketingDemoProfileDocumentFromTemplateSource,
	marketingDemoDesignPresets,
	marketingDemoDesignTemplates,
	marketingDemoProfileStarterPresets,
	marketingPhotonDocuments,
};

export const marketingPhotonKit: PhotonInstallableKit =
	createPhotonKit({
		key: "photon-base",
		label: "Photon Base Kit",
		modules: [marketingPhotonModule],
		documents: marketingPhotonDocuments,
	});

export const basePhotonModule = marketingPhotonModule;
export const basePhotonKit = marketingPhotonKit;
