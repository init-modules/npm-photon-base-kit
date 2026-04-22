export { BaseProfileStarterSource, MarketingDemoDesignTemplate, MarketingDemoDesignTemplateId, MarketingDemoLocale, MarketingDemoProfileStarterPreset, baseDesignTemplates, basePhotonDocuments, baseProfileStarterPresets, createBaseDesignTemplateDocument, createBasePhotonDocument, createBaseProfileDocumentFromPresetSource, createBaseProfileDocumentFromTemplateSource, createBaseStarterProfileTree, createInitLandingFooterDocument, createInitLandingHeaderDocument, createMarketingDemoDesignTemplateDocument, createMarketingDemoDocument, createMarketingDemoProfileDocumentFromPresetSource, createMarketingDemoProfileDocumentFromTemplateSource, marketingDemoDesignTemplates, marketingDemoProfileStarterPresets, marketingPhotonDocuments } from './documents.js';
import { PhotonInstallableKit, PhotonModule } from '@init/photon/public';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, CSSProperties } from 'react';
export { M as MarketingDemoBlockType, a as MarketingDemoBlockVariant, b as MarketingDemoBlockVariantMap, c as MarketingDemoDesignPreset, d as MarketingDemoDesignPresetId, e as MarketingDemoVariantTheme, f as airMarketingDemoVariantTheme, g as basePhotonThemes, h as createMarketingDemoVariantMap, i as defaultMarketingDemoVariantTheme, j as getMarketingDemoFramelessBleedStyle, k as getMarketingDemoVariantTheme, l as isMarketingDemoFramelessVariant, m as marketingDemoBlockTypes, n as marketingDemoBlockVariants, o as marketingDemoDesignPresets, p as marketingDemoVariantThemes, r as resolveMarketingDemoBlockVariant, q as resolveMarketingDemoSiteVariant } from './design-presets-j2te0UgP.js';
export { marketingDemoBlockVariantOptions } from './themes/index.js';
import '@init/photon/server';

declare const marketingPhotonModule: PhotonModule;

declare const marketingPhotonKit: PhotonInstallableKit;
declare const basePhotonModule: PhotonModule;
declare const basePhotonKit: PhotonInstallableKit;

declare const InitCheckListItem: ({ children }: {
    children: ReactNode;
}) => react_jsx_runtime.JSX.Element;

declare const InitStatWidget: ({ atLeastLg, label, suffix, value, }: {
    atLeastLg: boolean;
    label: ReactNode;
    suffix?: ReactNode;
    value: number;
}) => react_jsx_runtime.JSX.Element;

declare const InitStatusPill: ({ children }: {
    children: ReactNode;
}) => react_jsx_runtime.JSX.Element;

declare const InitTestimonialCard: ({ className, profile, quote, style, }: {
    className?: string;
    profile: ReactNode;
    quote: ReactNode;
    style?: CSSProperties;
}) => react_jsx_runtime.JSX.Element;

declare const InitTestimonialProfile: ({ initials, name, role, }: {
    initials: ReactNode;
    name: ReactNode;
    role: ReactNode;
}) => react_jsx_runtime.JSX.Element;

declare const InitTypedText: ({ atLeastLg, texts, }: {
    atLeastLg: boolean;
    texts: string[];
}) => react_jsx_runtime.JSX.Element;

type RichTextProps = {
    blockId: string;
    path: string;
    className?: string;
    containerClassName?: string;
    placeholder?: string;
};
declare const RichText: ({ blockId, path, className, containerClassName, placeholder, }: RichTextProps) => react_jsx_runtime.JSX.Element;

export { InitCheckListItem, InitStatWidget, InitStatusPill, InitTestimonialCard, InitTestimonialProfile, InitTypedText, RichText, basePhotonKit, basePhotonModule, marketingPhotonKit, marketingPhotonModule };
