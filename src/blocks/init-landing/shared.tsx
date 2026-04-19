"use client";

import {
  Award,
  ArrowRight,
  BarChart3,
  Blocks,
  Globe,
  LayoutTemplate,
  Menu,
  PackageCheck,
  Shield,
  Sparkles,
  Users,
  WandSparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  WebsiteBuilderLink,
  createWebsiteBuilderBlockLocalizationSchema,
  type WebsiteBuilderBlockLocalizationSchema,
  type WebsiteBuilderField,
  type WebsiteBuilderFieldOption,
  useWebsiteBuilderRenderDepth,
  useWebsiteBuilderStore,
} from "@init-modules/website-builder";
import { getWebsiteBuilderSurfaceModeStyle } from "@init-modules/website-builder/shared";
import { useSurfaceBreakpoints } from "../../hooks/use-surface-breakpoints";

export type InitLandingIconKey =
  | "award"
  | "barChart3"
  | "blocks"
  | "globe"
  | "layoutTemplate"
  | "packageCheck"
  | "shield"
  | "sparkles"
  | "users"
  | "wandSparkles"
  | "workflow"
  | "zap";

export const initLandingIcons = {
  award: Award,
  barChart3: BarChart3,
  blocks: Blocks,
  globe: Globe,
  layoutTemplate: LayoutTemplate,
  packageCheck: PackageCheck,
  shield: Shield,
  sparkles: Sparkles,
  users: Users,
  wandSparkles: WandSparkles,
  workflow: Workflow,
  zap: Zap,
} as const;

export const initLandingIconFieldOptions: WebsiteBuilderFieldOption[] =
  Object.keys(initLandingIcons).map((key) => ({
    label: key,
    value: key,
  }));

export const createInitLandingBlockLocalizationSchema = (
  fields: WebsiteBuilderField[],
): WebsiteBuilderBlockLocalizationSchema => {
  const schema = createWebsiteBuilderBlockLocalizationSchema(fields);

  return {
    localized: schema.localized,
    shared: Array.from(new Set([...schema.shared, "variant"])).sort(),
  };
};

export type InitLandingLinkItem = {
  href: string;
  label: string;
  name?: string;
};

export type InitLandingAction = InitLandingLinkItem;

export type InitLandingHeaderNavItem = InitLandingLinkItem;

export type InitLandingFeaturePill = {
  icon: InitLandingIconKey;
  label: string;
};

export type InitLandingStat = {
  label: string;
  suffix?: string;
  value: number;
};

export type InitLandingServiceItem = {
  description: string;
  icon: InitLandingIconKey;
  title: string;
};

export type InitLandingReasonItem = {
  description: string;
  icon: InitLandingIconKey;
  title: string;
};

export type InitLandingPricingPlan = {
  cta: string;
  description: string;
  features: string[];
  href: string;
  highlighted?: boolean;
  name: string;
  period: string;
  price: string;
};

export type InitLandingProcessStep = {
  description: string;
  number: string;
  title: string;
};

export type InitLandingTestimonial = {
  author: string;
  initials: string;
  quote: string;
  role: string;
};

export type InitLandingFooterContact = {
  email: string;
  location: string;
  phone: string;
};

export const sectionFrameClassName = "mx-auto max-w-7xl px-6 lg:px-8";

export const headingEyebrowClassName =
  "mb-4 text-sm font-medium uppercase tracking-wider text-[var(--wb-site-accent)]";

export const secondaryCardClassName =
  "rounded-[1.75rem] border border-[color-mix(in_srgb,var(--wb-site-border)_88%,white)] bg-[color-mix(in_srgb,var(--wb-site-surface)_96%,white)] shadow-[0_20px_60px_-30px_rgba(32,22,18,0.18)]";

export const useInitLandingSectionBleedStyle = () => {
  const renderDepth = useWebsiteBuilderRenderDepth();

  return renderDepth === 0
    ? getWebsiteBuilderSurfaceModeStyle("bleed")
    : undefined;
};

export const useInitLandingSurfaceBreakpoints = () =>
  useSurfaceBreakpoints<HTMLElement>();

export const useInitLandingReveal = <T extends HTMLElement = HTMLElement>() => {
  const sectionRef = useRef<T | null>(null);
  const mode = useWebsiteBuilderStore((state) => state.mode);

  useEffect(() => {
    const scope = sectionRef.current;
    if (!scope) {
      return;
    }

    const elements = scope.querySelectorAll<HTMLElement>(".wb-init-reveal");

    if (mode !== "preview") {
      elements.forEach((element) => {
        element.classList.add("translate-y-0", "opacity-100");
        element.classList.remove("translate-y-4", "opacity-0");
      });
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-4", "opacity-0");
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [mode]);

  return sectionRef;
};

export const revealClassName =
  "wb-init-reveal translate-y-4 opacity-0 transition-all duration-700";

export const InitBrandMark = ({ label }: { label: ReactNode }) => (
  <>
    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--wb-site-accent)] transition-transform duration-300 group-hover:scale-105">
      <span className="font-mono text-sm font-bold tracking-tighter text-white">
        {"{i}"}
      </span>
    </div>
    <span className="text-xl font-semibold tracking-tight text-[var(--wb-site-text)]">
      {label}
    </span>
  </>
);

export const InitLandingActionButton = ({
  children,
  href,
  inverted = false,
  outline = false,
}: {
  children: ReactNode;
  href: string;
  inverted?: boolean;
  outline?: boolean;
}) => (
  <WebsiteBuilderLink
    href={href}
    className={[
      "inline-flex items-center justify-center rounded-[1.2rem] px-6 py-3 text-base font-medium transition-all duration-300",
      inverted
        ? outline
          ? "border border-white/30 text-white hover:bg-white/10"
          : "bg-white text-[var(--wb-site-text)] hover:bg-white/90 hover:shadow-lg"
        : outline
          ? "border border-[color-mix(in_srgb,var(--wb-site-border)_84%,white)] bg-transparent text-[var(--wb-site-text)] hover:bg-[color-mix(in_srgb,var(--wb-site-surface)_96%,white)]"
          : "bg-[var(--wb-site-accent)] text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-[color-mix(in_srgb,var(--wb-site-accent)_28%,transparent)]",
    ].join(" ")}
  >
    {children}
  </WebsiteBuilderLink>
);

export const InitLandingNavLink = ({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: ReactNode;
  onNavigate?: () => void;
}) => (
  <WebsiteBuilderLink
    href={href}
    className="relative text-sm font-medium text-[var(--wb-site-muted-text)] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--wb-site-accent)] after:transition-all after:duration-300 hover:text-[var(--wb-site-text)] hover:after:w-full"
    onClick={onNavigate}
  >
    {label}
  </WebsiteBuilderLink>
);

export const usePreviewSurface = () => {
  const mode = useWebsiteBuilderStore((state) => state.mode);
  return mode === "preview";
};

export const useInitLandingMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return {
    close: () => setIsOpen(false),
    icon: isOpen ? X : Menu,
    isOpen,
    toggle: () => setIsOpen((value) => !value),
  };
};

export const ArrowRightIcon = ArrowRight;
