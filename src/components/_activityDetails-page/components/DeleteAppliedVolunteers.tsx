import React from "react";
import apiUrl from "../../../util/config";
import axios from "axios";
import { defineID } from "../../../util/defineID";
import DeleteComponent from "../../adminCrud/DeleteComponent";

interface DeleteAppliedVolunteersProps<T> {
  activityId: string;
  itemId: string;
  update: React.Dispatch<React.SetStateAction<T>>;
}

const DeleteAppliedVolunteers: React.FC<
  DeleteAppliedVolunteersProps<Activity | undefined>
> = ({ activityId, itemId, update }) => {
  if (!activityId || !itemId) {
    return null;
  }

  const definedId = defineID(activityId);

  const handleClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    console.log(itemId);
    try {
      const response = await axios.get(`${apiUrl}/activities/${definedId}`);
      const activity = response.data;

      const updatedVolunteers = activity.volunteersForActivity.filter(
        (volunteer: VolunteerForJob) => volunteer.id !== itemId
      );

      activity.volunteersForActivity = updatedVolunteers;
      await axios.put(`${apiUrl}/activities/${definedId}`, activity);

      console.log("deleted", itemId);
      update(activity);
    } catch (error) {
      console.error("Error fetching or updating activity:", error);
    }
  };

  return <DeleteComponent onClick={handleClick} />;
};

export default DeleteAppliedVolunteers;
