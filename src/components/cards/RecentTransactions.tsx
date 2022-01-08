import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import SummarizeIcon from "@mui/icons-material/Summarize";
import { UserContext } from "../../context/userContext";
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

  return (
    <Card className={classes.recentTransactions}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <SummarizeIcon style={{ marginBottom: "-4px" }} /> Recent Transactions
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Coin</TableCell>
                <TableCell>recent Value</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userContext?.gameStats?.recentTransactions.map(
                (transaction, index) => (
                  <TableRow
                    key={String(index)}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{transaction.name}</TableCell>
                    <TableCell>{transaction.price}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>{getDayAndTime(transaction.date)}</TableCell>
                  </TableRow>
                )
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
    background: "#24695c",
    boxShadow: "0 0 1px 0px rgb(0 0 0)",
    color: "white",
  },
});
