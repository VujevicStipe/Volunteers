import React from 'react'
import styles from './styles/adminCrud.module.css'
import { FaTrash } from "react-icons/fa";

interface DeleteComponentProps {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

const DeleteComponent: React.FC<DeleteComponentProps> = ({ onClick}) => {
  return (
    <div className={styles.delete} onClick={onClick}>
        <FaTrash />
    </div>
  )
}

export default DeleteComponent