import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";

export default function Portfolio() {
  const classes = useStyles();
  return (
    <Card className={classes.portfolio}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Portfolio
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

const useStyles = makeStyles({
  portfolio: {
    height: "100%",
    background: "#6157f4",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.1)",
    color: "white",
  },
});
