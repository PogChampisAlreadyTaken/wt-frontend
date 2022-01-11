import { Grid } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { CoinTable, GameDashboard } from "../components/cryptoGame";
import { UserContext } from "../context/userContext";

import { CoinContext } from "../context/coinContext";
import { getAllCoins } from "../request/coinService";
import { checkData } from "../model";

export function CryptoGame() {
  const [userContext, setUserContext] = React.useContext(UserContext);
  const [coinContext, setCoinContext] = React.useContext(CoinContext);

  React.useEffect(() => {
    if (checkData(coinContext)) {
      getAllCoins().then((coins) => setCoinContext(coins));
    }
  }, []);

  const nav = useNavigate();
  if (userContext === null) {
    nav("/");
  }

  return (
    <div>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={8}>
          <GameDashboard />
        </Grid>
        <Grid item xs={4}>
          <CoinTable />
        </Grid>
      </Grid>
    </div>
  );
}
