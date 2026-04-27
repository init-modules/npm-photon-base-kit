"use client";

import {
	createPhotonLocalizedDefault,
	definePhotonBlockDefinition,
	EditableText,
	EditableTextarea,
	type PhotonBlockComponentProps,
	type PhotonField,
} from "@init/photon/public";
import {
	createInitLandingBlockLocalizationSchema,
	type InitLandingProcessStep,
	revealClassName,
	sectionFrameClassName,
	useInitLandingReveal,
	useInitLandingSectionBleedStyle,
	useInitLandingSurfaceBreakpoints,
} from "./shared";

export type InitLandingProcessProps = {
	description: string;
	eyebrow: string;
	sectionId: string;
	steps: InitLandingProcessStep[];
	title: string;
};

const fields: PhotonField[] = [
	{
		path: "sectionId",
		label: "Section id",
		kind: "text",
		group: "layout",
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
			{ path: "description", label: "Description", kind: "textarea" },
		],
	},
];

const InitLandingProcessBlock = ({
	block,
}: PhotonBlockComponentProps<InitLandingProcessProps>) => {
	const sectionRef = useInitLandingReveal<HTMLDivElement>();
	const bleedStyle = useInitLandingSectionBleedStyle();
	const { ref, atLeastMd, atLeastLg } = useInitLandingSurfaceBreakpoints();

	return (
		<section
			ref={ref}
			id={block.props.sectionId}
			className={[
				"bg-[var(--photon-site-surface)] py-24",
				atLeastLg ? "py-32" : "",
			].join(" ")}
			style={bleedStyle}
		>
			<div className={sectionFrameClassName} ref={sectionRef}>
				<div
					className={`${revealClassName} mb-16 mx-auto max-w-2xl text-center`}
				>
					<EditableText
						blockId={block.id}
						path="eyebrow"
						className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--photon-site-accent)]"
					/>
					<EditableText
						blockId={block.id}
						path="title"
						as="h2"
						className={[
							"text-balance font-semibold tracking-tight text-[var(--photon-site-text)]",
							atLeastLg ? "text-4xl" : "text-3xl",
						].join(" ")}
					/>
					<EditableTextarea
						blockId={block.id}
						path="description"
						className="mt-4 text-lg text-[var(--photon-site-muted-text)]"
					/>
				</div>

				<div className="relative">
					{atLeastLg ? (
						<div className="absolute left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] top-12 h-px bg-[var(--photon-site-border)]" />
					) : null}
					<div
						className={[
							"grid gap-8",
							atLeastLg ? "grid-cols-4 gap-6" : atLeastMd ? "grid-cols-2" : "",
						].join(" ")}
					>
						{block.props.steps.map((step, index) => (
							<div
								key={`${step.number}:${index}`}
								className={`${revealClassName} group relative`}
								style={{ transitionDelay: `${index * 150}ms` }}
							>
								<div className="relative z-10 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[var(--photon-site-border)] bg-[var(--photon-site-background)] transition-all duration-300 group-hover:border-[var(--photon-site-accent)] group-hover:scale-105">
									<span className="text-2xl font-semibold text-[var(--photon-site-accent)]">
										<EditableText
											blockId={block.id}
											path={`steps.${index}.number`}
										/>
									</span>
								</div>
								<div className="text-center">
									<h3 className="mb-3 text-xl font-semibold text-[var(--photon-site-text)]">
										<EditableText
											blockId={block.id}
											path={`steps.${index}.title`}
										/>
									</h3>
									<EditableTextarea
										blockId={block.id}
										path={`steps.${index}.description`}
										className="leading-relaxed text-[var(--photon-site-muted-text)]"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export const initLandingProcessDefinition =
	definePhotonBlockDefinition<InitLandingProcessProps>({
		type: "init-landing-process",
		label: "Init Landing Process",
		description: "Process section from the Init landing page.",
		category: "Content",
		icon: "waypoints",
		component: InitLandingProcessBlock,
		fields,
		localizationSchema: createInitLandingBlockLocalizationSchema(fields),
		defaults: {
			sectionId: "process",
			eyebrow: createPhotonLocalizedDefault({
				en: "Как идём в работу",
				ru: "Как идём в работу",
			}),
			title: createPhotonLocalizedDefault({
				en: "Путь от задачи до запуска без лишней бюрократии",
				ru: "Путь от задачи до запуска без лишней бюрократии",
			}),
			description: createPhotonLocalizedDefault({
				en: "Процесс отличается по глубине, но логика одна: сначала определяем правильный формат, потом собираем и запускаем.",
				ru: "Процесс отличается по глубине, но логика одна: сначала определяем правильный формат, потом собираем и запускаем.",
			}),
			steps: [
				{
					number: "01",
					title: "Разбираем задачу",
					description:
						"Понимаем, что именно вы продаёте, какой формат сайта нужен и насколько уместен готовый вариант, конструктор или custom.",
				},
				{
					number: "02",
					title: "Фиксируем сценарий",
					description:
						"Согласовываем структуру, модули, контентные блоки и объём интеграций. Для конструктора фиксируем состав и стоимость.",
				},
				{
					number: "03",
					title: "Собираем и настраиваем",
					description:
						"На нашей стороне собираем сайт, наводим визуальный порядок, подключаем формы, сервисы и нужные технические детали.",
				},
				{
					number: "04",
					title: "Запускаем",
					description:
						"Проверяем финальную версию, выкатываем проект и передаём вам уже рабочий сайт, а не набор недоделанных блоков.",
				},
			],
		},
	});
