import type { AppProps } from "next/app";
import Layout from "../common/layout/Layout";
import Head from "next/head";
import "../common/style/reset.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>minmo-blog</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
