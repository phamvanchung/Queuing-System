import React, { FC } from "react";
import { PATH_NAME } from "../constants";
import { Navigate } from "react-router-dom";
// import { getDataStorage } from "utils";

const AuthGuard: FC = ({ children }) => {
  // const isAuth = Boolean(getDataStorage("token"));
  // if (!isAuth) return <Navigate to={PATH_NAME.LOGIN} />;
  return <>{children}</>;
};

export default AuthGuard;
