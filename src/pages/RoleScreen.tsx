import React from "react";
import { Box, Divider } from "@mui/material";
import Table from "../components/Table";
import TableHeading from "../components/TableHeading";

function RoleScreen() {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 50 + "px" }}>
        <TableHeading />
        <Divider />
        <Table />
      </Box>
    </>
  );
}

export default RoleScreen;
