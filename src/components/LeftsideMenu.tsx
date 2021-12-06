import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from '@mui/icons-material/Menu';
import HistoryIcon from '@mui/icons-material/History';
import ExploreIcon from '@mui/icons-material/Explore';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar style={{ background: 'linear-gradient(45deg, #6B6DFE 30%, #B153FF 90%)' }}>
          <Typography variant="h6" noWrap component="div">
            Crypto Trading Game
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
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
          {["Overview", "History", "Explore", "Exchange"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index == 0 ? <MenuIcon style={{fill: "#6157f4"}}/> : ""}{index == 1 ? <HistoryIcon style={{fill: "#6157f4"}}/> : ""}{index == 2 ? <ExploreIcon style={{fill: "#6157f4"}}/> : ""}{index == 3 ? <CurrencyExchangeIcon style={{fill: "#6157f4"}}/> : ""}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
