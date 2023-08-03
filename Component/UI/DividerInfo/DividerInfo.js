/** @format */

import React from "react";
import classes from "./DividerInfo.module.css";

const DividerInfo = ({ title, quantity }) => {
  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <div className={`${classes.dividerHeader}`}>
          <span className={`${classes.text}`}>{title}</span>
          <span>meals : {quantity}</span>
        </div>
        <div className={`${classes.divider}`}></div>
      </div>
    </React.Fragment>
  );
};

export default DividerInfo;
