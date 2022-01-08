import { Grid } from "@mui/material";
import * as React from "react";
import {
  DailyRanking,
  PlayerRanking,
  RoundRanking,
} from "../components/cryptoGame";

export function GameRanking() {
  return (
    <div>
      <h1>Game Ranking</h1>
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
