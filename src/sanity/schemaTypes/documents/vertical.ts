import { defineType, defineField } from "sanity";

export const vertical = defineType({
  name: "vertical",
  title: "Vertical",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({ name: "coverImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "orderRank", type: "string" }),
  ],
});
