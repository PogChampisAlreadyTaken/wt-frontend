import * as React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";
import CapitalCard from "../components/cards/Capital";
import FriendCard from "../components/cards/FriendCard";
import PortfolioSum from "../components/cards/PortfolioSum";
import PortfolioCard from "../components/cards/Portfolio";
import RecentTransactions from "../components/cards/RecentTransactions";
import Ranking from "../components/cards/Ranking";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

type Props = {};
export function Overview(props: Props) {
  const [userContext, setUserContext] = React.useContext(UserContext);
  const nav = useNavigate();
  const classes = useStyles();

  if (userContext === null) {
    nav("/");
    return null;
  }

  return (
    <Box className={classes.root}>
      <div className={classes.rootGrid}>
        <Grid
          container
          spacing={1}
          direction="row"
          className={classes.upperGrid}
        >
          <Grid
            item
            container
            direction="column"
            xs={8}
            spacing={1}
          >
            <Grid
              item
              container
              direction="row"
              xs={4}
              spacing={1}
              style={{ height: "100%" }}
            >
              <Grid item xs={4}>
                <CapitalCard />
              </Grid>
              <Grid item xs={8}>
                <FriendCard />
              </Grid>
            </Grid>

            <Grid item xs={8} style={{ height: "100%", overflow: "auto" }}>
              <PortfolioCard />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <PortfolioSum />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          spacing={1}
          className={classes.lowerGrid}
        >
          <Grid item xs={8} style={{ height: "100%", overflow: "auto" }}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={4}>
            <Ranking />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    height: "calc(100% - 8px)",
    paddingBottom: "8px",
  },
  rootGrid: {
    height: "calc(100% - 8px)",
    width: "100%",
    margin: "0px",
    paddingRight: "16px",
    paddingBottom: "8px",
  },
  upperGrid: {
    height: "70%",
    margin: "0px",
  },
  lowerGrid: {
    height: "30%",
    margin: "0px",
    paddingBottom: "38px",
  },
});
