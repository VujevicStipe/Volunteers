import React, { ReactNode } from "react";
import styles from "./OrganisationCard.module.css";
import logo from "../../../../public/assets/organisation-img.png";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { GoLocation } from "react-icons/go";
import { TitleWrapH2 } from "../../../styles/styles";

interface organisationCardProps {
  data: Organisation;
  children?: ReactNode;
}

const OrganisationCard: React.FC<organisationCardProps> = ({
  data,
  children,
}) => {
  return (
    <div className={styles.organisationCard}>
      <img src={logo} alt="" />
      <div className={styles.wrapper}>
        <h6>
          <LiaPeopleCarrySolid />
          Organisation
        </h6>
        <TitleWrapH2>
          <h2>{data.organisationName}</h2>
          <span></span>
        </TitleWrapH2>
        <h6>
          <GoLocation />
          {data.adress}, {data.location}
        </h6>
      </div>
      {children}
    </div>
  );
};

export default OrganisationCard;
