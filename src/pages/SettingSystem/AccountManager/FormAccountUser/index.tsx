import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Form, Formik } from "formik";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { COLORS, useStyles } from "../../../../assets/styles";
import Input from "../../../../components/FormsUI/Input";
import Placeholder from "../../../../components/Placeholder";
import User from "../../../../components/User";
import "./styles.scss";

const FormEquipment = () => {
  const classes = useStyles();
  const [typeEquipment, setTypeEquipment] = React.useState("");

  const INITIAL_FORM_STATE = {
    username: "",
    account: "",
    email: "",
    password: "",
    phone: "",
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Cài đặt hệ thống
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      Quản lý tài khoản
    </Link>,
    <div className="header-title">Thêm tài khoản</div>,
  ];
  return (
    <div className="add__account_container">
      <div className="add__account_header">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <User />
      </div>

      {/* begin content */}
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        // validationSchema={FORM_EQUIPMENT_VALIDATION}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div className="add__account_content">
            <h3>Quản lý tài khoản</h3>

            <div className="add__account_content-wrap">
              <div className="add__account_content-title">
                Thông tin tài khoản
              </div>
              <div className="add__account_content-wrapper">
                <div className="add__account_content-wrap-left">
                  <label>
                    Họ tên <span className="span">*</span>
                  </label>
                  <Input name="username" placeholder="Nhập họ tên" />
                  <label>
                    Số điện thoại <span className="span">*</span>
                  </label>
                  <Input name="phone" placeholder="Nhập số điện thoại" />
                  <label>
                    Email <span className="span">*</span>
                  </label>
                  <Input name="email" placeholder="Nhập email" />
                  <FormControl size="small" sx={{ width: "100%", mb: "20px" }}>
                    <label>
                      Vai trò <span className="span">*</span>
                    </label>
                    <Select
                      value={typeEquipment}
                      onChange={(event) => setTypeEquipment(event.target.value)}
                      displayEmpty
                      className="add__account_content-select-item"
                      inputProps={{
                        classes: {
                          icon: classes.icon,
                        },
                      }}
                      renderValue={
                        typeEquipment !== ""
                          ? undefined
                          : () => <Placeholder>Chọn vai trò</Placeholder>
                      }
                    >
                      <MenuItem value={10}>Kế toán</MenuItem>
                      <MenuItem value={20}>Quản lý</MenuItem>
                      <MenuItem value={20}>Admin</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="add__account_content-wrap-right">
                  <label>
                    Tên đăng nhập: <span className="span">*</span>
                  </label>
                  <Input name="account" placeholder="Nhập tên đăng nhập" />
                  <label>
                    Mật khẩu: <span className="span">*</span>
                  </label>
                  <Input
                    name="password"
                    placeholder="Nhập mật khẩu"
                    type="password"
                  />
                  <label>
                    Nhập lại mật khẩu <span className="span">*</span>
                  </label>
                  <Input
                    name="password"
                    placeholder="Nhập mật khẩu"
                    type="password"
                  />
                  <FormControl size="small" sx={{ width: "100%", mb: "20px" }}>
                    <label>
                      Tình trạng <span className="span">*</span>
                    </label>
                    <Select
                      value={typeEquipment}
                      onChange={(event) => setTypeEquipment(event.target.value)}
                      displayEmpty
                      className="add__account_content-select-item"
                      inputProps={{
                        classes: {
                          icon: classes.icon,
                        },
                      }}
                      renderValue={
                        typeEquipment !== ""
                          ? undefined
                          : () => <Placeholder>Hoạt động</Placeholder>
                      }
                    >
                      <MenuItem value={10}>Ngưng hoạt động</MenuItem>
                      <MenuItem value={20}>Hoạt động</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="add__account_content-helper">
                <span className="span">*</span> Là trường thông tin bắt buộc
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      <div className="add__account_content-btn">
        <Button
          component={RouterLink}
          to="/list-equipment"
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
          style={{
            color: COLORS.COLOR_BTN,
            borderRadius: "8px",
            textTransform: "none",
            height: "40px",
            width: "162px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: COLORS.COLOR_BTN,
            backgroundColor: "#FFF2E7",
          }}
        >
          Hủy bỏ
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2, ml: 2 }}
          style={{
            backgroundColor: COLORS.COLOR_BTN,
            borderRadius: "8px",
            textTransform: "none",
            height: "40px",
            width: "162px",
          }}
        >
          Thêm
        </Button>
      </div>
    </div>
  );
};

export default FormEquipment;
