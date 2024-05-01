import stlyes from "./VolunteerCard.module.css";
import user1 from "../../../../public/assets/volunteerAvatar1.jpg";

interface VolunteerCardProps {
  volunteer: Volunteer;
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({ volunteer }) => {
  return (
    <div className={stlyes.volunteerCard}>
      <img src={user1} alt="user1" />
      <h4>{volunteer.name} {volunteer.surname}</h4>
    </div>
  );
};

export default VolunteerCard;
