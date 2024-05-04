import { useEffect, useState } from "react";
import styles from "./ActivityDetailsSection.module.css";
import axios from "axios";
import apiUrl from "../../util/config";
import { Link } from "react-router-dom";
import { NavigateBackStyle, TitleWrapH2 } from "../../styles/styles";
import { IoIosArrowRoundBack } from "react-icons/io";
import ModalComponent from "../modal/ModalComponent";
import VolunteerCard from "../cards/volunteerCard/VolunteerCard";
import ItemDetailsComponent from "../itemDetailsComponent/ItemDetailsComponent";
import { defineID } from "../../util/defineID";

const ActivityDetailsSection: React.FC<{ id: string | undefined }> = ({
  id,
}) => {
  if (!id) {
    return null;
  }

  const [showModal, setShowModal] = useState<boolean>(false);
  const [activity, setActivity] = useState<Activity>();
  const [volunteers, setVolunteers] = useState<VolunteerForJob[]>([]);

  useEffect(() => {
    const definedId = defineID(id);
    axios
      .get(`${apiUrl}/activities/${definedId}`)
      .then((res) => {
        const response = res.data;
        setActivity(response);
        setVolunteers(response.volunteersForActivity);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={`${styles.activityDetails}`}>
      <Link to={`/activities`}>
        <NavigateBackStyle>
          <IoIosArrowRoundBack />
          <h6>back to Activities</h6>
        </NavigateBackStyle>
      </Link>
      <ItemDetailsComponent
        data={activity}
        variant="activity"
        onClick={() => setShowModal(!showModal)}
      />
      <div className={styles.activityMembers}>
        <TitleWrapH2>
          <h2>Volunteer crew: who's in?</h2>
          <span></span>
        </TitleWrapH2>
        {volunteers?.map((volunteer) => (
          <VolunteerCard
            key={`${volunteer.name}_${volunteer.surname}`}
            volunteer={volunteer}
            variant="volunteerApply"
          />
        ))}
      </div>
      {typeof id !== undefined && (
        <ModalComponent
          variant="applyForActivity"
          showModal={showModal}
          setShowModal={setShowModal}
          update={setVolunteers}
          itemId={id}
        />
      )}
    </div>
  );
};

export default ActivityDetailsSection;
