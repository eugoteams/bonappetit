/** @format */

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="World recipes that can be cooked in 30 minutes"
        />
        <meta name="keywords" content="food, food recipes ,curry ,indian" />
        <meta name="author" content="maturi karthik" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        {/* Google Fonts Roboto */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        {/* Google Fonts Poppins & Leckerli one*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Leckerli+One&family=Poppins:wght@100;200;300;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
