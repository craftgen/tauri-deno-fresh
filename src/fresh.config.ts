import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

export default defineConfig({
  plugins: [tailwind()],
  server: {
    port: 1420,
  },
  build: {
    outDir: "../dist",
  }
});
