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
                type: "rich-text",
                name: "text",
                label: "Text",
              },
              {
                type: "object",
                name: "events",
                label: "Events",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return {
                      label: `${item?.date} ( ${item?.title} ) ( ${item?.text} ) ( ${item?.image} )`,
                    };
                  },
                  defaultItem: {
                    date: "Date",
                    title: "Title",
                    text: "Text",
                    image: "",
                  },
                },
                fields: [
                  {
                    label: "Date",
                    name: "date",
                    type: "string",
                  },
                  {
                    label: "Title",
                    name: "title",
                    type: "string",
                  },
                  {
                    label: "Text",
                    name: "text",
                    type: "string",
                  },
                  {
                    label: "Image",
                    name: "image",
                    type: "image",
                  },
                ],
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
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "rich-text",
                label: "Text",
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
              //date/ title/ pdf-link
              {
                type: "object",
                name: "nabavka",
                label: "Nabavka",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return {
                      label: `${item?.date} ( ${item?.title} ) ( ${item?.pdf} )`,
                    };
                  },
                  defaultItem: {
                    title: "Title",
                    date: "Date",
                  },
                },
                fields: [
                  {
                    label: "Date",
                    name: "date",
                    type: "string",
                  },
                  {
                    label: "Title",
                    name: "title",
                    type: "string",
                  },
                  {
                    label: "Document",
                    name: "document",
                    type: "object",
                    list: true,
                    ui: {
                      itemProps: (el) => {
                        return {
                          label: `${el?.link} ( ${el?.name} )`,
                        };
                      },
                      defaultItem: {
                        link: "Document link",
                        name: "Document title",
                      },
                    },
                    fields: [
                      {
                        label: "Document link",
                        name: "link",
                        type: "string",
                      },
                      {
                        label: "Document title",
                        name: "name",
                        type: "string",
                      },
                    ],
                  },
                  //},
                ],
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
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                label: "Adress",
                name: "adress",
              },
              {
                type: "string",
                label: "Phone",
                name: "Phone",
              },
              {
                type: "string",
                label: "Email",
                name: "email",
              },
              {
                type: "string",
                label: "Working days",
                name: "working",
              },
              {
                type: "string",
                label: "Weekends",
                name: "weekends",
              },
            ],
          },
        ],
      },
    ],
  },
});
