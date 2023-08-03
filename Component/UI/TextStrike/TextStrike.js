/** @format */

import React, { useState } from "react";
import classes from "./TextStrike.module.css";

const TextStrike = ({ text, lastElement }) => {
  const [radio, setRadio] = useState(false);
  const onClickListener = (event) => {
    setRadio((prevState) => !prevState);
  };
  return (
    <React.Fragment>
      <div
        className={
          lastElement
            ? `${classes.container} `
            : `${classes.container} ${classes.container_underline}`
        }
      >
        <input
          type="radio"
          checked={radio}
          onClick={onClickListener}
          onChange={(event) => {
            /*no-opt*/
          }}
        />
        <p
          className={radio ? `${classes.text_strike}` : undefined}
          onClick={onClickListener}
        >
          {text}
        </p>
      </div>
    </React.Fragment>
  );
};

export default TextStrike;
