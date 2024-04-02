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
import { routes } from "../src/utils/routes";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div style={{ display: "flex" }}>
          <SideBar />
          <div style={{ flexGrow: 1 }}>
            <Routes>
              {routes.map((item, index) => (
                <Route path={item.path} element={<item.cName />} />
              ))}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      <Navbar />
    </>
  );
}

export default App;
