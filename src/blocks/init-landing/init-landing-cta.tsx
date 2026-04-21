"use client";

import {
	createWebsiteBuilderLocalizedDefault,
	defineWebsiteBuilderBlockDefinition,
	EditableText,
	EditableTextarea,
	useWebsiteBuilderStore,
	type WebsiteBuilderBlockComponentProps,
	type WebsiteBuilderField,
} from "@init-modules/website-builder/public";
import {
	ArrowRightIcon,
	createInitLandingBlockLocalizationSchema,
	type InitLandingAction,
	InitLandingActionButton,
	revealClassName,
	sectionFrameClassName,
	useInitLandingReveal,
	useInitLandingSectionBleedStyle,
	useInitLandingSurfaceBreakpoints,
} from "./shared";

export type InitLandingCtaProps = {
	description: string;
	note: string;
	primaryCta: InitLandingAction;
	secondaryCta: InitLandingAction;
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
		path: "note",
		label: "Note",
		kind: "text",
		group: "content",
		localization: "localized",
	},
];

const InitLandingCtaBlock = ({
	block,
}: WebsiteBuilderBlockComponentProps<InitLandingCtaProps>) => {
	const mode = useWebsiteBuilderStore((state) => state.mode);
	const sectionRef = useInitLandingReveal<HTMLDivElement>();
	const bleedStyle = useInitLandingSectionBleedStyle();
	const { ref, atLeastSm, atLeastLg, atLeastXl } =
		useInitLandingSurfaceBreakpoints();
	const reveal =
		mode === "preview" ? revealClassName : "translate-y-0 opacity-100";

	return (
		<section
			ref={ref}
			id={block.props.sectionId}
			className={[
				"relative overflow-hidden bg-[var(--wb-site-text)] py-24",
				atLeastLg ? "py-32" : "",
			].join(" ")}
			style={bleedStyle}
		>
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -right-1/4 -top-1/2 h-[600px] w-[600px] rounded-full bg-[color-mix(in_srgb,var(--wb-site-accent)_10%,transparent)] blur-[120px]" />
				<div className="absolute -bottom-1/2 -left-1/4 h-[400px] w-[400px] rounded-full bg-[color-mix(in_srgb,var(--wb-site-accent)_5%,transparent)] blur-[100px]" />
			</div>
			<div className={`relative ${sectionFrameClassName}`} ref={sectionRef}>
				<div className="mx-auto max-w-3xl text-center">
					<EditableText
						blockId={block.id}
						path="title"
						as="h2"
						className={[
							reveal,
							"text-balance font-semibold tracking-tight text-[var(--wb-site-background)]",
							atLeastXl ? "text-5xl" : atLeastLg ? "text-4xl" : "text-3xl",
						].join(" ")}
					/>
					<EditableTextarea
						blockId={block.id}
						path="description"
						className={`${reveal} mt-6 text-lg leading-relaxed text-[color-mix(in_srgb,var(--wb-site-background)_70%,transparent)]`}
					/>
					<div
						className={[
							reveal,
							"mt-10 flex items-center justify-center gap-4",
							atLeastSm ? "flex-row" : "flex-col",
						].join(" ")}
					>
						<InitLandingActionButton
							href={block.props.primaryCta.href}
							inverted
						>
							{block.props.primaryCta.label}
							<ArrowRightIcon className="ml-2 h-4 w-4" />
						</InitLandingActionButton>
						<InitLandingActionButton
							href={block.props.secondaryCta.href}
							inverted
							outline
						>
							{block.props.secondaryCta.label}
						</InitLandingActionButton>
					</div>
					<EditableText
						blockId={block.id}
						path="note"
						className={`${reveal} mt-8 text-sm text-[color-mix(in_srgb,var(--wb-site-background)_50%,transparent)]`}
					/>
				</div>
			</div>
		</section>
	);
};

export const initLandingCtaDefinition =
	defineWebsiteBuilderBlockDefinition<InitLandingCtaProps>({
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
			title: createWebsiteBuilderLocalizedDefault({
				en: "Нужен сайт, но непонятно с какого формата начать?",
				ru: "Нужен сайт, но непонятно с какого формата начать?",
			}),
			description: createWebsiteBuilderLocalizedDefault({
				en: "Опишите задачу, а мы скажем, где хватит готового решения, где лучше собрать сайт через конструктор, а где действительно нужен custom.",
				ru: "Опишите задачу, а мы скажем, где хватит готового решения, где лучше собрать сайт через конструктор, а где действительно нужен custom.",
			}),
			primaryCta: { label: "Оставить запрос", href: "mailto:hello@init.dev" },
			secondaryCta: { label: "hello@init.dev", href: "mailto:hello@init.dev" },
			note: createWebsiteBuilderLocalizedDefault({
				en: "Короткий разбор задачи без обязательств",
				ru: "Короткий разбор задачи без обязательств",
			}),
		},
	});
