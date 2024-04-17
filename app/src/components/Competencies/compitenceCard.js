import React from "react";
import Card from "../base/card";

const CompetenceCard = ({ competence, scale, deleteCompetence }) => {
  console.log(competence);

  return (
    <Card title={"Карточка компетенции"}>
      <div>{competence}</div>
      <div>{`${scale}%`}</div>
      <button onClick={deleteCompetence}>{"Удалить"}</button>
    </Card>
  );
};

export default CompetenceCard;
