import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemaTypes";

export default defineConfig({
  name: "drewbordeaux",
  title: "Drew Bordeaux",
  projectId: "yjdb06f8",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
