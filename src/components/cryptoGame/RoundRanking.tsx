import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Card,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import { Player } from "../../model/player";
import { AllUserContext } from "../../context/allUserContext";
import { getAllPlayers } from "../../request/gameService";

export function RoundRanking() {
  const [allUsers, setAllUsers] = React.useContext(AllUserContext);
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h5">Player Round Ranking</Typography>
      <Card className={classes.card}>
        <Table>
          <TableHead style={{ background: "#005249" }}>
            <TableRow>
              <TableCell style={{ fontWeight: "bolder", color: "#fff" }}>
                Player
              </TableCell>
              <TableCell
                style={{ fontWeight: "bolder", color: "#fff" }}
                align="right"
              >
                Profit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUsers?.map((row) => (
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
    background: "#fff",
    color: "#005249",
    marginLeft: "-5px",
    marginRight: "-5px",
  },
});
