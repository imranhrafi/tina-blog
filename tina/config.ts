import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "pages",
        path: "content/page",
        format: "mdx",
        fields: [
          {
            name: "title",
            type: "string",
            label: "Title",
            isTitle: true,
            required: true,

          },
          {
            name: "body",
            type: "rich-text",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => {
            if(document._sys.filename === "home") {
              return `/`;
            }
            return undefined;
        },
      },
    },
    {
      name: "post",
      label: "posts",
      path: "content/posts",
      format: "mdx",
      fields: [
        {
          name: "title",
          type: "string",
          label: "Title",
          isTitle: true,
          required: true,

        },
        {
          name: 'Date',
          type: 'datetime',
          label: 'Date',
          required: true,
        },
        {
          name: 'description',
          type: 'string',
          label: 'Description',

        }
        ,
        {
          name: "body",
          type: "rich-text",
          label: "Body",
          isBody: true,
        },

      ],
      defaultItem: () => {
        return {
          title: "New Post",
          Date: new Date(),
          description: "Craft concise, engaging descriptions (max 155 characters) that accurately reflect your blog post. Optimize for search engines by including relevant keywords and tailoring to each post's content. Test and refine your descriptions for improved audience engagement.",
        }
      },
      ui: {

        router: ({ document }) => {
         return `/posts/${document._sys.filename}`;
      },
      filename: {
        slugify: (values) => {
          return `${(values.title || "").replace(/ /g, "-").toLowerCase()}`.replace(/[^\w\,\/-\s]/gi, '')
        }
      }
    },
  },
    ],
  },
});
