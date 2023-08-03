/** @format */

import React, { useEffect, useState } from "react";
import classes from "./Card.module.css";
import { BsFillBookmarkFill } from "react-icons/bs";
import Link from "next/link";
import useStorage, { BOOKMARK_KEY } from "@/hooks/use-Storage";

const Card = ({ title, imageSrc, idMeal, origin, category }) => {
  const [bookmark, setBookMark] = useState(false);
  const { saveToStorage, getFromStorage } = useStorage();
  //https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg
  let cardTitle = title;
  if (cardTitle.length > 24) {
    cardTitle = `${title.substring(0, 23)}...`;
  }

  useEffect(() => {
    let bookmarkID = getFromStorage(BOOKMARK_KEY);
    let result = bookmarkID.find((mealId, _) => {
      return mealId === idMeal;
    });
    if (result !== undefined) {
      setBookMark((prevState) => true);
    }
  }, []);

  return (
    <React.Fragment>
      <Link href={`/meal/${idMeal}`} className={`${classes.Link}`}>
        <div className={`${classes.container}`}>
          <div className={`${classes.imageContainer}`}>
            <img src={`${imageSrc}`} alt={title} />
          </div>
          <p className={`${classes.cardTitle}`}>{cardTitle}</p>
          <div className={`${classes.cardTags}`}>
            <span className={`${classes.cardSubText}`}>{origin}</span>
            <span className={`${classes.cardSubText}`}>{category}</span>
          </div>
          <div className={`${classes.cardIcon}`}>
            <BsFillBookmarkFill
              className={bookmark ? `${classes.cardIconRed}` : undefined}
            />
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default Card;
