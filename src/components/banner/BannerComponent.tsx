import React from "react";
import styles from "./BannerComponent.module.css";
import { TitleWrapH1 } from "../../styles/styles";

interface BannerComponentProps {
  pic: "activities" | "volunteers" | "organisations";
  title: string;
}
const imageMap: Record<BannerComponentProps["pic"], string> = {
  activities: "../../../public/assets/activites-banner.png",
  volunteers: "../../../public/assets/volunteers-banner.png",
  organisations: "../../../public/assets/organisations-banner.png",
};

const BannerComponent: React.FC<BannerComponentProps> = ({ pic, title }) => {
  const imageUrl = imageMap[pic];

  return (
    <div className={styles.banner}>
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
