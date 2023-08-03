/** @format */

import BookmarkComponent from "@/Component/BookMarkComponent";
import React from "react";
import Head from "next/head";
const Bookmark = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Bookmarked Recipie's</title>
      </Head>
      <BookmarkComponent />
    </React.Fragment>
  );
};

export default Bookmark;
