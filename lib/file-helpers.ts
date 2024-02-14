
import client from "@/tina/__generated__/client";
import { notFound } from "next/navigation";

export async function fetchDynamicPageContent(slug: string) {
  try {
    const result = await client.queries.page({
      relativePath: `${slug}.mdx`,
    });
    return result;
  } catch (error) {
    console.error("Error fetching dynamic page content:", error);
    return notFound();
  }
}

export async function fetchPostList() {
  try {
    const result = await client.queries.postConnection();
    return result;
  } catch (error) {
    console.error("Error fetching post list:", error);
    throw error;
  }
}

export async function fetchPageContent(pageSlug: string) {
  try {
    const result = await client.queries.page({
      relativePath: `${pageSlug}.mdx`,
    });
    return result;
  } catch (error) {
    console.error(`Error fetching ${pageSlug} page content:`, error);
    throw error;
  }
}

export async function fetchPostBySlug(slug: string) {
  try {
    const result = await client.queries.post({
      relativePath: `${slug}.mdx`,
    });
    return result;
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return notFound();
  }
}