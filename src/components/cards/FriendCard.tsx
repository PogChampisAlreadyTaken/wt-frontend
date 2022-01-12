import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  AvatarGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { UserContext } from "../../context/userContext";
import { setUserHelper, User } from "../../model";
import { updateUser } from "../../request/userService";
import { AllUserContext } from "../../context/allUserContext";
import { Button } from "@material-ui/core";

export default function FriendCard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openAllFriends, setOpenAllFriends] = React.useState(false);
  const [userContext, setUserContext] = React.useContext(UserContext);
  const [allUsers, setAllUsers] = React.useContext(AllUserContext);

  React.useEffect(() => {}, [userContext]);

  if (userContext === null) {
    return null;
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenAllFriends(false);
    updateUser(userContext).then((user) => {
      setUserContext(setUserHelper(user));
    });
  };

  return (
    <Card className={classes.friendCard}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <PersonIcon style={{ marginBottom: "-4px" }} /> Friends
          <Button
            variant="outlined"
            onClick={handleClickOpen}
            style={{ background: "#005249", color: "#fff", marginLeft: 10 }}
          >
            <Typography />
            Add a Friend
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle style={{ background: "#24695c", color: "#fff" }}>
              Select your new Friend
            </DialogTitle>
            <DialogContent>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                }}
              >
                {allUsers?.map((user: User, index) => {
                  const friend = userContext?.friends?.find(
                    (friend: any) => friend === user._id
                  );
                  if (friend !== undefined) {
                    return;
                  }

                  return (
                    <ListItem
                      key={String(user?._id)}
                      disableGutters
                      secondaryAction={<IconButton></IconButton>}
                    >
                      <ListItemText primary={user.name} />
                      <IconButton
                        onClick={() => {
                          const friends = userContext.friends ?? [];
                          friends.push(user._id);

                          setUserContext({ ...userContext, friends: friends });
                        }}
                      >
                        <AddIcon style={{ fill: "#24695c" }}></AddIcon>
                      </IconButton>
                    </ListItem>
                  );
                })}
              </List>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                style={{ padding: 10, background: "#005249", color: "#fff" }}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </Typography>

        <Button
          onClick={() => {
            setOpenAllFriends(true);
          }}
        >
          <AvatarGroup
            max={7}
            style={{ justifyContent: "center", display: "flex" }}
            sx={{ marginTop: 3 }}
          >
            {userContext?.friends?.map((user: any) => {
              const friend = allUsers?.find((u) => u._id === user);
              return (
                <Avatar
                  key={String(friend?._id)}
                  alt={String(friend?.name)}
                  src={String(friend?.photoUrl)}
                  sx={{ width: 80, height: 80 }}
                >
                  {friend?.name}
                </Avatar>
              );
            })}
          </AvatarGroup>
        </Button>
      </CardContent>
      <CardActions></CardActions>

      <Dialog open={openAllFriends} onClose={handleClose}>
        <DialogTitle style={{ background: "#24695c", color: "#fff" }}>
          Current Friends
        </DialogTitle>
        <DialogContent>
          <List
            style={{
              width: "100%",
              maxWidth: 360,
              background: "#fff",
            }}
          >
            {userContext?.friends?.map((user: any, index) => {
              const friend = allUsers?.find((u) => u._id === user);

              return (
                <ListItem
                  key={String(friend?._id)}
                  disableGutters
                  secondaryAction={<IconButton></IconButton>}
                >
                  <ListItemText primary={friend?.name} />
                  <IconButton
                    onClick={() => {
                      userContext.friends = userContext?.friends?.filter(
                        (element: any) => element !== friend?._id
                      );
                      handleClose();
                    }}
                  >
                    <DeleteIcon style={{ fill: "#24695c" }}></DeleteIcon>{" "}
                  </IconButton>
                </ListItem>
              );
            })}
          </List>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            style={{ padding: 10, background: "#005249", color: "#fff" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

const useStyles = makeStyles({
  friendCard: {
    height: "100%",
    background: "#24695c",
    boxShadow: "0 0 1px 0px rgb(0 0 0)",
    color: "#fff",
  },
});
