import BannerComponent from "../banner/BannerComponent";
import styles from "./VolunteersPageSection.module.css";

const VolunteersPageSection = () => {
  const title = "Meet Other Volunteers";
  
  return (
    <div className={styles.volunteersPageSection}>
      <BannerComponent pic="volunteers" title={title} />
    </div>
  );
};

export default VolunteersPageSection;
