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
import challenger from "../image/challenger.png";
import grandMaster from "../image/grandMaster.png";
import master from "../image/master.png";
import unranked from "../image/unranked.png";
import animationData from "../animations/Confetti.json";
import Lottie from "react-lottie-player";

export default function Ranking() {
  const [userContext, setUserContext] = React.useContext(UserContext);
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
        <span>
          <Avatar
            src={ranks[userContext.rank]}
            style={{ width: "230px", height: "150px", marginLeft: "150px" }}
          ></Avatar>
        </span>
        <span>
          <Lottie
            loop
            animationData={animationData}
            play
            style={{
              width: "230px",
              height: "150px",
              justifyContent: "center",
              flexDirection: "row-reverse",
              marginTop: "-150px",
              marginLeft: "150px",
            }}
          />
        </span>
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
