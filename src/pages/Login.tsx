import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SendIcon from "@mui/icons-material/Send";
import animationData from "../components/animations/login.json";
import { firebaseGoogleLogin } from "../firebase/firebase";
import Lottie from "react-lottie-player";
import { UserContext } from "../context/userContext";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { setUserHelper } from "../model";
import { makeStyles } from "@material-ui/core/styles";

export function Login() {
  const [userContext, setUserContext] = React.useContext(UserContext);
  const navigate = useNavigate();
  const classes = useStyles();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Lottie
          loop
          animationData={animationData}
          play
          style={{ width: 450, height: 450 }}
        />

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            className={classes.overrides}
            margin="normal"
            required
            fullWidth={true}
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            autoComplete="new-password"
          />
          <TextField
            className={classes.overrides}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <Button
            style={{
              backgroundColor: "#24695c",
              color: "#fff",
              marginTop: 3,
              height: 35,
            }}
            variant="contained"
            fullWidth
            color="primary"
            onClick={() => {
              console.log("Not Implemented yet");
            }}
          >
            Sign In
          </Button>
          <Button
            style={{
              backgroundColor: "#24695c",
              color: "#fff",
              marginTop: 3,
              height: 35,
            }}
            variant="contained"
            fullWidth
            onClick={() => {
              firebaseGoogleLogin().then((user) => {
                const newUser = setUserHelper(user);
                setUserContext(newUser);
                navigate("/overview");
              });
            }}
          >
            <GoogleIcon
              style={{ color: "#fff", padding: "4px", marginRight: "4px" }}
            />{" "}
            Sign In with Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

const useStyles = makeStyles({
  overrides: {
    "& label.Mui-focused": { color: "green" },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": { borderColor: "green" },
    },
  },
});
