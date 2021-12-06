// @flow
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

import { Box } from "@mui/system";
import CapitalCard from "../components/cards/Capital";
import FriendCard from "../components/cards/FriendCard";
import PortfolioSum from "../components/cards/PortfolioSum";
import Portfolio from "../components/cards/Portfolio";
import RecentTransactions from "../components/cards/RecentTransactions";
import Ranking from "../components/cards/Ranking";

type Props = {};
export function Homepage(props: Props) {
  const container = useStyles();

  return (
    <Box style={{ height: "calc(100% - 8px)", paddingBottom: "8px" }}>
      <Grid
        container
        direction="row"
        spacing={2}
        style={{
          height: "calc(100% - 8px)",
          width: "100%",
          margin: "0px",
          paddingRight: "8px",
          paddingBottom: "8px",
        }}
      >
        <Grid
          container
          style={{ height: "calc(70% - 0px)", margin: "0px" }}
          spacing={1}
        >
          <Grid item container direction="row" xs={12} spacing={1}>
            <Grid item container direction="column" xs={8} spacing={1}>
              <Grid item container direction="row" xs={4} spacing={1}>
                <Grid item xs={4}>
                  <CapitalCard />
                </Grid>
                <Grid item xs={8}>
                  <FriendCard />
                </Grid>
              </Grid>
              <Grid item xs={8}>
                <Portfolio />
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <PortfolioSum />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          direction="row"
          spacing={1}
          style={{ height: "calc(30%)", margin: "0px", paddingBottom: "38px" }}
        >
          <Grid item xs={8} style={{ height: "100%"}}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={4} style={{ height: "100%" }}>
            <Ranking />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles({
  container: {
    marginLeft: "0px",
    marginTop: "0px",
  },
});
