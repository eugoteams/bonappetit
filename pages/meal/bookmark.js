/** @format */

import BookmarkComponent from "@/Component/BookMarkComponent";
import Card from "@/Component/UI/Card/Card";
import DividerInfo from "@/Component/UI/DividerInfo/DividerInfo";
import Grid from "@/Component/UI/Grid/Grid";
import useStorage, { BOOKMARK_KEY, MEALS_KEY } from "@/hooks/use-Storage";
import React, { useEffect, useState } from "react";

const Bookmark = (props) => {
  return (
    <React.Fragment>
      <BookmarkComponent />
    </React.Fragment>
  );
};

export default Bookmark;
