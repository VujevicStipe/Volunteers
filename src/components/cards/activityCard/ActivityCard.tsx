import styles from "./ActivityCard.module.css";
import useWindowSize from "../../../util/useWindowSize";
import ButtonComponent from "../../button/ButtonComponent";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface ActivityCardProps {
  activity: Activity;
  children?: ReactNode;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, children }) => {
  const deviceType = useWindowSize();

  return (
    <Link to={`/activities/details/:${activity.id}`}>
      <div className={`${styles.activityCard} ${styles[deviceType]}`}>
        <div className={styles.imgWrap}>
          <img src={activity.image} alt="" />
        </div>
        <h4>{activity.title}</h4>
        <h6>{activity.date}</h6>
        {children}
        <ButtonComponent type="cardBtn">
          <FaArrowRight />
        </ButtonComponent>
      </div>
    </Link>
  );
};

export default ActivityCard;
