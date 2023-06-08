import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "89a67b76-2eeb-474b-a082-0412a3090b6c", // Get this from tina.io
  token: "acfa6ded7a90b1e2294adcf7d79a2ded0652c2c3", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "/img",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "_pages",
        format: "md",
        templates: [
          {
            name: "homepage",
            label: "Homepage",
            fields: [
              {
                type: "string",
                name: "layout",
                label: "layout",
                ui: {
                  component: () => null,
                },
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "text",
                label: "Text",
              },
            ],
          },
          {
            name: "about",
            label: "About",
            fields: [
              {
                type: "string",
                name: "layout",
                label: "layout",
                ui: {
                  component: () => null,
                },
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "rich-text",
                label: "about_text",
                name: "about_text",
              },
            ],
          },
          {
            name: "official",
            label: "Official",
            fields: [
              {
                type: "string",
                name: "layout",
                label: "layout",
                ui: {
                  component: () => null,
                },
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
            ],
          },
          {
            name: "contact",
            label: "Contact",
            fields: [
              {
                type: "string",
                name: "layout",
                label: "layout",
                ui: {
                  component: () => null,
                },
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                label: "text",
                name: "text",
              },
            ],
          },
        ],
      },
    ],
  },
});
