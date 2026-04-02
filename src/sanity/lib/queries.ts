import { defineQuery } from "next-sanity";

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings"][0]{
    title,
    description,
    seo
  }
`);

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current)] | order(orderRank) {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    vertical->{title, "slug": slug.current},
    coverImage,
    tags
  }
`);

export const PROJECTS_BY_VERTICAL_QUERY = defineQuery(`
  *[_type == "project" && vertical->slug.current == $vertical && defined(slug.current)] | order(orderRank) {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    coverImage,
    tags,
    client
  }
`);

export const VERTICALS_QUERY = defineQuery(`
  *[_type == "vertical"] | order(orderRank) {
    _id,
    title,
    "slug": slug.current,
    tagline,
    description,
    coverImage
  }
`);

export const JOURNAL_ENTRIES_QUERY = defineQuery(`
  *[_type == "journalEntry" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    coverImage
  }
`);

export const JOURNAL_ENTRY_QUERY = defineQuery(`
  *[_type == "journalEntry" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    body,
    excerpt,
    publishedAt,
    coverImage,
    seo
  }
`);

export const SERVICES_QUERY = defineQuery(`
  *[_type == "service"] | order(orderRank) {
    _id,
    title,
    description,
    icon,
    features
  }
`);

export const PRESS_FEATURES_QUERY = defineQuery(`
  *[_type == "pressFeature"] | order(orderRank) {
    _id,
    publication,
    title,
    url,
    year
  }
`);

export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial"] | order(orderRank) {
    _id,
    quote,
    attribution,
    role,
    project
  }
`);
