import type { PhotonDocument } from "@init/photon/server";
import { initLandingContent } from "../init-landing-content";
import { cloneBaseDocument } from "../shared";

export const createInitLandingDocument = (
	_baseDocument: PhotonDocument,
	_locale: "en" | "ru",
): PhotonDocument => ({
	...cloneBaseDocument(_baseDocument),
	id: "photon-home",
	name: "init landing",
	route: "/",
	updatedAt: "2026-04-13T00:00:00.000Z",
	blocks: [
		{
			id: "init-landing-hero",
			module: "marketing-demo",
			type: "init-landing-hero",
			props: initLandingContent.hero,
		},
		{
			id: "init-landing-services",
			module: "marketing-demo",
			type: "init-landing-services",
			props: initLandingContent.services,
		},
		{
			id: "init-landing-pricing",
			module: "marketing-demo",
			type: "init-landing-pricing",
			props: initLandingContent.pricing,
		},
		{
			id: "init-landing-process",
			module: "marketing-demo",
			type: "init-landing-process",
			props: initLandingContent.process,
		},
		{
			id: "init-landing-why-us",
			module: "marketing-demo",
			type: "init-landing-why-us",
			props: initLandingContent.whyUs,
		},
		{
			id: "init-landing-testimonials",
			module: "marketing-demo",
			type: "init-landing-testimonials",
			props: initLandingContent.testimonials,
		},
		{
			id: "init-landing-cta",
			module: "marketing-demo",
			type: "init-landing-cta",
			props: initLandingContent.cta,
		},
	],
});

export const createInitLandingHeaderDocument = (): PhotonDocument => ({
	id: "photon-site-header",
	name: "Init Landing Header",
	route: "/_site/header",
	updatedAt: "2026-04-13T00:00:00.000Z",
	blocks: [
		{
			id: "init-landing-header",
			module: "marketing-demo",
			type: "init-landing-header",
			props: initLandingContent.header,
		},
	],
});

export const createInitLandingFooterDocument = (): PhotonDocument => ({
	id: "photon-site-footer",
	name: "Init Landing Footer",
	route: "/_site/footer",
	updatedAt: "2026-04-13T00:00:00.000Z",
	blocks: [
		{
			id: "init-landing-footer",
			module: "marketing-demo",
			type: "init-landing-footer",
			props: initLandingContent.footer,
		},
	],
});
