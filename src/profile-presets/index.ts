export type {
	MarketingDemoDesignTemplate,
	MarketingDemoDesignTemplateId,
	MarketingDemoProfileStarterPreset,
} from "../documents";
export {
	baseDesignTemplates,
	baseProfileStarterPresets,
	createBaseDesignTemplateDocument,
	createBaseProfileDocumentFromPresetSource,
	createBaseProfileDocumentFromTemplateSource,
} from "../documents";
export {
	loadPhotonProfileCatalog,
	photonBaseProfileCatalogFallback,
} from "./load";
