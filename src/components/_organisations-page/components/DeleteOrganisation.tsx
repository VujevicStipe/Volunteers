import axios from "axios";
import React, { SetStateAction } from "react";
import apiUrl from "../../../util/config";
import DeleteComponent from "../../adminCrud/DeleteComponent";

interface DeleteOrganisationProps<T> {
  itemId: string;
  update: React.Dispatch<SetStateAction<T>>;
}

const DeleteOrganisation: React.FC<DeleteOrganisationProps<Organisation[]>> = ({
  itemId,
  update,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    console.log(itemId);
    axios.delete(`${apiUrl}/organisations/${itemId}`).then(() => {
      console.log("obrisano");
      update((prevActivities) =>
        prevActivities.filter(
          (organisation: Organisation) => organisation.id !== itemId
        )
      );
    });
  };

  return <DeleteComponent onClick={handleClick} />;
};

export default DeleteOrganisation;
