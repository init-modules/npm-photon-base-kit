"use client";

import {
	createPhotonLocalizedDefault,
	definePhotonBlockDefinition,
	EditableText,
	EditableTextarea,
	usePhotonRenderDepth,
	usePhotonStore,
	type PhotonBlock,
	type PhotonBlockDefinition,
	PhotonLink,
} from "@init/photon/public";
import { marketingDemoBlockVariantOptions } from "../block-options";
import {
	getMarketingDemoFramelessBleedStyle,
	getMarketingDemoVariantTheme,
	type MarketingDemoBlockVariant,
	resolveMarketingDemoBlockVariant,
} from "../runtime-theme";

type NotFoundBlockProps = {
	variant?: MarketingDemoBlockVariant;
	eyebrow: string;
	title: string;
	body: string;
	primaryLabel: string;
	primaryHref: string;
	secondaryLabel: string;
	secondaryHref: string;
};

const NotFoundBlock = ({
	block,
}: {
	block: PhotonBlock<NotFoundBlockProps>;
}) => {
	const siteDesign = usePhotonStore((state) => state.site.settings.design);
	const variant = resolveMarketingDemoBlockVariant({
		blockType: "not-found",
		explicitVariant: block.props.variant,
		siteDesign,
	});
	const theme = getMarketingDemoVariantTheme(variant);
	const renderDepth = usePhotonRenderDepth();
	const frameless = theme.surfaceStyle === "frameless";

	return (
		<section
			className={`${theme.heroSurface} px-6 py-16 sm:px-10 sm:py-24`}
			style={getMarketingDemoFramelessBleedStyle(frameless, renderDepth === 0)}
			data-testid="marketing-demo-not-found"
			data-marketing-demo-variant={variant}
			data-marketing-demo-surface-style={theme.surfaceStyle}
		>
			<div className="mx-auto flex min-w-0 max-w-3xl flex-col items-center text-center">
				<EditableText
					blockId={block.id}
					path="eyebrow"
					className={`${theme.pill} mx-auto`}
				/>
				<EditableText
					blockId={block.id}
					path="title"
					as="h1"
					className={`mt-6 block text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl ${theme.emphasisText}`}
				/>
				<EditableTextarea
					blockId={block.id}
					path="body"
					className={`mt-5 max-w-xl ${theme.body}`}
				/>
				<div className="mt-8 flex flex-wrap justify-center gap-3">
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
		</section>
	);
};

export const notFoundDefinition: PhotonBlockDefinition<NotFoundBlockProps> =
	definePhotonBlockDefinition<NotFoundBlockProps>({
		type: "not-found",
		label: "Page not found",
		labelKey: "marketingDemoKit.blocks.notFound.label",
		description: "Friendly 404 hero with home and back-to-site CTAs.",
		descriptionKey: "marketingDemoKit.blocks.notFound.description",
		category: "Utility",
		icon: "compass",
		component: NotFoundBlock,
		defaults: {
			variant: "default",
			eyebrow: createPhotonLocalizedDefault({
				en: "404",
				ru: "404",
			}),
			title: createPhotonLocalizedDefault({
				en: "This page is off the map",
				ru: "Такой страницы здесь нет",
			}),
			body: createPhotonLocalizedDefault({
				en: "The link you followed may be broken, or the page may have been moved. Pick a destination below — the rest of the site is still online.",
				ru: "Ссылка может быть устаревшей, либо страницу перенесли. Выберите, куда отправиться дальше — остальной сайт работает как обычно.",
			}),
			primaryLabel: createPhotonLocalizedDefault({
				en: "Back to homepage",
				ru: "На главную",
			}),
			primaryHref: "/",
			secondaryLabel: createPhotonLocalizedDefault({
				en: "Browse the site",
				ru: "Посмотреть сайт",
			}),
			secondaryHref: "/",
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
		],
	});
