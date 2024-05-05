import React from "react";
import styles from './modalStyles/ModalComponent.module.css';
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import NewActivityForm from "../addForms/NewActivityForm";
import ButtonComponent from "../button/ButtonComponent";
import NewVolunteerForm from "../addForms/NewVolunteerForm";
import ApplyForActivityForm from "../addForms/ApplyForActivityForm";
import NewOrganisationForm from '../addForms/NewOrganisationForm'
import useWindowSize from "../../util/useWindowSize";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

interface ModalComponentProps<T> {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  variant: "newActivity" | "newVolunteer" | "newOrganisation" | "applyForActivity" | "editActivity" | "editVolunteer";
  update: React.Dispatch<React.SetStateAction<T>>;
  itemId: string;
  data?: any;
}

const ModalComponent: React.FC<ModalComponentProps<any>> = ({
  showModal,
  setShowModal,
  variant,
  update,
  itemId,
  data,
}) => {

  const deviceType = useWindowSize()

  const variantComponents = {
    newActivity: NewActivityForm,
    newVolunteer: NewVolunteerForm,
    applyForActivity: ApplyForActivityForm,
    editActivity: NewActivityForm,
    editVolunteer: NewVolunteerForm,
    newOrganisation: NewOrganisationForm,
  }

  const VariantForm = variantComponents[variant]

  return showModal ? (
    <Backdrop onClick={() => setShowModal(false)}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.modalStyle} ${styles[deviceType]}`}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <VariantForm data={data} update={update} showModal={setShowModal} itemId={itemId} />
        <ButtonComponent
          type="secondaryBtn"
          onClick={() => setShowModal(false)}
        >
          Close
        </ButtonComponent>
      </motion.div>
    </Backdrop>
  ) : null;
};

export default ModalComponent;
