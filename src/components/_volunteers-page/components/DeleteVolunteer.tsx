import React, { SetStateAction } from "react";
import apiUrl from "../../../util/config";
import axios from "axios";
import DeleteComponent from "../../adminCrud/DeleteComponent";

interface DeleteVolunteerProps<T> {
  itemId: string;
  update: React.Dispatch<SetStateAction<T>>;
}

const DeleteVolunteer: React.FC<DeleteVolunteerProps<Volunteer[]>> = ({
  itemId,
  update,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    console.log(itemId);
    axios
      .delete(`${apiUrl}/volunteers/${itemId}`)
      .then(() => {
        console.log("obrisano");
        update((prevVolunteers) =>
          prevVolunteers.filter(
            (volunteer: Volunteer) => volunteer.id !== itemId
          )
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <DeleteComponent onClick={handleClick} />
  );
};

export default DeleteVolunteer;
