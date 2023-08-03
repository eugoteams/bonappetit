/** @format */
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  let method = req.method;
  if (method === "GET") {
    let filePath = path.join(
      process.cwd(),
      "/pages/api/mealdb/v1/mealsdb.json"
    );
    let jsonMeals = fs.readFileSync(filePath);
    res.status(200).json({ meals: JSON.parse(jsonMeals) });

    /**
     * Code to fetch data from DB and
     * write to a file .
     * since if the delay is more than 10s vecel will throw 504 error
     * in hobby mode.
     */
    // let mealsArray = [];
    // let arrayOfCategory = await iterator("getCategory", "", ["category"], 0);
    // let mealsByCategory = await iterator(
    //   "filterByCategory",
    //   "strCategory",
    //   arrayOfCategory,
    //   0
    // );
    // let totatFetchTime = 0;
    // mealsByCategory.forEach((meal, index) => {
    //   let delay = 900 * (index / 5);
    //   console.log("delay", index, delay);
    //   var timer = setTimeout(async () => {
    //     let payload = { key: "searchById", value: `${meal["idMeal"]}` };
    //     let promiseReceived = await promiseNeverForget(payload);
    //     mealsArray.push(...promiseReceived);
    //     // console.log("Final length", mealsByCategory.length, mealsArray.length);
    //     if (mealsByCategory.length === mealsArray.length) {
    //       clearTimeout(timer);
    //       fs.writeFileSync(filePath, JSON.stringify(mealsArray), (err) => {
    //         if (err) {
    //           console.log("Erro", err);
    //         }
    //         console.log("file saved succesfully !");
    //       });
    //       res.status(200).json({ meals: mealsArray });
    //     }
    //   }, delay);
    // });
  }
}
