import {
	clonePhotonValue,
	type PhotonDocument,
} from "@init/photon/server";
import type { MarketingDemoDesignPresetId } from "../themes";
import { createInitLandingDocument } from "./scenarios/init-landing";
import { createPaperFlowDocument } from "./scenarios/paper-flow";
import type { MarketingDemoLocale } from "./shared";

export const createPresetScenarioDocument = (
	presetId: MarketingDemoDesignPresetId,
	baseDocument: PhotonDocument,
	locale: MarketingDemoLocale,
): PhotonDocument => {
	switch (presetId) {
		case "init-landing":
			return createInitLandingDocument(baseDocument, locale);
		case "paper-flow":
			return createPaperFlowDocument(baseDocument, locale);
		default:
			return clonePhotonValue(baseDocument);
	}
};
