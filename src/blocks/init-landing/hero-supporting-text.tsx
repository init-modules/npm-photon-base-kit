"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const GLYPHS = ["0", "1", "/", "+", "-", "{", "}", "<", ">", "_"];
const HOLD_SECONDS = 10;

const randomGlyph = (seed: number) =>
	GLYPHS[Math.abs(Math.floor(Math.sin(seed) * 1000)) % GLYPHS.length];

export const InitLandingHeroSupportingText = ({
	atLeastLg,
	texts,
}: {
	atLeastLg: boolean;
	texts: string[];
}) => {
	const safeTexts = texts.length > 0 ? texts : [""];
	const [displayText, setDisplayText] = useState(safeTexts[0]);
	const [showCaret, setShowCaret] = useState(false);
	const caretRef = useRef<HTMLSpanElement>(null);
	const jobsRef = useRef<Array<{ kill: () => void }>>([]);

	useEffect(() => {
		setDisplayText(safeTexts[0]);
		setShowCaret(false);

		const clearJobs = () => {
			for (const job of jobsRef.current) {
				job.kill();
			}
			jobsRef.current = [];
		};

		const blinkTween = gsap.to(caretRef.current, {
			opacity: 0,
			duration: 0.5,
			repeat: -1,
			yoyo: true,
			ease: "power1.inOut",
			paused: true,
		});

		const runCycle = (index: number) => {
			const currentText = safeTexts[index];
			const nextIndex = (index + 1) % safeTexts.length;
			const nextText = safeTexts[nextIndex];
			const eraseState = { progress: currentText.length };
			const typeState = { progress: 0 };

			setShowCaret(true);
			blinkTween.play();

			const timeline = gsap.timeline({
				onComplete: () => {
					setDisplayText(nextText);
					setShowCaret(false);
					blinkTween.pause(0);

					const holdCall = gsap.delayedCall(HOLD_SECONDS, () =>
						runCycle(nextIndex),
					);
					jobsRef.current.push(holdCall);
				},
			});

			timeline.to(eraseState, {
				progress: 0,
				duration: Math.min(1.35, Math.max(0.8, currentText.length * 0.012)),
				ease: `steps(${Math.max(currentText.length, 1)})`,
				onUpdate: () => {
					const visibleChars = Math.ceil(eraseState.progress);
					const glitch =
						visibleChars > 0
							? randomGlyph(visibleChars * 17.3 + eraseState.progress * 7.1)
							: "";
					const head = currentText.slice(0, Math.max(visibleChars - 1, 0));
					setDisplayText(visibleChars > 0 ? `${head}${glitch}` : "");
				},
			});

			timeline.to(typeState, {
				progress: nextText.length,
				duration: Math.min(2.6, Math.max(1.35, nextText.length * 0.018)),
				ease: `steps(${Math.max(nextText.length, 1)})`,
				delay: 0.18,
				onUpdate: () => {
					const visibleChars = Math.floor(typeState.progress);
					const glitch =
						visibleChars < nextText.length
							? randomGlyph(visibleChars * 13.7 + typeState.progress * 9.3)
							: "";
					setDisplayText(`${nextText.slice(0, visibleChars)}${glitch}`);
				},
				onComplete: () => {
					setDisplayText(nextText);
				},
			});

			jobsRef.current.push(timeline);
		};

		const firstHold = gsap.delayedCall(HOLD_SECONDS, () => runCycle(0));
		jobsRef.current.push(firstHold, blinkTween);

		return () => clearJobs();
	}, [safeTexts]);

	return (
		<div className="mx-auto mt-8 max-w-2xl">
			<p
				className={[
					"text-pretty leading-relaxed text-[var(--photon-site-muted-text)]",
					atLeastLg ? "min-h-[3.2em] text-xl" : "min-h-[3.6em] text-lg",
				].join(" ")}
			>
				{displayText || "\u00A0"}
				{showCaret ? (
					<span
						ref={caretRef}
						className="ml-0.5 inline-block h-[1.08em] w-[2px] translate-y-[0.16em] bg-[var(--photon-site-accent)] align-baseline"
					/>
				) : null}
			</p>
		</div>
	);
};
