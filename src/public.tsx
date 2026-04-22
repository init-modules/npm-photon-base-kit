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

export const basePublicPhotonModule: PhotonModule = {
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

export const basePublicPhotonKit: PhotonInstallableKit =
	createPhotonKit({
		key: "photon-base",
		label: "Photon Base Kit",
		modules: [basePublicPhotonModule],
	});
