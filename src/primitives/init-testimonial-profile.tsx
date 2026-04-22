"use client";

import type { ReactNode } from "react";

export const InitTestimonialProfile = ({
	initials,
	name,
	role,
}: {
	initials: ReactNode;
	name: ReactNode;
	role: ReactNode;
}) => (
	<div className="flex items-center gap-4">
		<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--photon-site-accent)_10%,transparent)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[color-mix(in_srgb,var(--photon-site-accent)_20%,transparent)]">
			<span className="text-sm font-semibold text-[var(--photon-site-accent)]">
				{initials}
			</span>
		</div>
		<div>
			<p className="font-semibold text-[var(--photon-site-text)]">{name}</p>
			<p className="text-sm text-[var(--photon-site-muted-text)]">{role}</p>
		</div>
	</div>
);
