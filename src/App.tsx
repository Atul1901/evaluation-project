import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
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
