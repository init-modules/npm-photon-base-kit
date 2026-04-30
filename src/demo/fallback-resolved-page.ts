import type {
	PhotonPageCatalogItem,
	PhotonResolvedPage,
	PhotonSiteRegion,
} from "@init/photon";
import {
	createMarketingDemoDocument,
	type MarketingDemoLocale,
} from "../documents";
import { createBaseDemoSiteShellRegions } from "./site-shell-regions";

/**
 * Builds a resolved-page snapshot from the marketing-demo fixtures shipped
 * inside this kit. Used by photon-nextjs as the SSR fallback when no profile
 * is selected and as the seed snapshot for the in-browser demo workspace.
 *
 * Pure: no fetch, no React. Marketing copy comes from this kit, not from
 * adapter packages.
 */
export const createBaseFallbackResolvedPage = (
	pages: PhotonPageCatalogItem[] = [],
	locale: MarketingDemoLocale = "ru",
): PhotonResolvedPage => {
	const document = createMarketingDemoDocument(locale);
	const regions: Record<string, PhotonSiteRegion> =
		createBaseDemoSiteShellRegions(locale, document.updatedAt);

	return {
		page: {
			key: "home",
			name: document.name,
			description:
				locale === "ru"
					? "Стартовая страница photon."
					: "Photon starter page.",
			group: "Pages",
			kind: "page",
			route: "/",
			routePattern: "/",
			navigationRoute: "/",
			canOpen: true,
			canDuplicate: true,
			isDynamic: false,
		},
		document,
		resources: {},
		pageSettings: {
			page: {
				name: document.name,
				path: document.route,
			},
		},
		runtimeData: {},
		site: {
			settings: {},
			regions,
		},
		pages:
			pages.length > 0
				? pages
				: [
						{
							key: "home",
							name: document.name,
							description: null,
							group: "Pages",
							kind: "page",
							route: "/",
							routePattern: "/",
							navigationRoute: "/",
							canOpen: true,
							canDuplicate: true,
							isDynamic: false,
						},
					],
	};
};
