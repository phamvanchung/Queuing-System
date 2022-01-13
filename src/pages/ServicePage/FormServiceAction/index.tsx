import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Grid } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Link from "@mui/material/Link";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Form, Formik } from "formik";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { COLORS, useStyles } from "../../../assets/styles";
import Input from "../../../components/FormsUI/Input";
import User from "../../../components/User";
import "./styles.scss";

const FormAction = () => {
  const classes = useStyles();

  const INITIAL_FORM_STATE = {
    serviceId: "",
    nameService: "",
    desc: "",
    sort: "",
    to: "",
    prefix: "",
    surfix: "",
  };
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Dịch vụ
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      Danh sách dịch vụ
    </Link>,
    <div className="header-title">Thêm dịch vụ</div>,
  ];

  return (
    <div className="form__action__service-container">
      <div className="form__action__service-header">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <User />
      </div>
      <div className="form__action__service-content">
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
          <Form>
            <div className="form__action__service-wrap">
              <div className="form__action__service-title">
                Thông tin dịch vụ
              </div>
              <Grid container xs={12} sx={{ mt: 1, px: 2 }}>
                <Grid item xs={6} sx={{ pr: "20px" }}>
                  <label>
                    Mã dịch vụ: <span className="span">*</span>
                  </label>
                  <Input name="serviceId" placeholder="Nhập mã dịch vụ" />
                  <label>
                    Tên dịch vụ : <span className="span">*</span>
                  </label>
                  <Input
                    name="nameService"
                    placeholder="Nhập tên dịch vụ "
                    style={{
                      margin: 0,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <label>Mô tả:</label>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={6}
                    placeholder="Mô tả dịch vụ"
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                  />
                </Grid>
              </Grid>
              <div className="form__action__service-title">Quy tắc cấp số</div>
              <FormGroup sx={{ mx: 3 }}>
                <div className="form__action__service-wrap-checked">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Tăng tự động từ:"
                    className={classes.span}
                  />
                  <Input
                    name="sort"
                    fullWidth={false}
                    style={{ width: "5%", padding: 0, margin: 0 }}
                  />
                  <span className="to">đến</span>
                  <Input
                    name="to"
                    fullWidth={false}
                    style={{ width: "5%", padding: 0, margin: 0 }}
                  />
                </div>
                <div className="form__action__service-wrap-checked">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Prefix:"
                    className={classes.span}
                  />
                  <Input
                    name="prefix"
                    fullWidth={false}
                    style={{ width: "5%", padding: 0, margin: 0 }}
                  />
                </div>
                <div className="form__action__service-wrap-checked">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Surfix:"
                    className={classes.span}
                  />
                  <Input
                    name="surfix"
                    fullWidth={false}
                    style={{ width: "5%", padding: 0, margin: 0 }}
                  />
                </div>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Reset mỗi ngày"
                  className={classes.span}
                />
              </FormGroup>
              <label className="form__action__service-helper">
                <span className="span">*</span> Là trường thông tin bắt buộc
              </label>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="form__action__service-btn">
        <Button
          component={RouterLink}
          to="/service"
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
          Thêm dịch vụ
        </Button>
      </div>
    </div>
  );
};

export default FormAction;
