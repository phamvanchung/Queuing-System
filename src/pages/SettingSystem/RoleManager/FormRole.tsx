import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { makeStyles } from "@mui/styles";
import { Form, Formik } from "formik";
import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { COLORS } from "../../../assets/styles";
import Input from "../../../components/FormsUI/Input";
import User from "../../../components/User";
import "./styles.scss";

const checkBox = [
  {
    id: 1,
    label: "Tất cả",
  },
  {
    id: 2,
    label: "Chức năng x",
  },
  {
    id: 3,
    label: "Chức năng y",
  },
  {
    id: 4,
    label: "Chức năng z",
  },
];

const FormSettings = () => {
  const classes = useStyles();
  const location = useLocation();
  const slugAdd = location.pathname.toString().slice(-3);

  const breadcrumbsAdd = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Cài đặt hệ thống
    </Link>,
    <Link underline="hover" key="1" color="inherit" href="/setting-system/role">
      Quản lý vai trò
    </Link>,
    <div className="header-title">Thêm vai trò</div>,
  ];

  const breadcrumbsUpdate = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Cài đặt hệ thống
    </Link>,
    <Link underline="hover" key="1" color="inherit" href="/setting-system/role">
      Quản lý vai trò
    </Link>,
    <div className="header-title">Cập nhật vai trò</div>,
  ];

  const INITIAL_FORM_STATE = {
    nameRole: "",
    desc: "",
  };
  return (
    <div className="form__role__container">
      <div className="role__header">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {slugAdd === "add" ? breadcrumbsAdd : breadcrumbsUpdate}
        </Breadcrumbs>
        <User />
      </div>
      <div className="form__role__content">
        <h3>Danh sách vai trò </h3>
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
            <div className="form__action__role-wrap">
              <div className="form__action__role-title">Thông tin vai trò</div>
              <Grid container xs={12} sx={{ mt: 1, px: 2 }}>
                <Grid item xs={6}>
                  <label>
                    Tên vai trò <span className="span">*</span>
                  </label>
                  <Input name="nameRole" placeholder="Nhập tên vai trò" />

                  <label>Mô tả:</label>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={6}
                    placeholder="Nhập mô tả"
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                      fontSize: "16px",
                      color: " #A9A9B0",
                    }}
                  />
                  <div className="form__action__role-required">
                    <span>*</span> Là trường thông tin bắt buộc
                  </div>
                </Grid>
                <Grid item xs={6} sx={{ pl: 2 }}>
                  <label>
                    Phân quyền chức năng <span className="span">*</span>
                  </label>
                  <div className="form__action__role-wrapRight">
                    <div className="form__action__role-wrapCheckbox">
                      <h3>Nhóm chức năng A</h3>
                      <FormGroup>
                        {checkBox.map((item, idx) => (
                          <FormControlLabel
                            key={idx}
                            control={<Checkbox />}
                            label={item.label}
                            className={classes.checkbox}
                          />
                        ))}
                      </FormGroup>
                      <h3>Nhóm chức năng B</h3>
                      <FormGroup>
                        {checkBox.map((item, idx) => (
                          <FormControlLabel
                            key={idx}
                            control={<Checkbox />}
                            label={item.label}
                            className={classes.checkbox}
                          />
                        ))}
                      </FormGroup>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="form__action__role-btn">
        <Button
          component={RouterLink}
          to="/setting-system/role"
          variant="outlined"
          sx={{ mt: 2, mb: 2 }}
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
          sx={{ mt: 2, mb: 2, ml: 2 }}
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

export default FormSettings;

const useStyles = makeStyles(() => ({
  checkbox: {
    "& .MuiCheckbox-root": {
      padding: "5px",
    },
    "& .MuiTypography-root": {
      fontFamily: "Nunito",
      fontWeight: 600,
      fontSize: "16px",
    },
  },
}));
