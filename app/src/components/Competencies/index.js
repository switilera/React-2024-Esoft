import React from "react";
import ActionButtons from "./actionButtons";
import CompetenceCard from "./compitenceCard";
import CreateCompetence from "./createCompetence";
import { v4 as uuid } from "uuid";

const Competencies = () => {
  const [competencies, setCompetencies] = React.useState([
    {
      id: uuid(),
      name: "html +",
      scale: 60,
    },
    {
      id: uuid(),
      name: "CSS +",
      scale: 30,
    },
    {
      id: uuid(),
      name: "JS +",
      scale: 20,
    },
    {
      id: uuid(),
      name: "React -",
      scale: 50,
    },
  ]);

  const [isShowCreateCompetence, setIsShowCreateCompetence] =
    React.useState(false);

  const [compFilter, setCompFilter] = React.useState(null);

  const deleteCompetence = (id) => {
    const filter = competencies.filter(
      ({ id: competenceId }) => competenceId !== id
    );

    setCompetencies(filter);
  };

  const addCometence = (competence) => {
    setCompetencies([...competencies, competence]);
  };

  const cardCompetence = (filter) =>
    filter.map((cometence) => (
      <CompetenceCard
        key={cometence?.id}
        competence={cometence?.name}
        scale={cometence?.scale}
        deleteCompetence={() => deleteCompetence(cometence?.id)}
      />
    ));

  const allCompetence = () => {
    switch (compFilter) {
      case "completed":
        return cardCompetence(competencies.filter(({ scale }) => scale >= 50));
      case "notCompleted":
        return cardCompetence(competencies.filter(({ scale }) => scale <= 50));
      default:
        return cardCompetence(competencies);
    }
  };

  return (
    <React.Fragment>
      <ActionButtons
        isShow={isShowCreateCompetence}
        handler={setIsShowCreateCompetence}
        createFilter={setCompFilter}
      />
      <CreateCompetence
        isShow={isShowCreateCompetence}
        createCompetence={addCometence}
        onClose={() => setIsShowCreateCompetence(false)}
      />
      {allCompetence()}
    </React.Fragment>
  );
};

export default Competencies;
