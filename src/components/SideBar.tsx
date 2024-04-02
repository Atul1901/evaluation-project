import React, { useState } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import "../App.css";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface MenuItem {
  name: string;
  link: string;
  id: number;
}

export default function SideBar() {
  const navigate = useNavigate();
  const menu: MenuItem[] = [
    {
      name: "Users",
      link: "/userscreen",
      id: 1,
    },
    {
      name: "Roles",
      link: "/",
      id: 2,
    },
    {
      name: "Companies",
      link: "/companies",
      id: 3,
    },
    {
      name: "Wholesalers",
      link: "/wholesaler",
      id: 4,
    },
  ];
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleSubmit = (route: string) => {
    // Handle form submission
    navigate(route);
  };

  //ustate for the colours of the selected sidebar icon
  // const [selected, setSelected] = React.useState(0);
  const [isId, setIsId] = useState<number>(-1);

  const handleSelect = (id: number, index: number) => {
    if (id === index + 1) {
      setIsId(id);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ zIndex: 1 }}>
          <IconButton></IconButton>
        </DrawerHeader>
        <Divider />
        {menu.map((item, index) => (
          <List key={index}>
            <ListItem
              onClick={() => {
                handleSelect(item.id, index);
                handleSubmit(item.link);
              }}
              disablePadding
              sx={{ display: "flex" }}
              className={isId === index + 1 ? "background-selected" : ""}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      backgroundColor: "#4D47C3",
                      borderRadius: 3,
                    }}
                    className={isId === index + 1 ? "selected" : ""}
                  ></div>
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
            </ListItem>
          </List>
        ))}
      </Drawer>
    </Box>
  );
}
