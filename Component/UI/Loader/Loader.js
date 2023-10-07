/** @format */

import React, { memo } from "react";
import classes from "./Loader.module.css";

const Loader = memo(({ text }) => {
  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <div className={`${classes.bar}`}>
          <div className={`${classes.active_bar}`}></div>
        </div>
        <p>{text}</p>
      </div>
    </React.Fragment>
  );
});

export default Loader;
