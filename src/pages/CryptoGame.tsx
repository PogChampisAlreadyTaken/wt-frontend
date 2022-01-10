import { Grid } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { CoinTable, GameDashboard } from "../components/cryptoGame";
import { UserContext } from "../context/userContext";

export function CryptoGame() {
  const [userContext, setUserContext] = React.useContext(UserContext);
  const nav = useNavigate();
  if (userContext === undefined) {
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
