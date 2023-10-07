/** @format */

import React, { useState, useEffect, useCallback, memo } from "react";
import classes from "./UnkownUI.module.css";
import SortDropDown from "../UI/SortDropDown/SortDropDown";
import Search from "../UI/Search/Search";
import { countries, category } from "@/model/DropDownData";
import useStorage from "@/hooks/use-Storage";
import useHelper from "@/hooks/use-Helper";

const UnkownUI = memo(({ uiListener, uiFilterText, storageKey }) => {
  const { getFromStorage } = useStorage();
  const { filterMeals } = useHelper();
  const [filter, setFilter] = useState({
    strArea: "",
    strCategory: "",
    strSearch: "",
  });
  const onDropDownListenerCategories = useCallback((selectedText) => {
    setFilter((prevState) => {
      return { ...prevState, strCategory: selectedText };
    });
  }, []);

  const onDropDownListenerCountries = useCallback((selectedText) => {
    setFilter((prevState) => {
      return { ...prevState, strArea: selectedText };
    });
  }, []);

  const onTextSearchListener = useCallback((typedText) => {
    setFilter((prevState) => {
      return { ...prevState, strSearch: typedText };
    });
  }, []);

  const dataBasedOnFilter = () => {
    let storedData = getFromStorage(storageKey);
    let resultArray = [];
    switch (true) {
      case filter["strCategory"] !== "" && filter["strArea"] !== "":
        resultArray = storedData.filter((meal, index) => {
          return (
            meal["strCategory"] == filter["strCategory"] &&
            meal["strArea"] == filter["strArea"]
          );
        });
        break;
      case filter["strArea"] !== "" && filter["strCategory"] === "":
        resultArray = storedData.filter((meal, index) => {
          return meal["strArea"] == filter["strArea"];
        });
        break;
      case filter["strCategory"] !== "" && filter["strArea"] === "":
        resultArray = storedData.filter((meal, index) => {
          return meal["strCategory"] == filter["strCategory"];
        });
        break;
      case filter["strCategory"] === "" && filter["strArea"] === "":
        if (storedData != null) {
          resultArray = storedData;
        }
        break;
      default:
        //no-opt
        break;
    }
    uiListener(filterMeals(resultArray, filter.strSearch));
  };

  useEffect(() => {
    dataBasedOnFilter();
    let filterText = [];
    Object.keys(filter).map((key, _) => {
      if (filter[key] !== "") {
        filterText.push(filter[key]);
      }
      uiFilterText(filterText.length > 0 ? filterText : "all");
    });
  }, [filter]);

  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <Search textChangeListener={onTextSearchListener} />
        <div className={`${classes.sortItem}`}>
          <SortDropDown
            arrayOfItems={category}
            selectListener={onDropDownListenerCategories}
            defaultValue="category"
          />
          <SortDropDown
            arrayOfItems={countries}
            selectListener={onDropDownListenerCountries}
            defaultValue="country"
          />
        </div>
      </div>
    </React.Fragment>
  );
});

export default UnkownUI;
