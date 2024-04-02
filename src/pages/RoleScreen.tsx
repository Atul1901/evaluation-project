import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { Box, Divider } from "@mui/material";
import Table from "../components/Table";
import TableHeading from "../components/TableHeading";
import BasicPagination from "../components/BasicPagination";
import AddRoleModal from "../components/AddRoleModal";

function RoleScreen() {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 50 + "px" }}>
        <TableHeading />
        <Divider />
        <Table />
        <div className="pagination">
          <BasicPagination />
        </div>
      </Box>
    </>
  );
}

export default RoleScreen;
