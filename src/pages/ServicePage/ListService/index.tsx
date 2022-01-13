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
import { useStyles } from "../../../assets/styles";
import CreateBtn from "../../../components/CreateBtn";
import DataPicker from "../../../components/DatePicker";
import Placeholder from "../../../components/Placeholder";
import User from "../../../components/User";
import { services } from "../../../constants/dataTable";
import "./styles.scss";

const ServicePage = () => {
  const classes = useStyles();

  const [statusAction, setStatusAction] = React.useState("");

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Dịch vụ
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      Danh sách dịch vụ
    </Link>,
  ];

  const showTable = () => {
    let result = null;
    if (services && services.length > 0) {
      result = services.map((service, index) => {
        return (
          <tr className="list__service_content-table-content" key={index}>
            <td>{service.id}</td>
            <td>{service.name}</td>
            <td>{service.desc}</td>
            <td className={`status ${service.status}`}>
              <i className="bx bxs-circle"></i>
              {service.statusAction}
            </td>
            <td>
              <RouterLink to={`/service/detail/${service.serviceId}`}>
                Chi tiết
              </RouterLink>
            </td>
            <td>
              <RouterLink to={`/service/edit/${service.serviceId}`}>
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
    <div className="service__container">
      <div className="service__header">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <User />
      </div>
      <div className="service__content">
        <h3>Quản lý dịch vụ</h3>
        <div className="service__content-select">
          <div className="service__content-select-wrap">
            <FormControl size="small" sx={{ width: "40%" }}>
              <label>Trạng thái hoạt động</label>
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
            <div className="service__content-select-time">
              <label>Chọn thời gian</label>
              <DataPicker />
            </div>
          </div>

          <div className="service__content-search">
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
        <div className="service__content-table-wrap">
          <table className="service__content-table">
            <tr className="service__content-table-title">
              <th>Mã dịch vụ</th>
              <th>Tên dịch vụ </th>
              <th>Mô tả</th>
              <th>Trạng thái hoạt động</th>
              <th></th>
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
          className="service__content-pagination"
          classes={{ ul: classes.ul }}
        />
        <Link component={RouterLink} to="/service/add" className="wrap-btn">
          <CreateBtn icon="bx bxs-plus-square" title="Thêm dịch vụ" />
        </Link>
      </div>
    </div>
  );
};

export default ServicePage;
