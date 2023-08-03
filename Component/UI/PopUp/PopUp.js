/** @format */

import React, { useState } from "react";
import classes from "./PopUp.module.css";
import { MdClose } from "react-icons/md";

/*
 *To display short messages.
 */
const PopUp = ({ text, status, open }) => {
  const [openToast, setOpenToast] = useState(true);

  const onClickListener = (event) => {
    setOpenToast((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      {openToast && (
        <div
          className={
            status === 200
              ? `${classes.container} ${classes.sucess}`
              : `${classes.container} ${classes.error}`
          }
        >
          <div>{text}</div>
          <MdClose className={`${classes.icon}`} onClick={onClickListener} />
        </div>
      )}
    </React.Fragment>
  );
};

export default PopUp;
