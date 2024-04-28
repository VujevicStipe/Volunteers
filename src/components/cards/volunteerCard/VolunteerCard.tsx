import stlyes from "./VolunteerCard.module.css";
import user1 from "../../../../public/assets/volunteerAvatar1.jpg";

const VolunteerCard = () => {
  const name = "Kiara";
  
  return (
    <div className={stlyes.volunteerCard}>
      <img src={user1} alt="user1" />
      <h3>{name}</h3>
    </div>
  );
};

export default VolunteerCard;
