import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
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
import Paper from "@mui/material/Paper";
import * as React from "react";
import imgLogo from "../../assets/images/Logo.svg";
import { COLORS } from "../../assets/styles";
import { useStyles } from "./styles";

interface Props {}

interface State {
  password: string;
  confirmPw: string;
}

const ChangePass = (props: Props) => {
  const classes = useStyles();

  const [values, setValues] = React.useState<State>({
    password: "",
    confirmPw: "",
  });

  const [showPass, setShowPass] = React.useState({
    showPassword: false,
    showConfirmPw: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPass({
      ...showPass,
      showPassword: !showPass.showPassword,
    });
  };

  const handleClickShowConfirmPw = () => {
    setShowPass({
      ...showPass,
      showConfirmPw: !showPass.showConfirmPw,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  };

  return (
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
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
            className={classes.form}
          >
            <h4 className={classes.h4}>Đặt lại mật khẩu mới</h4>
            <div className={classes.wrapperForm}>
              <Typography className={classes.title}>Mật khẩu</Typography>
              <OutlinedInput
                name="password"
                type={showPass.showPassword ? "text" : "password"}
                value={values.password}
                fullWidth
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPass.showPassword ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
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
            <div className={classes.wrapperForm}>
              <Typography className={classes.title}>
                Nhập lại mật khẩu
              </Typography>
              <OutlinedInput
                name="confirmPw"
                type={showPass.showConfirmPw ? "text" : "password"}
                value={values.confirmPw}
                fullWidth
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPw}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPass.showConfirmPw ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
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

            <div className={classes.wrapBtn}>
              <Button
                type="submit"
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
                Tiếp tục
              </Button>
            </div>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={false} sm={4} md={7} className={classes.img} />
    </Grid>
  );
};

export default ChangePass;
