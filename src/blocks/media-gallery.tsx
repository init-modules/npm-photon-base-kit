"use client";

import {
	createWebsiteBuilderLocalizedDefault,
	defineWebsiteBuilderBlockDefinition,
	EditableGallery,
	EditableText,
	EditableTextarea,
	useWebsiteBuilderRenderDepth,
	useWebsiteBuilderStore,
	type WebsiteBuilderBlock,
} from "@init-modules/website-builder/public";
import type { CSSProperties } from "react";
import { marketingDemoBlockVariantOptions } from "../block-options";
import {
	getMarketingDemoFramelessBleedStyle,
	getMarketingDemoVariantTheme,
	type MarketingDemoBlockVariant,
	resolveMarketingDemoBlockVariant,
} from "../runtime-theme";

type GalleryThemeStyle = CSSProperties &
	Record<`--wb-gallery-${string}`, string>;

const galleryToneStyles: Record<"default" | "light", GalleryThemeStyle> = {
	default: {},
	light: {
		"--wb-gallery-card-border": "rgba(231, 229, 228, 0.95)",
		"--wb-gallery-card-bg":
			"linear-gradient(180deg, rgba(255,255,255,0.98), rgba(245,240,231,0.96))",
		"--wb-gallery-card-shadow": "0 18px 40px rgba(120, 113, 108, 0.12)",
		"--wb-gallery-fallback-bg":
			"radial-gradient(circle_at_top,rgba(217,119,6,0.08),transparent_28%),linear-gradient(180deg,rgba(255,251,245,0.96),rgba(243,234,219,0.98))",
		"--wb-gallery-fallback-text": "rgb(120 113 108 / 0.9)",
		"--wb-gallery-chip-border": "rgba(214, 211, 209, 0.9)",
		"--wb-gallery-chip-bg": "rgba(255, 255, 255, 0.88)",
		"--wb-gallery-chip-text": "rgb(120 113 108 / 0.9)",
		"--wb-gallery-chip-accent-border": "rgba(13, 148, 136, 0.24)",
		"--wb-gallery-chip-accent-bg": "rgba(240, 253, 250, 0.96)",
		"--wb-gallery-chip-accent-text": "rgb(15 118 110 / 0.92)",
		"--wb-gallery-control-border": "rgba(214, 211, 209, 0.96)",
		"--wb-gallery-control-bg": "rgba(255, 255, 255, 0.9)",
		"--wb-gallery-control-text": "rgb(87 83 78 / 0.88)",
		"--wb-gallery-remove-border": "rgba(251, 113, 133, 0.28)",
		"--wb-gallery-remove-bg": "rgba(255, 241, 242, 0.92)",
		"--wb-gallery-remove-text": "rgb(190 24 93 / 0.84)",
		"--wb-gallery-label": "rgb(120 113 108 / 0.92)",
		"--wb-gallery-caption": "rgb(68 64 60 / 0.9)",
		"--wb-gallery-file-border": "rgba(231, 229, 228, 0.96)",
		"--wb-gallery-file-bg": "rgba(255, 255, 255, 0.9)",
		"--wb-gallery-file-text": "rgb(120 113 108 / 0.88)",
		"--wb-gallery-empty-border": "rgba(214, 211, 209, 0.9)",
		"--wb-gallery-empty-bg":
			"linear-gradient(180deg, #fffdf8 0%, #f3eadb 100%)",
		"--wb-gallery-empty-text": "rgb(87 83 78 / 0.74)",
		"--wb-gallery-empty-shadow": "0 18px 40px rgba(120, 113, 108, 0.12)",
		"--wb-gallery-empty-title": "rgb(28 25 23 / 0.96)",
		"--wb-gallery-empty-body": "rgb(87 83 78 / 0.84)",
		"--wb-gallery-empty-button-border": "rgb(28 25 23 / 0.96)",
		"--wb-gallery-empty-button-bg": "rgb(28 25 23 / 0.96)",
		"--wb-gallery-empty-button-text": "rgb(250 250 249 / 1)",
		"--wb-gallery-add-border": "rgba(214, 211, 209, 0.92)",
		"--wb-gallery-add-bg": "linear-gradient(180deg, #fffdf8 0%, #f3eadb 100%)",
		"--wb-gallery-add-text": "rgb(87 83 78 / 0.74)",
		"--wb-gallery-add-title": "rgb(28 25 23 / 0.96)",
		"--wb-gallery-add-body": "rgb(87 83 78 / 0.84)",
		"--wb-gallery-add-button-border": "rgb(28 25 23 / 0.96)",
		"--wb-gallery-add-button-bg": "rgb(28 25 23 / 0.96)",
		"--wb-gallery-add-button-text": "rgb(250 250 249 / 1)",
	},
};

type MediaGalleryProps = {
	variant?: MarketingDemoBlockVariant;
	eyebrow: string;
	title: string;
	body: string;
	emptyTitle: string;
	emptyBody: string;
	items: Array<{
		id: string;
		media: string;
		alt: string;
		caption: string;
	}>;
};

export const MediaGallery = ({
	block,
}: {
	block: WebsiteBuilderBlock<MediaGalleryProps>;
}) => {
	const siteDesign = useWebsiteBuilderStore(
		(state) => state.site.settings.design,
	);
	const variant = resolveMarketingDemoBlockVariant({
		blockType: "media-gallery",
		explicitVariant: block.props.variant,
		siteDesign,
	});
	const theme = getMarketingDemoVariantTheme(variant);
	const renderDepth = useWebsiteBuilderRenderDepth();
	const galleryTone = variant === "air" ? "light" : "default";
	const galleryThemeStyle = galleryToneStyles[galleryTone];
	const framelessGallery = theme.surfaceStyle === "frameless";
	const resolvedGalleryThemeStyle = framelessGallery
		? {
				...galleryThemeStyle,
				"--wb-gallery-card-border": "transparent",
				"--wb-gallery-file-border": "transparent",
				"--wb-gallery-empty-border": "transparent",
				"--wb-gallery-add-border": "transparent",
				"--wb-gallery-chip-border": "transparent",
				"--wb-gallery-control-border": "transparent",
			}
		: galleryThemeStyle;

	return (
		<section
			className={`${theme.surface} px-5 py-5 sm:px-6`}
			style={getMarketingDemoFramelessBleedStyle(
				framelessGallery,
				renderDepth === 0,
			)}
			data-testid="marketing-demo-media-gallery"
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
					as="h3"
					className={`mt-4 block text-balance text-2xl font-semibold tracking-[-0.04em] sm:text-3xl ${theme.emphasisText}`}
				/>
				<EditableTextarea
					blockId={block.id}
					path="body"
					className={`mt-4 max-w-2xl ${theme.mutedBody}`}
				/>
			</div>

			<div
				className="mt-6"
				data-marketing-demo-gallery-tone={galleryTone}
				style={resolvedGalleryThemeStyle}
			>
				<EditableGallery
					blockId={block.id}
					path="items"
					columnsClassName={`grid gap-4 ${
						variant === "air"
							? "md:grid-cols-2 xl:grid-cols-3"
							: "[grid-template-columns:repeat(auto-fit,minmax(min(100%,14rem),1fr))]"
					}`}
					emptyTitle={String(block.props.emptyTitle)}
					emptyBody={String(block.props.emptyBody)}
				/>
			</div>
		</section>
	);
};

export const mediaGalleryDefinition =
	defineWebsiteBuilderBlockDefinition<MediaGalleryProps>({
		type: "media-gallery",
		label: "Media Gallery",
		labelKey: "marketingDemoKit.blocks.mediaGallery.label",
		description:
			"Uploadable gallery block for editorial grids, product stills and visual proof.",
		descriptionKey: "marketingDemoKit.blocks.mediaGallery.description",
		category: "Media",
		icon: "layout-grid",
		component: MediaGallery,
		defaults: {
			variant: "default",
			eyebrow: createWebsiteBuilderLocalizedDefault({
				en: "Media workflow",
				ru: "Медиа workflow",
			}),
			title: createWebsiteBuilderLocalizedDefault({
				en: "Temporary uploads now have a real home inside the builder",
				ru: "Временные загрузки теперь живут в builder по-настоящему",
			}),
			body: createWebsiteBuilderLocalizedDefault({
				en: "This block exists to prove the media pipeline, not just decorate the demo. Upload a few images, reorder them, edit alt text and captions, then save a new profile revision to finalize them on the backend.",
				ru: "Этот блок нужен не только для красоты, а чтобы доказать media-pipeline. Загрузите несколько изображений, поменяйте их порядок, поправьте alt-текст и подписи, а затем сохраните документ, чтобы финализировать их на бэкенде.",
			}),
			emptyTitle: createWebsiteBuilderLocalizedDefault({
				en: "Build a live media gallery",
				ru: "Соберите живую медиа-галерею",
			}),
			emptyBody: createWebsiteBuilderLocalizedDefault({
				en: "Upload stills, product frames or editorial images and keep them editable directly on the page.",
				ru: "Загружайте кадры продукта, stills или editorial-изображения и редактируйте их прямо на странице.",
			}),
			items: createWebsiteBuilderLocalizedDefault({
				en: [
					{
						id: "gallery-1",
						media:
							"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
						alt: "Product team aligning on a laptop",
						caption: "Live edits happen on the actual website surface.",
					},
					{
						id: "gallery-2",
						media:
							"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
						alt: "Desk setup with laptop and keyboard",
						caption: "Sticky rails and dark surfaces keep the canvas legible.",
					},
					{
						id: "gallery-3",
						media:
							"https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
						alt: "Hands working in a website editor",
						caption:
							"Autosave and finalize flow should feel invisible to the editor.",
					},
				],
				ru: [
					{
						id: "gallery-1",
						media:
							"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
						alt: "Команда продукта работает за ноутбуком",
						caption:
							"Живые правки происходят прямо на реальной поверхности сайта.",
					},
					{
						id: "gallery-2",
						media:
							"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
						alt: "Рабочий стол с ноутбуком и клавиатурой",
						caption:
							"Sticky-колонки и темные поверхности делают холст читаемым.",
					},
					{
						id: "gallery-3",
						media:
							"https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
						alt: "Руки работают в интерфейсе редактора сайта",
						caption:
							"Autosave и финализация должны быть практически незаметны для редактора.",
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
				path: "emptyTitle",
				label: "Empty title",
				kind: "text",
				group: "content",
				localization: "localized",
			},
			{
				path: "emptyBody",
				label: "Empty body",
				kind: "textarea",
				group: "content",
				localization: "localized",
			},
			{
				path: "items",
				label: "Gallery items",
				kind: "gallery",
				group: "content",
				localization: "localized",
				description:
					"Upload, reorder and annotate images without leaving Builder mode.",
			},
		],
	});
