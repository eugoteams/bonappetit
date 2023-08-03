/** @format */

import Layout from "@/Component/Layout/Layout";
import Navbar from "@/Component/Navbar/Navbar";
import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Recipe's around the world</title>
        <meta
          name="description"
          content="which gets all the meals available for free"
        />
        <meta name="authot" content="Foody Pvt. Ltd." />
      </Head>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
