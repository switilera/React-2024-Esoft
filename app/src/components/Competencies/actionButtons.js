import React from "react";

const ActionButtons = ({ handler, createFilter, isShow }) => {
  const btnHandlerShow = () => {
    return !isShow ? (
      <button onClick={() => handler(true)}>{"Создать компетенцию"}</button>
    ) : (
      <button onClick={() => handler(false)}>
        {"Отменить создание компетенции"}
      </button>
    );
  };

  return (
    <div>
      {btnHandlerShow()}
      <button onClick={() => createFilter("completed")}>
        {"Показать компетенции с уровнем изучения выше 50%"}
      </button>
      <button onClick={() => createFilter("notCompleted")}>
        {"Показать компетенции с уровнем изучения ниже 50%"}
      </button>
      <button onClick={() => createFilter(null)}>{"Очистить фильтр"}</button>
    </div>
  );
};

export default ActionButtons;
