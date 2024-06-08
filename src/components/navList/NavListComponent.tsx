import React from "react";
import styles from "./NavListComponent.module.css";
import { NavLink } from "react-router-dom";
import { useRoleManager } from "../../util/RoleManagerContext";
import useWindowSize from "../../util/useWindowSize";
import ButtonComponent from "../button/ButtonComponent";

interface NavListComponentProps {
  variant: "header" | "footer";
  margin: boolean;
}

const NavListComponent: React.FC<NavListComponentProps> = ({
  variant,
  margin,
}) => {
  const { role, setRole } = useRoleManager();
  const deviceType = useWindowSize();

  const toggleRole = () => {
    setRole(role === "user" ? "admin" : "user");
  };

  const navList =
    variant == "header"
      ? `${styles.navList} ${margin && styles.navListMargin} `
      : `${styles.navList} ${styles.footer}`;

  return (
    <ul className={`${navList} ${styles[deviceType]}`}>
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
      {variant == "header" && (
        <ButtonComponent onClick={toggleRole} type="toggleUserBtn">
          {role === "user" ? "Admin" : "User"}
        </ButtonComponent>
      )}
    </ul>
  );
};

export default NavListComponent;
