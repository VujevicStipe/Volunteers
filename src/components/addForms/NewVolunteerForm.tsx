import React, { useEffect, useState } from "react";
import styles from "./formStyles/AddFormStyles.module.css";
import FormInfo from "./components/FormInfo";
import TextInputComponent from "../inputComponents/components/TextInputComponent";
import CategoryInput from "../inputComponents/CategoryInput";
import LocationInput from "../inputComponents/LocationInput";
import WorkExpInput from "../inputComponents/WorkExpInput";
import ButtonComponent from "../button/ButtonComponent";
import apiUrl from "../../util/config";
import axios from "axios";
import SelectInputComponent from "../inputComponents/components/SelectInputComponent";
import { fetchUserImg } from "../../util/fetchUserImg";
import { validateForm } from "../../util/validateForm";

interface NewVolunteerFormProps<T> {
  update: React.Dispatch<React.SetStateAction<T>>;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewVolunteerForm: React.FC<NewVolunteerFormProps<Volunteer[]>> = ({
  update,
  showModal,
}) => {
  const [newVolunteer, setNewVolunteer] = useState({
    name: "",
    surname: "",
    description: "",
    contactNumber: "",
    jobType: "",
    location: "",
    workExp: "",
    gender: "",
    userImg: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setNewVolunteer({ ...newVolunteer, [name]: value });
  };

  const sendData = async () => {
    const { workExp, ...volunterData } = newVolunteer;

    if (!validateForm(volunterData)) {
      return;
    }
    console.log("added", newVolunteer);
    axios
      .post(`${apiUrl}/volunteers`, newVolunteer, {
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

  //getUserImg
  const fetchImg = async () => {
    newVolunteer.userImg = await fetchUserImg(newVolunteer.gender);
  };
  useEffect(() => {
    if (newVolunteer.gender !== "") {
      fetchImg();
    }
    console.log(newVolunteer.gender);
  }, [newVolunteer.gender]);
  // setImg(`https://randomuser.me/api/portraits/${gender}/32.jpg`)

  const title = "Add New Volunteer";
  const subtitle = "Expanding the Squad";
  const paragraph =
    "Complete the form below to add new volunteer for hire. Your details will help us ensure a smooth and enjoyable experience for all volunteers involved.";

  return (
    <div className={styles.container}>
      <FormInfo title={title} subtitle={subtitle} paragraph={paragraph} />
      <div className={styles.form}>
        <div className={styles.wrapper}>
          <TextInputComponent
            type="text"
            name="name"
            label="Name"
            multiline={false}
            onChange={handleInputChange}
          />
          <TextInputComponent
            type="text"
            name="surname"
            label="Surname"
            multiline={false}
            onChange={handleInputChange}
          />
        </div>
        <TextInputComponent
            type="text"
            name="description"
            label="Description"
            multiline={true}
            onChange={handleInputChange}
          />
        <div className={styles.wrapper}>
          <TextInputComponent
            type="number"
            name="contactNumber"
            label="Phone Number"
            multiline={false}
            onChange={handleInputChange}
          />
          <SelectInputComponent
            variant="gender"
            label="Gender"
            name="gender"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.wrapper}>
          <CategoryInput variant="input" onChange={handleInputChange} />
          <LocationInput onChange={handleInputChange} />
        </div>
        <div className={styles.wrapper}>
          <WorkExpInput onChange={handleInputChange} />
        </div>
        <ButtonComponent onClick={() => sendData()} type="primaryBtn">
          Volonteer!
        </ButtonComponent>
      </div>
    </div>
  );
};

export default NewVolunteerForm;
