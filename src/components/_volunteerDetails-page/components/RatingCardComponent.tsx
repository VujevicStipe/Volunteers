import React, { ReactNode } from "react";
import styles from "../styles/RatingCardComponent.module.css";
import RatingInputComponent from "../../inputComponents/components/RatingInputComponent";

interface RatingCardComponentProps {
  data: Rating;
  children?: ReactNode;
}

const RatingCardComponent: React.FC<RatingCardComponentProps> = ({
  data,
  children,
}) => {
  return (
    <div className={styles.ratingCard}>
      <h6>
        {data.name} {data.surname}
      </h6>
      {data && (
        <RatingInputComponent
          sizeLg={false}
          readOnly={true}
          value={data.grade}
        />
      )}
      <p>{data?.comment}</p>
      {children}
    </div>
  );
};

export default RatingCardComponent;
