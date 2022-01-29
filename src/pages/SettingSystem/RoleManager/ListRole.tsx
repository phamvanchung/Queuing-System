import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useStyles } from "../../../assets/styles";
import CreateBtn from "../../../components/CreateBtn";
import User from "../../../components/User";
import { ListRoles } from "../../../constants/dataTable";
import "./styles.scss";

const ListRole = () => {
  const classes = useStyles();

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Cài đặt hệ thống
    </Link>,
    <div className="header-title">Quản lý vai trò</div>,
  ];

  const showTable = () => {
    let result = null;
    if (ListRoles && ListRoles.length > 0) {
      result = ListRoles.map((role, index) => {
        return (
          <tr key={index}>
            <td>{role.nameRole}</td>
            <td>{role.number}</td>
            <td>{role.desc}</td>
            <td>
              <RouterLink to={`/setting-system/role/${role.id}`}>
                Cập nhật
              </RouterLink>
            </td>
          </tr>
        );
      });
    }
    return result;
  };

  return (
    <div className="role__container">
      <div className="role__header">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <User />
      </div>
      <div className="role__content">
        <div className="role__content-titleAndSearch">
          <h3>Danh sách vai trò</h3>
          <div className="role__content-search">
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
        <div className="role__content-table-wrap">
          <table className="role__content-table">
            <tr className="role__content-table-title">
              <th>Tên vai trò</th>
              <th>Số người dùng</th>
              <th>Mô tả</th>
              <th></th>
            </tr>
            {showTable()}
          </table>
        </div>
        <Link
          component={RouterLink}
          to="/setting-system/role/add"
          className="wrap-btn"
        >
          <CreateBtn icon="bx bxs-plus-square" title="Thêm vai trò" />
        </Link>
      </div>
    </div>
  );
};

export default ListRole;
