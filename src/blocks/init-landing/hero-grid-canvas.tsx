"use client";

import { useEffect, useRef } from "react";

type Point = {
	x: number;
	y: number;
};

type Pulse = {
	startTime: number;
	duration: number;
	trailLength: number;
	points: Point[];
	lengths: number[];
	totalLength: number;
	priority: boolean;
};

type CursorHotspot = {
	x: number;
	y: number;
	startTime: number;
	duration: number;
	seed: number;
	persistent?: boolean;
};

type Node = {
	x: number;
	y: number;
	active: boolean;
};

type CenterAbsorption = {
	startTime: number;
	duration: number;
	strength: number;
};

type NodeHandshake = {
	a: Point;
	b: Point;
	startTime: number;
	duration: number;
};

const GRID_SIZE = 60;
const MAX_PULSES = 4;
const SYMBOLS = ["0", "1", "+", "-", "/", ":", "<", ">", "{", "}", "[", "]"];

const clamp = (value: number, min: number, max: number) =>
	Math.min(max, Math.max(min, value));

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const pointLerp = (a: Point, b: Point, t: number): Point => ({
	x: lerp(a.x, b.x, t),
	y: lerp(a.y, b.y, t),
});

const distance = (a: Point, b: Point) => Math.hypot(b.x - a.x, b.y - a.y);

const buildLengths = (points: Point[]) => {
	const lengths = [0];

	for (let index = 1; index < points.length; index += 1) {
		lengths.push(
			lengths[index - 1] + distance(points[index - 1], points[index]),
		);
	}

	return lengths;
};

const getPointAtLength = (
	points: Point[],
	lengths: number[],
	targetLength: number,
) => {
	if (targetLength <= 0) {
		return points[0];
	}

	const totalLength = lengths[lengths.length - 1];
	if (targetLength >= totalLength) {
		return points[points.length - 1];
	}

	for (let index = 1; index < lengths.length; index += 1) {
		if (targetLength <= lengths[index]) {
			const segmentStart = points[index - 1];
			const segmentEnd = points[index];
			const segmentLength = lengths[index] - lengths[index - 1];
			const segmentT = (targetLength - lengths[index - 1]) / segmentLength;
			return pointLerp(segmentStart, segmentEnd, segmentT);
		}
	}

	return points[points.length - 1];
};

const collectPathSlice = (
	points: Point[],
	lengths: number[],
	startLength: number,
	endLength: number,
) => {
	const slice: Point[] = [getPointAtLength(points, lengths, startLength)];

	for (let index = 1; index < points.length - 1; index += 1) {
		if (lengths[index] > startLength && lengths[index] < endLength) {
			slice.push(points[index]);
		}
	}

	slice.push(getPointAtLength(points, lengths, endLength));
	return slice;
};

const smoothPath = (path: Point[]) => {
	if (path.length < 3) {
		return path;
	}

	const result: Point[] = [path[0]];

	for (let index = 0; index < path.length - 1; index += 1) {
		const current = path[index];
		const next = path[index + 1];
		result.push({
			x: current.x * 0.35 + next.x * 0.65,
			y: current.y * 0.35 + next.y * 0.65,
		});
	}

	result.push(path[path.length - 1]);
	return result;
};

const randomEdgePoint = (width: number, height: number) => {
	const edge = Math.floor(Math.random() * 4);

	if (edge === 0) {
		return { x: -GRID_SIZE, y: Math.random() * height * 0.95 };
	}

	if (edge === 1) {
		return { x: width + GRID_SIZE, y: Math.random() * height * 0.95 };
	}

	if (edge === 2) {
		return { x: Math.random() * width, y: -GRID_SIZE };
	}

	return {
		x:
			Math.random() < 0.5
				? Math.random() * width * 0.28
				: width * (0.72 + Math.random() * 0.28),
		y: height + GRID_SIZE,
	};
};

const snapToGrid = (point: Point) => ({
	x: Math.round(point.x / GRID_SIZE) * GRID_SIZE,
	y: Math.round(point.y / GRID_SIZE) * GRID_SIZE,
});

const stepTowardCenter = (current: Point, center: Point) => {
	const dx = center.x - current.x;
	const dy = center.y - current.y;
	const absX = Math.abs(dx);
	const absY = Math.abs(dy);
	const bias = 0.22;

	if (absX > absY + GRID_SIZE * bias) {
		return { x: current.x + Math.sign(dx) * GRID_SIZE, y: current.y };
	}

	if (absY > absX + GRID_SIZE * bias) {
		return { x: current.x, y: current.y + Math.sign(dy) * GRID_SIZE };
	}

	if (Math.random() > 0.5) {
		return { x: current.x + Math.sign(dx || 1) * GRID_SIZE, y: current.y };
	}

	return { x: current.x, y: current.y + Math.sign(dy || 1) * GRID_SIZE };
};

const buildPath = (width: number, height: number) => {
	const center = { x: width / 2, y: height * 0.46 };
	const target = snapToGrid({
		x: center.x + (Math.random() - 0.5) * GRID_SIZE * 1.8,
		y: center.y + (Math.random() - 0.5) * GRID_SIZE * 1.8,
	});

	let current = snapToGrid(randomEdgePoint(width, height));
	const path: Point[] = [current];
	const maxSteps = Math.ceil((width + height) / GRID_SIZE);

	for (let step = 0; step < maxSteps; step += 1) {
		const next = stepTowardCenter(current, target);
		current = {
			x: clamp(next.x, -GRID_SIZE, width + GRID_SIZE),
			y: clamp(next.y, -GRID_SIZE, height + GRID_SIZE),
		};

		path.push(current);

		if (Math.hypot(current.x - target.x, current.y - target.y) <= GRID_SIZE) {
			break;
		}
	}

	path.push(target);
	return smoothPath(path);
};

const createPulse = (width: number, height: number, now: number): Pulse => {
	const points = buildPath(width, height);
	const lengths = buildLengths(points);
	const totalLength = lengths[lengths.length - 1];

	return {
		startTime: now + Math.random() * 3200,
		duration: 6000 + Math.random() * 2600,
		trailLength: totalLength * (0.08 + Math.random() * 0.06),
		points,
		lengths,
		totalLength,
		priority: Math.random() > 0.86,
	};
};

const symbolAt = (gridX: number, gridY: number, seed: number) => {
	const hash = Math.abs(
		Math.sin(gridX * 12.9898 + gridY * 78.233 + seed * 0.013) * 43758.5453,
	);
	return SYMBOLS[Math.floor(hash) % SYMBOLS.length];
};

const buildNodes = (width: number, height: number) => {
	const nodes: Node[] = [];

	for (let x = 0; x <= width + GRID_SIZE; x += GRID_SIZE) {
		for (let y = 0; y <= height + GRID_SIZE; y += GRID_SIZE) {
			const hash = Math.abs(Math.sin(x * 0.017 + y * 0.023) * 1000);
			nodes.push({ x, y, active: hash % 1 > 0.88 });
		}
	}

	return nodes;
};

export const InitLandingHeroGridCanvas = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) {
			return;
		}

		const context = canvas.getContext("2d");
		if (!context) {
			return;
		}

		const trackingSurface = canvas.closest("section");
		if (!trackingSurface) {
			return;
		}

		let frameId = 0;
		let width = 0;
		let height = 0;
		let dpr = 1;
		let pulses: Pulse[] = [];
		let nodes: Node[] = [];
		let hotspots: CursorHotspot[] = [];
		let absorptions: CenterAbsorption[] = [];
		let handshakes: NodeHandshake[] = [];
		let lastPointer: Point | null = null;
		let persistentHotspot: CursorHotspot | null = null;

		const resize = () => {
			const parent = canvas.parentElement;
			if (!parent) {
				return;
			}

			width = parent.clientWidth;
			height = parent.clientHeight;
			dpr = Math.min(window.devicePixelRatio || 1, 2);

			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;

			context.setTransform(dpr, 0, 0, dpr, 0, 0);
			pulses = Array.from({ length: MAX_PULSES }, (_, index) =>
				createPulse(width, height, performance.now() + index * 900),
			);
			nodes = buildNodes(width, height);
		};

		const pushHotspot = (x: number, y: number, now: number) => {
			hotspots.push({
				x,
				y,
				startTime: now,
				duration: 850,
				seed: now + x * 17 + y * 31,
			});

			if (hotspots.length > 18) {
				hotspots = hotspots.slice(-18);
			}
		};

		const upsertPersistentHotspot = (x: number, y: number, now: number) => {
			persistentHotspot = {
				x,
				y,
				startTime: now,
				duration: 10_000,
				seed: Math.floor(now / 220) + x * 11 + y * 17,
				persistent: true,
			};
		};

		const handlePointerMove = (event: PointerEvent) => {
			const rect = canvas.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;
			const now = performance.now();

			if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
				return;
			}

			upsertPersistentHotspot(x, y, now);

			if (
				!lastPointer ||
				Math.hypot(x - lastPointer.x, y - lastPointer.y) > 18
			) {
				pushHotspot(x, y, now);
			} else if (hotspots.length > 0) {
				hotspots[hotspots.length - 1] = {
					...hotspots[hotspots.length - 1],
					x,
					y,
					startTime: now - 60,
				};
			}

			lastPointer = { x, y };
		};

		const handlePointerLeave = () => {
			persistentHotspot = null;
			lastPointer = null;
		};

		const drawBaseGrid = () => {
			context.strokeStyle = "rgba(80, 80, 80, 0.07)";
			context.lineWidth = 1;

			for (let x = 0; x <= width + GRID_SIZE; x += GRID_SIZE) {
				context.beginPath();
				context.moveTo(x + 0.5, 0);
				context.lineTo(x + 0.5, height);
				context.stroke();
			}

			for (let y = 0; y <= height + GRID_SIZE; y += GRID_SIZE) {
				context.beginPath();
				context.moveTo(0, y + 0.5);
				context.lineTo(width, y + 0.5);
				context.stroke();
			}
		};

		const drawCenterNoise = (now: number) => {
			const center = { x: width / 2, y: height * 0.46 };
			const radiusX = width * 0.18;
			const radiusY = height * 0.14;

			for (let index = 0; index < 26; index += 1) {
				const angle = index * 0.73 + now * 0.00018;
				const wave = (Math.sin(now * 0.0012 + index * 1.7) + 1) / 2;
				const x = center.x + Math.cos(angle) * radiusX * (0.4 + wave * 0.6);
				const y =
					center.y + Math.sin(angle * 1.17) * radiusY * (0.35 + wave * 0.65);
				const alpha = 0.015 + wave * 0.018;

				context.beginPath();
				context.arc(x, y, 0.85 + wave * 0.7, 0, Math.PI * 2);
				context.fillStyle = `rgba(214, 98, 98, ${alpha})`;
				context.fill();
			}
		};

		const spawnHandshake = (now: number, nodeEnergy: Map<string, number>) => {
			if (Math.random() > 0.007) {
				return;
			}

			const energized = nodes.filter((node) => {
				const energy = nodeEnergy.get(`${node.x}:${node.y}`) ?? 0;
				return node.active && energy > 0.06;
			});

			if (energized.length < 2) {
				return;
			}

			const a = energized[Math.floor(Math.random() * energized.length)];
			const candidates = energized.filter((node) => {
				const dist = Math.hypot(node.x - a.x, node.y - a.y);
				return dist > GRID_SIZE * 1.2 && dist < GRID_SIZE * 4.5;
			});

			if (candidates.length === 0) {
				return;
			}

			const b = candidates[Math.floor(Math.random() * candidates.length)];
			handshakes.push({
				a: { x: a.x, y: a.y },
				b: { x: b.x, y: b.y },
				startTime: now,
				duration: 900 + Math.random() * 400,
			});
		};

		const drawHandshakes = (now: number) => {
			handshakes = handshakes.filter(
				(handshake) => now - handshake.startTime < handshake.duration,
			);

			for (const handshake of handshakes) {
				const life = clamp(
					(now - handshake.startTime) / handshake.duration,
					0,
					1,
				);
				const wave = Math.sin(life * Math.PI);
				const alpha = wave * 0.16;

				context.beginPath();
				context.moveTo(handshake.a.x + 0.5, handshake.a.y + 0.5);
				context.lineTo(handshake.b.x + 0.5, handshake.b.y + 0.5);
				context.strokeStyle = `rgba(214, 96, 96, ${alpha})`;
				context.lineWidth = 0.9;
				context.setLineDash([5, 8]);
				context.stroke();
				context.setLineDash([]);
			}
		};

		const drawCenterAbsorptions = (now: number) => {
			absorptions = absorptions.filter(
				(absorption) => now - absorption.startTime < absorption.duration,
			);
			const center = { x: width / 2, y: height * 0.46 };

			for (const absorption of absorptions) {
				const life = clamp(
					(now - absorption.startTime) / absorption.duration,
					0,
					1,
				);
				const eased = Math.sin(life * Math.PI);
				const radius = 12 + eased * 58 * absorption.strength;
				const alpha = (1 - life) * 0.14 * absorption.strength;

				context.beginPath();
				context.arc(center.x, center.y, radius, 0, Math.PI * 2);
				context.strokeStyle = `rgba(214, 92, 92, ${alpha})`;
				context.lineWidth = 1;
				context.stroke();
			}
		};

		const drawCursorGridEnhancement = () => {
			if (!persistentHotspot) {
				return;
			}

			const radius = GRID_SIZE * 2.3;

			for (let x = 0; x <= width + GRID_SIZE; x += GRID_SIZE) {
				const dist = Math.abs(x - persistentHotspot.x);
				const fade = clamp(1 - dist / radius, 0, 1);
				if (fade <= 0) {
					continue;
				}

				context.beginPath();
				context.moveTo(x + 0.5, 0);
				context.lineTo(x + 0.5, height);
				context.strokeStyle = `rgba(96, 96, 96, ${0.018 + fade * 0.05})`;
				context.lineWidth = 1;
				context.stroke();
			}

			for (let y = 0; y <= height + GRID_SIZE; y += GRID_SIZE) {
				const dist = Math.abs(y - persistentHotspot.y);
				const fade = clamp(1 - dist / radius, 0, 1);
				if (fade <= 0) {
					continue;
				}

				context.beginPath();
				context.moveTo(0, y + 0.5);
				context.lineTo(width, y + 0.5);
				context.strokeStyle = `rgba(96, 96, 96, ${0.018 + fade * 0.05})`;
				context.lineWidth = 1;
				context.stroke();
			}
		};

		const drawCursorSymbols = (now: number) => {
			hotspots = hotspots.filter(
				(hotspot) => now - hotspot.startTime < hotspot.duration,
			);
			const activeHotspots = persistentHotspot
				? [...hotspots, persistentHotspot]
				: hotspots;

			context.font =
				'500 13px var(--font-geist-mono), "SFMono-Regular", monospace';
			context.textAlign = "center";
			context.textBaseline = "middle";

			for (const hotspot of activeHotspots) {
				const age = now - hotspot.startTime;
				const life = hotspot.persistent
					? 0
					: clamp(age / hotspot.duration, 0, 1);
				const radius = hotspot.persistent ? GRID_SIZE * 2.75 : GRID_SIZE * 2.6;
				const coreRadius = hotspot.persistent
					? GRID_SIZE * 1.1
					: GRID_SIZE * 0.95;
				const minGridX = Math.floor((hotspot.x - radius) / GRID_SIZE);
				const maxGridX = Math.ceil((hotspot.x + radius) / GRID_SIZE);
				const minGridY = Math.floor((hotspot.y - radius) / GRID_SIZE);
				const maxGridY = Math.ceil((hotspot.y + radius) / GRID_SIZE);

				for (let gridX = minGridX; gridX <= maxGridX; gridX += 1) {
					for (let gridY = minGridY; gridY <= maxGridY; gridY += 1) {
						const x = gridX * GRID_SIZE + GRID_SIZE / 2;
						const y = gridY * GRID_SIZE + GRID_SIZE / 2;
						const dist = Math.hypot(x - hotspot.x, y - hotspot.y);
						const distFade = clamp(1 - dist / radius, 0, 1);
						if (distFade <= 0) {
							continue;
						}

						const alphaBase = hotspot.persistent ? 0.35 : 0.5;
						const alpha = distFade * distFade * (1 - life * 0.84) * alphaBase;
						if (alpha < (hotspot.persistent ? 0.008 : 0.035)) {
							continue;
						}

						const symbol = symbolAt(
							gridX,
							gridY,
							hotspot.seed + Math.floor(age / 90),
						);
						const redMix = clamp(1 - dist / coreRadius, 0, 1);
						const red = Math.round(
							(hotspot.persistent ? 100 : 110) + redMix * 90,
						);
						const green = Math.round(
							(hotspot.persistent ? 102 : 112) - redMix * 42,
						);
						const blue = Math.round(
							(hotspot.persistent ? 108 : 118) - redMix * 42,
						);

						context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
						context.fillText(symbol, x, y);
					}
				}
			}
		};

		const drawPulse = (
			pulse: Pulse,
			now: number,
			nodeEnergy: Map<string, number>,
		) => {
			const elapsed = now - pulse.startTime;
			if (elapsed < 0) {
				return;
			}

			const progress = elapsed / pulse.duration;
			if (progress >= 1) {
				return;
			}

			const headLength = pulse.totalLength * progress;
			const tailLength = Math.max(0, headLength - pulse.trailLength);
			const pathSlice = collectPathSlice(
				pulse.points,
				pulse.lengths,
				tailLength,
				headLength,
			);
			const center = { x: width / 2, y: height * 0.46 };

			if (pathSlice.length < 2) {
				return;
			}

			for (let index = 0; index < pathSlice.length - 1; index += 1) {
				const current = pathSlice[index];
				const next = pathSlice[index + 1];
				const segmentCenter = {
					x: (current.x + next.x) / 2,
					y: (current.y + next.y) / 2,
				};
				const distanceToCenter = Math.hypot(
					segmentCenter.x - center.x,
					segmentCenter.y - center.y,
				);
				const centerFade = clamp(
					1 - distanceToCenter / (Math.min(width, height) * 0.34),
					0,
					1,
				);
				const trailFade = (index + 1) / (pathSlice.length - 1);
				const alpha =
					(1 - centerFade * 0.95) * trailFade * (pulse.priority ? 0.92 : 0.72);

				context.beginPath();
				context.moveTo(current.x + 0.5, current.y + 0.5);
				context.lineTo(next.x + 0.5, next.y + 0.5);
				context.strokeStyle = pulse.priority
					? `rgba(228, 62, 62, ${alpha})`
					: `rgba(217, 58, 58, ${alpha})`;
				context.lineWidth = pulse.priority ? 1.45 : 1.15;
				context.shadowBlur = pulse.priority ? 10 : 7;
				context.shadowColor = pulse.priority
					? "rgba(228, 62, 62, 0.24)"
					: "rgba(217, 58, 58, 0.18)";
				context.stroke();

				const snappedX = Math.round(segmentCenter.x / GRID_SIZE) * GRID_SIZE;
				const snappedY = Math.round(segmentCenter.y / GRID_SIZE) * GRID_SIZE;
				const key = `${snappedX}:${snappedY}`;
				nodeEnergy.set(key, Math.max(nodeEnergy.get(key) ?? 0, alpha));
			}

			const head = pathSlice[pathSlice.length - 1];
			const distanceToCenter = Math.hypot(head.x - center.x, head.y - center.y);
			const headAlpha = clamp(
				distanceToCenter / (Math.min(width, height) * 0.35),
				0.08,
				0.55,
			);

			context.beginPath();
			context.arc(head.x, head.y, 1.1, 0, Math.PI * 2);
			context.fillStyle = `rgba(242, 90, 90, ${headAlpha})`;
			context.shadowBlur = 8;
			context.shadowColor = "rgba(242, 90, 90, 0.18)";
			context.fill();
			context.shadowBlur = 0;

			if (distanceToCenter < GRID_SIZE * 1.35 && Math.random() > 0.92) {
				absorptions.push({
					startTime: now,
					duration: 850 + Math.random() * 320,
					strength: pulse.priority ? 1.1 : 0.8,
				});
			}
		};

		const drawNodes = (nodeEnergy: Map<string, number>) => {
			for (const node of nodes) {
				if (!node.active) {
					continue;
				}

				const key = `${node.x}:${node.y}`;
				const energy = nodeEnergy.get(key) ?? 0;
				const baseAlpha = 0.018;
				const alpha = baseAlpha + energy * 0.45;
				const radius = 0.7 + energy * 1.4;

				context.beginPath();
				context.arc(node.x + 0.5, node.y + 0.5, radius, 0, Math.PI * 2);
				context.fillStyle =
					energy > 0.04
						? `rgba(214, 88, 88, ${alpha})`
						: `rgba(120, 120, 120, ${alpha})`;
				context.shadowBlur = energy > 0.04 ? 6 : 0;
				context.shadowColor = "rgba(214, 88, 88, 0.22)";
				context.fill();
			}

			context.shadowBlur = 0;
		};

		const render = (now: number) => {
			context.clearRect(0, 0, width, height);
			drawBaseGrid();
			drawCursorGridEnhancement();
			drawCenterNoise(now);
			drawCursorSymbols(now);

			const nodeEnergy = new Map<string, number>();

			pulses = pulses.map((pulse) => {
				if (now > pulse.startTime + pulse.duration + 900) {
					return createPulse(width, height, now + 1200 + Math.random() * 2600);
				}

				drawPulse(pulse, now, nodeEnergy);
				return pulse;
			});

			spawnHandshake(now, nodeEnergy);
			drawNodes(nodeEnergy);
			drawHandshakes(now);
			drawCenterAbsorptions(now);
			frameId = window.requestAnimationFrame(render);
		};

		resize();
		frameId = window.requestAnimationFrame(render);
		window.addEventListener("resize", resize);
		trackingSurface.addEventListener("pointermove", handlePointerMove);
		trackingSurface.addEventListener("pointerleave", handlePointerLeave);

		return () => {
			window.cancelAnimationFrame(frameId);
			window.removeEventListener("resize", resize);
			trackingSurface.removeEventListener("pointermove", handlePointerMove);
			trackingSurface.removeEventListener("pointerleave", handlePointerLeave);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="absolute inset-0 h-full w-full opacity-[0.72] [mask-image:radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.09)_20%,rgba(0,0,0,0.68)_47%,black_72%)]"
			aria-hidden="true"
		/>
	);
};
