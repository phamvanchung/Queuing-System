import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import EquipmentPage from "../pages/EquipmentPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Dashboard />} />
      <Route path="/equipment" element={<EquipmentPage />} />
    </Switch>
  );
};

export default Routes;
