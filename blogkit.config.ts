import { defineConfig } from "blogkit";
import { request } from "blogkit-yuque";
import { theme } from "blogkit-theme-minimal";

export default defineConfig({
  siteConfig: {
    title: "Blogkit Yuque",
    author: "2nthony",
  },
  theme,
  request,
});
