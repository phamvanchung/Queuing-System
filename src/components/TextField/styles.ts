
import { styled } from "@mui/system";

const blue = {
  200: "#80BFFF",
  400: "#3399FF",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};


export const StyledInputElement = styled("input")(
  ({ theme }) => `
  width:100%;
  height: 44px;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  // background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
  border-radius: 8px;
  padding: 12px 16px;
  transition: all 150ms ease;
  font-family: Nunito;
  font-style: normal;
  font-size: 16px;
  margin-bottom:20px;
  
  &:hover {
    // background: ${theme.palette.mode === "dark" ? null : grey[100]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[400]};
  }

  &:focus {
    outline: 1px solid ${theme.palette.mode === "dark" ? blue[400] : blue[200]};
  }
`
);
