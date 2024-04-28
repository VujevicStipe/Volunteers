import { TitleWrapH2 } from "../../styles/styles";
import heroBg1 from "../../../public/assets/hero-bg.svg";
import heroBg2 from "../../../public/assets/hero-colors-bg.svg";
import heroImg from "../../../public/assets/hero-image.svg";
import heroBgTablet from "../../../public/assets/hero-bg-tablet.svg";
import styles from "./HomePageSection.module.css";
import { Link } from "react-router-dom";
import useWindowSize from "../../util/useWindowSize";
import VolunteerCard from "../cards/volunteerCard/VolunteerCard";
import ButtonComponent from "../button/ButtonComponent";

const HomePageSection = () => {
  const deviceType = useWindowSize();

  console.log(deviceType);

  return (
    <div className={`${styles.homePageSection} ${styles[deviceType]}`}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Kindness knows no bounds</h1>
          <p>
            Serving as volunteers, we believe kindness transcends boundaries,
            making a lasting impact on those we help.
          </p>
          <Link to="/activities">
            <ButtonComponent type="primaryBtn">Apply Now</ButtonComponent>
          </Link>
          <div className={styles.heroContentBg}>
            <img src={heroBg2} alt="hero-bg2" />
          </div>
        </div>
        <div className={styles.heroVisuals}>
          <img
            src={deviceType == "desktop" ? heroBg1 : heroBgTablet}
            alt="hero-bg1"
          />
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
      <div className={styles.activitiesShowcase}>
        <TitleWrapH2>
          <h2>Explore Volunteer Activities</h2>
          <span></span>
        </TitleWrapH2>
        <VolunteerCard />
        <VolunteerCard />
        <VolunteerCard />
      </div>
      <div className={styles.supportersShowcase}></div>
      <div className={styles.volunteerInsights}></div>
      <div className={styles.volunteersShowcase}></div>
    </div>
  );
};

export default HomePageSection;
