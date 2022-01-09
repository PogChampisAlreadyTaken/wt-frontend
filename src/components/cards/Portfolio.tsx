import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import SavingsIcon from "@mui/icons-material/Savings";
import { UserContext } from "../../context/userContext";
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

  if (userContext === undefined) {
    return null;
  }

  const getRecords = (): Portfolio[] => {
    const portfolio = userContext.gameStats.portfolio;
    const coinArray = Array.from(portfolio.values());
    return coinArray;
  };

  return (
    <Card className={classes.portfolio}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <SavingsIcon style={{ marginBottom: "-4px" }} /> Portfolio
        </Typography>
        <TableContainer>
          <Table
            sx={{ minWidth: 650, marginTop: "10px" }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    background: "#fff",
                    color: "#005249",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Coin
                </TableCell>
                <TableCell
                  style={{
                    background: "#fff",
                    color: "#005249",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Amount
                </TableCell>
                <TableCell
                  style={{
                    background: "#fff",
                    color: "#005249",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Current Value
                </TableCell>
                <TableCell
                  style={{
                    background: "#fff",
                    color: "#005249",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Value in $
                </TableCell>
                <TableCell
                  style={{
                    background: "#fff",
                    color: "#005249",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Change 7d
                </TableCell>
                <TableCell
                  style={{
                    background: "#fff",
                    color: "#005249",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  Buy | Sell{" "}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getRecords().map((portfolio, index) => {
                const coin = coinContext.coins.find(
                  (coin) => coin.name === portfolio.name
                );
                return (
                  <TableRow key={index}>
                    <TableCell>{portfolio.name}</TableCell>
                    <TableCell>{portfolio.amount}</TableCell>
                    <TableCell>{coin?.market_data.current_price}</TableCell>
                    <TableCell>
                      {coin?.market_data?.current_price !== undefined

                  <TableRow key={index}>
                    <TableCell
                      style={{
                        background: "#005249",
                        color: "#fff",
                        textAlign: "left",
                      }}
                    >
                      <img
                        style={{ marginRight: "5px", marginBottom: "-7px" }}
                        src={coin?.image}
                        alt="Logo"
                      />
                      <span style={{ marginTop: "3px" }}>
                        {" "}
                        {portfolio.name}
                      </span>
                    </TableCell>
                    <TableCell
                      style={{
                        background: "#005249",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      {portfolio.amount}
                    </TableCell>
                    <TableCell
                      style={{
                        background: "#005249",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      {coin?.market_data.current_price}
                    </TableCell>
                    <TableCell
                      style={{
                        background: "#005249",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      {coin?.market_data?.current_price != undefined
                        ? coin?.market_data?.current_price * portfolio.amount
                        : 0}
                    </TableCell>
                    <TableCell
                      style={{
                        background: "#005249",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      {coin?.market_data.price_change_percentage_7d}%
                    </TableCell>
                    <TableCell
                      style={{
                        background: "#005249",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
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
