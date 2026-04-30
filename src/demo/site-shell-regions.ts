import type { PhotonDocument, PhotonSiteRegion } from "@init/photon";
import {
	createBaseStarterProfileTree,
	type MarketingDemoLocale,
} from "../documents";

const localeLabel = (locale: MarketingDemoLocale, ru: string, en: string) =>
	locale === "ru" ? ru : en;

/**
 * Returns the demo header/footer site-shell regions in full
 * `PhotonSiteRegion` shape (with key/label/order/lockedOnCanvas).
 *
 * Internally delegates to {@link createBaseStarterProfileTree} so the demo
 * region documents stay in lockstep with the starter-profile output —
 * marketing copy lives in the base kit, not in adapter packages.
 */
export const createBaseDemoSiteShellRegions = (
	locale: MarketingDemoLocale,
	updatedAt: string,
): Record<string, PhotonSiteRegion> => {
	const starterTree = createBaseStarterProfileTree(locale, { type: "blank" });
	const sourceRegions = (starterTree.site.regions ?? {}) as Record<
		string,
		{ document: PhotonDocument }
	>;
	const headerDocument = sourceRegions.header?.document;
	const footerDocument = sourceRegions.footer?.document;

	const regions: Record<string, PhotonSiteRegion> = {};

	if (headerDocument) {
		regions.header = {
			key: "header",
			label: localeLabel(locale, "Хедер", "Header"),
			order: 0,
			lockedOnCanvas: true,
			document: { ...headerDocument, updatedAt },
		};
	}

	if (footerDocument) {
		regions.footer = {
			key: "footer",
			label: localeLabel(locale, "Футер", "Footer"),
			order: 100,
			lockedOnCanvas: true,
			document: { ...footerDocument, updatedAt },
		};
	}

	return regions;
};
