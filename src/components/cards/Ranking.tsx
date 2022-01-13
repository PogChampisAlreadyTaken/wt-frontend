import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { UserContext } from "../../context/userContext";
import challenger from "../image/challenger.png";
import grandMaster from "../image/grandMaster.png";
import master from "../image/master.png";
import unranked from "../image/unranked.png";
import { AllUserContext } from "../../context/allUserContext";

export default function Ranking() {
  const [userContext, setUserContext] = React.useContext(UserContext);
  const [allUsers, setAllUsers] = React.useContext(AllUserContext);
  const [userRank, setUserRank] = React.useState(4);
  const classes = useStyles();

  React.useEffect(() => {
    if (allUsers) {
      const sortedUsers = allUsers.sort(
        (row, row2) =>
          row2.gameStats.totalProfit - row.gameStats.totalProfit
      );
      if (userContext) {
        setUserRank(sortedUsers.findIndex(u => u.email === userContext.email));
      }
    }
  }, [allUsers, userContext]);

  if (userContext === null) {
    return null;
  }

  return (
    <Card className={classes.ranking}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <LeaderboardIcon style={{ marginBottom: "-4px" }} /> Rank
        </Typography>

        <img
          style={{ marginBottom: "-30%", width: "45%", marginTop: "-6%" }}
          src={ranks[userRank] || unranked}
          alt=""
        />
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

const ranks = [`${challenger}`, `${grandMaster}`, `${master}`, `${unranked}`];

const useStyles = makeStyles({
  ranking: {
    height: "100%",
    background: "#24695c",
    boxShadow: "0 0 1px 0px rgb(0 0 0)",
    color: "white",
  },
});
