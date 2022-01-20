import { Grid } from "@mui/material";
import * as React from "react";
import {
  DailyRanking,
  PlayerRanking,
  RoundRanking,
} from "../components/cryptoGame";
import Lottie from "react-lottie-player";
import animationData from "../components/animations/trCup.json";
import { makeStyles } from "@material-ui/core/styles";
import { NoEncryptionTwoTone } from "@mui/icons-material";

export function GameRanking() {
  const classes = useStyles();

  return (
    <div className={classes.scroll}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ marginRight: "10px" }}>Game Ranking</h1>
        <Lottie
          loop
          animationData={animationData}
          play
          style={{ width: 90, height: 90 }}
        />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <DailyRanking />
        </Grid>
        <Grid item xs={4}>
          <RoundRanking />
        </Grid>
        <Grid item xs={4}>
          <PlayerRanking />
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles({
  scroll: {
    overflowY: "scroll",
    height: "100%",
    "-ms-overflow-style": "none",
    "scrollbar-width": "none",
    "-webkit-scrollbar": {
      display: "none",
    },
  },
});
