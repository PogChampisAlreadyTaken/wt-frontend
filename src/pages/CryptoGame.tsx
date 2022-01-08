import { Grid } from "@mui/material";
import * as React from "react";
import { CoinTable, GameDashboard } from "../components/cryptoGame";

export function CryptoGame() {
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
