import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import * as React from "react";

interface Props {
  open: boolean;
  handleClose: () => void;
  number?: string;
  service?: string;
  startTime?: string;
  endTime?: string;
}

const PopupNumber = ({
  open,
  handleClose,
  number = "2001201",
  service = "Khám răng hàm mặt",
  startTime = " 09:30 11/10/2021",
  endTime = "17:30 11/10/2021",
}: Props) => {
  const classes = useStyles();
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style} className={classes.wrap}>
        <span className={classes.icon} onClick={handleClose}>
          <ClearOutlinedIcon />
        </span>
        <Box className={classes.boxTop}>
          <Typography className={classes.title}>Số thứ tự được cấp</Typography>
          <Typography className={classes.number}>{number}</Typography>
          <Typography className={classes.dv}>
            DV: {service}
            <span className={classes.span}> (tại quầy số 1)</span>
          </Typography>
        </Box>
        <Box className={classes.boxBottom}>
          <Typography className={classes.time}>
            Thời gian cấp: {startTime}
          </Typography>
          <Typography className={classes.time}>
            Hạn sử dụng: {endTime}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default PopupNumber;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "35%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "24px",
  pt: 6,
};

const useStyles = makeStyles(() => ({
  wrap: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: "20px",
    right: "20px",
    cursor: "pointer",
    color: "#FF9138",
  },
  boxTop: {},
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "32px",
    color: " #535261",
  },
  number: {
    fontFamily: "Nunito",
    fontWeight: 800,
    fontSize: "56px",
    color: "#FF7506",
  },
  dv: {
    fontFamily: "Nunito",
    fontWeight: 400,
    fontSize: "18px",
    color: "#282739",
    margin: "20px 0",
  },
  span: {
    fontWeight: 700,
  },
  boxBottom: {
    backgroundColor: "#FF9138",
  },
  time: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "22px",
    color: "#FFF",
    margin: "10px 0",
  },
}));
