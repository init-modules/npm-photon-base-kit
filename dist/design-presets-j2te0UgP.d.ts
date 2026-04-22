import { PhotonSiteDesignAppearance } from '@init/photon/server';
import { CSSProperties } from 'react';

declare const marketingDemoBlockVariants: readonly ["default", "air"];
type MarketingDemoBlockVariant = (typeof marketingDemoBlockVariants)[number];
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
declare const defaultMarketingDemoVariantTheme: MarketingDemoVariantTheme;
declare const airMarketingDemoVariantTheme: MarketingDemoVariantTheme;
declare const marketingDemoVariantThemes: Record<MarketingDemoBlockVariant, MarketingDemoVariantTheme>;
declare const resolveMarketingDemoSiteVariant: (componentVariants: Record<string, unknown> | undefined, blockType: string) => MarketingDemoBlockVariant | null;
declare const getMarketingDemoVariantTheme: (variant: MarketingDemoBlockVariant) => MarketingDemoVariantTheme;
declare const isMarketingDemoFramelessVariant: (variant: MarketingDemoBlockVariant) => boolean;

type MarketingDemoDesignPreset = {
    id: string;
    label: string;
    appearance: PhotonSiteDesignAppearance;
    description: string;
    componentVariants: MarketingDemoBlockVariantMap;
};
declare const marketingDemoDesignPresets: MarketingDemoDesignPreset[];
type MarketingDemoDesignPresetId = MarketingDemoDesignPreset["id"];
declare const resolveMarketingDemoBlockVariant: ({ blockType, explicitVariant, siteDesign, }: {
    blockType: string;
    explicitVariant?: unknown;
    siteDesign?: unknown;
}) => MarketingDemoBlockVariant;
declare const basePhotonThemes: MarketingDemoDesignPreset[];

export { type MarketingDemoBlockType as M, type MarketingDemoBlockVariant as a, type MarketingDemoBlockVariantMap as b, type MarketingDemoDesignPreset as c, type MarketingDemoDesignPresetId as d, type MarketingDemoVariantTheme as e, airMarketingDemoVariantTheme as f, basePhotonThemes as g, createMarketingDemoVariantMap as h, defaultMarketingDemoVariantTheme as i, getMarketingDemoFramelessBleedStyle as j, getMarketingDemoVariantTheme as k, isMarketingDemoFramelessVariant as l, marketingDemoBlockTypes as m, marketingDemoBlockVariants as n, marketingDemoDesignPresets as o, marketingDemoVariantThemes as p, resolveMarketingDemoSiteVariant as q, resolveMarketingDemoBlockVariant as r };
