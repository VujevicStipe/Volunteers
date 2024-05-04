import { SetStateAction, useState } from "react";
import ButtonComponent from "../../button/ButtonComponent";
import RatingInputComponent from "../../inputComponents/components/RatingInputComponent";
import TextInputComponent from "../../inputComponents/components/TextInputComponent";
import { validateForm } from "../../../util/validateForm";
import axios from "axios";

interface RatingFormFormComponentProps<T> {
  itemId: string;
  update: React.Dispatch<SetStateAction<T>>;
}

const RatingFormComponent: React.FC<RatingFormFormComponentProps<any>> = ({
  itemId,
  update,
}) => {
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

  const defineID = (id: string) => {
    return id
      ? id.replace(":", "")
      : (console.log("can't define url"), undefined);
  };

  const addVolunteerToActivity = async () => {
    const definedId = defineID(itemId);
    try {
      const response = await axios.get(
        `http://localhost:3001/volunteers/${definedId}`
      );
      const volunteer = response.data;
      volunteer.volunteerRating.push(rating);

      await axios.put(
        `http://localhost:3001/volunteers/${definedId}`,
        volunteer
      );

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
    update((prevState: Rating[]) => [...prevState, rating]);
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
