import { useState } from "react";
import ButtonComponent from "../../button/ButtonComponent";
import RatingInputComponent from "../../inputComponents/components/RatingInputComponent";
import TextInputComponent from "../../inputComponents/components/TextInputComponent";
import { validateForm } from "../../../util/validateForm";

interface RatingFormFormComponentProps {
  update: (newRating: Rating | undefined) => void;
}

const RatingFormComponent: React.FC<RatingFormFormComponentProps> = ({
  update,
}) => {
  const [rating, setRating] = useState({
    grade: 0,
    name: "",
    surname:"",
    comment: "",
  });

  const handleChange = (name: string, value: string | number | null) => {
    setRating({ ...rating, [name]: value });
  };
  const sendData = () => {
    if (!validateForm(rating)) {
      return;
    }
    update(rating);
    setRating({ grade: 0, name: "", surname:"", comment: ""});
  };

  return (
    <div>
      <RatingInputComponent
        readOnly={false}
        value={rating.grade}
        onChange={handleChange}
      />
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
      <ButtonComponent type="primaryBtn" onClick={sendData}>
        Rate
      </ButtonComponent>
    </div>
  );
};

export default RatingFormComponent;
