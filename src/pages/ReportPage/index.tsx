import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";
import { Form, Formik } from "formik";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import CreateBtn from "../../components/CreateBtn";
import DataPicker from "../../components/DatePicker";
import Placeholder from "../../components/Placeholder";
import User from "../../components/User";
import { reports } from "../../constants/dataTable";
import "./styles.scss";

const Report = () => {
  const classes = useStyles();
  const [statusAction, setStatusAction] = React.useState("");
  const [personName, setPersonName] = React.useState<string[]>([]);

  const serviceName = [
    "Khám tim mạch",
    "Khám mắt",
    "Khám tổng quát",
    "Khám sản - phụ khoa",
    "Khám hô hấp",
  ];

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Báo cáo
    </Link>,
    <div className="header-title">Lập báo cáo</div>,
  ];
  const INITIAL_FORM_STATE = {
    serviceName: "",
    status: "",
    powerSupply: "",
  };

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const showTable = () => {
    let result = null;
    if (reports && reports.length > 0) {
      result = reports.map((report, index) => {
        return (
          <tr className="list__service_content-table-content" key={index}>
            <td>{report.stt}</td>
            <td>{report.nameService}</td>
            <td>{report.startTime}</td>
            <td>
              <i className={`bx bxs-circle ${report.status}`}></i>
              {report.statusContent}
            </td>
            <td>{report.powerSupply}</td>
          </tr>
        );
      });
    }
    return result;
  };

  return (
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
        <div className="report__container">
          <div className="report__header">
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
            <User />
          </div>
          <div className="report__content">
            <div className="report__time">
              <label>Chọn thời gian</label>
              <DataPicker />
            </div>
            {/* begin table*/}
            <div className="report__content-table-wrap">
              <table className="report__content-table">
                <tr className="report__content-table-title">
                  <th className="report__content-table-th">
                    <FormControl
                      size="small"
                      sx={{ width: "100%", color: "#fff" }}
                    >
                      <Select
                        displayEmpty
                        value={statusAction}
                        onChange={(event) =>
                          setStatusAction(event.target.value)
                        }
                        renderValue={
                          statusAction !== ""
                            ? undefined
                            : () => (
                                <Placeholder className={classes.placeholder}>
                                  Số thứ tự
                                </Placeholder>
                              )
                        }
                        className={classes.select}
                        IconComponent={() => (
                          <div className={classes.wrapIcon}>
                            <i
                              className="bx bxs-up-arrow "
                              style={{ fontSize: 8, color: "#fff" }}
                            ></i>
                            <i
                              className="bx bxs-down-arrow"
                              style={{ fontSize: 8, color: "#fff" }}
                            ></i>
                          </div>
                        )}
                      >
                        <MenuItem value={10}>2040001</MenuItem>
                        <MenuItem value={20}>2060001</MenuItem>
                        <MenuItem value={30}>2050002</MenuItem>
                      </Select>
                    </FormControl>
                  </th>
                  <th className="report__content-table-th">
                    <FormControl
                      size="small"
                      sx={{ width: "100%", color: "#fff" }}
                    >
                      <Select
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        multiple
                        renderValue={
                          statusAction !== ""
                            ? undefined
                            : () => (
                                <Placeholder className={classes.placeholder}>
                                  Thời gian cấp
                                </Placeholder>
                              )
                        }
                        className={classes.select}
                        IconComponent={() => (
                          <div className={classes.wrapIcon}>
                            <i
                              className="bx bxs-up-arrow "
                              style={{ fontSize: 8, color: "#fff" }}
                            ></i>
                            <i
                              className="bx bxs-down-arrow"
                              style={{ fontSize: 8, color: "#fff" }}
                            ></i>
                          </div>
                        )}
                      >
                        {serviceName.map((name) => (
                          <MenuItem key={name} value={name}>
                            <ListItemText primary={name} />
                            <Checkbox checked={personName.indexOf(name) > -1} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </th>
                  <th className="report__content-table-th">
                    <FormControl
                      size="small"
                      sx={{ width: "100%", color: "#fff" }}
                    >
                      <Select
                        displayEmpty
                        value={statusAction}
                        onChange={(event) =>
                          setStatusAction(event.target.value)
                        }
                        renderValue={
                          statusAction !== ""
                            ? undefined
                            : () => (
                                <Placeholder className={classes.placeholder}>
                                  Thời gian cấp
                                </Placeholder>
                              )
                        }
                        className={classes.select}
                        IconComponent={() => (
                          <div className={classes.wrapIcon}>
                            <i
                              className="bx bxs-up-arrow "
                              style={{ fontSize: 8, color: "#fff" }}
                            ></i>
                            <i
                              className="bx bxs-down-arrow"
                              style={{ fontSize: 8, color: "#fff" }}
                            ></i>
                          </div>
                        )}
                      >
                        <MenuItem value={10}>07:10 01/10/2021</MenuItem>
                        <MenuItem value={20}>07:15 01/10/2021</MenuItem>
                      </Select>
                    </FormControl>
                  </th>
                  <th className="report__content-table-th">
                    <FormControl
                      size="small"
                      sx={{ width: "100%", color: "#fff" }}
                    >
                      <Select
                        displayEmpty
                        value={statusAction}
                        onChange={(event) =>
                          setStatusAction(event.target.value)
                        }
                        renderValue={
                          statusAction !== ""
                            ? undefined
                            : () => (
                                <Placeholder className={classes.placeholder}>
                                  Tình trạng
                                </Placeholder>
                              )
                        }
                        className={classes.select}
                        IconComponent={() => (
                          <div className={classes.wrapIcon}>
                            <i
                              className="bx bxs-up-arrow "
                              style={{ fontSize: 8, color: "#fff" }}
                            ></i>
                            <i
                              className="bx bxs-down-arrow"
                              style={{ fontSize: 8, color: "#fff" }}
                            ></i>
                          </div>
                        )}
                      >
                        <MenuItem value={10}>Đang chờ</MenuItem>
                        <MenuItem value={20}>Đã sử dụng</MenuItem>
                        <MenuItem value={20}>Bỏ qua</MenuItem>
                      </Select>
                    </FormControl>
                  </th>
                  <th className="report__content-table-th">
                    <FormControl
                      size="small"
                      sx={{ width: "100%", color: "#fff" }}
                    >
                      <Select
                        displayEmpty
                        value={statusAction}
                        onChange={(event) =>
                          setStatusAction(event.target.value)
                        }
                        renderValue={
                          statusAction !== ""
                            ? undefined
                            : () => (
                                <Placeholder className={classes.placeholder}>
                                  Nguồn cấp
                                </Placeholder>
                              )
                        }
                        className={classes.select}
                        IconComponent={() => (
                          <div className={classes.wrapIcon}>
                            <i
                              className="bx bxs-up-arrow "
                              style={{ fontSize: 8, color: "#fff" }}
                            ></i>
                            <i
                              className="bx bxs-down-arrow"
                              style={{ fontSize: 8, color: "#fff" }}
                            ></i>
                          </div>
                        )}
                      >
                        <MenuItem value={10}>Kiosk</MenuItem>
                        <MenuItem value={20}>Hệ thống</MenuItem>
                      </Select>
                    </FormControl>
                  </th>
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
              className="report__content-pagination"
              classes={{ ul: classes.ul }}
            />
            {/* btn detail */}
            <Link component={RouterLink} to="" className="wrap-btn">
              <CreateBtn title="Tải xuống" icon="bx bxs-download" />
            </Link>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Report;

const useStyles = makeStyles(() => ({
  select: {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiSelect-select": {
      fontWeight: "bold",
      fontSize: "16px",
      color: "#fff",
    },
  },
  placeholder: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
  },
  wrapIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginRight: 10,
  },
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
}));
