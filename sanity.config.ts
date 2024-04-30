import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";
import { visionTool } from "@sanity/vision";
import { inlineSvgInput } from "@focus-reactive/sanity-plugin-inline-svg-input";

export default defineConfig({
  name: "bunkbed",
  title: "bunkbed",
  projectId: "tvvysgm9",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool(), inlineSvgInput()],
  schema: {
    types: schemaTypes,
  },
});
