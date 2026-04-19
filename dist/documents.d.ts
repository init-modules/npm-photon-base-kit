import * as _init_modules_website_builder_server from '@init-modules/website-builder/server';
import { WebsiteBuilderDocument, WebsiteBuilderDocumentsMap } from '@init-modules/website-builder/server';
import { d as MarketingDemoDesignPresetId, n as marketingDemoDesignPresets } from './design-presets-BaqZvTnN.js';
import 'react';

declare const createInitLandingHeaderDocument: () => WebsiteBuilderDocument;
declare const createInitLandingFooterDocument: () => WebsiteBuilderDocument;

type MarketingDemoLocale = "en" | "ru";
type MarketingDemoProfileStarterPreset = {
    id: MarketingDemoDesignPresetId;
    label: string;
    appearance: (typeof marketingDemoDesignPresets)[number]["appearance"];
    description: string;
    starterRecipe: {
        type: "marketing-home-profile";
    };
};
type MarketingDemoDesignTemplateId = "aurora-current-template" | "paper-flow-template" | "init-landing-template";
type MarketingDemoDesignTemplate = {
    id: MarketingDemoDesignTemplateId;
    label: string;
    description: string;
    sourcePresetId: MarketingDemoDesignPresetId;
    snapshotRef: string;
    previewRoute: string;
};
declare const marketingDemoProfileStarterPresets: MarketingDemoProfileStarterPreset[];
type BaseProfileStarterSource = {
    type: "blank";
} | {
    type: "preset";
    sourceId?: string;
} | {
    type: "template";
    sourceId?: string;
};
declare const createBaseStarterProfileTree: (locale: MarketingDemoLocale, source: BaseProfileStarterSource) => {
    pages: {
        home: {
            document: WebsiteBuilderDocument;
            settings: {
                page: {
                    name: string;
                    path: string;
                };
                template: {};
                record: {};
            };
            resources: {};
            seo: {
                page: {
                    title: string;
                };
                template: {};
                record: {};
            };
        };
    };
    site: {
        regions: {
            header: {
                document: WebsiteBuilderDocument;
            };
            footer: {
                document: WebsiteBuilderDocument;
            };
        };
        settings: {
            design: _init_modules_website_builder_server.WebsiteBuilderResolvedSiteDesignSettings;
        } | {
            design?: undefined;
        };
    };
    seo: {
        site: {
            title: string;
        };
    };
    settings: {
        publication: {
            locale: MarketingDemoLocale;
        };
    };
    meta: {
        source: string;
    };
};
declare const createMarketingDemoDesignTemplateDocument: (templateId: MarketingDemoDesignTemplateId, locale?: MarketingDemoLocale) => WebsiteBuilderDocument;
declare const createMarketingDemoDocument: (locale?: MarketingDemoLocale) => WebsiteBuilderDocument;
declare const createMarketingDemoProfileDocumentFromPresetSource: (presetId: MarketingDemoDesignPresetId, locale?: MarketingDemoLocale) => WebsiteBuilderDocument;
declare const createMarketingDemoProfileDocumentFromTemplateSource: (templateId: MarketingDemoDesignTemplateId, locale?: MarketingDemoLocale) => WebsiteBuilderDocument;
declare const marketingDemoDesignTemplates: MarketingDemoDesignTemplate[];

declare const marketingWebsiteBuilderDocuments: WebsiteBuilderDocumentsMap;
declare const baseDesignTemplates: MarketingDemoDesignTemplate[];
declare const baseProfileStarterPresets: MarketingDemoProfileStarterPreset[];
declare const baseWebsiteBuilderDocuments: WebsiteBuilderDocumentsMap;
declare const createBaseWebsiteBuilderDocument: (locale?: MarketingDemoLocale) => WebsiteBuilderDocument;
declare const createBaseDesignTemplateDocument: (templateId: MarketingDemoDesignTemplateId, locale?: MarketingDemoLocale) => WebsiteBuilderDocument;
declare const createBaseProfileDocumentFromPresetSource: (presetId: MarketingDemoDesignPresetId, locale?: MarketingDemoLocale) => WebsiteBuilderDocument;
declare const createBaseProfileDocumentFromTemplateSource: (templateId: MarketingDemoDesignTemplateId, locale?: MarketingDemoLocale) => WebsiteBuilderDocument;

export { type BaseProfileStarterSource, type MarketingDemoDesignTemplate, type MarketingDemoDesignTemplateId, type MarketingDemoLocale, type MarketingDemoProfileStarterPreset, baseDesignTemplates, baseProfileStarterPresets, baseWebsiteBuilderDocuments, createBaseDesignTemplateDocument, createBaseProfileDocumentFromPresetSource, createBaseProfileDocumentFromTemplateSource, createBaseStarterProfileTree, createBaseWebsiteBuilderDocument, createInitLandingFooterDocument, createInitLandingHeaderDocument, createMarketingDemoDesignTemplateDocument, createMarketingDemoDocument, createMarketingDemoProfileDocumentFromPresetSource, createMarketingDemoProfileDocumentFromTemplateSource, marketingDemoDesignPresets, marketingDemoDesignTemplates, marketingDemoProfileStarterPresets, marketingWebsiteBuilderDocuments };
