import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import * as React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import { COLORS } from "../../assets/styles";
import sidebar_routes from "../../constants/JsonData/sidebar_routes.json";
import "./styles.scss";

// const drawerWidth = 200;

const SidebarItem = (props: any) => {
  const active = props.active ? "active" : "";
  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const match = useRouteMatch();

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: "auto",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "auto",
            boxSizing: "border-box",
            border: "none",
            overflowY: "hidden",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div className="sidebar__logo">
          <img src={logo} alt="company logo" />
        </div>

        <List>
          {sidebar_routes.map((item, index) => (
            <Link to={item.route} key={index} className="sidebar__link">
              <SidebarItem
                title={item.display_name}
                icon={item.icon}
                active={item.route === match.url}
              />
            </Link>
          ))}
        </List>

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
          }}
          className="btn"
          onClick={handleLogout}
        >
          Đăng xuất
        </Button>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
