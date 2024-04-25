import React from "react";
import styles from "./NavListComponent.module.css";
import { NavLink } from "react-router-dom";

// prop za header ili footer
interface NavListComponentProps {
  variant: "row" | "col" ;
}

const NavListComponent: React.FC<NavListComponentProps> = ({ variant }) => {
  const navList =
    variant == "col" ? `${styles.navList} ${styles.column}` : styles.navList;
  return (
    <ul className={navList}>
      <li>
        <NavLink to={"/activities"} className={styles.navItem}>
          Activities
        </NavLink>
      </li>
      <li>
        <NavLink to={"/volunteers"} className={styles.navItem}>
          Volunteers
        </NavLink>
      </li>
      <li>
        <NavLink to={"/organisations"} className={styles.navItem}>
          Organisations
        </NavLink>
      </li>
    </ul>
  );
};

export default NavListComponent;
