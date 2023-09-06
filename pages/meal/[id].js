/** @format */

import MealDescription from "@/Component/MealDescrition/MealDescription";
import React from "react";

const MealId = ({ meal }) => {
  return (
    <React.Fragment>
      <MealDescription meal={meal} />
    </React.Fragment>
  );
};

export async function getServerSideProps(context) {
  let id = context.params.id;
  const path = require("path");
  const fs = require("fs");
  const dbPath = path.join(process.cwd(), "/pages/api/mealdb/v1/mealsdb.json");
  let meals = JSON.parse(fs.readFileSync(dbPath));
  let meal = meals.find((meal, _) => meal["idMeal"] === id);

  return {
    props: { meal },
  };
}

export default MealId;
