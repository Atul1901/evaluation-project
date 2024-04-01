import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { Box } from "@mui/material";

function RoleScreen() {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 20 + "px" }}>
        <h1>Users</h1>
      </Box>
    </>
  );
}

export default RoleScreen;
