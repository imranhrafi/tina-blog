"use client";

import { TinaPostProps } from "@/lib/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function PostRenderer(props: TinaPostProps) {
  const { data } = useTina(props);
  const title = data.post.title;
  const content = data.post.body;
  return (
    <article>
      <h1 data-tina-field={tinaField(data.post, "title")}>{title}</h1>
      <section data-tina-field={tinaField(data.post, "body")}>
        <TinaMarkdown content={content} />
      </section>
    </article>
  );
}
