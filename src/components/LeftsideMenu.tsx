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
import { Button } from "@mui/material";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Portfolio, User } from "../model";
import LoginIcon from "@mui/icons-material/Login";

import { UserContext } from "../context/userContext";
import { CoinContext } from "../context/coinContext";

const drawerWidth = 240;

export default function LeftsideMenu() {
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const [allUsers, setAllUsers] = useLocalStorage<User[] | null>("users", []);
  const [userContext, setUserContext] = React.useContext(UserContext);
  const [coinContext, setCoinContext] = React.useContext(CoinContext);

  const navigate = useNavigate();

  let portFolioValue = 0;

  const itemsList = [
    {
      text: "Overview",
      icon: <MenuIcon style={{ fill: "#24695c" }} />,
      onClick: () => navigate("/overview"),
      isPrivate: true,
    },
    {
      text: "History",
      icon: <HistoryIcon style={{ fill: "#24695c" }} />,
      onClick: () => navigate("/history"),
      isPrivate: true,
    },
    {
      text: "Explore",
      icon: <ExploreIcon style={{ fill: "#24695c" }} />,
      onClick: () => navigate("/explore"),
      isPrivate: false,
    },
    {
      text: "CryptoGame",
      icon: <SportsEsportsIcon style={{ fill: "#24695c" }} />,
      onClick: () => navigate("/game"),
      isPrivate: true,
    },
    {
      text: "Ranking",
      icon: <EmojiEventsIcon style={{ fill: "#24695c" }} />,
      onClick: () => navigate("/ranking"),
      isPrivate: false,
    },
  ];

  const getRecords = (): Portfolio[] => {
    const portfolio = userContext?.gameStats.portfolio;
    const coinArray = Array.from(portfolio?.values() ?? []);
    return coinArray;
  };

  getRecords().map((portfolio, index) => {
    const coin = coinContext.coins.find((coin) => coin._id === portfolio.name);
    const price = coin?.market_data?.current_price ?? 0;
    portFolioValue += price * portfolio.amount;
  });

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
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ width: drawerWidth - 48, marginRight: 24 }}>
              <Lottie
                loop
                animationData={animationData}
                play
                style={{ width: 45, height: 45, margin: "auto" }}
              />
            </div>
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{ margin: "auto" }}
            >
              Crypto Trading Game
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            {userContext !== null ? (
              <>
                <Typography style={{ margin: "auto", fontWeight: "bolder" }}>
                  {userContext.name}
                </Typography>
                <img
                  src={String(userContext.photoUrl)}
                  style={{
                    width: "35px",
                    height: "35px",
                    marginLeft: "5px",
                    marginRight: "10px",
                    borderRadius: "50%",
                  }}
                />
                <Typography
                  style={{
                    margin: "auto",
                    fontWeight: "bolder",
                    color: "blue",
                  }}
                >
                  {"Current balance: "}${portFolioValue.toFixed(2)}
                </Typography>
                <Button
                  variant="outlined"
                  style={{
                    background: "#005249",
                    color: "#fff",
                    marginLeft: 10,
                    alignSelf: "right",
                  }}
                  onClick={() => {
                    setUser(null);
                    setAllUsers(null);
                    setUserContext(null);
                    navigate("/");
                  }}
                >
                  Sign Out
                </Button>
              </>
            ) : null}
          </div>
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
          {userContext == null ? (
            <ListItem button key={"Log in"} onClick={() => navigate("/")}>
              <ListItemIcon>{<LoginIcon />}</ListItemIcon>
              <ListItemText
                primary={"Log in"}
                style={{ color: "#24695c", fontWeight: "bold" }}
              />
            </ListItem>
          ) : null}
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            if (item.isPrivate && userContext == null) {
              return null;
            }
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText
                  primary={text}
                  style={{ color: "#24695c", fontWeight: "bold" }}
                />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}
