import axios from "axios";
import styles from "./VolunteerDetailsSection.module.css";
import React, { useEffect, useState } from "react";
import apiUrl from "../../util/config";
import ItemDetailsComponent from "../itemDetailsComponent/ItemDetailsComponent";
import { TitleWrapH2 } from "../../styles/styles";
import RatingFormComponent from "./components/RatingFormComponent";
import RatingCardComponent from "./components/RatingCardComponent";

const VolunteerDetailsSection: React.FC<{ id: string | undefined }> = ({
  id,
}) => {
  const [volunteer, setVolunteer] = useState<Volunteer>();
  const [rating, setRating] = useState<Rating>();
  const [ratings, setRatings] = useState<Rating[]>([]);

  const defineID = (id: string | undefined) => {
    return id ? id.replace(":", "") : console.log("can't define url");
  };
  useEffect(() => {
    axios
      .get(`${apiUrl}/volunteers`)
      .then((res) => {
        res.data.map(
          (item: Volunteer) =>
            item.id.toString() === defineID(id) && setVolunteer(item)
        );
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (rating) {
      setRatings((prevRatings) => [...prevRatings, rating]);
    }
  }, [rating]);

  useEffect(() => {
    console.log(ratings);
  }, [ratings]);

  return (
    <div className={styles.volunteerDetails}>
      <ItemDetailsComponent data={volunteer} variant="volunteer" />
      <TitleWrapH2>
        <h2>Volunteer Voices: Ratings & Reviews</h2>
        <span></span>
      </TitleWrapH2>
      <div className={styles.volunteerRatings}>
        <div className={styles.rateVolunteer}>
          <RatingFormComponent update={setRating} />
        </div>
        <div className={styles.ratings}>
          {ratings.length > 0 &&
            volunteer &&
            ratings.map((rating) => {
              return <RatingCardComponent key={rating.grade} data={rating} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default VolunteerDetailsSection;
