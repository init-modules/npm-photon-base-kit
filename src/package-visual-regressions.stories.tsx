import {
	InitStatusPill,
	InitStatWidget,
	InitTestimonialCard,
} from "./primitives";
import {
	type MarketingDemoDesignPreset,
	marketingDemoDesignPresets,
} from "./themes";

const surfaceStyle = (preset: MarketingDemoDesignPreset) => ({
	"--photon-site-background": preset.appearance === "dark" ? "#081321" : "#f8f3ed",
	"--photon-site-surface": preset.appearance === "dark" ? "#0f1b2d" : "#fffdf9",
	"--photon-site-text": preset.appearance === "dark" ? "#f8fbff" : "#211916",
	"--photon-site-muted-text": preset.appearance === "dark" ? "#9fb2c7" : "#6b5f59",
	"--photon-site-accent": preset.appearance === "dark" ? "#67e8f9" : "#dc1f2f",
	"--photon-site-border": preset.appearance === "dark" ? "#1e3a4d" : "#e6ddd4",
	backgroundColor: "var(--photon-site-background)",
	color: "var(--photon-site-text)",
});

export const BaseKitThemeMatrix = () => (
	<div className="grid gap-5 bg-neutral-100 p-6">
		{marketingDemoDesignPresets.map((preset) => (
			<section
				key={preset.id}
				className="grid gap-4 rounded-lg border p-5"
				data-testid={`base-kit-package-theme-${preset.id}`}
				style={surfaceStyle(preset)}
			>
				<div className="flex flex-wrap items-center justify-between gap-3">
					<div>
						<h2 className="text-xl font-semibold text-[var(--photon-site-text)]">
							{preset.label}
						</h2>
						<p className="text-sm text-[var(--photon-site-muted-text)]">
							{preset.description}
						</p>
					</div>
					<InitStatusPill>Theme ready</InitStatusPill>
				</div>

				<div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_220px]">
					<InitTestimonialCard
						profile={
							<div className="text-sm font-medium text-[var(--photon-site-text)]">
								Photon QA
							</div>
						}
						quote="Package-owned visual coverage keeps theme primitives auditable."
					/>
					<InitStatWidget
						atLeastLg={false}
						label="Theme variants"
						value={marketingDemoDesignPresets.length}
						suffix="+"
					/>
				</div>
			</section>
		))}
	</div>
);

export default {
	title: "Packages/Photon Base Kit/Visual Matrix",
	component: BaseKitThemeMatrix,
	parameters: {
		layout: "fullscreen",
	},
};

export const Themes = {};
