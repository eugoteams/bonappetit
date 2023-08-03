/** @format */

import MealDescription from "@/Component/MealDescrition/MealDescription";
import useApi from "@/hooks/use-Api";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const MealId = (props) => {
  const [mealDescription, setMealDescription] = useState([]);
  const { callApi } = useApi();
  const router = useRouter();
  const mealID = router.query.id;
  let payload = { key: "searchById", value: mealID };

  //Fetch Data from api
  const dataFromApi = async () => {
    let data = await callApi("/api/mealdb/v1/all", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setMealDescription((prevState) => data.meals);
  };

  useEffect(() => {
    dataFromApi();
  }, []);

  return (
    <React.Fragment>
      {mealDescription.length > 0 && (
        <MealDescription {...mealDescription[0]} />
      )}
    </React.Fragment>
  );
};

export default MealId;
