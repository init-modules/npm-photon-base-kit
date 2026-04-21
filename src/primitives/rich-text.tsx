"use client";

import { EditableRichText } from "@init-modules/website-builder/public";

type RichTextProps = {
  blockId: string;
  path: string;
  className?: string;
  containerClassName?: string;
  placeholder?: string;
};

export const RichText = ({
  blockId,
  path,
  className,
  containerClassName,
  placeholder = "Write rich text content with headings, lists and quotes.",
}: RichTextProps) => (
  <div className={containerClassName}>
    <EditableRichText
      blockId={blockId}
      path={path}
      className={className}
      placeholder={placeholder}
    />
  </div>
);
