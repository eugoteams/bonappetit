/** @format */

import React, { useEffect, useState } from "react";
import classes from "./SortDropDown.module.css";
import { TiArrowUnsorted } from "react-icons/ti";

const SortDropDown = ({ selectListener, arrayOfItems, defaultValue }) => {
  const [selected, setSelected] = useState("");
  const [dropDown, setDropDown] = useState(false);

  const selectedTextHandler = (event, value) => {
    setSelected((prevState) => value);
    setDropDown((prevState) => false);
  };

  const setDropDownListener = (event) => {
    setDropDown((prevState) => !prevState);
  };

  useEffect(() => {
    setSelected((prevState) => defaultValue);
  }, []);

  useEffect(() => {
    switch (true) {
      case selected === "clear":
        selectListener("");
        setSelected(defaultValue);
        break;
      case selected !== defaultValue:
        selectListener(selected);
        break;
      default:
        //no-opt
        break;
    }
  }, [selected]);

  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <div className={`${classes.input}`} onClick={setDropDownListener}>
          sort by:{" "}
          {selected?.length > 10 ? `${selected.substring(0, 9)}...` : selected}
          <TiArrowUnsorted />
        </div>
        {dropDown && (
          <div className={`${classes.dropDown}`}>
            {arrayOfItems?.map((item, index) => {
              return (
                <div
                  key={`${item}_${index}`}
                  className={`${classes.dropDownItem}`}
                  onClick={(event) => selectedTextHandler(event, item)}
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default SortDropDown;
