import React, { useState } from "react";
import ModalComponent from "../../modal/ModalComponent";
import EditComponent from "../../adminCrud/EditComponent";

interface EditActivityProps<T> {
  activity: Activity | undefined;
  update: React.Dispatch<React.SetStateAction<T>>;
}

const EditActivity: React.FC<EditActivityProps<Activity | undefined>> = ({
  activity,
  update,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setShowModal(true);
    console.log(activity);
  };

  return (
    <div>
      <EditComponent onClick={handleClick} />
      <ModalComponent
        variant="editActivity"
        showModal={showModal}
        setShowModal={setShowModal}
        update={update}
        itemId=""
        data={activity}
      />
    </div>
  );
};

export default EditActivity;
