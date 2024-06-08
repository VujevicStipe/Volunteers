import axios from "axios";
import React from "react";
import apiUrl from "../../../util/config";
import { defineID } from "../../../util/defineID";
import DeleteComponent from "../../adminCrud/DeleteComponent";

interface DeleteRatingProps<T> {
  volunteerId: string;
  itemId: string;
  update: React.Dispatch<React.SetStateAction<T>>;
}

const DeleteRating: React.FC<DeleteRatingProps<Volunteer | undefined>> = ({
  volunteerId,
  itemId,
  update,
}) => {
  if (!volunteerId || !itemId) {
    return null;
  }

  const definedID = defineID(volunteerId);

  const handleClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    console.log(itemId);
    try {
      const response = await axios.get(`${apiUrl}/volunteers/${definedID}`);
      const volunteer = response.data;

      const updatedRatings = volunteer.volunteerRating.filter(
        (rating: Rating) => rating.id !== itemId
      );

      volunteer.volunteerRating = updatedRatings;

      await axios.put(`${apiUrl}/volunteers/${definedID}`, volunteer);

      console.log("deleted", itemId);
      update(volunteer);
    } catch (error) {
      console.error("Error fetching or updating activity:", error);
    }
  };

  return <DeleteComponent onClick={handleClick} />;
};

export default DeleteRating;
