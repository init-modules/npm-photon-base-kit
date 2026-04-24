"use client";

import {
	collectPhotonHeaderExtensionItems,
	createPhotonLocalizedDefault,
	definePhotonBlockDefinition,
	EditableText,
	resolvePhotonSiteFrameExtensions,
	usePhotonI18n,
	usePhotonStore,
	type PhotonBlockComponentProps,
	type PhotonField,
	PhotonLink,
	PhotonSiteSearch,
	resolvePhotonSiteFrameMobileControls,
	usePhotonSiteFrameScrollLock,
	type PhotonSiteFrameActionItem,
	type PhotonSiteFrameExtensionContext,
	type PhotonSiteFrameLinkItem,
	type PhotonSiteFrameMobileControls,
} from "@init/photon/public";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, ChevronDown, LogIn } from "lucide-react";
import { useEffect } from "react";
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
	disabledExtensionIds?: string[];
	disabledExtensionItemIds?: string[];
	loginLabel: string;
	homeHref: string;
	mobile?: PhotonSiteFrameMobileControls;
	navItems: InitLandingHeaderNavItem[];
	searchPlaceholder: string;
	showLocaleSwitcher?: boolean;
	showLoginAction?: boolean;
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
		path: "mobile.menu.fixedTrigger",
		label: "Fixed mobile burger button",
		kind: "toggle",
		group: "layout",
		localization: "shared",
	},
	{
		path: "mobile.menu.scrollLock",
		label: "Lock scroll when mobile menu is open",
		kind: "toggle",
		group: "layout",
		localization: "shared",
	},
	{
		path: "mobile.menu.floating",
		label: "Floating mobile burger",
		kind: "toggle",
		group: "layout",
		localization: "shared",
	},
	{
		path: "mobile.menu.disableFloatingOnSmallScreens",
		label: "Disable floating burger on small screens",
		kind: "toggle",
		group: "layout",
		localization: "shared",
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
		path: "loginLabel",
		label: "Auth button label",
		kind: "text",
		group: "content",
		localization: "localized",
	},
];

const normalizeHeaderStringItems = (value: unknown): string[] =>
	Array.isArray(value)
		? value
				.map((item) => (typeof item === "string" ? item.trim() : ""))
				.filter(Boolean)
		: [];

const normalizeHeaderHref = (href: unknown) =>
	typeof href === "string" ? href.trim() : "";

const getHeaderLinkPathname = (href: unknown) => {
	const cleanHref = normalizeHeaderHref(href);

	if (!cleanHref.startsWith("/") || cleanHref.startsWith("//")) {
		return cleanHref;
	}

	return (cleanHref.split(/[?#]/u)[0] ?? "/").replace(/\/+$/u, "") || "/";
};

const getHeaderLinkDedupeKey = (href: unknown) =>
	`route:${getHeaderLinkPathname(href).toLowerCase()}`;

const hasAuthenticatedUser = (resources: Record<string, unknown>) => {
	const auth = resources.auth as
		| { user?: null | Record<string, unknown> }
		| undefined;

	return Boolean(auth?.user);
};

const getActionVisibleHref = (
	action: PhotonSiteFrameActionItem,
	authenticatedUser: boolean,
) =>
	authenticatedUser && (action.kind ?? "link") === "auth"
		? (action.authenticatedHref ?? action.href)
		: action.href;

const collectUniqueHeaderLinks = <TLink extends { href?: string }>(
	links: TLink[],
	hiddenKeys: ReadonlySet<string> = new Set(),
): TLink[] => {
	const seenKeys = new Set<string>();

	return links.filter((link) => {
		const key = getHeaderLinkDedupeKey(link.href);

		if (key === "route:" || hiddenKeys.has(key) || seenKeys.has(key)) {
			return false;
		}

		seenKeys.add(key);

		return true;
	});
};

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
}: PhotonBlockComponentProps<InitLandingHeaderProps>) => {
	const menu = useInitLandingMobileMenu();
	const mobileControls = resolvePhotonSiteFrameMobileControls(block.props.mobile);
	const currentRoute = usePhotonStore((state) => state.document.route);
	const document = usePhotonStore((state) => state.document);
	const isAdmin = usePhotonStore((state) => state.isAdmin);
	const mode = usePhotonStore((state) => state.mode);
	const pageSettings = usePhotonStore((state) => state.pageSettings);
	const requestAuth = usePhotonStore((state) => state.requestAuth);
	const resources = usePhotonStore((state) => state.resources);
	const site = usePhotonStore((state) => state.site);
	const siteFrameExtensions = usePhotonStore(
		(state) => state.siteFrameExtensions,
	);
	const previewSurface = usePreviewSurface();
	const stickyPreviewSurface = previewSurface && mode === "preview";
	const { locale, publicLocales, translate } = usePhotonI18n();
	const { ref, width, atLeastXl } = useInitLandingSurfaceBreakpoints();
	const desktopLayout = atLeastXl && width >= 1440;
	const extensionContext: PhotonSiteFrameExtensionContext = {
		document,
		resources,
		pageSettings,
		site,
		mode,
		isAdmin,
		currentRoute,
	};
	const headerExtensionItems = collectPhotonHeaderExtensionItems(
		resolvePhotonSiteFrameExtensions(
			siteFrameExtensions,
			normalizeHeaderStringItems(block.props.disabledExtensionIds),
		),
		normalizeHeaderStringItems(block.props.disabledExtensionItemIds),
		extensionContext,
	);
	const localeSwitcherVisible =
		block.props.showLocaleSwitcher !== false && publicLocales.length > 1;
	const authenticatedUser = hasAuthenticatedUser(resources);
	const rawExtensionActions = collectUniqueHeaderLinks<PhotonSiteFrameActionItem>(
		[
			...headerExtensionItems.slots.actions.links,
			...headerExtensionItems.slots.actions.actions,
		],
	).filter((action) => {
		const visibleHref = getActionVisibleHref(action, authenticatedUser);

		return Boolean(action.component) || normalizeHeaderHref(visibleHref) !== "";
	});
	const extensionActionKeys = new Set<string>();

	for (const action of rawExtensionActions) {
		extensionActionKeys.add(getHeaderLinkDedupeKey(action.href));

		if (action.authenticatedHref) {
			extensionActionKeys.add(getHeaderLinkDedupeKey(action.authenticatedHref));
		}
	}

	const ctaKey = getHeaderLinkDedupeKey(block.props.cta.href);
	const shouldRenderCta =
		normalizeHeaderHref(block.props.cta.href) !== "" &&
		!extensionActionKeys.has(ctaKey);
	const prominentLinks = collectUniqueHeaderLinks<PhotonSiteFrameLinkItem>(
		headerExtensionItems.slots.prominent.links,
		new Set([
			...extensionActionKeys,
			...(shouldRenderCta ? [ctaKey] : []),
		]),
	);
	const prominentKeys = new Set(
		prominentLinks.map((item) => getHeaderLinkDedupeKey(item.href)),
	);
	const editableNavItems = block.props.navItems.map((item, index) => ({
		...item,
		labelPath: `navItems.${index}.label`,
	}));
	const navItems = collectUniqueHeaderLinks<
		| (InitLandingHeaderNavItem & { labelPath?: string })
		| PhotonSiteFrameLinkItem
	>(
		[
			...editableNavItems,
			...headerExtensionItems.slots.navigation.links,
		],
		new Set([
			...extensionActionKeys,
			...prominentKeys,
			...(shouldRenderCta ? [ctaKey] : []),
		]),
	);
	const hasExtensionAuthAction = rawExtensionActions.some(
		(action) => (action.kind ?? "link") === "auth",
	);
	const authButtonVisible =
		block.props.showLoginAction !== false &&
		!isAdmin &&
		!authenticatedUser &&
		!hasExtensionAuthAction &&
		mode !== "builder" &&
		typeof requestAuth === "function";
	const actionClassName =
		"inline-flex items-center justify-center gap-2 rounded-[1.2rem] border border-[color-mix(in_srgb,var(--photon-site-border)_84%,white)] bg-white/90 px-5 py-3 text-base font-medium text-[var(--photon-site-text)] transition-all duration-300 hover:bg-[color-mix(in_srgb,var(--photon-site-surface)_96%,white)]";

	const renderExtensionAction = (
		action: PhotonSiteFrameActionItem,
		suffix = "",
	) => {
		if (action.component) {
			const ActionComponent = action.component;

			return (
				<ActionComponent
					key={`${action.id ?? `${action.label}:${action.href}`}${suffix}`}
					action={action}
					className={actionClassName}
					context={extensionContext}
					requestAuth={requestAuth}
				/>
			);
		}

		if ((action.kind ?? "link") === "auth") {
			if (authenticatedUser) {
				const authenticatedHref = action.authenticatedHref ?? action.href;

				if (!authenticatedHref) {
					return null;
				}

				return (
					<PhotonLink
						key={`${action.id ?? `${action.authenticatedLabel ?? action.label}:${authenticatedHref}`}${suffix}`}
						href={authenticatedHref}
						target={action.authenticatedTarget}
						rel={action.authenticatedRel}
						className={actionClassName}
					>
						{action.authenticatedLabel ?? action.label}
					</PhotonLink>
				);
			}

			if (typeof requestAuth !== "function") {
				return null;
			}

			return (
				<button
					key={`${action.id ?? `${action.label}:${action.href}`}${suffix}`}
					type="button"
					onClick={() => {
						menu.close();
						requestAuth();
					}}
					className={actionClassName}
				>
					{action.label}
				</button>
			);
		}

		return (
			<PhotonLink
				key={`${action.id ?? `${action.label}:${action.href}`}${suffix}`}
				href={action.href}
				target={action.target}
				rel={action.rel}
				onClick={suffix ? menu.close : undefined}
				className={actionClassName}
			>
				{action.label}
			</PhotonLink>
		);
	};

	const renderNavLabel = (
		item:
			| (InitLandingHeaderNavItem & { labelPath?: string })
			| PhotonSiteFrameLinkItem,
	) =>
		"labelPath" in item && item.labelPath ? (
			<EditableText blockId={block.id} path={item.labelPath} />
		) : (
			item.label
		);
	const mobilePanelClassName = [
		"fixed right-3 z-[55] max-h-[calc(100dvh-6rem)] w-[min(24rem,calc(100vw-1.5rem))] overflow-y-auto rounded-[1.6rem] border border-[var(--photon-site-border)] bg-[var(--photon-site-surface)] p-4 text-[var(--photon-site-text)] shadow-[0_26px_80px_rgba(32,22,18,0.18)] backdrop-blur-xl transition-[opacity,transform,visibility] duration-300 ease-in-out",
		menu.isOpen
			? "visible pointer-events-auto translate-x-0 opacity-100"
			: "invisible pointer-events-none translate-x-[calc(100%+1rem)] opacity-0",
	].join(" ");
	const mobileTriggerClassName = [
		isAdmin ? "absolute top-3" : "fixed",
		mobileControls.menu.floating ? "right-3 rounded-[1.2rem]" : "right-0 rounded-l-[1.2rem] rounded-r-none border-r-0",
		mobileControls.menu.floating &&
		mobileControls.menu.disableFloatingOnSmallScreens
			? "max-[420px]:right-0 max-[420px]:rounded-l-[1.2rem] max-[420px]:rounded-r-none max-[420px]:border-r-0"
			: "",
		"z-[60] inline-flex h-12 w-12 cursor-pointer items-center justify-center border border-[var(--photon-site-border)] bg-[var(--photon-site-surface)] text-[var(--photon-site-text)] opacity-100 shadow-[0_18px_44px_rgba(32,22,18,0.16)] backdrop-blur-xl transition-[background-color,border-color,color,transform] duration-300 ease-in-out hover:border-[var(--photon-site-accent)] hover:text-[var(--photon-site-accent)]",
	].join(" ");
	const renderMobileMenuContent = () => (
		<div className="flex flex-col gap-4">
			{navItems.map((item) => (
				<InitLandingNavLink
					key={`${"id" in item ? item.id : ""}:${item.href}:${item.label}:mobile`}
					href={item.href}
					label={renderNavLabel(item)}
					onNavigate={menu.close}
				/>
			))}
			{localeSwitcherVisible ? (
				<InitLandingLocaleSelect
					currentRoute={currentRoute}
					locale={locale}
					locales={publicLocales}
					label={translate("photon.localeSwitcher.label", "Language")}
				/>
			) : null}
			<PhotonSiteSearch
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
					className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[1.2rem] border border-[color-mix(in_srgb,var(--photon-site-border)_84%,white)] bg-white/90 px-5 py-3 text-base font-medium text-[var(--photon-site-text)] transition-all duration-300 ease-in-out hover:bg-[color-mix(in_srgb,var(--photon-site-surface)_96%,white)]"
				>
					<LogIn className="h-4 w-4" />
					<EditableText blockId={block.id} path="loginLabel" />
				</button>
			) : null}
			{prominentLinks.map((item) => (
				<InitLandingActionButton
					key={item.id ?? `${item.href}:${item.label}:prominent:mobile`}
					href={item.href}
					outline
				>
					{item.label}
				</InitLandingActionButton>
			))}
			{shouldRenderCta ? (
				<InitLandingActionButton href={block.props.cta.href}>
					<EditableText blockId={block.id} path="cta.label" />
				</InitLandingActionButton>
			) : null}
			{rawExtensionActions.map((action) =>
				renderExtensionAction(action, ":mobile"),
			)}
		</div>
	);

	useEffect(() => {
		if (desktopLayout && menu.isOpen) {
			menu.close();
		}
	}, [desktopLayout, menu]);

	usePhotonSiteFrameScrollLock(
		!desktopLayout && menu.isOpen && mobileControls.menu.scrollLock,
	);

	return (
		<header
			ref={ref}
			data-testid="photon-init-landing-header"
			className={[
				"left-0 right-0 z-50 transition-all duration-500",
				stickyPreviewSurface
					? "fixed bg-[var(--photon-site-background)]/95 backdrop-blur-md shadow-sm"
					: "relative bg-transparent",
			].join(" ")}
			style={
				stickyPreviewSurface ? { top: "var(--photon-dock-offset, 0px)" } : undefined
			}
		>
			{mobileControls.menu.fixedTrigger && !desktopLayout ? (
				<button
					type="button"
					className={mobileTriggerClassName}
					style={
						isAdmin
							? undefined
							: {
									top: "calc(var(--photon-dock-offset, 0px) + env(safe-area-inset-top) + 0.75rem)",
								}
					}
					onClick={menu.toggle}
					aria-label={menu.isOpen ? "Close menu" : "Open menu"}
					aria-expanded={menu.isOpen}
				>
					<menu.icon className="h-5 w-5 transition-transform duration-300 ease-in-out" />
				</button>
			) : null}
			<div
				className={["mx-auto max-w-7xl px-6", desktopLayout ? "px-8" : ""].join(
					" ",
				)}
			>
				<nav className="flex min-h-20 items-center justify-between gap-6 py-4">
					<PhotonLink
						href={String(block.props.homeHref)}
						className="group flex items-center gap-2"
					>
						<InitBrandMark
							label={<EditableText blockId={block.id} path="brandLabel" />}
						/>
					</PhotonLink>

					{desktopLayout ? (
						<>
							<div className="flex min-w-0 items-center gap-5">
								{navItems.map((item) => (
									<InitLandingNavLink
										key={`${"id" in item ? item.id : ""}:${item.href}:${item.label}`}
										href={item.href}
										label={renderNavLabel(item)}
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
											"photon.localeSwitcher.label",
											"Language",
										)}
									/>
								) : null}

								<div className="w-[clamp(12rem,16vw,18rem)]">
									<PhotonSiteSearch
										blockId={block.id}
										placeholderPath="searchPlaceholder"
									/>
								</div>

								{prominentLinks.map((item) => (
									<InitLandingActionButton
										key={item.id ?? `${item.href}:${item.label}:prominent`}
										href={item.href}
										outline
									>
										{item.label}
									</InitLandingActionButton>
								))}

								{authButtonVisible ? (
									<button
										type="button"
										onClick={requestAuth}
										className="inline-flex cursor-pointer items-center gap-2 rounded-[1.2rem] border border-[color-mix(in_srgb,var(--photon-site-border)_84%,white)] bg-white/90 px-5 py-3 text-base font-medium text-[var(--photon-site-text)] transition-all duration-300 hover:bg-[color-mix(in_srgb,var(--photon-site-surface)_96%,white)]"
									>
										<LogIn className="h-4 w-4" />
										<EditableText blockId={block.id} path="loginLabel" />
									</button>
								) : null}

								{shouldRenderCta ? (
									<InitLandingActionButton href={block.props.cta.href}>
										<EditableText blockId={block.id} path="cta.label" />
									</InitLandingActionButton>
								) : null}

								{rawExtensionActions.map((action) =>
									renderExtensionAction(action),
								)}
							</div>
						</>
					) : !mobileControls.menu.fixedTrigger ? (
						<button
							type="button"
							onClick={menu.toggle}
							aria-label={menu.isOpen ? "Close menu" : "Open menu"}
							aria-expanded={menu.isOpen}
							className="inline-flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-[1.2rem] border border-[var(--photon-site-border)] bg-[var(--photon-site-surface)] text-[var(--photon-site-text)] transition duration-300 ease-in-out hover:border-[var(--photon-site-accent)] hover:text-[var(--photon-site-accent)]"
						>
							<menu.icon className="h-5 w-5" />
						</button>
					) : null}
				</nav>
			</div>
			{!desktopLayout ? (
				<div
					className={[
						"fixed inset-0 z-[55] transition-[visibility] duration-300 ease-in-out",
						menu.isOpen ? "visible" : "invisible",
					].join(" ")}
				>
					<button
						type="button"
						aria-label="Close menu"
						className={[
							"absolute inset-0 cursor-default bg-black/25 backdrop-blur-[2px] transition-opacity duration-300 ease-in-out",
							menu.isOpen
								? "pointer-events-auto opacity-100"
								: "pointer-events-none opacity-0",
						].join(" ")}
						onClick={menu.close}
					/>
					<div
						className={mobilePanelClassName}
						style={{
							top: "calc(var(--photon-dock-offset, 0px) + env(safe-area-inset-top) + 4.75rem)",
						}}
					>
						<div className="mb-4 flex items-center justify-between gap-3">
							<InitBrandMark
								label={<EditableText blockId={block.id} path="brandLabel" />}
							/>
							<button
								type="button"
								aria-label="Close menu"
								onClick={menu.close}
								className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[1rem] border border-[var(--photon-site-border)] text-[var(--photon-site-text)] transition duration-300 ease-in-out hover:border-[var(--photon-site-accent)] hover:text-[var(--photon-site-accent)]"
							>
								<menu.icon className="h-5 w-5" />
							</button>
						</div>
						{renderMobileMenuContent()}
					</div>
				</div>
			) : null}
		</header>
	);
};

export const initLandingHeaderDefinition =
	definePhotonBlockDefinition<InitLandingHeaderProps>({
		type: "init-landing-header",
		label: "Init Landing Header",
		description: "Fixed warm landing header with navigation and CTA.",
		category: "Layout",
		icon: "panels-top-left",
		component: InitLandingHeaderBlock,
		fields,
		localizationSchema: createInitLandingBlockLocalizationSchema(fields),
		defaults: {
			brandLabel: createPhotonLocalizedDefault({
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
			searchPlaceholder: createPhotonLocalizedDefault({
				en: "Search the website",
				ru: "Поиск по сайту",
			}),
			showLocaleSwitcher: true,
			showLoginAction: false,
			mobile: {
				menu: {
					type: "drawer",
					fixedTrigger: true,
					scrollLock: true,
					floating: false,
					disableFloatingOnSmallScreens: true,
				},
			},
			loginLabel: createPhotonLocalizedDefault({
				en: "Admin sign in",
				ru: "Вход для админа",
			}),
		},
	});
