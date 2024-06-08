import NavListComponent from "../navList/NavListComponent";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./HeaderComponent.module.css";
import logo from "../../../public/assets/volunteers-logo.svg";
import useWindowSize from "../../util/useWindowSize";
import BurgerMenuComponent from "../burgerMenu/BurgerMenuComponent";
import { useEffect, useState } from "react";

const HeaderComponent = () => {
  const deviceType = useWindowSize();
  const [isHomePage, setIsHomePage] = useState(false);
  const location = useLocation()

  useEffect(() => {
    setIsHomePage(location.pathname === "/");
  }, [location.pathname]);

  return (
    <div className={`${styles.header} ${styles[deviceType]}`}>
      <NavLink to={"./"}>
        <img src={logo} alt="" />
      </NavLink>
      {deviceType == "mobile" ? (
        <BurgerMenuComponent />
      ) : (
        <NavListComponent
          variant="header"
          margin={isHomePage}
        />
      )}
    </div>
  );
};

export default HeaderComponent;
