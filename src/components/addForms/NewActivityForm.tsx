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

interface NewActivityFormProps<T> {
  update: React.Dispatch<React.SetStateAction<T>>;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
  itemId?: string;
}

const NewActivityForm: React.FC<NewActivityFormProps<Activity[]>> = ({
  update,
  showModal,
}) => {
  const deviceType = useWindowSize();

  const [newActivity, setNewActivity] = useState({
    title: "",
    description: "",
    jobType: "",
    organisation: "",
    date: "",
    location: "",
    volunteersForActivity: [],
  });

  const handleInputChange = (name: string, value: string) => {
    if (name === "title" || name === "description" || name === "organisation") {
      if (value !== null && typeof value === "string") {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
    }
    setNewActivity({ ...newActivity, [name]: value });
  };

  const sendData = async () => {
    if (!validateForm(newActivity)) {
      return;
    }
    console.log("added", newActivity);
    axios
      .post(`${apiUrl}/activities`, newActivity, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        update((prevState: any) => [...prevState, res.data]);
        showModal(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(newActivity);
  }, [newActivity]);

  const title = "Contribute to Your Community";
  const subtitle = "add activity";
  const paragraph = `Complete the form below to add a new volunteering activity. Your 
  contribution will help create positive change in the community. Let's 
  work together to make a difference!`;

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
        <CategoryInput variant="input" onChange={handleInputChange} />
        <div className={styles.wrapper}>
          <DateInput onChange={handleInputChange} />
          <LocationInput onChange={handleInputChange} />
        </div>
        <ButtonComponent onClick={() => sendData()} type="primaryBtn">
          Share activity
        </ButtonComponent>
      </div>
    </div>
  );
};

export default NewActivityForm;
