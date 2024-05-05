import { Link } from "react-router-dom";
import VolunteerCardInfoCompontent from "./components/VolunteerCardInfoCompontent";
import { ReactNode } from "react";

interface VolunteerCardProps {
  volunteer: Volunteer | VolunteerForJob;
  variant: "volunteer" | "volunteerApply";
  children?: ReactNode;
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({
  volunteer,
  variant,
  children,
}) => {
  return variant === "volunteer" && "id" in volunteer ? (
    <Link
      to={`/volunteers/details/${(volunteer as Volunteer).id}`}
      style={{ zIndex: "1" }}
    >
      <VolunteerCardInfoCompontent variant={variant} volunteer={volunteer}>
        {children}
      </VolunteerCardInfoCompontent>
    </Link>
  ) : (
    <VolunteerCardInfoCompontent variant={variant} volunteer={volunteer}>
      {children}
    </VolunteerCardInfoCompontent>
  );
};

export default VolunteerCard;
