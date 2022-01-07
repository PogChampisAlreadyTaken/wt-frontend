import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import StarIcon from '@mui/icons-material/Star';

export default function Ranking() {
  const classes = useStyles();
  return (
    <Card className={classes.ranking}>
      <CardContent>
        <Typography variant="h5" component="h2">
         <StarIcon style={{marginBottom: "-4px"}}/> Ranking
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

const useStyles = makeStyles({
  ranking: {
    height: "100%",
    background: "#24695c",
    boxShadow: "0 0 1px 0px rgb(0 0 0)",
    color: "white",
  },
});
