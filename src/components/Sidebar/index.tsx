import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import logo from "../../assets/images/Logo.svg";
import { COLORS } from "../../assets/styles";
import sidebar_routes from "../../constants/JsonData/sidebar_routes.json";
import SideBarItem from "./SidebarItem";
import "./styles.scss";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Box sx={{ display: "flex" }}>
      <div className="sidebar__content">
        <div className="sidebar__logo">
          <img src={logo} alt="company logo" />
        </div>

        <ul>
          {sidebar_routes.map((item, index) => (
            <SideBarItem item={item} key={index} />
          ))}
        </ul>

        <Button
          variant="contained"
          size="medium"
          startIcon={<LogoutIcon />}
          style={{
            width: "80%",
            margin: "0 auto",
            textTransform: "none",
            backgroundColor: COLORS.COLOR_BTN_WHITE,
            fontFamily: "Nunito",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "24px",
            marginTop: "150px",
            color: COLORS.COLOR_TITLE,
            boxShadow: "none",
            height: "48px",
            display: "flex",
          }}
          className="btn"
          onClick={handleLogout}
        >
          Đăng xuất
        </Button>
      </div>
    </Box>
  );
};

export default Sidebar;
