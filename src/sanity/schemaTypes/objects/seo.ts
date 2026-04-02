import { defineType, defineField } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", description: "Overrides the page title" }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({ name: "image", type: "image", description: "1200x630 recommended", options: { hotspot: true } }),
    defineField({ name: "noIndex", type: "boolean", initialValue: false }),
  ],
});
