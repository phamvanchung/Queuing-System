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
import { Form, Formik } from "formik";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useStyles } from "../../../assets/styles";
import CreateBtn from "../../../components/CreateBtn";
import DataPicker from "../../../components/DatePicker";
import FormSelect from "../../../components/FormsUI/Select";
import User from "../../../components/User";
import { numberLevels } from "../../../constants/dataTable";
import powerSupply from "../../../constants/JsonData/select/powerSupply.json";
import serviceName from "../../../constants/JsonData/select/serviceName.json";
import status from "../../../constants/JsonData/select/status.json";
import "./styles.scss";

const ListNumberLevel = () => {
  const classes = useStyles();

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Cấp số
    </Link>,
    <div className="header-title"> Danh sách cấp số</div>,
  ];
  const INITIAL_FORM_STATE = {
    serviceName: "",
    status: "",
    powerSupply: "",
  };

  const showTable = () => {
    let result = null;
    if (numberLevels && numberLevels.length > 0) {
      result = numberLevels.map((numberLevel, index) => {
        return (
          <tr key={index}>
            <td>{numberLevel.stt}</td>
            <td>{numberLevel.username}</td>
            <td>{numberLevel.nameService}</td>
            <td>{numberLevel.startTime}</td>
            <td>{numberLevel.endTime}</td>
            <td>
              <i className={`bx bxs-circle ${numberLevel.status}`}></i>
              {numberLevel.statusContent}
            </td>
            <td>{numberLevel.powerSupply}</td>
            <td>
              <RouterLink to={`/level-number/detail/${numberLevel.id}`}>
                Chi tiết
              </RouterLink>
            </td>
          </tr>
        );
      });
    }
    return result;
  };

  return (
    <div className="number__level__container">
      <div className="number__level__header">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <User />
      </div>
      <div className="number__level__content">
        <h3>Quản lý cấp số</h3>

        <Formik
          initialValues={{
            ...INITIAL_FORM_STATE,
          }}
          // validationSchema={FORM_VALIDATION}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <div className="number__level__content-input">
              <div className="number__level__content-wrap">
                <label>Tên dịch vụ</label>
                <FormSelect options={serviceName} name="serviceName" />
              </div>
              <div className="number__level__content-wrap">
                <label>Tình trạng</label>
                <FormSelect options={status} name="status" />
              </div>
              <div className="number__level__content-wrap">
                <label>Nguồn cấp</label>
                <FormSelect options={powerSupply} name="powerSupply" />
              </div>
              <div className="number__level__content-wrap-time">
                <label>Chọn thời gian</label>
                <DataPicker />
              </div>
              <div className="number__level__content-wrap-search">
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
                    sx={{
                      ml: 1,
                      flex: 1,
                      color: "#282739",
                      fontSize: "14px",
                      fontFamily: "Nunito",
                    }}
                    placeholder="Nhập từ khóa"
                    size="small"
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
          </Form>
        </Formik>
        <div className="number__level__content-table-wrap">
          <table>
            <tr>
              <th>STT</th>
              <th>Tên khách hàng</th>
              <th>Tên dịch vụ</th>
              <th>Thời gian cấp</th>
              <th>Hạn sử dụng</th>
              <th>Trạng thái</th>
              <th>Nguồn cấp</th>
              <th></th>
            </tr>
            {showTable()}
          </table>
        </div>
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
          className="number__level__content-pagination"
          classes={{ ul: classes.ul }}
        />
        <Link
          component={RouterLink}
          to="/level-number/add"
          className="wrap-btn"
        >
          <CreateBtn icon="bx bxs-plus-square" title="Cấp số mới" />
        </Link>
      </div>
    </div>
  );
};

export default ListNumberLevel;
