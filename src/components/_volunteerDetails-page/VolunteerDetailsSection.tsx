import axios from "axios";
import styles from "./VolunteerDetailsSection.module.css";
import React, { useContext, useEffect, useState } from "react";
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
import { RoleManagerContext } from "../../util/RoleManagerContext";
import DeleteRating from "./components/DeleteRating";
import EditVolunteer from "./components/EditVolunteer";

const VolunteerDetailsSection: React.FC<{ id: string | undefined }> = ({
  id,
}) => {
  if (!id) {
    return null;
  }

  const deviceType = useWindowSize();
  const roleContext = useContext(RoleManagerContext);

  const [volunteer, setVolunteer] = useState<Volunteer>();

  useEffect(() => {
    axios
      .get(`${apiUrl}/volunteers/${defineID(id)}`)
      .then((res) => {
        const response = res.data;
        setVolunteer(response);
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
      <ItemDetailsComponent data={volunteer} variant="volunteer">
        {roleContext && roleContext.role === "admin" && (
          <EditVolunteer volunteer={volunteer} update={setVolunteer} />
        )}
      </ItemDetailsComponent>
      <TitleWrapH2>
        <h2>Volunteer Voices: Ratings & Reviews</h2>
        <span></span>
      </TitleWrapH2>
      <div className={styles.volunteerRatings}>
        <div className={styles.rateVolunteer}>
          {volunteer && <RatingStats data={volunteer?.volunteerRating} />}
          <h4>
            Rate {volunteer?.name} {volunteer?.surname}
          </h4>
          <RatingFormComponent update={setVolunteer} itemId={id} />
        </div>
        <div className={styles.ratings}>
          {roleContext && roleContext.role === "admin"
            ? volunteer?.volunteerRating?.map((rating) => (
                <RatingCardComponent key={rating.id} data={rating}>
                  <DeleteRating
                    volunteerId={id}
                    itemId={rating.id}
                    update={setVolunteer}
                  />
                </RatingCardComponent>
              ))
            : volunteer?.volunteerRating?.map((rating) => (
                <RatingCardComponent key={rating.id} data={rating} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerDetailsSection;
