import React from "react";
import { useField } from "formik";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

const TextfieldWrapper = ({ name, title, ...otherProps }: any) => {
  const [field, mata] = useField(name);
  const classes = useStyles();

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    size: "small",
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return <TextField {...configTextfield} className={classes.root} />;
};

export default TextfieldWrapper;

const useStyles = makeStyles({
  root: {
    marginBottom: "20px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: `8px`,
      },
    },
  },
});
