import { SetStateAction, useState } from "react";
import ButtonComponent from "../../button/ButtonComponent";
import RatingInputComponent from "../../inputComponents/components/RatingInputComponent";
import TextInputComponent from "../../inputComponents/components/TextInputComponent";
import { validateForm } from "../../../util/validateForm";
import axios from "axios";
import { defineID, generateRandomId } from "../../../util/defineID";
import apiUrl from "../../../util/config";

interface RatingFormFormComponentProps<T> {
  itemId: string;
  update: React.Dispatch<SetStateAction<T>>;
}

const RatingFormComponent: React.FC<
  RatingFormFormComponentProps<Volunteer | undefined>
> = ({ itemId, update }) => {
  const [rating, setRating] = useState({
    grade: 0,
    name: "",
    surname: "",
    comment: "",
  });

  const handleChange = (name: string, value: string | number | null) => {
    if (name === "name" || name === "surname" || name === "comment") {
      if (value !== null && typeof value === "string") {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
    }
    setRating({ ...rating, [name]: value });
  };

  const addVolunteerToActivity = async () => {
    const definedId = defineID(itemId);
    try {
      const response = await axios.get(`${apiUrl}/volunteers/${definedId}`);
      const volunteer = response.data;

      const id = generateRandomId();
      const { ...ratingData } = rating;
      const updatedRating = { id, ...ratingData };

      volunteer.volunteerRating.push(updatedRating);

      await axios.put(`${apiUrl}/volunteers/${definedId}`, volunteer);

      update(volunteer);
      console.log("Rating added to volunteer successfully:", volunteer);
    } catch (error) {
      console.error("Error adding rating to volunteer:", error);
    }
  };

  const sendData = () => {
    if (!validateForm(rating)) {
      return;
    }
    addVolunteerToActivity();
    setRating({ grade: 0, name: "", surname: "", comment: "" });
  };

  return (
    <div>
      <TextInputComponent
        type="text"
        label="Name"
        name="name"
        value={rating.name}
        multiline={false}
        onChange={handleChange}
      />
      <TextInputComponent
        type="text"
        label="Surname"
        name="surname"
        value={rating.surname}
        multiline={false}
        onChange={handleChange}
      />
      <TextInputComponent
        type="text"
        label="Comment"
        name="comment"
        multiline={true}
        value={rating.comment}
        onChange={handleChange}
      />
      <h6>Grade</h6>
      <RatingInputComponent
        readOnly={false}
        sizeLg={true}
        value={rating.grade}
        onChange={handleChange}
      />
      <ButtonComponent type="primaryBtn" onClick={sendData}>
        send feedback
      </ButtonComponent>
    </div>
  );
};

export default RatingFormComponent;
