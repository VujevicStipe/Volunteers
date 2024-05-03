import { useParams } from "react-router-dom";
import VolunteerDetailsSection from "../components/_volunteerDetails-page/VolunteerDetailsSection";

const VolunteerDetailsPage = () => {
  const { id } = useParams();
  return <VolunteerDetailsSection id={id} />;
};

export default VolunteerDetailsPage;
