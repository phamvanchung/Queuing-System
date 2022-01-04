import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import * as React from "react";
import logo from "../../assets/images/Logo.svg";
import { COLORS } from "../../assets/styles";
import sidebar_routes from "../../constants/JsonData/sidebar_routes.json";
import "./styles.scss";

interface Props {}

const drawerWidth = 200;

const Sidebar = (props: Props) => {
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

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            border: "none",
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
            <a href={item.route} key={index} className="sidebar__link">
              <SidebarItem
                title={item.display_name}
                icon={item.icon}
                // active={item.route === match.url}
              />
            </a>
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
        >
          Đăng xuất
        </Button>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
