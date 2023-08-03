/** @format */

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="which gets all the meals available for free"
        />
        <meta name="authot" content="Foody Pvt. Ltd." />
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
        <div id="modal"></div>
      </body>
    </Html>
  );
}
