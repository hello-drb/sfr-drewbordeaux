import { defineType, defineField } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({ name: "icon", type: "string", description: "Lucide icon name" }),
    defineField({ name: "features", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "orderRank", type: "string" }),
  ],
});
