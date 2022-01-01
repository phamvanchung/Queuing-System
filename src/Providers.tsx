import { CircularProgress, CssBaseline } from "@mui/material";
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import store from "./store";

export const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Suspense fallback={<CircularProgress />}>{children}</Suspense>
    </Provider>
  );
};
