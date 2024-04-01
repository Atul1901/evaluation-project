import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import sqaudralogo from "../logos/squadaralogo.png";
import zIndex from "@mui/material/styles/zIndex";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, zIndex: 1300 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#F1F0FA", zIndex: 1300 }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={sqaudralogo} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
            Squadra
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
