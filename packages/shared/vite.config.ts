import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import libAssetsPlugin from "@laynezh/vite-plugin-lib-assets";
import noBundlePlugin from 'vite-plugin-no-bundle';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsInlineLimit: 0,

    lib: {
      entry: resolve(__dirname, "src/index.ts"),

      formats: ["es"],
    },
  },
  assetsInclude: ["**/*.glb"],
  resolve: { alias: { $src: resolve("src/") } },
  
  plugins: [
    noBundlePlugin({ copy: ['**/*.glb', "**/*.png"] }),
   
    dts(),
  ],
});
