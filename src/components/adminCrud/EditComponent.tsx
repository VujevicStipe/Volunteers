import React from 'react'
import styles from './styles/adminCrud.module.css'
import { FaEdit } from "react-icons/fa";

interface EditComponentProps {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

const EditComponent: React.FC<EditComponentProps> = ({onClick}) => {
  return (
    <div className={styles.edit} onClick={onClick}>
        <FaEdit />
    </div>
  )
}

export default EditComponent