import { defineType, defineField } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "subtitle", type: "string" }),
    defineField({ name: "vertical", type: "reference", to: [{ type: "vertical" }] }),
    defineField({ name: "coverImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "gallery", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "body", type: "portableText" }),
    defineField({ name: "client", type: "string" }),
    defineField({ name: "year", type: "string" }),
    defineField({ name: "tags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "externalUrl", type: "url" }),
    defineField({ name: "orderRank", type: "string" }),
    defineField({ name: "seo", type: "seo" }),
  ],
  preview: {
    select: { title: "title", subtitle: "vertical.title", media: "coverImage" },
  },
});
