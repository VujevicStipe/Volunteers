import axios from "axios";
import React, { SetStateAction } from "react";
import apiUrl from "../../../util/config";
import DeleteComponent from "../../adminCrud/DeleteComponent";

interface DeleteActivityProps<T> {
  itemId: string;
  update: React.Dispatch<SetStateAction<T>>;
}

const DeleteActivity: React.FC<DeleteActivityProps<Activity[]>> = ({
  itemId,
  update,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    console.log(itemId);
    axios.delete(`${apiUrl}/activities/${itemId}`).then(() => {
      console.log("obrisano");
      update((prevActivities) =>
        prevActivities.filter((activity: Activity) => activity.id !== itemId)
      );
    });
  };

  return (
    <DeleteComponent onClick={handleClick} />
  );
};

export default DeleteActivity;
