"use client";

import {
	createWebsiteBuilderLocalizedDefault,
	defineWebsiteBuilderBlockDefinition,
	EditableText,
	useWebsiteBuilderI18n,
	useWebsiteBuilderStore,
	type WebsiteBuilderBlockComponentProps,
	type WebsiteBuilderField,
	WebsiteBuilderLink,
	WebsiteBuilderSiteSearch,
} from "@init-modules/website-builder/public";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, ChevronDown, LogIn } from "lucide-react";
import {
	createInitLandingBlockLocalizationSchema,
	InitBrandMark,
	type InitLandingAction,
	InitLandingActionButton,
	type InitLandingHeaderNavItem,
	InitLandingNavLink,
	useInitLandingMobileMenu,
	useInitLandingSurfaceBreakpoints,
	usePreviewSurface,
} from "./shared";

const INIT_LANDING_DROPDOWN_SURFACE = "#fffdf9";
const INIT_LANDING_DROPDOWN_TEXT = "#211916";
const INIT_LANDING_DROPDOWN_MUTED = "#6b5f59";
const INIT_LANDING_DROPDOWN_BORDER = "#e6ddd4";

const appendCurrentSearchParams = (href: string) => {
	if (typeof window === "undefined" || window.location.search === "") {
		return href;
	}

	const url = new URL(href, window.location.origin);
	const currentSearchParams = new URLSearchParams(window.location.search);

	for (const [key, value] of currentSearchParams.entries()) {
		if (!url.searchParams.has(key)) {
			url.searchParams.append(key, value);
		}
	}

	return `${url.pathname}${url.search}${url.hash}`;
};

export type InitLandingHeaderProps = {
	brandLabel: string;
	cta: InitLandingAction;
	loginLabel: string;
	homeHref: string;
	navItems: InitLandingHeaderNavItem[];
	searchPlaceholder: string;
	showLocaleSwitcher?: boolean;
	showLoginAction?: boolean;
};

const fields: WebsiteBuilderField[] = [
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
		path: "navItems",
		label: "Navigation items",
		kind: "repeater",
		group: "content",
		localization: "localized",
		itemLabelPath: "label",
		addLabel: "Add navigation item",
		fields: [
			{ path: "label", label: "Label", kind: "text" },
			{ path: "href", label: "Href", kind: "url", localization: "shared" },
		],
	},
	{
		path: "cta",
		label: "CTA",
		kind: "object",
		group: "content",
		localization: "localized",
		fields: [
			{ path: "label", label: "Label", kind: "text" },
			{ path: "href", label: "Href", kind: "url", localization: "shared" },
		],
	},
	{
		path: "searchPlaceholder",
		label: "Search placeholder",
		kind: "text",
		group: "content",
		localization: "localized",
	},
	{
		path: "showLocaleSwitcher",
		label: "Show locale switcher",
		kind: "toggle",
		group: "layout",
		localization: "shared",
	},
	{
		path: "showLoginAction",
		label: "Show auth button",
		kind: "toggle",
		group: "layout",
		localization: "shared",
	},
	{
		path: "loginLabel",
		label: "Auth button label",
		kind: "text",
		group: "content",
		localization: "localized",
	},
];

const InitLandingLocaleSelect = ({
	currentRoute,
	locale,
	locales,
	label,
}: {
	currentRoute: string;
	locale: string;
	locales: Array<{ code: string; label: string }>;
	label: string;
}) => {
	const activeLocale =
		locales.find((item) => item.code === locale) ?? locales[0] ?? null;

	if (!activeLocale || locales.length <= 1) {
		return null;
	}

	const buildLocaleHref = (nextLocale: string) => {
		const normalizedRoute = currentRoute.trim() || "/";
		if (nextLocale === "en") {
			return normalizedRoute === "/" ? "/en" : `/en${normalizedRoute}`;
		}

		return normalizedRoute.startsWith("/en/")
			? normalizedRoute.slice(3)
			: normalizedRoute === "/en"
				? "/"
				: normalizedRoute;
	};

	return (
		<DropdownMenu.Root modal={false}>
			<DropdownMenu.Trigger asChild>
				<button
					type="button"
					className="inline-flex h-12 cursor-pointer items-center justify-between gap-3 rounded-[1.2rem] border border-[#e6ddd4] bg-[#fffdf9] px-4 text-sm font-medium text-[#211916] opacity-100 shadow-[0_10px_30px_-20px_rgba(32,22,18,0.16)] transition-all duration-300"
				>
					<span className="flex min-w-0 items-center gap-2.5">
						<span className="text-[10px] uppercase tracking-[0.24em] text-[#6b5f59]">
							{label}
						</span>
						<span className="truncate uppercase">{activeLocale.label}</span>
					</span>
					<ChevronDown className="h-4 w-4 shrink-0 text-[#6b5f59]" />
				</button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content
				align="end"
				sideOffset={8}
				collisionPadding={{ top: 24, right: 16, bottom: 24, left: 16 }}
				className="z-50 min-w-[12rem] overflow-hidden rounded-[1.35rem] border border-[#e6ddd4] bg-[#fffdf9] p-1.5 text-[#211916] opacity-100 shadow-[0_24px_80px_rgba(32,22,18,0.18)] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
			>
				<DropdownMenu.RadioGroup value={locale}>
					{locales.map((item) => (
						<DropdownMenu.RadioItem
							key={item.code}
							value={item.code}
							className="relative flex cursor-pointer select-none items-center justify-between rounded-[1rem] px-3 py-2.5 text-sm font-medium text-[#211916] opacity-100 outline-none transition data-[highlighted]:bg-[#f7efe8] data-[state=checked]:bg-[#fbf4ee]"
							onSelect={(event) => {
								event.preventDefault();

								if (typeof window !== "undefined") {
									window.location.assign(
										appendCurrentSearchParams(buildLocaleHref(item.code)),
									);
								}
							}}
						>
							<span className="flex items-center gap-2.5">
								<span className="text-[10px] uppercase tracking-[0.24em] text-[#6b5f59]">
									{label}
								</span>
								<span className="uppercase text-[#211916]">{item.label}</span>
							</span>

							<DropdownMenu.ItemIndicator className="ml-3 inline-flex h-4 w-4 items-center justify-center text-[#df2330]">
								<Check className="h-4 w-4" />
							</DropdownMenu.ItemIndicator>
						</DropdownMenu.RadioItem>
					))}
				</DropdownMenu.RadioGroup>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
};

const InitLandingHeaderBlock = ({
	block,
}: WebsiteBuilderBlockComponentProps<InitLandingHeaderProps>) => {
	const menu = useInitLandingMobileMenu();
	const currentRoute = useWebsiteBuilderStore((state) => state.document.route);
	const isAdmin = useWebsiteBuilderStore((state) => state.isAdmin);
	const mode = useWebsiteBuilderStore((state) => state.mode);
	const requestAuth = useWebsiteBuilderStore((state) => state.requestAuth);
	const previewSurface = usePreviewSurface();
	const stickyPreviewSurface = previewSurface && mode === "preview";
	const { locale, publicLocales, translate } = useWebsiteBuilderI18n();
	const { ref, atLeastMd, atLeastLg } = useInitLandingSurfaceBreakpoints();
	const localeSwitcherVisible =
		block.props.showLocaleSwitcher !== false && publicLocales.length > 1;
	const authButtonVisible =
		block.props.showLoginAction !== false &&
		!isAdmin &&
		mode !== "builder" &&
		typeof requestAuth === "function";

	return (
		<header
			ref={ref}
			data-testid="wb-init-landing-header"
			className={[
				"left-0 right-0 z-50 transition-all duration-500",
				stickyPreviewSurface
					? "fixed bg-[var(--wb-site-background)]/95 backdrop-blur-md shadow-sm"
					: "relative bg-transparent",
			].join(" ")}
			style={
				stickyPreviewSurface ? { top: "var(--wb-dock-offset, 0px)" } : undefined
			}
		>
			<div
				className={["mx-auto max-w-7xl px-6", atLeastLg ? "px-8" : ""].join(
					" ",
				)}
			>
				<nav className="flex min-h-20 items-center justify-between gap-6 py-4">
					<WebsiteBuilderLink
						href={String(block.props.homeHref)}
						className="group flex items-center gap-2"
					>
						<InitBrandMark
							label={<EditableText blockId={block.id} path="brandLabel" />}
						/>
					</WebsiteBuilderLink>

					{atLeastLg ? (
						<>
							<div className="flex min-w-0 items-center gap-8">
								{block.props.navItems.map((item, index) => (
									<InitLandingNavLink
										key={`${item.href}:${item.label}`}
										href={item.href}
										label={
											<EditableText
												blockId={block.id}
												path={`navItems.${index}.label`}
											/>
										}
									/>
								))}
							</div>

							<div className="flex shrink-0 items-center justify-end gap-3">
								{localeSwitcherVisible ? (
									<InitLandingLocaleSelect
										currentRoute={currentRoute}
										locale={locale}
										locales={publicLocales}
										label={translate(
											"websiteBuilder.localeSwitcher.label",
											"Language",
										)}
									/>
								) : null}

								<div className="w-[18rem] xl:w-[22rem]">
									<WebsiteBuilderSiteSearch
										blockId={block.id}
										placeholderPath="searchPlaceholder"
									/>
								</div>

								{authButtonVisible ? (
									<button
										type="button"
										onClick={requestAuth}
										className="inline-flex cursor-pointer items-center gap-2 rounded-[1.2rem] border border-[color-mix(in_srgb,var(--wb-site-border)_84%,white)] bg-white/90 px-5 py-3 text-base font-medium text-[var(--wb-site-text)] transition-all duration-300 hover:bg-[color-mix(in_srgb,var(--wb-site-surface)_96%,white)]"
									>
										<LogIn className="h-4 w-4" />
										<EditableText blockId={block.id} path="loginLabel" />
									</button>
								) : null}

								<div>
									<InitLandingActionButton href={block.props.cta.href}>
										<EditableText blockId={block.id} path="cta.label" />
									</InitLandingActionButton>
								</div>
							</div>
						</>
					) : (
						<button
							type="button"
							className="p-2"
							onClick={menu.toggle}
							aria-label="Toggle menu"
						>
							<menu.icon className="h-6 w-6 text-[var(--wb-site-text)]" />
						</button>
					)}
				</nav>

				{menu.isOpen && !atLeastLg ? (
					<div className="border-t border-[var(--wb-site-border)] py-4">
						<div className="flex flex-col gap-4">
							{block.props.navItems.map((item, index) => (
								<InitLandingNavLink
									key={`${item.href}:${item.label}:mobile`}
									href={item.href}
									label={
										<EditableText
											blockId={block.id}
											path={`navItems.${index}.label`}
										/>
									}
									onNavigate={menu.close}
								/>
							))}
							{localeSwitcherVisible ? (
								<InitLandingLocaleSelect
									currentRoute={currentRoute}
									locale={locale}
									locales={publicLocales}
									label={translate(
										"websiteBuilder.localeSwitcher.label",
										"Language",
									)}
								/>
							) : null}
							<WebsiteBuilderSiteSearch
								blockId={block.id}
								placeholderPath="searchPlaceholder"
							/>
							{authButtonVisible ? (
								<button
									type="button"
									onClick={() => {
										menu.close();
										requestAuth();
									}}
									className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[1.2rem] border border-[color-mix(in_srgb,var(--wb-site-border)_84%,white)] bg-white/90 px-5 py-3 text-base font-medium text-[var(--wb-site-text)] transition-all duration-300 hover:bg-[color-mix(in_srgb,var(--wb-site-surface)_96%,white)]"
								>
									<LogIn className="h-4 w-4" />
									<EditableText blockId={block.id} path="loginLabel" />
								</button>
							) : null}
							<InitLandingActionButton href={block.props.cta.href}>
								<EditableText blockId={block.id} path="cta.label" />
							</InitLandingActionButton>
						</div>
					</div>
				) : null}
			</div>
		</header>
	);
};

export const initLandingHeaderDefinition =
	defineWebsiteBuilderBlockDefinition<InitLandingHeaderProps>({
		type: "init-landing-header",
		label: "Init Landing Header",
		description: "Fixed warm landing header with navigation and CTA.",
		category: "Layout",
		icon: "panels-top-left",
		component: InitLandingHeaderBlock,
		fields,
		localizationSchema: createInitLandingBlockLocalizationSchema(fields),
		defaults: {
			brandLabel: createWebsiteBuilderLocalizedDefault({
				en: "init",
				ru: "init",
			}),
			homeHref: "/",
			navItems: [
				{ label: "Форматы", href: "#services" },
				{ label: "Преимущества", href: "#why-us" },
				{ label: "Стоимость", href: "#pricing" },
				{ label: "Этапы", href: "#process" },
			],
			cta: { label: "Обсудить сайт", href: "#contact" },
			searchPlaceholder: createWebsiteBuilderLocalizedDefault({
				en: "Search the website",
				ru: "Поиск по сайту",
			}),
			showLocaleSwitcher: true,
			showLoginAction: false,
			loginLabel: createWebsiteBuilderLocalizedDefault({
				en: "Admin sign in",
				ru: "Вход для админа",
			}),
		},
	});
