/** @format */

import MealDescription from "@/Component/MealDescrition/MealDescription";
import useApi from "@/hooks/use-Api";
import React from "react";

const MealId = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <MealDescription {...props["meals"][0]} />
    </React.Fragment>
  );
};

export default MealId;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { callApi } = useApi();
  let mealId = params.id;
  let payload = { key: "searchById", value: mealId };

  let response = await callApi("http://localhost:3000/api/mealdb/v1/all", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("getStaticProps", response);

  return {
    props: { ...response },
  };
}
