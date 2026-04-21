"use client";

import {
  EditableText,
  EditableTextarea,
  createWebsiteBuilderLocalizedDefault,
  defineWebsiteBuilderBlockDefinition,
  type WebsiteBuilderBlockComponentProps,
  type WebsiteBuilderField,
} from "@init-modules/website-builder/public";
import {
  createInitLandingBlockLocalizationSchema,
  initLandingIconFieldOptions,
  initLandingIcons,
  revealClassName,
  sectionFrameClassName,
  type InitLandingServiceItem,
  useInitLandingReveal,
  useInitLandingSectionBleedStyle,
  useInitLandingSurfaceBreakpoints,
} from "./shared";

export type InitLandingServicesProps = {
  description: string;
  eyebrow: string;
  items: InitLandingServiceItem[];
  sectionId: string;
  title: string;
};

const fields: WebsiteBuilderField[] = [
  {
    path: "sectionId",
    label: "Section id",
    kind: "text",
    group: "content",
    localization: "shared",
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
    kind: "text",
    group: "content",
    localization: "localized",
  },
  {
    path: "description",
    label: "Description",
    kind: "textarea",
    group: "content",
    localization: "localized",
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
        options: initLandingIconFieldOptions,
      },
      { path: "title", label: "Title", kind: "text" },
      { path: "description", label: "Description", kind: "textarea" },
    ],
  },
];

const InitLandingServicesBlock = ({
  block,
}: WebsiteBuilderBlockComponentProps<InitLandingServicesProps>) => {
  const sectionRef = useInitLandingReveal<HTMLDivElement>();
  const bleedStyle = useInitLandingSectionBleedStyle();
  const { ref, atLeastMd, atLeastLg } = useInitLandingSurfaceBreakpoints();

  return (
    <section
      ref={ref}
      id={block.props.sectionId}
      className={["py-24", atLeastLg ? "py-32" : ""].join(" ")}
      style={bleedStyle}
    >
      <div className={sectionFrameClassName} ref={sectionRef}>
        <div
          className={`${revealClassName} mb-16 mx-auto max-w-2xl text-center`}
        >
          <EditableText
            blockId={block.id}
            path="eyebrow"
            className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--wb-site-accent)]"
          />
          <EditableText
            blockId={block.id}
            path="title"
            as="h2"
            className={[
              "text-balance font-semibold tracking-tight text-[var(--wb-site-text)]",
              atLeastLg ? "text-4xl" : "text-3xl",
            ].join(" ")}
          />
          <EditableTextarea
            blockId={block.id}
            path="description"
            className="mt-4 text-lg text-[var(--wb-site-muted-text)]"
          />
        </div>

        <div
          className={["grid gap-6", atLeastMd ? "grid-cols-2" : ""].join(" ")}
        >
          {block.props.items.map((service, index) => {
            const Icon = initLandingIcons[service.icon];
            return (
              <div
                key={`${service.title}:${index}`}
                className={`${revealClassName} group rounded-[1.75rem] border border-[color-mix(in_srgb,var(--wb-site-border)_86%,white)] bg-[var(--wb-site-surface)] p-8 hover:border-[color-mix(in_srgb,var(--wb-site-accent)_20%,var(--wb-site-border))] hover:shadow-lg`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[color-mix(in_srgb,var(--wb-site-accent)_10%,transparent)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[color-mix(in_srgb,var(--wb-site-accent)_20%,transparent)]">
                  <Icon className="h-6 w-6 text-[var(--wb-site-accent)]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[var(--wb-site-text)]">
                  <EditableText
                    blockId={block.id}
                    path={`items.${index}.title`}
                  />
                </h3>
                <EditableTextarea
                  blockId={block.id}
                  path={`items.${index}.description`}
                  className="leading-relaxed text-[var(--wb-site-muted-text)]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const initLandingServicesDefinition =
  defineWebsiteBuilderBlockDefinition<InitLandingServicesProps>({
    type: "init-landing-services",
    label: "Init Landing Services",
    description: "Services grid from the Init landing page.",
    category: "Content",
    icon: "layout-grid",
    component: InitLandingServicesBlock,
    fields,
    localizationSchema: createInitLandingBlockLocalizationSchema(fields),
    defaults: {
      sectionId: "services",
      eyebrow: createWebsiteBuilderLocalizedDefault({
        en: "Что можно заказать",
        ru: "Что можно заказать",
      }),
      title: createWebsiteBuilderLocalizedDefault({
        en: "Один визуал, несколько форматов запуска сайта",
        ru: "Один визуал, несколько форматов запуска сайта",
      }),
      description: createWebsiteBuilderLocalizedDefault({
        en: "Выбирайте глубину кастомизации под свою задачу: от готового шаблона до полностью индивидуального продукта.",
        ru: "Выбирайте глубину кастомизации под свою задачу: от готового шаблона до полностью индивидуального продукта.",
      }),
      items: [
        {
          icon: "packageCheck",
          title: "Готовые сайты",
          description:
            "Берём уже собранную структуру, меняем контент, приводим под ваш бренд и быстро запускаем готовый сайт.",
        },
        {
          icon: "blocks",
          title: "Сайт-конструктор",
          description:
            "Собираете нужные модули вручную, видите стоимость блоков в калькуляторе, а мы собираем, интегрируем и публикуем.",
        },
        {
          icon: "wandSparkles",
          title: "Индивидуальная разработка",
          description:
            "Проектируем и реализуем сайт с нуля, если нужен нестандартный сценарий, сложная логика или особая подача.",
        },
        {
          icon: "globe",
          title: "Форматы сайтов",
          description:
            "Лендинг, корпоративный сайт, интернет-магазин и каталог услуг. Под каждый формат подбираем подходящий способ запуска.",
        },
      ],
    },
  });
