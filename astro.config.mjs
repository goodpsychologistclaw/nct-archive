import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://goodpsychologistclaw.github.io",
  base: process.env.BASE_PATH ?? "/nct-archive/",
  output: "static"
});
