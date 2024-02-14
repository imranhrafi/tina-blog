"use client";

import { TinaPageProps } from "@/lib/types";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function ContentRenderer(props: TinaPageProps) {
  const { data } = useTina(props);
  const title = data.page.title;
  const content = data.page.body;
  return (
    <article>
      <h1>{title}</h1>
      <section>
        <TinaMarkdown content={content} />
      </section>
    </article>
  );
}
