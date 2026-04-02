import { defineType, defineField } from "sanity";

export const pressFeature = defineType({
  name: "pressFeature",
  title: "Press Feature",
  type: "document",
  fields: [
    defineField({ name: "publication", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "url", type: "url" }),
    defineField({ name: "year", type: "string" }),
    defineField({ name: "orderRank", type: "string" }),
  ],
  preview: {
    select: { title: "publication", subtitle: "title" },
  },
});
