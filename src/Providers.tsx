import { CssBaseline } from "@mui/material";
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import Spinner from "./components/Spinner";

export const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Suspense fallback={<Spinner />}>{children}</Suspense>
    </Provider>
  );
};
