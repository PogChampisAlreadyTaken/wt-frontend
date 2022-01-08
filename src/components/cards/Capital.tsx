import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
 
export default function CapitalCard() {
  const classes = useStyles();
  return (
    <Card className={classes.capitalcard}>
      <CardContent>
        <Typography variant="h5" component="h2">
        <AccountBalanceWalletIcon style={{ marginBottom: "-4px"}}/> Capital
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

const useStyles = makeStyles({
  capitalcard: {
    height: "100%",
   
    //background: 'linear-gradient(45deg, #6157f4 30%, #578df4 90%)',
    background: "#24695c",
    boxShadow: "0 0 1px 0px rgb(0 0 0)",
    color: "#fff",
  },
});
