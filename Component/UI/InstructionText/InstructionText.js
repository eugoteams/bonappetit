/** @format */

import React from "react";
import classes from "./Instruction.module.css";

const InstructionText = ({ num, text }) => {
  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <span className={`${classes.num}`}>{num}.</span>
        <p className={`${classes.para}`}>{text}</p>
      </div>
    </React.Fragment>
  );
};

export default InstructionText;
