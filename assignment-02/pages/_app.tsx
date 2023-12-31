import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../app/prism/prism.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
