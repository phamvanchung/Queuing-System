import React from "react";
import Sidebar from "../Sidebar";
import "./styles.scss";

const AdminLayout: React.FC = ({ children }) => {
  return (
    <div className="wrapper__container">
      <div className="wrapper__sidebar">
        <Sidebar />
      </div>
      <div className="wrapper__children">{children}</div>
    </div>
  );
};

export default AdminLayout;
