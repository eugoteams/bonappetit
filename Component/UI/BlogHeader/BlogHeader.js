/** @format */

import React, { useEffect, useState } from "react";
import classes from "./BlogHeader.module.css";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";
import useStorage, { BOOKMARK_KEY } from "@/hooks/use-Storage";

const BlogHeader = ({ imageSrc, idMeal, title }) => {
  const [bookmark, setBookMark] = useState(false);
  const [idBookMarked, setIdBookMarked] = useState(false);
  const { getFromStorage, saveToStorage } = useStorage();

  const onClickListener = (event) => {
    setBookMark((prevState) => !prevState);
  };

  const onClickPrint = (event) => {
    window.print();
  };

  useEffect(() => {
    let savedBookmark = getFromStorage(BOOKMARK_KEY);
    let resultID = savedBookmark.find((mealId, _) => {
      return mealId === idMeal;
    });

    if (resultID !== undefined) {
      setBookMark((prevState) => true);
      setIdBookMarked((prevState) => true);
    }
  }, []);

  useEffect(() => {
    let savedBookmark = getFromStorage(BOOKMARK_KEY);
    switch (true) {
      case bookmark === true && idBookMarked === false:
        saveToStorage([...savedBookmark, idMeal], BOOKMARK_KEY);
        setIdBookMarked((prevState) => true);
        break;
      case bookmark !== true && idBookMarked === true:
        //remove idMeal
        let removeIdArray = savedBookmark.filter((id, _) => {
          return id != idMeal;
        });
        saveToStorage([...removeIdArray], BOOKMARK_KEY);
        setIdBookMarked((prevState) => false);
      default:
        //np-Opt
        break;
    }
  }, [bookmark]);

  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <div className={`${classes.avatar}`}>
          <img src={imageSrc} />
          <div className={`${classes.avatar_info}`}>
            <span>{title}</span>
            <span>{new Date().toDateString()}</span>
          </div>
        </div>
        <div className={`${classes.iconsContainer}`}>
          <div className={`${classes.button}`} onClick={onClickPrint}>
            <AiFillPrinter
              className={`${classes.icon} ${classes.icon_white}`}
            />
            <span> print recipe</span>
          </div>

          <BsFillBookmarkFill
            className={
              bookmark
                ? `${classes.icon} ${classes.icon_red}`
                : `${classes.icon}`
            }
            onClick={onClickListener}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogHeader;
