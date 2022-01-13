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
import { COLORS, useStyles } from "../../../assets/styles";
import Input from "../../../components/FormsUI/Input";
import Placeholder from "../../../components/Placeholder";
import User from "../../../components/User";
import { FORM_EQUIPMENT_VALIDATION } from "../../../utils/validate";
import "./styles.scss";

const FormEquipment = () => {
  const classes = useStyles();
  const [typeEquipment, setTypeEquipment] = React.useState("");

  const INITIAL_FORM_STATE = {
    id: "",
    name: "",
    ip: "",
    username: "",
    password: "",
    useService: "",
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Thiết bị
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      Danh sách thiết bị
    </Link>,
    <div className="header-title">Thêm thiết bị</div>,
  ];
  return (
    <div className="add__equipment_container">
      <div className="add__equipment_header">
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
        validationSchema={FORM_EQUIPMENT_VALIDATION}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div className="add__equipment_content">
            <h3>Quản lý thiết bị</h3>

            <div className="add__equipment_content-wrap">
              <div className="add__equipment_content-title">
                Thông tin thiết bị
              </div>
              <div className="add__equipment_content-wrapper">
                <div className="add__equipment_content-wrap-left">
                  <label>
                    Mã thiết bị: <span className="span">*</span>
                  </label>
                  <Input name="id" placeholder="Nhập mã thiết bị" />
                  <label>
                    Tên thiết bị: <span className="span">*</span>
                  </label>
                  <Input name="name" placeholder="Nhập tên thiết bị" />
                  <label>
                    Địa chỉ IP:<span className="span">*</span>
                  </label>
                  <Input name="ip" placeholder="Nhập địa chỉ IP" />
                </div>
                <div className="add__equipment_content-wrap-right">
                  <FormControl size="small" sx={{ width: "100%", mb: "20px" }}>
                    <label>
                      Loại thiết bị: <span className="span">*</span>
                    </label>
                    <Select
                      value={typeEquipment}
                      onChange={(event) => setTypeEquipment(event.target.value)}
                      displayEmpty
                      className="add__equipment_content-select-item"
                      inputProps={{
                        classes: {
                          icon: classes.icon,
                        },
                      }}
                      renderValue={
                        typeEquipment !== ""
                          ? undefined
                          : () => <Placeholder>Tất cả</Placeholder>
                      }
                    >
                      <MenuItem value={10}>Kiosk</MenuItem>
                      <MenuItem value={20}>Display counter</MenuItem>
                    </Select>
                  </FormControl>
                  <label>
                    Tên đăng nhập: <span className="span">*</span>
                  </label>
                  <Input name="username" placeholder="Nhập tài khoản" />
                  <label>
                    Mật khẩu: <span className="span">*</span>
                  </label>
                  <Input
                    name="password"
                    placeholder="Nhập mật khẩu"
                    type="password"
                  />
                </div>
              </div>
              <div className="add__equipment_content-input">
                <label>
                  Loại thiết bị: <span className="span">*</span>
                </label>
                <Input name="useService" placeholder="Nhập dịch vụ sử dụng" />
              </div>
              <div className="add__equipment_content-helper">
                <span className="span">*</span> Là trường thông tin bắt buộc
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      <div className="add__equipment_content-btn">
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
          Thêm thiết bị
        </Button>
      </div>
    </div>
  );
};

export default FormEquipment;
