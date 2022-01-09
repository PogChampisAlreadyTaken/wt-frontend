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
import animationData from "../components/animations/crypto-logo.json";
import Lottie from "react-lottie-player";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
const drawerWidth = 240;

export default function LeftsideMenu() {
  const navigate = useNavigate();
  let isLogedIn = true;
  const itemsList = [
    {
      text: "Overview",
      icon: <MenuIcon style={{ fill: "#24695c" }} />,
      onClick: () => navigate("/overview"),
    },
    {
      text: "History",
      icon: <HistoryIcon style={{ fill: "#24695c" }} />,
      onClick: () => navigate("/history"),
    },
    {
      text: "Explore",
      icon: <ExploreIcon style={{ fill: "#24695c" }} />,
      onClick: () => navigate("/explore"),
    },
    {
      text: "CryptoGame",
      icon: <SportsEsportsIcon style={{ fill: "#24695c" }} />,
      onClick: () => navigate("/game"),
    },
    {
      text: "Ranking",
      icon: <EmojiEventsIcon style={{ fill: "#24695c" }} />,
      onClick: () => navigate("/ranking"),
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1300,
          ml: `${drawerWidth}px`,
          background: "#fff",
          color: "#24695c",
        }}
      >
        <Toolbar
          style={{
            background: "#fff",
            color: "#24695c",
          }}
        >
          <div style={{ width: drawerWidth - 48, marginRight: 24 }}>
            <Lottie
              loop
              animationData={animationData}
              play
              style={{ width: 45, height: 45, margin: "auto" }}
            />
          </div>

          <Typography variant="h6" noWrap component="div">
            Crypto Trading Game
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        style={{
          background: "#fff",
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#fff",
            color: "#fff",
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
                    <ListItemText
                      primary={text}
                      style={{ color: "#24695c", fontWeight: "bold" }}
                    />
                  </ListItem>
                )
              );
            })
          ) : (
            <ListItem button key="Login" onClick={() => navigate("/")}>
              <ListItemIcon>
                {" "}
                <MenuIcon style={{ fill: "#24695c" }} />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
          )}
        </List>
      </Drawer>
    </Box>
  );
}
