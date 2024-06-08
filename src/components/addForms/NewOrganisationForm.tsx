import React, { useEffect, useState } from "react";
import useWindowSize from "../../util/useWindowSize";
import styles from "./formStyles/AddFormStyles.module.css";
import FormInfo from "./components/FormInfo";
import TextInputComponent from "../inputComponents/components/TextInputComponent";
import LocationInput from "../inputComponents/LocationInput";
import CategoryInput from "../inputComponents/CategoryInput";
import ButtonComponent from "../button/ButtonComponent";
import axios from "axios";
import apiUrl from "../../util/config";
import { validateForm } from "../../util/validateForm";

interface NewOrganisationFormProps<T> {
  update: React.Dispatch<React.SetStateAction<T>>;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
  itemId?: string;
  data?: any;
}

const NewOrganisationForm: React.FC<
  NewOrganisationFormProps<Organisation[]>
> = ({ update, showModal, data }) => {
  const deviceType = useWindowSize();
  const isData = !!data && Object.keys(data).length > 0;

  const [newOrganisation, setNewOrganisation] = useState({
    organisationName: isData ? data?.organisationName : "",
    adress: isData ? data?.adress : "",
    location: isData ? data?.city : "",
    jobType: isData ? data?.jobType : "",
  });

  const handleInputChange = (name: string, value: string) => {
    if (name === "organisationName" || name === "adress") {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
    setNewOrganisation({ ...newOrganisation, [name]: value });
  };

  useEffect(() => {
    console.log(newOrganisation);
  }, [newOrganisation]);

  const sendData = async () => {
    if (!validateForm(newOrganisation)) {
      return;
    }

    if (isData) {
      console.log(data?.id);
      axios
        .put(`${apiUrl}/pendingOrganisations/${data.id}`, newOrganisation, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then((res) => {
          update(res.data);
          console.log("volunteer updated");
          showModal(false);
        });
    } else {
      axios
        .post(`${apiUrl}/pendingOrganisations`, newOrganisation, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then((res) => {
          update((prevState: any) => [...prevState, res.data]);
          showModal(false);
        })
        .catch((err) => console.log(err));
    }
  };

  const title = "Add New Organization";
  const subtitle = isData ? "Edit Organisation" : "Creating Positive Change";
  const paragraph = isData
    ? "Change the form below to edit organisation."
    : "Complete the form below to add new organisation. Your details will help us ensure a smooth and enjoyable experience for everyone.";

  return (
    <div className={`${styles.container} ${styles[deviceType]}`}>
      <FormInfo title={title} subtitle={subtitle} paragraph={paragraph} />
      <div className={styles.form}>
        <TextInputComponent
          type="text"
          name="organisationName"
          value={newOrganisation.organisationName}
          label="Organisation Name"
          multiline={false}
          onChange={handleInputChange}
        />
        <TextInputComponent
          type="text"
          name="adress"
          value={newOrganisation.adress}
          label="Adress"
          multiline={false}
          onChange={handleInputChange}
        />
        <LocationInput onChange={handleInputChange} />
        <CategoryInput variant="input" onChange={handleInputChange} />
        <ButtonComponent onClick={() => sendData()} type="primaryBtn">
          {isData ? "Change" : "Volunteer!"}
        </ButtonComponent>
      </div>
    </div>
  );
};

export default NewOrganisationForm;
