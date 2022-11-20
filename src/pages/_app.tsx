import { type AppType } from "next/dist/shared/lib/utils";
import Head from "../components/SEO/Head";
import { Inter } from "@next/font/google";

import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily}, -apple-system, system-ui,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
            sans-serif;
        }
      `}</style>
      <Head />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
