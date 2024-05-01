import React from "react";
import styles from './ModalComponent.module.css'
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import NewActivityForm from "../addForms/NewActivityForm";
import ButtonComponent from "../button/ButtonComponent";

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
  variant: "newActivity" | "newVolunteer";
  update: React.Dispatch<React.SetStateAction<T>>;
}

const ModalComponent: React.FC<ModalComponentProps<any>> = ({
  showModal,
  setShowModal,
  variant,
  update,
}) => {
  return showModal ? (
    <Backdrop onClick={() => setShowModal(false)}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles.modalStyle}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <NewActivityForm update={update} />
        <ButtonComponent type="secondaryBtn" onClick={() => setShowModal(false)}>Close</ButtonComponent>
      </motion.div>
    </Backdrop>
  ) : null;
};

export default ModalComponent;
