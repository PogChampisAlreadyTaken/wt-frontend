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
import { AllUserContext } from "../../context/allUserContext";
import { Avatar } from "@material-ui/core";

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
              <TableCell
                style={{ fontWeight: "bolder", color: "#fff" }}
                align="center"
              >
                Position
              </TableCell>
              <TableCell style={{ fontWeight: "bolder", color: "#fff" }}>
                Player
              </TableCell>
              <TableCell
                style={{ fontWeight: "bolder", color: "#fff" }}
                align="left"
              >
                Name
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
            {allUsers
              ?.sort(
                (row, row2) =>
                  row2.gameStats.roundProfit - row.gameStats.roundProfit
              )
              .map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell align="center" style={{ fontWeight: "bolder" }}>
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">
                    <Avatar
                      src={String(row.photoUrl)}
                      style={{ width: "35px", height: "35px", margin: "auto" }}
                    ></Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    $ {row.gameStats.roundProfit.toFixed(2)}
                  </TableCell>
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
