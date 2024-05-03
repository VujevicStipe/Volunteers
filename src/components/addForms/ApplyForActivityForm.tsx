import React, { useEffect, useState } from "react";
import styles from "./formStyles/AddFormStyles.module.css";
import FormInfo from "./components/FormInfo";
import TextInputComponent from "../inputComponents/components/TextInputComponent";
import SelectInputComponent from "../inputComponents/components/SelectInputComponent";
import ButtonComponent from "../button/ButtonComponent";
import { fetchUserImg } from "../../util/fetchUserImg";
import { validateForm } from "../../util/validateForm";

interface ApplyForActivityFormProps<T> {
  update: React.Dispatch<React.SetStateAction<T>>;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ApplyForActivityForm: React.FC<ApplyForActivityFormProps<any>> = ({
  update,
  showModal,
}) => {
  const [applyVolunteer, setApplyVolunteer] = useState({
    name: "",
    surname: "",
    gender: "",
    userImg: "",
  });

  const handleInputChange = (name: string, value: string) => {
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

  const sendData = () => {
    if (!validateForm(applyVolunteer)) {
      return;
    }
    update(applyVolunteer);
    showModal(false);
  };

  const title = "Apply for activity";
  const subtitle = "Join the Action";
  const paragraph =
    "Complete the form below to apply for participation in this activity. Your details will help us ensure a smooth and enjoyable experience for all volunteers involved.";

  return (
    <div className={styles.container}>
      <FormInfo title={title} subtitle={subtitle} paragraph={paragraph} />
      <div className={styles.form}>
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
