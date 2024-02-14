import ContentRenderer from "@/components/content-renderer";
import { fetchDynamicPageContent } from "@/lib/file-helpers";

type Props = {
  params: {
    slug: string;
  };
};
export default async function DynamicPage({ params }: Props) {
  const result = await fetchDynamicPageContent(params.slug);

  return <ContentRenderer {...result} />;
}
