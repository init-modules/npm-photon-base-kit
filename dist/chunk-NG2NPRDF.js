"use client";
import {
  getMarketingDemoFramelessBleedStyle,
  getMarketingDemoVariantTheme,
  marketingDemoBlockVariantOptions,
  resolveMarketingDemoBlockVariant
} from "./chunk-C3ON53CY.js";

// src/blocks/breadcrumbs.tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@init/ui";
import {
  createPhotonLocalizedDefault,
  definePhotonBlockDefinition,
  EditableText,
  PhotonLink
} from "@init/photon/public";
import { jsx, jsxs } from "react/jsx-runtime";
var normalizeItems = (items) => Array.isArray(items) ? items.flatMap((item) => {
  if (typeof item !== "object" || item === null) {
    return [];
  }
  const candidate = item;
  const label = typeof candidate.label === "string" || typeof candidate.label === "object" && candidate.label !== null ? candidate.label : null;
  if (!label) {
    return [];
  }
  return [
    {
      label,
      href: typeof candidate.href === "string" && candidate.href ? candidate.href : "#",
      current: Boolean(candidate.current)
    }
  ];
}) : [];
var BreadcrumbsBlock = ({
  block
}) => {
  const items = normalizeItems(block.props.items);
  if (items.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx("section", { className: "bg-[var(--photon-site-background)] px-5 pt-8 text-[var(--photon-site-text)] sm:px-8", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[96rem]", children: /* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsx(BreadcrumbList, { children: items.map((item, index) => {
    const current = item.current || index === items.length - 1;
    return /* @__PURE__ */ jsxs(BreadcrumbItem, { children: [
      current ? /* @__PURE__ */ jsx(BreadcrumbPage, { children: /* @__PURE__ */ jsx(
        EditableText,
        {
          blockId: block.id,
          path: `items.${index}.label`
        }
      ) }) : /* @__PURE__ */ jsx(
        PhotonLink,
        {
          href: item.href,
          className: "transition hover:text-[var(--photon-site-text)]",
          children: /* @__PURE__ */ jsx(
            EditableText,
            {
              blockId: block.id,
              path: `items.${index}.label`
            }
          )
        }
      ),
      index < items.length - 1 ? /* @__PURE__ */ jsx(BreadcrumbSeparator, {}) : null
    ] }, `${item.href}:${index}`);
  }) }) }) }) });
};
var breadcrumbsDefinition = definePhotonBlockDefinition({
  type: "breadcrumbs",
  label: "Breadcrumbs",
  labelKey: "marketingDemoKit.breadcrumbs.label",
  description: "Compact navigation trail for pages and flows.",
  descriptionKey: "marketingDemoKit.breadcrumbs.description",
  category: "Navigation",
  icon: "chevrons-right",
  defaults: {
    items: [
      {
        label: createPhotonLocalizedDefault({
          en: "Home",
          ru: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
        }),
        href: "/",
        current: false
      },
      {
        label: createPhotonLocalizedDefault({
          en: "Current page",
          ru: "\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430"
        }),
        href: "#",
        current: true
      }
    ]
  },
  fields: [
    {
      path: "items",
      label: "Items",
      kind: "repeater",
      group: "content",
      localization: "localized",
      fields: [
        { path: "label", label: "Label", kind: "text" },
        { path: "href", label: "Href", kind: "url", localization: "shared" },
        {
          path: "current",
          label: "Current",
          kind: "toggle",
          localization: "shared"
        }
      ]
    }
  ],
  component: BreadcrumbsBlock
});

// src/blocks/command-center-cta.tsx
import {
  createPhotonLocalizedDefault as createPhotonLocalizedDefault2,
  definePhotonBlockDefinition as definePhotonBlockDefinition2,
  EditableRepeaterValue,
  EditableText as EditableText2,
  EditableTextarea,
  usePhotonRenderDepth,
  usePhotonStore,
  PhotonLink as PhotonLink2
} from "@init/photon/public";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var CommandCenterCta = ({
  block
}) => {
  const siteDesign = usePhotonStore(
    (state) => state.site.settings.design
  );
  const variant = resolveMarketingDemoBlockVariant({
    blockType: "command-center-cta",
    explicitVariant: block.props.variant,
    siteDesign
  });
  const theme = getMarketingDemoVariantTheme(variant);
  const renderDepth = usePhotonRenderDepth();
  const centered = variant === "air";
  const framelessCta = theme.surfaceStyle === "frameless";
  return /* @__PURE__ */ jsx2(
    "section",
    {
      className: `${theme.heroSurface} px-5 py-7 sm:px-6 sm:py-8`,
      style: getMarketingDemoFramelessBleedStyle(
        framelessCta,
        renderDepth === 0
      ),
      "data-testid": "marketing-demo-command-center-cta",
      "data-marketing-demo-variant": variant,
      "data-marketing-demo-surface-style": theme.surfaceStyle,
      children: /* @__PURE__ */ jsxs2(
        "div",
        {
          className: `grid min-w-0 gap-6 items-center ${centered ? "mx-auto max-w-5xl lg:grid-cols-[minmax(0,1fr)]" : "[grid-template-columns:repeat(auto-fit,minmax(min(100%,18rem),1fr))]"}`,
          children: [
            /* @__PURE__ */ jsxs2("div", { className: `min-w-0 ${centered ? "text-center" : ""}`, children: [
              /* @__PURE__ */ jsx2(
                EditableText2,
                {
                  blockId: block.id,
                  path: "badge",
                  className: `${theme.pill} ${centered ? "mx-auto" : ""}`
                }
              ),
              /* @__PURE__ */ jsx2(
                EditableText2,
                {
                  blockId: block.id,
                  path: "title",
                  as: "h2",
                  className: `mt-4 block text-balance text-3xl font-semibold leading-[1.03] tracking-[-0.05em] ${centered ? "sm:text-5xl" : "sm:text-4xl xl:text-5xl"} ${theme.emphasisText}`
                }
              ),
              /* @__PURE__ */ jsx2(
                EditableTextarea,
                {
                  blockId: block.id,
                  path: "body",
                  className: `mt-5 max-w-2xl ${theme.body} ${centered ? "mx-auto" : ""}`
                }
              ),
              /* @__PURE__ */ jsxs2(
                "div",
                {
                  className: `mt-7 flex gap-3 ${centered ? "justify-center flex-wrap" : "flex-col sm:flex-row"}`,
                  children: [
                    /* @__PURE__ */ jsx2(
                      PhotonLink2,
                      {
                        href: String(block.props.primaryHref),
                        className: theme.primaryButton,
                        children: /* @__PURE__ */ jsx2(
                          EditableText2,
                          {
                            blockId: block.id,
                            path: "primaryLabel",
                            className: "text-sm font-semibold"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsx2(
                      PhotonLink2,
                      {
                        href: String(block.props.secondaryHref),
                        className: theme.secondaryButton,
                        children: /* @__PURE__ */ jsx2(
                          EditableText2,
                          {
                            blockId: block.id,
                            path: "secondaryLabel",
                            className: "text-sm font-semibold"
                          }
                        )
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs2(
              "div",
              {
                className: `${theme.panel} min-w-0 ${framelessCta ? "px-0 py-5 sm:pl-6 sm:pr-0" : "p-5"}`,
                children: [
                  /* @__PURE__ */ jsx2("div", { className: theme.label, children: /* @__PURE__ */ jsx2(EditableText2, { blockId: block.id, path: "panelEyebrow" }) }),
                  /* @__PURE__ */ jsx2(
                    EditableText2,
                    {
                      blockId: block.id,
                      path: "panelLabel",
                      className: `mt-4 block text-2xl font-semibold tracking-[-0.04em] ${theme.emphasisText}`
                    }
                  ),
                  /* @__PURE__ */ jsx2("div", { className: "mt-6 space-y-3", children: block.props.panelItems.map((_, index) => /* @__PURE__ */ jsx2(
                    "div",
                    {
                      className: `rounded-2xl px-4 py-3 text-sm leading-6 ${theme.listItem}`,
                      children: /* @__PURE__ */ jsx2(
                        EditableRepeaterValue,
                        {
                          blockId: block.id,
                          path: `panelItems.${index}`,
                          as: "span",
                          className: "block text-sm leading-6"
                        }
                      )
                    },
                    `${block.id}-panel-item-${index}`
                  )) })
                ]
              }
            )
          ]
        }
      )
    }
  );
};
var commandCenterCtaDefinition = definePhotonBlockDefinition2({
  type: "command-center-cta",
  label: "Command Center CTA",
  labelKey: "marketingDemoKit.blocks.commandCenterCta.label",
  description: "Closing conversion block for the framework narrative.",
  descriptionKey: "marketingDemoKit.blocks.commandCenterCta.description",
  category: "Conversion",
  icon: "sparkles",
  component: CommandCenterCta,
  defaults: {
    variant: "default",
    badge: createPhotonLocalizedDefault2({
      en: "MVP control room",
      ru: "MVP control room"
    }),
    title: createPhotonLocalizedDefault2({
      en: "Ship the foundation now, then let domain packages plug into it cleanly",
      ru: "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B\u043F\u0443\u0441\u0442\u0438\u0442\u0435 foundation, \u0430 \u0437\u0430\u0442\u0435\u043C \u0434\u0430\u0439\u0442\u0435 \u0434\u043E\u043C\u0435\u043D\u043D\u044B\u043C \u043F\u0430\u043A\u0435\u0442\u0430\u043C \u0447\u0438\u0441\u0442\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0442\u044C\u0441\u044F \u043A \u043D\u0435\u043C\u0443"
    }),
    body: createPhotonLocalizedDefault2({
      en: "This is the pragmatic path: establish the contract, show the editing experience on the real site, and leave enough extension points so future packages can register blocks without editing the core app every time.",
      ru: "\u042D\u0442\u043E \u043F\u0440\u0430\u0433\u043C\u0430\u0442\u0438\u0447\u043D\u044B\u0439 \u043F\u0443\u0442\u044C: \u0437\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442, \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043E\u043F\u044B\u0442 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0441\u0430\u0439\u0442\u0435 \u0438 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E extension points, \u0447\u0442\u043E\u0431\u044B \u0431\u0443\u0434\u0443\u0449\u0438\u0435 \u043F\u0430\u043A\u0435\u0442\u044B \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u0431\u043B\u043E\u043A\u0438 \u0431\u0435\u0437 \u043F\u0440\u0430\u0432\u043E\u043A core app \u043A\u0430\u0436\u0434\u044B\u0439 \u0440\u0430\u0437."
    }),
    primaryLabel: createPhotonLocalizedDefault2({
      en: "Publish foundation packages",
      ru: "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C foundation packages"
    }),
    primaryHref: "#publish",
    secondaryLabel: createPhotonLocalizedDefault2({
      en: "Read manual",
      ru: "\u0427\u0438\u0442\u0430\u0442\u044C manual"
    }),
    secondaryHref: "#manual",
    panelEyebrow: createPhotonLocalizedDefault2({
      en: "System mode",
      ru: "\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C"
    }),
    panelLabel: createPhotonLocalizedDefault2({
      en: "Builder chrome online",
      ru: "Builder chrome \u0432 \u043E\u043D\u043B\u0430\u0439\u043D\u0435"
    }),
    panelItems: createPhotonLocalizedDefault2({
      en: [
        "Content editor turns the live site into inputs, uploads and textareas.",
        "Builder mode exposes real layout chrome with drag-and-drop blocks.",
        "Foundation packages define contracts, integrations and renderers."
      ],
      ru: [
        "Content editor \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0436\u0438\u0432\u043E\u0439 \u0441\u0430\u0439\u0442 \u0432 inputs, uploads \u0438 textareas.",
        "Builder mode \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 layout chrome \u0441 drag-and-drop \u0431\u043B\u043E\u043A\u0430\u043C\u0438.",
        "Foundation packages \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0442 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u044B, \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0438 \u0440\u0435\u043D\u0434\u0435\u0440\u0435\u0440\u044B."
      ]
    })
  },
  fields: [
    {
      path: "variant",
      label: "Variant",
      kind: "select",
      group: "style",
      localization: "shared",
      options: marketingDemoBlockVariantOptions
    },
    {
      path: "badge",
      label: "Badge",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "title",
      label: "Title",
      kind: "textarea",
      group: "content",
      localization: "localized"
    },
    {
      path: "body",
      label: "Body",
      kind: "textarea",
      group: "content",
      localization: "localized"
    },
    {
      path: "primaryLabel",
      label: "Primary CTA",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "primaryHref",
      label: "Primary link",
      kind: "url",
      group: "content",
      localization: "shared"
    },
    {
      path: "secondaryLabel",
      label: "Secondary CTA",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "secondaryHref",
      label: "Secondary link",
      kind: "url",
      group: "content",
      localization: "shared"
    },
    {
      path: "panelLabel",
      label: "Panel label",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "panelEyebrow",
      label: "Panel eyebrow",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "panelItems",
      label: "Panel items",
      kind: "repeater",
      group: "content",
      localization: "localized",
      addLabel: "Add panel item",
      itemLabel: "Panel item",
      itemField: { label: "Panel item", kind: "text" }
    }
  ]
});

// src/blocks/feature-grid.tsx
import {
  createPhotonLocalizedDefault as createPhotonLocalizedDefault3,
  definePhotonBlockDefinition as definePhotonBlockDefinition3,
  EditableRepeaterValue as EditableRepeaterValue2,
  EditableText as EditableText3,
  EditableTextarea as EditableTextarea2,
  usePhotonRenderDepth as usePhotonRenderDepth2,
  usePhotonStore as usePhotonStore3
} from "@init/photon/public";

// src/hooks/use-surface-breakpoints.ts
import { usePhotonStore as usePhotonStore2 } from "@init/photon/public";
import { useEffect, useRef, useState } from "react";
var createSurfaceBreakpoints = (width) => ({
  width,
  atLeastSm: width >= 640,
  atLeastMd: width >= 768,
  atLeastLg: width >= 1024,
  atLeastXl: width >= 1280
});
var useSurfaceBreakpoints = () => {
  const ref = useRef(null);
  const mode = usePhotonStore2((state) => state.mode);
  const builderSurface = mode === "builder";
  const [breakpoints, setBreakpoints] = useState(
    createSurfaceBreakpoints(builderSurface ? 0 : 1440)
  );
  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    if (!builderSurface) {
      if (typeof window === "undefined") {
        return;
      }
      const sync2 = () => setBreakpoints(createSurfaceBreakpoints(window.innerWidth));
      sync2();
      window.addEventListener("resize", sync2, { passive: true });
      return () => window.removeEventListener("resize", sync2);
    }
    if (typeof ResizeObserver === "undefined") {
      return;
    }
    const surface = element.closest("[data-photon-surface-region]") ?? element;
    const sync = () => setBreakpoints(createSurfaceBreakpoints(Math.round(surface.clientWidth)));
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(surface);
    return () => observer.disconnect();
  }, [builderSurface]);
  return { ref, ...breakpoints };
};

// src/blocks/feature-grid.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var FeatureGrid = ({
  block
}) => {
  const siteDesign = usePhotonStore3(
    (state) => state.site.settings.design
  );
  const variant = resolveMarketingDemoBlockVariant({
    blockType: "feature-grid",
    explicitVariant: block.props.variant,
    siteDesign
  });
  const theme = getMarketingDemoVariantTheme(variant);
  const renderDepth = usePhotonRenderDepth2();
  const framelessGrid = theme.surfaceStyle === "frameless";
  const { ref, atLeastSm, atLeastMd, atLeastLg, atLeastXl } = useSurfaceBreakpoints();
  return /* @__PURE__ */ jsxs3(
    "section",
    {
      ref,
      className: [
        theme.surface,
        "px-5 py-8",
        atLeastSm ? "px-6 py-9" : ""
      ].join(" "),
      style: getMarketingDemoFramelessBleedStyle(
        framelessGrid,
        renderDepth === 0
      ),
      "data-testid": "marketing-demo-feature-grid",
      "data-marketing-demo-variant": variant,
      "data-marketing-demo-surface-style": theme.surfaceStyle,
      children: [
        /* @__PURE__ */ jsxs3("div", { className: "min-w-0 max-w-3xl", children: [
          /* @__PURE__ */ jsx3(
            EditableText3,
            {
              blockId: block.id,
              path: "eyebrow",
              className: theme.eyebrow
            }
          ),
          /* @__PURE__ */ jsx3(
            EditableText3,
            {
              blockId: block.id,
              path: "title",
              as: "h2",
              className: `mt-4 ${theme.title}`
            }
          ),
          /* @__PURE__ */ jsx3(
            EditableTextarea2,
            {
              blockId: block.id,
              path: "body",
              className: `mt-5 ${theme.body}`
            }
          )
        ] }),
        /* @__PURE__ */ jsx3(
          "div",
          {
            className: `mt-8 grid gap-4 ${framelessGrid ? atLeastXl ? "grid-cols-3" : atLeastMd ? "grid-cols-2" : "" : "[grid-template-columns:repeat(auto-fit,minmax(min(100%,15rem),1fr))]"}`,
            children: block.props.features.map((_, index) => /* @__PURE__ */ jsxs3(
              "article",
              {
                className: `${theme.panel} min-w-0 px-5 py-6 ${framelessGrid && index === 0 && atLeastMd ? "col-span-2" : ""}`,
                children: [
                  /* @__PURE__ */ jsx3("div", { className: theme.numberBadge, children: index + 1 }),
                  /* @__PURE__ */ jsx3(
                    EditableRepeaterValue2,
                    {
                      blockId: block.id,
                      path: `features.${index}.title`,
                      as: "h3",
                      className: `block text-balance text-xl font-semibold tracking-[-0.03em] ${theme.emphasisText}`
                    }
                  ),
                  /* @__PURE__ */ jsx3(
                    EditableRepeaterValue2,
                    {
                      blockId: block.id,
                      path: `features.${index}.body`,
                      as: "p",
                      className: `mt-3 block ${theme.mutedBody}`
                    }
                  )
                ]
              },
              `${block.id}-feature-${index}`
            ))
          }
        )
      ]
    }
  );
};
var featureGridDefinition = definePhotonBlockDefinition3({
  type: "feature-grid",
  label: "Feature Grid",
  labelKey: "marketingDemoKit.blocks.featureGrid.label",
  description: "Feature matrix for builder capabilities.",
  descriptionKey: "marketingDemoKit.blocks.featureGrid.description",
  category: "System",
  icon: "layout-grid",
  component: FeatureGrid,
  defaults: {
    variant: "default",
    eyebrow: createPhotonLocalizedDefault3({
      en: "Editor capabilities",
      ru: "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0430"
    }),
    title: createPhotonLocalizedDefault3({
      en: "One framework, two editor personalities",
      ru: "\u041E\u0434\u0438\u043D \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A, \u0434\u0432\u0430 \u0440\u0435\u0436\u0438\u043C\u0430 \u0440\u0430\u0431\u043E\u0442\u044B \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0430"
    }),
    body: createPhotonLocalizedDefault3({
      en: "The same manifest powers public rendering, inline content edits and the full builder chrome. Domain teams can publish their own kits instead of patching a single giant application.",
      ru: "\u041E\u0434\u0438\u043D \u0438 \u0442\u043E\u0442 \u0436\u0435 manifest \u043F\u0438\u0442\u0430\u0435\u0442 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0439 \u0440\u0435\u043D\u0434\u0435\u0440, inline-\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430 \u0438 \u043F\u043E\u043B\u043D\u044B\u0439 builder chrome. \u0414\u043E\u043C\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u043C\u043E\u0433\u0443\u0442 \u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0438 kit-\u043F\u0430\u043A\u0435\u0442\u044B \u0432\u043C\u0435\u0441\u0442\u043E \u043F\u0430\u0442\u0447\u0435\u0439 \u0432 \u043E\u0434\u043D\u043E \u043C\u043E\u043D\u043E\u043B\u0438\u0442\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435."
    }),
    features: createPhotonLocalizedDefault3({
      en: [
        {
          title: "Inline content controls",
          body: "Text becomes inputs and textareas directly in the live page. Images expose source controls without leaving the site context."
        },
        {
          title: "AAA-style builder chrome",
          body: "Palette search, inspector properties and sortable blocks wrap the page only when the editor enters Builder mode."
        },
        {
          title: "Package-driven integrations",
          body: "Publication, listing or custom business domains can ship both PHP manifest providers and matching npm component kits."
        }
      ],
      ru: [
        {
          title: "Inline-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044B \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430",
          body: "\u0422\u0435\u043A\u0441\u0442 \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u0432 inputs \u0438 textareas \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u0436\u0438\u0432\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435. \u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442 source-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044B \u0431\u0435\u0437 \u0432\u044B\u0445\u043E\u0434\u0430 \u0438\u0437 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0430 \u0441\u0430\u0439\u0442\u0430."
        },
        {
          title: "Builder chrome \u0443\u0440\u043E\u0432\u043D\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430",
          body: "Palette search, inspector properties \u0438 sortable blocks \u043E\u0431\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u044E\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u0433\u0434\u0430 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 Builder mode."
        },
        {
          title: "Package-driven \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438",
          body: "Publication, listing \u0438 \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u0435 \u0434\u043E\u043C\u0435\u043D\u044B \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0438 PHP manifest providers, \u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 npm component kits."
        }
      ]
    })
  },
  fields: [
    {
      path: "variant",
      label: "Variant",
      kind: "select",
      group: "style",
      localization: "shared",
      options: marketingDemoBlockVariantOptions
    },
    {
      path: "eyebrow",
      label: "Eyebrow",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "title",
      label: "Title",
      kind: "textarea",
      group: "content",
      localization: "localized"
    },
    {
      path: "body",
      label: "Body",
      kind: "textarea",
      group: "content",
      localization: "localized"
    },
    {
      path: "features",
      label: "Feature cards",
      kind: "repeater",
      group: "content",
      localization: "localized",
      itemLabelPath: "title",
      addLabel: "Add feature card",
      fields: [
        { path: "title", label: "Title", kind: "text" },
        { path: "body", label: "Body", kind: "textarea" }
      ]
    }
  ]
});

// src/blocks/hero-spotlight.tsx
import {
  createPhotonLocalizedDefault as createPhotonLocalizedDefault4,
  definePhotonBlockDefinition as definePhotonBlockDefinition4,
  EditableImage,
  EditableText as EditableText4,
  EditableTextarea as EditableTextarea3,
  usePhotonRenderDepth as usePhotonRenderDepth3,
  usePhotonStore as usePhotonStore4,
  PhotonLink as PhotonLink3
} from "@init/photon/public";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var HeroSpotlight = ({
  block
}) => {
  const siteDesign = usePhotonStore4(
    (state) => state.site.settings.design
  );
  const variant = resolveMarketingDemoBlockVariant({
    blockType: "hero-spotlight",
    explicitVariant: block.props.variant,
    siteDesign
  });
  const theme = getMarketingDemoVariantTheme(variant);
  const airHero = variant === "air";
  const renderDepth = usePhotonRenderDepth3();
  const stackedHero = airHero;
  const framelessHero = theme.surfaceStyle === "frameless";
  const { ref, atLeastSm, atLeastMd, atLeastLg, atLeastXl } = useSurfaceBreakpoints();
  return /* @__PURE__ */ jsxs4(
    "section",
    {
      ref,
      className: [
        "relative overflow-hidden px-6 py-8",
        atLeastSm ? "px-10 py-12" : "",
        theme.heroSurface
      ].join(" "),
      style: getMarketingDemoFramelessBleedStyle(
        framelessHero,
        renderDepth === 0
      ),
      "data-testid": "marketing-demo-hero-spotlight",
      "data-marketing-demo-variant": variant,
      "data-marketing-demo-surface-style": theme.surfaceStyle,
      children: [
        /* @__PURE__ */ jsx4(
          "div",
          {
            className: `pointer-events-none absolute inset-0 ${theme.heroOverlay} opacity-70`
          }
        ),
        /* @__PURE__ */ jsxs4(
          "div",
          {
            className: `relative grid gap-8 ${stackedHero ? atLeastLg ? "grid-cols-[minmax(0,1fr)]" : "" : atLeastLg ? "grid-cols-[minmax(0,1.2fr)_320px] items-end" : ""}`,
            children: [
              /* @__PURE__ */ jsxs4("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsx4(
                  EditableText4,
                  {
                    blockId: block.id,
                    path: "eyebrow",
                    className: `inline-flex w-fit ${theme.pill}`
                  }
                ),
                /* @__PURE__ */ jsx4(
                  EditableText4,
                  {
                    blockId: block.id,
                    path: "title",
                    as: "h1",
                    className: `${stackedHero ? `max-w-4xl ${atLeastXl ? "text-6xl" : atLeastSm ? "text-5xl" : "text-4xl"}` : `max-w-4xl ${atLeastSm ? "text-6xl" : "text-4xl"}`} ${theme.title}`
                  }
                ),
                /* @__PURE__ */ jsx4(
                  EditableTextarea3,
                  {
                    blockId: block.id,
                    path: "body",
                    className: `max-w-2xl ${atLeastSm ? "text-lg" : ""} ${theme.body}`
                  }
                ),
                /* @__PURE__ */ jsxs4("div", { className: `flex gap-3 ${atLeastSm ? "flex-row" : "flex-col"}`, children: [
                  /* @__PURE__ */ jsxs4(
                    PhotonLink3,
                    {
                      href: String(block.props.primaryHref),
                      className: `${theme.primaryButton} gap-3`,
                      children: [
                        /* @__PURE__ */ jsx4(
                          EditableText4,
                          {
                            blockId: block.id,
                            path: "primaryLabel",
                            className: "text-sm font-semibold"
                          }
                        ),
                        /* @__PURE__ */ jsx4(
                          EditableText4,
                          {
                            blockId: block.id,
                            path: "primaryMetaLabel",
                            className: theme.metaText
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx4(
                    PhotonLink3,
                    {
                      href: String(block.props.secondaryHref),
                      className: theme.secondaryButton,
                      children: /* @__PURE__ */ jsx4(
                        EditableText4,
                        {
                          blockId: block.id,
                          path: "secondaryLabel",
                          className: "text-sm font-semibold"
                        }
                      )
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs4(
                "div",
                {
                  className: `relative ${stackedHero ? atLeastSm ? "grid gap-5 grid-cols-[minmax(0,1.2fr)_minmax(16rem,20rem)]" : "grid gap-5" : "space-y-4"}`,
                  children: [
                    /* @__PURE__ */ jsx4("div", { className: theme.mediaFrame, children: /* @__PURE__ */ jsx4(
                      EditableImage,
                      {
                        blockId: block.id,
                        path: "imageUrl",
                        altPath: "imageAlt",
                        className: `relative ${stackedHero ? "aspect-[16/11]" : "aspect-[4/5]"}`,
                        imageClassName: "h-full w-full object-cover"
                      }
                    ) }),
                    /* @__PURE__ */ jsxs4(
                      "div",
                      {
                        className: `${theme.panel} ${airHero ? atLeastSm ? "pl-8 pr-0" : "" : "px-5 py-5"} ${airHero ? "px-0 py-5" : ""}`,
                        children: [
                          /* @__PURE__ */ jsx4(
                            EditableText4,
                            {
                              blockId: block.id,
                              path: "spotlightLabel",
                              className: `block ${theme.label}`
                            }
                          ),
                          /* @__PURE__ */ jsx4(
                            EditableText4,
                            {
                              blockId: block.id,
                              path: "spotlightValue",
                              className: `mt-3 block text-3xl font-semibold tracking-[-0.04em] ${theme.emphasisText}`
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
};
var heroSpotlightDefinition = definePhotonBlockDefinition4({
  type: "hero-spotlight",
  label: "Hero Spotlight",
  labelKey: "marketingDemoKit.blocks.heroSpotlight.label",
  description: "Hero block with a premium split layout and editorial CTA stack.",
  descriptionKey: "marketingDemoKit.blocks.heroSpotlight.description",
  category: "Hero",
  icon: "panels-top-left",
  component: HeroSpotlight,
  defaults: {
    variant: "default",
    eyebrow: createPhotonLocalizedDefault4({
      en: "Package-first builder system",
      ru: "Package-first \u0441\u0438\u0441\u0442\u0435\u043C\u0430 builder"
    }),
    title: createPhotonLocalizedDefault4({
      en: "Edit the real website, not a fake admin copy",
      ru: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0430\u0439\u0442, \u0430 \u043D\u0435 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u0443\u044E \u0430\u0434\u043C\u0438\u043D\u0441\u043A\u0443\u044E \u043A\u043E\u043F\u0438\u044E"
    }),
    body: createPhotonLocalizedDefault4({
      en: "Photon turns your actual Next.js surface into the editing canvas. Content mode focuses on inline edits, while Builder mode exposes a full control room with palette, drag-and-drop and inspector panels.",
      ru: "Photon \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0432\u0430\u0448\u0443 \u0440\u0435\u0430\u043B\u044C\u043D\u0443\u044E Next.js-\u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C \u0432 \u0445\u043E\u043B\u0441\u0442 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F. Content mode \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043D\u043B\u0430\u0439\u043D\u043E\u0432\u044B\u043C, \u0430 Builder mode \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u044B\u0439 control room \u0441 palette, drag-and-drop \u0438 inspector-\u043F\u0430\u043D\u0435\u043B\u044F\u043C\u0438."
    }),
    primaryLabel: createPhotonLocalizedDefault4({
      en: "Enter builder mode",
      ru: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C builder mode"
    }),
    primaryMetaLabel: createPhotonLocalizedDefault4({
      en: "Launch",
      ru: "\u0417\u0430\u043F\u0443\u0441\u043A"
    }),
    primaryHref: "#builder",
    secondaryLabel: createPhotonLocalizedDefault4({
      en: "See package architecture",
      ru: "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0443 \u043F\u0430\u043A\u0435\u0442\u043E\u0432"
    }),
    secondaryHref: "#packages",
    spotlightLabel: createPhotonLocalizedDefault4({
      en: "Target shape",
      ru: "\u0426\u0435\u043B\u0435\u0432\u0430\u044F \u0444\u043E\u0440\u043C\u0430"
    }),
    spotlightValue: createPhotonLocalizedDefault4({
      en: "Next.js + Laravel + installable block kits",
      ru: "Next.js + Laravel + installable block kits"
    }),
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Creative team controlling digital product surfaces"
  },
  fields: [
    {
      path: "variant",
      label: "Variant",
      kind: "select",
      group: "style",
      localization: "shared",
      options: marketingDemoBlockVariantOptions
    },
    {
      path: "eyebrow",
      label: "Eyebrow",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "title",
      label: "Title",
      kind: "textarea",
      group: "content",
      localization: "localized"
    },
    {
      path: "body",
      label: "Body",
      kind: "textarea",
      group: "content",
      localization: "localized"
    },
    {
      path: "primaryLabel",
      label: "Primary CTA",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "primaryMetaLabel",
      label: "Primary meta label",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "primaryHref",
      label: "Primary link",
      kind: "url",
      group: "content",
      localization: "shared"
    },
    {
      path: "secondaryLabel",
      label: "Secondary CTA",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "secondaryHref",
      label: "Secondary link",
      kind: "url",
      group: "content",
      localization: "shared"
    },
    {
      path: "spotlightLabel",
      label: "Spotlight label",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "spotlightValue",
      label: "Spotlight value",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "imageUrl",
      label: "Image",
      kind: "image",
      group: "content",
      localization: "shared"
    },
    {
      path: "imageAlt",
      label: "Image alt",
      kind: "text",
      group: "content",
      localization: "localized"
    }
  ]
});

// src/blocks/init-landing/init-landing-cta.tsx
import {
  createPhotonLocalizedDefault as createPhotonLocalizedDefault5,
  definePhotonBlockDefinition as definePhotonBlockDefinition5,
  EditableText as EditableText5,
  EditableTextarea as EditableTextarea4,
  usePhotonStore as usePhotonStore6
} from "@init/photon/public";

// src/blocks/init-landing/shared.tsx
import {
  createPhotonBlockLocalizationSchema,
  getPhotonSurfaceModeStyle,
  usePhotonRenderDepth as usePhotonRenderDepth4,
  usePhotonStore as usePhotonStore5,
  PhotonLink as PhotonLink4
} from "@init/photon/public";
import {
  ArrowRight,
  Award,
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
  Zap
} from "lucide-react";
import {
  useEffect as useEffect2,
  useRef as useRef2,
  useState as useState2
} from "react";
import { Fragment, jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var initLandingIcons = {
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
  zap: Zap
};
var initLandingIconFieldOptions = Object.keys(initLandingIcons).map((key) => ({
  label: key,
  value: key
}));
var createInitLandingBlockLocalizationSchema = (fields10) => {
  const schema = createPhotonBlockLocalizationSchema(fields10);
  return {
    localized: schema.localized,
    shared: Array.from(/* @__PURE__ */ new Set([...schema.shared, "variant"])).sort()
  };
};
var sectionFrameClassName = "mx-auto max-w-7xl px-6 lg:px-8";
var useInitLandingSectionBleedStyle = () => {
  const renderDepth = usePhotonRenderDepth4();
  return renderDepth === 0 ? getPhotonSurfaceModeStyle("bleed") : void 0;
};
var useInitLandingSurfaceBreakpoints = () => useSurfaceBreakpoints();
var useInitLandingReveal = () => {
  const sectionRef = useRef2(null);
  const mode = usePhotonStore5((state) => state.mode);
  useEffect2(() => {
    const scope = sectionRef.current;
    if (!scope) {
      return;
    }
    const elements = scope.querySelectorAll(".photon-init-reveal");
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [mode]);
  return sectionRef;
};
var revealClassName = "photon-init-reveal translate-y-4 opacity-0 transition-all duration-700";
var InitBrandMark = ({ label }) => /* @__PURE__ */ jsxs5(Fragment, { children: [
  /* @__PURE__ */ jsx5("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--photon-site-accent)] transition-transform duration-300 group-hover:scale-105", children: /* @__PURE__ */ jsx5("span", { className: "font-mono text-sm font-bold tracking-tighter text-white", children: "{i}" }) }),
  /* @__PURE__ */ jsx5("span", { className: "text-xl font-semibold tracking-tight text-[var(--photon-site-text)]", children: label })
] });
var InitLandingActionButton = ({
  children,
  href,
  inverted = false,
  outline = false
}) => /* @__PURE__ */ jsx5(
  PhotonLink4,
  {
    href,
    className: [
      "inline-flex items-center justify-center rounded-[1.2rem] px-6 py-3 text-base font-medium transition-all duration-300",
      inverted ? outline ? "border border-white/30 text-white hover:bg-white/10" : "bg-white text-[var(--photon-site-text)] hover:bg-white/90 hover:shadow-lg" : outline ? "border border-[color-mix(in_srgb,var(--photon-site-border)_84%,white)] bg-transparent text-[var(--photon-site-text)] hover:bg-[color-mix(in_srgb,var(--photon-site-surface)_96%,white)]" : "bg-[var(--photon-site-accent)] text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-[color-mix(in_srgb,var(--photon-site-accent)_28%,transparent)]"
    ].join(" "),
    children
  }
);
var InitLandingNavLink = ({
  href,
  label,
  onNavigate
}) => /* @__PURE__ */ jsx5(
  PhotonLink4,
  {
    href,
    className: "relative text-sm font-medium text-[var(--photon-site-muted-text)] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--photon-site-accent)] after:transition-all after:duration-300 hover:text-[var(--photon-site-text)] hover:after:w-full",
    onClick: onNavigate,
    children: label
  }
);
var usePreviewSurface = () => {
  const mode = usePhotonStore5((state) => state.mode);
  return mode === "preview";
};
var useInitLandingMobileMenu = () => {
  const [isOpen, setIsOpen] = useState2(false);
  return {
    close: () => setIsOpen(false),
    icon: isOpen ? X : Menu,
    isOpen,
    toggle: () => setIsOpen((value) => !value)
  };
};
var ArrowRightIcon = ArrowRight;

// src/blocks/init-landing/init-landing-cta.tsx
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
var fields = [
  {
    path: "sectionId",
    label: "Section id",
    kind: "text",
    group: "layout",
    localization: "shared"
  },
  {
    path: "title",
    label: "Title",
    kind: "text",
    group: "content",
    localization: "localized"
  },
  {
    path: "description",
    label: "Description",
    kind: "textarea",
    group: "content",
    localization: "localized"
  },
  {
    path: "primaryCta",
    label: "Primary CTA",
    kind: "object",
    group: "content",
    localization: "localized",
    fields: [
      { path: "label", label: "Label", kind: "text" },
      { path: "href", label: "Href", kind: "url", localization: "shared" }
    ]
  },
  {
    path: "secondaryCta",
    label: "Secondary CTA",
    kind: "object",
    group: "content",
    localization: "localized",
    fields: [
      { path: "label", label: "Label", kind: "text" },
      { path: "href", label: "Href", kind: "url", localization: "shared" }
    ]
  },
  {
    path: "note",
    label: "Note",
    kind: "text",
    group: "content",
    localization: "localized"
  }
];
var InitLandingCtaBlock = ({
  block
}) => {
  const mode = usePhotonStore6((state) => state.mode);
  const sectionRef = useInitLandingReveal();
  const bleedStyle = useInitLandingSectionBleedStyle();
  const { ref, atLeastSm, atLeastLg, atLeastXl } = useInitLandingSurfaceBreakpoints();
  const reveal = mode === "preview" ? revealClassName : "translate-y-0 opacity-100";
  return /* @__PURE__ */ jsxs6(
    "section",
    {
      ref,
      id: block.props.sectionId,
      className: [
        "relative overflow-hidden bg-[var(--photon-site-text)] py-24",
        atLeastLg ? "py-32" : ""
      ].join(" "),
      style: bleedStyle,
      children: [
        /* @__PURE__ */ jsxs6("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: [
          /* @__PURE__ */ jsx6("div", { className: "absolute -right-1/4 -top-1/2 h-[600px] w-[600px] rounded-full bg-[color-mix(in_srgb,var(--photon-site-accent)_10%,transparent)] blur-[120px]" }),
          /* @__PURE__ */ jsx6("div", { className: "absolute -bottom-1/2 -left-1/4 h-[400px] w-[400px] rounded-full bg-[color-mix(in_srgb,var(--photon-site-accent)_5%,transparent)] blur-[100px]" })
        ] }),
        /* @__PURE__ */ jsx6("div", { className: `relative ${sectionFrameClassName}`, ref: sectionRef, children: /* @__PURE__ */ jsxs6("div", { className: "mx-auto max-w-3xl text-center", children: [
          /* @__PURE__ */ jsx6(
            EditableText5,
            {
              blockId: block.id,
              path: "title",
              as: "h2",
              className: [
                reveal,
                "text-balance font-semibold tracking-tight text-[var(--photon-site-background)]",
                atLeastXl ? "text-5xl" : atLeastLg ? "text-4xl" : "text-3xl"
              ].join(" ")
            }
          ),
          /* @__PURE__ */ jsx6(
            EditableTextarea4,
            {
              blockId: block.id,
              path: "description",
              className: `${reveal} mt-6 text-lg leading-relaxed text-[color-mix(in_srgb,var(--photon-site-background)_70%,transparent)]`
            }
          ),
          /* @__PURE__ */ jsxs6(
            "div",
            {
              className: [
                reveal,
                "mt-10 flex items-center justify-center gap-4",
                atLeastSm ? "flex-row" : "flex-col"
              ].join(" "),
              children: [
                /* @__PURE__ */ jsxs6(
                  InitLandingActionButton,
                  {
                    href: block.props.primaryCta.href,
                    inverted: true,
                    children: [
                      block.props.primaryCta.label,
                      /* @__PURE__ */ jsx6(ArrowRightIcon, { className: "ml-2 h-4 w-4" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx6(
                  InitLandingActionButton,
                  {
                    href: block.props.secondaryCta.href,
                    inverted: true,
                    outline: true,
                    children: block.props.secondaryCta.label
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx6(
            EditableText5,
            {
              blockId: block.id,
              path: "note",
              className: `${reveal} mt-8 text-sm text-[color-mix(in_srgb,var(--photon-site-background)_50%,transparent)]`
            }
          )
        ] }) })
      ]
    }
  );
};
var initLandingCtaDefinition = definePhotonBlockDefinition5({
  type: "init-landing-cta",
  label: "Init Landing CTA",
  description: "Final call to action from the Init landing page.",
  category: "CTA",
  icon: "megaphone",
  component: InitLandingCtaBlock,
  fields,
  localizationSchema: createInitLandingBlockLocalizationSchema(fields),
  defaults: {
    sectionId: "contact",
    title: createPhotonLocalizedDefault5({
      en: "\u041D\u0443\u0436\u0435\u043D \u0441\u0430\u0439\u0442, \u043D\u043E \u043D\u0435\u043F\u043E\u043D\u044F\u0442\u043D\u043E \u0441 \u043A\u0430\u043A\u043E\u0433\u043E \u0444\u043E\u0440\u043C\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u0442\u044C?",
      ru: "\u041D\u0443\u0436\u0435\u043D \u0441\u0430\u0439\u0442, \u043D\u043E \u043D\u0435\u043F\u043E\u043D\u044F\u0442\u043D\u043E \u0441 \u043A\u0430\u043A\u043E\u0433\u043E \u0444\u043E\u0440\u043C\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u0442\u044C?"
    }),
    description: createPhotonLocalizedDefault5({
      en: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443, \u0430 \u043C\u044B \u0441\u043A\u0430\u0436\u0435\u043C, \u0433\u0434\u0435 \u0445\u0432\u0430\u0442\u0438\u0442 \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u0433\u0434\u0435 \u043B\u0443\u0447\u0448\u0435 \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0430\u0439\u0442 \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440, \u0430 \u0433\u0434\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0443\u0436\u0435\u043D custom.",
      ru: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443, \u0430 \u043C\u044B \u0441\u043A\u0430\u0436\u0435\u043C, \u0433\u0434\u0435 \u0445\u0432\u0430\u0442\u0438\u0442 \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u0433\u0434\u0435 \u043B\u0443\u0447\u0448\u0435 \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0430\u0439\u0442 \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440, \u0430 \u0433\u0434\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0443\u0436\u0435\u043D custom."
    }),
    primaryCta: { label: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441", href: "mailto:hello@init.dev" },
    secondaryCta: { label: "hello@init.dev", href: "mailto:hello@init.dev" },
    note: createPhotonLocalizedDefault5({
      en: "\u041A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0440\u0430\u0437\u0431\u043E\u0440 \u0437\u0430\u0434\u0430\u0447\u0438 \u0431\u0435\u0437 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432",
      ru: "\u041A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0440\u0430\u0437\u0431\u043E\u0440 \u0437\u0430\u0434\u0430\u0447\u0438 \u0431\u0435\u0437 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432"
    })
  }
});

// src/blocks/init-landing/init-landing-footer.tsx
import {
  collectPhotonFooterExtensionItems,
  createPhotonLocalizedDefault as createPhotonLocalizedDefault6,
  definePhotonBlockDefinition as definePhotonBlockDefinition6,
  EditableText as EditableText6,
  EditableTextarea as EditableTextarea5,
  resolvePhotonSiteFrameExtensions,
  usePhotonStore as usePhotonStore7,
  PhotonLink as PhotonLink5
} from "@init/photon/public";
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
var fields2 = [
  {
    path: "brandLabel",
    label: "Brand label",
    kind: "text",
    group: "content",
    localization: "localized"
  },
  {
    path: "homeHref",
    label: "Home href",
    kind: "url",
    group: "content",
    localization: "shared"
  },
  {
    path: "brandDescription",
    label: "Brand description",
    kind: "textarea",
    group: "content",
    localization: "localized"
  },
  {
    path: "services",
    label: "Services",
    kind: "repeater",
    group: "content",
    localization: "localized",
    itemLabelPath: "name",
    addLabel: "Add service link",
    fields: [
      { path: "name", label: "Name", kind: "text" },
      { path: "href", label: "Href", kind: "url", localization: "shared" }
    ]
  },
  {
    path: "company",
    label: "Company",
    kind: "repeater",
    group: "content",
    localization: "localized",
    itemLabelPath: "name",
    addLabel: "Add company link",
    fields: [
      { path: "name", label: "Name", kind: "text" },
      { path: "href", label: "Href", kind: "url", localization: "shared" }
    ]
  },
  {
    path: "legal",
    label: "Legal",
    kind: "repeater",
    group: "content",
    localization: "localized",
    itemLabelPath: "name",
    addLabel: "Add legal link",
    fields: [
      { path: "name", label: "Name", kind: "text" },
      { path: "href", label: "Href", kind: "url", localization: "shared" }
    ]
  },
  {
    path: "disabledExtensionIds",
    label: "Disabled package extensions",
    kind: "tags",
    group: "layout",
    localization: "shared"
  },
  {
    path: "disabledExtensionItemIds",
    label: "Disabled package extension items",
    kind: "tags",
    group: "layout",
    localization: "shared"
  },
  {
    path: "contact",
    label: "Contact",
    kind: "object",
    group: "content",
    localization: "localized",
    fields: [
      { path: "email", label: "Email", kind: "text", localization: "shared" },
      { path: "phone", label: "Phone", kind: "text", localization: "shared" },
      { path: "location", label: "Location", kind: "text" }
    ]
  }
];
var normalizeFooterStringItems = (value) => Array.isArray(value) ? value.map((item) => typeof item === "string" ? item.trim() : "").filter(Boolean) : [];
var normalizeFooterHref = (href) => typeof href === "string" ? href.trim() : "";
var getFooterLinkPathname = (href) => {
  const cleanHref = normalizeFooterHref(href);
  if (!cleanHref.startsWith("/") || cleanHref.startsWith("//")) {
    return cleanHref;
  }
  return (cleanHref.split(/[?#]/u)[0] ?? "/").replace(/\/+$/u, "") || "/";
};
var getFooterLinkDedupeKey = (href) => `route:${getFooterLinkPathname(href).toLowerCase()}`;
var collectUniqueFooterLinks = (links, hiddenKeys = /* @__PURE__ */ new Set()) => {
  const seenKeys = /* @__PURE__ */ new Set();
  return links.filter((link) => {
    const key = getFooterLinkDedupeKey(link.href);
    if (key === "route:" || hiddenKeys.has(key) || seenKeys.has(key)) {
      return false;
    }
    seenKeys.add(key);
    return true;
  });
};
var normalizeExtensionFooterColumn = (column) => ({
  id: column.id,
  title: column.title,
  links: column.links.map((link) => ({
    ...link,
    name: link.label
  }))
});
var InitLandingFooterBlock = ({
  block
}) => {
  const currentRoute = usePhotonStore7((state) => state.document.route);
  const document2 = usePhotonStore7((state) => state.document);
  const isAdmin = usePhotonStore7((state) => state.isAdmin);
  const mode = usePhotonStore7((state) => state.mode);
  const pageSettings = usePhotonStore7((state) => state.pageSettings);
  const resources = usePhotonStore7((state) => state.resources);
  const site = usePhotonStore7((state) => state.site);
  const siteFrameExtensions = usePhotonStore7(
    (state) => state.siteFrameExtensions
  );
  const bleedStyle = useInitLandingSectionBleedStyle();
  const { ref, atLeastSm, atLeastMd, atLeastLg } = useInitLandingSurfaceBreakpoints();
  const extensionContext = {
    document: document2,
    resources,
    pageSettings,
    site,
    mode,
    isAdmin,
    currentRoute
  };
  const footerExtensionItems = collectPhotonFooterExtensionItems(
    resolvePhotonSiteFrameExtensions(
      siteFrameExtensions,
      normalizeFooterStringItems(block.props.disabledExtensionIds)
    ),
    normalizeFooterStringItems(block.props.disabledExtensionItemIds),
    extensionContext
  );
  const localFooterColumns = [
    {
      title: "\u0423\u0441\u043B\u0443\u0433\u0438",
      links: block.props.services.map((item, index) => ({
        ...item,
        labelPath: `services.${index}.name`
      }))
    },
    {
      title: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",
      links: block.props.company.map((item, index) => ({
        ...item,
        labelPath: `company.${index}.name`
      }))
    }
  ];
  const footerColumns = [
    ...localFooterColumns,
    ...footerExtensionItems.slots.navigation.navigationColumns.map(
      normalizeExtensionFooterColumn
    )
  ].map((column) => ({
    ...column,
    links: collectUniqueFooterLinks(column.links)
  })).filter((column) => column.links.length > 0);
  const footerColumnKeys = new Set(
    footerColumns.flatMap(
      (column) => column.links.map((link) => getFooterLinkDedupeKey(link.href))
    )
  );
  const legalLinks = collectUniqueFooterLinks(
    [
      ...block.props.legal.map((item, index) => ({
        ...item,
        labelPath: `legal.${index}.name`
      })),
      ...footerExtensionItems.slots.legal.links.map((link) => ({
        ...link,
        name: link.label
      }))
    ],
    footerColumnKeys
  );
  const renderFooterLinkLabel = (link) => link.labelPath ? /* @__PURE__ */ jsx7(EditableText6, { blockId: block.id, path: link.labelPath }) : link.name ?? link.label;
  return /* @__PURE__ */ jsx7(
    "footer",
    {
      ref,
      className: "border-t border-[var(--photon-site-border)] bg-[var(--photon-site-surface)]",
      style: bleedStyle,
      children: /* @__PURE__ */ jsxs7(
        "div",
        {
          className: [
            "mx-auto max-w-7xl px-6 py-16",
            atLeastLg ? "px-8" : ""
          ].join(" "),
          children: [
            /* @__PURE__ */ jsxs7(
              "div",
              {
                className: [
                  "grid gap-8",
                  atLeastMd ? "grid-cols-4" : "grid-cols-2",
                  atLeastLg ? "gap-12" : ""
                ].join(" "),
                children: [
                  /* @__PURE__ */ jsxs7(
                    "div",
                    {
                      className: ["col-span-2", atLeastMd ? "md:col-span-1" : ""].join(
                        " "
                      ),
                      children: [
                        /* @__PURE__ */ jsx7(
                          PhotonLink5,
                          {
                            href: String(block.props.homeHref),
                            className: "group flex items-center gap-2",
                            children: /* @__PURE__ */ jsx7(
                              InitBrandMark,
                              {
                                label: /* @__PURE__ */ jsx7(EditableText6, { blockId: block.id, path: "brandLabel" })
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsx7(
                          EditableTextarea5,
                          {
                            blockId: block.id,
                            path: "brandDescription",
                            className: "mt-4 max-w-xs text-sm leading-relaxed text-[var(--photon-site-muted-text)]"
                          }
                        )
                      ]
                    }
                  ),
                  footerColumns.map((column) => /* @__PURE__ */ jsxs7("div", { children: [
                    /* @__PURE__ */ jsx7("h3", { className: "mb-4 text-sm font-semibold text-[var(--photon-site-text)]", children: column.titlePath ? /* @__PURE__ */ jsx7(EditableText6, { blockId: block.id, path: column.titlePath }) : column.title }),
                    /* @__PURE__ */ jsx7("ul", { className: "space-y-3", children: column.links.map((item) => /* @__PURE__ */ jsx7("li", { children: /* @__PURE__ */ jsx7(
                      PhotonLink5,
                      {
                        href: item.href,
                        target: item.target,
                        rel: item.rel,
                        className: "text-sm text-[var(--photon-site-muted-text)] transition-colors hover:text-[var(--photon-site-text)]",
                        children: renderFooterLinkLabel(item)
                      }
                    ) }, `${column.id ?? column.title}:${item.name ?? item.label}:${item.href}`)) })
                  ] }, column.id ?? column.title)),
                  /* @__PURE__ */ jsxs7("div", { children: [
                    /* @__PURE__ */ jsx7("h3", { className: "mb-4 text-sm font-semibold text-[var(--photon-site-text)]", children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B" }),
                    /* @__PURE__ */ jsxs7("ul", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsx7("li", { children: /* @__PURE__ */ jsx7(
                        PhotonLink5,
                        {
                          href: `mailto:${block.props.contact.email}`,
                          className: "text-sm text-[var(--photon-site-muted-text)] transition-colors hover:text-[var(--photon-site-text)]",
                          children: /* @__PURE__ */ jsx7(EditableText6, { blockId: block.id, path: "contact.email" })
                        }
                      ) }),
                      /* @__PURE__ */ jsx7("li", { children: /* @__PURE__ */ jsx7(
                        PhotonLink5,
                        {
                          href: `tel:${block.props.contact.phone}`,
                          className: "text-sm text-[var(--photon-site-muted-text)] transition-colors hover:text-[var(--photon-site-text)]",
                          children: /* @__PURE__ */ jsx7(EditableText6, { blockId: block.id, path: "contact.phone" })
                        }
                      ) }),
                      /* @__PURE__ */ jsx7("li", { className: "text-sm text-[var(--photon-site-muted-text)]", children: /* @__PURE__ */ jsx7(EditableText6, { blockId: block.id, path: "contact.location" }) })
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs7(
              "div",
              {
                className: [
                  "mt-12 flex items-center justify-between gap-4 border-t border-[var(--photon-site-border)] pt-8",
                  atLeastSm ? "flex-row" : "flex-col"
                ].join(" "),
                children: [
                  /* @__PURE__ */ jsxs7("p", { className: "text-sm text-[var(--photon-site-muted-text)]", children: [
                    "\xA9 ",
                    (/* @__PURE__ */ new Date()).getFullYear(),
                    " init. All rights reserved."
                  ] }),
                  /* @__PURE__ */ jsx7("div", { className: "flex items-center gap-6", children: legalLinks.map((item) => /* @__PURE__ */ jsx7(
                    PhotonLink5,
                    {
                      href: item.href,
                      target: item.target,
                      rel: item.rel,
                      className: "text-sm text-[var(--photon-site-muted-text)] transition-colors hover:text-[var(--photon-site-text)]",
                      children: renderFooterLinkLabel(item)
                    },
                    `${item.name ?? item.label}:${item.href}:legal`
                  )) })
                ]
              }
            )
          ]
        }
      )
    }
  );
};
var initLandingFooterDefinition = definePhotonBlockDefinition6({
  type: "init-landing-footer",
  label: "Init Landing Footer",
  description: "Footer from the Init landing page.",
  category: "Layout",
  icon: "panel-bottom-open",
  component: InitLandingFooterBlock,
  fields: fields2,
  localizationSchema: createInitLandingBlockLocalizationSchema(fields2),
  defaults: {
    brandLabel: createPhotonLocalizedDefault6({
      en: "init",
      ru: "init"
    }),
    homeHref: "/",
    brandDescription: createPhotonLocalizedDefault6({
      en: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0430\u0439\u0442\u043E\u0432 \u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0444\u043E\u0440\u043C\u0430\u0442\u0430\u0445: \u0433\u043E\u0442\u043E\u0432\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u043C\u043E\u0434\u0443\u043B\u044C\u043D\u0430\u044F \u0441\u0431\u043E\u0440\u043A\u0430 \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 custom.",
      ru: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0430\u0439\u0442\u043E\u0432 \u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0444\u043E\u0440\u043C\u0430\u0442\u0430\u0445: \u0433\u043E\u0442\u043E\u0432\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u043C\u043E\u0434\u0443\u043B\u044C\u043D\u0430\u044F \u0441\u0431\u043E\u0440\u043A\u0430 \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 custom."
    }),
    services: [
      { name: "\u0413\u043E\u0442\u043E\u0432\u044B\u0435 \u0441\u0430\u0439\u0442\u044B", href: "#services" },
      { name: "\u0421\u0430\u0439\u0442-\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440", href: "#services" },
      { name: "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430", href: "#services" },
      { name: "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B \u0438 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0438", href: "#services" }
    ],
    company: [
      { name: "\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B", href: "#why-us" },
      { name: "\u042D\u0442\u0430\u043F\u044B", href: "#process" },
      { name: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C", href: "#pricing" },
      { name: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B", href: "#contact" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" }
    ],
    contact: {
      email: "hello@init.dev",
      phone: "+7 (700) 123-45-67",
      location: "Astana, KZ"
    }
  }
});

// src/blocks/init-landing/init-landing-header.tsx
import {
  collectPhotonHeaderExtensionItems,
  createPhotonLocalizedDefault as createPhotonLocalizedDefault7,
  definePhotonBlockDefinition as definePhotonBlockDefinition7,
  EditableText as EditableText7,
  resolvePhotonSiteFrameExtensions as resolvePhotonSiteFrameExtensions2,
  usePhotonI18n,
  usePhotonStore as usePhotonStore8,
  PhotonLink as PhotonLink6,
  PhotonSiteSearch,
  resolvePhotonSiteFrameMobileControls,
  usePhotonSiteFrameScrollLock
} from "@init/photon/public";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, ChevronDown, LogIn } from "lucide-react";
import { useEffect as useEffect3 } from "react";
import { Fragment as Fragment2, jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
var appendCurrentSearchParams = (href) => {
  if (typeof window === "undefined" || window.location.search === "") {
    return href;
  }
  const url = new URL(href, window.location.origin);
  const currentSearchParams = new URLSearchParams(window.location.search);
  for (const [key, value] of currentSearchParams.entries()) {
    if (!url.searchParams.has(key)) {
      url.searchParams.append(key, value);
    }
  }
  return `${url.pathname}${url.search}${url.hash}`;
};
var fields3 = [
  {
    path: "brandLabel",
    label: "Brand label",
    kind: "text",
    group: "content",
    localization: "localized"
  },
  {
    path: "homeHref",
    label: "Home href",
    kind: "url",
    group: "content",
    localization: "shared"
  },
  {
    path: "navItems",
    label: "Navigation items",
    kind: "repeater",
    group: "content",
    localization: "localized",
    itemLabelPath: "label",
    addLabel: "Add navigation item",
    fields: [
      { path: "label", label: "Label", kind: "text" },
      { path: "href", label: "Href", kind: "url", localization: "shared" }
    ]
  },
  {
    path: "cta",
    label: "CTA",
    kind: "object",
    group: "content",
    localization: "localized",
    fields: [
      { path: "label", label: "Label", kind: "text" },
      { path: "href", label: "Href", kind: "url", localization: "shared" }
    ]
  },
  {
    path: "searchPlaceholder",
    label: "Search placeholder",
    kind: "text",
    group: "content",
    localization: "localized"
  },
  {
    path: "showLocaleSwitcher",
    label: "Show locale switcher",
    kind: "toggle",
    group: "layout",
    localization: "shared"
  },
  {
    path: "showLoginAction",
    label: "Show auth button",
    kind: "toggle",
    group: "layout",
    localization: "shared"
  },
  {
    path: "mobile.menu.fixedTrigger",
    label: "Fixed mobile burger button",
    kind: "toggle",
    group: "layout",
    localization: "shared"
  },
  {
    path: "mobile.menu.scrollLock",
    label: "Lock scroll when mobile menu is open",
    kind: "toggle",
    group: "layout",
    localization: "shared"
  },
  {
    path: "mobile.menu.floating",
    label: "Floating mobile burger",
    kind: "toggle",
    group: "layout",
    localization: "shared"
  },
  {
    path: "mobile.menu.disableFloatingOnSmallScreens",
    label: "Disable floating burger on small screens",
    kind: "toggle",
    group: "layout",
    localization: "shared"
  },
  {
    path: "disabledExtensionIds",
    label: "Disabled package extensions",
    kind: "tags",
    group: "layout",
    localization: "shared"
  },
  {
    path: "disabledExtensionItemIds",
    label: "Disabled package extension items",
    kind: "tags",
    group: "layout",
    localization: "shared"
  },
  {
    path: "loginLabel",
    label: "Auth button label",
    kind: "text",
    group: "content",
    localization: "localized"
  }
];
var normalizeHeaderStringItems = (value) => Array.isArray(value) ? value.map((item) => typeof item === "string" ? item.trim() : "").filter(Boolean) : [];
var normalizeHeaderHref = (href) => typeof href === "string" ? href.trim() : "";
var getHeaderLinkPathname = (href) => {
  const cleanHref = normalizeHeaderHref(href);
  if (!cleanHref.startsWith("/") || cleanHref.startsWith("//")) {
    return cleanHref;
  }
  return (cleanHref.split(/[?#]/u)[0] ?? "/").replace(/\/+$/u, "") || "/";
};
var getHeaderLinkDedupeKey = (href) => `route:${getHeaderLinkPathname(href).toLowerCase()}`;
var hasAuthenticatedUser = (resources) => {
  const auth = resources.auth;
  return Boolean(auth?.user);
};
var getActionVisibleHref = (action, authenticatedUser) => authenticatedUser && (action.kind ?? "link") === "auth" ? action.authenticatedHref ?? action.href : action.href;
var collectUniqueHeaderLinks = (links, hiddenKeys = /* @__PURE__ */ new Set()) => {
  const seenKeys = /* @__PURE__ */ new Set();
  return links.filter((link) => {
    const key = getHeaderLinkDedupeKey(link.href);
    if (key === "route:" || hiddenKeys.has(key) || seenKeys.has(key)) {
      return false;
    }
    seenKeys.add(key);
    return true;
  });
};
var InitLandingLocaleSelect = ({
  currentRoute,
  locale,
  locales,
  label
}) => {
  const activeLocale = locales.find((item) => item.code === locale) ?? locales[0] ?? null;
  if (!activeLocale || locales.length <= 1) {
    return null;
  }
  const buildLocaleHref = (nextLocale) => {
    const normalizedRoute = currentRoute.trim() || "/";
    if (nextLocale === "en") {
      return normalizedRoute === "/" ? "/en" : `/en${normalizedRoute}`;
    }
    return normalizedRoute.startsWith("/en/") ? normalizedRoute.slice(3) : normalizedRoute === "/en" ? "/" : normalizedRoute;
  };
  return /* @__PURE__ */ jsxs8(DropdownMenu.Root, { modal: false, children: [
    /* @__PURE__ */ jsx8(DropdownMenu.Trigger, { asChild: true, children: /* @__PURE__ */ jsxs8(
      "button",
      {
        type: "button",
        className: "inline-flex h-12 cursor-pointer items-center justify-between gap-3 rounded-[1.2rem] border border-[#e6ddd4] bg-[#fffdf9] px-4 text-sm font-medium text-[#211916] opacity-100 shadow-[0_10px_30px_-20px_rgba(32,22,18,0.16)] transition-all duration-300",
        children: [
          /* @__PURE__ */ jsxs8("span", { className: "flex min-w-0 items-center gap-2.5", children: [
            /* @__PURE__ */ jsx8("span", { className: "text-[10px] uppercase tracking-[0.24em] text-[#6b5f59]", children: label }),
            /* @__PURE__ */ jsx8("span", { className: "truncate uppercase", children: activeLocale.label })
          ] }),
          /* @__PURE__ */ jsx8(ChevronDown, { className: "h-4 w-4 shrink-0 text-[#6b5f59]" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx8(
      DropdownMenu.Content,
      {
        align: "end",
        sideOffset: 8,
        collisionPadding: { top: 24, right: 16, bottom: 24, left: 16 },
        className: "z-50 min-w-[12rem] overflow-hidden rounded-[1.35rem] border border-[#e6ddd4] bg-[#fffdf9] p-1.5 text-[#211916] opacity-100 shadow-[0_24px_80px_rgba(32,22,18,0.18)] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        children: /* @__PURE__ */ jsx8(DropdownMenu.RadioGroup, { value: locale, children: locales.map((item) => /* @__PURE__ */ jsxs8(
          DropdownMenu.RadioItem,
          {
            value: item.code,
            className: "relative flex cursor-pointer select-none items-center justify-between rounded-[1rem] px-3 py-2.5 text-sm font-medium text-[#211916] opacity-100 outline-none transition data-[highlighted]:bg-[#f7efe8] data-[state=checked]:bg-[#fbf4ee]",
            onSelect: (event) => {
              event.preventDefault();
              if (typeof window !== "undefined") {
                window.location.assign(
                  appendCurrentSearchParams(buildLocaleHref(item.code))
                );
              }
            },
            children: [
              /* @__PURE__ */ jsxs8("span", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsx8("span", { className: "text-[10px] uppercase tracking-[0.24em] text-[#6b5f59]", children: label }),
                /* @__PURE__ */ jsx8("span", { className: "uppercase text-[#211916]", children: item.label })
              ] }),
              /* @__PURE__ */ jsx8(DropdownMenu.ItemIndicator, { className: "ml-3 inline-flex h-4 w-4 items-center justify-center text-[#df2330]", children: /* @__PURE__ */ jsx8(Check, { className: "h-4 w-4" }) })
            ]
          },
          item.code
        )) })
      }
    )
  ] });
};
var InitLandingHeaderBlock = ({
  block
}) => {
  const menu = useInitLandingMobileMenu();
  const mobileControls = resolvePhotonSiteFrameMobileControls(block.props.mobile);
  const currentRoute = usePhotonStore8((state) => state.document.route);
  const document2 = usePhotonStore8((state) => state.document);
  const isAdmin = usePhotonStore8((state) => state.isAdmin);
  const mode = usePhotonStore8((state) => state.mode);
  const pageSettings = usePhotonStore8((state) => state.pageSettings);
  const requestAuth = usePhotonStore8((state) => state.requestAuth);
  const resources = usePhotonStore8((state) => state.resources);
  const site = usePhotonStore8((state) => state.site);
  const siteFrameExtensions = usePhotonStore8(
    (state) => state.siteFrameExtensions
  );
  const previewSurface = usePreviewSurface();
  const stickyPreviewSurface = previewSurface && mode === "preview";
  const { locale, publicLocales, translate } = usePhotonI18n();
  const { ref, width, atLeastXl } = useInitLandingSurfaceBreakpoints();
  const desktopLayout = atLeastXl && width >= 1440;
  const extensionContext = {
    document: document2,
    resources,
    pageSettings,
    site,
    mode,
    isAdmin,
    currentRoute
  };
  const headerExtensionItems = collectPhotonHeaderExtensionItems(
    resolvePhotonSiteFrameExtensions2(
      siteFrameExtensions,
      normalizeHeaderStringItems(block.props.disabledExtensionIds)
    ),
    normalizeHeaderStringItems(block.props.disabledExtensionItemIds),
    extensionContext
  );
  const localeSwitcherVisible = block.props.showLocaleSwitcher !== false && publicLocales.length > 1;
  const authenticatedUser = hasAuthenticatedUser(resources);
  const rawExtensionActions = collectUniqueHeaderLinks(
    [
      ...headerExtensionItems.slots.actions.links,
      ...headerExtensionItems.slots.actions.actions
    ]
  ).filter((action) => {
    const visibleHref = getActionVisibleHref(action, authenticatedUser);
    return Boolean(action.component) || normalizeHeaderHref(visibleHref) !== "";
  });
  const extensionActionKeys = /* @__PURE__ */ new Set();
  for (const action of rawExtensionActions) {
    extensionActionKeys.add(getHeaderLinkDedupeKey(action.href));
    if (action.authenticatedHref) {
      extensionActionKeys.add(getHeaderLinkDedupeKey(action.authenticatedHref));
    }
  }
  const ctaKey = getHeaderLinkDedupeKey(block.props.cta.href);
  const shouldRenderCta = normalizeHeaderHref(block.props.cta.href) !== "" && !extensionActionKeys.has(ctaKey);
  const prominentLinks = collectUniqueHeaderLinks(
    headerExtensionItems.slots.prominent.links,
    /* @__PURE__ */ new Set([
      ...extensionActionKeys,
      ...shouldRenderCta ? [ctaKey] : []
    ])
  );
  const prominentKeys = new Set(
    prominentLinks.map((item) => getHeaderLinkDedupeKey(item.href))
  );
  const editableNavItems = block.props.navItems.map((item, index) => ({
    ...item,
    labelPath: `navItems.${index}.label`
  }));
  const navItems = collectUniqueHeaderLinks(
    [
      ...editableNavItems,
      ...headerExtensionItems.slots.navigation.links
    ],
    /* @__PURE__ */ new Set([
      ...extensionActionKeys,
      ...prominentKeys,
      ...shouldRenderCta ? [ctaKey] : []
    ])
  );
  const hasExtensionAuthAction = rawExtensionActions.some(
    (action) => (action.kind ?? "link") === "auth"
  );
  const authButtonVisible = block.props.showLoginAction !== false && !isAdmin && !authenticatedUser && !hasExtensionAuthAction && mode !== "builder" && typeof requestAuth === "function";
  const actionClassName = "inline-flex items-center justify-center gap-2 rounded-[1.2rem] border border-[color-mix(in_srgb,var(--photon-site-border)_84%,white)] bg-white/90 px-5 py-3 text-base font-medium text-[var(--photon-site-text)] transition-all duration-300 hover:bg-[color-mix(in_srgb,var(--photon-site-surface)_96%,white)]";
  const renderExtensionAction = (action, suffix = "") => {
    if (action.component) {
      const ActionComponent = action.component;
      return /* @__PURE__ */ jsx8(
        ActionComponent,
        {
          action,
          className: actionClassName,
          context: extensionContext,
          requestAuth
        },
        `${action.id ?? `${action.label}:${action.href}`}${suffix}`
      );
    }
    if ((action.kind ?? "link") === "auth") {
      if (authenticatedUser) {
        const authenticatedHref = action.authenticatedHref ?? action.href;
        if (!authenticatedHref) {
          return null;
        }
        return /* @__PURE__ */ jsx8(
          PhotonLink6,
          {
            href: authenticatedHref,
            target: action.authenticatedTarget,
            rel: action.authenticatedRel,
            className: actionClassName,
            children: action.authenticatedLabel ?? action.label
          },
          `${action.id ?? `${action.authenticatedLabel ?? action.label}:${authenticatedHref}`}${suffix}`
        );
      }
      if (typeof requestAuth !== "function") {
        return null;
      }
      return /* @__PURE__ */ jsx8(
        "button",
        {
          type: "button",
          onClick: () => {
            menu.close();
            requestAuth();
          },
          className: actionClassName,
          children: action.label
        },
        `${action.id ?? `${action.label}:${action.href}`}${suffix}`
      );
    }
    return /* @__PURE__ */ jsx8(
      PhotonLink6,
      {
        href: action.href,
        target: action.target,
        rel: action.rel,
        onClick: suffix ? menu.close : void 0,
        className: actionClassName,
        children: action.label
      },
      `${action.id ?? `${action.label}:${action.href}`}${suffix}`
    );
  };
  const renderNavLabel = (item) => "labelPath" in item && item.labelPath ? /* @__PURE__ */ jsx8(EditableText7, { blockId: block.id, path: item.labelPath }) : item.label;
  const mobilePanelClassName = [
    "fixed right-3 z-[55] max-h-[calc(100dvh-6rem)] w-[min(24rem,calc(100vw-1.5rem))] overflow-y-auto rounded-[1.6rem] border border-[var(--photon-site-border)] bg-[var(--photon-site-surface)] p-4 text-[var(--photon-site-text)] shadow-[0_26px_80px_rgba(32,22,18,0.18)] backdrop-blur-xl transition-[opacity,transform,visibility] duration-300 ease-in-out",
    menu.isOpen ? "visible pointer-events-auto translate-x-0 opacity-100" : "invisible pointer-events-none translate-x-[calc(100%+1rem)] opacity-0"
  ].join(" ");
  const mobileTriggerClassName = [
    isAdmin ? "absolute top-3" : "fixed",
    mobileControls.menu.floating ? "right-3 rounded-[1.2rem]" : "right-0 rounded-l-[1.2rem] rounded-r-none border-r-0",
    mobileControls.menu.floating && mobileControls.menu.disableFloatingOnSmallScreens ? "max-[420px]:right-0 max-[420px]:rounded-l-[1.2rem] max-[420px]:rounded-r-none max-[420px]:border-r-0" : "",
    "z-[60] inline-flex h-12 w-12 cursor-pointer items-center justify-center border border-[var(--photon-site-border)] bg-[var(--photon-site-surface)] text-[var(--photon-site-text)] opacity-100 shadow-[0_18px_44px_rgba(32,22,18,0.16)] backdrop-blur-xl transition-[background-color,border-color,color,transform] duration-300 ease-in-out hover:border-[var(--photon-site-accent)] hover:text-[var(--photon-site-accent)]"
  ].join(" ");
  const renderMobileMenuContent = () => /* @__PURE__ */ jsxs8("div", { className: "flex flex-col gap-4", children: [
    navItems.map((item) => /* @__PURE__ */ jsx8(
      InitLandingNavLink,
      {
        href: item.href,
        label: renderNavLabel(item),
        onNavigate: menu.close
      },
      `${"id" in item ? item.id : ""}:${item.href}:${item.label}:mobile`
    )),
    localeSwitcherVisible ? /* @__PURE__ */ jsx8(
      InitLandingLocaleSelect,
      {
        currentRoute,
        locale,
        locales: publicLocales,
        label: translate("photon.localeSwitcher.label", "Language")
      }
    ) : null,
    /* @__PURE__ */ jsx8(
      PhotonSiteSearch,
      {
        blockId: block.id,
        placeholderPath: "searchPlaceholder"
      }
    ),
    authButtonVisible ? /* @__PURE__ */ jsxs8(
      "button",
      {
        type: "button",
        onClick: () => {
          menu.close();
          requestAuth();
        },
        className: "inline-flex cursor-pointer items-center justify-center gap-2 rounded-[1.2rem] border border-[color-mix(in_srgb,var(--photon-site-border)_84%,white)] bg-white/90 px-5 py-3 text-base font-medium text-[var(--photon-site-text)] transition-all duration-300 ease-in-out hover:bg-[color-mix(in_srgb,var(--photon-site-surface)_96%,white)]",
        children: [
          /* @__PURE__ */ jsx8(LogIn, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx8(EditableText7, { blockId: block.id, path: "loginLabel" })
        ]
      }
    ) : null,
    prominentLinks.map((item) => /* @__PURE__ */ jsx8(
      InitLandingActionButton,
      {
        href: item.href,
        outline: true,
        children: item.label
      },
      item.id ?? `${item.href}:${item.label}:prominent:mobile`
    )),
    shouldRenderCta ? /* @__PURE__ */ jsx8(InitLandingActionButton, { href: block.props.cta.href, children: /* @__PURE__ */ jsx8(EditableText7, { blockId: block.id, path: "cta.label" }) }) : null,
    rawExtensionActions.map(
      (action) => renderExtensionAction(action, ":mobile")
    )
  ] });
  useEffect3(() => {
    if (desktopLayout && menu.isOpen) {
      menu.close();
    }
  }, [desktopLayout, menu]);
  usePhotonSiteFrameScrollLock(
    !desktopLayout && menu.isOpen && mobileControls.menu.scrollLock
  );
  return /* @__PURE__ */ jsxs8(
    "header",
    {
      ref,
      "data-testid": "photon-init-landing-header",
      className: [
        "left-0 right-0 z-50 transition-all duration-500",
        stickyPreviewSurface ? "fixed bg-[var(--photon-site-background)]/95 backdrop-blur-md shadow-sm" : "relative bg-transparent"
      ].join(" "),
      style: stickyPreviewSurface ? { top: "var(--photon-dock-offset, 0px)" } : void 0,
      children: [
        mobileControls.menu.fixedTrigger && !desktopLayout ? /* @__PURE__ */ jsx8(
          "button",
          {
            type: "button",
            className: mobileTriggerClassName,
            style: isAdmin ? void 0 : {
              top: "calc(var(--photon-dock-offset, 0px) + env(safe-area-inset-top) + 0.75rem)"
            },
            onClick: menu.toggle,
            "aria-label": menu.isOpen ? "Close menu" : "Open menu",
            "aria-expanded": menu.isOpen,
            children: /* @__PURE__ */ jsx8(menu.icon, { className: "h-5 w-5 transition-transform duration-300 ease-in-out" })
          }
        ) : null,
        /* @__PURE__ */ jsx8(
          "div",
          {
            className: ["mx-auto max-w-7xl px-6", desktopLayout ? "px-8" : ""].join(
              " "
            ),
            children: /* @__PURE__ */ jsxs8("nav", { className: "flex min-h-20 items-center justify-between gap-6 py-4", children: [
              /* @__PURE__ */ jsx8(
                PhotonLink6,
                {
                  href: String(block.props.homeHref),
                  className: "group flex items-center gap-2",
                  children: /* @__PURE__ */ jsx8(
                    InitBrandMark,
                    {
                      label: /* @__PURE__ */ jsx8(EditableText7, { blockId: block.id, path: "brandLabel" })
                    }
                  )
                }
              ),
              desktopLayout ? /* @__PURE__ */ jsxs8(Fragment2, { children: [
                /* @__PURE__ */ jsx8("div", { className: "flex min-w-0 items-center gap-5", children: navItems.map((item) => /* @__PURE__ */ jsx8(
                  InitLandingNavLink,
                  {
                    href: item.href,
                    label: renderNavLabel(item)
                  },
                  `${"id" in item ? item.id : ""}:${item.href}:${item.label}`
                )) }),
                /* @__PURE__ */ jsxs8("div", { className: "flex shrink-0 items-center justify-end gap-3", children: [
                  localeSwitcherVisible ? /* @__PURE__ */ jsx8(
                    InitLandingLocaleSelect,
                    {
                      currentRoute,
                      locale,
                      locales: publicLocales,
                      label: translate(
                        "photon.localeSwitcher.label",
                        "Language"
                      )
                    }
                  ) : null,
                  /* @__PURE__ */ jsx8("div", { className: "w-[clamp(12rem,16vw,18rem)]", children: /* @__PURE__ */ jsx8(
                    PhotonSiteSearch,
                    {
                      blockId: block.id,
                      placeholderPath: "searchPlaceholder"
                    }
                  ) }),
                  prominentLinks.map((item) => /* @__PURE__ */ jsx8(
                    InitLandingActionButton,
                    {
                      href: item.href,
                      outline: true,
                      children: item.label
                    },
                    item.id ?? `${item.href}:${item.label}:prominent`
                  )),
                  authButtonVisible ? /* @__PURE__ */ jsxs8(
                    "button",
                    {
                      type: "button",
                      onClick: requestAuth,
                      className: "inline-flex cursor-pointer items-center gap-2 rounded-[1.2rem] border border-[color-mix(in_srgb,var(--photon-site-border)_84%,white)] bg-white/90 px-5 py-3 text-base font-medium text-[var(--photon-site-text)] transition-all duration-300 hover:bg-[color-mix(in_srgb,var(--photon-site-surface)_96%,white)]",
                      children: [
                        /* @__PURE__ */ jsx8(LogIn, { className: "h-4 w-4" }),
                        /* @__PURE__ */ jsx8(EditableText7, { blockId: block.id, path: "loginLabel" })
                      ]
                    }
                  ) : null,
                  shouldRenderCta ? /* @__PURE__ */ jsx8(InitLandingActionButton, { href: block.props.cta.href, children: /* @__PURE__ */ jsx8(EditableText7, { blockId: block.id, path: "cta.label" }) }) : null,
                  rawExtensionActions.map(
                    (action) => renderExtensionAction(action)
                  )
                ] })
              ] }) : !mobileControls.menu.fixedTrigger ? /* @__PURE__ */ jsx8(
                "button",
                {
                  type: "button",
                  onClick: menu.toggle,
                  "aria-label": menu.isOpen ? "Close menu" : "Open menu",
                  "aria-expanded": menu.isOpen,
                  className: "inline-flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-[1.2rem] border border-[var(--photon-site-border)] bg-[var(--photon-site-surface)] text-[var(--photon-site-text)] transition duration-300 ease-in-out hover:border-[var(--photon-site-accent)] hover:text-[var(--photon-site-accent)]",
                  children: /* @__PURE__ */ jsx8(menu.icon, { className: "h-5 w-5" })
                }
              ) : null
            ] })
          }
        ),
        !desktopLayout ? /* @__PURE__ */ jsxs8(
          "div",
          {
            className: [
              "fixed inset-0 z-[55] transition-[visibility] duration-300 ease-in-out",
              menu.isOpen ? "visible" : "invisible"
            ].join(" "),
            children: [
              /* @__PURE__ */ jsx8(
                "button",
                {
                  type: "button",
                  "aria-label": "Close menu",
                  className: [
                    "absolute inset-0 cursor-default bg-black/25 backdrop-blur-[2px] transition-opacity duration-300 ease-in-out",
                    menu.isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                  ].join(" "),
                  onClick: menu.close
                }
              ),
              /* @__PURE__ */ jsxs8(
                "div",
                {
                  className: mobilePanelClassName,
                  style: {
                    top: "calc(var(--photon-dock-offset, 0px) + env(safe-area-inset-top) + 4.75rem)"
                  },
                  children: [
                    /* @__PURE__ */ jsxs8("div", { className: "mb-4 flex items-center justify-between gap-3", children: [
                      /* @__PURE__ */ jsx8(
                        InitBrandMark,
                        {
                          label: /* @__PURE__ */ jsx8(EditableText7, { blockId: block.id, path: "brandLabel" })
                        }
                      ),
                      /* @__PURE__ */ jsx8(
                        "button",
                        {
                          type: "button",
                          "aria-label": "Close menu",
                          onClick: menu.close,
                          className: "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[1rem] border border-[var(--photon-site-border)] text-[var(--photon-site-text)] transition duration-300 ease-in-out hover:border-[var(--photon-site-accent)] hover:text-[var(--photon-site-accent)]",
                          children: /* @__PURE__ */ jsx8(menu.icon, { className: "h-5 w-5" })
                        }
                      )
                    ] }),
                    renderMobileMenuContent()
                  ]
                }
              )
            ]
          }
        ) : null
      ]
    }
  );
};
var initLandingHeaderDefinition = definePhotonBlockDefinition7({
  type: "init-landing-header",
  label: "Init Landing Header",
  description: "Fixed warm landing header with navigation and CTA.",
  category: "Layout",
  icon: "panels-top-left",
  component: InitLandingHeaderBlock,
  fields: fields3,
  localizationSchema: createInitLandingBlockLocalizationSchema(fields3),
  defaults: {
    brandLabel: createPhotonLocalizedDefault7({
      en: "init",
      ru: "init"
    }),
    homeHref: "/",
    navItems: [
      { label: "\u0424\u043E\u0440\u043C\u0430\u0442\u044B", href: "#services" },
      { label: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430", href: "#why-us" },
      { label: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C", href: "#pricing" },
      { label: "\u042D\u0442\u0430\u043F\u044B", href: "#process" }
    ],
    cta: { label: "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0441\u0430\u0439\u0442", href: "#contact" },
    searchPlaceholder: createPhotonLocalizedDefault7({
      en: "Search the website",
      ru: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u0430\u0439\u0442\u0443"
    }),
    showLocaleSwitcher: true,
    showLoginAction: false,
    mobile: {
      menu: {
        type: "drawer",
        fixedTrigger: true,
        scrollLock: true,
        floating: false,
        disableFloatingOnSmallScreens: true
      }
    },
    loginLabel: createPhotonLocalizedDefault7({
      en: "Admin sign in",
      ru: "\u0412\u0445\u043E\u0434 \u0434\u043B\u044F \u0430\u0434\u043C\u0438\u043D\u0430"
    })
  }
});

// src/primitives/init-check-list-item.tsx
import { Check as Check2 } from "lucide-react";
import { jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
var InitCheckListItem = ({ children }) => /* @__PURE__ */ jsxs9("li", { className: "flex items-start gap-3", children: [
  /* @__PURE__ */ jsx9(Check2, { className: "mt-0.5 h-5 w-5 shrink-0 text-[var(--photon-site-accent)]" }),
  /* @__PURE__ */ jsx9("div", { className: "text-sm text-[var(--photon-site-muted-text)]", children })
] });

// src/primitives/init-stat-widget.tsx
import gsap from "gsap";
import { useEffect as useEffect4, useRef as useRef3, useState as useState3 } from "react";
import { jsx as jsx10, jsxs as jsxs10 } from "react/jsx-runtime";
var InitStatWidget = ({
  atLeastLg,
  label,
  suffix = "",
  value
}) => {
  const [displayValue, setDisplayValue] = useState3(value);
  const startedRef = useRef3(false);
  useEffect4(() => {
    if (startedRef.current) {
      return;
    }
    startedRef.current = true;
    const state = { value: 0 };
    const tween = gsap.to(state, {
      value,
      duration: 1.6,
      delay: 0.45,
      ease: "power2.out",
      onUpdate: () => setDisplayValue(Math.round(state.value)),
      onComplete: () => setDisplayValue(value)
    });
    return () => {
      tween.kill();
    };
  }, [value]);
  return /* @__PURE__ */ jsxs10("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxs10(
      "div",
      {
        className: [
          "font-semibold text-[var(--photon-site-text)]",
          atLeastLg ? "text-4xl" : "text-3xl"
        ].join(" "),
        children: [
          displayValue,
          suffix
        ]
      }
    ),
    /* @__PURE__ */ jsx10("div", { className: "mt-1 text-sm text-[var(--photon-site-muted-text)]", children: label })
  ] });
};

// src/primitives/init-status-pill.tsx
import { jsx as jsx11, jsxs as jsxs11 } from "react/jsx-runtime";
var InitStatusPill = ({ children }) => /* @__PURE__ */ jsxs11("div", { className: "inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--photon-site-border)_50%,transparent)] bg-[color-mix(in_oklab,var(--photon-site-surface)_80%,transparent)] px-4 py-2 shadow-sm backdrop-blur-sm", children: [
  /* @__PURE__ */ jsxs11("span", { className: "relative flex h-2 w-2", children: [
    /* @__PURE__ */ jsx11("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--photon-site-accent)] opacity-75" }),
    /* @__PURE__ */ jsx11("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-[var(--photon-site-accent)]" })
  ] }),
  children
] });

// src/primitives/init-testimonial-card.tsx
import { jsx as jsx12, jsxs as jsxs12 } from "react/jsx-runtime";
var InitTestimonialCard = ({
  className = "",
  profile,
  quote,
  style
}) => /* @__PURE__ */ jsxs12(
  "div",
  {
    className: `group rounded-[1.75rem] border border-[color-mix(in_srgb,var(--photon-site-border)_86%,white)] bg-[var(--photon-site-surface)] p-8 hover:border-[color-mix(in_srgb,var(--photon-site-accent)_20%,var(--photon-site-border))] hover:shadow-lg ${className}`.trim(),
    style,
    children: [
      /* @__PURE__ */ jsx12("div", { className: "mb-4 font-serif text-5xl text-[color-mix(in_srgb,var(--photon-site-accent)_20%,transparent)] transition-colors group-hover:text-[color-mix(in_srgb,var(--photon-site-accent)_30%,transparent)]", children: "\u201C" }),
      /* @__PURE__ */ jsx12("div", { className: "mb-6 leading-relaxed text-[var(--photon-site-muted-text)]", children: quote }),
      profile
    ]
  }
);

// src/primitives/init-testimonial-profile.tsx
import { jsx as jsx13, jsxs as jsxs13 } from "react/jsx-runtime";
var InitTestimonialProfile = ({
  initials,
  name,
  role
}) => /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-4", children: [
  /* @__PURE__ */ jsx13("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--photon-site-accent)_10%,transparent)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[color-mix(in_srgb,var(--photon-site-accent)_20%,transparent)]", children: /* @__PURE__ */ jsx13("span", { className: "text-sm font-semibold text-[var(--photon-site-accent)]", children: initials }) }),
  /* @__PURE__ */ jsxs13("div", { children: [
    /* @__PURE__ */ jsx13("p", { className: "font-semibold text-[var(--photon-site-text)]", children: name }),
    /* @__PURE__ */ jsx13("p", { className: "text-sm text-[var(--photon-site-muted-text)]", children: role })
  ] })
] });

// src/primitives/init-typed-text.tsx
import gsap2 from "gsap";
import { useEffect as useEffect5, useRef as useRef4, useState as useState4 } from "react";
import { jsx as jsx14, jsxs as jsxs14 } from "react/jsx-runtime";
var GLYPHS = ["0", "1", "/", "+", "-", "{", "}", "<", ">", "_"];
var HOLD_SECONDS = 10;
var randomGlyph = (seed) => GLYPHS[Math.abs(Math.floor(Math.sin(seed) * 1e3)) % GLYPHS.length];
var InitTypedText = ({
  atLeastLg,
  texts
}) => {
  const safeTexts = texts.length > 0 ? texts : [""];
  const [displayText, setDisplayText] = useState4(safeTexts[0]);
  const [showCaret, setShowCaret] = useState4(false);
  const caretRef = useRef4(null);
  const jobsRef = useRef4([]);
  useEffect5(() => {
    setDisplayText(safeTexts[0]);
    setShowCaret(false);
    const clearJobs = () => {
      for (const job of jobsRef.current) {
        job.kill();
      }
      jobsRef.current = [];
    };
    const blinkTween = gsap2.to(caretRef.current, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      paused: true
    });
    const runCycle = (index) => {
      const currentText = safeTexts[index];
      const nextIndex = (index + 1) % safeTexts.length;
      const nextText = safeTexts[nextIndex];
      const eraseState = { progress: currentText.length };
      const typeState = { progress: 0 };
      setShowCaret(true);
      blinkTween.play();
      const timeline = gsap2.timeline({
        onComplete: () => {
          setDisplayText(nextText);
          setShowCaret(false);
          blinkTween.pause(0);
          const holdCall = gsap2.delayedCall(
            HOLD_SECONDS,
            () => runCycle(nextIndex)
          );
          jobsRef.current.push(holdCall);
        }
      });
      timeline.to(eraseState, {
        progress: 0,
        duration: Math.min(1.35, Math.max(0.8, currentText.length * 0.012)),
        ease: `steps(${Math.max(currentText.length, 1)})`,
        onUpdate: () => {
          const visibleChars = Math.ceil(eraseState.progress);
          const glitch = visibleChars > 0 ? randomGlyph(visibleChars * 17.3 + eraseState.progress * 7.1) : "";
          const head = currentText.slice(0, Math.max(visibleChars - 1, 0));
          setDisplayText(visibleChars > 0 ? `${head}${glitch}` : "");
        }
      });
      timeline.to(typeState, {
        progress: nextText.length,
        duration: Math.min(2.6, Math.max(1.35, nextText.length * 0.018)),
        ease: `steps(${Math.max(nextText.length, 1)})`,
        delay: 0.18,
        onUpdate: () => {
          const visibleChars = Math.floor(typeState.progress);
          const glitch = visibleChars < nextText.length ? randomGlyph(visibleChars * 13.7 + typeState.progress * 9.3) : "";
          setDisplayText(`${nextText.slice(0, visibleChars)}${glitch}`);
        },
        onComplete: () => {
          setDisplayText(nextText);
        }
      });
      jobsRef.current.push(timeline);
    };
    const firstHold = gsap2.delayedCall(HOLD_SECONDS, () => runCycle(0));
    jobsRef.current.push(firstHold, blinkTween);
    return () => clearJobs();
  }, [safeTexts]);
  return /* @__PURE__ */ jsx14("div", { className: "mx-auto mt-8 max-w-2xl", children: /* @__PURE__ */ jsxs14(
    "p",
    {
      className: [
        "text-pretty leading-relaxed text-[var(--photon-site-muted-text)]",
        atLeastLg ? "min-h-[3.2em] text-xl" : "min-h-[3.6em] text-lg"
      ].join(" "),
      children: [
        displayText || "\xA0",
        showCaret ? /* @__PURE__ */ jsx14(
          "span",
          {
            ref: caretRef,
            className: "ml-0.5 inline-block h-[1.08em] w-[2px] translate-y-[0.16em] bg-[var(--photon-site-accent)] align-baseline"
          }
        ) : null
      ]
    }
  ) });
};

// src/primitives/rich-text.tsx
import { EditableRichText } from "@init/photon/public";
import { jsx as jsx15 } from "react/jsx-runtime";
var RichText = ({
  blockId,
  path,
  className,
  containerClassName,
  placeholder = "Write rich text content with headings, lists and quotes."
}) => /* @__PURE__ */ jsx15("div", { className: containerClassName, children: /* @__PURE__ */ jsx15(
  EditableRichText,
  {
    blockId,
    path,
    className,
    placeholder
  }
) });

// src/blocks/init-landing/init-landing-hero.tsx
import {
  createPhotonLocalizedDefault as createPhotonLocalizedDefault8,
  definePhotonBlockDefinition as definePhotonBlockDefinition8,
  EditableText as EditableText8,
  usePhotonStore as usePhotonStore9
} from "@init/photon/public";

// src/blocks/init-landing/hero-grid-canvas.tsx
import { useEffect as useEffect6, useRef as useRef5 } from "react";
import { jsx as jsx16 } from "react/jsx-runtime";
var GRID_SIZE = 60;
var MAX_PULSES = 4;
var SYMBOLS = ["0", "1", "+", "-", "/", ":", "<", ">", "{", "}", "[", "]"];
var clamp = (value, min, max) => Math.min(max, Math.max(min, value));
var lerp = (a, b, t) => a + (b - a) * t;
var pointLerp = (a, b, t) => ({
  x: lerp(a.x, b.x, t),
  y: lerp(a.y, b.y, t)
});
var distance = (a, b) => Math.hypot(b.x - a.x, b.y - a.y);
var buildLengths = (points) => {
  const lengths = [0];
  for (let index = 1; index < points.length; index += 1) {
    lengths.push(
      lengths[index - 1] + distance(points[index - 1], points[index])
    );
  }
  return lengths;
};
var getPointAtLength = (points, lengths, targetLength) => {
  if (targetLength <= 0) {
    return points[0];
  }
  const totalLength = lengths[lengths.length - 1];
  if (targetLength >= totalLength) {
    return points[points.length - 1];
  }
  for (let index = 1; index < lengths.length; index += 1) {
    if (targetLength <= lengths[index]) {
      const segmentStart = points[index - 1];
      const segmentEnd = points[index];
      const segmentLength = lengths[index] - lengths[index - 1];
      const segmentT = (targetLength - lengths[index - 1]) / segmentLength;
      return pointLerp(segmentStart, segmentEnd, segmentT);
    }
  }
  return points[points.length - 1];
};
var collectPathSlice = (points, lengths, startLength, endLength) => {
  const slice = [getPointAtLength(points, lengths, startLength)];
  for (let index = 1; index < points.length - 1; index += 1) {
    if (lengths[index] > startLength && lengths[index] < endLength) {
      slice.push(points[index]);
    }
  }
  slice.push(getPointAtLength(points, lengths, endLength));
  return slice;
};
var smoothPath = (path) => {
  if (path.length < 3) {
    return path;
  }
  const result = [path[0]];
  for (let index = 0; index < path.length - 1; index += 1) {
    const current = path[index];
    const next = path[index + 1];
    result.push({
      x: current.x * 0.35 + next.x * 0.65,
      y: current.y * 0.35 + next.y * 0.65
    });
  }
  result.push(path[path.length - 1]);
  return result;
};
var randomEdgePoint = (width, height) => {
  const edge = Math.floor(Math.random() * 4);
  if (edge === 0) {
    return { x: -GRID_SIZE, y: Math.random() * height * 0.95 };
  }
  if (edge === 1) {
    return { x: width + GRID_SIZE, y: Math.random() * height * 0.95 };
  }
  if (edge === 2) {
    return { x: Math.random() * width, y: -GRID_SIZE };
  }
  return {
    x: Math.random() < 0.5 ? Math.random() * width * 0.28 : width * (0.72 + Math.random() * 0.28),
    y: height + GRID_SIZE
  };
};
var snapToGrid = (point) => ({
  x: Math.round(point.x / GRID_SIZE) * GRID_SIZE,
  y: Math.round(point.y / GRID_SIZE) * GRID_SIZE
});
var stepTowardCenter = (current, center) => {
  const dx = center.x - current.x;
  const dy = center.y - current.y;
  const absX = Math.abs(dx);
  const absY = Math.abs(dy);
  const bias = 0.22;
  if (absX > absY + GRID_SIZE * bias) {
    return { x: current.x + Math.sign(dx) * GRID_SIZE, y: current.y };
  }
  if (absY > absX + GRID_SIZE * bias) {
    return { x: current.x, y: current.y + Math.sign(dy) * GRID_SIZE };
  }
  if (Math.random() > 0.5) {
    return { x: current.x + Math.sign(dx || 1) * GRID_SIZE, y: current.y };
  }
  return { x: current.x, y: current.y + Math.sign(dy || 1) * GRID_SIZE };
};
var buildPath = (width, height) => {
  const center = { x: width / 2, y: height * 0.46 };
  const target = snapToGrid({
    x: center.x + (Math.random() - 0.5) * GRID_SIZE * 1.8,
    y: center.y + (Math.random() - 0.5) * GRID_SIZE * 1.8
  });
  let current = snapToGrid(randomEdgePoint(width, height));
  const path = [current];
  const maxSteps = Math.ceil((width + height) / GRID_SIZE);
  for (let step = 0; step < maxSteps; step += 1) {
    const next = stepTowardCenter(current, target);
    current = {
      x: clamp(next.x, -GRID_SIZE, width + GRID_SIZE),
      y: clamp(next.y, -GRID_SIZE, height + GRID_SIZE)
    };
    path.push(current);
    if (Math.hypot(current.x - target.x, current.y - target.y) <= GRID_SIZE) {
      break;
    }
  }
  path.push(target);
  return smoothPath(path);
};
var createPulse = (width, height, now) => {
  const points = buildPath(width, height);
  const lengths = buildLengths(points);
  const totalLength = lengths[lengths.length - 1];
  return {
    startTime: now + Math.random() * 3200,
    duration: 6e3 + Math.random() * 2600,
    trailLength: totalLength * (0.08 + Math.random() * 0.06),
    points,
    lengths,
    totalLength,
    priority: Math.random() > 0.86
  };
};
var symbolAt = (gridX, gridY, seed) => {
  const hash = Math.abs(
    Math.sin(gridX * 12.9898 + gridY * 78.233 + seed * 0.013) * 43758.5453
  );
  return SYMBOLS[Math.floor(hash) % SYMBOLS.length];
};
var buildNodes = (width, height) => {
  const nodes = [];
  for (let x = 0; x <= width + GRID_SIZE; x += GRID_SIZE) {
    for (let y = 0; y <= height + GRID_SIZE; y += GRID_SIZE) {
      const hash = Math.abs(Math.sin(x * 0.017 + y * 0.023) * 1e3);
      nodes.push({ x, y, active: hash % 1 > 0.88 });
    }
  }
  return nodes;
};
var InitLandingHeroGridCanvas = () => {
  const canvasRef = useRef5(null);
  useEffect6(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }
    const trackingSurface = canvas.closest("section");
    if (!trackingSurface) {
      return;
    }
    let frameId = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let pulses = [];
    let nodes = [];
    let hotspots = [];
    let absorptions = [];
    let handshakes = [];
    let lastPointer = null;
    let persistentHotspot = null;
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) {
        return;
      }
      width = parent.clientWidth;
      height = parent.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      pulses = Array.from(
        { length: MAX_PULSES },
        (_, index) => createPulse(width, height, performance.now() + index * 900)
      );
      nodes = buildNodes(width, height);
    };
    const pushHotspot = (x, y, now) => {
      hotspots.push({
        x,
        y,
        startTime: now,
        duration: 850,
        seed: now + x * 17 + y * 31
      });
      if (hotspots.length > 18) {
        hotspots = hotspots.slice(-18);
      }
    };
    const upsertPersistentHotspot = (x, y, now) => {
      persistentHotspot = {
        x,
        y,
        startTime: now,
        duration: 1e4,
        seed: Math.floor(now / 220) + x * 11 + y * 17,
        persistent: true
      };
    };
    const handlePointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const now = performance.now();
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        return;
      }
      upsertPersistentHotspot(x, y, now);
      if (!lastPointer || Math.hypot(x - lastPointer.x, y - lastPointer.y) > 18) {
        pushHotspot(x, y, now);
      } else if (hotspots.length > 0) {
        hotspots[hotspots.length - 1] = {
          ...hotspots[hotspots.length - 1],
          x,
          y,
          startTime: now - 60
        };
      }
      lastPointer = { x, y };
    };
    const handlePointerLeave = () => {
      persistentHotspot = null;
      lastPointer = null;
    };
    const drawBaseGrid = () => {
      context.strokeStyle = "rgba(80, 80, 80, 0.07)";
      context.lineWidth = 1;
      for (let x = 0; x <= width + GRID_SIZE; x += GRID_SIZE) {
        context.beginPath();
        context.moveTo(x + 0.5, 0);
        context.lineTo(x + 0.5, height);
        context.stroke();
      }
      for (let y = 0; y <= height + GRID_SIZE; y += GRID_SIZE) {
        context.beginPath();
        context.moveTo(0, y + 0.5);
        context.lineTo(width, y + 0.5);
        context.stroke();
      }
    };
    const drawCenterNoise = (now) => {
      const center = { x: width / 2, y: height * 0.46 };
      const radiusX = width * 0.18;
      const radiusY = height * 0.14;
      for (let index = 0; index < 26; index += 1) {
        const angle = index * 0.73 + now * 18e-5;
        const wave = (Math.sin(now * 12e-4 + index * 1.7) + 1) / 2;
        const x = center.x + Math.cos(angle) * radiusX * (0.4 + wave * 0.6);
        const y = center.y + Math.sin(angle * 1.17) * radiusY * (0.35 + wave * 0.65);
        const alpha = 0.015 + wave * 0.018;
        context.beginPath();
        context.arc(x, y, 0.85 + wave * 0.7, 0, Math.PI * 2);
        context.fillStyle = `rgba(214, 98, 98, ${alpha})`;
        context.fill();
      }
    };
    const spawnHandshake = (now, nodeEnergy) => {
      if (Math.random() > 7e-3) {
        return;
      }
      const energized = nodes.filter((node) => {
        const energy = nodeEnergy.get(`${node.x}:${node.y}`) ?? 0;
        return node.active && energy > 0.06;
      });
      if (energized.length < 2) {
        return;
      }
      const a = energized[Math.floor(Math.random() * energized.length)];
      const candidates = energized.filter((node) => {
        const dist = Math.hypot(node.x - a.x, node.y - a.y);
        return dist > GRID_SIZE * 1.2 && dist < GRID_SIZE * 4.5;
      });
      if (candidates.length === 0) {
        return;
      }
      const b = candidates[Math.floor(Math.random() * candidates.length)];
      handshakes.push({
        a: { x: a.x, y: a.y },
        b: { x: b.x, y: b.y },
        startTime: now,
        duration: 900 + Math.random() * 400
      });
    };
    const drawHandshakes = (now) => {
      handshakes = handshakes.filter(
        (handshake) => now - handshake.startTime < handshake.duration
      );
      for (const handshake of handshakes) {
        const life = clamp(
          (now - handshake.startTime) / handshake.duration,
          0,
          1
        );
        const wave = Math.sin(life * Math.PI);
        const alpha = wave * 0.16;
        context.beginPath();
        context.moveTo(handshake.a.x + 0.5, handshake.a.y + 0.5);
        context.lineTo(handshake.b.x + 0.5, handshake.b.y + 0.5);
        context.strokeStyle = `rgba(214, 96, 96, ${alpha})`;
        context.lineWidth = 0.9;
        context.setLineDash([5, 8]);
        context.stroke();
        context.setLineDash([]);
      }
    };
    const drawCenterAbsorptions = (now) => {
      absorptions = absorptions.filter(
        (absorption) => now - absorption.startTime < absorption.duration
      );
      const center = { x: width / 2, y: height * 0.46 };
      for (const absorption of absorptions) {
        const life = clamp(
          (now - absorption.startTime) / absorption.duration,
          0,
          1
        );
        const eased = Math.sin(life * Math.PI);
        const radius = 12 + eased * 58 * absorption.strength;
        const alpha = (1 - life) * 0.14 * absorption.strength;
        context.beginPath();
        context.arc(center.x, center.y, radius, 0, Math.PI * 2);
        context.strokeStyle = `rgba(214, 92, 92, ${alpha})`;
        context.lineWidth = 1;
        context.stroke();
      }
    };
    const drawCursorGridEnhancement = () => {
      if (!persistentHotspot) {
        return;
      }
      const radius = GRID_SIZE * 2.3;
      for (let x = 0; x <= width + GRID_SIZE; x += GRID_SIZE) {
        const dist = Math.abs(x - persistentHotspot.x);
        const fade = clamp(1 - dist / radius, 0, 1);
        if (fade <= 0) {
          continue;
        }
        context.beginPath();
        context.moveTo(x + 0.5, 0);
        context.lineTo(x + 0.5, height);
        context.strokeStyle = `rgba(96, 96, 96, ${0.018 + fade * 0.05})`;
        context.lineWidth = 1;
        context.stroke();
      }
      for (let y = 0; y <= height + GRID_SIZE; y += GRID_SIZE) {
        const dist = Math.abs(y - persistentHotspot.y);
        const fade = clamp(1 - dist / radius, 0, 1);
        if (fade <= 0) {
          continue;
        }
        context.beginPath();
        context.moveTo(0, y + 0.5);
        context.lineTo(width, y + 0.5);
        context.strokeStyle = `rgba(96, 96, 96, ${0.018 + fade * 0.05})`;
        context.lineWidth = 1;
        context.stroke();
      }
    };
    const drawCursorSymbols = (now) => {
      hotspots = hotspots.filter(
        (hotspot) => now - hotspot.startTime < hotspot.duration
      );
      const activeHotspots = persistentHotspot ? [...hotspots, persistentHotspot] : hotspots;
      context.font = '500 13px var(--font-geist-mono), "SFMono-Regular", monospace';
      context.textAlign = "center";
      context.textBaseline = "middle";
      for (const hotspot of activeHotspots) {
        const age = now - hotspot.startTime;
        const life = hotspot.persistent ? 0 : clamp(age / hotspot.duration, 0, 1);
        const radius = hotspot.persistent ? GRID_SIZE * 2.75 : GRID_SIZE * 2.6;
        const coreRadius = hotspot.persistent ? GRID_SIZE * 1.1 : GRID_SIZE * 0.95;
        const minGridX = Math.floor((hotspot.x - radius) / GRID_SIZE);
        const maxGridX = Math.ceil((hotspot.x + radius) / GRID_SIZE);
        const minGridY = Math.floor((hotspot.y - radius) / GRID_SIZE);
        const maxGridY = Math.ceil((hotspot.y + radius) / GRID_SIZE);
        for (let gridX = minGridX; gridX <= maxGridX; gridX += 1) {
          for (let gridY = minGridY; gridY <= maxGridY; gridY += 1) {
            const x = gridX * GRID_SIZE + GRID_SIZE / 2;
            const y = gridY * GRID_SIZE + GRID_SIZE / 2;
            const dist = Math.hypot(x - hotspot.x, y - hotspot.y);
            const distFade = clamp(1 - dist / radius, 0, 1);
            if (distFade <= 0) {
              continue;
            }
            const alphaBase = hotspot.persistent ? 0.35 : 0.5;
            const alpha = distFade * distFade * (1 - life * 0.84) * alphaBase;
            if (alpha < (hotspot.persistent ? 8e-3 : 0.035)) {
              continue;
            }
            const symbol = symbolAt(
              gridX,
              gridY,
              hotspot.seed + Math.floor(age / 90)
            );
            const redMix = clamp(1 - dist / coreRadius, 0, 1);
            const red = Math.round(
              (hotspot.persistent ? 100 : 110) + redMix * 90
            );
            const green = Math.round(
              (hotspot.persistent ? 102 : 112) - redMix * 42
            );
            const blue = Math.round(
              (hotspot.persistent ? 108 : 118) - redMix * 42
            );
            context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
            context.fillText(symbol, x, y);
          }
        }
      }
    };
    const drawPulse = (pulse, now, nodeEnergy) => {
      const elapsed = now - pulse.startTime;
      if (elapsed < 0) {
        return;
      }
      const progress = elapsed / pulse.duration;
      if (progress >= 1) {
        return;
      }
      const headLength = pulse.totalLength * progress;
      const tailLength = Math.max(0, headLength - pulse.trailLength);
      const pathSlice = collectPathSlice(
        pulse.points,
        pulse.lengths,
        tailLength,
        headLength
      );
      const center = { x: width / 2, y: height * 0.46 };
      if (pathSlice.length < 2) {
        return;
      }
      for (let index = 0; index < pathSlice.length - 1; index += 1) {
        const current = pathSlice[index];
        const next = pathSlice[index + 1];
        const segmentCenter = {
          x: (current.x + next.x) / 2,
          y: (current.y + next.y) / 2
        };
        const distanceToCenter2 = Math.hypot(
          segmentCenter.x - center.x,
          segmentCenter.y - center.y
        );
        const centerFade = clamp(
          1 - distanceToCenter2 / (Math.min(width, height) * 0.34),
          0,
          1
        );
        const trailFade = (index + 1) / (pathSlice.length - 1);
        const alpha = (1 - centerFade * 0.95) * trailFade * (pulse.priority ? 0.92 : 0.72);
        context.beginPath();
        context.moveTo(current.x + 0.5, current.y + 0.5);
        context.lineTo(next.x + 0.5, next.y + 0.5);
        context.strokeStyle = pulse.priority ? `rgba(228, 62, 62, ${alpha})` : `rgba(217, 58, 58, ${alpha})`;
        context.lineWidth = pulse.priority ? 1.45 : 1.15;
        context.shadowBlur = pulse.priority ? 10 : 7;
        context.shadowColor = pulse.priority ? "rgba(228, 62, 62, 0.24)" : "rgba(217, 58, 58, 0.18)";
        context.stroke();
        const snappedX = Math.round(segmentCenter.x / GRID_SIZE) * GRID_SIZE;
        const snappedY = Math.round(segmentCenter.y / GRID_SIZE) * GRID_SIZE;
        const key = `${snappedX}:${snappedY}`;
        nodeEnergy.set(key, Math.max(nodeEnergy.get(key) ?? 0, alpha));
      }
      const head = pathSlice[pathSlice.length - 1];
      const distanceToCenter = Math.hypot(head.x - center.x, head.y - center.y);
      const headAlpha = clamp(
        distanceToCenter / (Math.min(width, height) * 0.35),
        0.08,
        0.55
      );
      context.beginPath();
      context.arc(head.x, head.y, 1.1, 0, Math.PI * 2);
      context.fillStyle = `rgba(242, 90, 90, ${headAlpha})`;
      context.shadowBlur = 8;
      context.shadowColor = "rgba(242, 90, 90, 0.18)";
      context.fill();
      context.shadowBlur = 0;
      if (distanceToCenter < GRID_SIZE * 1.35 && Math.random() > 0.92) {
        absorptions.push({
          startTime: now,
          duration: 850 + Math.random() * 320,
          strength: pulse.priority ? 1.1 : 0.8
        });
      }
    };
    const drawNodes = (nodeEnergy) => {
      for (const node of nodes) {
        if (!node.active) {
          continue;
        }
        const key = `${node.x}:${node.y}`;
        const energy = nodeEnergy.get(key) ?? 0;
        const baseAlpha = 0.018;
        const alpha = baseAlpha + energy * 0.45;
        const radius = 0.7 + energy * 1.4;
        context.beginPath();
        context.arc(node.x + 0.5, node.y + 0.5, radius, 0, Math.PI * 2);
        context.fillStyle = energy > 0.04 ? `rgba(214, 88, 88, ${alpha})` : `rgba(120, 120, 120, ${alpha})`;
        context.shadowBlur = energy > 0.04 ? 6 : 0;
        context.shadowColor = "rgba(214, 88, 88, 0.22)";
        context.fill();
      }
      context.shadowBlur = 0;
    };
    const render = (now) => {
      context.clearRect(0, 0, width, height);
      drawBaseGrid();
      drawCursorGridEnhancement();
      drawCenterNoise(now);
      drawCursorSymbols(now);
      const nodeEnergy = /* @__PURE__ */ new Map();
      pulses = pulses.map((pulse) => {
        if (now > pulse.startTime + pulse.duration + 900) {
          return createPulse(width, height, now + 1200 + Math.random() * 2600);
        }
        drawPulse(pulse, now, nodeEnergy);
        return pulse;
      });
      spawnHandshake(now, nodeEnergy);
      drawNodes(nodeEnergy);
      drawHandshakes(now);
      drawCenterAbsorptions(now);
      frameId = window.requestAnimationFrame(render);
    };
    resize();
    frameId = window.requestAnimationFrame(render);
    window.addEventListener("resize", resize);
    trackingSurface.addEventListener("pointermove", handlePointerMove);
    trackingSurface.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      trackingSurface.removeEventListener("pointermove", handlePointerMove);
      trackingSurface.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);
  return /* @__PURE__ */ jsx16(
    "canvas",
    {
      ref: canvasRef,
      className: "absolute inset-0 h-full w-full opacity-[0.72] [mask-image:radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.09)_20%,rgba(0,0,0,0.68)_47%,black_72%)]",
      "aria-hidden": "true"
    }
  );
};

// src/blocks/init-landing/hero-lead-form.tsx
import { ArrowRight as ArrowRight2 } from "lucide-react";
import { useMemo, useState as useState5 } from "react";
import { PhoneInput } from "react-international-phone";
import { jsx as jsx17, jsxs as jsxs15 } from "react/jsx-runtime";
var InitLandingHeroLeadForm = ({
  buttonLabel,
  helperText,
  placeholder
}) => {
  const [phoneValue, setPhoneValue] = useState5("");
  const [error, setError] = useState5(null);
  const isPhoneValid = useMemo(() => {
    if (!phoneValue) {
      return false;
    }
    return /^\+\d{8,15}$/.test(phoneValue);
  }, [phoneValue]);
  return /* @__PURE__ */ jsxs15(
    "form",
    {
      className: "relative z-30 mx-auto mt-10 flex w-full max-w-[42rem] flex-col items-center gap-3 lg:mb-12",
      onSubmit: (event) => {
        event.preventDefault();
        if (!isPhoneValid) {
          setError("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430.");
          return;
        }
        setError(null);
        if (typeof window !== "undefined") {
          window.sessionStorage.setItem("init.heroLeadPhone", phoneValue);
          document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      },
      children: [
        /* @__PURE__ */ jsx17("div", { className: "w-full rounded-[1.75rem] border border-[color-mix(in_oklab,var(--photon-site-border)_55%,transparent)] bg-[color-mix(in_oklab,var(--photon-site-surface)_70%,transparent)] p-2 shadow-[0_20px_60px_-30px_rgba(32,22,18,0.28)] backdrop-blur-xl", children: /* @__PURE__ */ jsxs15("div", { className: "flex w-full flex-col gap-2 sm:flex-row sm:items-center", children: [
          /* @__PURE__ */ jsx17(
            PhoneInput,
            {
              className: "hero-phone-input flex-1",
              countrySelectorStyleProps: {
                buttonClassName: "hero-phone-input__selector",
                dropdownStyleProps: {
                  className: "hero-phone-input__dropdown"
                }
              },
              defaultCountry: "kz",
              forceDialCode: true,
              inputClassName: [
                "hero-phone-input__field h-[3.25rem] w-full rounded-[1.2rem] border border-[color-mix(in_oklab,var(--photon-site-border)_50%,transparent)] bg-[color-mix(in_oklab,var(--photon-site-background)_88%,transparent)] px-4 text-base text-[var(--photon-site-text)] shadow-sm outline-none transition focus-visible:border-[var(--photon-site-accent)] focus-visible:ring-4 focus-visible:ring-[color-mix(in_oklab,var(--photon-site-accent)_20%,transparent)]",
                error ? "border-red-500/60 focus-visible:ring-red-500/15" : ""
              ].join(" "),
              onChange: (phone) => {
                setPhoneValue(phone);
                if (error) {
                  setError(null);
                }
              },
              placeholder,
              preferredCountries: ["kz", "ru", "us"],
              value: phoneValue,
              inputProps: {
                "aria-invalid": error ? "true" : "false",
                name: "phone",
                required: true
              }
            }
          ),
          /* @__PURE__ */ jsxs15(
            "button",
            {
              type: "submit",
              className: "group inline-flex h-[3.25rem] min-w-[158px] items-center justify-center gap-2 rounded-[1.2rem] bg-[var(--photon-site-accent)] px-6 text-base font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-[color-mix(in_oklab,var(--photon-site-accent)_25%,transparent)] sm:self-stretch",
              children: [
                buttonLabel,
                /* @__PURE__ */ jsx17(ArrowRight2, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx17(
          "p",
          {
            className: [
              "max-w-[34rem] px-3 text-center text-sm leading-relaxed text-[var(--photon-site-muted-text)] transition-colors lg:pb-2",
              error ? "text-red-600" : ""
            ].join(" "),
            children: error ?? helperText
          }
        )
      ]
    }
  );
};

// src/blocks/init-landing/init-landing-hero.tsx
import { jsx as jsx18, jsxs as jsxs16 } from "react/jsx-runtime";
var fields4 = [
  {
    path: "badge",
    label: "Badge",
    kind: "text",
    group: "content",
    localization: "localized"
  },
  {
    path: "title",
    label: "Title",
    kind: "text",
    group: "content",
    localization: "localized"
  },
  {
    path: "highlightedTitle",
    label: "Highlighted title",
    kind: "text",
    group: "content",
    localization: "localized"
  },
  {
    path: "supportingTexts",
    label: "Supporting texts",
    kind: "repeater",
    group: "content",
    localization: "localized",
    addLabel: "Add supporting text",
    itemLabel: "Supporting text",
    itemField: { label: "Text", kind: "textarea" }
  },
  {
    path: "primaryCta",
    label: "Primary CTA",
    kind: "object",
    group: "content",
    localization: "localized",
    fields: [
      { path: "label", label: "Label", kind: "text" },
      { path: "href", label: "Href", kind: "url", localization: "shared" }
    ]
  },
  {
    path: "secondaryCta",
    label: "Secondary CTA",
    kind: "object",
    group: "content",
    localization: "localized",
    fields: [
      { path: "label", label: "Label", kind: "text" },
      { path: "href", label: "Href", kind: "url", localization: "shared" }
    ]
  },
  {
    path: "leadCapture",
    label: "Lead capture",
    kind: "object",
    group: "content",
    localization: "localized",
    fields: [
      { path: "placeholder", label: "Placeholder", kind: "text" },
      { path: "buttonLabel", label: "Button label", kind: "text" },
      { path: "helperText", label: "Helper text", kind: "textarea" }
    ]
  },
  {
    path: "featurePills",
    label: "Feature pills",
    kind: "repeater",
    group: "content",
    localization: "localized",
    itemLabelPath: "label",
    addLabel: "Add feature pill",
    fields: [
      {
        path: "icon",
        label: "Icon",
        kind: "select",
        localization: "shared",
        options: initLandingIconFieldOptions
      },
      { path: "label", label: "Label", kind: "text" }
    ]
  },
  {
    path: "stats",
    label: "Stats",
    kind: "repeater",
    group: "content",
    localization: "localized",
    itemLabelPath: "label",
    addLabel: "Add stat",
    fields: [
      { path: "value", label: "Value", kind: "number", localization: "shared" },
      { path: "suffix", label: "Suffix", kind: "text", localization: "shared" },
      { path: "label", label: "Label", kind: "text" }
    ]
  }
];
var InitLandingHeroBlock = ({
  block
}) => {
  const mode = usePhotonStore9((state) => state.mode);
  const bleedStyle = useInitLandingSectionBleedStyle();
  const { ref, atLeastSm, atLeastLg, atLeastXl } = useInitLandingSurfaceBreakpoints();
  return /* @__PURE__ */ jsxs16(
    "section",
    {
      ref,
      "data-testid": "photon-init-landing-hero",
      className: "relative flex min-h-screen items-center justify-center overflow-hidden pt-20",
      style: bleedStyle,
      children: [
        /* @__PURE__ */ jsxs16("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: [
          /* @__PURE__ */ jsx18("div", { className: "animate-pulse-slow absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[color-mix(in_oklab,var(--photon-site-accent)_8%,transparent)] blur-[100px]" }),
          /* @__PURE__ */ jsx18("div", { className: "animate-pulse-slow animation-delay-200 absolute bottom-1/3 left-1/5 h-[400px] w-[400px] rounded-full bg-[color-mix(in_oklab,var(--photon-site-accent)_6%,transparent)] blur-[80px]" }),
          /* @__PURE__ */ jsx18("div", { className: "absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color-mix(in_oklab,var(--photon-site-accent)_4%,transparent)] blur-[120px]" }),
          /* @__PURE__ */ jsx18(InitLandingHeroGridCanvas, {})
        ] }),
        /* @__PURE__ */ jsxs16("div", { className: "relative mx-auto max-w-7xl px-6 py-24 pb-36 lg:px-8 lg:py-32 lg:pb-40", children: [
          /* @__PURE__ */ jsxs16("div", { className: "mx-auto max-w-4xl text-center", children: [
            /* @__PURE__ */ jsx18(InitStatusPill, { children: /* @__PURE__ */ jsx18(
              EditableText8,
              {
                blockId: block.id,
                path: "badge",
                className: "text-sm font-medium text-[var(--photon-site-muted-text)]"
              }
            ) }),
            /* @__PURE__ */ jsxs16(
              "h1",
              {
                className: [
                  "animate-fade-up animation-delay-100 text-balance leading-[1.1] font-semibold tracking-tight text-[var(--photon-site-text)]",
                  atLeastXl ? "text-7xl" : atLeastLg ? "text-6xl" : atLeastSm ? "text-5xl" : "text-4xl"
                ].join(" "),
                children: [
                  /* @__PURE__ */ jsx18(EditableText8, { blockId: block.id, path: "title" }),
                  " ",
                  /* @__PURE__ */ jsxs16("span", { className: "relative mt-2 inline-block", children: [
                    /* @__PURE__ */ jsx18("span", { className: "relative z-10 text-[var(--photon-site-accent)]", children: /* @__PURE__ */ jsx18(EditableText8, { blockId: block.id, path: "highlightedTitle" }) }),
                    /* @__PURE__ */ jsx18(
                      "svg",
                      {
                        "aria-hidden": "true",
                        className: "absolute -bottom-2 left-0 h-3 w-full text-[color-mix(in_oklab,var(--photon-site-accent)_20%,transparent)]",
                        viewBox: "0 0 200 12",
                        preserveAspectRatio: "none",
                        children: /* @__PURE__ */ jsx18(
                          "path",
                          {
                            d: "M0,8 Q50,0 100,8 T200,8",
                            stroke: "currentColor",
                            strokeWidth: "4",
                            fill: "none",
                            strokeLinecap: "round"
                          }
                        )
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsx18("div", { className: "animate-fade-up animation-delay-200", children: /* @__PURE__ */ jsx18(
              InitTypedText,
              {
                atLeastLg,
                texts: block.props.supportingTexts
              }
            ) }),
            /* @__PURE__ */ jsx18("div", { className: "animate-fade-up animation-delay-300", children: block.props.leadCapture ? /* @__PURE__ */ jsx18(
              InitLandingHeroLeadForm,
              {
                buttonLabel: block.props.leadCapture.buttonLabel,
                helperText: block.props.leadCapture.helperText,
                placeholder: block.props.leadCapture.placeholder
              }
            ) : /* @__PURE__ */ jsxs16("div", { className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row", children: [
              /* @__PURE__ */ jsxs16(InitLandingActionButton, { href: block.props.primaryCta.href, children: [
                block.props.primaryCta.label,
                /* @__PURE__ */ jsx18(ArrowRightIcon, { className: "ml-2 h-4 w-4" })
              ] }),
              /* @__PURE__ */ jsx18(
                InitLandingActionButton,
                {
                  href: block.props.secondaryCta.href,
                  outline: true,
                  children: block.props.secondaryCta.label
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx18("div", { className: "animate-fade-up animation-delay-500 relative z-10 mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8", children: block.props.stats.map((stat, index) => /* @__PURE__ */ jsx18(
              "div",
              {
                className: `animation-delay-${(index + 5) * 100} rounded-2xl border border-[color-mix(in_oklab,var(--photon-site-border)_50%,transparent)] bg-[color-mix(in_oklab,var(--photon-site-surface)_50%,transparent)] p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-[var(--photon-site-border)] hover:bg-[var(--photon-site-surface)] hover:shadow-lg`,
                children: mode === "preview" ? /* @__PURE__ */ jsx18(
                  InitStatWidget,
                  {
                    atLeastLg,
                    label: stat.label,
                    suffix: stat.suffix,
                    value: stat.value
                  }
                ) : /* @__PURE__ */ jsxs16("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxs16(
                    "div",
                    {
                      className: [
                        "font-semibold text-[var(--photon-site-text)]",
                        atLeastLg ? "text-4xl" : "text-3xl"
                      ].join(" "),
                      children: [
                        /* @__PURE__ */ jsx18(
                          EditableText8,
                          {
                            blockId: block.id,
                            path: `stats.${index}.value`
                          }
                        ),
                        /* @__PURE__ */ jsx18(
                          EditableText8,
                          {
                            blockId: block.id,
                            path: `stats.${index}.suffix`,
                            placeholder: ""
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx18(
                    EditableText8,
                    {
                      blockId: block.id,
                      path: `stats.${index}.label`,
                      className: "mt-1 text-sm text-[var(--photon-site-muted-text)]"
                    }
                  )
                ] })
              },
              `${stat.label}:${stat.value}`
            )) })
          ] }),
          /* @__PURE__ */ jsx18("div", { className: "animate-fade-up animation-delay-700 absolute bottom-8 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsxs16("div", { className: "flex flex-col items-center gap-2 text-[var(--photon-site-muted-text)]", children: [
            /* @__PURE__ */ jsx18("span", { className: "text-xs uppercase tracking-widest", children: "Scroll" }),
            /* @__PURE__ */ jsx18("div", { className: "flex h-8 w-5 items-start justify-center rounded-full border-2 border-current p-1", children: /* @__PURE__ */ jsx18("div", { className: "h-2 w-1 animate-bounce rounded-full bg-current" }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs16("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-28", children: [
          /* @__PURE__ */ jsx18("div", { className: "absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-[color-mix(in_oklab,var(--photon-site-background)_55%,transparent)] to-[var(--photon-site-background)]" }),
          /* @__PURE__ */ jsx18("div", { className: "absolute inset-x-0 bottom-0 h-px bg-[color-mix(in_oklab,var(--photon-site-border)_70%,transparent)]" })
        ] })
      ]
    }
  );
};
var initLandingHeroDefinition = definePhotonBlockDefinition8({
  type: "init-landing-hero",
  label: "Init Landing Hero",
  description: "Hero section from the Init landing page.",
  category: "Hero",
  icon: "sparkles",
  component: InitLandingHeroBlock,
  fields: fields4,
  localizationSchema: createInitLandingBlockLocalizationSchema(fields4),
  defaults: {
    badge: createPhotonLocalizedDefault8({
      en: "\u0421\u0430\u0439\u0442\u044B \u0431\u0435\u0437 \u043B\u0438\u0448\u043D\u0435\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438",
      ru: "\u0421\u0430\u0439\u0442\u044B \u0431\u0435\u0437 \u043B\u0438\u0448\u043D\u0435\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438"
    }),
    title: createPhotonLocalizedDefault8({
      en: "\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u0441\u0430\u0439\u0442\u044B",
      ru: "\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u0441\u0430\u0439\u0442\u044B"
    }),
    highlightedTitle: createPhotonLocalizedDefault8({
      en: "\u043F\u043E\u0434 \u0437\u0430\u0434\u0430\u0447\u0443 \u0438 \u0440\u043E\u0441\u0442",
      ru: "\u043F\u043E\u0434 \u0437\u0430\u0434\u0430\u0447\u0443 \u0438 \u0440\u043E\u0441\u0442"
    }),
    supportingTexts: [
      "\u0417\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u0441\u0430\u0439\u0442\u044B \u0434\u043B\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0432 \u0442\u0440\u0451\u0445 \u0444\u043E\u0440\u043C\u0430\u0442\u0430\u0445: \u0433\u043E\u0442\u043E\u0432\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u0441\u0431\u043E\u0440\u043A\u0430 \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430.",
      "\u041F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442 \u043F\u043E\u0434 \u0432\u0430\u0448 \u0431\u044E\u0434\u0436\u0435\u0442, \u0441\u0440\u043E\u043A\u0438 \u0438 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043F\u0440\u043E\u0434\u0430\u0436, \u0447\u0442\u043E\u0431\u044B \u043D\u0435 \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0442\u044C \u0437\u0430 \u043B\u0438\u0448\u043D\u0435\u0435.",
      "\u041E\u0442 \u043B\u0435\u043D\u0434\u0438\u043D\u0433\u043E\u0432 \u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0441\u0430\u0439\u0442\u043E\u0432 \u0434\u043E \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u0438 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u043E\u0432 \u0443\u0441\u043B\u0443\u0433, \u0441 \u043F\u043E\u043D\u044F\u0442\u043D\u043E\u0439 \u0441\u0431\u043E\u0440\u043A\u043E\u0439 \u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u043E\u043C."
    ],
    primaryCta: { label: "\u041F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442", href: "#pricing" },
    secondaryCta: { label: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0438", href: "#services" },
    leadCapture: {
      placeholder: "+1 555 123 4567",
      buttonLabel: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
      helperText: "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043D\u043E\u043C\u0435\u0440, \u0438 \u043C\u044B \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0435\u043C, \u043A\u0430\u043A\u043E\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0441\u0430\u0439\u0442\u0430 \u043F\u043E\u0434\u043E\u0439\u0434\u0451\u0442 \u043F\u043E\u0434 \u0432\u0430\u0448\u0443 \u0437\u0430\u0434\u0430\u0447\u0443."
    },
    featurePills: [
      { icon: "layoutTemplate", label: "\u041B\u0435\u043D\u0434\u0438\u043D\u0433\u0438 \u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0435" },
      { icon: "packageCheck", label: "\u0413\u043E\u0442\u043E\u0432\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F" },
      { icon: "blocks", label: "\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u043C\u043E\u0434\u0443\u043B\u0435\u0439" },
      { icon: "wandSparkles", label: "Custom-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430" }
    ],
    stats: [
      { value: 14, suffix: "+", label: "\u041B\u0435\u0442 \u0432 digital-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435" },
      { value: 4, suffix: "", label: "\u0422\u0438\u043F\u0430 \u0441\u0430\u0439\u0442\u043E\u0432 \u0432 \u043B\u0438\u043D\u0435\u0439\u043A\u0435" },
      { value: 3, suffix: "", label: "\u0424\u043E\u0440\u043C\u0430\u0442\u0430 \u0437\u0430\u043F\u0443\u0441\u043A\u0430" },
      { value: 100, suffix: "%", label: "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0431\u043E\u0440\u043A\u0438" }
    ]
  }
});

// src/blocks/init-landing/init-landing-pricing.tsx
import {
  createPhotonLocalizedDefault as createPhotonLocalizedDefault9,
  definePhotonBlockDefinition as definePhotonBlockDefinition9,
  EditableText as EditableText9,
  EditableTextarea as EditableTextarea6,
  PhotonLink as PhotonLink7
} from "@init/photon/public";
import { jsx as jsx19, jsxs as jsxs17 } from "react/jsx-runtime";
var fields5 = [
  {
    path: "sectionId",
    label: "Section id",
    kind: "text",
    group: "layout",
    localization: "shared"
  },
  {
    path: "eyebrow",
    label: "Eyebrow",
    kind: "text",
    group: "content",
    localization: "localized"
  },
  {
    path: "title",
    label: "Title",
    kind: "text",
    group: "content",
    localization: "localized"
  },
  {
    path: "description",
    label: "Description",
    kind: "textarea",
    group: "content",
    localization: "localized"
  },
  {
    path: "plans",
    label: "Plans",
    kind: "repeater",
    group: "content",
    localization: "localized",
    itemLabelPath: "name",
    addLabel: "Add plan",
    fields: [
      { path: "name", label: "Name", kind: "text" },
      { path: "description", label: "Description", kind: "textarea" },
      { path: "price", label: "Price", kind: "text", localization: "shared" },
      { path: "period", label: "Period", kind: "text" },
      {
        path: "highlighted",
        label: "Highlighted",
        kind: "toggle",
        localization: "shared"
      },
      {
        path: "features",
        label: "Features",
        kind: "repeater",
        localization: "localized",
        addLabel: "Add feature",
        itemLabel: "Feature",
        itemField: { label: "Feature", kind: "text" }
      },
      { path: "cta", label: "CTA label", kind: "text" },
      { path: "href", label: "Href", kind: "url", localization: "shared" }
    ]
  },
  {
    path: "note",
    label: "Note",
    kind: "textarea",
    group: "content",
    localization: "localized"
  },
  {
    path: "noteCta",
    label: "Note CTA",
    kind: "object",
    group: "content",
    localization: "localized",
    fields: [
      { path: "label", label: "Label", kind: "text" },
      { path: "href", label: "Href", kind: "url", localization: "shared" }
    ]
  }
];
var InitLandingPricingBlock = ({
  block
}) => {
  const sectionRef = useInitLandingReveal();
  const bleedStyle = useInitLandingSectionBleedStyle();
  const { ref, atLeastMd, atLeastLg } = useInitLandingSurfaceBreakpoints();
  return /* @__PURE__ */ jsx19(
    "section",
    {
      ref,
      id: block.props.sectionId,
      className: ["py-24", atLeastLg ? "py-32" : ""].join(" "),
      style: bleedStyle,
      children: /* @__PURE__ */ jsxs17("div", { className: sectionFrameClassName, ref: sectionRef, children: [
        /* @__PURE__ */ jsxs17(
          "div",
          {
            className: `${revealClassName} mb-16 mx-auto max-w-2xl text-center`,
            children: [
              /* @__PURE__ */ jsx19(
                EditableText9,
                {
                  blockId: block.id,
                  path: "eyebrow",
                  className: "mb-4 text-sm font-medium uppercase tracking-wider text-[var(--photon-site-accent)]"
                }
              ),
              /* @__PURE__ */ jsx19(
                EditableText9,
                {
                  blockId: block.id,
                  path: "title",
                  as: "h2",
                  className: [
                    "text-balance font-semibold tracking-tight text-[var(--photon-site-text)]",
                    atLeastLg ? "text-4xl" : "text-3xl"
                  ].join(" ")
                }
              ),
              /* @__PURE__ */ jsx19(
                EditableTextarea6,
                {
                  blockId: block.id,
                  path: "description",
                  className: "mt-4 text-lg text-[var(--photon-site-muted-text)]"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx19(
          "div",
          {
            className: [
              "grid gap-8",
              atLeastLg ? "grid-cols-3" : atLeastMd ? "grid-cols-2" : ""
            ].join(" "),
            children: block.props.plans.map((plan, index) => /* @__PURE__ */ jsxs17(
              "div",
              {
                className: [
                  revealClassName,
                  "relative overflow-hidden rounded-[1.75rem] border bg-[var(--photon-site-surface)] transition-all duration-700 hover:shadow-xl",
                  plan.highlighted ? `${atLeastLg ? "scale-[1.02] " : ""}border-[var(--photon-site-accent)] shadow-lg` : "border-[color-mix(in_srgb,var(--photon-site-border)_84%,white)] hover:border-[color-mix(in_srgb,var(--photon-site-accent)_20%,var(--photon-site-border))]"
                ].join(" "),
                style: { transitionDelay: `${index * 150}ms` },
                children: [
                  plan.highlighted ? /* @__PURE__ */ jsx19("div", { className: "absolute left-0 right-0 top-0 h-1 bg-[var(--photon-site-accent)]" }) : null,
                  /* @__PURE__ */ jsxs17("div", { className: "pb-4 p-6", children: [
                    plan.highlighted ? /* @__PURE__ */ jsx19("span", { className: "mb-2 inline-block text-xs font-medium uppercase tracking-wider text-[var(--photon-site-accent)]", children: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C" }) : null,
                    /* @__PURE__ */ jsx19("h3", { className: "text-xl font-semibold text-[var(--photon-site-text)]", children: /* @__PURE__ */ jsx19(
                      EditableText9,
                      {
                        blockId: block.id,
                        path: `plans.${index}.name`
                      }
                    ) }),
                    /* @__PURE__ */ jsx19(
                      EditableTextarea6,
                      {
                        blockId: block.id,
                        path: `plans.${index}.description`,
                        className: "mt-1 text-sm text-[var(--photon-site-muted-text)]"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs17("div", { className: "px-6 pb-6", children: [
                    /* @__PURE__ */ jsxs17("div", { className: "mb-6", children: [
                      /* @__PURE__ */ jsx19("span", { className: "text-4xl font-semibold text-[var(--photon-site-text)]", children: /* @__PURE__ */ jsx19(
                        EditableText9,
                        {
                          blockId: block.id,
                          path: `plans.${index}.price`
                        }
                      ) }),
                      /* @__PURE__ */ jsx19("span", { className: "ml-2 text-sm text-[var(--photon-site-muted-text)]", children: /* @__PURE__ */ jsx19(
                        EditableText9,
                        {
                          blockId: block.id,
                          path: `plans.${index}.period`
                        }
                      ) })
                    ] }),
                    /* @__PURE__ */ jsx19("ul", { className: "mb-8 space-y-3", children: plan.features.map((feature, featureIndex) => /* @__PURE__ */ jsx19(InitCheckListItem, { children: /* @__PURE__ */ jsx19(
                      EditableText9,
                      {
                        blockId: block.id,
                        path: `plans.${index}.features.${featureIndex}`
                      }
                    ) }, `${feature}:${featureIndex}`)) }),
                    /* @__PURE__ */ jsx19(
                      PhotonLink7,
                      {
                        href: plan.href,
                        className: [
                          "inline-flex w-full items-center justify-center rounded-[1.1rem] px-4 py-3 text-sm font-medium transition-transform duration-300 hover:scale-[1.02]",
                          plan.highlighted ? "bg-[var(--photon-site-accent)] text-white hover:shadow-lg hover:shadow-[color-mix(in_srgb,var(--photon-site-accent)_25%,transparent)]" : "border border-[color-mix(in_srgb,var(--photon-site-border)_84%,white)] text-[var(--photon-site-text)] hover:bg-[color-mix(in_srgb,var(--photon-site-surface)_96%,white)]"
                        ].join(" "),
                        children: /* @__PURE__ */ jsx19(
                          EditableText9,
                          {
                            blockId: block.id,
                            path: `plans.${index}.cta`
                          }
                        )
                      }
                    )
                  ] })
                ]
              },
              `${plan.name}:${index}`
            ))
          }
        ),
        /* @__PURE__ */ jsxs17(
          "p",
          {
            className: `${revealClassName} mt-12 text-center text-sm text-[var(--photon-site-muted-text)]`,
            style: { transitionDelay: "500ms" },
            children: [
              block.props.note,
              " ",
              /* @__PURE__ */ jsx19(
                PhotonLink7,
                {
                  href: block.props.noteCta.href,
                  className: "text-[var(--photon-site-accent)] hover:underline",
                  children: /* @__PURE__ */ jsx19(EditableText9, { blockId: block.id, path: "noteCta.label" })
                }
              )
            ]
          }
        )
      ] })
    }
  );
};
var initLandingPricingDefinition = definePhotonBlockDefinition9({
  type: "init-landing-pricing",
  label: "Init Landing Pricing",
  description: "Pricing section from the Init landing page.",
  category: "Commerce",
  icon: "badge-dollar-sign",
  component: InitLandingPricingBlock,
  fields: fields5,
  localizationSchema: createInitLandingBlockLocalizationSchema(fields5),
  defaults: {
    sectionId: "pricing",
    eyebrow: createPhotonLocalizedDefault9({
      en: "\u041A\u0430\u043A \u044D\u0442\u043E \u043F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F",
      ru: "\u041A\u0430\u043A \u044D\u0442\u043E \u043F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F"
    }),
    title: createPhotonLocalizedDefault9({
      en: "\u0422\u0440\u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u0430 \u043A \u0437\u0430\u043F\u0443\u0441\u043A\u0443 \u0441\u0430\u0439\u0442\u0430",
      ru: "\u0422\u0440\u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u0430 \u043A \u0437\u0430\u043F\u0443\u0441\u043A\u0443 \u0441\u0430\u0439\u0442\u0430"
    }),
    description: createPhotonLocalizedDefault9({
      en: "\u0421\u0430\u043C\u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u0440\u0430\u0437\u043D\u044B\u0435 \u043F\u043E \u0433\u043B\u0443\u0431\u0438\u043D\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0438 \u0441\u0440\u043E\u043A\u0430\u043C, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0438 \u043F\u0440\u043E\u0434\u0430\u0451\u043C \u0438\u0445 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F\u043C\u0438.",
      ru: "\u0421\u0430\u043C\u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u0440\u0430\u0437\u043D\u044B\u0435 \u043F\u043E \u0433\u043B\u0443\u0431\u0438\u043D\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0438 \u0441\u0440\u043E\u043A\u0430\u043C, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0438 \u043F\u0440\u043E\u0434\u0430\u0451\u043C \u0438\u0445 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F\u043C\u0438."
    }),
    plans: [
      {
        name: "\u0413\u043E\u0442\u043E\u0432\u044B\u0439 \u0441\u0430\u0439\u0442",
        description: "\u041A\u043E\u0433\u0434\u0430 \u043D\u0443\u0436\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u043E \u0432\u044B\u0439\u0442\u0438 \u0432 \u043E\u043D\u043B\u0430\u0439\u043D \u0441 \u0443\u0436\u0435 \u043F\u043E\u043D\u044F\u0442\u043D\u043E\u0439 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043E\u0439.",
        price: "\u043E\u0442 190 000 \u20B8",
        period: "\u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0437\u0430\u043F\u0443\u0441\u043A",
        features: [
          "\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u043B\u0435\u043D\u0434\u0438\u043D\u0433\u0430, \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0430, \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430 \u0443\u0441\u043B\u0443\u0433",
          "\u041C\u0435\u043D\u044F\u0435\u043C \u0442\u0435\u043A\u0441\u0442\u044B, \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0438 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C",
          "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0437\u0430\u043F\u0443\u0441\u043A \u0431\u0435\u0437 \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
          "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0444\u043E\u0440\u043C \u0438 \u0431\u0430\u0437\u043E\u0432\u044B\u0445 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0439"
        ],
        cta: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442",
        href: "#contact"
      },
      {
        name: "\u0421\u0430\u0439\u0442-\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440",
        description: "\u041A\u043E\u0433\u0434\u0430 \u043D\u0443\u0436\u0435\u043D \u0433\u0438\u0431\u043A\u0438\u0439 \u043D\u0430\u0431\u043E\u0440 \u043C\u043E\u0434\u0443\u043B\u0435\u0439 \u0438 \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u0439 \u0440\u0430\u0441\u0447\u0451\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438.",
        price: "\u043E\u0442 290 000 \u20B8",
        period: "\u043C\u043E\u0434\u0443\u043B\u0438 + \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0446\u0438\u044F",
        highlighted: true,
        features: [
          "\u0420\u0443\u0447\u043D\u0430\u044F \u0441\u0431\u043E\u0440\u043A\u0430 \u043C\u043E\u0434\u0443\u043B\u0435\u0439 \u043F\u043E\u0434 \u0437\u0430\u0434\u0430\u0447\u0443",
          "\u0412\u0438\u0434\u0438\u043C\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0431\u043B\u043E\u043A\u0430",
          "\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432, \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u043E\u0432 \u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0441\u0430\u0439\u0442\u043E\u0432",
          "\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F \u043D\u0430 \u043D\u0430\u0448\u0435\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u0435"
        ],
        cta: "\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E",
        href: "#contact"
      },
      {
        name: "Custom",
        description: "\u041A\u043E\u0433\u0434\u0430 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u0438 \u043C\u043E\u0434\u0443\u043B\u0435\u0439 \u0443\u0436\u0435 \u043C\u0435\u0448\u0430\u044E\u0442 \u0431\u0438\u0437\u043D\u0435\u0441\u0443.",
        price: "\u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E",
        period: "\u043F\u043E\u0441\u043B\u0435 \u0431\u0440\u0438\u0444\u0430 \u0438 \u043E\u0446\u0435\u043D\u043A\u0438",
        features: [
          "\u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 \u0438 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0441 \u043D\u0443\u043B\u044F",
          "\u041D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438, \u0440\u043E\u043B\u0438 \u0438 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u044B",
          "\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u043B\u044E\u0431\u043E\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438",
          "\u041F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u043B\u043E\u0433\u0438\u043A\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430"
        ],
        cta: "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C custom",
        href: "#contact"
      }
    ],
    note: createPhotonLocalizedDefault9({
      en: "\u0415\u0441\u043B\u0438 \u0441\u043E\u043C\u043D\u0435\u0432\u0430\u0435\u0442\u0435\u0441\u044C \u043C\u0435\u0436\u0434\u0443 \u0444\u043E\u0440\u043C\u0430\u0442\u0430\u043C\u0438, \u043D\u0430 \u0431\u0440\u0438\u0444\u0435 \u0440\u0430\u0437\u043B\u043E\u0436\u0438\u043C \u0437\u0430\u0434\u0430\u0447\u0443 \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u043C \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0440\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439.",
      ru: "\u0415\u0441\u043B\u0438 \u0441\u043E\u043C\u043D\u0435\u0432\u0430\u0435\u0442\u0435\u0441\u044C \u043C\u0435\u0436\u0434\u0443 \u0444\u043E\u0440\u043C\u0430\u0442\u0430\u043C\u0438, \u043D\u0430 \u0431\u0440\u0438\u0444\u0435 \u0440\u0430\u0437\u043B\u043E\u0436\u0438\u043C \u0437\u0430\u0434\u0430\u0447\u0443 \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u043C \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0440\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439."
    }),
    noteCta: { label: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441", href: "#contact" }
  }
});

// src/blocks/init-landing/init-landing-process.tsx
import {
  createPhotonLocalizedDefault as createPhotonLocalizedDefault10,
  definePhotonBlockDefinition as definePhotonBlockDefinition10,
  EditableText as EditableText10,
  EditableTextarea as EditableTextarea7
} from "@init/photon/public";
import { jsx as jsx20, jsxs as jsxs18 } from "react/jsx-runtime";
var fields6 = [
  {
    path: "sectionId",
    label: "Section id",
    kind: "text",
    group: "layout",
    localization: "shared"
  },
  {
    path: "eyebrow",
    label: "Eyebrow",
    kind: "text",
    group: "content",
    localization: "localized"
  },
  {
    path: "title",
    label: "Title",
    kind: "text",
    group: "content",
    localization: "localized"
  },
  {
    path: "description",
    label: "Description",
    kind: "textarea",
    group: "content",
    localization: "localized"
  },
  {
    path: "steps",
    label: "Steps",
    kind: "repeater",
    group: "content",
    localization: "localized",
    itemLabelPath: "title",
    addLabel: "Add step",
    fields: [
      { path: "number", label: "Number", kind: "text", localization: "shared" },
      { path: "title", label: "Title", kind: "text" },
      { path: "description", label: "Description", kind: "textarea" }
    ]
  }
];
var InitLandingProcessBlock = ({
  block
}) => {
  const sectionRef = useInitLandingReveal();
  const bleedStyle = useInitLandingSectionBleedStyle();
  const { ref, atLeastMd, atLeastLg } = useInitLandingSurfaceBreakpoints();
  return /* @__PURE__ */ jsx20(
    "section",
    {
      ref,
      id: block.props.sectionId,
      className: [
        "bg-[var(--photon-site-surface)] py-24",
        atLeastLg ? "py-32" : ""
      ].join(" "),
      style: bleedStyle,
      children: /* @__PURE__ */ jsxs18("div", { className: sectionFrameClassName, ref: sectionRef, children: [
        /* @__PURE__ */ jsxs18(
          "div",
          {
            className: `${revealClassName} mb-16 mx-auto max-w-2xl text-center`,
            children: [
              /* @__PURE__ */ jsx20(
                EditableText10,
                {
                  blockId: block.id,
                  path: "eyebrow",
                  className: "mb-4 text-sm font-medium uppercase tracking-wider text-[var(--photon-site-accent)]"
                }
              ),
              /* @__PURE__ */ jsx20(
                EditableText10,
                {
                  blockId: block.id,
                  path: "title",
                  as: "h2",
                  className: [
                    "text-balance font-semibold tracking-tight text-[var(--photon-site-text)]",
                    atLeastLg ? "text-4xl" : "text-3xl"
                  ].join(" ")
                }
              ),
              /* @__PURE__ */ jsx20(
                EditableTextarea7,
                {
                  blockId: block.id,
                  path: "description",
                  className: "mt-4 text-lg text-[var(--photon-site-muted-text)]"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs18("div", { className: "relative", children: [
          atLeastLg ? /* @__PURE__ */ jsx20("div", { className: "absolute left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] top-12 h-px bg-[var(--photon-site-border)]" }) : null,
          /* @__PURE__ */ jsx20(
            "div",
            {
              className: [
                "grid gap-8",
                atLeastLg ? "grid-cols-4 gap-6" : atLeastMd ? "grid-cols-2" : ""
              ].join(" "),
              children: block.props.steps.map((step, index) => /* @__PURE__ */ jsxs18(
                "div",
                {
                  className: `${revealClassName} group relative`,
                  style: { transitionDelay: `${index * 150}ms` },
                  children: [
                    /* @__PURE__ */ jsx20("div", { className: "relative z-10 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[var(--photon-site-border)] bg-[var(--photon-site-background)] transition-all duration-300 group-hover:border-[var(--photon-site-accent)] group-hover:scale-105", children: /* @__PURE__ */ jsx20("span", { className: "text-2xl font-semibold text-[var(--photon-site-accent)]", children: /* @__PURE__ */ jsx20(
                      EditableText10,
                      {
                        blockId: block.id,
                        path: `steps.${index}.number`
                      }
                    ) }) }),
                    /* @__PURE__ */ jsxs18("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsx20("h3", { className: "mb-3 text-xl font-semibold text-[var(--photon-site-text)]", children: /* @__PURE__ */ jsx20(
                        EditableText10,
                        {
                          blockId: block.id,
                          path: `steps.${index}.title`
                        }
                      ) }),
                      /* @__PURE__ */ jsx20(
                        EditableTextarea7,
                        {
                          blockId: block.id,
                          path: `steps.${index}.description`,
                          className: "leading-relaxed text-[var(--photon-site-muted-text)]"
                        }
                      )
                    ] })
                  ]
                },
                `${step.number}:${index}`
              ))
            }
          )
        ] })
      ] })
    }
  );
};
var initLandingProcessDefinition = definePhotonBlockDefinition10({
  type: "init-landing-process",
  label: "Init Landing Process",
  description: "Process section from the Init landing page.",
  category: "Content",
  icon: "waypoints",
  component: InitLandingProcessBlock,
  fields: fields6,
  localizationSchema: createInitLandingBlockLocalizationSchema(fields6),
  defaults: {
    sectionId: "process",
    eyebrow: createPhotonLocalizedDefault10({
      en: "\u041A\u0430\u043A \u0438\u0434\u0451\u043C \u0432 \u0440\u0430\u0431\u043E\u0442\u0443",
      ru: "\u041A\u0430\u043A \u0438\u0434\u0451\u043C \u0432 \u0440\u0430\u0431\u043E\u0442\u0443"
    }),
    title: createPhotonLocalizedDefault10({
      en: "\u041F\u0443\u0442\u044C \u043E\u0442 \u0437\u0430\u0434\u0430\u0447\u0438 \u0434\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0431\u0435\u0437 \u043B\u0438\u0448\u043D\u0435\u0439 \u0431\u044E\u0440\u043E\u043A\u0440\u0430\u0442\u0438\u0438",
      ru: "\u041F\u0443\u0442\u044C \u043E\u0442 \u0437\u0430\u0434\u0430\u0447\u0438 \u0434\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0431\u0435\u0437 \u043B\u0438\u0448\u043D\u0435\u0439 \u0431\u044E\u0440\u043E\u043A\u0440\u0430\u0442\u0438\u0438"
    }),
    description: createPhotonLocalizedDefault10({
      en: "\u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u0433\u043B\u0443\u0431\u0438\u043D\u0435, \u043D\u043E \u043B\u043E\u0433\u0438\u043A\u0430 \u043E\u0434\u043D\u0430: \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u043C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442, \u043F\u043E\u0442\u043E\u043C \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C \u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C.",
      ru: "\u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u0433\u043B\u0443\u0431\u0438\u043D\u0435, \u043D\u043E \u043B\u043E\u0433\u0438\u043A\u0430 \u043E\u0434\u043D\u0430: \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u043C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442, \u043F\u043E\u0442\u043E\u043C \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C \u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C."
    }),
    steps: [
      {
        number: "01",
        title: "\u0420\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u043C \u0437\u0430\u0434\u0430\u0447\u0443",
        description: "\u041F\u043E\u043D\u0438\u043C\u0430\u0435\u043C, \u0447\u0442\u043E \u0438\u043C\u0435\u043D\u043D\u043E \u0432\u044B \u043F\u0440\u043E\u0434\u0430\u0451\u0442\u0435, \u043A\u0430\u043A\u043E\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0441\u0430\u0439\u0442\u0430 \u043D\u0443\u0436\u0435\u043D \u0438 \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0443\u043C\u0435\u0441\u0442\u0435\u043D \u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442, \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0438\u043B\u0438 custom."
      },
      {
        number: "02",
        title: "\u0424\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u043C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439",
        description: "\u0421\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u044B\u0432\u0430\u0435\u043C \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443, \u043C\u043E\u0434\u0443\u043B\u0438, \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043D\u044B\u0435 \u0431\u043B\u043E\u043A\u0438 \u0438 \u043E\u0431\u044A\u0451\u043C \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0439. \u0414\u043B\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440\u0430 \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u043C \u0441\u043E\u0441\u0442\u0430\u0432 \u0438 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C."
      },
      {
        number: "03",
        title: "\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u043C \u0438 \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C",
        description: "\u041D\u0430 \u043D\u0430\u0448\u0435\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C \u0441\u0430\u0439\u0442, \u043D\u0430\u0432\u043E\u0434\u0438\u043C \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A, \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C \u0444\u043E\u0440\u043C\u044B, \u0441\u0435\u0440\u0432\u0438\u0441\u044B \u0438 \u043D\u0443\u0436\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0435\u0442\u0430\u043B\u0438."
      },
      {
        number: "04",
        title: "\u0417\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C",
        description: "\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E, \u0432\u044B\u043A\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u043F\u0440\u043E\u0435\u043A\u0442 \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u043C \u0432\u0430\u043C \u0443\u0436\u0435 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0430\u0439\u0442, \u0430 \u043D\u0435 \u043D\u0430\u0431\u043E\u0440 \u043D\u0435\u0434\u043E\u0434\u0435\u043B\u0430\u043D\u043D\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432."
      }
    ]
  }
});

// src/blocks/init-landing/init-landing-services.tsx
import {
  createPhotonLocalizedDefault as createPhotonLocalizedDefault11,
  definePhotonBlockDefinition as definePhotonBlockDefinition11,
  EditableText as EditableText11,
  EditableTextarea as EditableTextarea8
} from "@init/photon/public";
import { jsx as jsx21, jsxs as jsxs19 } from "react/jsx-runtime";
var fields7 = [
  {
    path: "sectionId",
    label: "Section id",
    kind: "text",
    group: "layout",
    localization: "shared"
  },
  {
    path: "eyebrow",
    label: "Eyebrow",
    kind: "text",
    group: "content",
    localization: "localized"
  },
  {
    path: "title",
    label: "Title",
    kind: "text",
    group: "content",
    localization: "localized"
  },
  {
    path: "description",
    label: "Description",
    kind: "textarea",
    group: "content",
    localization: "localized"
  },
  {
    path: "items",
    label: "Items",
    kind: "repeater",
    group: "content",
    localization: "localized",
    itemLabelPath: "title",
    addLabel: "Add service",
    fields: [
      {
        path: "icon",
        label: "Icon",
        kind: "select",
        localization: "shared",
        options: initLandingIconFieldOptions
      },
      { path: "title", label: "Title", kind: "text" },
      { path: "description", label: "Description", kind: "textarea" }
    ]
  }
];
var InitLandingServicesBlock = ({
  block
}) => {
  const sectionRef = useInitLandingReveal();
  const bleedStyle = useInitLandingSectionBleedStyle();
  const { ref, atLeastMd, atLeastLg } = useInitLandingSurfaceBreakpoints();
  return /* @__PURE__ */ jsx21(
    "section",
    {
      ref,
      id: block.props.sectionId,
      className: ["py-24", atLeastLg ? "py-32" : ""].join(" "),
      style: bleedStyle,
      children: /* @__PURE__ */ jsxs19("div", { className: sectionFrameClassName, ref: sectionRef, children: [
        /* @__PURE__ */ jsxs19(
          "div",
          {
            className: `${revealClassName} mb-16 mx-auto max-w-2xl text-center`,
            children: [
              /* @__PURE__ */ jsx21(
                EditableText11,
                {
                  blockId: block.id,
                  path: "eyebrow",
                  className: "mb-4 text-sm font-medium uppercase tracking-wider text-[var(--photon-site-accent)]"
                }
              ),
              /* @__PURE__ */ jsx21(
                EditableText11,
                {
                  blockId: block.id,
                  path: "title",
                  as: "h2",
                  className: [
                    "text-balance font-semibold tracking-tight text-[var(--photon-site-text)]",
                    atLeastLg ? "text-4xl" : "text-3xl"
                  ].join(" ")
                }
              ),
              /* @__PURE__ */ jsx21(
                EditableTextarea8,
                {
                  blockId: block.id,
                  path: "description",
                  className: "mt-4 text-lg text-[var(--photon-site-muted-text)]"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx21(
          "div",
          {
            className: ["grid gap-6", atLeastMd ? "grid-cols-2" : ""].join(" "),
            children: block.props.items.map((service, index) => {
              const Icon = initLandingIcons[service.icon];
              return /* @__PURE__ */ jsxs19(
                "div",
                {
                  className: `${revealClassName} group rounded-[1.75rem] border border-[color-mix(in_srgb,var(--photon-site-border)_86%,white)] bg-[var(--photon-site-surface)] p-8 hover:border-[color-mix(in_srgb,var(--photon-site-accent)_20%,var(--photon-site-border))] hover:shadow-lg`,
                  style: { transitionDelay: `${index * 100}ms` },
                  children: [
                    /* @__PURE__ */ jsx21("div", { className: "mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[color-mix(in_srgb,var(--photon-site-accent)_10%,transparent)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[color-mix(in_srgb,var(--photon-site-accent)_20%,transparent)]", children: /* @__PURE__ */ jsx21(Icon, { className: "h-6 w-6 text-[var(--photon-site-accent)]" }) }),
                    /* @__PURE__ */ jsx21("h3", { className: "mb-3 text-xl font-semibold text-[var(--photon-site-text)]", children: /* @__PURE__ */ jsx21(
                      EditableText11,
                      {
                        blockId: block.id,
                        path: `items.${index}.title`
                      }
                    ) }),
                    /* @__PURE__ */ jsx21(
                      EditableTextarea8,
                      {
                        blockId: block.id,
                        path: `items.${index}.description`,
                        className: "leading-relaxed text-[var(--photon-site-muted-text)]"
                      }
                    )
                  ]
                },
                `${service.title}:${index}`
              );
            })
          }
        )
      ] })
    }
  );
};
var initLandingServicesDefinition = definePhotonBlockDefinition11({
  type: "init-landing-services",
  label: "Init Landing Services",
  description: "Services grid from the Init landing page.",
  category: "Content",
  icon: "layout-grid",
  component: InitLandingServicesBlock,
  fields: fields7,
  localizationSchema: createInitLandingBlockLocalizationSchema(fields7),
  defaults: {
    sectionId: "services",
    eyebrow: createPhotonLocalizedDefault11({
      en: "\u0427\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C",
      ru: "\u0427\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
    }),
    title: createPhotonLocalizedDefault11({
      en: "\u041E\u0434\u0438\u043D \u0432\u0438\u0437\u0443\u0430\u043B, \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0444\u043E\u0440\u043C\u0430\u0442\u043E\u0432 \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0441\u0430\u0439\u0442\u0430",
      ru: "\u041E\u0434\u0438\u043D \u0432\u0438\u0437\u0443\u0430\u043B, \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0444\u043E\u0440\u043C\u0430\u0442\u043E\u0432 \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0441\u0430\u0439\u0442\u0430"
    }),
    description: createPhotonLocalizedDefault11({
      en: "\u0412\u044B\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u0433\u043B\u0443\u0431\u0438\u043D\u0443 \u043A\u0430\u0441\u0442\u043E\u043C\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u043E\u0434 \u0441\u0432\u043E\u044E \u0437\u0430\u0434\u0430\u0447\u0443: \u043E\u0442 \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u0448\u0430\u0431\u043B\u043E\u043D\u0430 \u0434\u043E \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430.",
      ru: "\u0412\u044B\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u0433\u043B\u0443\u0431\u0438\u043D\u0443 \u043A\u0430\u0441\u0442\u043E\u043C\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u043E\u0434 \u0441\u0432\u043E\u044E \u0437\u0430\u0434\u0430\u0447\u0443: \u043E\u0442 \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u0448\u0430\u0431\u043B\u043E\u043D\u0430 \u0434\u043E \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430."
    }),
    items: [
      {
        icon: "packageCheck",
        title: "\u0413\u043E\u0442\u043E\u0432\u044B\u0435 \u0441\u0430\u0439\u0442\u044B",
        description: "\u0411\u0435\u0440\u0451\u043C \u0443\u0436\u0435 \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443, \u043C\u0435\u043D\u044F\u0435\u043C \u043A\u043E\u043D\u0442\u0435\u043D\u0442, \u043F\u0440\u0438\u0432\u043E\u0434\u0438\u043C \u043F\u043E\u0434 \u0432\u0430\u0448 \u0431\u0440\u0435\u043D\u0434 \u0438 \u0431\u044B\u0441\u0442\u0440\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u0441\u0430\u0439\u0442."
      },
      {
        icon: "blocks",
        title: "\u0421\u0430\u0439\u0442-\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440",
        description: "\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0435 \u043D\u0443\u0436\u043D\u044B\u0435 \u043C\u043E\u0434\u0443\u043B\u0438 \u0432\u0440\u0443\u0447\u043D\u0443\u044E, \u0432\u0438\u0434\u0438\u0442\u0435 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0431\u043B\u043E\u043A\u043E\u0432 \u0432 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u0435, \u0430 \u043C\u044B \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C, \u0438\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043C \u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0435\u043C."
      },
      {
        icon: "wandSparkles",
        title: "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430",
        description: "\u041F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u0443\u0435\u043C \u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u0435\u043C \u0441\u0430\u0439\u0442 \u0441 \u043D\u0443\u043B\u044F, \u0435\u0441\u043B\u0438 \u043D\u0443\u0436\u0435\u043D \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439, \u0441\u043B\u043E\u0436\u043D\u0430\u044F \u043B\u043E\u0433\u0438\u043A\u0430 \u0438\u043B\u0438 \u043E\u0441\u043E\u0431\u0430\u044F \u043F\u043E\u0434\u0430\u0447\u0430."
      },
      {
        icon: "globe",
        title: "\u0424\u043E\u0440\u043C\u0430\u0442\u044B \u0441\u0430\u0439\u0442\u043E\u0432",
        description: "\u041B\u0435\u043D\u0434\u0438\u043D\u0433, \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u0441\u0430\u0439\u0442, \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0438 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0443\u0441\u043B\u0443\u0433. \u041F\u043E\u0434 \u043A\u0430\u0436\u0434\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u0435\u043C \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u0437\u0430\u043F\u0443\u0441\u043A\u0430."
      }
    ]
  }
});

// src/blocks/init-landing/init-landing-testimonials.tsx
import {
  createPhotonLocalizedDefault as createPhotonLocalizedDefault12,
  definePhotonBlockDefinition as definePhotonBlockDefinition12,
  EditableText as EditableText12,
  EditableTextarea as EditableTextarea9
} from "@init/photon/public";
import { jsx as jsx22, jsxs as jsxs20 } from "react/jsx-runtime";
var fields8 = [
  {
    path: "sectionId",
    label: "Section id",
    kind: "text",
    group: "layout",
    localization: "shared"
  },
  {
    path: "eyebrow",
    label: "Eyebrow",
    kind: "text",
    group: "content",
    localization: "localized"
  },
  {
    path: "title",
    label: "Title",
    kind: "text",
    group: "content",
    localization: "localized"
  },
  {
    path: "items",
    label: "Items",
    kind: "repeater",
    group: "content",
    localization: "localized",
    itemLabelPath: "author",
    addLabel: "Add testimonial",
    fields: [
      { path: "quote", label: "Quote", kind: "textarea" },
      { path: "initials", label: "Initials", kind: "text" },
      { path: "author", label: "Author", kind: "text" },
      { path: "role", label: "Role", kind: "text" }
    ]
  }
];
var InitLandingTestimonialsBlock = ({
  block
}) => {
  const sectionRef = useInitLandingReveal();
  const bleedStyle = useInitLandingSectionBleedStyle();
  const { ref, atLeastMd, atLeastLg } = useInitLandingSurfaceBreakpoints();
  return /* @__PURE__ */ jsx22(
    "section",
    {
      ref,
      id: block.props.sectionId,
      className: ["py-24", atLeastLg ? "py-32" : ""].join(" "),
      style: bleedStyle,
      children: /* @__PURE__ */ jsxs20("div", { className: sectionFrameClassName, ref: sectionRef, children: [
        /* @__PURE__ */ jsxs20(
          "div",
          {
            className: `${revealClassName} mb-16 mx-auto max-w-2xl text-center`,
            children: [
              /* @__PURE__ */ jsx22(
                EditableText12,
                {
                  blockId: block.id,
                  path: "eyebrow",
                  className: "mb-4 text-sm font-medium uppercase tracking-wider text-[var(--photon-site-accent)]"
                }
              ),
              /* @__PURE__ */ jsx22(
                EditableText12,
                {
                  blockId: block.id,
                  path: "title",
                  as: "h2",
                  className: [
                    "text-balance font-semibold tracking-tight text-[var(--photon-site-text)]",
                    atLeastLg ? "text-4xl" : "text-3xl"
                  ].join(" ")
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx22(
          "div",
          {
            className: [
              "grid gap-8",
              atLeastLg ? "grid-cols-3" : atLeastMd ? "grid-cols-2" : ""
            ].join(" "),
            children: block.props.items.map((testimonial, index) => /* @__PURE__ */ jsx22(
              InitTestimonialCard,
              {
                className: revealClassName,
                style: { transitionDelay: `${index * 150}ms` },
                quote: /* @__PURE__ */ jsx22(
                  EditableTextarea9,
                  {
                    blockId: block.id,
                    path: `items.${index}.quote`
                  }
                ),
                profile: /* @__PURE__ */ jsx22(
                  InitTestimonialProfile,
                  {
                    initials: /* @__PURE__ */ jsx22(
                      EditableText12,
                      {
                        blockId: block.id,
                        path: `items.${index}.initials`
                      }
                    ),
                    name: /* @__PURE__ */ jsx22(
                      EditableText12,
                      {
                        blockId: block.id,
                        path: `items.${index}.author`
                      }
                    ),
                    role: /* @__PURE__ */ jsx22(
                      EditableText12,
                      {
                        blockId: block.id,
                        path: `items.${index}.role`
                      }
                    )
                  }
                )
              },
              `${testimonial.author}:${index}`
            ))
          }
        )
      ] })
    }
  );
};
var initLandingTestimonialsDefinition = definePhotonBlockDefinition12({
  type: "init-landing-testimonials",
  label: "Init Landing Testimonials",
  description: "Testimonials section from the Init landing page.",
  category: "Content",
  icon: "messages-square",
  component: InitLandingTestimonialsBlock,
  fields: fields8,
  localizationSchema: createInitLandingBlockLocalizationSchema(fields8),
  defaults: {
    sectionId: "testimonials",
    eyebrow: createPhotonLocalizedDefault12({
      en: "\u0427\u0442\u043E \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u044B",
      ru: "\u0427\u0442\u043E \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u044B"
    }),
    title: createPhotonLocalizedDefault12({
      en: "\u041D\u0430\u043C \u0434\u043E\u0432\u0435\u0440\u044F\u044E\u0442 \u0437\u0430\u043F\u0443\u0441\u043A \u0441\u0430\u0439\u0442\u043E\u0432 \u043F\u043E\u0434 \u0440\u0430\u0437\u043D\u044B\u0435 \u0431\u0438\u0437\u043D\u0435\u0441-\u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438",
      ru: "\u041D\u0430\u043C \u0434\u043E\u0432\u0435\u0440\u044F\u044E\u0442 \u0437\u0430\u043F\u0443\u0441\u043A \u0441\u0430\u0439\u0442\u043E\u0432 \u043F\u043E\u0434 \u0440\u0430\u0437\u043D\u044B\u0435 \u0431\u0438\u0437\u043D\u0435\u0441-\u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438"
    }),
    items: [
      {
        quote: "\u041D\u0430\u043C \u043F\u043E\u043C\u043E\u0433\u043B\u0438 \u043D\u0435 \u0443\u0439\u0442\u0438 \u0432 \u0434\u043E\u0440\u043E\u0433\u043E\u0439 custom, \u0445\u043E\u0442\u044F \u0438\u0437\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E \u043C\u044B \u0438\u043C\u0435\u043D\u043D\u043E \u0442\u0443\u0434\u0430 \u0438 \u0441\u043C\u043E\u0442\u0440\u0435\u043B\u0438. \u0412 \u0438\u0442\u043E\u0433\u0435 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0438 \u0441\u0430\u0439\u0442 \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u0438 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u0435\u0435.",
        author: "\u0410\u043B\u0438\u043D\u0430 \u0416.",
        role: "\u0428\u043A\u043E\u043B\u0430 \u0438 \u043A\u0443\u0440\u0441\u044B",
        initials: "\u0410\u0416"
      },
      {
        quote: "\u0424\u043E\u0440\u043C\u0430\u0442 \u0441 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440\u043E\u043C \u043E\u043A\u0430\u0437\u0430\u043B\u0441\u044F \u043E\u0447\u0435\u043D\u044C \u0443\u0434\u043E\u0431\u043D\u044B\u043C: \u0432\u0438\u0434\u0435\u043B\u0438 \u0441\u043E\u0441\u0442\u0430\u0432 \u043C\u043E\u0434\u0443\u043B\u0435\u0439, \u043F\u043E\u043D\u0438\u043C\u0430\u043B\u0438 \u0446\u0435\u043D\u0443 \u0438 \u043D\u0435 \u0441\u043F\u043E\u0440\u0438\u043B\u0438 \u043E \u0442\u043E\u043C, \u0447\u0442\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u043F\u0440\u043E\u0435\u043A\u0442.",
        author: "\u0420\u043E\u043C\u0430\u043D \u0422.",
        role: "\u0421\u0435\u0440\u0432\u0438\u0441\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",
        initials: "\u0420\u0422"
      },
      {
        quote: "\u041A\u043E\u0433\u0434\u0430 \u0441\u0442\u0430\u043B\u043E \u044F\u0441\u043D\u043E, \u0447\u0442\u043E \u043D\u0443\u0436\u0435\u043D \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442 \u0438 \u043E\u0441\u043E\u0431\u0430\u044F \u043B\u043E\u0433\u0438\u043A\u0430, \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0431\u0435\u0437 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u043F\u0435\u0440\u0435\u0432\u0435\u043B\u0430 \u043F\u0440\u043E\u0435\u043A\u0442 \u0432 custom \u0438 \u0434\u043E\u0442\u044F\u043D\u0443\u043B\u0430 \u0435\u0433\u043E \u0434\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430.",
        author: "\u0414\u0438\u0430\u043D\u0430 \u041A.",
        role: "\u041E\u043D\u043B\u0430\u0439\u043D-\u0441\u0435\u0440\u0432\u0438\u0441",
        initials: "\u0414\u041A"
      }
    ]
  }
});

// src/blocks/init-landing/init-landing-why-us.tsx
import {
  createPhotonLocalizedDefault as createPhotonLocalizedDefault13,
  definePhotonBlockDefinition as definePhotonBlockDefinition13,
  EditableText as EditableText13,
  EditableTextarea as EditableTextarea10
} from "@init/photon/public";
import { jsx as jsx23, jsxs as jsxs21 } from "react/jsx-runtime";
var fields9 = [
  {
    path: "sectionId",
    label: "Section id",
    kind: "text",
    group: "layout",
    localization: "shared"
  },
  {
    path: "eyebrow",
    label: "Eyebrow",
    kind: "text",
    group: "content",
    localization: "localized"
  },
  {
    path: "title",
    label: "Title",
    kind: "text",
    group: "content",
    localization: "localized"
  },
  {
    path: "description",
    label: "Description",
    kind: "textarea",
    group: "content",
    localization: "localized"
  },
  {
    path: "body",
    label: "Body",
    kind: "textarea",
    group: "content",
    localization: "localized"
  },
  {
    path: "trustItems",
    label: "Trust items",
    kind: "repeater",
    group: "content",
    localization: "localized",
    addLabel: "Add trust item",
    itemLabel: "Trust item",
    itemField: { label: "Trust item", kind: "text" }
  },
  {
    path: "items",
    label: "Items",
    kind: "repeater",
    group: "content",
    localization: "localized",
    itemLabelPath: "title",
    addLabel: "Add reason",
    fields: [
      {
        path: "icon",
        label: "Icon",
        kind: "select",
        localization: "shared",
        options: initLandingIconFieldOptions
      },
      { path: "title", label: "Title", kind: "text" },
      { path: "description", label: "Description", kind: "textarea" }
    ]
  }
];
var InitLandingWhyUsBlock = ({
  block
}) => {
  const sectionRef = useInitLandingReveal();
  const bleedStyle = useInitLandingSectionBleedStyle();
  const { ref, atLeastSm, atLeastLg } = useInitLandingSurfaceBreakpoints();
  return /* @__PURE__ */ jsx23(
    "section",
    {
      ref,
      id: block.props.sectionId,
      className: [
        "bg-[var(--photon-site-surface)] py-24",
        atLeastLg ? "py-32" : ""
      ].join(" "),
      style: bleedStyle,
      children: /* @__PURE__ */ jsx23("div", { className: sectionFrameClassName, ref: sectionRef, children: /* @__PURE__ */ jsxs21(
        "div",
        {
          className: [
            "grid items-center gap-16",
            atLeastLg ? "grid-cols-2" : ""
          ].join(" "),
          children: [
            /* @__PURE__ */ jsxs21("div", { className: revealClassName, children: [
              /* @__PURE__ */ jsx23(
                EditableText13,
                {
                  blockId: block.id,
                  path: "eyebrow",
                  className: "mb-4 text-sm font-medium uppercase tracking-wider text-[var(--photon-site-accent)]"
                }
              ),
              /* @__PURE__ */ jsx23(
                EditableText13,
                {
                  blockId: block.id,
                  path: "title",
                  as: "h2",
                  className: [
                    "text-balance font-semibold tracking-tight text-[var(--photon-site-text)]",
                    atLeastLg ? "text-4xl" : "text-3xl"
                  ].join(" ")
                }
              ),
              /* @__PURE__ */ jsx23(
                EditableTextarea10,
                {
                  blockId: block.id,
                  path: "body",
                  className: "mt-6 text-lg leading-relaxed text-[var(--photon-site-muted-text)]"
                }
              ),
              /* @__PURE__ */ jsx23("div", { className: "mt-10 flex flex-wrap gap-6", children: block.props.trustItems.map((item, index) => /* @__PURE__ */ jsxs21(
                "div",
                {
                  className: `${revealClassName} flex items-center gap-2`,
                  style: { transitionDelay: `${300 + index * 100}ms` },
                  children: [
                    /* @__PURE__ */ jsx23("div", { className: "h-2 w-2 rounded-full bg-[var(--photon-site-accent)]" }),
                    /* @__PURE__ */ jsx23(
                      EditableText13,
                      {
                        blockId: block.id,
                        path: `trustItems.${index}`,
                        className: "text-sm text-[var(--photon-site-muted-text)]"
                      }
                    )
                  ]
                },
                `${item}:${index}`
              )) })
            ] }),
            /* @__PURE__ */ jsx23(
              "div",
              {
                className: ["grid gap-6", atLeastSm ? "grid-cols-2" : ""].join(" "),
                children: block.props.items.map((reason, index) => {
                  const Icon = initLandingIcons[reason.icon];
                  return /* @__PURE__ */ jsxs21(
                    "div",
                    {
                      className: `${revealClassName} group rounded-[1.5rem] border border-[color-mix(in_srgb,var(--photon-site-border)_86%,white)] bg-[var(--photon-site-background)] p-6 hover:border-[color-mix(in_srgb,var(--photon-site-accent)_20%,var(--photon-site-border))] hover:shadow-md`,
                      style: { transitionDelay: `${index * 100}ms` },
                      children: [
                        /* @__PURE__ */ jsx23(Icon, { className: "mb-4 h-8 w-8 text-[var(--photon-site-accent)] transition-transform duration-300 group-hover:scale-110" }),
                        /* @__PURE__ */ jsx23("h3", { className: "mb-2 font-semibold text-[var(--photon-site-text)]", children: /* @__PURE__ */ jsx23(
                          EditableText13,
                          {
                            blockId: block.id,
                            path: `items.${index}.title`
                          }
                        ) }),
                        /* @__PURE__ */ jsx23(
                          EditableTextarea10,
                          {
                            blockId: block.id,
                            path: `items.${index}.description`,
                            className: "text-sm leading-relaxed text-[var(--photon-site-muted-text)]"
                          }
                        )
                      ]
                    },
                    `${reason.title}:${index}`
                  );
                })
              }
            )
          ]
        }
      ) })
    }
  );
};
var initLandingWhyUsDefinition = definePhotonBlockDefinition13({
  type: "init-landing-why-us",
  label: "Init Landing Why Us",
  description: "Why us section from the Init landing page.",
  category: "Content",
  icon: "shield",
  component: InitLandingWhyUsBlock,
  fields: fields9,
  localizationSchema: createInitLandingBlockLocalizationSchema(fields9),
  defaults: {
    sectionId: "why-us",
    eyebrow: createPhotonLocalizedDefault13({
      en: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0441 \u043D\u0430\u043C\u0438 \u0443\u0434\u043E\u0431\u043D\u043E",
      ru: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0441 \u043D\u0430\u043C\u0438 \u0443\u0434\u043E\u0431\u043D\u043E"
    }),
    title: createPhotonLocalizedDefault13({
      en: "\u041D\u0435 \u043F\u0440\u043E\u0434\u0430\u0451\u043C \u043B\u0438\u0448\u043D\u044E\u044E \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0442\u0430\u043C, \u0433\u0434\u0435 \u043C\u043E\u0436\u043D\u043E \u0440\u0435\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0449\u0435",
      ru: "\u041D\u0435 \u043F\u0440\u043E\u0434\u0430\u0451\u043C \u043B\u0438\u0448\u043D\u044E\u044E \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0442\u0430\u043C, \u0433\u0434\u0435 \u043C\u043E\u0436\u043D\u043E \u0440\u0435\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0449\u0435"
    }),
    description: createPhotonLocalizedDefault13({
      en: "\u041F\u043E\u0434\u0431\u0438\u0440\u0430\u0435\u043C \u0444\u043E\u0440\u043C\u0430\u0442 \u043F\u043E\u0434 \u0437\u0430\u0434\u0430\u0447\u0443, \u0430 \u043D\u0435 \u043F\u043E\u0434 \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u0435 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435.",
      ru: "\u041F\u043E\u0434\u0431\u0438\u0440\u0430\u0435\u043C \u0444\u043E\u0440\u043C\u0430\u0442 \u043F\u043E\u0434 \u0437\u0430\u0434\u0430\u0447\u0443, \u0430 \u043D\u0435 \u043F\u043E\u0434 \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u0435 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435."
    }),
    body: createPhotonLocalizedDefault13({
      en: "\u0415\u0441\u043B\u0438 \u0432\u0430\u043C \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u043D\u0435 \u0431\u0443\u0434\u0435\u043C \u0442\u044F\u043D\u0443\u0442\u044C \u0432 \u0434\u043E\u0440\u043E\u0433\u043E\u0439 custom. \u0415\u0441\u043B\u0438 \u043D\u0443\u0436\u0435\u043D \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0441 \u043C\u043E\u0434\u0443\u043B\u044F\u043C\u0438 \u0438 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0446\u0438\u0435\u0439, \u043F\u043E\u0441\u0442\u0440\u043E\u0438\u043C \u0438\u043C\u0435\u043D\u043D\u043E \u0442\u0430\u043A\u043E\u0439 \u043F\u0443\u0442\u044C. \u0415\u0441\u043B\u0438 \u0437\u0430\u0434\u0430\u0447\u0430 \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F, \u0434\u0435\u043B\u0430\u0435\u043C \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E \u0438 \u0431\u0435\u0437 \u043A\u043E\u043C\u043F\u0440\u043E\u043C\u0438\u0441\u0441\u043E\u0432 \u043F\u043E \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0435.",
      ru: "\u0415\u0441\u043B\u0438 \u0432\u0430\u043C \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u043D\u0435 \u0431\u0443\u0434\u0435\u043C \u0442\u044F\u043D\u0443\u0442\u044C \u0432 \u0434\u043E\u0440\u043E\u0433\u043E\u0439 custom. \u0415\u0441\u043B\u0438 \u043D\u0443\u0436\u0435\u043D \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0441 \u043C\u043E\u0434\u0443\u043B\u044F\u043C\u0438 \u0438 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0446\u0438\u0435\u0439, \u043F\u043E\u0441\u0442\u0440\u043E\u0438\u043C \u0438\u043C\u0435\u043D\u043D\u043E \u0442\u0430\u043A\u043E\u0439 \u043F\u0443\u0442\u044C. \u0415\u0441\u043B\u0438 \u0437\u0430\u0434\u0430\u0447\u0430 \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F, \u0434\u0435\u043B\u0430\u0435\u043C \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E \u0438 \u0431\u0435\u0437 \u043A\u043E\u043C\u043F\u0440\u043E\u043C\u0438\u0441\u0441\u043E\u0432 \u043F\u043E \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0435."
    }),
    trustItems: [
      "\u041F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442",
      "\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
      "\u0421\u0431\u043E\u0440\u043A\u0430 \u0438 \u0437\u0430\u043F\u0443\u0441\u043A \u043F\u043E\u0434 \u043A\u043B\u044E\u0447"
    ],
    items: [
      {
        icon: "award",
        title: "\u041F\u043E\u043D\u0438\u043C\u0430\u0435\u043C \u0440\u0430\u0437\u043D\u0438\u0446\u0443 \u043C\u0435\u0436\u0434\u0443 \u0444\u043E\u0440\u043C\u0430\u0442\u0430\u043C\u0438",
        description: "\u041D\u0435 \u0441\u043C\u0435\u0448\u0438\u0432\u0430\u0435\u043C \u0448\u0430\u0431\u043B\u043E\u043D\u043D\u044B\u0439 \u0437\u0430\u043F\u0443\u0441\u043A, \u043C\u043E\u0434\u0443\u043B\u044C\u043D\u0443\u044E \u0441\u0431\u043E\u0440\u043A\u0443 \u0438 custom \u0432 \u043E\u0434\u043D\u0443 \u0443\u0441\u043B\u0443\u0433\u0443. \u0414\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u044D\u0442\u043E \u0437\u043D\u0430\u0447\u0438\u0442 \u043C\u0435\u043D\u044C\u0448\u0435 \u043F\u0443\u0442\u0430\u043D\u0438\u0446\u044B."
      },
      {
        icon: "shield",
        title: "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u0435\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0431\u043E\u0440\u043A\u0438",
        description: "\u0414\u0430\u0436\u0435 \u043A\u043E\u0433\u0434\u0430 \u0441\u0430\u0439\u0442 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u0438\u0437 \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432, \u0438\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430, \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0438 \u0437\u0430\u043F\u0443\u0441\u043A \u043F\u0440\u043E\u0445\u043E\u0434\u044F\u0442 \u0447\u0435\u0440\u0435\u0437 \u043D\u0430\u0448\u0443 \u043A\u043E\u043C\u0430\u043D\u0434\u0443."
      },
      {
        icon: "users",
        title: "\u0413\u043E\u0432\u043E\u0440\u0438\u043C \u043F\u0440\u043E\u0441\u0442\u044B\u043C \u044F\u0437\u044B\u043A\u043E\u043C",
        description: "\u041D\u0430 \u043E\u0431\u044B\u0447\u043D\u043E\u0439 \u0432\u0435\u0442\u043A\u0435 \u043F\u0440\u043E\u0434\u0430\u0451\u043C \u0438\u043C\u0435\u043D\u043D\u043E \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0441\u0430\u0439\u0442\u043E\u0432, \u0431\u0435\u0437 \u043B\u0438\u0448\u043D\u0435\u0433\u043E enterprise-\u043F\u0430\u0444\u043E\u0441\u0430 \u0438 \u043F\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u0435\u0449\u0430\u043D\u0438\u0439."
      },
      {
        icon: "zap",
        title: "\u041C\u043E\u0436\u043D\u043E \u0441\u0442\u0430\u0440\u0442\u043E\u0432\u0430\u0442\u044C \u0431\u044B\u0441\u0442\u0440\u0435\u0435",
        description: "\u0415\u0441\u043B\u0438 \u0437\u0430\u0434\u0430\u0447\u0430 \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0434\u043E\u043B\u0433\u043E\u0433\u043E \u0446\u0438\u043A\u043B\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0438\u043C \u0432 \u0444\u043E\u0440\u043C\u0430\u0442, \u0433\u0434\u0435 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C\u0441\u044F \u0437\u0430\u043C\u0435\u0442\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u0435\u0435."
      }
    ]
  }
});

// src/blocks/media-frame.tsx
import {
  createPhotonLocalizedDefault as createPhotonLocalizedDefault14,
  definePhotonBlockDefinition as definePhotonBlockDefinition14,
  EditableImage as EditableImage2,
  EditableText as EditableText14,
  EditableTextarea as EditableTextarea11,
  usePhotonRenderDepth as usePhotonRenderDepth5,
  usePhotonStore as usePhotonStore10
} from "@init/photon/public";
import { jsx as jsx24, jsxs as jsxs22 } from "react/jsx-runtime";
var MediaFrame = ({
  block
}) => {
  const siteDesign = usePhotonStore10(
    (state) => state.site.settings.design
  );
  const variant = resolveMarketingDemoBlockVariant({
    blockType: "media-frame",
    explicitVariant: block.props.variant,
    siteDesign
  });
  const theme = getMarketingDemoVariantTheme(variant);
  const renderDepth = usePhotonRenderDepth5();
  const framelessRail = theme.surfaceStyle === "frameless";
  return /* @__PURE__ */ jsxs22(
    "section",
    {
      className: `${theme.surface} ${framelessRail ? "grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-end" : "overflow-hidden"}`,
      style: getMarketingDemoFramelessBleedStyle(
        framelessRail,
        renderDepth === 0
      ),
      "data-testid": "marketing-demo-media-frame",
      "data-marketing-demo-variant": variant,
      "data-marketing-demo-surface-style": theme.surfaceStyle,
      children: [
        /* @__PURE__ */ jsx24("div", { className: theme.mediaFrame, children: /* @__PURE__ */ jsx24(
          EditableImage2,
          {
            blockId: block.id,
            path: "imageUrl",
            altPath: "imageAlt",
            className: `relative ${framelessRail ? "aspect-[16/11] sm:aspect-[4/3]" : "aspect-[4/5] sm:aspect-[5/6]"}`,
            imageClassName: "h-full w-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsxs22(
          "div",
          {
            className: `space-y-4 ${framelessRail ? "px-0 py-2 sm:px-0" : "px-5 py-5 sm:px-6"}`,
            children: [
              /* @__PURE__ */ jsx24(
                EditableText14,
                {
                  blockId: block.id,
                  path: "eyebrow",
                  className: theme.pill
                }
              ),
              /* @__PURE__ */ jsx24(
                EditableText14,
                {
                  blockId: block.id,
                  path: "title",
                  as: "h3",
                  className: `block text-2xl font-semibold tracking-[-0.04em] ${theme.emphasisText}`
                }
              ),
              /* @__PURE__ */ jsx24(
                EditableTextarea11,
                {
                  blockId: block.id,
                  path: "caption",
                  className: theme.mutedBody
                }
              )
            ]
          }
        )
      ]
    }
  );
};
var mediaFrameDefinition = definePhotonBlockDefinition14({
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
    eyebrow: createPhotonLocalizedDefault14({
      en: "Sticky media rail",
      ru: "Sticky media-\u043A\u043E\u043B\u043E\u043D\u043A\u0430"
    }),
    title: createPhotonLocalizedDefault14({
      en: "Horizontal containers finally become obvious in the live demo",
      ru: "\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u044B \u043D\u0430\u043A\u043E\u043D\u0435\u0446 \u0432\u044B\u0433\u043B\u044F\u0434\u044F\u0442 \u043E\u0447\u0435\u0432\u0438\u0434\u043D\u043E \u0432 \u0436\u0438\u0432\u043E\u043C \u0434\u0435\u043C\u043E"
    }),
    caption: createPhotonLocalizedDefault14({
      en: "The left column can stay pinned while the right column scrolls through richer editorial blocks. On mobile the same structure collapses into a clean single-column stack.",
      ru: "\u041B\u0435\u0432\u0430\u044F \u043A\u043E\u043B\u043E\u043D\u043A\u0430 \u043C\u043E\u0436\u0435\u0442 \u043E\u0441\u0442\u0430\u0432\u0430\u0442\u044C\u0441\u044F \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043D\u043E\u0439, \u043F\u043E\u043A\u0430 \u043F\u0440\u0430\u0432\u0430\u044F \u0441\u043A\u0440\u043E\u043B\u043B\u0438\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0431\u043E\u043B\u0435\u0435 \u0431\u043E\u0433\u0430\u0442\u044B\u0435 editorial-\u0431\u043B\u043E\u043A\u0438. \u041D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u0442\u0430 \u0436\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0441\u0445\u043B\u043E\u043F\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0447\u0438\u0441\u0442\u044B\u0439 \u043E\u0434\u043D\u043E\u043A\u043E\u043B\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u0441\u0442\u0435\u043A."
    }),
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Laptop workspace showing a design and editing setup"
  },
  fields: [
    {
      path: "variant",
      label: "Variant",
      kind: "select",
      group: "style",
      localization: "shared",
      options: marketingDemoBlockVariantOptions
    },
    {
      path: "eyebrow",
      label: "Eyebrow",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "title",
      label: "Title",
      kind: "textarea",
      group: "content",
      localization: "localized"
    },
    {
      path: "caption",
      label: "Caption",
      kind: "textarea",
      group: "content",
      localization: "localized"
    },
    {
      path: "imageUrl",
      label: "Image",
      kind: "image",
      group: "content",
      localization: "shared"
    },
    {
      path: "imageAlt",
      label: "Image alt",
      kind: "text",
      group: "content",
      localization: "localized"
    }
  ]
});

// src/blocks/media-gallery.tsx
import {
  createPhotonLocalizedDefault as createPhotonLocalizedDefault15,
  definePhotonBlockDefinition as definePhotonBlockDefinition15,
  EditableGallery,
  EditableText as EditableText15,
  EditableTextarea as EditableTextarea12,
  usePhotonRenderDepth as usePhotonRenderDepth6,
  usePhotonStore as usePhotonStore11
} from "@init/photon/public";
import { jsx as jsx25, jsxs as jsxs23 } from "react/jsx-runtime";
var galleryToneStyles = {
  default: {},
  light: {
    "--photon-gallery-card-border": "rgba(231, 229, 228, 0.95)",
    "--photon-gallery-card-bg": "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(245,240,231,0.96))",
    "--photon-gallery-card-shadow": "0 18px 40px rgba(120, 113, 108, 0.12)",
    "--photon-gallery-fallback-bg": "radial-gradient(circle_at_top,rgba(217,119,6,0.08),transparent_28%),linear-gradient(180deg,rgba(255,251,245,0.96),rgba(243,234,219,0.98))",
    "--photon-gallery-fallback-text": "rgb(120 113 108 / 0.9)",
    "--photon-gallery-chip-border": "rgba(214, 211, 209, 0.9)",
    "--photon-gallery-chip-bg": "rgba(255, 255, 255, 0.88)",
    "--photon-gallery-chip-text": "rgb(120 113 108 / 0.9)",
    "--photon-gallery-chip-accent-border": "rgba(13, 148, 136, 0.24)",
    "--photon-gallery-chip-accent-bg": "rgba(240, 253, 250, 0.96)",
    "--photon-gallery-chip-accent-text": "rgb(15 118 110 / 0.92)",
    "--photon-gallery-control-border": "rgba(214, 211, 209, 0.96)",
    "--photon-gallery-control-bg": "rgba(255, 255, 255, 0.9)",
    "--photon-gallery-control-text": "rgb(87 83 78 / 0.88)",
    "--photon-gallery-remove-border": "rgba(251, 113, 133, 0.28)",
    "--photon-gallery-remove-bg": "rgba(255, 241, 242, 0.92)",
    "--photon-gallery-remove-text": "rgb(190 24 93 / 0.84)",
    "--photon-gallery-label": "rgb(120 113 108 / 0.92)",
    "--photon-gallery-caption": "rgb(68 64 60 / 0.9)",
    "--photon-gallery-file-border": "rgba(231, 229, 228, 0.96)",
    "--photon-gallery-file-bg": "rgba(255, 255, 255, 0.9)",
    "--photon-gallery-file-text": "rgb(120 113 108 / 0.88)",
    "--photon-gallery-empty-border": "rgba(214, 211, 209, 0.9)",
    "--photon-gallery-empty-bg": "linear-gradient(180deg, #fffdf8 0%, #f3eadb 100%)",
    "--photon-gallery-empty-text": "rgb(87 83 78 / 0.74)",
    "--photon-gallery-empty-shadow": "0 18px 40px rgba(120, 113, 108, 0.12)",
    "--photon-gallery-empty-title": "rgb(28 25 23 / 0.96)",
    "--photon-gallery-empty-body": "rgb(87 83 78 / 0.84)",
    "--photon-gallery-empty-button-border": "rgb(28 25 23 / 0.96)",
    "--photon-gallery-empty-button-bg": "rgb(28 25 23 / 0.96)",
    "--photon-gallery-empty-button-text": "rgb(250 250 249 / 1)",
    "--photon-gallery-add-border": "rgba(214, 211, 209, 0.92)",
    "--photon-gallery-add-bg": "linear-gradient(180deg, #fffdf8 0%, #f3eadb 100%)",
    "--photon-gallery-add-text": "rgb(87 83 78 / 0.74)",
    "--photon-gallery-add-title": "rgb(28 25 23 / 0.96)",
    "--photon-gallery-add-body": "rgb(87 83 78 / 0.84)",
    "--photon-gallery-add-button-border": "rgb(28 25 23 / 0.96)",
    "--photon-gallery-add-button-bg": "rgb(28 25 23 / 0.96)",
    "--photon-gallery-add-button-text": "rgb(250 250 249 / 1)"
  }
};
var MediaGallery = ({
  block
}) => {
  const siteDesign = usePhotonStore11(
    (state) => state.site.settings.design
  );
  const variant = resolveMarketingDemoBlockVariant({
    blockType: "media-gallery",
    explicitVariant: block.props.variant,
    siteDesign
  });
  const theme = getMarketingDemoVariantTheme(variant);
  const renderDepth = usePhotonRenderDepth6();
  const galleryTone = variant === "air" ? "light" : "default";
  const galleryThemeStyle = galleryToneStyles[galleryTone];
  const framelessGallery = theme.surfaceStyle === "frameless";
  const resolvedGalleryThemeStyle = framelessGallery ? {
    ...galleryThemeStyle,
    "--photon-gallery-card-border": "transparent",
    "--photon-gallery-file-border": "transparent",
    "--photon-gallery-empty-border": "transparent",
    "--photon-gallery-add-border": "transparent",
    "--photon-gallery-chip-border": "transparent",
    "--photon-gallery-control-border": "transparent"
  } : galleryThemeStyle;
  return /* @__PURE__ */ jsxs23(
    "section",
    {
      className: `${theme.surface} px-5 py-5 sm:px-6`,
      style: getMarketingDemoFramelessBleedStyle(
        framelessGallery,
        renderDepth === 0
      ),
      "data-testid": "marketing-demo-media-gallery",
      "data-marketing-demo-variant": variant,
      "data-marketing-demo-surface-style": theme.surfaceStyle,
      children: [
        /* @__PURE__ */ jsxs23("div", { className: "min-w-0 max-w-3xl", children: [
          /* @__PURE__ */ jsx25(
            EditableText15,
            {
              blockId: block.id,
              path: "eyebrow",
              className: theme.eyebrow
            }
          ),
          /* @__PURE__ */ jsx25(
            EditableText15,
            {
              blockId: block.id,
              path: "title",
              as: "h3",
              className: `mt-4 block text-balance text-2xl font-semibold tracking-[-0.04em] sm:text-3xl ${theme.emphasisText}`
            }
          ),
          /* @__PURE__ */ jsx25(
            EditableTextarea12,
            {
              blockId: block.id,
              path: "body",
              className: `mt-4 max-w-2xl ${theme.mutedBody}`
            }
          )
        ] }),
        /* @__PURE__ */ jsx25(
          "div",
          {
            className: "mt-6",
            "data-marketing-demo-gallery-tone": galleryTone,
            style: resolvedGalleryThemeStyle,
            children: /* @__PURE__ */ jsx25(
              EditableGallery,
              {
                blockId: block.id,
                path: "items",
                columnsClassName: `grid gap-4 ${variant === "air" ? "md:grid-cols-2 xl:grid-cols-3" : "[grid-template-columns:repeat(auto-fit,minmax(min(100%,14rem),1fr))]"}`,
                emptyTitle: String(block.props.emptyTitle),
                emptyBody: String(block.props.emptyBody)
              }
            )
          }
        )
      ]
    }
  );
};
var mediaGalleryDefinition = definePhotonBlockDefinition15({
  type: "media-gallery",
  label: "Media Gallery",
  labelKey: "marketingDemoKit.blocks.mediaGallery.label",
  description: "Uploadable gallery block for editorial grids, product stills and visual proof.",
  descriptionKey: "marketingDemoKit.blocks.mediaGallery.description",
  category: "Media",
  icon: "layout-grid",
  component: MediaGallery,
  defaults: {
    variant: "default",
    eyebrow: createPhotonLocalizedDefault15({
      en: "Media workflow",
      ru: "\u041C\u0435\u0434\u0438\u0430 workflow"
    }),
    title: createPhotonLocalizedDefault15({
      en: "Temporary uploads now have a real home inside the builder",
      ru: "\u0412\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0442\u0435\u043F\u0435\u0440\u044C \u0436\u0438\u0432\u0443\u0442 \u0432 builder \u043F\u043E-\u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u043C\u0443"
    }),
    body: createPhotonLocalizedDefault15({
      en: "This block exists to prove the media pipeline, not just decorate the demo. Upload a few images, reorder them, edit alt text and captions, then save a new profile revision to finalize them on the backend.",
      ru: "\u042D\u0442\u043E\u0442 \u0431\u043B\u043E\u043A \u043D\u0443\u0436\u0435\u043D \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043A\u0440\u0430\u0441\u043E\u0442\u044B, \u0430 \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u044C media-pipeline. \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439, \u043F\u043E\u043C\u0435\u043D\u044F\u0439\u0442\u0435 \u0438\u0445 \u043F\u043E\u0440\u044F\u0434\u043E\u043A, \u043F\u043E\u043F\u0440\u0430\u0432\u044C\u0442\u0435 alt-\u0442\u0435\u043A\u0441\u0442 \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u0438, \u0430 \u0437\u0430\u0442\u0435\u043C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442, \u0447\u0442\u043E\u0431\u044B \u0444\u0438\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u0445 \u043D\u0430 \u0431\u044D\u043A\u0435\u043D\u0434\u0435."
    }),
    emptyTitle: createPhotonLocalizedDefault15({
      en: "Build a live media gallery",
      ru: "\u0421\u043E\u0431\u0435\u0440\u0438\u0442\u0435 \u0436\u0438\u0432\u0443\u044E \u043C\u0435\u0434\u0438\u0430-\u0433\u0430\u043B\u0435\u0440\u0435\u044E"
    }),
    emptyBody: createPhotonLocalizedDefault15({
      en: "Upload stills, product frames or editorial images and keep them editable directly on the page.",
      ru: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0439\u0442\u0435 \u043A\u0430\u0434\u0440\u044B \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430, stills \u0438\u043B\u0438 editorial-\u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0438\u0445 \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435."
    }),
    items: createPhotonLocalizedDefault15({
      en: [
        {
          id: "gallery-1",
          media: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
          alt: "Product team aligning on a laptop",
          caption: "Live edits happen on the actual website surface."
        },
        {
          id: "gallery-2",
          media: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
          alt: "Desk setup with laptop and keyboard",
          caption: "Sticky rails and dark surfaces keep the canvas legible."
        },
        {
          id: "gallery-3",
          media: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
          alt: "Hands working in a website editor",
          caption: "Autosave and finalize flow should feel invisible to the editor."
        }
      ],
      ru: [
        {
          id: "gallery-1",
          media: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
          alt: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0437\u0430 \u043D\u043E\u0443\u0442\u0431\u0443\u043A\u043E\u043C",
          caption: "\u0416\u0438\u0432\u044B\u0435 \u043F\u0440\u0430\u0432\u043A\u0438 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u044F\u0442 \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u0441\u0430\u0439\u0442\u0430."
        },
        {
          id: "gallery-2",
          media: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
          alt: "\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B \u0441 \u043D\u043E\u0443\u0442\u0431\u0443\u043A\u043E\u043C \u0438 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u043E\u0439",
          caption: "Sticky-\u043A\u043E\u043B\u043E\u043D\u043A\u0438 \u0438 \u0442\u0435\u043C\u043D\u044B\u0435 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u0434\u0435\u043B\u0430\u044E\u0442 \u0445\u043E\u043B\u0441\u0442 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u043C."
        },
        {
          id: "gallery-3",
          media: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
          alt: "\u0420\u0443\u043A\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0432 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0430 \u0441\u0430\u0439\u0442\u0430",
          caption: "Autosave \u0438 \u0444\u0438\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043D\u0435\u0437\u0430\u043C\u0435\u0442\u043D\u044B \u0434\u043B\u044F \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0430."
        }
      ]
    })
  },
  fields: [
    {
      path: "variant",
      label: "Variant",
      kind: "select",
      group: "style",
      localization: "shared",
      options: marketingDemoBlockVariantOptions
    },
    {
      path: "eyebrow",
      label: "Eyebrow",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "title",
      label: "Title",
      kind: "textarea",
      group: "content",
      localization: "localized"
    },
    {
      path: "body",
      label: "Body",
      kind: "textarea",
      group: "content",
      localization: "localized"
    },
    {
      path: "emptyTitle",
      label: "Empty title",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "emptyBody",
      label: "Empty body",
      kind: "textarea",
      group: "content",
      localization: "localized"
    },
    {
      path: "items",
      label: "Gallery items",
      kind: "gallery",
      group: "content",
      localization: "localized",
      description: "Upload, reorder and annotate images without leaving Builder mode."
    }
  ]
});

// src/blocks/proof-strip.tsx
import {
  createPhotonLocalizedDefault as createPhotonLocalizedDefault16,
  definePhotonBlockDefinition as definePhotonBlockDefinition16,
  EditableRepeaterValue as EditableRepeaterValue3,
  EditableText as EditableText16,
  usePhotonRenderDepth as usePhotonRenderDepth7,
  usePhotonStore as usePhotonStore12
} from "@init/photon/public";
import { jsx as jsx26, jsxs as jsxs24 } from "react/jsx-runtime";
var ProofStrip = ({
  block
}) => {
  const siteDesign = usePhotonStore12(
    (state) => state.site.settings.design
  );
  const variant = resolveMarketingDemoBlockVariant({
    blockType: "proof-strip",
    explicitVariant: block.props.variant,
    siteDesign
  });
  const theme = getMarketingDemoVariantTheme(variant);
  const renderDepth = usePhotonRenderDepth7();
  const framelessRibbon = theme.surfaceStyle === "frameless";
  const { ref, atLeastSm, atLeastMd, atLeastXl } = useSurfaceBreakpoints();
  return /* @__PURE__ */ jsxs24(
    "section",
    {
      ref,
      className: [theme.surface, "px-5 py-6", atLeastSm ? "px-8" : ""].join(
        " "
      ),
      style: getMarketingDemoFramelessBleedStyle(
        framelessRibbon,
        renderDepth === 0
      ),
      "data-testid": "marketing-demo-proof-strip",
      "data-marketing-demo-variant": variant,
      "data-marketing-demo-surface-style": theme.surfaceStyle,
      children: [
        /* @__PURE__ */ jsx26(
          EditableText16,
          {
            blockId: block.id,
            path: "title",
            as: "h2",
            className: theme.label
          }
        ),
        /* @__PURE__ */ jsx26(
          "div",
          {
            className: `mt-6 grid gap-3 ${framelessRibbon ? atLeastXl ? "grid-cols-4" : atLeastSm ? "grid-cols-2" : "" : atLeastMd ? "grid-cols-4" : ""}`,
            children: block.props.items.map((_, index) => /* @__PURE__ */ jsxs24(
              "div",
              {
                className: `${theme.panel} ${framelessRibbon ? `px-0 py-4 ${atLeastSm ? "pl-5 pr-0" : ""}` : "px-4 py-5"}`,
                children: [
                  /* @__PURE__ */ jsx26(
                    EditableRepeaterValue3,
                    {
                      blockId: block.id,
                      path: `items.${index}.value`,
                      as: "div",
                      className: `text-3xl font-semibold tracking-[-0.04em] ${theme.emphasisText}`
                    }
                  ),
                  /* @__PURE__ */ jsx26(
                    EditableRepeaterValue3,
                    {
                      blockId: block.id,
                      path: `items.${index}.label`,
                      as: "div",
                      className: `mt-2 ${theme.mutedBody}`
                    }
                  )
                ]
              },
              `${block.id}-proof-${index}`
            ))
          }
        )
      ]
    }
  );
};
var proofStripDefinition = definePhotonBlockDefinition16({
  type: "proof-strip",
  label: "Proof Strip",
  labelKey: "marketingDemoKit.blocks.proofStrip.label",
  description: "Compact social proof and metrics ribbon.",
  descriptionKey: "marketingDemoKit.blocks.proofStrip.description",
  category: "Evidence",
  icon: "badge-check",
  component: ProofStrip,
  defaults: {
    variant: "default",
    title: createPhotonLocalizedDefault16({
      en: "What the MVP already proves",
      ru: "\u0427\u0442\u043E \u0443\u0436\u0435 \u0434\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 MVP"
    }),
    items: createPhotonLocalizedDefault16({
      en: [
        {
          value: "2 modes",
          label: "Content editing and structural builder mode"
        },
        {
          value: "2 runtimes",
          label: "Next.js rendering contract plus Laravel manifest contract"
        },
        {
          value: "2 package layers",
          label: "Foundation package and installable integration kit"
        },
        {
          value: "1 live canvas",
          label: "Editing happens on the actual website surface"
        }
      ],
      ru: [
        {
          value: "2 \u0440\u0435\u0436\u0438\u043C\u0430",
          label: "\u041A\u043E\u043D\u0442\u0435\u043D\u0442\u043D\u043E\u0435 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 structural builder mode"
        },
        {
          value: "2 \u0440\u0430\u043D\u0442\u0430\u0439\u043C\u0430",
          label: "\u041A\u043E\u043D\u0442\u0440\u0430\u043A\u0442 \u0440\u0435\u043D\u0434\u0435\u0440\u0430 Next.js \u043F\u043B\u044E\u0441 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442 manifest-\u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430 Laravel"
        },
        {
          value: "2 \u0441\u043B\u043E\u044F \u043F\u0430\u043A\u0435\u0442\u043E\u0432",
          label: "Foundation package \u0438 installable integration kit"
        },
        {
          value: "1 \u0436\u0438\u0432\u043E\u0439 \u0445\u043E\u043B\u0441\u0442",
          label: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u0441\u0430\u0439\u0442\u0430"
        }
      ]
    })
  },
  fields: [
    {
      path: "variant",
      label: "Variant",
      kind: "select",
      group: "style",
      localization: "shared",
      options: marketingDemoBlockVariantOptions
    },
    {
      path: "title",
      label: "Title",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "items",
      label: "Metric items",
      kind: "repeater",
      group: "content",
      localization: "localized",
      itemLabelPath: "label",
      addLabel: "Add metric item",
      fields: [
        {
          path: "value",
          label: "Value",
          kind: "text",
          localization: "shared"
        },
        { path: "label", label: "Label", kind: "text" }
      ]
    }
  ]
});

// src/blocks/publication-spotlight.tsx
import {
  createPhotonLocalizedDefault as createPhotonLocalizedDefault17,
  definePhotonBlockDefinition as definePhotonBlockDefinition17,
  EditableImage as EditableImage3,
  EditableText as EditableText17,
  EditableTextarea as EditableTextarea13,
  usePhotonRenderDepth as usePhotonRenderDepth8,
  usePhotonStore as usePhotonStore13,
  PhotonLink as PhotonLink8
} from "@init/photon/public";
import { jsx as jsx27, jsxs as jsxs25 } from "react/jsx-runtime";
var PublicationSpotlight = ({
  block
}) => {
  const siteDesign = usePhotonStore13(
    (state) => state.site.settings.design
  );
  const variant = resolveMarketingDemoBlockVariant({
    blockType: "publication-spotlight",
    explicitVariant: block.props.variant,
    siteDesign
  });
  const theme = getMarketingDemoVariantTheme(variant);
  const renderDepth = usePhotonRenderDepth8();
  const stacked = variant === "air";
  const framelessSpotlight = theme.surfaceStyle === "frameless";
  return /* @__PURE__ */ jsxs25(
    "section",
    {
      className: `grid min-w-0 gap-6 px-5 py-5 sm:px-6 sm:py-6 ${theme.surface} ${stacked ? "" : "lg:grid-cols-[minmax(17rem,0.9fr)_minmax(0,1.1fr)]"}`,
      style: getMarketingDemoFramelessBleedStyle(
        framelessSpotlight,
        renderDepth === 0
      ),
      "data-testid": "marketing-demo-publication-spotlight",
      "data-marketing-demo-variant": variant,
      "data-marketing-demo-surface-style": theme.surfaceStyle,
      children: [
        /* @__PURE__ */ jsx27("div", { className: theme.mediaFrame, children: /* @__PURE__ */ jsx27(
          EditableImage3,
          {
            blockId: block.id,
            path: "imageUrl",
            altPath: "imageAlt",
            className: `relative ${stacked ? "aspect-[16/10]" : "aspect-[4/5] min-h-[22rem]"}`,
            imageClassName: "h-full w-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsxs25("div", { className: "flex min-w-0 flex-col justify-between gap-6", children: [
          /* @__PURE__ */ jsxs25("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx27(EditableText17, { blockId: block.id, path: "tag", className: theme.pill }),
            /* @__PURE__ */ jsx27(
              EditableText17,
              {
                blockId: block.id,
                path: "title",
                as: "h2",
                className: `mt-5 block max-w-3xl text-balance text-2xl font-semibold leading-[1.04] tracking-[-0.05em] ${stacked ? "sm:text-4xl" : "sm:text-3xl xl:text-4xl"} ${theme.emphasisText}`
              }
            ),
            /* @__PURE__ */ jsx27(
              EditableTextarea13,
              {
                blockId: block.id,
                path: "excerpt",
                className: `mt-5 max-w-2xl ${theme.mutedBody} sm:text-base`
              }
            )
          ] }),
          /* @__PURE__ */ jsxs25(
            "div",
            {
              className: `flex flex-col gap-4 border-t pt-5 ${theme.divider} xl:flex-row xl:items-center xl:justify-between`,
              children: [
                /* @__PURE__ */ jsxs25("div", { className: theme.mutedBody, children: [
                  /* @__PURE__ */ jsx27(
                    EditableText17,
                    {
                      blockId: block.id,
                      path: "author",
                      className: `font-semibold ${theme.emphasisText}`
                    }
                  ),
                  " ",
                  /* @__PURE__ */ jsx27("span", { className: `mx-2 ${theme.metaDivider}`, children: "/" }),
                  /* @__PURE__ */ jsx27(EditableText17, { blockId: block.id, path: "readTime" })
                ] }),
                /* @__PURE__ */ jsx27(
                  PhotonLink8,
                  {
                    href: String(block.props.ctaHref),
                    className: theme.secondaryButton,
                    children: /* @__PURE__ */ jsx27(
                      EditableText17,
                      {
                        blockId: block.id,
                        path: "ctaLabel",
                        className: "text-sm font-semibold"
                      }
                    )
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
};
var publicationSpotlightDefinition = definePhotonBlockDefinition17({
  type: "publication-spotlight",
  label: "Publication Spotlight",
  labelKey: "marketingDemoKit.blocks.publicationSpotlight.label",
  description: "Example of a domain-specific content block coming from a separate package.",
  descriptionKey: "marketingDemoKit.blocks.publicationSpotlight.description",
  category: "Content",
  icon: "newspaper",
  component: PublicationSpotlight,
  defaults: {
    variant: "default",
    tag: createPhotonLocalizedDefault17({
      en: "publication-photon",
      ru: "publication-photon"
    }),
    title: createPhotonLocalizedDefault17({
      en: "A publication package should bring its own blocks and backend manifest producers",
      ru: "Publication package \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442\u044C \u0441\u0432\u043E\u0438 \u0431\u043B\u043E\u043A\u0438 \u0438 backend manifest producers"
    }),
    excerpt: createPhotonLocalizedDefault17({
      en: "This block represents the future integration path: a publication package exposes manifest fragments on Laravel, and the mirrored npm kit renders the same block family in Next.js with zero copy-paste glue.",
      ru: "\u042D\u0442\u043E\u0442 \u0431\u043B\u043E\u043A \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0431\u0443\u0434\u0443\u0449\u0438\u0439 \u043F\u0443\u0442\u044C \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438: publication package \u043E\u0442\u0434\u0430\u0435\u0442 manifest fragments \u043D\u0430 Laravel, \u0430 \u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u044B\u0439 npm kit \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442 \u0442\u0443 \u0436\u0435 \u0441\u0435\u043C\u044C\u044E \u0431\u043B\u043E\u043A\u043E\u0432 \u0432 Next.js \u0431\u0435\u0437 copy-paste glue-\u043A\u043E\u0434\u0430."
    }),
    author: createPhotonLocalizedDefault17({
      en: "Lead package architecture",
      ru: "Lead package architecture"
    }),
    readTime: createPhotonLocalizedDefault17({
      en: "6 min walkthrough",
      ru: "6 \u043C\u0438\u043D\u0443\u0442 \u0447\u0442\u0435\u043D\u0438\u044F"
    }),
    imageUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Editorial workspace with notebooks and camera",
    ctaLabel: createPhotonLocalizedDefault17({
      en: "Open package strategy",
      ru: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C package strategy"
    }),
    ctaHref: "#packages"
  },
  fields: [
    {
      path: "variant",
      label: "Variant",
      kind: "select",
      group: "style",
      localization: "shared",
      options: marketingDemoBlockVariantOptions
    },
    {
      path: "tag",
      label: "Tag",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "title",
      label: "Title",
      kind: "textarea",
      group: "content",
      localization: "localized"
    },
    {
      path: "excerpt",
      label: "Excerpt",
      kind: "textarea",
      group: "content",
      localization: "localized"
    },
    {
      path: "author",
      label: "Author",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "readTime",
      label: "Read time",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "imageUrl",
      label: "Cover image",
      kind: "image",
      group: "content",
      localization: "shared"
    },
    {
      path: "imageAlt",
      label: "Cover image alt",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "ctaLabel",
      label: "CTA label",
      kind: "text",
      group: "content",
      localization: "localized"
    },
    {
      path: "ctaHref",
      label: "CTA link",
      kind: "url",
      group: "content",
      localization: "shared"
    }
  ]
});

// src/blocks/rich-text.tsx
import {
  createPhotonLocalizedDefault as createPhotonLocalizedDefault18,
  definePhotonBlockDefinition as definePhotonBlockDefinition18,
  usePhotonRenderDepth as usePhotonRenderDepth9,
  usePhotonStore as usePhotonStore14
} from "@init/photon/public";
import { jsx as jsx28 } from "react/jsx-runtime";
var RichTextBlock = ({
  block
}) => {
  const siteDesign = usePhotonStore14(
    (state) => state.site.settings.design
  );
  const variant = resolveMarketingDemoBlockVariant({
    blockType: "rich-text",
    explicitVariant: block.props.variant,
    siteDesign
  });
  const theme = getMarketingDemoVariantTheme(variant);
  const renderDepth = usePhotonRenderDepth9();
  const frameless = theme.surfaceStyle === "frameless";
  return /* @__PURE__ */ jsx28(
    "section",
    {
      className: `${theme.surface} px-5 py-5 sm:px-6 sm:py-6`,
      style: getMarketingDemoFramelessBleedStyle(frameless, renderDepth === 0),
      "data-testid": "marketing-demo-rich-text",
      "data-marketing-demo-variant": variant,
      "data-marketing-demo-surface-style": theme.surfaceStyle,
      children: /* @__PURE__ */ jsx28(
        "div",
        {
          className: [
            "mx-auto min-w-0",
            frameless ? "max-w-4xl" : "max-w-3xl"
          ].join(" "),
          children: /* @__PURE__ */ jsx28(
            RichText,
            {
              blockId: block.id,
              path: "content",
              containerClassName: "min-w-0",
              className: [
                theme.richText,
                "[&_blockquote]:text-[var(--photon-site-muted-text)]",
                "[&_h2]:text-[var(--photon-site-text)] [&_h3]:text-[var(--photon-site-text)]",
                "[&_li]:text-[var(--photon-site-text)] [&_p]:text-[var(--photon-site-text)]",
                "[&_strong]:text-[var(--photon-site-text)]"
              ].join(" ")
            }
          )
        }
      )
    }
  );
};
var richTextDefinition = definePhotonBlockDefinition18({
  type: "rich-text",
  label: "Rich Text",
  labelKey: "marketingDemoKit.blocks.richText.label",
  description: "Pure rich text section with headings, paragraphs, lists and quotes.",
  descriptionKey: "marketingDemoKit.blocks.richText.description",
  category: "Content",
  icon: "pilcrow",
  component: RichTextBlock,
  defaults: {
    variant: "default",
    content: createPhotonLocalizedDefault18({
      en: "<h2>Content mode can now persist richer editorial structure</h2><p>The builder no longer has to flatten everything into plain textareas. This block stores real rich text markup, keeps it in the manifest, survives branch changes and still renders directly on the public website.</p><p>The point is not a detached CMS page. The point is staying on the live surface while editing:</p><ul><li>short narrative paragraphs</li><li>lists for product proof</li><li>quotes or subheads when a section needs rhythm</li></ul><blockquote>The same saved document can feed preview, content mode and profile history.</blockquote>",
      ru: "<h2>Content mode \u0442\u0435\u043F\u0435\u0440\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u0431\u043E\u0433\u0430\u0442\u0443\u044E editorial-\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443</h2><p>Builder \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u043D \u0441\u043F\u043B\u044E\u0449\u0438\u0432\u0430\u0442\u044C \u0432\u0441\u0435 \u0432 \u043E\u0431\u044B\u0447\u043D\u044B\u0435 textareas. \u042D\u0442\u043E\u0442 \u0431\u043B\u043E\u043A \u0445\u0440\u0430\u043D\u0438\u0442 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 rich text markup, \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u0435\u0433\u043E \u0432 manifest, \u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0432\u0435\u0442\u043E\u043A \u0438 \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u0442\u0441\u044F \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u043C \u0441\u0430\u0439\u0442\u0435.</p><p>\u0421\u043C\u044B\u0441\u043B \u043D\u0435 \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0439 CMS-\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435. \u0421\u043C\u044B\u0441\u043B \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u043E\u0441\u0442\u0430\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0436\u0438\u0432\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F:</p><ul><li>\u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0435 \u043F\u043E\u0432\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0430\u0431\u0437\u0430\u0446\u044B</li><li>\u0441\u043F\u0438\u0441\u043A\u0438 \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0445 \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432</li><li>\u0446\u0438\u0442\u0430\u0442\u044B \u0438 \u043F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438, \u043A\u043E\u0433\u0434\u0430 \u0441\u0435\u043A\u0446\u0438\u0438 \u043D\u0443\u0436\u0435\u043D \u0440\u0438\u0442\u043C</li></ul><blockquote>\u041E\u0434\u0438\u043D \u0438 \u0442\u043E\u0442 \u0436\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u043C\u043E\u0436\u0435\u0442 \u043A\u043E\u0440\u043C\u0438\u0442\u044C preview, content mode \u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u043F\u0440\u043E\u0444\u0438\u043B\u044F.</blockquote>"
    })
  },
  fields: [
    {
      path: "variant",
      label: "Variant",
      kind: "select",
      group: "style",
      localization: "shared",
      options: marketingDemoBlockVariantOptions
    },
    {
      path: "content",
      label: "Content",
      kind: "rich-text",
      group: "content",
      localization: "localized"
    }
  ]
});

export {
  breadcrumbsDefinition,
  commandCenterCtaDefinition,
  featureGridDefinition,
  heroSpotlightDefinition,
  initLandingCtaDefinition,
  initLandingFooterDefinition,
  initLandingHeaderDefinition,
  InitCheckListItem,
  InitStatWidget,
  InitStatusPill,
  InitTestimonialCard,
  InitTestimonialProfile,
  InitTypedText,
  RichText,
  initLandingHeroDefinition,
  initLandingPricingDefinition,
  initLandingProcessDefinition,
  initLandingServicesDefinition,
  initLandingTestimonialsDefinition,
  initLandingWhyUsDefinition,
  mediaFrameDefinition,
  mediaGalleryDefinition,
  proofStripDefinition,
  publicationSpotlightDefinition,
  richTextDefinition
};
