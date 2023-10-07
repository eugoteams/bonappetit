/** @format */

import React, { useEffect, useState, memo } from "react";
import classes from "./Search.module.css";
import { MdSearch, MdClose } from "react-icons/md";

const Search = memo(({ textChangeListener }) => {
  const [searchText, setSearchText] = useState("");

  const onTextChange = (e) => {
    setSearchText((prevState) => e.target.value);
  };

  const clearText = (e) => {
    setSearchText((prevState) => "");
  };

  //Debouncing
  useEffect(() => {
    let timer = setTimeout(() => {
      textChangeListener(searchText);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  return (
    <React.Fragment>
      <div className={`${classes.inputField}`}>
        <MdSearch className={`${classes.icon}`} />
        <input
          type="text"
          placeholder="search for recipes..."
          className={`${classes.search}`}
          value={searchText}
          onChange={onTextChange}
        />
        {searchText.length > 0 && (
          <MdClose className={`${classes.icon}`} onClick={clearText} />
        )}
      </div>
    </React.Fragment>
  );
});

export default Search;
