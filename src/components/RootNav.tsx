import { FC } from "react";
import SideBar from "./SideBar";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Root: FC<{ Component: FC }> = ({ Component }) => {
  let location = useLocation();
  const path = location.pathname;

  const noSidebarPages = ["/signup", "/signin", "/"];

  return !noSidebarPages.includes(path) ? (
    <>
      <SideBar />
      <div style={{ marginLeft: "230px" }}>
        <Component />
      </div>

      <Navbar />
    </>
  ) : (
    <Component />
  );
};

export default Root;
