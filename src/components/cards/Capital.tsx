import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";

export default function CapitalCard() {
  const classes = useStyles(); 
  return (
    <Card className={classes.capitalcard}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Capital
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

const useStyles = makeStyles({
  capitalcard: {
    margin: "4px",
    marginTop: "5px",
    height: "145px",
    //background: 'linear-gradient(45deg, #6157f4 30%, #578df4 90%)',
    background: "#6157f4",
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.1)',
    color: "white",
  },
});
