/** @format */

import BookmarkComponent from "@/Component/BookMarkComponent";
import React, { Suspense, lazy } from "react";
import Head from "next/head";
import Loader from "@/Component/UI/Loader/Loader";
const Bookmark = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Bookmarked Recipie's</title>
      </Head>
      <Suspense fallback={<Loader text={"Loading Recipe..."} />}>
        <BookmarkComponent />
      </Suspense>
    </React.Fragment>
  );
};

export default Bookmark;
