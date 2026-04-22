"use client";

import {
	createPhotonLocalizedDefault,
	definePhotonBlockDefinition,
	EditableText,
	usePhotonStore,
	type PhotonBlockComponentProps,
	type PhotonField,
} from "@init/photon/public";
import {
	InitStatusPill,
	InitStatWidget,
	InitTypedText,
} from "../../primitives";
import { InitLandingHeroGridCanvas } from "./hero-grid-canvas";
import { InitLandingHeroLeadForm } from "./hero-lead-form";
import {
	ArrowRightIcon,
	createInitLandingBlockLocalizationSchema,
	type InitLandingAction,
	InitLandingActionButton,
	type InitLandingFeaturePill,
	type InitLandingStat,
	initLandingIconFieldOptions,
	useInitLandingSectionBleedStyle,
	useInitLandingSurfaceBreakpoints,
} from "./shared";

export type InitLandingHeroProps = {
	badge: string;
	featurePills: InitLandingFeaturePill[];
	highlightedTitle: string;
	leadCapture?: {
		buttonLabel: string;
		helperText: string;
		placeholder: string;
	};
	primaryCta: InitLandingAction;
	secondaryCta: InitLandingAction;
	stats: InitLandingStat[];
	supportingTexts: string[];
	title: string;
};

const fields: PhotonField[] = [
	{
		path: "badge",
		label: "Badge",
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
		path: "highlightedTitle",
		label: "Highlighted title",
		kind: "text",
		group: "content",
		localization: "localized",
	},
	{
		path: "supportingTexts",
		label: "Supporting texts",
		kind: "repeater",
		group: "content",
		localization: "localized",
		addLabel: "Add supporting text",
		itemLabel: "Supporting text",
		itemField: { label: "Text", kind: "textarea" },
	},
	{
		path: "primaryCta",
		label: "Primary CTA",
		kind: "object",
		group: "content",
		localization: "localized",
		fields: [
			{ path: "label", label: "Label", kind: "text" },
			{ path: "href", label: "Href", kind: "url", localization: "shared" },
		],
	},
	{
		path: "secondaryCta",
		label: "Secondary CTA",
		kind: "object",
		group: "content",
		localization: "localized",
		fields: [
			{ path: "label", label: "Label", kind: "text" },
			{ path: "href", label: "Href", kind: "url", localization: "shared" },
		],
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
			{ path: "helperText", label: "Helper text", kind: "textarea" },
		],
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
				options: initLandingIconFieldOptions,
			},
			{ path: "label", label: "Label", kind: "text" },
		],
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
			{ path: "label", label: "Label", kind: "text" },
		],
	},
];

const InitLandingHeroBlock = ({
	block,
}: PhotonBlockComponentProps<InitLandingHeroProps>) => {
	const mode = usePhotonStore((state) => state.mode);
	const bleedStyle = useInitLandingSectionBleedStyle();
	const { ref, atLeastSm, atLeastLg, atLeastXl } =
		useInitLandingSurfaceBreakpoints();

	return (
		<section
			ref={ref}
			data-testid="photon-init-landing-hero"
			className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
			style={bleedStyle}
		>
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="animate-pulse-slow absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[color-mix(in_oklab,var(--photon-site-accent)_8%,transparent)] blur-[100px]" />
				<div className="animate-pulse-slow animation-delay-200 absolute bottom-1/3 left-1/5 h-[400px] w-[400px] rounded-full bg-[color-mix(in_oklab,var(--photon-site-accent)_6%,transparent)] blur-[80px]" />
				<div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color-mix(in_oklab,var(--photon-site-accent)_4%,transparent)] blur-[120px]" />
				<InitLandingHeroGridCanvas />
			</div>

			<div className="relative mx-auto max-w-7xl px-6 py-24 pb-36 lg:px-8 lg:py-32 lg:pb-40">
				<div className="mx-auto max-w-4xl text-center">
					<InitStatusPill>
						<EditableText
							blockId={block.id}
							path="badge"
							className="text-sm font-medium text-[var(--photon-site-muted-text)]"
						/>
					</InitStatusPill>

					<h1
						className={[
							"animate-fade-up animation-delay-100 text-balance leading-[1.1] font-semibold tracking-tight text-[var(--photon-site-text)]",
							atLeastXl
								? "text-7xl"
								: atLeastLg
									? "text-6xl"
									: atLeastSm
										? "text-5xl"
										: "text-4xl",
						].join(" ")}
					>
						<EditableText blockId={block.id} path="title" />{" "}
						<span className="relative mt-2 inline-block">
							<span className="relative z-10 text-[var(--photon-site-accent)]">
								<EditableText blockId={block.id} path="highlightedTitle" />
							</span>
							<svg
								aria-hidden="true"
								className="absolute -bottom-2 left-0 h-3 w-full text-[color-mix(in_oklab,var(--photon-site-accent)_20%,transparent)]"
								viewBox="0 0 200 12"
								preserveAspectRatio="none"
							>
								<path
									d="M0,8 Q50,0 100,8 T200,8"
									stroke="currentColor"
									strokeWidth="4"
									fill="none"
									strokeLinecap="round"
								/>
							</svg>
						</span>
					</h1>

					<div className="animate-fade-up animation-delay-200">
						<InitTypedText
							atLeastLg={atLeastLg}
							texts={block.props.supportingTexts}
						/>
					</div>

					<div className="animate-fade-up animation-delay-300">
						{block.props.leadCapture ? (
							<InitLandingHeroLeadForm
								buttonLabel={block.props.leadCapture.buttonLabel}
								helperText={block.props.leadCapture.helperText}
								placeholder={block.props.leadCapture.placeholder}
							/>
						) : (
							<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
								<InitLandingActionButton href={block.props.primaryCta.href}>
									{block.props.primaryCta.label}
									<ArrowRightIcon className="ml-2 h-4 w-4" />
								</InitLandingActionButton>
								<InitLandingActionButton
									href={block.props.secondaryCta.href}
									outline
								>
									{block.props.secondaryCta.label}
								</InitLandingActionButton>
							</div>
						)}
					</div>

					{/* <div className="animate-fade-up animation-delay-400 relative z-10 flex flex-wrap items-center justify-center gap-3">
            {block.props.featurePills.map((item) => {
              const Icon = initLandingIcons[item.icon];

              return (
                <div
                  key={`${item.icon}:${item.label}`}
                  className="flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--photon-site-border)_50%,transparent)] bg-[color-mix(in_oklab,var(--photon-site-surface)_50%,transparent)] px-4 py-2 text-sm text-[var(--photon-site-muted-text)] transition-colors hover:bg-[var(--photon-site-surface)] hover:text-[var(--photon-site-text)]"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </div>
              );
            })}
          </div> */}

					<div className="animate-fade-up animation-delay-500 relative z-10 mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
						{block.props.stats.map((stat, index) => (
							<div
								key={`${stat.label}:${stat.value}`}
								className={`animation-delay-${(index + 5) * 100} rounded-2xl border border-[color-mix(in_oklab,var(--photon-site-border)_50%,transparent)] bg-[color-mix(in_oklab,var(--photon-site-surface)_50%,transparent)] p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-[var(--photon-site-border)] hover:bg-[var(--photon-site-surface)] hover:shadow-lg`}
							>
								{mode === "preview" ? (
									<InitStatWidget
										atLeastLg={atLeastLg}
										label={stat.label}
										suffix={stat.suffix}
										value={stat.value}
									/>
								) : (
									<div className="text-center">
										<div
											className={[
												"font-semibold text-[var(--photon-site-text)]",
												atLeastLg ? "text-4xl" : "text-3xl",
											].join(" ")}
										>
											<EditableText
												blockId={block.id}
												path={`stats.${index}.value`}
											/>
											<EditableText
												blockId={block.id}
												path={`stats.${index}.suffix`}
												placeholder=""
											/>
										</div>
										<EditableText
											blockId={block.id}
											path={`stats.${index}.label`}
											className="mt-1 text-sm text-[var(--photon-site-muted-text)]"
										/>
									</div>
								)}
							</div>
						))}
					</div>
				</div>

				<div className="animate-fade-up animation-delay-700 absolute bottom-8 left-1/2 -translate-x-1/2">
					<div className="flex flex-col items-center gap-2 text-[var(--photon-site-muted-text)]">
						<span className="text-xs uppercase tracking-widest">Scroll</span>
						<div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-current p-1">
							<div className="h-2 w-1 animate-bounce rounded-full bg-current" />
						</div>
					</div>
				</div>
			</div>

			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-28">
				<div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-[color-mix(in_oklab,var(--photon-site-background)_55%,transparent)] to-[var(--photon-site-background)]" />
				<div className="absolute inset-x-0 bottom-0 h-px bg-[color-mix(in_oklab,var(--photon-site-border)_70%,transparent)]" />
			</div>
		</section>
	);
};

export const initLandingHeroDefinition =
	definePhotonBlockDefinition<InitLandingHeroProps>({
		type: "init-landing-hero",
		label: "Init Landing Hero",
		description: "Hero section from the Init landing page.",
		category: "Hero",
		icon: "sparkles",
		component: InitLandingHeroBlock,
		fields,
		localizationSchema: createInitLandingBlockLocalizationSchema(fields),
		defaults: {
			badge: createPhotonLocalizedDefault({
				en: "Сайты без лишней сложности",
				ru: "Сайты без лишней сложности",
			}),
			title: createPhotonLocalizedDefault({
				en: "Разрабатываем сайты",
				ru: "Разрабатываем сайты",
			}),
			highlightedTitle: createPhotonLocalizedDefault({
				en: "под задачу и рост",
				ru: "под задачу и рост",
			}),
			supportingTexts: [
				"Запускаем сайты для бизнеса в трёх форматах: готовые решения, сборка через конструктор и индивидуальная разработка.",
				"Помогаем выбрать формат под ваш бюджет, сроки и сценарий продаж, чтобы не переплачивать за лишнее.",
				"От лендингов и корпоративных сайтов до интернет-магазинов и каталогов услуг, с понятной сборкой и запуском.",
			],
			primaryCta: { label: "Подобрать формат", href: "#pricing" },
			secondaryCta: { label: "Посмотреть услуги", href: "#services" },
			leadCapture: {
				placeholder: "+1 555 123 4567",
				buttonLabel: "Отправить",
				helperText:
					"Оставьте номер, и мы подскажем, какой формат сайта подойдёт под вашу задачу.",
			},
			featurePills: [
				{ icon: "layoutTemplate", label: "Лендинги и корпоративные" },
				{ icon: "packageCheck", label: "Готовые решения" },
				{ icon: "blocks", label: "Конструктор модулей" },
				{ icon: "wandSparkles", label: "Custom-разработка" },
			],
			stats: [
				{ value: 14, suffix: "+", label: "Лет в digital-разработке" },
				{ value: 4, suffix: "", label: "Типа сайтов в линейке" },
				{ value: 3, suffix: "", label: "Формата запуска" },
				{ value: 100, suffix: "%", label: "Контроль финальной сборки" },
			],
		},
	});
