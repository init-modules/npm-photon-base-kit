"use client";

import {
  EditableText,
  EditableTextarea,
  createWebsiteBuilderLocalizedDefault,
  defineWebsiteBuilderBlockDefinition,
  type WebsiteBuilderBlockComponentProps,
  type WebsiteBuilderField,
} from "@init-modules/website-builder";
import {
  initLandingIconFieldOptions,
  initLandingIcons,
  revealClassName,
  sectionFrameClassName,
  type InitLandingReasonItem,
  useInitLandingReveal,
  useInitLandingSectionBleedStyle,
  useInitLandingSurfaceBreakpoints,
} from "./shared";

export type InitLandingWhyUsProps = {
  body: string;
  description: string;
  eyebrow: string;
  items: InitLandingReasonItem[];
  sectionId: string;
  title: string;
  trustItems: string[];
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
    path: "body",
    label: "Body",
    kind: "textarea",
    group: "content",
    localization: "localized",
  },
  {
    path: "trustItems",
    label: "Trust items",
    kind: "repeater",
    group: "content",
    localization: "localized",
    addLabel: "Add trust item",
    itemLabel: "Trust item",
    itemField: { label: "Trust item", kind: "text" },
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
        options: initLandingIconFieldOptions,
      },
      { path: "title", label: "Title", kind: "text" },
      { path: "description", label: "Description", kind: "textarea" },
    ],
  },
];

const InitLandingWhyUsBlock = ({
  block,
}: WebsiteBuilderBlockComponentProps<InitLandingWhyUsProps>) => {
  const sectionRef = useInitLandingReveal<HTMLDivElement>();
  const bleedStyle = useInitLandingSectionBleedStyle();
  const { ref, atLeastSm, atLeastLg } = useInitLandingSurfaceBreakpoints();

  return (
    <section
      ref={ref}
      id={block.props.sectionId}
      className={[
        "bg-[var(--wb-site-surface)] py-24",
        atLeastLg ? "py-32" : "",
      ].join(" ")}
      style={bleedStyle}
    >
      <div className={sectionFrameClassName} ref={sectionRef}>
        <div
          className={[
            "grid items-center gap-16",
            atLeastLg ? "grid-cols-2" : "",
          ].join(" ")}
        >
          <div className={revealClassName}>
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
              path="body"
              className="mt-6 text-lg leading-relaxed text-[var(--wb-site-muted-text)]"
            />

            <div className="mt-10 flex flex-wrap gap-6">
              {block.props.trustItems.map((item, index) => (
                <div
                  key={`${item}:${index}`}
                  className={`${revealClassName} flex items-center gap-2`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="h-2 w-2 rounded-full bg-[var(--wb-site-accent)]" />
                  <EditableText
                    blockId={block.id}
                    path={`trustItems.${index}`}
                    className="text-sm text-[var(--wb-site-muted-text)]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            className={["grid gap-6", atLeastSm ? "grid-cols-2" : ""].join(" ")}
          >
            {block.props.items.map((reason, index) => {
              const Icon = initLandingIcons[reason.icon];
              return (
                <div
                  key={`${reason.title}:${index}`}
                  className={`${revealClassName} group rounded-[1.5rem] border border-[color-mix(in_srgb,var(--wb-site-border)_86%,white)] bg-[var(--wb-site-background)] p-6 hover:border-[color-mix(in_srgb,var(--wb-site-accent)_20%,var(--wb-site-border))] hover:shadow-md`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Icon className="mb-4 h-8 w-8 text-[var(--wb-site-accent)] transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mb-2 font-semibold text-[var(--wb-site-text)]">
                    <EditableText
                      blockId={block.id}
                      path={`items.${index}.title`}
                    />
                  </h3>
                  <EditableTextarea
                    blockId={block.id}
                    path={`items.${index}.description`}
                    className="text-sm leading-relaxed text-[var(--wb-site-muted-text)]"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export const initLandingWhyUsDefinition =
  defineWebsiteBuilderBlockDefinition<InitLandingWhyUsProps>({
    type: "init-landing-why-us",
    label: "Init Landing Why Us",
    description: "Why us section from the Init landing page.",
    category: "Content",
    icon: "shield",
    component: InitLandingWhyUsBlock,
    fields,
    defaults: {
      sectionId: "why-us",
      eyebrow: createWebsiteBuilderLocalizedDefault({
        en: "Почему с нами удобно",
        ru: "Почему с нами удобно",
      }),
      title: createWebsiteBuilderLocalizedDefault({
        en: "Не продаём лишнюю разработку там, где можно решить проще",
        ru: "Не продаём лишнюю разработку там, где можно решить проще",
      }),
      description: createWebsiteBuilderLocalizedDefault({
        en: "Подбираем формат под задачу, а не под красивое коммерческое предложение.",
        ru: "Подбираем формат под задачу, а не под красивое коммерческое предложение.",
      }),
      body: createWebsiteBuilderLocalizedDefault({
        en: "Если вам достаточно готового решения, не будем тянуть в дорогой custom. Если нужен конструктор с модулями и калькуляцией, построим именно такой путь. Если задача нестандартная, делаем индивидуально и без компромиссов по архитектуре.",
        ru: "Если вам достаточно готового решения, не будем тянуть в дорогой custom. Если нужен конструктор с модулями и калькуляцией, построим именно такой путь. Если задача нестандартная, делаем индивидуально и без компромиссов по архитектуре.",
      }),
      trustItems: [
        "Помогаем выбрать формат",
        "Прозрачная стоимость",
        "Сборка и запуск под ключ",
      ],
      items: [
        {
          icon: "award",
          title: "Понимаем разницу между форматами",
          description:
            "Не смешиваем шаблонный запуск, модульную сборку и custom в одну услугу. Для клиента это значит меньше путаницы.",
        },
        {
          icon: "shield",
          title: "Контролируем качество финальной сборки",
          description:
            "Даже когда сайт собирается из готовых блоков, итоговая настройка, интеграции и запуск проходят через нашу команду.",
        },
        {
          icon: "users",
          title: "Говорим простым языком",
          description:
            "На обычной ветке продаём именно разработку сайтов, без лишнего enterprise-пафоса и перегруженных обещаний.",
        },
        {
          icon: "zap",
          title: "Можно стартовать быстрее",
          description:
            "Если задача не требует долгого цикла проектирования, переводим в формат, где можно запуститься заметно быстрее.",
        },
      ],
    },
  });
