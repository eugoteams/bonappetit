/** @format */

import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaHamburger } from "react-icons/fa";

const Navbar = (props) => {
  const router = useRouter();
  const path = router.pathname;
  const [open, setOpen] = useState(false);
  const onClickListener = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <React.Fragment>
      <header className={`${classes.container}`}>
        <span className={`${classes.logo}`}>Bonappetit</span>
        <nav>
          <FaHamburger
            className={`${classes.menu_icon}`}
            onClick={onClickListener}
          />
          <div
            className={
              open
                ? `${classes.nav_container} ${classes.nav_container_dropdown}`
                : `${classes.nav_container}`
            }
          >
            <Link
              href="/"
              className={
                path === "/"
                  ? `${classes.link} ${classes.link_active}`
                  : `${classes.link}`
              }
              onClick={onClickListener}
            >
              home
            </Link>
            <Link
              href="/meal/bookmark"
              className={
                path === "/meal/bookmark"
                  ? `${classes.link} ${classes.link_active}`
                  : `${classes.link}`
              }
              onClick={onClickListener}
            >
              bookmark
            </Link>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
