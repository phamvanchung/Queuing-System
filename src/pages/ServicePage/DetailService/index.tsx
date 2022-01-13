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
import { Formik } from "formik";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useStyles } from "../../../assets/styles";
import CreateBtn from "../../../components/CreateBtn";
import DataPicker from "../../../components/DatePicker";
import Input from "../../../components/FormsUI/Input";
import Placeholder from "../../../components/Placeholder";
import User from "../../../components/User";
import { detailServices } from "../../../constants/dataTable";
import "./styles.scss";

const DetailService = () => {
  const classes = useStyles();
  const [status, setStatus] = React.useState("");

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Dịch vụ
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      Danh sách dịch vụ
    </Link>,
    <div className="header-title">Chi tiết</div>,
  ];

  const INITIAL_FORM_STATE = {
    serviceId: "",
    nameService: "",
    desc: "",
    sort: "",
    to: "",
    prefix: "",
    surfix: "",
  };

  const showTable = () => {
    let result = null;
    if (detailServices && detailServices.length > 0) {
      result = detailServices.map((service, index) => {
        return (
          <tr className="list__service_content-table-content" key={index}>
            <td>{service.stt}</td>
            <td>
              <i className={`bx bxs-circle ${service.status}`}></i>
              {service.statusName}
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
        <Formik
          initialValues={{
            ...INITIAL_FORM_STATE,
          }}
          // validationSchema={FORM_EQUIPMENT_VALIDATION}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <div className="service__content__wrapper">
            <div className="service__content__left">
              <div className="service__content__left-title">
                Thông tin dịch vụ
              </div>
              <div className="service__content__left-content">
                <label>Mã dịch vụ:</label>
                <span>201</span>
              </div>
              <div className="service__content__left-content">
                <label>Tên dịch vụ:</label>
                <span>Khám tim mạch</span>
              </div>
              <div className="service__content__left-content">
                <label>Mô tả:</label>
                <span>Chuyên các bệnh lý về tim</span>
              </div>
              <div className="service__content__left-title">Quy tắc cấp số</div>
              <div className="service__content__left-content">
                <label>Tăng tự động:</label>
                <Input
                  name="sort"
                  fullWidth={false}
                  style={{ width: "15%", padding: 0, margin: 0 }}
                />
                <span className="to">đến</span>
                <Input
                  name="to"
                  fullWidth={false}
                  style={{ width: "15%", padding: 0, margin: 0 }}
                />
              </div>
              <div className="service__content__left-content">
                <label>Prefix:</label>
                <Input
                  name="prefix"
                  fullWidth={false}
                  style={{ width: "15%", padding: 0, margin: 0 }}
                />
              </div>
              <div className="service__content__left-content">
                <label>Reset mỗi ngày</label>
              </div>
              <div className="service__content__left-ex">Ví dụ: 201-2001</div>
            </div>
            <div className="service__content__right">
              <div className="service__content-select">
                <div className="service__content-select-wrap">
                  <FormControl size="small" sx={{ width: "40%" }}>
                    <label>Trạng thái </label>
                    <Select
                      displayEmpty
                      value={status}
                      onChange={(event) => setStatus(event.target.value)}
                      renderValue={
                        status !== ""
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
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Nhập từ khóa"
                    />
                    <IconButton
                      type="submit"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <SearchIcon className={classes.searchIcon} />
                    </IconButton>
                  </Paper>
                </div>
              </div>
              {/* table */}
              <div className="service__content-table-wrap">
                <table className="service__content-table">
                  <tr className="service__content-table-title">
                    <th>Mã dịch vụ</th>
                    <th>Tên dịch vụ </th>
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
                    components={{
                      previous: ArrowLeftIcon,
                      next: ArrowRightIcon,
                    }}
                    {...item}
                  />
                )}
                className="service__content-pagination"
                classes={{ ul: classes.ul }}
              />
            </div>
          </div>
        </Formik>
        <div className="wrap-btn">
          <Link component={RouterLink} to="/service/edit/:id">
            <CreateBtn icon="bx bxs-plus-square" title="cập nhật danh sách" />
          </Link>
          <Link component={RouterLink} to="/service">
            <CreateBtn icon="bx bx-arrow-back" title="Quay lại" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailService;
