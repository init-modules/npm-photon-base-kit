"use client";

import {
	createWebsiteBuilderLocalizedDefault,
	defineWebsiteBuilderBlockDefinition,
	EditableRepeaterValue,
	EditableText,
	EditableTextarea,
	useWebsiteBuilderRenderDepth,
	useWebsiteBuilderStore,
	type WebsiteBuilderBlock,
} from "@init-modules/website-builder/public";
import { marketingDemoBlockVariantOptions } from "../block-options";
import { useSurfaceBreakpoints } from "../hooks/use-surface-breakpoints";
import {
	getMarketingDemoFramelessBleedStyle,
	getMarketingDemoVariantTheme,
	type MarketingDemoBlockVariant,
	resolveMarketingDemoBlockVariant,
} from "../runtime-theme";

type FeatureGridProps = {
	variant?: MarketingDemoBlockVariant;
	eyebrow: string;
	title: string;
	body: string;
	features: Array<{
		title: string;
		body: string;
	}>;
};

export const FeatureGrid = ({
	block,
}: {
	block: WebsiteBuilderBlock<FeatureGridProps>;
}) => {
	const siteDesign = useWebsiteBuilderStore(
		(state) => state.site.settings.design,
	);
	const variant = resolveMarketingDemoBlockVariant({
		blockType: "feature-grid",
		explicitVariant: block.props.variant,
		siteDesign,
	});
	const theme = getMarketingDemoVariantTheme(variant);
	const renderDepth = useWebsiteBuilderRenderDepth();
	const framelessGrid = theme.surfaceStyle === "frameless";
	const { ref, atLeastSm, atLeastMd, atLeastLg, atLeastXl } =
		useSurfaceBreakpoints<HTMLElement>();

	return (
		<section
			ref={ref}
			className={[
				theme.surface,
				"px-5 py-8",
				atLeastSm ? "px-6 py-9" : "",
			].join(" ")}
			style={getMarketingDemoFramelessBleedStyle(
				framelessGrid,
				renderDepth === 0,
			)}
			data-testid="marketing-demo-feature-grid"
			data-marketing-demo-variant={variant}
			data-marketing-demo-surface-style={theme.surfaceStyle}
		>
			<div className="min-w-0 max-w-3xl">
				<EditableText
					blockId={block.id}
					path="eyebrow"
					className={theme.eyebrow}
				/>
				<EditableText
					blockId={block.id}
					path="title"
					as="h2"
					className={`mt-4 ${theme.title}`}
				/>
				<EditableTextarea
					blockId={block.id}
					path="body"
					className={`mt-5 ${theme.body}`}
				/>
			</div>

			<div
				className={`mt-8 grid gap-4 ${
					framelessGrid
						? atLeastXl
							? "grid-cols-3"
							: atLeastMd
								? "grid-cols-2"
								: ""
						: "[grid-template-columns:repeat(auto-fit,minmax(min(100%,15rem),1fr))]"
				}`}
			>
				{block.props.features.map((_, index) => (
					<article
						key={`${block.id}-feature-${index}`}
						className={`${theme.panel} min-w-0 px-5 py-6 ${
							framelessGrid && index === 0 && atLeastMd ? "col-span-2" : ""
						}`}
					>
						<div className={theme.numberBadge}>{index + 1}</div>
						<EditableRepeaterValue
							blockId={block.id}
							path={`features.${index}.title`}
							as="h3"
							className={`block text-balance text-xl font-semibold tracking-[-0.03em] ${theme.emphasisText}`}
						/>
						<EditableRepeaterValue
							blockId={block.id}
							path={`features.${index}.body`}
							as="p"
							className={`mt-3 block ${theme.mutedBody}`}
						/>
					</article>
				))}
			</div>
		</section>
	);
};

export const featureGridDefinition =
	defineWebsiteBuilderBlockDefinition<FeatureGridProps>({
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
			eyebrow: createWebsiteBuilderLocalizedDefault({
				en: "Editor capabilities",
				ru: "Возможности редактора",
			}),
			title: createWebsiteBuilderLocalizedDefault({
				en: "One framework, two editor personalities",
				ru: "Один фреймворк, два режима работы редактора",
			}),
			body: createWebsiteBuilderLocalizedDefault({
				en: "The same manifest powers public rendering, inline content edits and the full builder chrome. Domain teams can publish their own kits instead of patching a single giant application.",
				ru: "Один и тот же manifest питает публичный рендер, inline-редактирование контента и полный builder chrome. Доменные команды могут публиковать свои kit-пакеты вместо патчей в одно монолитное приложение.",
			}),
			features: createWebsiteBuilderLocalizedDefault({
				en: [
					{
						title: "Inline content controls",
						body: "Text becomes inputs and textareas directly in the live page. Images expose source controls without leaving the site context.",
					},
					{
						title: "AAA-style builder chrome",
						body: "Palette search, inspector properties and sortable blocks wrap the page only when the editor enters Builder mode.",
					},
					{
						title: "Package-driven integrations",
						body: "Publication, listing or custom business domains can ship both PHP manifest providers and matching npm component kits.",
					},
				],
				ru: [
					{
						title: "Inline-контролы контента",
						body: "Текст превращается в inputs и textareas прямо на живой странице. Изображения открывают source-контролы без выхода из контекста сайта.",
					},
					{
						title: "Builder chrome уровня продукта",
						body: "Palette search, inspector properties и sortable blocks оборачивают страницу только когда редактор входит в Builder mode.",
					},
					{
						title: "Package-driven интеграции",
						body: "Publication, listing и кастомные домены могут поставлять и PHP manifest providers, и соответствующие npm component kits.",
					},
				],
			}),
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
				path: "body",
				label: "Body",
				kind: "textarea",
				group: "content",
				localization: "localized",
			},
			{
				path: "features",
				label: "Feature cards",
				kind: "repeater",
				group: "data",
				localization: "localized",
				itemLabelPath: "title",
				addLabel: "Add feature card",
				fields: [
					{ path: "title", label: "Title", kind: "text" },
					{ path: "body", label: "Body", kind: "textarea" },
				],
			},
		],
	});
