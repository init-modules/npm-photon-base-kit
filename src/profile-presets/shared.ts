import {
  cloneWebsiteBuilderValue,
  type WebsiteBuilderBlock,
  type WebsiteBuilderDocument,
} from "@init-modules/website-builder/server";

export type MarketingDemoLocale = "en" | "ru";

export const cloneDocumentBlockById = (
  document: WebsiteBuilderDocument,
  blockId: string,
): WebsiteBuilderBlock => {
  const block = document.blocks.find((item) => item.id === blockId);

  if (!block) {
    throw new Error(`Missing marketing demo block: ${blockId}`);
  }

  return cloneWebsiteBuilderValue(block);
};

export const cloneSplitAreaBlock = (
  document: WebsiteBuilderDocument,
  blockId: string,
  areaIndex: number,
  blockIndex: number,
): WebsiteBuilderBlock => {
  const splitBlock = cloneDocumentBlockById(document, blockId);
  const nestedBlock = splitBlock.areas?.[areaIndex]?.blocks?.[blockIndex];

  if (!nestedBlock) {
    throw new Error(
      `Missing nested marketing demo block: ${blockId}.areas[${areaIndex}].blocks[${blockIndex}]`,
    );
  }

  return cloneWebsiteBuilderValue(nestedBlock);
};

export const patchBlockProps = (
  block: WebsiteBuilderBlock,
  props: Record<string, unknown>,
): WebsiteBuilderBlock => ({
  ...block,
  props: {
    ...(typeof block.props === "object" && block.props !== null
      ? block.props
      : {}),
    ...props,
  },
});

export const patchSplitLayoutAreas = (
  block: WebsiteBuilderBlock,
  areas: Record<string, WebsiteBuilderBlock[]>,
): WebsiteBuilderBlock => ({
  ...block,
  areas: (block.areas ?? []).map((area) => ({
    ...area,
    blocks: areas[area.id] ?? area.blocks,
  })),
});

export const cloneBaseDocument = (
  baseDocument: WebsiteBuilderDocument,
): WebsiteBuilderDocument => cloneWebsiteBuilderValue(baseDocument);
