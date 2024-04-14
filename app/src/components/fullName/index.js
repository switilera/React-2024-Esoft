import React, { Children } from "react";
import Card from "../base/card";

const FullName = ({ fullName }) => {
  return <Card title={"Карточка с ФИО"}>{fullName}</Card>;
};

export default FullName;
