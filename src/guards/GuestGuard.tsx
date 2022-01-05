import React, { FC } from "react";
import { PATH_NAME, QUEUING } from "../constants";
import { Redirect } from "react-router-dom";

const GuestGuard: FC = ({ children }) => {
  const isAuth = Boolean(localStorage.getItem(QUEUING));
  if (isAuth) return <Redirect to={PATH_NAME.ROOT} />;
  return <> {children}</>;
};

export default GuestGuard;
