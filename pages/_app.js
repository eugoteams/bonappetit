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
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="title" content="bonappetit" />
        <meta
          name="description"
          content="Discover the art of culinary delight with our mouthwatering food recipe collection. From savory classics to delectable desserts, our easy-to-follow recipes will satisfy your taste buds and elevate your cooking skills. Explore a world of flavors and cooking tips, all at your fingertips. Join our culinary community today and embark on a delicious journey of gastronomic excellence."
        />
        <meta
          name="keywords"
          content="Food recipes,Culinary inspiration,Quick and easy recipes,Healthy meal ideas,Gourmet dishes,Vegetarian  recipes, vegan recipes,Baking and desserts,International cuisines,Chef-approved recipes,Food blog,Cooking for beginners"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="maturi karthik" />
      </Head>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
