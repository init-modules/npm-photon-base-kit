"use client";

import {
	createWebsiteBuilderLocalizedDefault,
	defineWebsiteBuilderBlockDefinition,
	EditableRepeaterValue,
	EditableText,
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

type ProofStripProps = {
	variant?: MarketingDemoBlockVariant;
	title: string;
	items: Array<{
		label: string;
		value: string;
	}>;
};

export const ProofStrip = ({
	block,
}: {
	block: WebsiteBuilderBlock<ProofStripProps>;
}) => {
	const siteDesign = useWebsiteBuilderStore(
		(state) => state.site.settings.design,
	);
	const variant = resolveMarketingDemoBlockVariant({
		blockType: "proof-strip",
		explicitVariant: block.props.variant,
		siteDesign,
	});
	const theme = getMarketingDemoVariantTheme(variant);
	const renderDepth = useWebsiteBuilderRenderDepth();
	const framelessRibbon = theme.surfaceStyle === "frameless";
	const { ref, atLeastSm, atLeastMd, atLeastXl } =
		useSurfaceBreakpoints<HTMLElement>();

	return (
		<section
			ref={ref}
			className={[theme.surface, "px-5 py-6", atLeastSm ? "px-8" : ""].join(
				" ",
			)}
			style={getMarketingDemoFramelessBleedStyle(
				framelessRibbon,
				renderDepth === 0,
			)}
			data-testid="marketing-demo-proof-strip"
			data-marketing-demo-variant={variant}
			data-marketing-demo-surface-style={theme.surfaceStyle}
		>
			<EditableText
				blockId={block.id}
				path="title"
				as="h2"
				className={theme.label}
			/>
			<div
				className={`mt-6 grid gap-3 ${
					framelessRibbon
						? atLeastXl
							? "grid-cols-4"
							: atLeastSm
								? "grid-cols-2"
								: ""
						: atLeastMd
							? "grid-cols-4"
							: ""
				}`}
			>
				{block.props.items.map((_, index) => (
					<div
						key={`${block.id}-proof-${index}`}
						className={`${theme.panel} ${
							framelessRibbon
								? `px-0 py-4 ${atLeastSm ? "pl-5 pr-0" : ""}`
								: "px-4 py-5"
						}`}
					>
						<EditableRepeaterValue
							blockId={block.id}
							path={`items.${index}.value`}
							as="div"
							className={`text-3xl font-semibold tracking-[-0.04em] ${theme.emphasisText}`}
						/>
						<EditableRepeaterValue
							blockId={block.id}
							path={`items.${index}.label`}
							as="div"
							className={`mt-2 ${theme.mutedBody}`}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export const proofStripDefinition =
	defineWebsiteBuilderBlockDefinition<ProofStripProps>({
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
			title: createWebsiteBuilderLocalizedDefault({
				en: "What the MVP already proves",
				ru: "Что уже доказывает текущий MVP",
			}),
			items: createWebsiteBuilderLocalizedDefault({
				en: [
					{
						value: "2 modes",
						label: "Content editing and structural builder mode",
					},
					{
						value: "2 runtimes",
						label: "Next.js rendering contract plus Laravel manifest contract",
					},
					{
						value: "2 package layers",
						label: "Foundation package and installable integration kit",
					},
					{
						value: "1 live canvas",
						label: "Editing happens on the actual website surface",
					},
				],
				ru: [
					{
						value: "2 режима",
						label: "Контентное редактирование и structural builder mode",
					},
					{
						value: "2 рантайма",
						label:
							"Контракт рендера Next.js плюс контракт manifest-провайдера Laravel",
					},
					{
						value: "2 слоя пакетов",
						label: "Foundation package и installable integration kit",
					},
					{
						value: "1 живой холст",
						label:
							"Редактирование происходит прямо на реальной поверхности сайта",
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
				path: "title",
				label: "Title",
				kind: "text",
				group: "content",
				localization: "localized",
			},
			{
				path: "items",
				label: "Metric items",
				kind: "repeater",
				group: "data",
				localization: "localized",
				itemLabelPath: "label",
				addLabel: "Add metric item",
				fields: [
					{
						path: "value",
						label: "Value",
						kind: "text",
						localization: "shared",
					},
					{ path: "label", label: "Label", kind: "text" },
				],
			},
		],
	});
