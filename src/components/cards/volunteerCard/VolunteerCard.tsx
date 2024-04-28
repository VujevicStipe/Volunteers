import ButtonComponent from "../../button/ButtonComponent";
import stlyes from "./VolunteerCard.module.css";
import arrow from "../../../../public/assets/card-arrow.svg";
import { FaArrowRight } from "react-icons/fa6";

const VolunteerCard = () => {
  return (
    <div className={stlyes.volunteerCard}>
      <div className={stlyes.imgWrap}>
        <img src="../../../public/assets/activity-img.png" alt="" />
      </div>
      <h3>Homeless Outreach Brigade</h3>
      <h4>20.4.2024</h4>
      <ButtonComponent type="cardBtn">
        <FaArrowRight />
      </ButtonComponent>
    </div>
  );
};

export default VolunteerCard;
