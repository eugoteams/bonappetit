/** @format */

import React from "react";
import Grid from "../UI/Grid/Grid";
import Card from "../UI/Card/Card";

const MealsView = ({ arrayOfMeals, title }) => {
  return (
    <React.Fragment>
      <Grid>
        {arrayOfMeals.map((meal, index) => {
          return (
            <Card
              key={meal.idMeal}
              idMeal={meal.idMeal}
              origin={meal.strArea}
              title={meal.strMeal}
              imageSrc={meal.strMealThumb}
              category={meal.strCategory}
            />
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default MealsView;
