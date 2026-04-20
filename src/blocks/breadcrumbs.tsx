"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@init-modules/ui";
import {
	createWebsiteBuilderLocalizedDefault,
	defineWebsiteBuilderBlockDefinition,
	EditableText,
	WebsiteBuilderLink,
	type WebsiteBuilderBlockComponentProps,
	type WebsiteBuilderBlockDefinition,
} from "@init-modules/website-builder";

type BreadcrumbItemProps = {
	label: unknown;
	href: string;
	current?: boolean;
};

type BreadcrumbsBlockProps = {
	items: BreadcrumbItemProps[];
};

const normalizeItems = (items: unknown): BreadcrumbItemProps[] =>
	Array.isArray(items)
		? items.flatMap((item) => {
				if (typeof item !== "object" || item === null) {
					return [];
				}

				const candidate = item as Record<string, unknown>;
				const label =
					typeof candidate.label === "string" ||
					(typeof candidate.label === "object" && candidate.label !== null)
						? candidate.label
						: null;

				if (!label) {
					return [];
				}

				return [
					{
						label,
						href:
							typeof candidate.href === "string" && candidate.href
								? candidate.href
								: "#",
						current: Boolean(candidate.current),
					},
				];
			})
		: [];

const BreadcrumbsBlock = ({
	block,
}: WebsiteBuilderBlockComponentProps<BreadcrumbsBlockProps>) => {
	const items = normalizeItems(block.props.items);

	if (items.length === 0) {
		return null;
	}

	return (
		<section className="bg-[var(--wb-site-background)] px-5 pt-8 text-[var(--wb-site-text)] sm:px-8">
			<div className="mx-auto max-w-[96rem]">
				<Breadcrumb>
					<BreadcrumbList>
						{items.map((item, index) => {
							const current = item.current || index === items.length - 1;

							return (
								<BreadcrumbItem key={`${item.href}:${index}`}>
									{current ? (
										<BreadcrumbPage>
											<EditableText
												blockId={block.id}
												path={`items.${index}.label`}
											/>
										</BreadcrumbPage>
									) : (
										<WebsiteBuilderLink
											href={item.href}
											className="transition hover:text-[var(--wb-site-text)]"
										>
											<EditableText
												blockId={block.id}
												path={`items.${index}.label`}
											/>
										</WebsiteBuilderLink>
									)}
									{index < items.length - 1 ? <BreadcrumbSeparator /> : null}
								</BreadcrumbItem>
							);
						})}
					</BreadcrumbList>
				</Breadcrumb>
			</div>
		</section>
	);
};

export const breadcrumbsDefinition: WebsiteBuilderBlockDefinition<BreadcrumbsBlockProps> =
	defineWebsiteBuilderBlockDefinition<BreadcrumbsBlockProps>({
		type: "breadcrumbs",
		label: "Breadcrumbs",
		labelKey: "marketingDemoKit.breadcrumbs.label",
		description: "Compact navigation trail for pages and flows.",
		descriptionKey: "marketingDemoKit.breadcrumbs.description",
		category: "Navigation",
		icon: "chevrons-right",
		defaults: {
			items: [
				{
					label: createWebsiteBuilderLocalizedDefault({
						en: "Home",
						ru: "Главная",
					}),
					href: "/",
					current: false,
				},
				{
					label: createWebsiteBuilderLocalizedDefault({
						en: "Current page",
						ru: "Текущая страница",
					}),
					href: "#",
					current: true,
				},
			],
		},
		fields: [
			{
				path: "items",
				label: "Items",
				kind: "repeater",
				group: "content",
				localization: "localized",
				itemFields: [
					{ path: "label", label: "Label", kind: "text" },
					{ path: "href", label: "Href", kind: "url", localization: "shared" },
					{ path: "current", label: "Current", kind: "toggle", localization: "shared" },
				],
			},
		],
		component: BreadcrumbsBlock,
	});
