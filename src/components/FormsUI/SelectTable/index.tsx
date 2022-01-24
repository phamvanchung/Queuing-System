import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { makeStyles } from "@mui/material";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

// const useStyles: any = makeStyles(() => ({
//   root: {
//     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//       border: "none",
//       borderRadius: "5px 5px 0 0",
//     },
//   },
// }));

const SelectTable = () => {
  // const classes = useStyles();
  const [personName, setPersonName] = React.useState<string[]>([]);

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <Select
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          // onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => selected.join(", ")}
          // MenuProps={MenuProps}
          size="small"
          IconComponent={() => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginRight: 10,
              }}
            >
              <i className="bx bxs-up-arrow" style={{ fontSize: 10 }}></i>
              <i className="bx bxs-down-arrow" style={{ fontSize: 10 }}></i>
            </div>
          )}
          // className={classes.root}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default SelectTable;
