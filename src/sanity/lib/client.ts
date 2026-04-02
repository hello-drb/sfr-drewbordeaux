import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "yjdb06f8",
  dataset: "production",
  apiVersion: "2026-04-01",
  useCdn: true,
});
