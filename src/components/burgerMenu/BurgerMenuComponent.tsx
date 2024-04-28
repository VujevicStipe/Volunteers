import { useState } from "react";
import burgerMenu from "../../../public/assets/burger-menu.svg";
import NavListComponent from "../navList/NavListComponent";
import styles from "./BurgerMenuComponent.module.css";

const BurgerMenuComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div onClick={toggleMenu}>
      <img src={burgerMenu} alt="" />
      <div className={`${styles.burgerList} ${menuOpen && styles.open}`}>
        {menuOpen && <NavListComponent variant="header" />}
      </div>
    </div>
  );
};

export default BurgerMenuComponent;
