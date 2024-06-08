import { useContext, useEffect, useState } from "react";
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
import DeleteAppliedVolunteers from "./components/DeleteAppliedVolunteers";
import { RoleManagerContext } from "../../util/RoleManagerContext";
import EditActivity from "./components/EditActivity";

const ActivityDetailsSection: React.FC<{ id: string | undefined }> = ({
  id,
}) => {
  if (!id) {
    return null;
  }

  const roleContext = useContext(RoleManagerContext)

  const [showModal, setShowModal] = useState<boolean>(false);
  const [activity, setActivity] = useState<Activity | undefined>();

  useEffect(() => {
    const definedId = defineID(id);
    axios
      .get(`${apiUrl}/activities/${definedId}`)
      .then((res) => {
        const response = res.data;
        setActivity(response);
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
      >
        {roleContext && roleContext.role === "admin" && (
          <EditActivity activity={activity} update={setActivity} />
        )}
      </ItemDetailsComponent>
      <div className={styles.activityMembers}>
        <TitleWrapH2>
          <h2>Volunteer crew: who's in?</h2>
          <span></span>
        </TitleWrapH2>
        {roleContext && roleContext.role === "admin"
          ? activity?.volunteersForActivity?.map((volunteer) => (
              <VolunteerCard
                key={volunteer.id}
                volunteer={volunteer}
                variant="volunteerApply"
              >
                <DeleteAppliedVolunteers
                  activityId={id}
                  itemId={volunteer.id}
                  update={setActivity}
                />
              </VolunteerCard>
            ))
          : activity?.volunteersForActivity?.map((volunteer) => (
              <VolunteerCard
                key={volunteer.id}
                volunteer={volunteer}
                variant="volunteerApply"
              />
            ))}
      </div>
      <ModalComponent
        variant="applyForActivity"
        showModal={showModal}
        setShowModal={setShowModal}
        update={setActivity}
        itemId={id}
      />
    </div>
  );
};

export default ActivityDetailsSection;
