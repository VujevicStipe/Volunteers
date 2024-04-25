import React from "react";
import styles from "./BannerComponent.module.css";

interface BannerComponentProps {
  pic: string;
  title: string;
}

const BannerComponent: React.FC<BannerComponentProps> = ({ pic, title }) => {
  return (
    <div className={styles.banner}>
      <img src="" alt="" />
      <h1>{title}</h1>
    </div>
  );
};

export default BannerComponent;
