import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import NavListComponent from "../navList/NavListComponent";
import styles from "./BurgerMenuComponent.module.css";
import { useLocation } from "react-router-dom";

const BurgerMenuComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname === "/"])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div onClick={toggleMenu} className={styles.burgerMenu}>
      {!menuOpen ? <RxHamburgerMenu  /> : <IoCloseOutline />}
      <div className={`${styles.burgerList} ${menuOpen && styles.open}`}>
        {menuOpen && <NavListComponent variant="header" margin={false} />}
      </div>
    </div>
  );
};

export default BurgerMenuComponent;
