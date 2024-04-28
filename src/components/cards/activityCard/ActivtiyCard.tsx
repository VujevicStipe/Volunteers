import useWindowSize from "../../../util/useWindowSize";
import ButtonComponent from "../../button/ButtonComponent";
import styles from "./ActivtiyCard.module.css";
import activityImg from '../../../../public/assets/activity-img.png'
import { FaArrowRight } from "react-icons/fa6";

const ActivityCard = () => {
  const deviceType = useWindowSize()
  
  return (
    <div className={`${styles.activityCard} ${styles[deviceType]}`}>
      <div className={styles.imgWrap}>
        <img src={activityImg} alt="" />
      </div>
      <h3>Homeless Outreach Brigade</h3>
      <h4>20.4.2024</h4>
      <ButtonComponent type="cardBtn">
        <FaArrowRight />
      </ButtonComponent>
    </div>
  );
};

export default ActivityCard;
