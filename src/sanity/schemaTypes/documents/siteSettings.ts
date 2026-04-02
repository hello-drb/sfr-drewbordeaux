import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({ name: "seo", type: "seo" }),
    defineField({ name: "contactEmail", type: "string" }),
    defineField({ name: "bookingEmail", type: "string" }),
    defineField({
      name: "socialLinks",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "platform", type: "string" }),
          defineField({ name: "url", type: "url" }),
        ],
      }],
    }),
  ],
});
