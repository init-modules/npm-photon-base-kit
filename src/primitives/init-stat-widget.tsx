"use client";

import gsap from "gsap";
import { type ReactNode, useEffect, useRef, useState } from "react";

export const InitStatWidget = ({
	atLeastLg,
	label,
	suffix = "",
	value,
}: {
	atLeastLg: boolean;
	label: ReactNode;
	suffix?: ReactNode;
	value: number;
}) => {
	const [displayValue, setDisplayValue] = useState(value);
	const startedRef = useRef(false);

	useEffect(() => {
		if (startedRef.current) {
			return;
		}

		startedRef.current = true;
		const state = { value: 0 };
		const tween = gsap.to(state, {
			value,
			duration: 1.6,
			delay: 0.45,
			ease: "power2.out",
			onUpdate: () => setDisplayValue(Math.round(state.value)),
			onComplete: () => setDisplayValue(value),
		});

		return () => {
			tween.kill();
		};
	}, [value]);

	return (
		<div className="text-center">
			<div
				className={[
					"font-semibold text-[var(--photon-site-text)]",
					atLeastLg ? "text-4xl" : "text-3xl",
				].join(" ")}
			>
				{displayValue}
				{suffix}
			</div>
			<div className="mt-1 text-sm text-[var(--photon-site-muted-text)]">
				{label}
			</div>
		</div>
	);
};
