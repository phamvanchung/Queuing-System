import { makeStyles } from "@mui/styles";

export const COLORS = {
  BG_COLOR: '#e6e6e6',
  COLOR_TEXT: '#37474F',
  COLOR_TEXT_INPUT: '#535261',
  COLOR_BORDER: ' #D4D4D7',
  COLOR_ORANGE: '#E73F3F',
  COLOR_BTN: '#FF9138',
  COLOR_TITLE: '#FF7506',

  COLOR_BTN_WHITE: '#fff2e7'
}

export const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      fontSize: 16,
      fontWeight: 600,
      color: "#7e7d88",
      fontFamily: "Nunito",
      border: "none",
    },
    "& .Mui-selected": {
      backgroundColor: "#ff7506",
      color: "#fff",
    },
  },
  icon: {
    fill: "#ff7506",
    marginTop: 2,
  },
  searchIcon: {
    fill: "#ff7506",
  },
}));
