import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";

export default function Ranking() {
  const classes = useStyles();
  return (
    <Card className={classes.ranking}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Ranking
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

const useStyles = makeStyles({
  ranking: {
    height: "100%",
    //background: 'linear-gradient(45deg, #6B6DFE 30%, #B153FF 90%)',
    background: "#6157f4",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.1)",
    color: "white",
  },
});
