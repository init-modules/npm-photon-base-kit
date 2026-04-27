import * as _init_photon_server from '@init/photon/server';
import { PhotonDocument, PhotonDocumentsMap } from '@init/photon/server';
import { d as MarketingDemoDesignPresetId, o as marketingDemoDesignPresets } from './design-presets-j2te0UgP.js';
import 'react';

declare const createInitLandingHeaderDocument: () => PhotonDocument;
declare const createInitLandingFooterDocument: () => PhotonDocument;

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
type MarketingDemoDesignTemplateId = "aurora-current-template" | "init-landing-template";
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
            document: PhotonDocument;
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
                document: PhotonDocument;
            };
            footer: {
                document: PhotonDocument;
            };
        };
        settings: {
            design: _init_photon_server.PhotonResolvedSiteDesignSettings;
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
declare const createMarketingDemoDesignTemplateDocument: (templateId: MarketingDemoDesignTemplateId, locale?: MarketingDemoLocale) => PhotonDocument;
declare const createMarketingDemoDocument: (locale?: MarketingDemoLocale) => PhotonDocument;
declare const createMarketingDemoProfileDocumentFromPresetSource: (presetId: MarketingDemoDesignPresetId, locale?: MarketingDemoLocale) => PhotonDocument;
declare const createMarketingDemoProfileDocumentFromTemplateSource: (templateId: MarketingDemoDesignTemplateId, locale?: MarketingDemoLocale) => PhotonDocument;
declare const marketingDemoDesignTemplates: MarketingDemoDesignTemplate[];

declare const createMarketingDemoNotFoundDocument: (locale?: MarketingDemoLocale) => PhotonDocument;
declare const marketingPhotonDocuments: PhotonDocumentsMap;
declare const baseDesignTemplates: MarketingDemoDesignTemplate[];
declare const baseProfileStarterPresets: MarketingDemoProfileStarterPreset[];
declare const basePhotonDocuments: PhotonDocumentsMap;
declare const createBasePhotonDocument: (locale?: MarketingDemoLocale) => PhotonDocument;
declare const createBaseDesignTemplateDocument: (templateId: MarketingDemoDesignTemplateId, locale?: MarketingDemoLocale) => PhotonDocument;
declare const createBaseProfileDocumentFromPresetSource: (presetId: MarketingDemoDesignPresetId, locale?: MarketingDemoLocale) => PhotonDocument;
declare const createBaseProfileDocumentFromTemplateSource: (templateId: MarketingDemoDesignTemplateId, locale?: MarketingDemoLocale) => PhotonDocument;

export { type BaseProfileStarterSource, type MarketingDemoDesignTemplate, type MarketingDemoDesignTemplateId, type MarketingDemoLocale, type MarketingDemoProfileStarterPreset, baseDesignTemplates, basePhotonDocuments, baseProfileStarterPresets, createBaseDesignTemplateDocument, createBasePhotonDocument, createBaseProfileDocumentFromPresetSource, createBaseProfileDocumentFromTemplateSource, createBaseStarterProfileTree, createInitLandingFooterDocument, createInitLandingHeaderDocument, createMarketingDemoDesignTemplateDocument, createMarketingDemoDocument, createMarketingDemoNotFoundDocument, createMarketingDemoProfileDocumentFromPresetSource, createMarketingDemoProfileDocumentFromTemplateSource, marketingDemoDesignPresets, marketingDemoDesignTemplates, marketingDemoProfileStarterPresets, marketingPhotonDocuments };
