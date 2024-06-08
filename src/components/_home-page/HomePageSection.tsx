import styles from "./HomePageSection.module.css";
import ButtonComponent from "../button/ButtonComponent";
import { Link } from "react-router-dom";
import { TitleWrapH2 } from "../../styles/styles";
import heroBg1 from "../../../public/assets/hero-bg.svg";
import heroBg2 from "../../../public/assets/hero-colors-bg.svg";
import heroImg from "../../../public/assets/hero-image.svg";
import heroBgTablet from "../../../public/assets/hero-bg-tablet.svg";
import comLogo1 from "../../../public/assets/comLogo1.svg";
import comLogo2 from "../../../public/assets/comLogo2.svg";
import comLogo3 from "../../../public/assets/comLogo3.svg";
import comLogo4 from "../../../public/assets/comLogo4.svg";
import comLogo5 from "../../../public/assets/comLogo5.svg";
import volInsLogo1 from "../../../public/assets/volInsLogo1.svg";
import volInsLogo2 from "../../../public/assets/volInsLogo2.svg";
import volInsLogo3 from "../../../public/assets/volInsLogo3.svg";
import volInsImg from "../../../public/assets/volInsImage.png";
import useWindowSize from "../../util/useWindowSize";
import VolunteerCard from "../cards/volunteerCard/VolunteerCard";
import ActivityCard from "../cards/activityCard/ActivityCard";
import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../../util/config";

const HomePageSection = () => {
  const deviceType = useWindowSize();

  const [activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    axios
      .get(`${apiUrl}/activities`)
      .then((res) => setActivities(res.data))
      .catch((err) => console.log(err));
  }, []);
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  useEffect(() => {
    axios
      .get(`${apiUrl}/volunteers`)
      .then((res) => setVolunteers(res.data))
      .catch((err) => console.log(err));
  }, []);

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
          <h2>Explore volunteer activities</h2>
          <span></span>
        </TitleWrapH2>
        {activities.slice(0, 3).map((activity) => (
          <ActivityCard key={activity.id} activity={activity}/>
        ))}
      </div>
      <div className={styles.supportersShowcase}>
        <TitleWrapH2>
          <h2>Some of our supporter</h2>
          <span></span>
        </TitleWrapH2>
        <img src={comLogo1} alt="comLogo1" />
        <img src={comLogo2} alt="comLogo2" />
        <img src={comLogo3} alt="comLogo3" />
        <img src={comLogo4} alt="comLogo4" />
        <img src={comLogo5} alt="comLogo5" />
      </div>
      <div className={styles.volunteerInsights}>
        <TitleWrapH2>
          <h2>Why volunteer?</h2>
          <span></span>
        </TitleWrapH2>
        {deviceType == "mobile" && <img src={volInsImg} alt="volInsImg" />}
        <div className={styles.content}>
          <div className={styles.item}>
            <img src={volInsLogo1} alt="volInsLogo1" />
            <div className={styles.itemContent}>
              <h4>Personal Growth</h4>
              <p>
                Volunteering provides invaluable opportunities for personal
                growth
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <img src={volInsLogo2} alt="volInsLogo2" />
            <div className={styles.itemContent}>
              <h4>Community Impact</h4>
              <p>
                By volunteering, you have the power to make a tangible
                difference in your community
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <img src={volInsLogo3} alt="volInsLogo3" />
            <div className={styles.itemContent}>
              <h4>Sense of Fulfillment</h4>
              <p>
                Engaging in volunteer work can bring a deep sense of fulfillment
                and purpose
              </p>
            </div>
          </div>
        </div>
        {deviceType != "mobile" && <img src={volInsImg} alt="volInsImg" />}
      </div>
      <div className={styles.volunteersShowcase}>
        <TitleWrapH2>
          <h2>Meet other volunteers</h2>
          <span></span>
        </TitleWrapH2>
        {volunteers.slice(0, 4).map((volunteer) => (
          <VolunteerCard key={volunteer.id} variant="volunteer" volunteer={volunteer}/>
        ))}
      </div>
    </div>
  );
};

export default HomePageSection;
