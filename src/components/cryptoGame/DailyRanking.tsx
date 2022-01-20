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

export function DailyRanking() {
  const [allUsers, setAllUsers] = React.useContext(AllUserContext);
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h5">Player Daily Ranking</Typography>
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
              <TableCell
                style={{ fontWeight: "bolder", color: "#fff" }}
                align="center"
              >
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
                  row2.gameStats.dailyProfit - row.gameStats.dailyProfit
              )
              .map((row, index) => (
                <TableRow key={row._id + "Daily"}>
                  <TableCell align="center" style={{ fontWeight: "bolder" }}>
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">
                    <img
                      src={String(row.photoUrl)}
                      style={{
                        width: "45px",
                        height: "45px",
                        margin: "auto",
                        borderRadius: "50%",
                      }}
                    ></img>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    $ {row.gameStats.dailyProfit.toFixed(2)}
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
    marginLeft: "5px",
    marginRight: "-5px",
  },
});
