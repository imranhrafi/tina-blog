import ContentRenderer from "../components/content-renderer";
import Blockquote from "../components/ui/Blockquote";
import { fetchPageContent } from "../lib/file-helpers";

export default async function HomePage() {
  const result = await fetchPageContent("home");

  return (
    <>
      <h1 className='font-bold text-primary'>Latest Article</h1>
      <Blockquote author='Imran H Rafi' color='card'>
        Tina CMS, much like a guiding star, is a headless content
        management system designed to simplify the process of managing
        content on static websites. Unlike traditional CMS platforms,
        Tina embraces the concept of a headless architecture,
        providing developers with the flexibility to use their
        preferred frontend framework while still enjoying the benefits
        of a robust content management system.
      </Blockquote>
      <ContentRenderer {...result} />
    </>
  );
}
