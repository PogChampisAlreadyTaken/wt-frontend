import { Grid, Typography } from "@mui/material";
import * as React from "react";
import CapitalCard from "../cards/Capital";
import PortfolioCard from "../cards/Portfolio";
import RecentTransactions from "../cards/RecentTransactions";
import { CoinContext } from "../../context/coinContext";
import { getAllCoins } from "../../request/coinService";
import { checkData } from "../../model";

export function GameDashboard() {
  const [coinContext, setCoinContext] = React.useContext(CoinContext);

  React.useEffect(() => {
    if (checkData(coinContext)) {
      getAllCoins().then((coins) => setCoinContext(coins));
    }
  }, []);
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs={12}>
        <CapitalCard />
      </Grid>
      <Grid item xs={12}>
        <PortfolioCard />
      </Grid>
      <Grid item xs={12}>
        <RecentTransactions />
      </Grid>
    </Grid>
  );
}
