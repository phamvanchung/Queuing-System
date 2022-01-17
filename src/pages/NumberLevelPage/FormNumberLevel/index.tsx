import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Button } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Form, Formik } from "formik";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { COLORS } from "../../../assets/styles";
import FormSelect from "../../../components/FormsUI/Select";
import PopupNumber from "../../../components/PopupNumber";
import User from "../../../components/User";
import serviceName from "../../../constants/JsonData/select/serviceName.json";
import "./styles.scss";

const FormNumberLevel = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/level-number">
      Cấp số
    </Link>,
    <Link underline="hover" key="1" color="inherit" href="/level-number">
      Danh sách cấp số
    </Link>,
    <div className="header-title">Cấp số mới</div>,
  ];
  const INITIAL_FORM_STATE = {
    serviceName: "",
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
          <div className="number__level__form-content">
            <h3>Quản lý cấp số</h3>
            <div className="number__level__form-wrap">
              <span className="number__level__wrap-title">Cấp số mới</span>
              <label>Dịch vụ khách hàng lựa chọn</label>
              <FormSelect
                options={serviceName}
                name="serviceName"
                style={{ width: "30%", marginTop: "10px" }}
              />
              <div className="number__level__wrap-btn">
                <Button
                  component={RouterLink}
                  to="/level-number"
                  variant="outlined"
                  sx={{ mt: 2, mb: 2 }}
                  style={{
                    color: COLORS.COLOR_BTN,
                    borderRadius: "8px",
                    textTransform: "none",
                    width: "115px",
                    height: "40px",
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
                    width: "115px",
                    height: "40px",
                  }}
                  onClick={handleOpen}
                >
                  In số
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      <PopupNumber open={open} handleClose={handleClose} />
    </div>
  );
};

export default FormNumberLevel;
