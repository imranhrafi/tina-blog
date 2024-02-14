import { PageQuery, PostQuery } from "@/tina/__generated__/types";

export interface TinaPageProps {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

export interface TinaPostProps {
  data: PostQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}