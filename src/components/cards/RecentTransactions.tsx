import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import SummarizeIcon from "@mui/icons-material/Summarize";
import { UserContext } from "../../context/userContext";
import { CoinContext } from "../../context/coinContext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function RecentTransactions() {
  const classes = useStyles();

  const [userContext, setUserContext] = React.useContext(UserContext);
  const [coinContext, setCoinContext] = React.useContext(CoinContext);

  return (
    <Card className={classes.recentTransactions}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <SummarizeIcon style={{ marginBottom: "-4px" }} /> Recent Transactions
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
                  recent Value
                </TableCell>
                <TableCell
                  style={{
                    background: "#fff",
                    color: "#005249",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Paid
                </TableCell>
                <TableCell
                  style={{
                    background: "#fff",
                    color: "#005249",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userContext?.gameStats?.recentTransactions.map(
                (transaction, index) => {
                  const coin = coinContext.coins.find(
                    (coin) => coin.name === transaction.name
                  );
                  return (
                    <TableRow
                      key={String(index)}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        style={{
                          background: "#005249",
                          color: "#fff",
                        }}
                      >
                        <img
                          style={{ marginRight: "5px", marginBottom: "-7px" }}
                          src={coin?.image}
                          alt="Logo"
                        />
                        <span style={{ marginTop: "3px" }}>
                          {" "}
                          {transaction.name}
                        </span>
                      </TableCell>
                      <TableCell
                        style={{
                          background: "#005249",
                          color: "#fff",
                          textAlign: "center",
                        }}
                      >
                        {transaction.price}
                      </TableCell>
                      <TableCell
                        style={{
                          background: "#005249",
                          color: "#fff",
                          textAlign: "center",
                        }}
                      >
                        {transaction.amount}
                      </TableCell>
                      <TableCell
                        style={{
                          background: "#005249",
                          color: "#fff",
                          textAlign: "center",
                        }}
                      >
                        {getDayAndTime(transaction.date)}
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

function getDayAndTime(timeStamp: number) {
  const date = new Date(timeStamp).toUTCString();
  return date.toString();
}

const useStyles = makeStyles({
  recentTransactions: {
    height: "100%",
    overflow: "auto",
    background: "#24695c",
    boxShadow: "0 0 1px 0px rgb(0 0 0)",
    color: "white",
  },
});
