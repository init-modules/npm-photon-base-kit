import { CSSProperties } from 'react';
import { WebsiteBuilderSiteDesignAppearance } from '@init-modules/website-builder/server';

declare const marketingDemoBlockVariants: readonly ["default", "air"];
type MarketingDemoBlockVariant = (typeof marketingDemoBlockVariants)[number];
declare const marketingDemoBlockVariantOptions: {
    label: string;
    value: string;
}[];
type MarketingDemoVariantTheme = {
    surfaceStyle: "framed" | "frameless";
    surface: string;
    heroSurface: string;
    panel: string;
    mediaFrame: string;
    heroOverlay: string;
    eyebrow: string;
    pill: string;
    title: string;
    body: string;
    mutedBody: string;
    label: string;
    emphasisText: string;
    metaText: string;
    metaDivider: string;
    listItem: string;
    primaryButton: string;
    secondaryButton: string;
    numberBadge: string;
    divider: string;
    richText: string;
};
declare const getMarketingDemoFramelessBleedStyle: (frameless: boolean, allowBleed?: boolean) => CSSProperties | undefined;
type MarketingDemoBlockVariantMap = Record<string, MarketingDemoBlockVariant>;
declare const marketingDemoBlockTypes: readonly ["hero-spotlight", "proof-strip", "feature-grid", "media-frame", "media-gallery", "rich-text", "publication-spotlight", "command-center-cta"];
type MarketingDemoBlockType = (typeof marketingDemoBlockTypes)[number];
declare const createMarketingDemoVariantMap: (variant: MarketingDemoBlockVariant) => MarketingDemoBlockVariantMap;

type MarketingDemoDesignPreset = {
    id: string;
    label: string;
    appearance: WebsiteBuilderSiteDesignAppearance;
    description: string;
    componentVariants: MarketingDemoBlockVariantMap;
};
declare const marketingDemoDesignPresets: MarketingDemoDesignPreset[];
type MarketingDemoDesignPresetId = MarketingDemoDesignPreset["id"];
declare const getMarketingDemoVariantTheme: (variant: MarketingDemoBlockVariant) => MarketingDemoVariantTheme;
declare const isMarketingDemoFramelessVariant: (variant: MarketingDemoBlockVariant) => boolean;
declare const resolveMarketingDemoBlockVariant: ({ blockType, explicitVariant, siteDesign, }: {
    blockType: string;
    explicitVariant?: unknown;
    siteDesign?: unknown;
}) => MarketingDemoBlockVariant;
declare const baseWebsiteBuilderThemes: MarketingDemoDesignPreset[];

export { type MarketingDemoBlockType as M, type MarketingDemoBlockVariant as a, type MarketingDemoBlockVariantMap as b, type MarketingDemoDesignPreset as c, type MarketingDemoDesignPresetId as d, type MarketingDemoVariantTheme as e, baseWebsiteBuilderThemes as f, createMarketingDemoVariantMap as g, getMarketingDemoFramelessBleedStyle as h, getMarketingDemoVariantTheme as i, isMarketingDemoFramelessVariant as j, marketingDemoBlockVariantOptions as k, marketingDemoBlockVariants as l, marketingDemoBlockTypes as m, marketingDemoDesignPresets as n, resolveMarketingDemoBlockVariant as r };
