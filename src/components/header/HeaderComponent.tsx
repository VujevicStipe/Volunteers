import NavListComponent from "../nav-list/NavListComponent";
import { NavLink } from "react-router-dom";
import styles from "./HeaderComponent.module.css";
import logo from "../../../public/assets/volunteers-logo.svg";
import useWindowSize from "../../util/useWindowSize";
import BurgerMenuComponent from "../burgerMenu/BurgerMenuComponent";

const HeaderComponent = () => {
  const deviceType = useWindowSize()

  console.log(deviceType)
  return (
    <div className={styles.header}>
      <NavLink to={"./"}>
        <img src={logo} alt="" />
      </NavLink>
      {deviceType == 'mobile' ? <BurgerMenuComponent /> : <NavListComponent variant="row" />}
    </div>
  );
};

export default HeaderComponent;
