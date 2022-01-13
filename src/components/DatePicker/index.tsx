import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateRangePicker, { DateRange } from "@mui/lab/DateRangePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { makeStyles } from "@mui/styles";

export default function CalendarsDateRangePicker() {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
  const classes = useStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        calendars={1}
        value={value}
        endText={false}
        startText={false}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextField
              {...startProps}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DateRangeIcon className={classes.root} />
                  </InputAdornment>
                ),
              }}
              className={classes.root}
            />
            <Box>
              <ArrowRightIcon />
            </Box>
            <TextField
              {...endProps}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DateRangeIcon className={classes.root} />
                  </InputAdornment>
                ),
              }}
              className={classes.root}
            />
          </div>
        )}
      />
    </LocalizationProvider>
  );
}

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      backgroundColor: "#fff",
    },
    "& .MuiSvgIcon-root": {
      color: "#ff7506",
    },
  },
});
