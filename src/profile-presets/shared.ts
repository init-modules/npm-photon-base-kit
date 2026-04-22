import {
	clonePhotonValue,
	type PhotonBlock,
	type PhotonDocument,
} from "@init/photon/server";

export type MarketingDemoLocale = "en" | "ru";

export const cloneDocumentBlockById = (
	document: PhotonDocument,
	blockId: string,
): PhotonBlock => {
	const block = document.blocks.find((item) => item.id === blockId);

	if (!block) {
		throw new Error(`Missing marketing demo block: ${blockId}`);
	}

	return clonePhotonValue(block);
};

export const cloneSplitAreaBlock = (
	document: PhotonDocument,
	blockId: string,
	areaIndex: number,
	blockIndex: number,
): PhotonBlock => {
	const splitBlock = cloneDocumentBlockById(document, blockId);
	const nestedBlock = splitBlock.areas?.[areaIndex]?.blocks?.[blockIndex];

	if (!nestedBlock) {
		throw new Error(
			`Missing nested marketing demo block: ${blockId}.areas[${areaIndex}].blocks[${blockIndex}]`,
		);
	}

	return clonePhotonValue(nestedBlock);
};

export const patchBlockProps = (
	block: PhotonBlock,
	props: Record<string, unknown>,
): PhotonBlock => ({
	...block,
	props: {
		...(typeof block.props === "object" && block.props !== null
			? block.props
			: {}),
		...props,
	},
});

export const patchSplitLayoutAreas = (
	block: PhotonBlock,
	areas: Record<string, PhotonBlock[]>,
): PhotonBlock => ({
	...block,
	areas: (block.areas ?? []).map((area) => ({
		...area,
		blocks: areas[area.id] ?? area.blocks,
	})),
});

export const cloneBaseDocument = (
	baseDocument: PhotonDocument,
): PhotonDocument => clonePhotonValue(baseDocument);
