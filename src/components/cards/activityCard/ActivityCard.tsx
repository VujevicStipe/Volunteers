import useWindowSize from "../../../util/useWindowSize";
import ButtonComponent from "../../button/ButtonComponent";
import styles from "./ActivityCard.module.css";
import activityImg from "../../../../public/assets/activity-img.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const deviceType = useWindowSize();

  return (
    <Link to={`/activities/details/:${activity.id}`}>
      <div className={`${styles.activityCard} ${styles[deviceType]}`}>
        <div className={styles.imgWrap}>
          <img src={activityImg} alt="" />
        </div>
        <h4>{activity.title}</h4>
        <h6>{activity.date}</h6>
        <ButtonComponent type="cardBtn">
          <FaArrowRight />
        </ButtonComponent>
      </div>
    </Link>
  );
};

export default ActivityCard;
