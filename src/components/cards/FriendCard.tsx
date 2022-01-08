import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import {
  Avatar,
  AvatarGroup,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { UserContext } from "../../context/userContext";
import { User } from "../../model";
import { getUsers } from "../../request/userService";
import { AllUserContext } from "../../context/allUserContext";

export default function FriendCard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [userContext, setUserContext] = React.useContext(UserContext);
  const [allUsers, setAllUsers] = React.useContext(AllUserContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.frindCard}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <PersonIcon style={{ marginBottom: "-4px" }} /> Friends
          <Button
            variant="outlined"
            onClick={handleClickOpen}
            style={{ marginLeft: 10 }}
          >
            <Typography />
            Add a Friend
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Select your new Friend</DialogTitle>
            <DialogContent>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {allUsers?.map((user: User, index) => (
                  <ListItem
                    key={String(user?.id)}
                    disableGutters
                    secondaryAction={<IconButton></IconButton>}
                  >
                    <ListItemText primary={user.name} />
                    <IconButton
                      onClick={() => {
                        userContext?.friends?.push(user);
                      }}
                    >
                      <AddIcon></AddIcon>
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
          </Dialog>
        </Typography>
        <AvatarGroup
          max={7}
          style={{ justifyContent: "center", display: "flex" }}
          sx={{ marginTop: 3 }}
        >
          {userContext?.friends?.map((user: User) => (
            <Avatar
              alt={String(user?.name)}
              src="/broken-image.jpg"
              sx={{ width: 80, height: 80 }}
            >
              {user.name}
            </Avatar>
          ))}
        </AvatarGroup>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

const useStyles = makeStyles({
  frindCard: {
    height: "100%",
    //background: 'linear-gradient(95deg, #6157f4 30%, #578df4 90%)',
    background: "#24695c",
    boxShadow: "0 0 1px 0px rgb(0 0 0)",
    color: "#fff",
  },
});
