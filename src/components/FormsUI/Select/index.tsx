import React from "react";
import { useField, useFormikContext } from "formik";
import { MenuItem, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const SelectWrapper = ({ name, options, ...otherProps }: any) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const classes = useStyles();

  const handleChange = (evt: any) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
    size: "small",
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect} className={classes.root}>
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {options[item]}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default SelectWrapper;
const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      background: "#fff",
      borderRadius: `8px`,
    },
    "& .MuiSelect-icon": {
      fill: "#ff7506",
    },
    "& .MuiOutlinedInput-input": {
      color: "#282739",
      fontSize: "14px",
      fontFamily: 'Nunito'
    },
  },
});
