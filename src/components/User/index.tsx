import { Avatar } from "@mui/material";
import React from "react";
import "./styles.scss";

interface Props {}

const User = (props: Props) => {
  return (
    <div className="profile__user">
      <span className="profile__icon">
        <i className="bx bxs-bell"></i>
      </span>
      <div className="profile__wrap">
        <Avatar
          alt="avatar-user"
          src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"
        />

        <div className="profile__wrap-user">
          <div className="profile__hello">Xin chào</div>
          <span className="profile__name">Lê Quỳnh Ái Vân</span>
        </div>
      </div>
    </div>
  );
};

export default User;
