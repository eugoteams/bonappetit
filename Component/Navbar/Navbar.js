/** @format */

import React from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = (props) => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <React.Fragment>
      <header className={`${classes.container}`}>
        <span className={`${classes.logo}`}>Bonappetit</span>
        <nav className={`${classes.nav_container}`}>
          <Link
            href="/"
            className={
              path === "/"
                ? `${classes.link} ${classes.link_active}`
                : `${classes.link}`
            }
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
          >
            bookmark
          </Link>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
