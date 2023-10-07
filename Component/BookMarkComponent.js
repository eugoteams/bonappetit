/** @format */

import React, { useState, useEffect } from "react";
import MealsView from "./MealsView/MealsView";
import useStorage, { MEALS_KEY, BOOKMARK_KEY } from "@/hooks/use-Storage";
import DividerInfo from "./UI/DividerInfo/DividerInfo";
import Search from "./UI/Search/Search";
import useHelper from "@/hooks/use-Helper";
import Info from "./UI/Info/Info";

const BookmarkComponent = (props) => {
  const { filterMeals } = useHelper();
  const { getFromStorage } = useStorage();
  const [bookmarkedIds, setBookMarkedIdsArray] = useState([]);
  const [info, setInfo] = useState({ msg: "", stopwatch: false });
  const getMealsFromIDs = (mealsArray, idsArray) => {
    let arrayOfMeals = [];
    idsArray.map((mealId, _) => {
      let result = mealsArray.find((meal, _) => {
        return meal.idMeal === mealId;
      });
      arrayOfMeals.push(result);
    });
    return arrayOfMeals;
  };

  const searchTextListener = (searchText) => {
    let mealsArray = getFromStorage(MEALS_KEY);
    let bookmarkArray = getFromStorage(BOOKMARK_KEY);
    let bookmarkedMeals =
      mealsArray !== null && getMealsFromIDs(mealsArray, bookmarkArray);

    let searchResultArray =
      bookmarkedMeals && filterMeals(bookmarkedMeals, searchText);
    if (searchResultArray) {
      setBookMarkedIdsArray((prevState) => searchResultArray);
      searchResultArray.length === 0 &&
        setInfo((prevState) => {
          return {
            ...prevState,
            msg: "recipe not found",
          };
        });
    } else {
      setInfo((prevState) => {
        return {
          ...prevState,
          msg: "database missing in storage go to home page refresh..",
        };
      });
    }
  };

  useEffect(() => {
    let mealsArray = getFromStorage(MEALS_KEY);
    let bookmarkArray = getFromStorage(BOOKMARK_KEY);
    if (mealsArray !== null) {
      setBookMarkedIdsArray((prevState) =>
        getMealsFromIDs(mealsArray, bookmarkArray)
      );
    } else {
      setInfo((prevState) => {
        return { ...prevState, mag: "database missing in storage.." };
      });
    }
  }, []);
  useEffect(() => {}, [bookmarkedIds]);
  useEffect(() => {}, [info]);

  return (
    <React.Fragment>
      <Search textChangeListener={searchTextListener} />
      <DividerInfo
        title={"bookmarked recipe"}
        quantity={bookmarkedIds.length}
      />
      {bookmarkedIds.length === 0 ? (
        <Info text={info.msg} stopwatch={info.stopwatch} />
      ) : (
        <MealsView arrayOfMeals={bookmarkedIds} title={"all"} />
      )}
    </React.Fragment>
  );
};

export default BookmarkComponent;
