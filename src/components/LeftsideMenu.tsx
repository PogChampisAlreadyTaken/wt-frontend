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
import MenuIcon from "@mui/icons-material/Menu";
import HistoryIcon from "@mui/icons-material/History";
import ExploreIcon from "@mui/icons-material/Explore";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { ListItemButton } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const Drawer = () => {
    const history = useHistory();
    const itemsList = [
      {
        text: "Overview",
        icon: <MenuIcon />,
        onClick: () => history.push("/overview"),
      },
      {
        text: "History",
        icon: <HistoryIcon />,
        onClick: () => history.push("/history"),
      },
      {
        text: "Explore",
        icon: <ExploreIcon />,
        onClick: () => history.push("/explore"),
      },
      {
        text: "Exchange",
        icon: <ExploreIcon />,
        onClick: () => history.push("/exchange"),
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
            {itemsList.map((item, index) => {
              const { text, icon, onClick } = item;
              return (
                <ListItem button key={text} onClick={onClick}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      </Box>
    );
  };
}
