"use client";

import type { ReactNode } from "react";

export const InitStatusPill = ({ children }: { children: ReactNode }) => (
	<div className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--wb-site-border)_50%,transparent)] bg-[color-mix(in_oklab,var(--wb-site-surface)_80%,transparent)] px-4 py-2 shadow-sm backdrop-blur-sm">
		<span className="relative flex h-2 w-2">
			<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--wb-site-accent)] opacity-75" />
			<span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--wb-site-accent)]" />
		</span>
		{children}
	</div>
);
