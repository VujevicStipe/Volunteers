import { useEffect, useState } from "react";
import stlyes from "./ActivityDetailsSection.module.css";
import axios from "axios";
import apiUrl from "../../util/config";
import { TitleWrapH2 } from "../../styles/styles";
import ModalComponent from "../modal/ModalComponent";
import VolunteerCard from "../cards/volunteerCard/VolunteerCard";
import ItemDetailsComponent from "../itemDetailsComponent/ItemDetailsComponent";

const ActivityDetailsSection: React.FC<{ id: string | undefined }> = ({
  id,
}) => {

  const localStorageKey = `appliedVolunteersList_${id}`
  const initialData = JSON.parse(localStorage.getItem(localStorageKey) ?? '[]');

  const [activity, setActivity] = useState<Activity | undefined>();
  const [appliedVolunteer, setAppliedVolunteer] = useState<
    VolunteerForJob | undefined
  >();
  const [appliedVolunteersList, setAppliedVolunteersList] = useState<
    VolunteerForJob[]
  >(initialData);

  const [showModal, setShowModal] = useState<boolean>(false);

  const defineID = (id: string | undefined) => {
    return id ? id.replace(":", "") : console.log("can't define url");
  };
  useEffect(() => {
    axios
      .get(`${apiUrl}/activities`)
      .then((res) => {
        res.data.map(
          (item: Activity) =>
            item.id.toString() === defineID(id) && setActivity(item)
        );
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (appliedVolunteer) {
      setAppliedVolunteersList((prevVolunteers) => [
        ...prevVolunteers,
        appliedVolunteer,
      ]);
    }
  }, [appliedVolunteer]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(appliedVolunteersList))
  }, [appliedVolunteersList, localStorageKey])

  return (
    <div className={stlyes.activityDetails}>
      <ItemDetailsComponent data={activity} variant="activity" onClick={() => setShowModal(!showModal)} />
      <div className={stlyes.activityMembers}>
        <TitleWrapH2>
          <h2>Volunteer crew: who's in?</h2>
        </TitleWrapH2>
        {appliedVolunteersList.map((volunteer) => (
          <VolunteerCard key={volunteer.name} volunteer={volunteer} variant="volunteerApply" />
        ))}
      </div>
      <ModalComponent
        variant="applyForActivity"
        showModal={showModal}
        setShowModal={setShowModal}
        update={setAppliedVolunteer}
      />
    </div>
  );
};

export default ActivityDetailsSection;
