/** @format */
export const BOOKMARK_KEY = "MEALS_BOOKMARK";
export const MEALS_KEY = "MEALS_DB";
//Hook should always used inside a useEffect after the dom gets initialized.
const useStorage = () => {
  const saveToStorage = (data, key) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const getFromStorage = (key) => {
    let storedData = localStorage.getItem(key);
    return JSON.parse(storedData);
  };

  const clearFromStorage = (key) => {
    localStorage.clear(key);
  };

  return { saveToStorage, getFromStorage, clearFromStorage };
};

export default useStorage;
