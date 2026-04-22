"use client";

import type { CSSProperties, ReactNode } from "react";

export const InitTestimonialCard = ({
	className = "",
	profile,
	quote,
	style,
}: {
	className?: string;
	profile: ReactNode;
	quote: ReactNode;
	style?: CSSProperties;
}) => (
	<div
		className={`group rounded-[1.75rem] border border-[color-mix(in_srgb,var(--photon-site-border)_86%,white)] bg-[var(--photon-site-surface)] p-8 hover:border-[color-mix(in_srgb,var(--photon-site-accent)_20%,var(--photon-site-border))] hover:shadow-lg ${className}`.trim()}
		style={style}
	>
		<div className="mb-4 font-serif text-5xl text-[color-mix(in_srgb,var(--photon-site-accent)_20%,transparent)] transition-colors group-hover:text-[color-mix(in_srgb,var(--photon-site-accent)_30%,transparent)]">
			&ldquo;
		</div>
		<div className="mb-6 leading-relaxed text-[var(--photon-site-muted-text)]">
			{quote}
		</div>
		{profile}
	</div>
);
