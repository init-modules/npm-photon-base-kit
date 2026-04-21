import {
	cloneWebsiteBuilderValue,
	type WebsiteBuilderDocument,
} from "@init-modules/website-builder/server";
import type { MarketingDemoDesignPresetId } from "../themes";
import { createInitLandingDocument } from "./scenarios/init-landing";
import { createPaperFlowDocument } from "./scenarios/paper-flow";
import type { MarketingDemoLocale } from "./shared";

export const createPresetScenarioDocument = (
	presetId: MarketingDemoDesignPresetId,
	baseDocument: WebsiteBuilderDocument,
	locale: MarketingDemoLocale,
): WebsiteBuilderDocument => {
	switch (presetId) {
		case "init-landing":
			return createInitLandingDocument(baseDocument, locale);
		case "paper-flow":
			return createPaperFlowDocument(baseDocument, locale);
		default:
			return cloneWebsiteBuilderValue(baseDocument);
	}
};
