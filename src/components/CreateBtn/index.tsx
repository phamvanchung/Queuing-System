import React from "react";
import "./styles.scss";

interface Props {
  title: string;
  icon: string;
}

const index = (props: Props) => {
  return (
    <div className="wrapper-btn">
      <i className={props.icon}></i>
      <span>{props.title}</span>
    </div>
  );
};

export default index;
