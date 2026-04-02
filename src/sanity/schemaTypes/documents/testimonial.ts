import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "attribution", type: "string" }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "project", type: "string" }),
    defineField({ name: "orderRank", type: "string" }),
  ],
  preview: {
    select: { title: "attribution", subtitle: "role" },
  },
});
