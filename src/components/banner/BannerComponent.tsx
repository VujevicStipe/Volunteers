import React from "react";
import styles from "./BannerComponent.module.css";
import { TitleWrapH1 } from "../../styles/styles";
import useWindowSize from "../../util/useWindowSize";
import activitiesBanner from "/assets/activites-banner.png";
import volunteersBanner from "/assets/volunteers-banner.png";
import organisationsBanner from "/assets/organisations-banner.png";

interface BannerComponentProps {
  pic: "activities" | "volunteers" | "organisations";
  title: string;
}
const imageMap: Record<BannerComponentProps["pic"], string> = {
  activities: activitiesBanner,
  volunteers: volunteersBanner,
  organisations: organisationsBanner,
};

const BannerComponent: React.FC<BannerComponentProps> = ({ pic, title }) => {
  const deviceType = useWindowSize();
  const imageUrl = imageMap[pic];

  return (
    <div className={`${styles.banner} ${styles[deviceType]}`}>
      <div className={styles.imgWrap}>
        <img src={imageUrl} alt="" />
      </div>
      <TitleWrapH1>
        <h1>{title}</h1>
        <span></span>
      </TitleWrapH1>
    </div>
  );
};

export default BannerComponent;
