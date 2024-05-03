import { Link } from "react-router-dom";
import VolunteerCardInfoCompontent from "./components/VolunteerCardInfoCompontent";

interface VolunteerCardProps {
  volunteer: Volunteer | VolunteerForJob;
  variant: "volunteer" | "volunteerApply";
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({
  volunteer,
  variant,
}) => {
  return (
    variant === "volunteer" && 'id' in volunteer ? (
      <Link to={`/volunteers/details/${(volunteer as Volunteer).id}`}>
        <VolunteerCardInfoCompontent variant={variant} volunteer={volunteer} />
      </Link>
    ) : (
      <VolunteerCardInfoCompontent variant={variant} volunteer={volunteer} />
    )
  );
};

export default VolunteerCard;
