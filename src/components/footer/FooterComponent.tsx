import styles from "./FooterComponent.module.css";
import footerLogo from "../../../public/assets/volunteers-logo.svg";
import gitHubLogo from "../../../public/assets/github-footer.svg";
import linkedInLogo from "../../../public/assets/linkedin-footer.svg";
import { NavLink } from "react-router-dom";
import NavListComponent from "../nav-list/NavListComponent";

const FooterComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <NavLink to={"./"}>
          <img src={footerLogo} alt="" />
        </NavLink>
        <h5>Copyright &copy; 2024</h5>
      </div>

      <div className={styles.mySocial}>
        <h4>My Social Networks</h4>
        <img src={gitHubLogo} alt="" />
        <img src={linkedInLogo} alt="" />
      </div>
      <div>
        <h4>Services</h4>
        <NavListComponent variant="col" />
      </div>
      <div>
        <h4>Partners</h4>
        <ul>
          <li>Unicef</li>
          <li>Habitat</li>
          <li>Bank of Scotland</li>
          <li>Unicopa</li>
          <li>Harleysville</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterComponent;
