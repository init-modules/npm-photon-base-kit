import type { MarketingDemoBlockVariant, MarketingDemoVariantTheme } from "./shared";
import { airMarketingDemoVariantTheme } from "./variants/air";
import { defaultMarketingDemoVariantTheme } from "./variants/default";

export const marketingDemoVariantThemes: Record<
	MarketingDemoBlockVariant,
	MarketingDemoVariantTheme
> = {
	default: defaultMarketingDemoVariantTheme,
	air: airMarketingDemoVariantTheme,
};
