import React from "react";
import Card from "../base/card";
import s from "./image.module.css";

const Image = ({ path }) => {
  return (
    <Card title={"Карточка с изображением"}>
      <img src={path} alt={"image"} className={s.image} />
    </Card>
  );
};

export default Image;
