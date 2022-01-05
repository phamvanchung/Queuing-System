import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { IconButton, InputAdornment, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { FormikProvider, useFormik } from "formik";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../../actions";
import imgLogo from "../../assets/images/Logo.svg";
import { COLORS } from "../../assets/styles";
import { State } from "../../reducers";
import { useStyles } from "./styles";

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const { isLoggedIn } = useSelector((state: State) => state.auth);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      dispatch(login(values.email, values.password));
    },
  });

  const { errors, touched, values, handleSubmit, getFieldProps } = formik;

  if (isLoggedIn) {
    history.push("/");
  }

  return (
    <FormikProvider value={formik}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          style={{
            backgroundColor: COLORS.BG_COLOR,
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={imgLogo} alt="Logo" className={classes.logo} />

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
              className={classes.form}
            >
              <div className={classes.wrapperForm}>
                <Typography className={classes.title}>
                  Tên đăng nhập *
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="email"
                  autoComplete="email"
                  autoFocus
                  hiddenLabel
                  inputProps={{
                    style: {
                      padding: "15 10px",
                    },
                  }}
                  className={classes.input}
                  {...getFieldProps("email")}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
              </div>
              <div className={classes.wrapperForm}>
                <Typography className={classes.title}>Mật khẩu *</Typography>

                <TextField
                  fullWidth
                  autoComplete="current-password"
                  type={showPassword ? "text" : "password"}
                  hiddenLabel
                  color="info"
                  {...getFieldProps("password")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword} edge="end">
                          {showPassword ? (
                            <VisibilityOutlinedIcon />
                          ) : (
                            <VisibilityOffOutlinedIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                  className={classes.input}
                />
              </div>
              <Grid item xs>
                <Link
                  component={RouterLink}
                  to="/forgot-password"
                  variant="body2"
                  style={{ textDecoration: "none", color: COLORS.COLOR_ORANGE }}
                >
                  Quên mật khẩu?
                </Link>
              </Grid>
              <div className={classes.wrapBtn}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{
                    backgroundColor: COLORS.COLOR_BTN,
                    borderRadius: "8px",
                    textTransform: "none",
                    height: "40px",
                    width: "162px",
                  }}
                >
                  Đăng nhập
                </Button>
              </div>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={false} sm={4} md={7} className={classes.img}>
          <div className={classes.wrapText}>
            <div className={classes.label}>Hệ thống</div>
            <div className={classes.desc}>Quản lý xếp hàng</div>
          </div>
        </Grid>
      </Grid>
    </FormikProvider>
  );
};

export default Login;
