import React, { useEffect, useState } from "react";
import styles from "./NewActivityForm.module.css";
import { TitleWrapH2 } from "../../styles/styles";
import LocationInput from "../inputComponents/LocationInput";
import TextInputComponent from "../inputComponents/TextInputComponent";
import DateInput from "../inputComponents/DateInput";
import CategoryInput from "../inputComponents/CategoryInput/CategoryInput";
import ButtonComponent from "../button/ButtonComponent";
import axios from "axios";
import apiUrl from "../../util/config";

interface NewActivityFormProps<T> {
  update: React.Dispatch<React.SetStateAction<T>>;
}

const NewActivityForm: React.FC<NewActivityFormProps<Activity[]>> = ({update}) => {
  const [newActivity, setNewActivity] = useState({
    title: "",
    description: "",
    jobType: "",
    organisation: "",
    date: "",
    location: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setNewActivity({ ...newActivity, [name]: value });
  };

  const sendData = async () => {
    if (
      newActivity.title === "" ||
      newActivity.description === "" ||
      newActivity.jobType === "" ||
      newActivity.organisation === "" ||
      newActivity.date === "" ||
      newActivity.location === ""
    ) {
      console.log("Molimo popunite sva polja.");
      return;
    }
    
    console.log("added", newActivity);

    axios.post(`${apiUrl}/activities`, newActivity, {
      headers: {
        "content-type": "application/json"
      }
    }).then((res) => {
      update((prevState:any) => [...prevState, res.data])
    }).catch((err) => console.log(err))
  };

  useEffect(() => {
    console.log(newActivity);
  }, [newActivity]);

  return (
    <div className={styles.newActivity}>
      <div className={styles.formInfo}>
        <h6>Contribute to Your Community</h6>
        <TitleWrapH2>
          <h2>add activity</h2>
          <span></span>
        </TitleWrapH2>
        <p>
          Complete the form below to add a new volunteering activity. Your
          contribution will help create positive change in the community. Let's
          work together to make a difference!
        </p>
      </div>
      <div className={styles.form}>
        <TextInputComponent
          type="text"
          name="title"
          label="Title"
          multiline={false}
          onChange={handleInputChange}
        />
        <TextInputComponent
          type="text"
          name="description"
          label="Description"
          multiline={true}
          onChange={handleInputChange}
        />
        <TextInputComponent
          type="text"
          name="organisation"
          label="Organisation"
          multiline={false}
          onChange={handleInputChange}
        />
        <CategoryInput variant="input" onChange={handleInputChange} />
        <div className={styles.wrapper}>
          <DateInput onChange={handleInputChange} />
          <LocationInput onChange={handleInputChange} />
        </div>
        <ButtonComponent onClick={() => sendData()} type="primaryBtn">Share activity</ButtonComponent>
      </div>
    </div>
  );
};

export default NewActivityForm;
