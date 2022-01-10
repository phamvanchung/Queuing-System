import React from "react";
import { makeStyles } from "@mui/styles";

const usePlaceholderStyles = makeStyles(() => ({
  placeholder: {
    marginTop: " 10px",
    color: "#535261",
  },
}));

const Placeholder = ({ children }: any) => {
  const classes = usePlaceholderStyles();
  return <div className={classes.placeholder}>{children}</div>;
};

export default Placeholder;
