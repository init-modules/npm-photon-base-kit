"use client";

import {
	collectPhotonFooterExtensionItems,
	createPhotonLocalizedDefault,
	definePhotonBlockDefinition,
	EditableText,
	EditableTextarea,
	resolvePhotonSiteFrameExtensions,
	usePhotonStore,
	type PhotonBlockComponentProps,
	type PhotonField,
	PhotonLink,
	type PhotonSiteFrameExtensionContext,
	type PhotonSiteFrameLinkItem,
	type PhotonSiteFrameNavigationColumn,
} from "@init/photon/public";
import {
	createInitLandingBlockLocalizationSchema,
	InitBrandMark,
	type InitLandingFooterContact,
	type InitLandingLinkItem,
	useInitLandingSectionBleedStyle,
	useInitLandingSurfaceBreakpoints,
} from "./shared";

export type InitLandingFooterProps = {
	brandDescription: string;
	brandLabel: string;
	company: InitLandingLinkItem[];
	contact: InitLandingFooterContact;
	disabledExtensionIds?: string[];
	disabledExtensionItemIds?: string[];
	homeHref: string;
	legal: InitLandingLinkItem[];
	services: InitLandingLinkItem[];
};

const fields: PhotonField[] = [
	{
		path: "brandLabel",
		label: "Brand label",
		kind: "text",
		group: "content",
		localization: "localized",
	},
	{
		path: "homeHref",
		label: "Home href",
		kind: "url",
		group: "content",
		localization: "shared",
	},
	{
		path: "brandDescription",
		label: "Brand description",
		kind: "textarea",
		group: "content",
		localization: "localized",
	},
	{
		path: "services",
		label: "Services",
		kind: "repeater",
		group: "content",
		localization: "localized",
		itemLabelPath: "name",
		addLabel: "Add service link",
		fields: [
			{ path: "name", label: "Name", kind: "text" },
			{ path: "href", label: "Href", kind: "url", localization: "shared" },
		],
	},
	{
		path: "company",
		label: "Company",
		kind: "repeater",
		group: "content",
		localization: "localized",
		itemLabelPath: "name",
		addLabel: "Add company link",
		fields: [
			{ path: "name", label: "Name", kind: "text" },
			{ path: "href", label: "Href", kind: "url", localization: "shared" },
		],
	},
	{
		path: "legal",
		label: "Legal",
		kind: "repeater",
		group: "content",
		localization: "localized",
		itemLabelPath: "name",
		addLabel: "Add legal link",
		fields: [
			{ path: "name", label: "Name", kind: "text" },
			{ path: "href", label: "Href", kind: "url", localization: "shared" },
		],
	},
	{
		path: "disabledExtensionIds",
		label: "Disabled package extensions",
		kind: "tags",
		group: "layout",
		localization: "shared",
	},
	{
		path: "disabledExtensionItemIds",
		label: "Disabled package extension items",
		kind: "tags",
		group: "layout",
		localization: "shared",
	},
	{
		path: "contact",
		label: "Contact",
		kind: "object",
		group: "content",
		localization: "localized",
		fields: [
			{ path: "email", label: "Email", kind: "text", localization: "shared" },
			{ path: "phone", label: "Phone", kind: "text", localization: "shared" },
			{ path: "location", label: "Location", kind: "text" },
		],
	},
];

type FooterLink = InitLandingLinkItem &
	Partial<PhotonSiteFrameLinkItem> & {
		labelPath?: string;
	};

type FooterColumn = {
	id?: string;
	title: string;
	titlePath?: string;
	links: FooterLink[];
};

const normalizeFooterStringItems = (value: unknown): string[] =>
	Array.isArray(value)
		? value
				.map((item) => (typeof item === "string" ? item.trim() : ""))
				.filter(Boolean)
		: [];

const normalizeFooterHref = (href: unknown) =>
	typeof href === "string" ? href.trim() : "";

const getFooterLinkPathname = (href: unknown) => {
	const cleanHref = normalizeFooterHref(href);

	if (!cleanHref.startsWith("/") || cleanHref.startsWith("//")) {
		return cleanHref;
	}

	return (cleanHref.split(/[?#]/u)[0] ?? "/").replace(/\/+$/u, "") || "/";
};

const getFooterLinkDedupeKey = (href: unknown) =>
	`route:${getFooterLinkPathname(href).toLowerCase()}`;

const collectUniqueFooterLinks = <TLink extends { href?: string }>(
	links: TLink[],
	hiddenKeys: ReadonlySet<string> = new Set(),
): TLink[] => {
	const seenKeys = new Set<string>();

	return links.filter((link) => {
		const key = getFooterLinkDedupeKey(link.href);

		if (key === "route:" || hiddenKeys.has(key) || seenKeys.has(key)) {
			return false;
		}

		seenKeys.add(key);

		return true;
	});
};

const normalizeExtensionFooterColumn = (
	column: PhotonSiteFrameNavigationColumn,
): FooterColumn => ({
	id: column.id,
	title: column.title,
	links: column.links.map((link) => ({
		...link,
		name: link.label,
	})),
});

const InitLandingFooterBlock = ({
	block,
}: PhotonBlockComponentProps<InitLandingFooterProps>) => {
	const currentRoute = usePhotonStore((state) => state.document.route);
	const document = usePhotonStore((state) => state.document);
	const isAdmin = usePhotonStore((state) => state.isAdmin);
	const mode = usePhotonStore((state) => state.mode);
	const pageSettings = usePhotonStore((state) => state.pageSettings);
	const resources = usePhotonStore((state) => state.resources);
	const site = usePhotonStore((state) => state.site);
	const siteFrameExtensions = usePhotonStore(
		(state) => state.siteFrameExtensions,
	);
	const bleedStyle = useInitLandingSectionBleedStyle();
	const { ref, atLeastSm, atLeastMd, atLeastLg } =
		useInitLandingSurfaceBreakpoints();
	const extensionContext: PhotonSiteFrameExtensionContext = {
		document,
		resources,
		pageSettings,
		site,
		mode,
		isAdmin,
		currentRoute,
	};
	const footerExtensionItems = collectPhotonFooterExtensionItems(
		resolvePhotonSiteFrameExtensions(
			siteFrameExtensions,
			normalizeFooterStringItems(block.props.disabledExtensionIds),
		),
		normalizeFooterStringItems(block.props.disabledExtensionItemIds),
		extensionContext,
	);
	const localFooterColumns: FooterColumn[] = [
		{
			title: "Услуги",
			links: block.props.services.map((item, index) => ({
				...item,
				labelPath: `services.${index}.name`,
			})),
		},
		{
			title: "Компания",
			links: block.props.company.map((item, index) => ({
				...item,
				labelPath: `company.${index}.name`,
			})),
		},
	];
	const footerColumns = [
		...localFooterColumns,
		...footerExtensionItems.slots.navigation.navigationColumns.map(
			normalizeExtensionFooterColumn,
		),
	]
		.map((column) => ({
			...column,
			links: collectUniqueFooterLinks(column.links),
		}))
		.filter((column) => column.links.length > 0);
	const footerColumnKeys = new Set(
		footerColumns.flatMap((column) =>
			column.links.map((link) => getFooterLinkDedupeKey(link.href)),
		),
	);
	const legalLinks = collectUniqueFooterLinks<FooterLink>(
		[
			...block.props.legal.map((item, index) => ({
				...item,
				labelPath: `legal.${index}.name`,
			})),
			...footerExtensionItems.slots.legal.links.map((link) => ({
				...link,
				name: link.label,
			})),
		],
		footerColumnKeys,
	);
	const renderFooterLinkLabel = (link: FooterLink) =>
		link.labelPath ? (
			<EditableText blockId={block.id} path={link.labelPath} />
		) : (
			link.name ?? link.label
		);

	return (
		<footer
			ref={ref}
			className="border-t border-[var(--photon-site-border)] bg-[var(--photon-site-surface)]"
			style={bleedStyle}
		>
			<div
				className={[
					"mx-auto max-w-7xl px-6 py-16",
					atLeastLg ? "px-8" : "",
				].join(" ")}
			>
				<div
					className={[
						"grid gap-8",
						atLeastMd ? "grid-cols-4" : "grid-cols-2",
						atLeastLg ? "gap-12" : "",
					].join(" ")}
				>
					<div
						className={["col-span-2", atLeastMd ? "md:col-span-1" : ""].join(
							" ",
						)}
					>
						<PhotonLink
							href={String(block.props.homeHref)}
							className="group flex items-center gap-2"
						>
							<InitBrandMark
								label={<EditableText blockId={block.id} path="brandLabel" />}
							/>
						</PhotonLink>
						<EditableTextarea
							blockId={block.id}
							path="brandDescription"
							className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--photon-site-muted-text)]"
						/>
					</div>
					{footerColumns.map((column) => (
						<div key={column.id ?? column.title}>
							<h3 className="mb-4 text-sm font-semibold text-[var(--photon-site-text)]">
								{column.titlePath ? (
									<EditableText blockId={block.id} path={column.titlePath} />
								) : (
									column.title
								)}
							</h3>
							<ul className="space-y-3">
								{column.links.map((item) => (
									<li key={`${column.id ?? column.title}:${item.name ?? item.label}:${item.href}`}>
										<PhotonLink
											href={item.href}
											target={item.target}
											rel={item.rel}
											className="text-sm text-[var(--photon-site-muted-text)] transition-colors hover:text-[var(--photon-site-text)]"
										>
											{renderFooterLinkLabel(item)}
										</PhotonLink>
									</li>
								))}
							</ul>
						</div>
					))}
					<div>
						<h3 className="mb-4 text-sm font-semibold text-[var(--photon-site-text)]">
							Контакты
						</h3>
						<ul className="space-y-3">
							<li>
								<PhotonLink
									href={`mailto:${block.props.contact.email}`}
									className="text-sm text-[var(--photon-site-muted-text)] transition-colors hover:text-[var(--photon-site-text)]"
								>
									<EditableText blockId={block.id} path="contact.email" />
								</PhotonLink>
							</li>
							<li>
								<PhotonLink
									href={`tel:${block.props.contact.phone}`}
									className="text-sm text-[var(--photon-site-muted-text)] transition-colors hover:text-[var(--photon-site-text)]"
								>
									<EditableText blockId={block.id} path="contact.phone" />
								</PhotonLink>
							</li>
							<li className="text-sm text-[var(--photon-site-muted-text)]">
								<EditableText blockId={block.id} path="contact.location" />
							</li>
						</ul>
					</div>
				</div>

				<div
					className={[
						"mt-12 flex items-center justify-between gap-4 border-t border-[var(--photon-site-border)] pt-8",
						atLeastSm ? "flex-row" : "flex-col",
					].join(" ")}
				>
					<p className="text-sm text-[var(--photon-site-muted-text)]">
						&copy; {new Date().getFullYear()} init. All rights reserved.
					</p>
					<div className="flex items-center gap-6">
						{legalLinks.map((item) => (
							<PhotonLink
								key={`${item.name ?? item.label}:${item.href}:legal`}
								href={item.href}
								target={item.target}
								rel={item.rel}
								className="text-sm text-[var(--photon-site-muted-text)] transition-colors hover:text-[var(--photon-site-text)]"
							>
								{renderFooterLinkLabel(item)}
							</PhotonLink>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export const initLandingFooterDefinition =
	definePhotonBlockDefinition<InitLandingFooterProps>({
		type: "init-landing-footer",
		label: "Init Landing Footer",
		description: "Footer from the Init landing page.",
		category: "Layout",
		icon: "panel-bottom-open",
		component: InitLandingFooterBlock,
		fields,
		localizationSchema: createInitLandingBlockLocalizationSchema(fields),
		defaults: {
			brandLabel: createPhotonLocalizedDefault({
				en: "init",
				ru: "init",
			}),
			homeHref: "/",
			brandDescription: createPhotonLocalizedDefault({
				en: "Разработка сайтов в нескольких форматах: готовые решения, модульная сборка через конструктор и индивидуальный custom.",
				ru: "Разработка сайтов в нескольких форматах: готовые решения, модульная сборка через конструктор и индивидуальный custom.",
			}),
			services: [
				{ name: "Готовые сайты", href: "#services" },
				{ name: "Сайт-конструктор", href: "#services" },
				{ name: "Индивидуальная разработка", href: "#services" },
				{ name: "Интернет-магазины и каталоги", href: "#services" },
			] as Array<InitLandingLinkItem & { name: string }>,
			company: [
				{ name: "Почему мы", href: "#why-us" },
				{ name: "Этапы", href: "#process" },
				{ name: "Стоимость", href: "#pricing" },
				{ name: "Контакты", href: "#contact" },
			] as Array<InitLandingLinkItem & { name: string }>,
			legal: [
				{ name: "Privacy Policy", href: "#" },
				{ name: "Terms of Service", href: "#" },
			] as Array<InitLandingLinkItem & { name: string }>,
			contact: {
				email: "hello@init.dev",
				phone: "+7 (700) 123-45-67",
				location: "Astana, KZ",
			},
		},
	});
