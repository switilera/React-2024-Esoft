import React from "react";
import s from "./app.module.css";
import Photo from "./assets/image/123.jpg";
import Image from "./components/image";
import FullName from "./components/fullName";
import Header from "./components/base/header";
import Footer from "./components/base/footer";
import Competencies from "./components/Competencies";

const App = () => {
  const [viewComp, setViewComp] = React.useState(false);

  return (
    <React.Fragment>
      <Header />
      <div className={s.app}>
        <Image path={Photo} />
        <FullName fullName={"Донец Валерия Сергеевна"} />
        {viewComp && <Competencies />}
        <button onClick={() => setViewComp(!viewComp)}>
          {viewComp ? "Убрать компетенции" : "Показать компетенции"}
        </button>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
