import React, { ReactNode } from "react";
import styles from "./ButtonComponent.module.css";

interface ButtonProps {
  type: "primaryBtn" | "secondaryBtn" | "toggleUserBtn" | "cardBtn" | "seeMoreBtn";
  onClick?: () => void;
  children?: string | ReactNode;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  type,
  onClick,
  children,
}) => {
  let btnStyle;

  switch (type) {
    case "primaryBtn":
      btnStyle = styles.primaryBtn;
      break;
    case "toggleUserBtn":
      btnStyle = styles.toggleUserBtn;
      break;
    case "cardBtn":
      btnStyle = styles.cardBtn;
      break;
    case "seeMoreBtn":
      btnStyle = styles.seeMoreBtn;
      break;
    case "secondaryBtn":
      btnStyle = styles.secondaryBtn
      break;
  }

  return (
    <button className={`${styles.button} ${btnStyle}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonComponent;
