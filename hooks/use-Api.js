/** @format */
import useServerMessage from "./use-ServerMsg";

const useApi = () => {
  let key = "meals";
  const { serverCodeInterpreter } = useServerMessage();
  const callApi = async (url, parameters) => {
    let response = await fetch(url, parameters);
    let serializedData = await response.json();
    let meals = serializedData[key];
    return {
      status: response.status,
      meals,
      message: serverCodeInterpreter(response.status),
    };
  };

  return { callApi };
};

export default useApi;
