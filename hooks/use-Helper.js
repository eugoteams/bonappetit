/** @format */

const useHelper = () => {
  //String manipulator
  const stringManipulator = (strValue, removeWhitespace = false) => {
    let manipulateStr = strValue.toLowerCase().trim();
    return removeWhitespace ? manipulateStr.replace(/\s/g, "") : manipulateStr;
  };

  const filterMeals = (arrayOfMeals, filterByText, searchExact = false) => {
    return arrayOfMeals.filter((meal, index) => {
      return stringManipulator(meal["strMeal"], searchExact).includes(
        stringManipulator(filterByText, searchExact)
      );
    });
  };

  return { stringManipulator, filterMeals };
};

export default useHelper;
