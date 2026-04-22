import type { PhotonDocument } from "@init/photon/server";
import {
	cloneBaseDocument,
	cloneDocumentBlockById,
	cloneSplitAreaBlock,
	type MarketingDemoLocale,
	patchBlockProps,
	patchSplitLayoutAreas,
} from "../shared";

export const createPaperFlowDocument = (
	baseDocument: PhotonDocument,
	locale: MarketingDemoLocale,
): PhotonDocument => {
	const hero = patchBlockProps(
		cloneDocumentBlockById(baseDocument, "hero-spotlight"),
		locale === "ru"
			? {
					eyebrow: "Product narrative system",
					title:
						"Соберите тихий product-led сайт для студии, которая упаковывает стратегию, сервисы и кейсы в один поток",
					body: "Paper Flow должен быть не builder-demo, а продуктовой поверхностью: аккуратный hero, спокойная секционная смена фонов, narrative про подход, сервисные линии и рабочие артефакты.",
					primaryLabel: "Посмотреть услуги",
					primaryMetaLabel: "Flow",
					secondaryLabel: "Открыть продуктовый подход",
					spotlightLabel: "Форма сайта",
					spotlightValue: "Product strategy studio + service narrative",
					imageAlt:
						"Команда проектирует продуктовую стратегию и сервисную архитектуру",
				}
			: {
					eyebrow: "Product narrative system",
					title:
						"Build a quiet product-led site for a studio that packages strategy, services and proof into one flow",
					body: "Paper Flow should stop reading like a builder demo and start behaving like a product surface: restrained hero, gentle section changes and a service narrative that feels editorial without becoming a magazine.",
					primaryLabel: "See services",
					primaryMetaLabel: "Flow",
					secondaryLabel: "Open product approach",
					spotlightLabel: "Site shape",
					spotlightValue: "Product strategy studio + service narrative",
					imageAlt: "Team shaping product strategy and service architecture",
				},
	);
	const split = patchSplitLayoutAreas(
		patchBlockProps(
			cloneDocumentBlockById(baseDocument, "editorial-split-showcase"),
			locale === "ru"
				? {
						eyebrow: "Service architecture",
						title:
							"Один sticky rail с ключевым предложением и один product-story stack справа",
						body: "В Paper Flow горизонтальный контейнер работает как narrative layout: слева фиксируется визуальный якорь услуги, справа идет спокойное объяснение подхода, deliverables и результатов.",
						columns: [
							{
								areaId: "primary",
								label: "",
								width: "minmax(18rem,0.92fr)",
								sticky: true,
							},
							{
								areaId: "secondary",
								label: "",
								width: "minmax(0,1.08fr)",
								sticky: false,
							},
						],
					}
				: {
						eyebrow: "Service architecture",
						title:
							"One sticky rail for the core offer, one product-story stack on the right",
						body: "In Paper Flow the horizontal container becomes a narrative layout: the left side pins the offer anchor, the right side explains method, deliverables and proof at a calmer pace.",
						columns: [
							{
								areaId: "primary",
								label: "",
								width: "minmax(18rem,0.92fr)",
								sticky: true,
							},
							{
								areaId: "secondary",
								label: "",
								width: "minmax(0,1.08fr)",
								sticky: false,
							},
						],
					},
		),
		{
			primary: [
				patchBlockProps(
					cloneSplitAreaBlock(baseDocument, "editorial-split-showcase", 0, 0),
					locale === "ru"
						? {
								eyebrow: "Продуктовая рамка",
								title:
									"Команда видит главное предложение, пока читает весь сценарий внедрения",
								caption:
									"Sticky rail здесь работает как спокойный продуктовый якорь: короткий promise, один visual и чувство структурированности без тяжелого dashboard look.",
								imageAlt: "Минималистичный продуктовый рабочий стол с макетами",
							}
						: {
								eyebrow: "Product frame",
								title:
									"The team keeps the core offer in view while reading the full delivery narrative",
								caption:
									"The sticky rail acts as a calm product anchor: one promise, one visual and a sense of structure without falling into a dashboard look.",
								imageAlt: "Minimal product workspace with strategy mockups",
							},
				),
			],
			secondary: [
				patchBlockProps(
					cloneSplitAreaBlock(baseDocument, "editorial-split-showcase", 1, 0),
					locale === "ru"
						? {
								eyebrow: "Product operating model",
								title:
									"Сайт может объяснять не только что вы делаете, но и как именно движется работа",
								content:
									"<p>Paper Flow должен показывать продуктовую команду или студию, которая продает не страницы, а ход работы: исследование, framing, запуск, сопровождение.</p><p>Поэтому в narrative stack важны спокойные абзацы и аккуратная структурность:</p><ul><li>что входит в discovery</li><li>как оформляются deliverables</li><li>как команда поддерживает запуск после релиза</li></ul><blockquote>Правильный light preset должен ощущаться как уверенный продуктовый документ, а не как та же dark demo в других цветах.</blockquote>",
								asideLabel: "Delivery lens",
								asideValue:
									"Discovery, framing, launch and iteration described in one continuous service story.",
							}
						: {
								eyebrow: "Product operating model",
								title:
									"The site can explain not just what you do, but how the work actually moves",
								content:
									"<p>Paper Flow should present a product team or studio that sells the shape of the work, not just isolated pages: discovery, framing, launch and iteration.</p><p>That is why the narrative stack needs calmer paragraphs and a clearer sequence:</p><ul><li>what discovery includes</li><li>how deliverables are packaged</li><li>how the team supports launch after release</li></ul><blockquote>A good light preset should feel like a confident product document, not the same dark demo recolored.</blockquote>",
								asideLabel: "Delivery lens",
								asideValue:
									"Discovery, framing, launch and iteration described in one continuous service story.",
							},
				),
				patchBlockProps(
					cloneSplitAreaBlock(baseDocument, "editorial-split-showcase", 1, 1),
					locale === "ru"
						? {
								tag: "case-note",
								title:
									"Кейсы и service notes могут читаться как продолжение продуктового narrative, а не как отдельный каталог",
								excerpt:
									"Вместо громоздкой кейсотеки Paper Flow может переключать внимание между подходом, артефактами и краткими историями внедрения.",
								author: "Service design team",
								readTime: "4 минуты",
								ctaLabel: "Открыть кейс",
							}
						: {
								tag: "case-note",
								title:
									"Case notes can extend the service narrative instead of behaving like a detached portfolio grid",
								excerpt:
									"Paper Flow can move attention between method, deliverables and short implementation stories without collapsing into a heavy case-study catalog.",
								author: "Service design team",
								readTime: "4 min read",
								ctaLabel: "Open case note",
							},
				),
			],
		},
	);
	const featureGrid = patchBlockProps(
		cloneDocumentBlockById(baseDocument, "feature-grid"),
		locale === "ru"
			? {
					eyebrow: "Service lines",
					title:
						"Стратегия, дизайн системы и внедрение живут как один продуктовый пакет",
					body: "Paper Flow должен презентовать studio offer, а не фреймворк. Поэтому секции ниже объясняют service lines и deliverables, а не внутренности builder.",
					features: [
						{
							title: "Discovery sprint",
							body: "Интервью, карта продукта, framing и решение, что именно должно оказаться на живом сайте.",
						},
						{
							title: "Narrative system",
							body: "Секции складываются в понятный flow: promise, method, proof, offer и следующий шаг.",
						},
						{
							title: "Launch support",
							body: "После релиза команда продолжает итерации по контенту, структуре и conversion story.",
						},
					],
				}
			: {
					eyebrow: "Service lines",
					title:
						"Strategy, systems design and rollout live as one productized offer",
					body: "Paper Flow should present a studio offer, not a framework pitch. The sections below explain service lines and deliverables instead of builder internals.",
					features: [
						{
							title: "Discovery sprint",
							body: "Interviews, product mapping, framing and a decision on what should appear on the live site.",
						},
						{
							title: "Narrative system",
							body: "Sections compose into a readable flow: promise, method, proof, offer and the next step.",
						},
						{
							title: "Launch support",
							body: "After release the team continues iterating on content, structure and conversion story.",
						},
					],
				},
	);
	const cta = patchBlockProps(
		cloneDocumentBlockById(baseDocument, "command-center-cta"),
		locale === "ru"
			? {
					badge: "Studio offer",
					title:
						"Сделайте из пресета не общую демку, а готовую service-story для продуктовой команды",
					body: "Paper Flow должен быть самостоятельным light preset со своим frontend-лицом: спокойный сервисный narrative, другие блоки и другая тематическая лексика.",
					primaryLabel: "Собрать service page",
					secondaryLabel: "Открыть deliverables",
					panelEyebrow: "Offer package",
					panelLabel: "Productized service surface",
					panelItems: [
						"Hero продает promise, а не инструментарий builder.",
						"Split layout объясняет метод и рабочий ход команды.",
						"Нижние секции собирают offer, proof и следующий шаг.",
					],
				}
			: {
					badge: "Studio offer",
					title:
						"Make the preset a real service story, not a generic demo in lighter colors",
					body: "Paper Flow should stand as its own light preset with a different frontend face: calmer service narrative, different block composition and different product language.",
					primaryLabel: "Assemble service page",
					secondaryLabel: "Open deliverables",
					panelEyebrow: "Offer package",
					panelLabel: "Productized service surface",
					panelItems: [
						"The hero sells the promise instead of the builder toolchain.",
						"The split layout explains method and delivery motion.",
						"Lower sections package the offer, proof and the next step.",
					],
				},
	);

	return {
		...cloneBaseDocument(baseDocument),
		blocks: [hero, split, featureGrid, cta],
	};
};
