"use client";

import { Card } from "@/components/ui/card";
import { formatDateToString } from "@/lib/utils";
import { PostConnectionQuery } from "@/tina/__generated__/types";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";

interface TinaPageProps {
  data: PostConnectionQuery;
  variables: {};
  query: string;
}
export default function PostList(props: TinaPageProps) {
  const { data } = useTina(props);
  const postList = data.postConnection.edges;

  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {postList?.map((post: any) => (
          <Card key={post.node.id} className='p-4'>
            <Link
              className='font-semibold line-clamp-2 not-italic hover:underline group-hover:text-primary transition-all duration-300'
              href={`/posts/${post.node._sys.filename}`}
            >
              {post.node.title}
            </Link>
            <p className='text-sm text-muted-foreground'>
              Posted on {formatDateToString(post.node.Date)}
            </p>
            <p className='line-clamp-3'>{post.node.description}</p>
            <Link
              className='mt-auto font-semibold inline-flex items-center space-x-1.5 group-hover:text-primary '
              href={`/posts/${post.node._sys.filename}`}
            >
              Read More
              <ChevronRightIcon className='h-4 w-4' />
            </Link>
          </Card>
        ))}
      </section>
    </>
  );
}
