import type { Collection } from "tinacms";

export const PageCollection: Collection = {
  name: "page",
  label: "Pages",
  path: "src/content/page",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return "/";
      }
      return `/${document._sys.filename}`;
    },
  },
  fields: [
    {
      name: "seoTitle",
      type: "string",
      required: true,
    },
    {
      name: "hero",
      type: "object",
      fields: [
        { name: "tagline", type: "string" },
        { name: "title", type: "string" },
        { name: "description", type: "string" },
        { name: "buttonText", type: "string" },
        { name: "buttonLink", type: "string" },
        { name: "backgroundImage", type: "image" },
      ],
    },
    {
      name: "stats",
      type: "object",
      list: true,
      fields: [
        { name: "value", type: "string" },
        { name: "label", type: "string" },
      ],
      ui: {
        itemProps: (item) => ({
          label: (item?.value ?? "") + " " + (item?.label ?? ""),
        }),
      },
    },
    {
      name: "whatWeDo",
      type: "object",
      fields: [
        { name: "tagline", type: "string" },
        { name: "title", type: "string" },
        {
          name: "services",
          type: "object",
          list: true,
          fields: [
            { name: "title", type: "string" },
            { name: "description", type: "string" },
          ],
          ui: {
            itemProps: (item) => ({ label: item?.title ?? "Service" }),
          },
        },
        { name: "ctaTitle", type: "string" },
        { name: "ctaDescription", type: "string" },
        { name: "ctaPhilosophyTitle", type: "string" },
        { name: "ctaPhilosophyText", type: "string" },
        { name: "ctaButtonText", type: "string" },
        { name: "ctaButtonLink", type: "string" },
      ],
    },
    {
      name: "body",
      type: "rich-text",
      isBody: true,
      required: true,
    },
  ],
};
