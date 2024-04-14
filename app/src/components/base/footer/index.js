import React from "react";
import s from "./footer.module.css";
import dayjs from "dayjs";

const Footer = () => {
  const date = dayjs().format("YYYY");

  return (
    <div className={s.footer}>
      <span>{`${date} г.`}</span>
    </div>
  );
};

export default Footer;
