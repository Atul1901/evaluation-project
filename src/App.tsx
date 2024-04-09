import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import { routes } from "../src/utils/routes";
import "./App.css";
import Root from "./components/RootNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={<Root Component={item.cName} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
