"use client";

import { MarkdownContent } from "@/lib/types";

interface MarkdownSectionProps {
  content: MarkdownContent;
}

export function MarkdownSection({ content }: MarkdownSectionProps) {
  return (
    <div className="mb-12">
      {content.title && (
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">{content.title}</h2>
        </div>
      )}

      <div className="prose dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
      </div>
    </div>
  );
}
