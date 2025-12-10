// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      CONTENT_ISLAND_ACCESS_TOKEN: {
        context: "server",
        access: "secret",
        type: "string",
      },
    },
  },
});
