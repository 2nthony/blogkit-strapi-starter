import { Blogkit } from "blogkit";
import config from "../blogkit.config";

import "blogkit-theme-minimal/style.css";

export const blogkit = new Blogkit(config);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
