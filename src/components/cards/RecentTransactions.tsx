import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import SummarizeIcon from '@mui/icons-material/Summarize';

export default function RecentTransactions() {
  const classes = useStyles();
  return (
    <Card className={classes.recentTransactions}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <SummarizeIcon style={{marginBottom: "-4px"}}/> Recent Transactions
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

const useStyles = makeStyles({
  recentTransactions: {
    height: "100%",
    background: "#24695c",
    boxShadow: "0 0 1px 0px rgb(0 0 0)",
    color: "white",
  },
});
