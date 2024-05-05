import React, { ReactNode } from "react";
import styles from "./styles/ItemDetailsComponent.module.css";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { CiCalendarDate } from "react-icons/ci";
import { GoLocation } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import { BsTelephoneInbound } from "react-icons/bs";
import { TitleWrapH2 } from "../../styles/styles";
import actImg from "../../../public/assets/activity-img.png";
import ButtonComponent from "../button/ButtonComponent";
import useWindowSize from "../../util/useWindowSize";

interface ItemDetailsComponentProps {
  data?: Activity | Volunteer;
  variant: "activity" | "volunteer";
  onClick?: () => void;
  children?: ReactNode;
}

const ItemDetailsComponent: React.FC<ItemDetailsComponentProps> = ({
  data,
  variant,
  onClick,
  children,
}) => {

  const deviceType = useWindowSize()
  
  if (!data) {
    return null;
  }
  let itemData;

  switch (variant) {
    case "activity":
      itemData = () => {
        let activityData: Activity = data as Activity;

        return (
          <>
            <img src={activityData.image} alt="" />
            <div className={styles.info}>
              <div className={styles.wrapper}>
                <h6>
                  <LiaPeopleCarrySolid />
                  {activityData.organisation}
                </h6>
                <TitleWrapH2>
                  <h2>{activityData.title}</h2>
                  <span></span>
                </TitleWrapH2>
              </div>
              <p>{activityData.description}</p>
              <div className={styles.wrapper}>
                <h6>
                  <CiCalendarDate />
                  {activityData.date}
                </h6>
                <h6>
                  <GoLocation />
                  {activityData.location}
                </h6>
                <h6>
                  <MdOutlineWorkOutline />
                  {activityData.jobType}
                </h6>
              </div>
              <ButtonComponent onClick={onClick} type="primaryBtn">
                Apply Now
              </ButtonComponent>
            </div>
            {children}
          </>
        );
      };
      break;
    case "volunteer":
      itemData = () => {
        let volunteerData: Volunteer = data as Volunteer;

        return (
          <>
            <img className={styles.volunteerUserImg} src={volunteerData.userImg} alt="" />
            <div className={`${styles.info} ${styles.volunteerInfo}`}>
              <div className={styles.wrapper}>
                <h6>
                  <GoVerified />
                  Our Volunteer
                </h6>
                <TitleWrapH2>
                  <h2>
                    {volunteerData.name} {volunteerData.surname}
                  </h2>
                  <span></span>
                </TitleWrapH2>
              </div>
              <p>{volunteerData.description}</p>
              <div className={styles.wrapper}>
                <h6>
                  <GoLocation />
                  {volunteerData.location}
                </h6>
                <h6>
                  <LiaPeopleCarrySolid />
                  {volunteerData.workExperience ? "Work Experience" : "No Work Experience"}
                </h6>
                <h6>
                  <MdOutlineWorkOutline />
                  {volunteerData.jobType}
                </h6>
                <h6>
                  <BsTelephoneInbound />
                  {volunteerData.contactNumber}
                </h6>
              </div>
            </div>
            {children}
          </>
        );
      };
      break;
  }

  return <div className={`${styles.itemContent} ${styles[deviceType]}`}>{itemData && itemData()}</div>;
};

export default ItemDetailsComponent;
