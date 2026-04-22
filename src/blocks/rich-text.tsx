"use client";

import {
	createPhotonLocalizedDefault,
	definePhotonBlockDefinition,
	usePhotonRenderDepth,
	usePhotonStore,
	type PhotonBlock,
} from "@init/photon/public";
import { marketingDemoBlockVariantOptions } from "../block-options";
import { RichText } from "../primitives";
import {
	getMarketingDemoFramelessBleedStyle,
	getMarketingDemoVariantTheme,
	type MarketingDemoBlockVariant,
	resolveMarketingDemoBlockVariant,
} from "../runtime-theme";

type RichTextProps = {
	variant?: MarketingDemoBlockVariant;
	content: string;
};

export const RichTextBlock = ({
	block,
}: {
	block: PhotonBlock<RichTextProps>;
}) => {
	const siteDesign = usePhotonStore(
		(state) => state.site.settings.design,
	);
	const variant = resolveMarketingDemoBlockVariant({
		blockType: "rich-text",
		explicitVariant: block.props.variant,
		siteDesign,
	});
	const theme = getMarketingDemoVariantTheme(variant);
	const renderDepth = usePhotonRenderDepth();
	const frameless = theme.surfaceStyle === "frameless";

	return (
		<section
			className={`${theme.surface} px-5 py-5 sm:px-6 sm:py-6`}
			style={getMarketingDemoFramelessBleedStyle(frameless, renderDepth === 0)}
			data-testid="marketing-demo-rich-text"
			data-marketing-demo-variant={variant}
			data-marketing-demo-surface-style={theme.surfaceStyle}
		>
			<div
				className={[
					"mx-auto min-w-0",
					frameless ? "max-w-4xl" : "max-w-3xl",
				].join(" ")}
			>
				<RichText
					blockId={block.id}
					path="content"
					containerClassName="min-w-0"
					className={[
						theme.richText,
						"[&_blockquote]:text-[var(--photon-site-muted-text)]",
						"[&_h2]:text-[var(--photon-site-text)] [&_h3]:text-[var(--photon-site-text)]",
						"[&_li]:text-[var(--photon-site-text)] [&_p]:text-[var(--photon-site-text)]",
						"[&_strong]:text-[var(--photon-site-text)]",
					].join(" ")}
				/>
			</div>
		</section>
	);
};

export const richTextDefinition =
	definePhotonBlockDefinition<RichTextProps>({
		type: "rich-text",
		label: "Rich Text",
		labelKey: "marketingDemoKit.blocks.richText.label",
		description:
			"Pure rich text section with headings, paragraphs, lists and quotes.",
		descriptionKey: "marketingDemoKit.blocks.richText.description",
		category: "Content",
		icon: "pilcrow",
		component: RichTextBlock,
		defaults: {
			variant: "default",
			content: createPhotonLocalizedDefault({
				en: "<h2>Content mode can now persist richer editorial structure</h2><p>The builder no longer has to flatten everything into plain textareas. This block stores real rich text markup, keeps it in the manifest, survives branch changes and still renders directly on the public website.</p><p>The point is not a detached CMS page. The point is staying on the live surface while editing:</p><ul><li>short narrative paragraphs</li><li>lists for product proof</li><li>quotes or subheads when a section needs rhythm</li></ul><blockquote>The same saved document can feed preview, content mode and profile history.</blockquote>",
				ru: "<h2>Content mode теперь сохраняет более богатую editorial-структуру</h2><p>Builder больше не обязан сплющивать все в обычные textareas. Этот блок хранит настоящий rich text markup, сохраняет его в manifest, переживает переключение веток и при этом рендерится прямо на публичном сайте.</p><p>Смысл не в отдельной CMS-странице. Смысл в том, чтобы оставаться на живой поверхности во время редактирования:</p><ul><li>короткие повествовательные абзацы</li><li>списки для продуктовых доказательств</li><li>цитаты и подзаголовки, когда секции нужен ритм</li></ul><blockquote>Один и тот же сохраненный документ может кормить preview, content mode и историю профиля.</blockquote>",
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
				path: "content",
				label: "Content",
				kind: "rich-text",
				group: "content",
				localization: "localized",
			},
		],
	});
