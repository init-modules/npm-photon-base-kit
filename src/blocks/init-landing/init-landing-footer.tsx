"use client";

import {
  EditableText,
  EditableTextarea,
  WebsiteBuilderLink,
  createWebsiteBuilderLocalizedDefault,
  defineWebsiteBuilderBlockDefinition,
  type WebsiteBuilderBlockComponentProps,
  type WebsiteBuilderField,
} from "@init-modules/website-builder";
import {
  InitBrandMark,
  type InitLandingFooterContact,
  type InitLandingLinkItem,
  useInitLandingSectionBleedStyle,
  useInitLandingSurfaceBreakpoints,
} from "./shared";

export type InitLandingFooterProps = {
  brandDescription: string;
  brandLabel: string;
  company: InitLandingLinkItem[];
  contact: InitLandingFooterContact;
  homeHref: string;
  legal: InitLandingLinkItem[];
  services: InitLandingLinkItem[];
};

const fields: WebsiteBuilderField[] = [
  {
    path: "brandLabel",
    label: "Brand label",
    kind: "text",
    group: "content",
    localization: "localized",
  },
  {
    path: "homeHref",
    label: "Home href",
    kind: "url",
    group: "content",
    localization: "shared",
  },
  {
    path: "brandDescription",
    label: "Brand description",
    kind: "textarea",
    group: "content",
    localization: "localized",
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
      { path: "href", label: "Href", kind: "url", localization: "shared" },
    ],
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
      { path: "href", label: "Href", kind: "url", localization: "shared" },
    ],
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
      { path: "href", label: "Href", kind: "url", localization: "shared" },
    ],
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
      { path: "location", label: "Location", kind: "text" },
    ],
  },
];

const InitLandingFooterBlock = ({
  block,
}: WebsiteBuilderBlockComponentProps<InitLandingFooterProps>) => {
  const bleedStyle = useInitLandingSectionBleedStyle();
  const { ref, atLeastSm, atLeastMd, atLeastLg } =
    useInitLandingSurfaceBreakpoints();

  return (
    <footer
      ref={ref}
      className="border-t border-[var(--wb-site-border)] bg-[var(--wb-site-surface)]"
      style={bleedStyle}
    >
      <div
        className={[
          "mx-auto max-w-7xl px-6 py-16",
          atLeastLg ? "px-8" : "",
        ].join(" ")}
      >
        <div
          className={[
            "grid gap-8",
            atLeastMd ? "grid-cols-4" : "grid-cols-2",
            atLeastLg ? "gap-12" : "",
          ].join(" ")}
        >
          <div
            className={["col-span-2", atLeastMd ? "md:col-span-1" : ""].join(
              " ",
            )}
          >
            <WebsiteBuilderLink
              href={String(block.props.homeHref)}
              className="group flex items-center gap-2"
            >
              <InitBrandMark
                label={<EditableText blockId={block.id} path="brandLabel" />}
              />
            </WebsiteBuilderLink>
            <EditableTextarea
              blockId={block.id}
              path="brandDescription"
              className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--wb-site-muted-text)]"
            />
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--wb-site-text)]">
              Услуги
            </h3>
            <ul className="space-y-3">
              {block.props.services.map((item, index) => (
                <li key={`${item.name ?? item.label}:${item.href}`}>
                  <WebsiteBuilderLink
                    href={item.href}
                    className="text-sm text-[var(--wb-site-muted-text)] transition-colors hover:text-[var(--wb-site-text)]"
                  >
                    <EditableText
                      blockId={block.id}
                      path={`services.${index}.name`}
                    />
                  </WebsiteBuilderLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--wb-site-text)]">
              Компания
            </h3>
            <ul className="space-y-3">
              {block.props.company.map((item, index) => (
                <li key={`${item.name ?? item.label}:${item.href}`}>
                  <WebsiteBuilderLink
                    href={item.href}
                    className="text-sm text-[var(--wb-site-muted-text)] transition-colors hover:text-[var(--wb-site-text)]"
                  >
                    <EditableText
                      blockId={block.id}
                      path={`company.${index}.name`}
                    />
                  </WebsiteBuilderLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--wb-site-text)]">
              Контакты
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${block.props.contact.email}`}
                  className="text-sm text-[var(--wb-site-muted-text)] transition-colors hover:text-[var(--wb-site-text)]"
                >
                  <EditableText blockId={block.id} path="contact.email" />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${block.props.contact.phone}`}
                  className="text-sm text-[var(--wb-site-muted-text)] transition-colors hover:text-[var(--wb-site-text)]"
                >
                  <EditableText blockId={block.id} path="contact.phone" />
                </a>
              </li>
              <li className="text-sm text-[var(--wb-site-muted-text)]">
                <EditableText blockId={block.id} path="contact.location" />
              </li>
            </ul>
          </div>
        </div>

        <div
          className={[
            "mt-12 flex items-center justify-between gap-4 border-t border-[var(--wb-site-border)] pt-8",
            atLeastSm ? "flex-row" : "flex-col",
          ].join(" ")}
        >
          <p className="text-sm text-[var(--wb-site-muted-text)]">
            &copy; {new Date().getFullYear()} init. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {block.props.legal.map((item, index) => (
              <WebsiteBuilderLink
                key={`${item.name ?? item.label}:${item.href}:legal`}
                href={item.href}
                className="text-sm text-[var(--wb-site-muted-text)] transition-colors hover:text-[var(--wb-site-text)]"
              >
                <EditableText blockId={block.id} path={`legal.${index}.name`} />
              </WebsiteBuilderLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export const initLandingFooterDefinition =
  defineWebsiteBuilderBlockDefinition<InitLandingFooterProps>({
    type: "init-landing-footer",
    label: "Init Landing Footer",
    description: "Footer from the Init landing page.",
    category: "Layout",
    icon: "panel-bottom-open",
    component: InitLandingFooterBlock,
    fields,
    defaults: {
      brandLabel: createWebsiteBuilderLocalizedDefault({
        en: "init",
        ru: "init",
      }),
      homeHref: "/",
      brandDescription: createWebsiteBuilderLocalizedDefault({
        en: "Разработка сайтов в нескольких форматах: готовые решения, модульная сборка через конструктор и индивидуальный custom.",
        ru: "Разработка сайтов в нескольких форматах: готовые решения, модульная сборка через конструктор и индивидуальный custom.",
      }),
      services: [
        { name: "Готовые сайты", href: "#services" },
        { name: "Сайт-конструктор", href: "#services" },
        { name: "Индивидуальная разработка", href: "#services" },
        { name: "Интернет-магазины и каталоги", href: "#services" },
      ] as Array<InitLandingLinkItem & { name: string }>,
      company: [
        { name: "Почему мы", href: "#why-us" },
        { name: "Этапы", href: "#process" },
        { name: "Стоимость", href: "#pricing" },
        { name: "Контакты", href: "#contact" },
      ] as Array<InitLandingLinkItem & { name: string }>,
      legal: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ] as Array<InitLandingLinkItem & { name: string }>,
      contact: {
        email: "hello@init.dev",
        phone: "+7 (700) 123-45-67",
        location: "Astana, KZ",
      },
    },
  });
