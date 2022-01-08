import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CoinContext } from "../../context/coinContext";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { checkData, Coin } from "../../model";
import { getAllCoins } from "../../request/coinService";
import CoinBuyDialog from "./CoinBuyDialog";

export function CoinTable() {
  const [coinContext, setCoinContext] = React.useContext(CoinContext);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [currentCoin, setCurrentCoin] = React.useState<Coin | undefined>(
    undefined
  );

  React.useEffect(() => {
    if (checkData(coinContext)) {
      getAllCoins().then((coins) => setCoinContext(coins));
    }
  }, []);

  return (
    <div className={classes.coinTable}>
      <CoinBuyDialog onClose={setOpen} open={open} coin={currentCoin} />
      <Typography variant="h4" align="left">
        Coin Market
      </Typography>
      <Typography align="left" paddingBottom={2}>
        updates every minute
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Coin</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Buy</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coinContext.coins.map((row) => {
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
                    {row.market_data.current_price}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => {
                        setOpen(true);
                        setCurrentCoin(row);
                      }}
                    >
                      <AddBoxIcon />
                    </IconButton>
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
  coinTable: {
    padding: "5px",
  },
});
