import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { getAllCoins } from "../request/coinService";
import { checkData, Coin } from "../model";
import { CoinContext } from "../context/coinContext";

export function Explore() {
  const classes = useStyles();
  const [coinContext, setCoinContext] = React.useContext(CoinContext);

  React.useEffect(() => {
    if (checkData(coinContext)) {
      getAllCoins().then((coins) => setCoinContext(coins));
    }
  }, []);

  console.log(coinContext);
  return (
    <div className={classes.exploreTable}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Coin</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Rank</TableCell>
              <TableCell align="right">Market Cap</TableCell>
              <TableCell align="right">Last 7 Days</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coinContext.map((row) => {
              {
                if (!row) return null;
              }
              return (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.market_data.current_price["usd"]}
                  </TableCell>
                  <TableCell align="right">
                    {row.market_data.market_cap_rank}
                  </TableCell>
                  <TableCell align="right">
                    {row.market_data.market_cap["usd"]}
                  </TableCell>
                  <TableCell align="right">
                    {row.market_data.price_change_percentage_7d}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const useStyles = makeStyles({
  exploreTable: {
    padding: "5px",
  },
});
