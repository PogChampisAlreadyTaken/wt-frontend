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
import challenger from "../image/challenger.png";
import grandMaster from "../image/grandMaster.png";
import master from "../image/master.png";
import unranked from "../image/unranked.png";

export function PlayerRanking() {
  const [allUsers, setAllUsers] = React.useContext(AllUserContext);
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5">Player Overall Ranking</Typography>
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
                Elo
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
                align="center"
              >
                Profit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUsers
              ?.sort(
                (row, row2) =>
                  row2.gameStats.totalProfit - row.gameStats.totalProfit
              )
              .map((row, index) => (
                <TableRow key={row._id + "Player"}>
                  <TableCell align="center" style={{ fontWeight: "bolder" }}>
                    {index + 1}
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bolder" }}>
                    <img
                      src={ranks[index] || unranked}
                      style={{ width: "35px", height: "35px", margin: "auto" }}
                    ></img>
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
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="center">
                    $ {row.gameStats.totalProfit.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

const ranks = [`${challenger}`, `${grandMaster}`, `${master}`, `${unranked}`];

const useStyles = makeStyles({
  card: {
    height: "100%",
    background: "#fff",
    color: "#005249",
    marginLeft: "-5px",
    marginRight: "5px",
  },
});
