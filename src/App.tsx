import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./Dash.css";
// import Sidenav from "./components/Sidenav";
import CompaniesScreen from "./pages/CompaniesScreen";
import UsersScreen from "./pages/UsersScreen";
import RoleScreen from "./pages/RoleScreen";
import WholeSaler from "./pages/WholeSaler";
import SideBar from "./components/SideBar";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div style={{ display: "flex" }}>
          <SideBar />
          <div style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/userscreen" element={<UsersScreen />} />
              <Route path="/" element={<RoleScreen />} />
              <Route path="/companies" element={<CompaniesScreen />} />
              <Route path="/wholesaler" element={<WholeSaler />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      <Navbar />
    </>
  );
}

export default App;
