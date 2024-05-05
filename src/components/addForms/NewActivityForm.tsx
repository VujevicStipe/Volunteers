import React, { useEffect, useState } from "react";
import styles from "./formStyles/AddFormStyles.module.css";
import LocationInput from "../inputComponents/LocationInput";
import TextInputComponent from "../inputComponents/components/TextInputComponent";
import DateInput from "../inputComponents/DateInput";
import CategoryInput from "../inputComponents/CategoryInput";
import ButtonComponent from "../button/ButtonComponent";
import axios from "axios";
import apiUrl from "../../util/config";
import FormInfo from "./components/FormInfo";
import { validateForm } from "../../util/validateForm";
import useWindowSize from "../../util/useWindowSize";

import teachingAssistent from "../../../public/assets/teaching-assistant.jpg";
import eventCord from "../../../public/assets/event-cordinator.jpg";
import fundraiser from "../../../public/assets/fundraising.jpg";
import animalCaretaker from "../../../public/assets/activity-img.png";
import outreachOrg from "../../../public/assets/community-outreach.jpg";
import youthMentor from "../../../public/assets/youth-mentor.jpg";
import mentalHealth from "../../../public/assets/mental-health-advocate.jpg";

interface NewActivityFormProps<T> {
  update: React.Dispatch<React.SetStateAction<T>>;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
  itemId?: string;
  data?: any;
}

const NewActivityForm: React.FC<NewActivityFormProps<Activity[]>> = ({
  update,
  showModal,
  data,
}) => {
  const deviceType = useWindowSize();
  const isData = !!data && Object.keys(data).length > 0;

  const jobTypeImages: Record<string, string> = {
    "Teaching Assistant": teachingAssistent,
    "Event Coordinator": eventCord,
    Fundraiser: fundraiser,
    "Animal Caretaker": animalCaretaker,
    "Community Outreach Organizer": outreachOrg,
    "Youth Mentor": youthMentor,
    "Mental Health Advocate": mentalHealth,
  };

  const [newActivity, setNewActivity] = useState({
    title: isData ? data.title : "",
    description: isData ? data.description : "",
    jobType: isData ? data.jobType : "",
    organisation: isData ? data.organisation : "",
    date: isData ? data.date : "",
    location: isData ? data.location : "",
    image: isData ? jobTypeImages[data.jobType] : "",
    volunteersForActivity: isData ? data.volunteersForActivity : [],
  });

  const handleInputChange = (name: string, value: string) => {
    if (name === "title" || name === "description" || name === "organisation") {
      if (value !== null && typeof value === "string") {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
    } else if (name === "jobType") {
      // Ovdje provjeravamo promjenu jobType-a i dodjeljujemo odgovarajuću sliku
      const imageForJobType = jobTypeImages[value];
      setNewActivity({ ...newActivity, [name]: value, image: imageForJobType });
      return; // Prekidamo funkciju kako ne bi došlo do dodatnog poziva setNewActivity ispod
    }
    setNewActivity({ ...newActivity, [name]: value });
  };

  const sendData = async () => {
    if (!validateForm(newActivity)) {
      return;
    }
    if (isData) {
      axios
        .put(`${apiUrl}/activities/${data?.id}`, newActivity, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then((res) => {
          update(res.data);
          console.log("activity updated");
          showModal(false);
        });
    } else {
      axios
        .post(`${apiUrl}/activities`, newActivity, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then((res) => {
          console.log("added", newActivity);
          update((prevState: any) => [...prevState, res.data]);
          showModal(false);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    console.log(newActivity);
  }, [newActivity]);

  const title = isData ? "Make changes" : "Contribute to Your Community";
  const subtitle = isData ? "edit activity" : "add activity";
  const paragraph = isData
    ? `Change the form below to edit ${data?.title} activity.`
    : "Complete the form below to add a new volunteering activity. Your contribution will help create positive change in the community. Let's work together to make a difference!";

  return (
    <div className={`${styles.container} ${styles[deviceType]}`}>
      <FormInfo title={title} subtitle={subtitle} paragraph={paragraph} />
      <div className={styles.form}>
        <TextInputComponent
          type="text"
          name="title"
          value={newActivity.title}
          label="Title"
          multiline={false}
          onChange={handleInputChange}
        />
        <TextInputComponent
          type="text"
          name="description"
          value={newActivity.description}
          label="Description"
          multiline={true}
          onChange={handleInputChange}
        />
        <TextInputComponent
          type="text"
          name="organisation"
          value={newActivity.organisation}
          label="Organisation"
          multiline={false}
          onChange={handleInputChange}
        />
        {!isData && (
          <CategoryInput variant="input" onChange={handleInputChange} />
        )}
        {!isData && (
          <div className={styles.wrapper}>
            <DateInput onChange={handleInputChange} />
            <LocationInput onChange={handleInputChange} />
          </div>
        )}
        <ButtonComponent onClick={() => sendData()} type="primaryBtn">
          {isData ? "Change" : "Share activity!"}
        </ButtonComponent>
      </div>
    </div>
  );
};

export default NewActivityForm;
