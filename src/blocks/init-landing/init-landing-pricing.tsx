"use client";

import {
	createWebsiteBuilderLocalizedDefault,
	defineWebsiteBuilderBlockDefinition,
	EditableText,
	EditableTextarea,
	type WebsiteBuilderBlockComponentProps,
	type WebsiteBuilderField,
	WebsiteBuilderLink,
} from "@init-modules/website-builder/public";
import { InitCheckListItem } from "../../primitives";
import {
	createInitLandingBlockLocalizationSchema,
	type InitLandingPricingPlan,
	revealClassName,
	sectionFrameClassName,
	useInitLandingReveal,
	useInitLandingSectionBleedStyle,
	useInitLandingSurfaceBreakpoints,
} from "./shared";

export type InitLandingPricingProps = {
	description: string;
	eyebrow: string;
	note: string;
	noteCta: { href: string; label: string };
	plans: InitLandingPricingPlan[];
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
				localization: "shared",
			},
			{
				path: "features",
				label: "Features",
				kind: "repeater",
				localization: "localized",
				addLabel: "Add feature",
				itemLabel: "Feature",
				itemField: { label: "Feature", kind: "text" },
			},
			{ path: "cta", label: "CTA label", kind: "text" },
			{ path: "href", label: "Href", kind: "url", localization: "shared" },
		],
	},
	{
		path: "note",
		label: "Note",
		kind: "textarea",
		group: "content",
		localization: "localized",
	},
	{
		path: "noteCta",
		label: "Note CTA",
		kind: "object",
		group: "content",
		localization: "localized",
		fields: [
			{ path: "label", label: "Label", kind: "text" },
			{ path: "href", label: "Href", kind: "url", localization: "shared" },
		],
	},
];

const InitLandingPricingBlock = ({
	block,
}: WebsiteBuilderBlockComponentProps<InitLandingPricingProps>) => {
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
					className={[
						"grid gap-8",
						atLeastLg ? "grid-cols-3" : atLeastMd ? "grid-cols-2" : "",
					].join(" ")}
				>
					{block.props.plans.map((plan, index) => (
						<div
							key={`${plan.name}:${index}`}
							className={[
								revealClassName,
								"relative overflow-hidden rounded-[1.75rem] border bg-[var(--wb-site-surface)] transition-all duration-700 hover:shadow-xl",
								plan.highlighted
									? `${atLeastLg ? "scale-[1.02] " : ""}border-[var(--wb-site-accent)] shadow-lg`
									: "border-[color-mix(in_srgb,var(--wb-site-border)_84%,white)] hover:border-[color-mix(in_srgb,var(--wb-site-accent)_20%,var(--wb-site-border))]",
							].join(" ")}
							style={{ transitionDelay: `${index * 150}ms` }}
						>
							{plan.highlighted ? (
								<div className="absolute left-0 right-0 top-0 h-1 bg-[var(--wb-site-accent)]" />
							) : null}
							<div className="pb-4 p-6">
								{plan.highlighted ? (
									<span className="mb-2 inline-block text-xs font-medium uppercase tracking-wider text-[var(--wb-site-accent)]">
										Рекомендуем
									</span>
								) : null}
								<h3 className="text-xl font-semibold text-[var(--wb-site-text)]">
									<EditableText
										blockId={block.id}
										path={`plans.${index}.name`}
									/>
								</h3>
								<EditableTextarea
									blockId={block.id}
									path={`plans.${index}.description`}
									className="mt-1 text-sm text-[var(--wb-site-muted-text)]"
								/>
							</div>
							<div className="px-6 pb-6">
								<div className="mb-6">
									<span className="text-4xl font-semibold text-[var(--wb-site-text)]">
										<EditableText
											blockId={block.id}
											path={`plans.${index}.price`}
										/>
									</span>
									<span className="ml-2 text-sm text-[var(--wb-site-muted-text)]">
										<EditableText
											blockId={block.id}
											path={`plans.${index}.period`}
										/>
									</span>
								</div>
								<ul className="mb-8 space-y-3">
									{plan.features.map((feature, featureIndex) => (
										<InitCheckListItem key={`${feature}:${featureIndex}`}>
											<EditableText
												blockId={block.id}
												path={`plans.${index}.features.${featureIndex}`}
											/>
										</InitCheckListItem>
									))}
								</ul>
								<WebsiteBuilderLink
									href={plan.href}
									className={[
										"inline-flex w-full items-center justify-center rounded-[1.1rem] px-4 py-3 text-sm font-medium transition-transform duration-300 hover:scale-[1.02]",
										plan.highlighted
											? "bg-[var(--wb-site-accent)] text-white hover:shadow-lg hover:shadow-[color-mix(in_srgb,var(--wb-site-accent)_25%,transparent)]"
											: "border border-[color-mix(in_srgb,var(--wb-site-border)_84%,white)] text-[var(--wb-site-text)] hover:bg-[color-mix(in_srgb,var(--wb-site-surface)_96%,white)]",
									].join(" ")}
								>
									<EditableText
										blockId={block.id}
										path={`plans.${index}.cta`}
									/>
								</WebsiteBuilderLink>
							</div>
						</div>
					))}
				</div>

				<p
					className={`${revealClassName} mt-12 text-center text-sm text-[var(--wb-site-muted-text)]`}
					style={{ transitionDelay: "500ms" }}
				>
					{block.props.note}{" "}
					<WebsiteBuilderLink
						href={block.props.noteCta.href}
						className="text-[var(--wb-site-accent)] hover:underline"
					>
						<EditableText blockId={block.id} path="noteCta.label" />
					</WebsiteBuilderLink>
				</p>
			</div>
		</section>
	);
};

export const initLandingPricingDefinition =
	defineWebsiteBuilderBlockDefinition<InitLandingPricingProps>({
		type: "init-landing-pricing",
		label: "Init Landing Pricing",
		description: "Pricing section from the Init landing page.",
		category: "Commerce",
		icon: "badge-dollar-sign",
		component: InitLandingPricingBlock,
		fields,
		localizationSchema: createInitLandingBlockLocalizationSchema(fields),
		defaults: {
			sectionId: "pricing",
			eyebrow: createWebsiteBuilderLocalizedDefault({
				en: "Как это продаётся",
				ru: "Как это продаётся",
			}),
			title: createWebsiteBuilderLocalizedDefault({
				en: "Три подхода к запуску сайта",
				ru: "Три подхода к запуску сайта",
			}),
			description: createWebsiteBuilderLocalizedDefault({
				en: "Сами услуги разные по глубине настройки и срокам, поэтому и продаём их отдельными сценариями.",
				ru: "Сами услуги разные по глубине настройки и срокам, поэтому и продаём их отдельными сценариями.",
			}),
			plans: [
				{
					name: "Готовый сайт",
					description:
						"Когда нужно быстро выйти в онлайн с уже понятной структурой.",
					price: "от 190 000 ₸",
					period: "фиксированный запуск",
					features: [
						"Подходит для лендинга, корпоративного сайта, каталога услуг",
						"Меняем тексты, изображения и фирменный стиль",
						"Быстрый запуск без длительного проектирования",
						"Настройка форм и базовых интеграций",
					],
					cta: "Выбрать готовый вариант",
					href: "#contact",
				},
				{
					name: "Сайт-конструктор",
					description:
						"Когда нужен гибкий набор модулей и понятный расчёт стоимости.",
					price: "от 290 000 ₸",
					period: "модули + калькуляция",
					highlighted: true,
					features: [
						"Ручная сборка модулей под задачу",
						"Видимая стоимость каждого блока",
						"Подходит для магазинов, каталогов и корпоративных сайтов",
						"Интеграции и публикация на нашей стороне",
					],
					cta: "Собрать конфигурацию",
					href: "#contact",
				},
				{
					name: "Custom",
					description:
						"Когда ограничения шаблонов и модулей уже мешают бизнесу.",
					price: "индивидуально",
					period: "после брифа и оценки",
					features: [
						"Архитектура и интерфейс с нуля",
						"Нестандартные сценарии, роли и кабинеты",
						"Интеграции любой сложности",
						"Полностью индивидуальная логика продукта",
					],
					cta: "Обсудить custom",
					href: "#contact",
				},
			],
			note: createWebsiteBuilderLocalizedDefault({
				en: "Если сомневаетесь между форматами, на брифе разложим задачу и предложим наиболее рациональный сценарий.",
				ru: "Если сомневаетесь между форматами, на брифе разложим задачу и предложим наиболее рациональный сценарий.",
			}),
			noteCta: { label: "Оставить запрос", href: "#contact" },
		},
	});
