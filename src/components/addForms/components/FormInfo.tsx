import React from "react";
import { TitleWrapH2 } from "../../../styles/styles";

interface formInfoProps {
  title: string;
  subtitle: string;
  paragraph: string;
}

const FormInfo: React.FC<formInfoProps> = ({ title, subtitle, paragraph }) => {
  return (
    <div>
      <h6>{title}</h6>
      <TitleWrapH2>
        <h2>{subtitle}</h2>
        <span></span>
      </TitleWrapH2>
      <p>{paragraph}</p>
    </div>
  );
};

export default FormInfo;
