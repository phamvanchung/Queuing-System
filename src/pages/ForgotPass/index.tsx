// import imgBackground from "../../assets/images/Bg1.svg";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import * as React from "react";
import imgLogo from "../../assets/images/Logo.svg";
import { COLORS } from "../../assets/styles";
import { useStyles } from "./styles";

interface Props {}

const Login = (props: Props) => {
  const classes = useStyles();

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
              <h4>Đặt lại mật khẩu</h4>
              <Typography className={classes.title}>
                Vui lòng nhập email để đặt lại mật khẩu của bạn *
              </Typography>
              <TextField
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                hiddenLabel
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
                }}
              >
                Hủy
              </Button>
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

export default Login;
