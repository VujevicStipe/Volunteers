import { useParams } from "react-router-dom";
import ActivityDetailsSection from "../components/_activityDetails-page/ActivityDetailsSection";

const ActivityDetailsPage = () => {
  const { id } = useParams();

  return <ActivityDetailsSection id={id} />
};

export default ActivityDetailsPage;
