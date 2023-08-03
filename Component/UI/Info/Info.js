/** @format */

import React, { useEffect, useState } from "react";
import classes from "./Info.module.css";

const Info = ({ text, stopwatch }) => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
  }, [timer]);

  useEffect(() => {
    setTimer((prevState) => 1);
  }, []);
  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <p>{text}</p>
        {stopwatch && <span>{timer}.sec</span>}
      </div>
    </React.Fragment>
  );
};

export default Info;
