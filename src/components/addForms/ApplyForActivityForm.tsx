import React, { useEffect, useState } from "react";
import styles from "./formStyles/AddFormStyles.module.css";
import FormInfo from "./components/FormInfo";
import TextInputComponent from "../inputComponents/components/TextInputComponent";
import SelectInputComponent from "../inputComponents/components/SelectInputComponent";
import ButtonComponent from "../button/ButtonComponent";
import { fetchUserImg } from "../../util/fetchUserImg";
import { validateForm } from "../../util/validateForm";
import useWindowSize from "../../util/useWindowSize";
import axios from "axios";
import { generateRandomId } from "../../util/defineID";
import apiUrl from "../../util/config";

interface ApplyForActivityFormProps<T> {
  update: React.Dispatch<React.SetStateAction<T>>;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
  itemId: string;
  data?: any;
}

const ApplyForActivityForm: React.FC<ApplyForActivityFormProps<any>> = ({
  update,
  showModal,
  itemId,
}) => {
  if (!itemId) {
    return null;
  }

  const deviceType = useWindowSize();

  useEffect(() => {
    console.log(defineID(itemId));
  }, []);

  const [applyVolunteer, setApplyVolunteer] = useState({
    name: "",
    surname: "",
    gender: "",
    userImg: "",
  });

  const handleInputChange = (name: string, value: string) => {
    if (name === "name" || name === "surname") {
      if (value !== null && typeof value === "string") {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
    }
    setApplyVolunteer({ ...applyVolunteer, [name]: value });
  };

  const fetchImg = async () => {
    applyVolunteer.userImg = await fetchUserImg(applyVolunteer.gender);
  };
  useEffect(() => {
    if (applyVolunteer.gender !== "") {
      fetchImg();
    }
    console.log(applyVolunteer.gender);
  }, [applyVolunteer.gender]);

  const defineID = (id: string) => {
    return id
      ? id.replace(":", "")
      : (console.log("can't define url"), undefined);
  };

  const addVolunteerToActivity = async () => {
    const definedId = defineID(itemId);
    try {
      const response = await axios.get(`${apiUrl}/activities/${definedId}`);
      const activity = response.data;

      const id = generateRandomId();
      const { ...volunteerData } = applyVolunteer;
      const updatedVolunteer = { id, ...volunteerData };

      activity.volunteersForActivity.push(updatedVolunteer);

      await axios.put(`${apiUrl}/activities/${definedId}`, activity);

      update(activity);
      console.log("Volunteer added to activity successfully:", applyVolunteer);
    } catch (error) {
      console.error("Error adding volunteer to activity:", error);
    }
  };

  const sendData = () => {
    if (!validateForm(applyVolunteer)) {
      return;
    }
    addVolunteerToActivity();
    showModal(false);
  };

  const title = "Apply for activity";
  const subtitle = "Join the Action";
  const paragraph =
    "Complete the form below to apply for participation in this activity. Your details will help us ensure a smooth and enjoyable experience for all volunteers involved.";

  return (
    <div className={`${styles.container} ${styles[deviceType]}`}>
      <FormInfo title={title} subtitle={subtitle} paragraph={paragraph} />
      <div className={styles.form}>
        <TextInputComponent
          type="text"
          name="name"
          label="Name"
          value={applyVolunteer.name}
          multiline={false}
          onChange={handleInputChange}
        />
        <TextInputComponent
          type="text"
          name="surname"
          label="Surname"
          value={applyVolunteer.surname}
          multiline={false}
          onChange={handleInputChange}
        />
        <SelectInputComponent
          variant="gender"
          label="Gender"
          name="gender"
          onChange={handleInputChange}
        />
        <ButtonComponent onClick={() => sendData()} type="primaryBtn">
          Apply
        </ButtonComponent>
      </div>
    </div>
  );
};

export default ApplyForActivityForm;
