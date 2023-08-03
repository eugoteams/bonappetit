/** @format */

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PopUp from "../UI/PopUp/PopUp";

const Notification = ({ text, status }) => {
  const [domReady, setDomReady] = useState(false);
  useEffect(() => {
    setDomReady(true);
  }, []);

  return domReady
    ? createPortal(
        <PopUp text={text} status={status} />,
        document.getElementById("modal")
      )
    : null;
};

export default Notification;
