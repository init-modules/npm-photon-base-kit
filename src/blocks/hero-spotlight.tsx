"use client";

import {
  createWebsiteBuilderLocalizedDefault,
  defineWebsiteBuilderBlockDefinition,
  EditableImage,
  EditableText,
  EditableTextarea,
  useWebsiteBuilderRenderDepth,
  useWebsiteBuilderStore,
  type WebsiteBuilderBlock,
} from "@init-modules/website-builder";
import {
  getMarketingDemoVariantTheme,
  getMarketingDemoFramelessBleedStyle,
  marketingDemoBlockVariantOptions,
  resolveMarketingDemoBlockVariant,
  type MarketingDemoBlockVariant,
} from "../themes";
import { useSurfaceBreakpoints } from "../hooks/use-surface-breakpoints";

type HeroSpotlightProps = {
  variant?: MarketingDemoBlockVariant;
  eyebrow: string;
  title: string;
  body: string;
  primaryLabel: string;
  primaryMetaLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  spotlightLabel: string;
  spotlightValue: string;
  imageUrl: string;
  imageAlt: string;
};

export const HeroSpotlight = ({
  block,
}: {
  block: WebsiteBuilderBlock<HeroSpotlightProps>;
}) => {
  const siteDesign = useWebsiteBuilderStore(
    (state) => state.site.settings.design,
  );
  const variant = resolveMarketingDemoBlockVariant({
    blockType: "hero-spotlight",
    explicitVariant: block.props.variant,
    siteDesign,
  });
  const theme = getMarketingDemoVariantTheme(variant);
  const airHero = variant === "air";
  const renderDepth = useWebsiteBuilderRenderDepth();
  const stackedHero = airHero;
  const framelessHero = theme.surfaceStyle === "frameless";
  const { ref, atLeastSm, atLeastMd, atLeastLg, atLeastXl } =
    useSurfaceBreakpoints<HTMLElement>();

  return (
    <section
      ref={ref}
      className={[
        "relative overflow-hidden px-6 py-8",
        atLeastSm ? "px-10 py-12" : "",
        theme.heroSurface,
      ].join(" ")}
      style={getMarketingDemoFramelessBleedStyle(
        framelessHero,
        renderDepth === 0,
      )}
      data-testid="marketing-demo-hero-spotlight"
      data-marketing-demo-variant={variant}
      data-marketing-demo-surface-style={theme.surfaceStyle}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${theme.heroOverlay} opacity-70`}
      />
      <div
        className={`relative grid gap-8 ${
          stackedHero
            ? atLeastLg
              ? "grid-cols-[minmax(0,1fr)]"
              : ""
            : atLeastLg
              ? "grid-cols-[minmax(0,1.2fr)_320px] items-end"
              : ""
        }`}
      >
        <div className="space-y-6">
          <EditableText
            blockId={block.id}
            path="eyebrow"
            className={`inline-flex w-fit ${theme.pill}`}
          />
          <EditableText
            blockId={block.id}
            path="title"
            as="h1"
            className={`${
              stackedHero
                ? `max-w-4xl ${
                    atLeastXl ? "text-6xl" : atLeastSm ? "text-5xl" : "text-4xl"
                  }`
                : `max-w-4xl ${atLeastSm ? "text-6xl" : "text-4xl"}`
            } ${theme.title}`}
          />
          <EditableTextarea
            blockId={block.id}
            path="body"
            className={`max-w-2xl ${atLeastSm ? "text-lg" : ""} ${theme.body}`}
          />

          <div className={`flex gap-3 ${atLeastSm ? "flex-row" : "flex-col"}`}>
            <a
              href={String(block.props.primaryHref)}
              className={`${theme.primaryButton} gap-3`}
            >
              <EditableText
                blockId={block.id}
                path="primaryLabel"
                className="text-sm font-semibold"
              />
              <EditableText
                blockId={block.id}
                path="primaryMetaLabel"
                className={theme.metaText}
              />
            </a>
            <a
              href={String(block.props.secondaryHref)}
              className={theme.secondaryButton}
            >
              <EditableText
                blockId={block.id}
                path="secondaryLabel"
                className="text-sm font-semibold"
              />
            </a>
          </div>
        </div>

        <div
          className={`relative ${
            stackedHero
              ? atLeastSm
                ? "grid gap-5 grid-cols-[minmax(0,1.2fr)_minmax(16rem,20rem)]"
                : "grid gap-5"
              : "space-y-4"
          }`}
        >
          <div className={theme.mediaFrame}>
            <EditableImage
              blockId={block.id}
              path="imageUrl"
              altPath="imageAlt"
              className={`relative ${
                stackedHero ? "aspect-[16/11]" : "aspect-[4/5]"
              }`}
              imageClassName="h-full w-full object-cover"
            />
          </div>

          <div
            className={`${theme.panel} ${
              airHero ? (atLeastSm ? "pl-8 pr-0" : "") : "px-5 py-5"
            } ${airHero ? "px-0 py-5" : ""}`}
          >
            <EditableText
              blockId={block.id}
              path="spotlightLabel"
              className={`block ${theme.label}`}
            />
            <EditableText
              blockId={block.id}
              path="spotlightValue"
              className={`mt-3 block text-3xl font-semibold tracking-[-0.04em] ${theme.emphasisText}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const heroSpotlightDefinition =
  defineWebsiteBuilderBlockDefinition<HeroSpotlightProps>({
    type: "hero-spotlight",
    label: "Hero Spotlight",
    labelKey: "marketingDemoKit.blocks.heroSpotlight.label",
    description:
      "Hero block with a premium split layout and editorial CTA stack.",
    descriptionKey: "marketingDemoKit.blocks.heroSpotlight.description",
    category: "Hero",
    icon: "panels-top-left",
    component: HeroSpotlight,
    defaults: {
      variant: "default",
      eyebrow: createWebsiteBuilderLocalizedDefault({
        en: "Package-first builder system",
        ru: "Package-first система builder",
      }),
      title: createWebsiteBuilderLocalizedDefault({
        en: "Edit the real website, not a fake admin copy",
        ru: "Редактируйте реальный сайт, а не отдельную админскую копию",
      }),
      body: createWebsiteBuilderLocalizedDefault({
        en: "Website Builder turns your actual Next.js surface into the editing canvas. Content mode focuses on inline edits, while Builder mode exposes a full control room with palette, drag-and-drop and inspector panels.",
        ru: "Website Builder превращает вашу реальную Next.js-поверхность в холст редактирования. Content mode оставляет редактирование инлайновым, а Builder mode открывает полноценный control room с palette, drag-and-drop и inspector-панелями.",
      }),
      primaryLabel: createWebsiteBuilderLocalizedDefault({
        en: "Enter builder mode",
        ru: "Открыть builder mode",
      }),
      primaryMetaLabel: createWebsiteBuilderLocalizedDefault({
        en: "Launch",
        ru: "Запуск",
      }),
      primaryHref: "#builder",
      secondaryLabel: createWebsiteBuilderLocalizedDefault({
        en: "See package architecture",
        ru: "Смотреть архитектуру пакетов",
      }),
      secondaryHref: "#packages",
      spotlightLabel: createWebsiteBuilderLocalizedDefault({
        en: "Target shape",
        ru: "Целевая форма",
      }),
      spotlightValue: createWebsiteBuilderLocalizedDefault({
        en: "Next.js + Laravel + installable block kits",
        ru: "Next.js + Laravel + installable block kits",
      }),
      imageUrl:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Creative team controlling digital product surfaces",
    },
    fields: [
      {
        path: "variant",
        label: "Variant",
        kind: "select",
        group: "style",
        localization: "shared",
        options: marketingDemoBlockVariantOptions,
      },
      {
        path: "eyebrow",
        label: "Eyebrow",
        kind: "text",
        group: "content",
        localization: "localized",
      },
      {
        path: "title",
        label: "Title",
        kind: "textarea",
        group: "content",
        localization: "localized",
      },
      {
        path: "body",
        label: "Body",
        kind: "textarea",
        group: "content",
        localization: "localized",
      },
      {
        path: "primaryLabel",
        label: "Primary CTA",
        kind: "text",
        group: "content",
        localization: "localized",
      },
      {
        path: "primaryMetaLabel",
        label: "Primary meta label",
        kind: "text",
        group: "content",
        localization: "localized",
      },
      {
        path: "primaryHref",
        label: "Primary link",
        kind: "url",
        group: "content",
        localization: "shared",
      },
      {
        path: "secondaryLabel",
        label: "Secondary CTA",
        kind: "text",
        group: "content",
        localization: "localized",
      },
      {
        path: "secondaryHref",
        label: "Secondary link",
        kind: "url",
        group: "content",
        localization: "shared",
      },
      {
        path: "spotlightLabel",
        label: "Spotlight label",
        kind: "text",
        group: "content",
        localization: "localized",
      },
      {
        path: "spotlightValue",
        label: "Spotlight value",
        kind: "text",
        group: "content",
        localization: "localized",
      },
      {
        path: "imageUrl",
        label: "Image",
        kind: "image",
        group: "content",
        localization: "shared",
      },
      {
        path: "imageAlt",
        label: "Image alt",
        kind: "text",
        group: "content",
        localization: "localized",
      },
    ],
  });
