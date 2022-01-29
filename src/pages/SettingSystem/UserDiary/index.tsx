import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import {
  IconButton,
  InputBase,
  Pagination,
  PaginationItem,
  Paper,
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import React from "react";
import { useStyles } from "../../../assets/styles";
import DataPicker from "../../../components/DatePicker";
import User from "../../../components/User";
import { Diaries } from "../../../constants/dataTable";
import "./styles.scss";

const UserDiary = () => {
  const classes = useStyles();

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Cài đặt hệ thống
    </Link>,
    <div className="header-title">Nhật ký hoạt động</div>,
  ];

  const showTable = () => {
    let result = null;
    if (Diaries && Diaries.length > 0) {
      result = Diaries.map((diary, index) => {
        return (
          <tr key={index}>
            <td>{diary.account}</td>
            <td>{diary.ImpactTime}</td>
            <td>{diary.ip}</td>
            <td>{diary.performTime}</td>
          </tr>
        );
      });
    }
    return result;
  };

  return (
    <div className="diary__container">
      <div className="diary__header">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <User />
      </div>
      <div className="diary__content">
        <div className="diary__content-header">
          <div className="diary__content-time">
            <label>Chọn thời gian</label>
            <DataPicker />
          </div>
          <div className="diary__content-search">
            <label>Từ khóa</label>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: 40,
                borderRadius: "8px",
                width: "100%",
              }}
            >
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Nhập từ khóa" />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon className={classes.searchIcon} />
              </IconButton>
            </Paper>
          </div>
        </div>
        {/* begin table*/}
        <div className="diary__content-table-wrap">
          <table className="diary__content-table">
            <tr className="diary__content-table-title">
              <th>Tên đăng nhập</th>
              <th>Thời gian tác động</th>
              <th>IP thực hiện</th>
              <th>Thao tác thực hiện</th>
            </tr>
            {showTable()}
          </table>
        </div>
        {/* begin pagination*/}
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: ArrowLeftIcon, next: ArrowRightIcon }}
              {...item}
            />
          )}
          className="diary__content-pagination"
          classes={{ ul: classes.ul }}
        />
      </div>
    </div>
  );
};

export default UserDiary;
