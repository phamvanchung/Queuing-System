import React from "react";
import "./styles.scss";

interface Props {
  iconHeader: string;
  title: string;
  count: string;
  iconUpDown: string;
  numberPercent: string;
  color: string;
  colorText: string;
  bg: string;
}

const Card = (props: Props) => {
  return (
    <div className="status-card">
      <div className="status-card__wrap-icon">
        <div className={`status-card__icon ${props.color}`}>
          <i className={props.iconHeader}></i>
        </div>
        <span>{props.title}</span>
      </div>
      <div className="status-card__info">
        <span className="status-card-count">{props.count}</span>
        <div className={`status-card-wrap ${props.bg}`}>
          <i className={props.iconUpDown}></i>
          <span className={`status-card-number ${props.colorText}`}>
            {props.numberPercent}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
