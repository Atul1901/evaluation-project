import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import sqaudralogo from "../utils/assets/logos/squadaralogo.png";

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
            <img src={sqaudralogo} alt="this is the logo of squadra" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "black",
              fontFamily: "Prompt",
              fontWeight: 600,
              fontSize: 24 + "px",
            }}
          >
            Squadra
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
