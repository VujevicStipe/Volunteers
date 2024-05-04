import axios from "axios";
import styles from "./VolunteerDetailsSection.module.css";
import React, { useEffect, useState } from "react";
import apiUrl from "../../util/config";
import ItemDetailsComponent from "../itemDetailsComponent/ItemDetailsComponent";
import { NavigateBackStyle, TitleWrapH2 } from "../../styles/styles";
import { IoIosArrowRoundBack } from "react-icons/io";
import RatingFormComponent from "./components/RatingFormComponent";
import RatingCardComponent from "./components/RatingCardComponent";
import RatingStats from "./components/RatingStatsComponent";
import useWindowSize from "../../util/useWindowSize";
import { Link } from "react-router-dom";
import { defineID } from "../../util/defineID";

const VolunteerDetailsSection: React.FC<{ id: string | undefined }> = ({
  id,
}) => {
  if (!id) {
    return null;
  }
  const deviceType = useWindowSize();

  const [volunteer, setVolunteer] = useState<Volunteer>();
  const [ratings, setRatings] = useState<Rating[]>();

  useEffect(() => {
    axios
      .get(`${apiUrl}/volunteers/${defineID(id)}`)
      .then((res) => {
        const response = res.data;
        setVolunteer(response);
        setRatings(response.volunteerRating);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={`${styles.volunteerDetails} ${styles[deviceType]}`}>
      <Link to={`/volunteers`}>
        <NavigateBackStyle>
          <IoIosArrowRoundBack />
          <h6>back to Volunteers</h6>
        </NavigateBackStyle>
      </Link>
      <ItemDetailsComponent data={volunteer} variant="volunteer" />
      <TitleWrapH2>
        <h2>Volunteer Voices: Ratings & Reviews</h2>
        <span></span>
      </TitleWrapH2>
      <div className={styles.volunteerRatings}>
        <div className={styles.rateVolunteer}>
          {ratings && <RatingStats data={ratings} />}
          <h4>
            Rate {volunteer?.name} {volunteer?.surname}
          </h4>
          <RatingFormComponent update={setRatings} itemId={id} />
        </div>
        <div className={styles.ratings}>
          {ratings?.map((rating) => {
            return <RatingCardComponent key={rating.name} data={rating} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VolunteerDetailsSection;
