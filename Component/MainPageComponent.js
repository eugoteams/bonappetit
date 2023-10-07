/** @format */

import React, { useState, useEffect, useCallback, Suspense, lazy } from "react";
import useStorage, { BOOKMARK_KEY, MEALS_KEY } from "@/hooks/use-Storage";
const MealsView = lazy(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(import("./MealsView/MealsView"));
    }, 2000);
  });
});
import useServerMessage from "@/hooks/use-ServerMsg";
import useApi from "@/hooks/use-Api";
import UnkownUI from "./UnkownUI/UnkownUI";
import DividerInfo from "./UI/DividerInfo/DividerInfo";
import Info from "./UI/Info/Info";
import Loader from "./UI/Loader/Loader";

const MainPageComponent = (props) => {
  const [serverStatus, setServerStatus] = useState("");
  const [meals, setMealsList] = useState([]);
  const [filterText, setFilterText] = useState("all");
  const [info, setInfo] = useState({ msg: "", stopwatch: false });
  const { serverCodeInterpreter } = useServerMessage();
  const { callApi } = useApi();
  const { saveToStorage, getFromStorage } = useStorage();

  //Fetch Data from api
  const dataFromApi = async () => {
    let data = await callApi("/api/mealdb/v1/meals", {
      method: "GET",
    });
    saveToStorage([...data.meals], MEALS_KEY);
    setMealsList([...data.meals]);
    setServerStatus(data.status);
  };

  //on component_mounted.
  useEffect(() => {
    setInfo((prevState) => {
      return {
        msg: "Sorry, we couldn't find any recipes !",
        stopwatch: false,
      };
    });
    //Local storage to work dom must be initialized
    let bookmarkStored = getFromStorage(BOOKMARK_KEY);
    if (bookmarkStored === null) {
      saveToStorage([], BOOKMARK_KEY);
    }

    let storedData = getFromStorage(MEALS_KEY);
    if (storedData != null) {
      setMealsList(storedData);
      setServerStatus(200);
    } else {
      dataFromApi();
    }
  }, []);

  // useEffect(() => {}, [meals]);

  const unKownUIListener = useCallback((uiData) => {
    if (uiData.length === 0 && meals.length > 0) {
      setInfo((prevState) => {
        return { msg: "Recipe not found !", stopwatch: false };
      });
    }
    setMealsList((prevState) => uiData);
  }, []);

  const unKownUIFilterText = useCallback((filterValue) => {
    setFilterText((prevState) =>
      filterValue === "all"
        ? "all"
        : filterValue.join("_").split("_").join(" / ")
    );
  }, []);

  return (
    <React.Fragment>
      <UnkownUI
        storageKey={MEALS_KEY}
        uiListener={unKownUIListener}
        uiFilterText={unKownUIFilterText}
      />
      <DividerInfo title={filterText} quantity={meals.length} />
      <Suspense fallback={<Loader text={"Loading Recipes..."} />}>
        {meals.length === 0 ? (
          <Info text={info.msg} stopwatch={info.stopwatch} />
        ) : (
          <MealsView arrayOfMeals={meals} title={"all"} />
        )}
      </Suspense>
    </React.Fragment>
  );
};

export default MainPageComponent;
