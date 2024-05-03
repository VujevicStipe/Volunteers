import React from 'react'
import styles from '../VolunteerCard.module.css'

interface VolunteerCardInfoCompontentProps {
    variant: "volunteer" | "volunteerApply";
    volunteer: Volunteer | VolunteerForJob;
} 

const VolunteerCardInfoCompontent: React.FC<VolunteerCardInfoCompontentProps> = ({
    variant,
    volunteer,
}) => {
  return (
    <div
          className={`${styles.volunteerCard} ${
            variant === "volunteer" ? styles.col : styles.row
          }`}
        >
          <img src={volunteer.userImg} alt="user1" />
          <h4>
            {volunteer.name} {volunteer.surname}
          </h4>
        </div>
  )
}

export default VolunteerCardInfoCompontent