import React, { FC } from "react";
import { PATH_NAME } from "../constants";
import { Navigate } from "react-router-dom";
// import { getDataStorage } from 'utils'

const GuestGuard: FC = ({ children }) => {
  // const isAuth = Boolean(getDataStorage('token'))
  // if (isAuth) return <Navigate to={PATH_NAME.ROOT} />
  return <> {children}</>;
};

export default GuestGuard;
