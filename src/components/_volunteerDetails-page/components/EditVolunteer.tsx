import React, { useState } from "react";
import EditComponent from "../../adminCrud/EditComponent";
import ModalComponent from "../../modal/ModalComponent";

interface EditVolunteerProps<T> {
  volunteer: Volunteer | undefined;
  update: React.Dispatch<React.SetStateAction<T>>;
}

const EditVolunteer: React.FC<EditVolunteerProps<Volunteer | undefined>> = ({
  volunteer,
  update,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setShowModal(true);
    console.log(volunteer);
  };
  return (
    <div>
      <EditComponent onClick={handleClick} />
      <ModalComponent
        variant="editVolunteer"
        showModal={showModal}
        setShowModal={setShowModal}
        update={update}
        itemId=""
        data={volunteer}
      />
    </div>
  );
};

export default EditVolunteer;
