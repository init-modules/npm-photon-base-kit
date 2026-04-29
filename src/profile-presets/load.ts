import {
	type FetchPhotonProfileCatalogOptions,
	fetchPhotonProfileCatalog,
	type PhotonColorScheme,
	type PhotonDesignPreset,
	type PhotonProfileCatalog,
	type PhotonProfileTemplate,
	type PhotonTemplateFamily,
} from "@init/photon/sdk";

/**
 * Slug parity with `Init\Photon\Profiles\ProfileTemplates\Seeders\PhotonProfileTemplateSeeder`.
 * Hand-authored so SSR without a backend renders a coherent catalog whose
 * identifiers match what the live PHP database would return after migrate+seed.
 *
 * Tokens, structure, and copy are intentionally null on the fallback rows: the
 * seeder is the source-of-truth for the rich payload, and the loader's job here
 * is to keep the consumer from dereferencing `undefined` when the network is
 * unreachable. Slug joins (familySlug → templateFamilies, colorSchemeSlug →
 * colorSchemes, designPresetSlug → designPresets) resolve identically.
 */

const families: PhotonTemplateFamily[] = [
	{
		slug: "aurora-current",
		name: "Aurora Current",
		summary: "The default Aurora glossy dark builder presentation family.",
		meta: { appearance: "dark" },
		position: 10,
	},
	{
		slug: "init-landing",
		name: "Init Landing",
		summary:
			"Frameless warm commercial landing family matching the Init public site rhythm.",
		meta: { appearance: "light" },
		position: 20,
	},
];

const colorSchemes: PhotonColorScheme[] = [
	{ slug: "midnight-aqua", name: "Midnight Aqua", tokens: null, meta: null, position: 10 },
	{ slug: "ember-noir", name: "Ember Noir", tokens: null, meta: null, position: 20 },
	{ slug: "neon-orchid", name: "Neon Orchid", tokens: null, meta: null, position: 30 },
	{ slug: "citrus-punch", name: "Citrus Punch", tokens: null, meta: null, position: 40 },
	{ slug: "mint-ledger", name: "Mint Ledger", tokens: null, meta: null, position: 50 },
];

const designPresets: PhotonDesignPreset[] = [
	{ slug: "aurora-current", name: "Aurora Current", tokens: null, meta: null, position: 10 },
	{ slug: "init-landing", name: "Init Landing", tokens: null, meta: null, position: 20 },
];

const templateEntries: ReadonlyArray<{
	slug: string;
	familySlug: string;
	colorSchemeSlug: string | null;
	designPresetSlug: string;
	name: string;
	nameRu: string;
	summary: string;
	position: number;
}> = [
	{
		slug: "aurora-current-template",
		familySlug: "aurora-current",
		colorSchemeSlug: "midnight-aqua",
		designPresetSlug: "aurora-current",
		name: "Aurora Current Template",
		nameRu: "Шаблон Aurora Current",
		summary:
			"The default aurora showcase blueprint with the current glossy builder presentation.",
		position: 10,
	},
	{
		slug: "init-landing-template",
		familySlug: "init-landing",
		colorSchemeSlug: null,
		designPresetSlug: "init-landing",
		name: "Init Landing Template",
		nameRu: "Шаблон Init Landing",
		summary:
			"A warm commercial landing blueprint matching the Init public landing shell and section rhythm.",
		position: 20,
	},
];

const templates: PhotonProfileTemplate[] = templateEntries.flatMap((entry) => [
	{
		slug: entry.slug,
		locale: "en",
		familySlug: entry.familySlug,
		colorSchemeSlug: entry.colorSchemeSlug,
		designPresetSlug: entry.designPresetSlug,
		name: entry.name,
		summary: entry.summary,
		structure: null,
		copy: null,
		meta: null,
		position: entry.position,
	},
	{
		slug: entry.slug,
		locale: "ru",
		familySlug: entry.familySlug,
		colorSchemeSlug: entry.colorSchemeSlug,
		designPresetSlug: entry.designPresetSlug,
		name: entry.nameRu,
		summary: entry.summary,
		structure: null,
		copy: null,
		meta: null,
		position: entry.position,
	},
]);

export const photonBaseProfileCatalogFallback: PhotonProfileCatalog = {
	templates,
	families,
	colorSchemes,
	designPresets,
};

/**
 * Server-side loader: fetches the live profile catalog from the PHP
 * backend, falling back to the in-package typed constant if the
 * fetch fails (5xx / abort / network). Calling code never has to
 * handle a thrown error to keep SSR resilient.
 *
 * `options.backendUrl` should be the same URL the rest of the app
 * uses to talk to Laravel (e.g. `http://laravel:8000` from inside
 * docker, or `process.env.PHOTON_BACKEND_URL`).
 */
export const loadPhotonProfileCatalog = async (
	options: Omit<FetchPhotonProfileCatalogOptions, "fallback"> & {
		fallback?: PhotonProfileCatalog;
	},
): Promise<PhotonProfileCatalog> => {
	const fallback = options.fallback ?? photonBaseProfileCatalogFallback;
	try {
		return await fetchPhotonProfileCatalog({
			backendUrl: options.backendUrl,
			locale: options.locale,
			signal: options.signal,
			fetchImpl: options.fetchImpl,
		});
	} catch (error) {
		console.warn(
			"[photon-base-kit] loadPhotonProfileCatalog: live fetch failed, returning fallback",
			error,
		);
		return fallback;
	}
};
