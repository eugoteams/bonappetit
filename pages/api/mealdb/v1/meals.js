/** @format */
import { iterator, promiseNeverForget } from "../../helper/utitliy";

export default async function handler(req, res) {
  let method = req.method;
  if (method === "GET") {
    let mealsArray = [];
    let arrayOfCategory = await iterator("getCategory", "", ["category"], 0);
    let mealsByCategory = await iterator(
      "filterByCategory",
      "strCategory",
      arrayOfCategory,
      0
    );
    let totatFetchTime = 0;
    mealsByCategory.forEach((meal, index) => {
      let delay = 900 * (index / 5);
      console.log("delay", index, delay);
      var timer = setTimeout(async () => {
        let payload = { key: "searchById", value: `${meal["idMeal"]}` };
        let promiseReceived = await promiseNeverForget(payload);
        mealsArray.push(...promiseReceived);
        // console.log("Final length", mealsByCategory.length, mealsArray.length);
        if (mealsByCategory.length === mealsArray.length) {
          clearTimeout(timer);
          res.status(200).json({ meals: mealsArray });
        }
      }, delay);
    });
  }
}
