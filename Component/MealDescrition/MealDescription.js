/** @format */

import React from "react";
import classes from "./MealDescription.module.css";
import { useRouter } from "next/router";
import { BiSolidDish } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { PiCookingPotBold } from "react-icons/pi";
import { BsAlarm } from "react-icons/bs";
import TextStrike from "../UI/TextStrike/TextStrike";
import InstructionText from "../UI/InstructionText/InstructionText";
import VideoComponent from "../UI/VideoComponent/VideoComponent";
import BlogHeader from "../UI/BlogHeader/BlogHeader";
import { MdArrowBackIosNew } from "react-icons/md";

const MealDescription = (props) => {
  const router = useRouter();
  const INGREDIENT = "strIngredient";
  const MEASURE = "strMeasure";
  const SEPEARATOR = "\r\n";
  let step = 0;
  let area = props.strArea;
  let category = props.strCategory;
  let cookingInstruction = props.strInstructions.split(SEPEARATOR);
  let mealTitle = props.strMeal;
  let imageSrc = props.strMealThumb;
  let videoSrc = props.strYoutube;
  const filteredIngredient = [];
  const array20 = [...Array(20)].map((_, index) => {
    let num = index + 1;
    if (
      props[`${INGREDIENT}${num}`] !== "" &&
      props[`${INGREDIENT}${num}`] !== null
    ) {
      filteredIngredient.push(
        props[`${MEASURE}${num}`] + " " + props[`${INGREDIENT}${num}`]
      );
    }
  });

  const onClickBack = () => {
    router.push("/");
  };

  return (
    <React.Fragment>
      <article>
        <div className={`${classes.backButton}`} onClick={onClickBack}>
          <MdArrowBackIosNew />
          <span onClick={onClickBack}>back</span>
        </div>
        <BlogHeader
          imageSrc={imageSrc}
          idMeal={props.idMeal}
          title={mealTitle}
        />
        <main className={`${classes.container}`}>
          <div className={`${classes.image_placeholder}`}>
            <img src={imageSrc} className={`${classes.image}`} />
          </div>

          <h1 className={`${classes.title}`}>{mealTitle}</h1>
          {/** TAG container */}
          <section className={`${classes.tagsContainer}`}>
            <span className={`${classes.tagContainer}`}>
              category: {category}
            </span>
            <span className={`${classes.tagContainer}`}>cuisine: {area}</span>
            <span className={`${classes.tagContainer}`}>difficulty: easy</span>
          </section>
          {/** Meals Info */}
          <section className={`${classes.grid} ${classes.section_standard}`}>
            <div className={`${classes.gridItem}`}>
              <BiSolidDish className={`${classes.icon}`} />
              <h2>servings</h2>
              <span>2 servings</span>
            </div>
            <div className={`${classes.gridItem}`}>
              <BsAlarm className={`${classes.icon}`} />
              <h2>prep time</h2>
              <span>30 minutes</span>
            </div>
            <div className={`${classes.gridItem}`}>
              <PiCookingPotBold className={`${classes.icon}`} />
              <h2>cooking time</h2>
              <span>40 minutes</span>
            </div>
            <div className={`${classes.gridItem}`}>
              <BsFire className={`${classes.icon}`} />
              <h2>calories</h2>
              <span>300 kcal</span>
            </div>
          </section>

          {/** Ingredients */}
          <section
            className={`${classes.ingredientContainer} ${classes.section_standard}`}
          >
            <h2 className={`${classes.secondary_title}`}>ingredient</h2>
            {filteredIngredient.map((ingredient, index) => {
              let num = index + 1;
              return (
                <TextStrike
                  key={num}
                  text={ingredient}
                  lastElement={num === filteredIngredient.length}
                />
              );
            })}
          </section>
          <section className={`${classes.section_standard}`}>
            <h2 className={`${classes.secondary_title}`}>how to make it</h2>
            {cookingInstruction.map((instruction, index) => {
              let hasOnlyNumber = /^\d+$/.test(instruction);
              if (instruction !== "" && !hasOnlyNumber) {
                step = step + 1;
                return (
                  <InstructionText
                    key={`${instruction}${index}`}
                    num={step}
                    text={instruction}
                  />
                );
              }
            })}
          </section>
          <section className={`${classes.section_standard}`}>
            <h2 className={`${classes.secondary_title}`}>recipe video</h2>
            <VideoComponent videoSrc={videoSrc} />
          </section>
        </main>
      </article>
    </React.Fragment>
  );
};

export default MealDescription;
