/** @format */

import { serverMsg } from "@/model/serverConstant";

const useServerMessage = () => {
  const serverCodeInterpreter = (serverCode) => {
    return serverMsg[serverCode];
  };

  return { serverCodeInterpreter };
};

export default useServerMessage;
