import React from "react";
import "./App.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";

// import Login from "./pages/Login";
// import ForgotPass from "./pages/ForgotPass";
// import ChangePass from "./pages/ChangePass";
import Profile from "./pages/ProfilePage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div className="App">
      <Profile />
    </div>
  );
};

export default App;
