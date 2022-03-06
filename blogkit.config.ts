import { defineConfig } from "blogkit";
import { request } from "blogkit-strapi";
import { theme } from "blogkit-theme-minimal";

export default defineConfig({
  siteConfig: {
    title: "Blogkit Strapi",
    author: "colmugx",
  },
  theme,
  request,
});
