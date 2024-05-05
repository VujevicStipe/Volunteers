import React from "react";
import styles from './styles/adminCrud.module.css'
import { MdVerified } from "react-icons/md";

interface AcceptComponentProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const AcceptComponent: React.FC<AcceptComponentProps> = ({ onClick }) => {
  return (
    <div className={styles.accept} onClick={onClick}>
      <MdVerified />
    </div>
  );
};

export default AcceptComponent;
