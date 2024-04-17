import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const CreateCompetence = ({ isShow, createCompetence, onClose }) => {
  const [name, setName] = useState("");
  const [scale, setScale] = useState(0);

  const create = () => {
    createCompetence({ id: uuid(), name, scale });
    onClose();
  };

  return (
    <div>
      {isShow && (
        <div>
          <div>
            <label>{"Укажите название компетенции "}</label>
            <input
              type="text"
              onChange={({ target }) => setName(target.value)}
            />
          </div>
          <div>
            <label>{"Укажите уровень компетенции "}</label>
            <input
              type="text"
              onChange={({ target }) => setScale(Number(target.value))}
            />
            <div>
              <button onClick={create}>{"Добавить компетенцию"}</button>
            </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default CreateCompetence;
