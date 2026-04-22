"use client";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@init/ui";
import {
	createPhotonLocalizedDefault,
	definePhotonBlockDefinition,
	EditableText,
	type PhotonBlockComponentProps,
	type PhotonBlockDefinition,
	PhotonLink,
} from "@init/photon/public";

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
}: PhotonBlockComponentProps<BreadcrumbsBlockProps>) => {
	const items = normalizeItems(block.props.items);

	if (items.length === 0) {
		return null;
	}

	return (
		<section className="bg-[var(--photon-site-background)] px-5 pt-8 text-[var(--photon-site-text)] sm:px-8">
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
										<PhotonLink
											href={item.href}
											className="transition hover:text-[var(--photon-site-text)]"
										>
											<EditableText
												blockId={block.id}
												path={`items.${index}.label`}
											/>
										</PhotonLink>
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

export const breadcrumbsDefinition: PhotonBlockDefinition<BreadcrumbsBlockProps> =
	definePhotonBlockDefinition<BreadcrumbsBlockProps>({
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
					label: createPhotonLocalizedDefault({
						en: "Home",
						ru: "Главная",
					}),
					href: "/",
					current: false,
				},
				{
					label: createPhotonLocalizedDefault({
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
				fields: [
					{ path: "label", label: "Label", kind: "text" },
					{ path: "href", label: "Href", kind: "url", localization: "shared" },
					{
						path: "current",
						label: "Current",
						kind: "toggle",
						localization: "shared",
					},
				],
			},
		],
		component: BreadcrumbsBlock,
	});
