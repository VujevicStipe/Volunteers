import styles from "./FooterComponent.module.css";
import footerLogo from "../../../public/assets/volunteers-logo.svg";
import gitHubLogo from "../../../public/assets/github-footer.svg";
import linkedInLogo from "../../../public/assets/linkedin-footer.svg";
import figmaLogo from "../../../public/assets/figma-logo.svg";
import { NavLink } from "react-router-dom";
import NavListComponent from "../navList/NavListComponent";
import useWindowSize from "../../util/useWindowSize";

const FooterComponent = () => {
  const deviceType = useWindowSize();

  return (
    <div className={`${styles.footer} ${styles[deviceType]}`}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <NavLink to={"./"}>
            <img src={footerLogo} alt="" />
          </NavLink>
          <h5>Copyright &copy; 2024</h5>
        </div>

        <div className={styles.mySocial}>
          <h4>My Social Networks</h4>
          <NavLink to={"https://github.com/VujevicStipe"}>
            <img src={gitHubLogo} alt="" />
          </NavLink>
          <NavLink to={`https://www.linkedin.com/in/stipe-vujevicc/`}>
            <img src={linkedInLogo} alt="" />
          </NavLink>
          <NavLink
            to={`https://www.figma.com/file/74YzjhDLJeiYPmCYOUrePN/VolunteersWeb?type=design&node-id=0%3A1&mode=design&t=IZw1Hw0NoTh621JM-1`}
          >
            <img src={figmaLogo} alt="" />
          </NavLink>
        </div>
        <div>
          <h4>Services</h4>
          <NavListComponent variant="footer" margin={false} />
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
    </div>
  );
};

export default FooterComponent;
