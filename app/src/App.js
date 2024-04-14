import React from "react";
import s from "./app.module.css";
import Photo from "./assets/image/123.jpg";
import Image from "./components/image";
import FullName from "./components/fullName";
import Competence from "./components/Competence";
import CompetencyTechnology from "./components/competencyTechnology";
import Header from "./components/base/header";
import Footer from "./components/base/footer";

const App = () => {
  const [viewComp, setViewComp] = React.useState(false);

  return (
    <React.Fragment>
      <Header />
      <div className={s.app}>
        <Image path={Photo} />
        <FullName fullName={"Донец Валерия Сергеевна"} />
        {viewComp && (
          <div>
            <Competence
              title={"Карточка с компетенцей №1"}
              competence={"HTML+"}
            />
            <Competence
              title={"Карточка с компетенцей №2"}
              competence={"СSS+"}
            />
            <Competence
              title={"Карточка с компетенцей №3"}
              competence={"JS+"}
            />
            <Competence
              title={"Карточка с компетенцей №4"}
              competence={"React-"}
            />
          </div>
        )}
        <button onClick={() => setViewComp(!viewComp)}>
          {viewComp ? "Скрыть" : "Показать"}
        </button>
        <CompetencyTechnology
          title={"Карточка с технологией компетенции №1"}
          competencytechnology={"Узнать лучше Frontend"}
        />
        <CompetencyTechnology
          title={"Карточка с технологией компетенции №2"}
          competencytechnology={"Познакомиться с Git"}
        />
        <CompetencyTechnology
          title={"Карточка с технологией компетенции №3"}
          competencytechnology={"Получить новые знания - JS,React"}
        />
        <CompetencyTechnology
          title={"Карточка с технологией компетенции №4"}
          competencytechnology={"Овладеть языком программирования typescript"}
        />
        <CompetencyTechnology
          title={"Карточка с технологией компетенции №5"}
          competencytechnology={"Научиться создавать приложение в React"}
        />
        <CompetencyTechnology
          title={"Карточка с технологией компетенции №6"}
          competencytechnology={"Создать проект"}
        />
        <CompetencyTechnology
          title={"Карточка с технологией компетенции №7"}
          competencytechnology={"Работа в команде, над совместным проектом"}
        />
        <CompetencyTechnology
          title={"Карточка с технологией компетенции №8"}
          competencytechnology={"Повышение hard skills"}
        />
        <CompetencyTechnology
          title={"Карточка с технологией компетенции №9"}
          competencytechnology={"Получить положительные эмоции от разработки"}
        />
        <CompetencyTechnology
          title={"Карточка с технологией компетенции №10"}
          competencytechnology={"Познакомиться с командой Esoft :) "}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
