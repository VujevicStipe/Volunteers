import BannerComponent from "../banner/BannerComponent";
import styles from "./ActivitiesPageSection.module.css";

const ActivitiesPageSection = () => {
  const title = "Explore Volonteer Activities";
  return (
    <div className={styles.activitiesPageSection}>
      <BannerComponent pic="activities" title={title} />
    </div>
  );
};

export default ActivitiesPageSection;
