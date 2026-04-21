"use client";

import {
  createWebsiteBuilderLocalizedDefault,
  defineWebsiteBuilderBlockDefinition,
  EditableImage,
  EditableText,
  EditableTextarea,
  WebsiteBuilderLink,
  useWebsiteBuilderRenderDepth,
  useWebsiteBuilderStore,
  type WebsiteBuilderBlock,
} from "@init-modules/website-builder/public";
import {
  getMarketingDemoVariantTheme,
  getMarketingDemoFramelessBleedStyle,
  resolveMarketingDemoBlockVariant,
  type MarketingDemoBlockVariant,
} from "../runtime-theme";
import { marketingDemoBlockVariantOptions } from "../block-options";

type PublicationSpotlightProps = {
  variant?: MarketingDemoBlockVariant;
  tag: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  imageUrl: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
};

export const PublicationSpotlight = ({
  block,
}: {
  block: WebsiteBuilderBlock<PublicationSpotlightProps>;
}) => {
  const siteDesign = useWebsiteBuilderStore(
    (state) => state.site.settings.design,
  );
  const variant = resolveMarketingDemoBlockVariant({
    blockType: "publication-spotlight",
    explicitVariant: block.props.variant,
    siteDesign,
  });
  const theme = getMarketingDemoVariantTheme(variant);
  const renderDepth = useWebsiteBuilderRenderDepth();
  const stacked = variant === "air";
  const framelessSpotlight = theme.surfaceStyle === "frameless";

  return (
    <section
      className={`grid min-w-0 gap-6 px-5 py-5 sm:px-6 sm:py-6 ${
        theme.surface
      } ${stacked ? "" : "lg:grid-cols-[minmax(17rem,0.9fr)_minmax(0,1.1fr)]"}`}
      style={getMarketingDemoFramelessBleedStyle(
        framelessSpotlight,
        renderDepth === 0,
      )}
      data-testid="marketing-demo-publication-spotlight"
      data-marketing-demo-variant={variant}
      data-marketing-demo-surface-style={theme.surfaceStyle}
    >
      <div className={theme.mediaFrame}>
        <EditableImage
          blockId={block.id}
          path="imageUrl"
          altPath="imageAlt"
          className={`relative ${
            stacked ? "aspect-[16/10]" : "aspect-[4/5] min-h-[22rem]"
          }`}
          imageClassName="h-full w-full object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-col justify-between gap-6">
        <div className="min-w-0">
          <EditableText blockId={block.id} path="tag" className={theme.pill} />
          <EditableText
            blockId={block.id}
            path="title"
            as="h2"
            className={`mt-5 block max-w-3xl text-balance text-2xl font-semibold leading-[1.04] tracking-[-0.05em] ${
              stacked ? "sm:text-4xl" : "sm:text-3xl xl:text-4xl"
            } ${theme.emphasisText}`}
          />
          <EditableTextarea
            blockId={block.id}
            path="excerpt"
            className={`mt-5 max-w-2xl ${theme.mutedBody} sm:text-base`}
          />
        </div>

        <div
          className={`flex flex-col gap-4 border-t pt-5 ${theme.divider} xl:flex-row xl:items-center xl:justify-between`}
        >
          <div className={theme.mutedBody}>
            <EditableText
              blockId={block.id}
              path="author"
              className={`font-semibold ${theme.emphasisText}`}
            />{" "}
            <span className={`mx-2 ${theme.metaDivider}`}>/</span>
            <EditableText blockId={block.id} path="readTime" />
          </div>

          <WebsiteBuilderLink
            href={String(block.props.ctaHref)}
            className={theme.secondaryButton}
          >
            <EditableText
              blockId={block.id}
              path="ctaLabel"
              className="text-sm font-semibold"
            />
          </WebsiteBuilderLink>
        </div>
      </div>
    </section>
  );
};

export const publicationSpotlightDefinition =
  defineWebsiteBuilderBlockDefinition<PublicationSpotlightProps>({
    type: "publication-spotlight",
    label: "Publication Spotlight",
    labelKey: "marketingDemoKit.blocks.publicationSpotlight.label",
    description:
      "Example of a domain-specific content block coming from a separate package.",
    descriptionKey: "marketingDemoKit.blocks.publicationSpotlight.description",
    category: "Content",
    icon: "newspaper",
    component: PublicationSpotlight,
    defaults: {
      variant: "default",
      tag: createWebsiteBuilderLocalizedDefault({
        en: "publication-website-builder",
        ru: "publication-website-builder",
      }),
      title: createWebsiteBuilderLocalizedDefault({
        en: "A publication package should bring its own blocks and backend manifest producers",
        ru: "Publication package должен приносить свои блоки и backend manifest producers",
      }),
      excerpt: createWebsiteBuilderLocalizedDefault({
        en: "This block represents the future integration path: a publication package exposes manifest fragments on Laravel, and the mirrored npm kit renders the same block family in Next.js with zero copy-paste glue.",
        ru: "Этот блок показывает будущий путь интеграции: publication package отдает manifest fragments на Laravel, а зеркальный npm kit рендерит ту же семью блоков в Next.js без copy-paste glue-кода.",
      }),
      author: createWebsiteBuilderLocalizedDefault({
        en: "Lead package architecture",
        ru: "Lead package architecture",
      }),
      readTime: createWebsiteBuilderLocalizedDefault({
        en: "6 min walkthrough",
        ru: "6 минут чтения",
      }),
      imageUrl:
        "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Editorial workspace with notebooks and camera",
      ctaLabel: createWebsiteBuilderLocalizedDefault({
        en: "Open package strategy",
        ru: "Открыть package strategy",
      }),
      ctaHref: "#packages",
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
        path: "tag",
        label: "Tag",
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
        path: "excerpt",
        label: "Excerpt",
        kind: "textarea",
        group: "content",
        localization: "localized",
      },
      {
        path: "author",
        label: "Author",
        kind: "text",
        group: "content",
        localization: "localized",
      },
      {
        path: "readTime",
        label: "Read time",
        kind: "text",
        group: "content",
        localization: "localized",
      },
      {
        path: "imageUrl",
        label: "Cover image",
        kind: "image",
        group: "content",
        localization: "shared",
      },
      {
        path: "imageAlt",
        label: "Cover image alt",
        kind: "text",
        group: "content",
        localization: "localized",
      },
      {
        path: "ctaLabel",
        label: "CTA label",
        kind: "text",
        group: "content",
        localization: "localized",
      },
      {
        path: "ctaHref",
        label: "CTA link",
        kind: "url",
        group: "content",
        localization: "shared",
      },
    ],
  });
