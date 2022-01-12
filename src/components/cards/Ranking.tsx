import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { UserContext } from "../../context/userContext";
import { Avatar } from "@material-ui/core";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { User } from "../../model";


export default function Ranking() {
  const [userContext, setUserContext] = React.useContext(UserContext);
  const [allUsers, setAllUsers] = useLocalStorage<User[]>("users", []);
  const classes = useStyles();
 

  if (userContext === null) {
    return null;
  }

  return (
    <Card className={classes.ranking}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <LeaderboardIcon style={{ marginBottom: "-4px" }} /> Rank
        </Typography>

        <Avatar
          src={ranks[userContext.rank]}
          style={{ width: "120px", height: "120px", margin: "auto" }}
        ></Avatar>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}


const ranks = ["https://static.wikia.nocookie.net/leagueoflegends/images/0/02/Season_2022_-_Challenger.png","https://lolg-cdn.porofessor.gg/img/s/league-icons-v3/160/8.png?v=8" ]

const useStyles = makeStyles({
  ranking: {
    height: "100%",
    background: "#24695c",
    boxShadow: "0 0 1px 0px rgb(0 0 0)",
    color: "white",
  },
});
