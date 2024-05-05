import React from "react";
import DeleteComponent from "../../adminCrud/DeleteComponent";
import AcceptComponent from "../../adminCrud/AcceptComponent";
import axios from "axios";
import apiUrl from "../../../util/config";

interface AcceptOrganisationProps {
  data: Organisation;
  updatePending: React.Dispatch<React.SetStateAction<Organisation[]>>;
  update: React.Dispatch<React.SetStateAction<Organisation[]>>;
}

const AcceptOrganisation: React.FC<AcceptOrganisationProps> = ({
  data,
  updatePending,
  update,
}) => {
  const deleteOrganisation = () => {
    axios
      .delete(`${apiUrl}/pendingOrganisations/${data.id}`)
      .then(() => {
        console.log("obrisano");
        updatePending((prevOrganisations) =>
          prevOrganisations.filter(
            (pendingOrg: Organisation) => pendingOrg.id !== data.id
          )
        );
      })
      .catch((err) => console.log(err));
  };
  const acceptOrganisation = () => {
    axios
      .post(`${apiUrl}/organisations/`, data, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        update((prevState: any) => [...prevState, res.data]);
        console.log("accepted");
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    deleteOrganisation();
  };

  const handleAccept = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    acceptOrganisation()
    deleteOrganisation()
  };

  return (
    <div>
      <DeleteComponent onClick={handleDelete} />
      <AcceptComponent onClick={handleAccept} />
    </div>
  );
};

export default AcceptOrganisation;
