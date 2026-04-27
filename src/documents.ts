import {
	clonePhotonValue,
	setValueAtPath,
	type PhotonBlock,
	type PhotonDocument,
	type PhotonDocumentsMap,
} from "@init/photon/server";
import { applyPhotonSiteDesignPreset } from "@init/photon/shared";
import { createPresetScenarioDocument } from "./profile-presets/preset-scenarios";
import {
	createInitLandingFooterDocument,
	createInitLandingHeaderDocument,
} from "./profile-presets/scenarios/init-landing";
import {
	type MarketingDemoBlockVariant,
	type MarketingDemoBlockVariantMap,
	type MarketingDemoDesignPresetId,
	marketingDemoDesignPresets,
} from "./themes";

export type MarketingDemoLocale = "en" | "ru";

const withoutSiteShellBlocks = (
	document: PhotonDocument,
): PhotonDocument => ({
	...document,
	blocks: document.blocks.filter(
		(block) =>
			block.type !== "site-header-shell" && block.type !== "site-footer-shell",
	),
});

const marketingHomeDocumentBase: PhotonDocument = {
	id: "photon-home",
	name: "Photon Showcase",
	route: "/",
	updatedAt: "2026-03-31T00:00:00.000Z",
	blocks: [
		{
			id: "hero-spotlight",
			module: "marketing-demo",
			type: "hero-spotlight",
			props: {
				eyebrow: "Package-first builder system",
				title: "Edit the real website, not a fake admin copy",
				body: "Photon turns your actual Next.js surface into the editing canvas. Content mode keeps edits inline, while Builder mode opens a full control room with palette, inspector, profile history and nested layout composition.",
				primaryLabel: "Enter builder mode",
				primaryMetaLabel: "Launch",
				primaryHref: "#builder",
				secondaryLabel: "See package architecture",
				secondaryHref: "#packages",
				spotlightLabel: "Target shape",
				spotlightValue: "Next.js + Laravel + installable block kits",
				imageUrl:
					"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
				imageAlt: "Creative team controlling digital product surfaces",
			},
		},
		{
			id: "proof-strip",
			module: "marketing-demo",
			type: "proof-strip",
			props: {
				title: "What the current runtime proves",
				items: [
					{
						value: "Live auth",
						label: "Admins unlock the builder on the same public website",
					},
					{
						value: "History",
						label:
							"Profile revisions capture who changed the live surface and when",
					},
					{
						value: "Split layout",
						label:
							"A true 50/50 horizontal container now ships in the demo document",
					},
					{
						value: "Installable kits",
						label:
							"Frontend kits and backend integrations stay coordinated but decoupled",
					},
				],
			},
		},
		{
			id: "editorial-split-showcase",
			module: "photon-system",
			type: "split-layout",
			props: {
				eyebrow: "Horizontal container system",
				title:
					"A visible 50/50 split with one sticky rail and one editorial stack",
				body: "This is the exact scenario that was missing from the demo. The left side stays sticky with a visual anchor, the right side stacks richer content blocks, and mobile collapses back to a single readable column.",
				gap: 22,
				surface: "glass",
				columns: [
					{
						areaId: "primary",
						label: "Sticky visual",
						width: "minmax(0,1fr)",
						sticky: true,
					},
					{
						areaId: "secondary",
						label: "Editorial stack",
						width: "minmax(0,1fr)",
						sticky: false,
					},
				],
			},
			areas: [
				{
					id: "primary",
					label: "Sticky visual",
					blocks: [
						{
							id: "sticky-media-frame",
							module: "marketing-demo",
							type: "media-frame",
							props: {
								eyebrow: "Sticky media rail",
								title:
									"Horizontal containers finally become obvious in the live demo",
								caption:
									"The left column can stay pinned while the right column scrolls through richer editorial blocks. On mobile the same structure collapses into a clean single-column stack.",
								imageUrl:
									"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
								imageAlt: "Laptop workspace showing a design and editing setup",
							},
						},
					],
				},
				{
					id: "secondary",
					label: "Editorial stack",
					blocks: [
						{
							id: "rich-text",
							module: "marketing-demo",
							type: "rich-text",
							props: {
								content:
									"<h2>Content mode can now persist richer editorial structure</h2><p>The builder no longer has to flatten everything into plain textareas. This block stores real rich text markup, keeps it in the manifest, survives branch changes and still renders directly on the public website.</p><p>The point is not a detached CMS page. The point is staying on the live surface while editing:</p><ul><li>short narrative paragraphs</li><li>lists for product proof</li><li>quotes or subheads when a section needs rhythm</li></ul><blockquote>The same saved document can feed preview, content mode and profile history.</blockquote>",
							},
						},
						{
							id: "publication-spotlight",
							module: "marketing-demo",
							type: "publication-spotlight",
							props: {
								tag: "publication-photon",
								title:
									"A publication package should bring its own blocks and backend manifest producers",
								excerpt:
									"This block represents the future integration path: a publication package exposes manifest fragments on Laravel, and the mirrored npm kit renders the same block family in Next.js with zero copy-paste glue.",
								author: "Lead package architecture",
								readTime: "6 min walkthrough",
								imageUrl:
									"https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80",
								imageAlt: "Editorial workspace with notebooks and camera",
								ctaLabel: "Open package strategy",
								ctaHref: "#packages",
							},
						},
						{
							id: "media-gallery",
							module: "marketing-demo",
							type: "media-gallery",
							props: {
								eyebrow: "Media workflow",
								title:
									"Temporary uploads now have a real home inside the builder",
								body: "Upload a few images, reorder them, annotate captions and save a new profile revision when the gallery is ready.",
								emptyTitle: "Build a live media gallery",
								emptyBody:
									"Upload stills, product frames or editorial images and keep them editable directly on the page.",
								items: [
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
										caption:
											"Sticky rails and dark surfaces keep the canvas legible.",
									},
									{
										id: "gallery-3",
										media:
											"https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
										alt: "Hands working in a website editor",
										caption:
											"Branch-aware save and finalize flow should feel invisible to the editor.",
									},
								],
							},
						},
					],
				},
			],
		},
		{
			id: "feature-grid",
			module: "marketing-demo",
			type: "feature-grid",
			props: {
				eyebrow: "Editor capabilities",
				title: "One framework, two editor personalities",
				body: "The same manifest powers public rendering, inline content edits and the full builder chrome. Domain teams can ship their own kits instead of patching a single giant application.",
				features: [
					{
						title: "Inline content controls",
						body: "Text becomes inputs, rich text surfaces and media controls directly in the live page.",
					},
					{
						title: "Builder chrome in package",
						body: "The studio shell now lives in the npm foundation package while the app keeps only auth and backend wiring.",
					},
					{
						title: "Installable kit contract",
						body: "Apps consume kit-level runtime entries and document maps instead of registering modules and demo data separately.",
					},
				],
			},
		},
		{
			id: "command-center-cta",
			module: "marketing-demo",
			type: "command-center-cta",
			props: {
				badge: "MVP control room",
				title:
					"Ship the foundation now, then let domain packages plug into it cleanly",
				body: "The pragmatic path is to stabilize the contract, show the experience on the real site and keep enough extension points so future kits register themselves instead of editing core app code every time.",
				primaryLabel: "Publish foundation packages",
				primaryHref: "#publish",
				secondaryLabel: "Read manual",
				secondaryHref: "#manual",
				panelEyebrow: "System mode",
				panelLabel: "Builder chrome online",
				panelItems: [
					"Content editor turns the live site into inputs, uploads and textareas.",
					"Builder mode exposes real layout chrome with drag-and-drop blocks.",
					"Foundation packages define contracts, integrations and renderers.",
				],
			},
		},
	],
};

const marketingHomeDocumentOverrides: Record<
	Exclude<MarketingDemoLocale, "en">,
	Record<string, unknown>
> = {
	ru: {
		name: "Витрина Photon",
		"blocks.0.props.eyebrow": "Package-first система builder",
		"blocks.0.props.title":
			"Редактируйте реальный сайт, а не отдельную админскую копию",
		"blocks.0.props.body":
			"Photon превращает вашу реальную Next.js-поверхность в холст редактирования. Content mode оставляет правки инлайновыми, а Builder mode открывает полноценный control room с palette, inspector, историей профиля и вложенной композицией layout-блоков.",
		"blocks.0.props.primaryLabel": "Открыть builder mode",
		"blocks.0.props.primaryMetaLabel": "Запуск",
		"blocks.0.props.secondaryLabel": "Смотреть архитектуру пакетов",
		"blocks.0.props.spotlightLabel": "Целевая форма",
		"blocks.0.props.imageAlt":
			"Креативная команда управляет цифровыми продуктовыми поверхностями",
		"blocks.1.props.title": "Что доказывает текущий рантайм",
		"blocks.1.props.items.0.value": "Live auth",
		"blocks.1.props.items.0.label":
			"Админы получают builder прямо на том же публичном сайте",
		"blocks.1.props.items.1.value": "История",
		"blocks.1.props.items.1.label":
			"Ревизии профиля фиксируют, кто и когда менял живую поверхность сайта",
		"blocks.1.props.items.2.value": "Split layout",
		"blocks.1.props.items.2.label":
			"Настоящий горизонтальный контейнер 50/50 теперь входит в демо-документ",
		"blocks.1.props.items.3.value": "Installable kits",
		"blocks.1.props.items.3.label":
			"Фронтенд-киты и backend-интеграции остаются согласованными, но развязанными",
		"blocks.2.props.eyebrow": "Система горизонтальных контейнеров",
		"blocks.2.props.title":
			"Наглядный 50/50 split с одной sticky-колонкой и одним editorial stack",
		"blocks.2.props.body":
			"Именно этого сценария не хватало в демо. Левая сторона остается sticky с визуальным якорем, правая собирает более богатые контентные блоки, а на мобильных все снова схлопывается в читабельную одноколоночную структуру.",
		"blocks.2.props.columns.0.label": "Sticky-визуал",
		"blocks.2.props.columns.1.label": "Editorial stack",
		"blocks.2.areas.0.label": "Sticky-визуал",
		"blocks.2.areas.0.blocks.0.props.eyebrow": "Sticky media-колонка",
		"blocks.2.areas.0.blocks.0.props.title":
			"Горизонтальные контейнеры наконец стали очевидными в живом демо",
		"blocks.2.areas.0.blocks.0.props.caption":
			"Левая колонка может оставаться закрепленной, пока правая скроллится через более богатые editorial-блоки. На мобильных та же структура схлопывается в чистый одноколоночный стек.",
		"blocks.2.areas.0.blocks.0.props.imageAlt":
			"Рабочее место с ноутбуком и экраном редактирования",
		"blocks.2.areas.1.label": "Editorial stack",
		"blocks.2.areas.1.blocks.0.props.eyebrow": "Rich text runtime",
		"blocks.2.areas.1.blocks.0.props.title":
			"Content mode теперь сохраняет более богатую editorial-структуру",
		"blocks.2.areas.1.blocks.0.props.content":
			"<p>Builder больше не обязан сплющивать все в обычные textareas. Этот блок хранит настоящий rich text markup, сохраняет его в manifest, переживает переключение веток и при этом рендерится прямо на публичном сайте.</p><p>Смысл не в отдельной CMS-странице. Смысл в том, чтобы оставаться на живой поверхности во время редактирования:</p><ul><li>короткие повествовательные абзацы</li><li>списки для продуктовых доказательств</li><li>цитаты и подзаголовки, когда секции нужен ритм</li></ul><blockquote>Один и тот же сохраненный документ может кормить preview, content mode и историю профиля.</blockquote>",
		"blocks.2.areas.1.blocks.0.props.asideLabel": "Слой хранения",
		"blocks.2.areas.1.blocks.0.props.asideValue":
			"Tiptap HTML хранится внутри manifest профиля и отслеживается через историю ревизий.",
		"blocks.2.areas.1.blocks.0.props.imageAlt":
			"Руки редактируют контент в интерфейсе на ноутбуке",
		"blocks.2.areas.1.blocks.1.props.title":
			"Publication package должен приносить свои блоки и backend manifest producers",
		"blocks.2.areas.1.blocks.1.props.excerpt":
			"Этот блок показывает будущий путь интеграции: publication package отдает manifest fragments на Laravel, а зеркальный npm kit рендерит ту же семью блоков в Next.js без copy-paste glue-кода.",
		"blocks.2.areas.1.blocks.1.props.readTime": "6 минут чтения",
		"blocks.2.areas.1.blocks.1.props.imageAlt":
			"Editorial-рабочее место с блокнотами и камерой",
		"blocks.2.areas.1.blocks.1.props.ctaLabel": "Открыть package strategy",
		"blocks.2.areas.1.blocks.2.props.eyebrow": "Медиа workflow",
		"blocks.2.areas.1.blocks.2.props.title":
			"Временные загрузки теперь по-настоящему живут внутри builder",
		"blocks.2.areas.1.blocks.2.props.body":
			"Загрузите несколько изображений, поменяйте их порядок, добавьте подписи и сохраните новую ревизию профиля, когда галерея будет готова.",
		"blocks.2.areas.1.blocks.2.props.emptyTitle":
			"Соберите живую медиа-галерею",
		"blocks.2.areas.1.blocks.2.props.emptyBody":
			"Загружайте stills, product frames и editorial-изображения и редактируйте их прямо на странице.",
		"blocks.2.areas.1.blocks.2.props.items.0.alt":
			"Команда продукта работает за ноутбуком",
		"blocks.2.areas.1.blocks.2.props.items.0.caption":
			"Живые правки происходят прямо на реальной поверхности сайта.",
		"blocks.2.areas.1.blocks.2.props.items.1.alt":
			"Рабочий стол с ноутбуком и клавиатурой",
		"blocks.2.areas.1.blocks.2.props.items.1.caption":
			"Sticky-колонки и темные поверхности делают холст читаемым.",
		"blocks.2.areas.1.blocks.2.props.items.2.alt":
			"Руки работают в редакторе сайта",
		"blocks.2.areas.1.blocks.2.props.items.2.caption":
			"Сохранение по веткам и финализация должны быть почти незаметны для редактора.",
		"blocks.3.props.eyebrow": "Возможности редактора",
		"blocks.3.props.title": "Один фреймворк, два режима работы редактора",
		"blocks.3.props.body":
			"Один и тот же manifest питает публичный рендер, inline-редактирование контента и полный builder chrome. Доменные команды могут поставлять собственные kit-пакеты вместо патчей в одно гигантское приложение.",
		"blocks.3.props.features.0.title": "Inline-контролы контента",
		"blocks.3.props.features.0.body":
			"Текст превращается в inputs, rich text surfaces и media controls прямо на живой странице.",
		"blocks.3.props.features.1.title": "Builder chrome в пакете",
		"blocks.3.props.features.1.body":
			"Studio shell теперь живет в npm foundation package, а app оставляет себе только auth и backend wiring.",
		"blocks.3.props.features.2.title": "Контракт installable kit",
		"blocks.3.props.features.2.body":
			"Apps потребляют runtime entries и document maps на уровне kit, а не регистрируют модули и demo data по отдельности.",
		"blocks.4.props.badge": "MVP control room",
		"blocks.4.props.title":
			"Сначала выпускайте foundation, а затем чисто подключайте доменные пакеты",
		"blocks.4.props.body":
			"Прагматичный путь состоит в том, чтобы стабилизировать контракт, показать реальный опыт на живом сайте и оставить достаточно extension points, чтобы будущие kit-пакеты регистрировали себя сами вместо постоянных правок core app.",
		"blocks.4.props.primaryLabel": "Опубликовать foundation packages",
		"blocks.4.props.secondaryLabel": "Читать manual",
		"blocks.4.props.panelEyebrow": "Системный режим",
		"blocks.4.props.panelLabel": "Builder chrome в онлайне",
		"blocks.4.props.panelItems.0":
			"Content editor превращает живой сайт в inputs, uploads и textareas.",
		"blocks.4.props.panelItems.1":
			"Builder mode открывает настоящий layout chrome с drag-and-drop блоками.",
		"blocks.4.props.panelItems.2":
			"Foundation packages определяют контракты, интеграции и рендереры.",
	},
};

const applyDocumentOverrides = (
	document: PhotonDocument,
	overrides: Record<string, unknown>,
): PhotonDocument =>
	Object.entries(overrides).reduce<PhotonDocument>(
		(current, [path, value]) =>
			setValueAtPath(
				current as Record<string, unknown>,
				path,
				value,
			) as PhotonDocument,
		clonePhotonValue(document),
	);

const applyMarketingDemoVariantMapToBlocks = (
	blocks: PhotonBlock[],
	componentVariants: MarketingDemoBlockVariantMap,
): PhotonBlock[] =>
	blocks.map((block) => {
		const nextBlock = clonePhotonValue(block);

		if (nextBlock.module === "marketing-demo") {
			nextBlock.props = {
				...(typeof nextBlock.props === "object" && nextBlock.props !== null
					? nextBlock.props
					: {}),
				variant:
					(componentVariants[nextBlock.type] as
						| MarketingDemoBlockVariant
						| undefined) ?? "default",
			};
		}

		if (Array.isArray(nextBlock.areas)) {
			nextBlock.areas = nextBlock.areas.map((area) => ({
				...area,
				blocks: applyMarketingDemoVariantMapToBlocks(
					area.blocks,
					componentVariants,
				),
			}));
		}

		return nextBlock;
	});

const resolveMarketingDemoBaseDocument = (
	locale: MarketingDemoLocale,
): PhotonDocument =>
	locale === "ru"
		? applyDocumentOverrides(
				marketingHomeDocumentBase,
				marketingHomeDocumentOverrides.ru,
			)
		: clonePhotonValue(marketingHomeDocumentBase);

export type MarketingDemoProfileStarterPreset = {
	id: MarketingDemoDesignPresetId;
	label: string;
	appearance: (typeof marketingDemoDesignPresets)[number]["appearance"];
	description: string;
	starterRecipe: {
		type: "marketing-home-profile";
	};
};

export type MarketingDemoDesignTemplateId =
	| "aurora-current-template"
	| "init-landing-template";

export type MarketingDemoDesignTemplate = {
	id: MarketingDemoDesignTemplateId;
	label: string;
	description: string;
	sourcePresetId: MarketingDemoDesignPresetId;
	snapshotRef: string;
	previewRoute: string;
};

export const marketingDemoProfileStarterPresets: MarketingDemoProfileStarterPreset[] =
	marketingDemoDesignPresets.map((preset) => ({
		id: preset.id,
		label: preset.label,
		appearance: preset.appearance,
		description: `${preset.description} Creates a new profile with the marketing home starter recipe.`,
		starterRecipe: {
			type: "marketing-home-profile",
		},
	}));

export type BaseProfileStarterSource =
	| { type: "blank" }
	| {
			type: "preset";
			sourceId?: string;
	  }
	| {
			type: "template";
			sourceId?: string;
	  };

const createTreeDocumentEntry = (document: PhotonDocument) =>
	clonePhotonValue(document);

const createTreePageEntry = (
	document: PhotonDocument,
	locale: MarketingDemoLocale,
) => ({
	document: createTreeDocumentEntry(document),
	settings: {
		page: {
			name: document.name,
			path: document.route,
		},
		template: {},
		record: {},
	},
	resources: {},
	seo: {
		page: {
			title: document.name,
		},
		template: {},
		record: {},
	},
});

const createDefaultSiteRegionEntries = (
	locale: MarketingDemoLocale,
	document: PhotonDocument,
) => {
	const updatedAt = document.updatedAt;

	return {
		header: {
			document: createTreeDocumentEntry({
				id: "photon-site-header",
				name: locale === "ru" ? "Хедер" : "Header",
				route: "/_site/header",
				updatedAt,
				blocks: [
					{
						id: "site-header-shell",
						module: "photon-system",
						type: "site-header-shell",
						props: {
							variant: "commerce-inline",
							brandLabel: "Photon",
							brandHref: "/",
							logoImage: null,
							utilityLinks:
								locale === "ru"
									? [
											{ label: "Услуги", href: "/services" },
											{ label: "Партнеры", href: "/partners" },
											{ label: "Блог", href: "/blog" },
										]
									: [
											{ label: "Services", href: "/services" },
											{ label: "Partners", href: "/partners" },
											{ label: "Blog", href: "/blog" },
										],
							catalogLabel: locale === "ru" ? "Каталог" : "Catalog",
							searchPlaceholder:
								locale === "ru" ? "Поиск по сайту" : "Search the website",
							contactValue: "+7 (707) 040-43-43",
							contactCaption:
								locale === "ru"
									? "Ежедневно с 09:00 до 18:00"
									: "Daily from 09:00 to 18:00",
							primaryCtaLabel: locale === "ru" ? "Связаться" : "Contact us",
							primaryCtaHref: "/contacts",
							secondaryCtaLabel: "WhatsApp",
							secondaryCtaHref: "https://wa.me/77070404343",
							showLoginAction: false,
							loginLabel: locale === "ru" ? "Вход для админа" : "Admin sign in",
							sticky: true,
							mobile: {
								sticky: false,
								menu: {
									type: "drawer",
									fixedTrigger: true,
									scrollLock: true,
									floating: false,
									disableFloatingOnSmallScreens: true,
								},
								bottomMenu: {
									enabled: true,
									showBurger: true,
									floating: false,
									disableFloatingOnSmallScreens: true,
								},
							},
							compactOnScroll: true,
							categoryLinks:
								locale === "ru"
									? [
											{ label: "Инфраструктура", href: "/infrastructure" },
											{ label: "Операции", href: "/operations" },
											{ label: "Исследования", href: "/research" },
										]
									: [
											{ label: "Infrastructure", href: "/infrastructure" },
											{ label: "Operations", href: "/operations" },
											{ label: "Research", href: "/research" },
										],
						},
					},
				],
			}),
		},
		footer: {
			document: createTreeDocumentEntry({
				id: "photon-site-footer",
				name: locale === "ru" ? "Футер" : "Footer",
				route: "/_site/footer",
				updatedAt,
				blocks: [
					{
						id: "site-footer-shell",
						module: "photon-system",
						type: "site-footer-shell",
						props: {
							variant: "classic-dark",
							brandTitle: "Photon",
							brandBody:
								locale === "ru"
									? "Package-first редактирование живого сайта для команд, которым нужны переиспользуемые пакеты, чистые границы пакетов и настоящая композиция страниц."
									: "Package-first live website editing for teams that want reusable packages, clean package boundaries and real page composition.",
							logoImage: null,
							subscriptionTitle:
								locale === "ru"
									? "Получайте продуктовые заметки и обновления релизов"
									: "Get product notes and release updates",
							subscriptionBody:
								locale === "ru"
									? "Подпишитесь, чтобы получать крупные релизы builder, новые integration kits и архитектурные заметки."
									: "Subscribe for major builder releases, new integration kits and architecture notes.",
							subscriptionPlaceholder:
								locale === "ru" ? "Введите ваш email" : "Enter your email",
							subscriptionButtonLabel:
								locale === "ru" ? "Подписаться" : "Subscribe",
							navigationColumns:
								locale === "ru"
									? [
											{
												title: "Продукт",
												links: [
													{ label: "Обзор", href: "/" },
													{ label: "Публикации", href: "/news" },
													{ label: "Контакты", href: "/contacts" },
												],
											},
											{
												title: "Компания",
												links: [
													{ label: "О нас", href: "/about" },
													{ label: "Блог", href: "/blog" },
													{ label: "Приватность", href: "/privacy" },
												],
											},
										]
									: [
											{
												title: "Product",
												links: [
													{ label: "Overview", href: "/" },
													{ label: "Publication", href: "/news" },
													{ label: "Contacts", href: "/contacts" },
												],
											},
											{
												title: "Company",
												links: [
													{ label: "About", href: "/about" },
													{ label: "Blog", href: "/blog" },
													{ label: "Privacy", href: "/privacy" },
												],
											},
										],
							contactItems: [
								"+7 (707) 040-43-43",
								"hello@example.test",
								locale === "ru" ? "Алматы, Казахстан" : "Almaty, Kazakhstan",
							],
							legalLabel:
								locale === "ru"
									? "Политика конфиденциальности"
									: "Privacy policy",
							legalHref: "/privacy",
							copyrightLabel: "Photon 2026",
							developerLabel:
								locale === "ru" ? "Сделано init" : "Built by init",
							developerHref: "https://init.kz",
						},
					},
				],
			}),
		},
	};
};

export const createBaseStarterProfileTree = (
	locale: MarketingDemoLocale,
	source: BaseProfileStarterSource,
) => {
	if (source.type === "blank") {
		return {
			pages: {
				home: createTreePageEntry(
					{
						...createMarketingDemoDocument(locale),
						blocks: [],
						name: locale === "ru" ? "Новый профиль" : "New profile",
					},
					locale,
				),
			},
			site: {
				regions: createDefaultSiteRegionEntries(
					locale,
					createMarketingDemoDocument(locale),
				),
				settings: {},
			},
			seo: {
				site: {
					title: locale === "ru" ? "Новый профиль" : "New profile",
				},
			},
			settings: {
				publication: {
					locale,
				},
			},
			meta: {
				source: "photon-starter",
			},
		};
	}

	const document =
		source.type === "preset"
			? createMarketingDemoProfileDocumentFromPresetSource(
					source.sourceId as MarketingDemoDesignPresetId,
					locale,
				)
			: createMarketingDemoProfileDocumentFromTemplateSource(
					source.sourceId as MarketingDemoDesignTemplateId,
					locale,
				);

	const sourcePresetId =
		source.type === "preset"
			? source.sourceId
			: marketingDemoDesignTemplates.find(
					(template) => template.id === source.sourceId,
				)?.sourcePresetId;

	const siteRegions =
		sourcePresetId === "init-landing"
			? {
					header: {
						document: createTreeDocumentEntry(
							createInitLandingHeaderDocument(),
						),
					},
					footer: {
						document: createTreeDocumentEntry(
							createInitLandingFooterDocument(),
						),
					},
				}
			: createDefaultSiteRegionEntries(locale, document);

	return {
		pages: {
			home: createTreePageEntry(document, locale),
		},
		site: {
			regions: siteRegions,
			settings: sourcePresetId
				? {
						design: applyPhotonSiteDesignPreset({}, sourcePresetId),
					}
				: {},
		},
		seo: {
			site: {
				title: document.name,
			},
		},
		settings: {
			publication: {
				locale,
			},
		},
		meta: {
			source: "photon-starter",
		},
	};
};

const marketingDemoDesignTemplateCatalog: Array<{
	id: MarketingDemoDesignTemplateId;
	label: string;
	labelRu: string;
	description: string;
	sourcePresetId: MarketingDemoDesignPresetId;
	snapshotRef: string;
	previewRoute: string;
}> = [
	{
		id: "aurora-current-template",
		label: "Aurora Current Template",
		labelRu: "Шаблон Aurora Current",
		description:
			"The default aurora showcase blueprint with the current glossy builder presentation.",
		sourcePresetId: "aurora-current",
		snapshotRef: "marketing-demo-template/aurora-current",
		previewRoute: "/template/aurora-current",
	},
	{
		id: "init-landing-template",
		label: "Init Landing Template",
		labelRu: "Шаблон Init Landing",
		description:
			"A warm commercial landing blueprint matching the Init public landing shell and section rhythm.",
		sourcePresetId: "init-landing",
		snapshotRef: "marketing-demo-template/init-landing",
		previewRoute: "/template/init-landing",
	},
];

const resolveMarketingDemoDesignTemplateCatalogItem = (
	templateId: MarketingDemoDesignTemplateId,
) => {
	const resolvedTemplate = marketingDemoDesignTemplateCatalog.find(
		(template) => template.id === templateId,
	);

	if (resolvedTemplate) {
		return resolvedTemplate;
	}

	throw new Error(
		`Unknown marketing demo design template source: ${templateId}`,
	);
};

const createMarketingDemoDocumentForPresetScenario = (
	presetId: MarketingDemoDesignPresetId,
	locale: MarketingDemoLocale,
): PhotonDocument => {
	const preset =
		marketingDemoDesignPresets.find((item) => item.id === presetId) ??
		marketingDemoDesignPresets[0];
	const baseDocument = resolveMarketingDemoBaseDocument(locale);
	const scenarioDocument =
		preset.id === "aurora-current"
			? clonePhotonValue(baseDocument)
			: createPresetScenarioDocument(preset.id, baseDocument, locale);

	return {
		...scenarioDocument,
		updatedAt: "2026-04-11T00:00:00.000Z",
		blocks: applyMarketingDemoVariantMapToBlocks(
			scenarioDocument.blocks,
			preset.componentVariants,
		),
	};
};

export const createMarketingDemoDesignTemplateDocument = (
	templateId: MarketingDemoDesignTemplateId,
	locale: MarketingDemoLocale = "en",
): PhotonDocument => {
	const template = resolveMarketingDemoDesignTemplateCatalogItem(templateId);
	const nextDocument = createMarketingDemoDocumentForPresetScenario(
		template.sourcePresetId,
		locale,
	);

	return {
		...withoutSiteShellBlocks(nextDocument),
		id: `photon-${template.id}`,
		name: locale === "ru" ? template.labelRu : template.label,
		route: template.previewRoute,
	};
};

export const createMarketingDemoDocument = (
	locale: MarketingDemoLocale = "en",
): PhotonDocument =>
	withoutSiteShellBlocks(
		createMarketingDemoDocumentForPresetScenario("aurora-current", locale),
	);

export const createMarketingDemoProfileDocumentFromPresetSource = (
	presetId: MarketingDemoDesignPresetId,
	locale: MarketingDemoLocale = "en",
): PhotonDocument => {
	const preset = marketingDemoDesignPresets.find(
		(item) => item.id === presetId,
	);
	const homeDocument = createMarketingDemoDocument(locale);
	const presetDocument = preset
		? withoutSiteShellBlocks(
				createMarketingDemoDocumentForPresetScenario(preset.id, locale),
			)
		: homeDocument;

	return {
		...presetDocument,
		id: homeDocument.id,
		name: homeDocument.name,
		route: homeDocument.route,
	};
};

export const createMarketingDemoProfileDocumentFromTemplateSource = (
	templateId: MarketingDemoDesignTemplateId,
	locale: MarketingDemoLocale = "en",
): PhotonDocument => {
	const templateDocument = createMarketingDemoDesignTemplateDocument(
		templateId,
		locale,
	);
	const homeDocument = createMarketingDemoDocument(locale);

	return {
		...templateDocument,
		id: homeDocument.id,
		name: homeDocument.name,
		route: homeDocument.route,
	};
};

export const marketingDemoDesignTemplates: MarketingDemoDesignTemplate[] =
	marketingDemoDesignTemplateCatalog.map((template) => ({
		id: template.id,
		label: template.label,
		description: `${template.description} Use this immutable template source when creating a new profile.`,
		sourcePresetId: template.sourcePresetId,
		snapshotRef: template.snapshotRef,
		previewRoute: template.previewRoute,
	}));

export {
	createInitLandingFooterDocument,
	createInitLandingHeaderDocument,
	marketingDemoDesignPresets,
};

const marketingNotFoundLabels: Record<MarketingDemoLocale, { name: string; eyebrow: string; title: string; body: string; primaryLabel: string; secondaryLabel: string }> = {
	en: {
		name: "Page not found",
		eyebrow: "404",
		title: "This page is off the map",
		body: "The link you followed may be broken, or the page may have been moved. Pick a destination below — the rest of the site is still online.",
		primaryLabel: "Back to homepage",
		secondaryLabel: "Browse the site",
	},
	ru: {
		name: "Страница не найдена",
		eyebrow: "404",
		title: "Такой страницы здесь нет",
		body: "Ссылка может быть устаревшей, либо страницу перенесли. Выберите, куда отправиться дальше — остальной сайт работает как обычно.",
		primaryLabel: "На главную",
		secondaryLabel: "Посмотреть сайт",
	},
};

export const createMarketingDemoNotFoundDocument = (
	locale: MarketingDemoLocale = "en",
): PhotonDocument => {
	const labels = marketingNotFoundLabels[locale];

	return {
		id: "photon-not-found",
		name: labels.name,
		route: "/__not_found",
		updatedAt: "2026-04-28T00:00:00.000Z",
		blocks: [
			{
				id: "not-found-hero",
				module: "marketing-demo",
				type: "not-found",
				props: {
					variant: "default",
					eyebrow: labels.eyebrow,
					title: labels.title,
					body: labels.body,
					primaryLabel: labels.primaryLabel,
					primaryHref: "/",
					secondaryLabel: labels.secondaryLabel,
					secondaryHref: "/",
				},
			},
		],
	};
};

export const marketingPhotonDocuments: PhotonDocumentsMap = {
	home: createMarketingDemoDocument("en"),
	notFound: createMarketingDemoNotFoundDocument("en"),
	...Object.fromEntries(
		marketingDemoDesignTemplates.map((template) => [
			`template-${template.id}`,
			createMarketingDemoDesignTemplateDocument(template.id),
		]),
	),
};

export const baseDesignTemplates = marketingDemoDesignTemplates;
export const baseProfileStarterPresets = marketingDemoProfileStarterPresets;
export const basePhotonDocuments = marketingPhotonDocuments;
export const createBasePhotonDocument = createMarketingDemoDocument;
export const createBaseDesignTemplateDocument =
	createMarketingDemoDesignTemplateDocument;
export const createBaseProfileDocumentFromPresetSource =
	createMarketingDemoProfileDocumentFromPresetSource;
export const createBaseProfileDocumentFromTemplateSource =
	createMarketingDemoProfileDocumentFromTemplateSource;
