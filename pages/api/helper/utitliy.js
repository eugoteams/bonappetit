/** @format */

import { resolve } from "styled-jsx/css";
import apiCaller from "./apiCaller";

const baseUrl = "https://www.themealdb.com/api/json/v1/1/";

const endPoints = {
  searchByName: "search.php?s=",
  searchByFirstLetter: "search.php?f=",
  searchById: "lookup.php?i=",
  random: "random.php",
  categories: "categories.php",
  getCategory: "/list.php?c=list",
  getArea: "/list.php?a=list",
  getIngredients: "/list.php?i=list",
  filterByIngredient: "filter.php?i=",
  filterByCategory: "filter.php?c=",
  filterByArea: "filter.php?a=",
  random: "random.php",
};

export default function url(payload) {
  return `${baseUrl}${endPoints[payload.key]}${payload.value}`;
}

/**
 *
 * @param {*} payload : {key:"",vlaue:""}
 * key is form urlEndpoints Array
 * value is the value you want to send.
 *
 * url will genrete the url and pass it to the apicaller
 * which will perfom only get operation.
 * @returns meals array.
 */
export async function objectFetcher(payload) {
  let urlGenerated = url(payload);
  let object = await apiCaller(urlGenerated);
  return object;
}

/**
 *
 * @param {*} payload is passed as parameters to  objectFetcher().
 * @returns promise of meals object
 */
export async function promiseNeverForget(payload) {
  const KEY = "meals";
  let promise = new Promise(async (resolve, reject) => {
    let object = await objectFetcher(payload);
    if (object[KEY].length > 0) {
      resolve(object[KEY]);
    } else {
      reject("error");
    }
  });
  return promise;
}

//function sleep
const sleepNow = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

/**
 *
 *  * key is form urlEndpoints Array
 * value is the value you want to send.
 *
 * @param {*} key key is form urlEndpoints Array
 * @param {*} valueKey key from array passed in as paramter
 * @param {*} array array to iterate on.
 * @returns array of individual meal.
 */
export async function iterator(key, valueKey, array, delay) {
  let iteratedData = [];
  let iterationCount = 0;
  for (let i = 0; i < array.length; i++) {
    let payload = { key: `${key}`, value: "" };
    if (array.length > 1) {
      payload = { key: `${key}`, value: `${array[i][valueKey]}` };
    }
    let promiseReceived = await promiseNeverForget(payload);
    iterationCount = iterationCount + promiseReceived.length;
    iteratedData.push(...promiseReceived);
  }
  if (iteratedData.length === iterationCount) {
    return iteratedData;
  }
}
