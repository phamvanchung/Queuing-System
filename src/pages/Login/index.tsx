// import imgBackground from "../../assets/images/Bg1.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import * as React from "react";
import imgLogo from "../../assets/images/Logo.svg";
import { COLORS } from "../../assets/styles";
import { useStyles } from "./styles";

interface Props {}
const theme = createTheme();

interface State {
  password: string;
  showPassword: boolean;
}

const Login = (props: Props) => {
  const classes = useStyles();

  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

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
              // onSubmit={handleSubmit}
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
                  name="email"
                  autoComplete="email"
                  autoFocus
                  hiddenLabel
                  inputProps={{
                    style: {
                      padding: 10,
                    },
                  }}
                  className={classes.input}
                />
              </div>
              <div className={classes.wrapperForm}>
                <Typography className={classes.title}>Mật khẩu *</Typography>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  fullWidth
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  inputProps={{
                    style: {
                      padding: 10,
                    },
                  }}
                  className={classes.input}
                />
              </div>
              <Grid item xs>
                <Link
                  href="#"
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
    </ThemeProvider>
  );
};

export default Login;
