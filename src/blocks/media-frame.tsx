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

type MediaFrameProps = {
  variant?: MarketingDemoBlockVariant;
  eyebrow: string;
  title: string;
  caption: string;
  imageUrl: string;
  imageAlt: string;
};

export const MediaFrame = ({
  block,
}: {
  block: WebsiteBuilderBlock<MediaFrameProps>;
}) => {
  const siteDesign = useWebsiteBuilderStore(
    (state) => state.site.settings.design,
  );
  const variant = resolveMarketingDemoBlockVariant({
    blockType: "media-frame",
    explicitVariant: block.props.variant,
    siteDesign,
  });
  const theme = getMarketingDemoVariantTheme(variant);
  const renderDepth = useWebsiteBuilderRenderDepth();
  const framelessRail = theme.surfaceStyle === "frameless";

  return (
    <section
      className={`${theme.surface} ${
        framelessRail
          ? "grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-end"
          : "overflow-hidden"
      }`}
      style={getMarketingDemoFramelessBleedStyle(
        framelessRail,
        renderDepth === 0,
      )}
      data-testid="marketing-demo-media-frame"
      data-marketing-demo-variant={variant}
      data-marketing-demo-surface-style={theme.surfaceStyle}
    >
      <div className={theme.mediaFrame}>
        <EditableImage
          blockId={block.id}
          path="imageUrl"
          altPath="imageAlt"
          className={`relative ${
            framelessRail
              ? "aspect-[16/11] sm:aspect-[4/3]"
              : "aspect-[4/5] sm:aspect-[5/6]"
          }`}
          imageClassName="h-full w-full object-cover"
        />
      </div>

      <div
        className={`space-y-4 ${
          framelessRail ? "px-0 py-2 sm:px-0" : "px-5 py-5 sm:px-6"
        }`}
      >
        <EditableText
          blockId={block.id}
          path="eyebrow"
          className={theme.pill}
        />
        <EditableText
          blockId={block.id}
          path="title"
          as="h3"
          className={`block text-2xl font-semibold tracking-[-0.04em] ${theme.emphasisText}`}
        />
        <EditableTextarea
          blockId={block.id}
          path="caption"
          className={theme.mutedBody}
        />
      </div>
    </section>
  );
};

export const mediaFrameDefinition =
  defineWebsiteBuilderBlockDefinition<MediaFrameProps>({
    type: "media-frame",
    label: "Media Frame",
    labelKey: "marketingDemoKit.blocks.mediaFrame.label",
    description: "Sticky-friendly visual rail block with image and caption.",
    descriptionKey: "marketingDemoKit.blocks.mediaFrame.description",
    category: "Media",
    icon: "panels-top-left",
    component: MediaFrame,
    defaults: {
      variant: "default",
      eyebrow: createWebsiteBuilderLocalizedDefault({
        en: "Sticky media rail",
        ru: "Sticky media-колонка",
      }),
      title: createWebsiteBuilderLocalizedDefault({
        en: "Horizontal containers finally become obvious in the live demo",
        ru: "Горизонтальные контейнеры наконец выглядят очевидно в живом демо",
      }),
      caption: createWebsiteBuilderLocalizedDefault({
        en: "The left column can stay pinned while the right column scrolls through richer editorial blocks. On mobile the same structure collapses into a clean single-column stack.",
        ru: "Левая колонка может оставаться закрепленной, пока правая скроллится через более богатые editorial-блоки. На мобильных та же структура схлопывается в чистый одноколоночный стек.",
      }),
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Laptop workspace showing a design and editing setup",
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
        path: "caption",
        label: "Caption",
        kind: "textarea",
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
