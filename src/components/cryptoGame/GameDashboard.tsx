import { Grid, Typography } from "@mui/material";
import * as React from "react";
import CapitalCard from "../cards/Capital";
import Portfolio from "../cards/Portfolio";
import RecentTransactions from "../cards/RecentTransactions";

export function GameDashboard() {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs={12}>
        <CapitalCard />
      </Grid>
      <Grid item xs={12}>
        <Portfolio />
      </Grid>
      <Grid item xs={12}>
        <RecentTransactions />
      </Grid>
    </Grid>
  );
}
