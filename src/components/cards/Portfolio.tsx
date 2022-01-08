import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import SavingsIcon from "@mui/icons-material/Savings";
import { UserContext } from "../../context/userContext";
import AddIcon from "@mui/icons-material/Add";
import { Portfolio } from "../../model";
import { CoinContext } from "../../context/coinContext";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
export default function PortfolioCard() {
  const classes = useStyles();

  const [userContext, setUserContext] = React.useContext(UserContext);
  const [coinContext, setCoinContext] = React.useContext(CoinContext);

  const getRecords = (): Portfolio[] => {
    const portfolio = userContext?.gameStats?.portfolio;
    const coinArray = [];
    for (let i in portfolio) {
      coinArray.push(portfolio[i]);
    }
    return coinArray;
  };

  return (
    <Card className={classes.portfolio}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <SavingsIcon style={{ marginBottom: "-4px" }} /> Portfolio
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Coin</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Current Value</TableCell>
                <TableCell>Value in $</TableCell>
                <TableCell>Change 7d</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getRecords().map((portfolio) => {
                const coin = coinContext.coins.find(
                  (coin) => coin.name == portfolio.name
                );
                return (
                  <TableRow>
                    <TableCell>{portfolio.name}</TableCell>
                    <TableCell>{portfolio.amount}</TableCell>
                    <TableCell>{coin?.market_data.current_price}</TableCell>
                    <TableCell>
                      {coin?.market_data?.current_price != undefined
                        ? coin?.market_data?.current_price * portfolio.amount
                        : 0}
                    </TableCell>
                    <TableCell>
                      {coin?.market_data.price_change_percentage_7d}%
                    </TableCell>
                    <TableCell>
                      <Button>Buy</Button> <Button>Sell</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

const useStyles = makeStyles({
  portfolio: {
    height: "100%",
    background: "#24695c",
    boxShadow: "0 0 1px 0px rgb(0 0 0)",
    color: "white",
  },
});
