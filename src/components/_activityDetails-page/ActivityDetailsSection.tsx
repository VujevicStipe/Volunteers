import { useEffect, useState } from "react";
import stlyes from "./ActivityDetailsSection.module.css";
import ButtonComponent from "../button/ButtonComponent";
import axios from "axios";
import apiUrl from "../../util/config";
import actImg from "../../../public/assets/activity-img.png";
import { TitleWrapH2 } from "../../styles/styles";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { CiCalendarDate } from "react-icons/ci";
import { GoLocation } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";

const ActivityDetailsSection: React.FC<{ id: string | undefined }> = ({
  id,
}) => {
  const [activity, setActivity] = useState<Activity>();

  const defineID = (id: string | undefined) => {
    return id ? id.replace(":", "") : console.log("can't define url");
  };
  useEffect(() => {
    axios
      .get(`${apiUrl}/activities`)
      .then((res) => {
        res.data.map(
          (item: Activity) =>
            item.id.toString() === defineID(id) && setActivity(item)
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={stlyes.activityDetails}>
      <div className={stlyes.activityContent}>
        <img src={actImg} alt="" />
        <div className={stlyes.info}>
          <div className={stlyes.wrapper}>
            <h6>
              <LiaPeopleCarrySolid />
              {activity?.organisation}
            </h6>
            <TitleWrapH2>
              <h2>{activity?.title}</h2>
              <span></span>
            </TitleWrapH2>
          </div>
          <p>{activity?.description}</p>
          <div className={stlyes.wrapper}>
            <h6>
              <CiCalendarDate />
              {activity?.date}
            </h6>
            <h6>
              <GoLocation />
              {activity?.location}
            </h6>
            <h6>
              <MdOutlineWorkOutline />
              {activity?.jobType}
            </h6>
          </div>
          <ButtonComponent type="primaryBtn">Apply Now</ButtonComponent>
        </div>
      </div>
      <div className={stlyes.activityMembers}>
        <TitleWrapH2>
          <h2>Volunteer crew: who's in?</h2>
        </TitleWrapH2>
      </div>
    </div>
  );
};

export default ActivityDetailsSection;
