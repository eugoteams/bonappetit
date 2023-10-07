/** @format */

import React, { useEffect, useState } from "react";
import classes from "./Loader.module.css";

const Loader = (props) => {
  const [loadPercentage, setLoadPercentage] = useState(0);

  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <div className={`${classes.bar}`}>
          <div className={`${classes.active_bar}`}></div>
        </div>
        <p>Loading Recipes...</p>
      </div>
    </React.Fragment>
  );
};

export default Loader;
