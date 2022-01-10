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
import { checkData } from "../model";
import { CoinContext } from "../context/coinContext";
import { Chart } from "react-google-charts";
import { Button } from "@material-ui/core";
import ChartDialog from "../components/cryptoGame/ChartDialog";
import { Coin } from "../model";

export const options = {
  chartArea: { backgroundColor: "white" },
  backgroundColor: "transparent",
  lineWidth: 1,
  legend: "none",
  is3D: true,
  enableInteractivity: false,
  series: {
    0: { curveType: "function", color: "#00281b" },
  },
  hAxis: {
    textPosition: "none",
    gridlines: {
      color: "none",
    },
  },
  vAxis: {
    textPosition: "none",
    gridlines: {
      color: "none",
    },
  },
};

export function Explore() {
  const classes = useStyles();
  const [coinContext, setCoinContext] = React.useContext(CoinContext);
  const [openChartDialog, setOpenChartDialog] = React.useState(true);
  const [coinForChart] = React.useState<Coin>();

  React.useEffect(() => {
    if (checkData(coinContext)) {
      getAllCoins().then((coins) => setCoinContext(coins));
    }
  }, []);

  return (
    <div className={classes.exploreTable} style={{ width: "100%" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ background: "#24695c" }}>
            <TableRow>
              <TableCell style={{ color: "#fff", fontWeight: "bold" }}>
                Coin
              </TableCell>
              <TableCell
                style={{ color: "#fff", fontWeight: "bold" }}
                align="center"
              >
                Price
              </TableCell>
              <TableCell
                style={{ color: "#fff", fontWeight: "bold" }}
                align="center"
              >
                Rank
              </TableCell>
              <TableCell
                style={{ color: "#fff", fontWeight: "bold" }}
                align="center"
              >
                Market Cap
              </TableCell>
              <TableCell
                style={{ color: "#fff", fontWeight: "bold" }}
                align="center"
              >
                Last 7 Days
              </TableCell>
              <TableCell
                style={{ color: "#fff", fontWeight: "bold" }}
                align="center"
              >
                Chart
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coinContext.coins.map((row) => {
              return (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">
                    {row.market_data.current_price}
                  </TableCell>
                  <TableCell align="center">
                    {row.market_data.market_cap_rank}
                  </TableCell>
                  <TableCell align="center">
                    {row.market_data.market_cap}
                  </TableCell>
                  <TableCell align="center">
                    {row.market_data.price_change_percentage_7d}
                  </TableCell>
                  <TableCell
                    style={{ width: "120px", height: "50px" }}
                    align="center"
                  >
                    <Chart
                      chartType="AreaChart"
                      width="100%"
                      height="100%"
                      data={[
                        ...[["date", "prices"]],
                        ...row.market_data.history,
                      ]}
                      options={options}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        setOpenChartDialog(!openChartDialog);
                      }}
                    >
                      text
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <ChartDialog
        onClose={setOpenChartDialog}
        open={openChartDialog}
        coin={coinForChart}
      ></ChartDialog>
    </div>
  );
}

const useStyles = makeStyles({
  exploreTable: {
    padding: "5px",
  },
});
