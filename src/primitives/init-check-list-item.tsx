"use client";

import { Check } from "lucide-react";
import type { ReactNode } from "react";

export const InitCheckListItem = ({ children }: { children: ReactNode }) => (
	<li className="flex items-start gap-3">
		<Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--photon-site-accent)]" />
		<div className="text-sm text-[var(--photon-site-muted-text)]">{children}</div>
	</li>
);
