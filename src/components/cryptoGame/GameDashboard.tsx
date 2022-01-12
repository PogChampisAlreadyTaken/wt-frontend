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
        <div style={{height: "150px"}}>
        <CapitalCard />  
        </div>
      </Grid>
      <Grid item xs={12}>
        <div style={{height: "400px", marginTop: "-10px", marginBottom: "-10px" }}>
          <PortfolioCard />
        </div>
      </Grid>
      <Grid item xs={12}>
        <div style={{height: "305px"}}>
          <RecentTransactions />
        </div>
      </Grid>
    </Grid>
  );
}
