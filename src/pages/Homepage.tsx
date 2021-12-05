// @flow
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import CapitalCard from "../components/cards/Capital";
import FrindCard from "../components/cards/FrindCard";
import PortfolioSum from "../components/cards/PortfolioSum";
import Portfolio from "../components/cards/Portfolio";
import RecentTransactions from "../components/cards/RecentTransactions";
import Ranking from "../components/cards/Ranking";

type Props = {};
export function Homepage(props: Props) {
  return (
    <div>
      <Box>
        <Grid container>
          <Grid xs={3}>
            <CapitalCard />
          </Grid>
          <Grid xs={5}>
            <FrindCard />
          </Grid>
          <Grid xs={4}>
            <PortfolioSum />
          </Grid>
          <Grid container>
            <Grid xs={8}>
              <Portfolio />
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={8}>
            <RecentTransactions />
          </Grid>
          <Grid xs={4}>
            <Ranking />
          </Grid>
        </Grid>
      </Box>
      <Box></Box>
    </div>
  );
}
