import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import image from "@astrojs/image";
import compress from "astro-compress";
import purgecss from "astro-purgecss";
import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), image(), purgecss(), critters(), compress({
    html: {
      decodeEntities: true,
    }
  })],
  site: "https://bangdreamfan.usamyon.moe"
});
