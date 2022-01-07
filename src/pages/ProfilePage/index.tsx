import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import * as React from "react";
import "./styles.scss";
import TextField from "../../components/TextField";

interface Props {}

const Profile = (props: Props) => {
  return (
    <div className="profile__container">
      <div className="profile__header">
        <span className="profile__title">Thông tin cá nhân</span>
        <div className="profile__user">
          <span className="profile__icon">
            <i className="bx bxs-bell"></i>
          </span>
          <div className="profile__wrap">
            <Avatar
              alt="avatar-user"
              src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"
            />

            <div className="profile__wrap-user">
              <div className="profile__hello">Xin chào</div>
              <span className="profile__name">Lê Quỳnh Ái Vân</span>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__content">
        <div className="profile__content-left">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <div className="profile__icon ">
                <i className="bx bx-camera"></i>
              </div>
            }
            style={{ cursor: "pointer" }}
          >
            <Avatar
              alt="avatar-user"
              className="profile__avatar"
              src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"
            />
          </Badge>
          <div className="profile__content-name">Lê Quỳnh Ái Vân</div>
        </div>
        <div className="profile__content-right">
          <Box className="profile__content-input-left">
            <TextField
              title="Tên người dùng"
              name="firstlastName"
              placeholder="Lê Quỳnh Ái Vân"
            />
            <TextField
              title="Số điện thoại"
              name="phoneNumber"
              placeholder="0767375921"
            />
            <TextField
              title="Email:"
              name="email"
              placeholder="adminSSO1@domain.com"
            />
          </Box>
          <Box className="profile__content-input-right">
            <TextField
              title="Tên đăng nhập"
              name="username"
              placeholder="lequynhaivan01"
            />
            <TextField
              title="Mật khẩu"
              name="password"
              placeholder="311940211"
            />
            <TextField title="Vai trò:" name="role" placeholder="Kế toán" />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Profile;
