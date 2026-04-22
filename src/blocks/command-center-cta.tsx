"use client";

import {
	createPhotonLocalizedDefault,
	definePhotonBlockDefinition,
	EditableRepeaterValue,
	EditableText,
	EditableTextarea,
	usePhotonRenderDepth,
	usePhotonStore,
	type PhotonBlock,
	PhotonLink,
} from "@init/photon/public";
import { marketingDemoBlockVariantOptions } from "../block-options";
import {
	getMarketingDemoFramelessBleedStyle,
	getMarketingDemoVariantTheme,
	type MarketingDemoBlockVariant,
	resolveMarketingDemoBlockVariant,
} from "../runtime-theme";

type CommandCenterCtaProps = {
	variant?: MarketingDemoBlockVariant;
	badge: string;
	title: string;
	body: string;
	primaryLabel: string;
	primaryHref: string;
	secondaryLabel: string;
	secondaryHref: string;
	panelEyebrow: string;
	panelLabel: string;
	panelItems: string[];
};

export const CommandCenterCta = ({
	block,
}: {
	block: PhotonBlock<CommandCenterCtaProps>;
}) => {
	const siteDesign = usePhotonStore(
		(state) => state.site.settings.design,
	);
	const variant = resolveMarketingDemoBlockVariant({
		blockType: "command-center-cta",
		explicitVariant: block.props.variant,
		siteDesign,
	});
	const theme = getMarketingDemoVariantTheme(variant);
	const renderDepth = usePhotonRenderDepth();
	const centered = variant === "air";
	const framelessCta = theme.surfaceStyle === "frameless";

	return (
		<section
			className={`${theme.heroSurface} px-5 py-7 sm:px-6 sm:py-8`}
			style={getMarketingDemoFramelessBleedStyle(
				framelessCta,
				renderDepth === 0,
			)}
			data-testid="marketing-demo-command-center-cta"
			data-marketing-demo-variant={variant}
			data-marketing-demo-surface-style={theme.surfaceStyle}
		>
			<div
				className={`grid min-w-0 gap-6 items-center ${
					centered
						? "mx-auto max-w-5xl lg:grid-cols-[minmax(0,1fr)]"
						: "[grid-template-columns:repeat(auto-fit,minmax(min(100%,18rem),1fr))]"
				}`}
			>
				<div className={`min-w-0 ${centered ? "text-center" : ""}`}>
					<EditableText
						blockId={block.id}
						path="badge"
						className={`${theme.pill} ${centered ? "mx-auto" : ""}`}
					/>
					<EditableText
						blockId={block.id}
						path="title"
						as="h2"
						className={`mt-4 block text-balance text-3xl font-semibold leading-[1.03] tracking-[-0.05em] ${
							centered ? "sm:text-5xl" : "sm:text-4xl xl:text-5xl"
						} ${theme.emphasisText}`}
					/>
					<EditableTextarea
						blockId={block.id}
						path="body"
						className={`mt-5 max-w-2xl ${theme.body} ${
							centered ? "mx-auto" : ""
						}`}
					/>

					<div
						className={`mt-7 flex gap-3 ${
							centered ? "justify-center flex-wrap" : "flex-col sm:flex-row"
						}`}
					>
						<PhotonLink
							href={String(block.props.primaryHref)}
							className={theme.primaryButton}
						>
							<EditableText
								blockId={block.id}
								path="primaryLabel"
								className="text-sm font-semibold"
							/>
						</PhotonLink>
						<PhotonLink
							href={String(block.props.secondaryHref)}
							className={theme.secondaryButton}
						>
							<EditableText
								blockId={block.id}
								path="secondaryLabel"
								className="text-sm font-semibold"
							/>
						</PhotonLink>
					</div>
				</div>

				<div
					className={`${theme.panel} min-w-0 ${
						framelessCta ? "px-0 py-5 sm:pl-6 sm:pr-0" : "p-5"
					}`}
				>
					<div className={theme.label}>
						<EditableText blockId={block.id} path="panelEyebrow" />
					</div>
					<EditableText
						blockId={block.id}
						path="panelLabel"
						className={`mt-4 block text-2xl font-semibold tracking-[-0.04em] ${theme.emphasisText}`}
					/>
					<div className="mt-6 space-y-3">
						{block.props.panelItems.map((_, index) => (
							<div
								key={`${block.id}-panel-item-${index}`}
								className={`rounded-2xl px-4 py-3 text-sm leading-6 ${theme.listItem}`}
							>
								<EditableRepeaterValue
									blockId={block.id}
									path={`panelItems.${index}`}
									as="span"
									className="block text-sm leading-6"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export const commandCenterCtaDefinition =
	definePhotonBlockDefinition<CommandCenterCtaProps>({
		type: "command-center-cta",
		label: "Command Center CTA",
		labelKey: "marketingDemoKit.blocks.commandCenterCta.label",
		description: "Closing conversion block for the framework narrative.",
		descriptionKey: "marketingDemoKit.blocks.commandCenterCta.description",
		category: "Conversion",
		icon: "sparkles",
		component: CommandCenterCta,
		defaults: {
			variant: "default",
			badge: createPhotonLocalizedDefault({
				en: "MVP control room",
				ru: "MVP control room",
			}),
			title: createPhotonLocalizedDefault({
				en: "Ship the foundation now, then let domain packages plug into it cleanly",
				ru: "Сначала выпустите foundation, а затем дайте доменным пакетам чисто подключаться к нему",
			}),
			body: createPhotonLocalizedDefault({
				en: "This is the pragmatic path: establish the contract, show the editing experience on the real site, and leave enough extension points so future packages can register blocks without editing the core app every time.",
				ru: "Это прагматичный путь: зафиксировать контракт, показать опыт редактирования на реальном сайте и оставить достаточно extension points, чтобы будущие пакеты регистрировали блоки без правок core app каждый раз.",
			}),
			primaryLabel: createPhotonLocalizedDefault({
				en: "Publish foundation packages",
				ru: "Опубликовать foundation packages",
			}),
			primaryHref: "#publish",
			secondaryLabel: createPhotonLocalizedDefault({
				en: "Read manual",
				ru: "Читать manual",
			}),
			secondaryHref: "#manual",
			panelEyebrow: createPhotonLocalizedDefault({
				en: "System mode",
				ru: "Системный режим",
			}),
			panelLabel: createPhotonLocalizedDefault({
				en: "Builder chrome online",
				ru: "Builder chrome в онлайне",
			}),
			panelItems: createPhotonLocalizedDefault({
				en: [
					"Content editor turns the live site into inputs, uploads and textareas.",
					"Builder mode exposes real layout chrome with drag-and-drop blocks.",
					"Foundation packages define contracts, integrations and renderers.",
				],
				ru: [
					"Content editor превращает живой сайт в inputs, uploads и textareas.",
					"Builder mode открывает настоящий layout chrome с drag-and-drop блоками.",
					"Foundation packages определяют контракты, интеграции и рендереры.",
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
				path: "badge",
				label: "Badge",
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
				path: "primaryLabel",
				label: "Primary CTA",
				kind: "text",
				group: "content",
				localization: "localized",
			},
			{
				path: "primaryHref",
				label: "Primary link",
				kind: "url",
				group: "content",
				localization: "shared",
			},
			{
				path: "secondaryLabel",
				label: "Secondary CTA",
				kind: "text",
				group: "content",
				localization: "localized",
			},
			{
				path: "secondaryHref",
				label: "Secondary link",
				kind: "url",
				group: "content",
				localization: "shared",
			},
			{
				path: "panelLabel",
				label: "Panel label",
				kind: "text",
				group: "content",
				localization: "localized",
			},
			{
				path: "panelEyebrow",
				label: "Panel eyebrow",
				kind: "text",
				group: "content",
				localization: "localized",
			},
			{
				path: "panelItems",
				label: "Panel items",
				kind: "repeater",
				group: "content",
				localization: "localized",
				addLabel: "Add panel item",
				itemLabel: "Panel item",
				itemField: { label: "Panel item", kind: "text" },
			},
		],
	});
