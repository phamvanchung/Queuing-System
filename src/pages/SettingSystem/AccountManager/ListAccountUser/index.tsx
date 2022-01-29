import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import {
  FormControl,
  IconButton,
  InputBase,
  MenuItem,
  Pagination,
  PaginationItem,
  Paper,
  Select,
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useStyles } from "../../../../assets/styles";
import CreateBtn from "../../../../components/CreateBtn";
import Placeholder from "../../../../components/Placeholder";
import User from "../../../../components/User";
import { AccountUser } from "../../../../constants/dataTable";
import "./styles.scss";

const ListAccountUser = () => {
  const classes = useStyles();
  const [statusAction, setStatusAction] = React.useState("");

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Cài đặt hệ thống
    </Link>,
    <div className="header-title"> Quản lý tài khoản</div>,
  ];

  const showTable = () => {
    let result = null;
    if (AccountUser && AccountUser.length > 0) {
      result = AccountUser.map((user, index) => {
        return (
          <tr key={index}>
            <td>{user.account}</td>
            <td>{user.username}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td className={`status ${user.status}`}>
              <i className="bx bxs-circle"></i>
              {user.statusContent}
            </td>
            <td>
              <RouterLink to={`/setting-system/account/${user.id}`}>
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
    <div className="account__container">
      <div className="account__header">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <User />
      </div>
      <div className="account__content">
        <h3>Danh sách tài khoản</h3>
        <div className="account__content-select">
          <div className="account__content-select-wrap">
            <FormControl size="small" sx={{ width: "100%" }}>
              <label>Tên vai trò</label>
              <Select
                displayEmpty
                value={statusAction}
                onChange={(event) => setStatusAction(event.target.value)}
                renderValue={
                  statusAction !== ""
                    ? undefined
                    : () => <Placeholder>Tất cả</Placeholder>
                }
                inputProps={{
                  classes: {
                    icon: classes.icon,
                  },
                }}
                className={classes.select}
              >
                <MenuItem value={10}>Hoạt động</MenuItem>
                <MenuItem value={20}>Ngừng hoạt động</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="account__content-search">
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
        <div className="account__content-table-wrap">
          <table className="account__content-table">
            <tr className="account__content-table-title">
              <th>Tên đăng nhập</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Vai trò</th>
              <th>Trạng thái hoạt động</th>
              <th></th>
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
          className="account__content-pagination"
          classes={{ ul: classes.ul }}
        />
        <Link
          component={RouterLink}
          to="/setting-system/account/add"
          className="wrap-btn"
        >
          <CreateBtn icon="bx bxs-plus-square" title="Thêm tài khoản" />
        </Link>
      </div>
    </div>
  );
};

export default ListAccountUser;
