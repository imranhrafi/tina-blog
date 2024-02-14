import { fetchPostBySlug } from "@/lib/file-helpers";
import PostRenderer from "./lib/_components/post-renderer";

type Props = {
  params: {
    postSlug: string;
  };
};
export default async function PostPage({ params }: Props) {
  const result = await fetchPostBySlug(params.postSlug);
  return <PostRenderer {...result} />;
}
