import { fetchPostList } from "@/lib/file-helpers";
import PostList from "./lib/_components/post-list-page";

export default async function PostsPage() {
  const result = await fetchPostList();

  return <PostList {...result} />;
}
