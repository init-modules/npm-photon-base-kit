"use client";

import {
	createWebsiteBuilderLocalizedDefault,
	defineWebsiteBuilderBlockDefinition,
	EditableText,
	EditableTextarea,
	type WebsiteBuilderBlockComponentProps,
	type WebsiteBuilderField,
} from "@init-modules/website-builder/public";
import { InitTestimonialCard, InitTestimonialProfile } from "../../primitives";
import {
	createInitLandingBlockLocalizationSchema,
	type InitLandingTestimonial,
	revealClassName,
	sectionFrameClassName,
	useInitLandingReveal,
	useInitLandingSectionBleedStyle,
	useInitLandingSurfaceBreakpoints,
} from "./shared";

export type InitLandingTestimonialsProps = {
	eyebrow: string;
	items: InitLandingTestimonial[];
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
			{ path: "role", label: "Role", kind: "text" },
		],
	},
];

const InitLandingTestimonialsBlock = ({
	block,
}: WebsiteBuilderBlockComponentProps<InitLandingTestimonialsProps>) => {
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
				</div>
				<div
					className={[
						"grid gap-8",
						atLeastLg ? "grid-cols-3" : atLeastMd ? "grid-cols-2" : "",
					].join(" ")}
				>
					{block.props.items.map((testimonial, index) => (
						<InitTestimonialCard
							key={`${testimonial.author}:${index}`}
							className={revealClassName}
							style={{ transitionDelay: `${index * 150}ms` }}
							quote={
								<EditableTextarea
									blockId={block.id}
									path={`items.${index}.quote`}
								/>
							}
							profile={
								<InitTestimonialProfile
									initials={
										<EditableText
											blockId={block.id}
											path={`items.${index}.initials`}
										/>
									}
									name={
										<EditableText
											blockId={block.id}
											path={`items.${index}.author`}
										/>
									}
									role={
										<EditableText
											blockId={block.id}
											path={`items.${index}.role`}
										/>
									}
								/>
							}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export const initLandingTestimonialsDefinition =
	defineWebsiteBuilderBlockDefinition<InitLandingTestimonialsProps>({
		type: "init-landing-testimonials",
		label: "Init Landing Testimonials",
		description: "Testimonials section from the Init landing page.",
		category: "Content",
		icon: "messages-square",
		component: InitLandingTestimonialsBlock,
		fields,
		localizationSchema: createInitLandingBlockLocalizationSchema(fields),
		defaults: {
			sectionId: "testimonials",
			eyebrow: createWebsiteBuilderLocalizedDefault({
				en: "Что говорят клиенты",
				ru: "Что говорят клиенты",
			}),
			title: createWebsiteBuilderLocalizedDefault({
				en: "Нам доверяют запуск сайтов под разные бизнес-сценарии",
				ru: "Нам доверяют запуск сайтов под разные бизнес-сценарии",
			}),
			items: [
				{
					quote:
						"Нам помогли не уйти в дорогой custom, хотя изначально мы именно туда и смотрели. В итоге запустили сайт быстрее и спокойнее.",
					author: "Алина Ж.",
					role: "Школа и курсы",
					initials: "АЖ",
				},
				{
					quote:
						"Формат с конструктором оказался очень удобным: видели состав модулей, понимали цену и не спорили о том, что входит в проект.",
					author: "Роман Т.",
					role: "Сервисная компания",
					initials: "РТ",
				},
				{
					quote:
						"Когда стало ясно, что нужен нестандартный кабинет и особая логика, команда без проблем перевела проект в custom и дотянула его до запуска.",
					author: "Диана К.",
					role: "Онлайн-сервис",
					initials: "ДК",
				},
			],
		},
	});
