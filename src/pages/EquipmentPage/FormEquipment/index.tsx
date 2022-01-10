import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";
import { COLORS, useStyles } from "../../../assets/styles";
import TextField from "../../../components/TextField";
import User from "../../../components/User";
import "./styles.scss";
import { Link as RouterLink } from "react-router-dom";

const FormEquipment = () => {
  const classes = useStyles();

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
      <div className="add__equipment_content">
        <h3>Quản lý thiết bị</h3>
        <div className="add__equipment_content-wrap">
          <div className="add__equipment_content-title">Thông tin thiết bị</div>
          <div className="add__equipment_content-wrapper">
            <div className="add__equipment_content-wrap-left">
              <TextField
                title="Mã thiết bị:"
                name="id"
                placeholder="Nhập mã thiết bị"
              />
              <TextField
                title="Tên thiết bị:"
                name="name"
                placeholder="Nhập tên thiết bị"
              />
              <TextField
                title="Địa chỉ IP:"
                name="ip"
                placeholder="Nhập địa chỉ IP"
              />
            </div>
            <div className="add__equipment_content-wrap-right">
              <FormControl sx={{ width: "100%", mb: "20px" }}>
                <label>Loại thiết bị:</label>
                <Select
                  // value={age}
                  // onChange={handleChange}
                  displayEmpty
                  className="add__equipment_content-select-item"
                  inputProps={{
                    classes: {
                      icon: classes.icon,
                    },
                  }}
                >
                  <MenuItem value={10}>Kiosk</MenuItem>
                  <MenuItem value={20}>Display counter</MenuItem>
                </Select>
              </FormControl>
              <TextField
                title="Tên đăng nhập:"
                name="usename"
                placeholder="Nhập tài khoản"
              />
              <TextField
                title="Mật khẩu:"
                name="password"
                placeholder="Nhập mật khẩu"
                type="password"
              />
            </div>
          </div>
          <div className="add__equipment_content-input">
            <TextField
              title="Dịch vụ sử dụng:"
              name="use-service"
              placeholder="Nhập dịch vụ sử dụng"
            />
          </div>
          <div className="add__equipment_content-helper">
            * Là trường thông tin bắt buộc
          </div>
        </div>
      </div>
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
