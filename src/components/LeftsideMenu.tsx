import * as React from "react";
import Box from "@mui/material/Box";
import { ListItem, List, ListItemIcon, ListItemText } from "@material-ui/core";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import HistoryIcon from "@mui/icons-material/History";
import ExploreIcon from "@mui/icons-material/Explore";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@material-ui/core/styles";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const drawerWidth = 240;

export default function LeftsideMenu() {
  const navigate = useNavigate();
  let isLogedIn = true;
  const itemsList = [
    {
      text: "Overview",
      icon: <MenuIcon style={{ fill: "#6157f4" }} />,
      onClick: () => navigate("/overview"),
    },
    {
      text: "History",
      icon: <HistoryIcon style={{ fill: "#6157f4" }} />,
      onClick: () => navigate("/history"),
    },
    {
      text: "Explore",
      icon: <ExploreIcon style={{ fill: "#6157f4" }} />,
      onClick: () => navigate("/explore"),
    },
    {
      text: "Exchange",
      icon: <CurrencyExchangeIcon style={{ fill: "#6157f4" }} />,
      onClick: () => navigate("/exchange"),
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar
          style={{
            background: "linear-gradient(45deg, #6B6DFE 30%, #B153FF 90%)",
          }}
        >
          <Typography variant="h6" noWrap component="div">
            Crypto Trading Game
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        style={{
          background: "linear-gradient(45deg, #6B6DFE 30%, #B153FF 90%)",
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {isLogedIn ? (
            itemsList.map((item, index) => {
              const { text, icon, onClick } = item;
              return (
                isLogedIn && (
                  <ListItem button key={text} onClick={onClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItem>
                )
              );
            })
          ) : (
            <ListItem button key="Login" onClick={() => navigate("/")}>
              <ListItemIcon>
                {" "}
                <MenuIcon style={{ fill: "#6157f4" }} />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
          )}
        </List>
      </Drawer>
    </Box>
  );
}
