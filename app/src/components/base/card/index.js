import React from "react";
import s from "./card.module.css";

const Card = ({ title, children }) => {
  return (
    <div className={s.card}>
      <div className={s.title}>{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default Card;
