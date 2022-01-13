import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useStyles } from "../../../assets/styles";
import CreateBtn from "../../../components/CreateBtn";
import Placeholder from "../../../components/Placeholder";
import User from "../../../components/User";
import { equipments } from "../../../constants/dataTable";
import "./styles.scss";

const ListEquipment = () => {
  const classes = useStyles();

  const [statusAction, setStatusAction] = React.useState("");
  const [statusConnect, setStatusConnect] = React.useState("");

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Thiết bị
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      Danh sách thiết bị
    </Link>,
  ];

  const showTable = () => {
    let result = null;
    if (equipments && equipments.length > 0) {
      result = equipments.map((equipment, index) => {
        return (
          <tr className="list__equipment_content-table-content" key={index}>
            <td>{equipment.id}</td>
            <td>{equipment.name}</td>
            <td>{equipment.ip}</td>
            <td className={`status ${equipment.status}`}>
              <i className="bx bxs-circle"></i>
              {equipment.statusAction}
            </td>
            <td className={`status ${equipment.status}`}>
              <i className="bx bxs-circle"></i>
              {equipment.statusConnect}
            </td>
            <td className="table-service">
              {equipment.service}
              <a href="###">Xem thêm</a>
            </td>
            <td>
              <RouterLink to={`/list-equipment/detail/${equipment.eqId}`}>
                Chi tiết
              </RouterLink>
            </td>
            <td>
              <RouterLink to={`/list-equipment/edit/${equipment.eqId}`}>
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
    <div className="list__equipment_container">
      <div className="list__equipment_header">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <User />
      </div>
      {/* begin content*/}
      <div className="list__equipment_content">
        <h3>Danh sách thiết bị</h3>
        <div className="list__equipment_content-wrap">
          <div className="list__equipment_content-wrap-select">
            <div className="list__equipment_content-select">
              <FormControl size="small" sx={{ width: "100%" }}>
                <span>Trang thái hoạt động</span>
                <Select
                  displayEmpty
                  value={statusAction}
                  onChange={(event) => setStatusAction(event.target.value)}
                  className="list__equipment_content-select-item"
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
                >
                  <MenuItem value={10}>Hoạt động</MenuItem>
                  <MenuItem value={20}>Ngừng hoạt động</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="list__equipment_content-select">
              <FormControl size="small" sx={{ width: "100%" }}>
                <span>Trang thái kết nối</span>
                <Select
                  displayEmpty
                  value={statusConnect}
                  onChange={(event) => setStatusConnect(event.target.value)}
                  className="list__equipment_content-select-item"
                  renderValue={
                    statusConnect !== ""
                      ? undefined
                      : () => <Placeholder>Tất cả</Placeholder>
                  }
                  inputProps={{
                    classes: {
                      icon: classes.icon,
                    },
                  }}
                >
                  <MenuItem value={10}>Kết nối</MenuItem>
                  <MenuItem value={20}>Mất kết nối</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="list__equipment_content-search">
            <span>Từ khóa</span>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: 44,
                borderRadius: "8px",
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
        <table className="list__equipment_content-table">
          <tr className="list__equipment_content-table-title">
            <th>Mã thiết bị</th>
            <th>Tên thiết bị</th>
            <th>Địa chỉ IP</th>
            <th>Trạng thái hoạt động</th>
            <th>Trạng thái kết nối</th>
            <th>Dịch vụ sử dụng</th>
            <th></th>
            <th></th>
          </tr>
          {showTable()}
        </table>
        {/*end table*/}
        {/*pagination*/}
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
          className="list__equipment_content-pagination"
          classes={{ ul: classes.ul }}
        />
        <Link
          component={RouterLink}
          to="/list-equipment/add"
          className="wrap-btn"
        >
          <CreateBtn icon="bx bxs-plus-square" title="Thêm thiết bị" />
        </Link>
      </div>
    </div>
  );
};

export default ListEquipment;
