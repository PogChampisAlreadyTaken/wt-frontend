import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Card,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

import * as React from "react";
import { Player } from "../../model/player";
import { getAllPlayers } from "../../request/gameService";

export function RoundRanking() {
  const classes = useStyles();
  const [player, setPlayer] = React.useState<Player[]>([]);
  React.useEffect(() => {
    getAllPlayers().then((res) => {
      setPlayer(res);
    });
  }, []);
  return (
    <div>
      <Typography>Player Overall Ranking</Typography>
      <Card className={classes.card}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Player</TableCell>
              <TableCell align="right">Profit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {player.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.gameStats.roundProfit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

const useStyles = makeStyles({
  card: {
    height: "100%",
    background: "linear-gradient(95deg, #61ff6f 30%, #a8ffb0 90%)",
    color: "#005249",
  },
});
