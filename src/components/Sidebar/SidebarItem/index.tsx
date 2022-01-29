import React from "react";
import { Link } from "react-router-dom";
import SubSystems from "../SubSystems";
import "./styles.scss";

interface Props {
  item: {
    display_name: string;
    route: string | any;
    icon: string;
    icon_system?: string;
  };
}

const SideBarItem = ({ item }: Props) => {
  const [showSub, setShowsub] = React.useState(false);
  const pathName = window.location.pathname;

  const active = pathName === item.route ? "active" : "";

  return (
    <>
      <li className="sidebar__item">
        <Link to={item.route} className={`sidebar__item-inner ${active}`}>
          <i className={item.icon}></i>
          {item.display_name}
          {item.icon_system ? (
            <span onClick={() => setShowsub(!showSub)}>
              <i className={item.icon_system}></i>
            </span>
          ) : null}
        </Link>
        <span className="wrap-subNav">{showSub && <SubSystems />}</span>
      </li>
    </>
  );
};

export default SideBarItem;
