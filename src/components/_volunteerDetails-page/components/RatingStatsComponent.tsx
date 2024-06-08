import React, { useEffect, useState } from "react";
import styles from "../styles/RatingStatsComponent.module.css";
import RatingInputComponent from "../../inputComponents/components/RatingInputComponent";

interface RatingStatsComponentProps {
  data: Rating[];
}

const RatingStatsComponent: React.FC<RatingStatsComponentProps> = ({
  data,
}) => {
  const [averageGrade, setAverageGrade] = useState<number>(0.0);

  useEffect(() => {
    if (data.length === 0) {
      setAverageGrade(0.0);
      return;
    }
    console.log(data);
    const totalGrade = data.reduce((accumulator, currentRating) => {
      return accumulator + currentRating.grade;
    }, 0);
    const averageGrade = (totalGrade / data.length).toFixed(1);
    setAverageGrade(parseFloat(averageGrade));
  }, [data]);

  useEffect(() => {
    console.log(averageGrade);
  }, [averageGrade]);

  return (
    <div className={styles.ratingStats}>
      <h2>{averageGrade}</h2>
      <div className={styles.wrapper}>
        <RatingInputComponent
          sizeLg={false}
          readOnly={true}
          value={averageGrade}
        />
        <h6>Based on {data.length} ratings</h6>
      </div>
    </div>
  );
};

export default RatingStatsComponent;
