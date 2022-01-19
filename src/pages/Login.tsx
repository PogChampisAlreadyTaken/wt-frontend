import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import animationData from "../components/animations/login.json";
import { firebaseGoogleLogin } from "../firebase/firebase";
import Lottie from "react-lottie-player";
import { UserContext } from "../context/userContext";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { setUserHelper } from "../model";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export function Login() {
  const [userContext, setUserContext] = React.useContext(UserContext);
  const navigate = useNavigate();
  const classes = useStyles();

  if (userContext !== null) {
    navigate("/overview");
    return null;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: "20px",
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

        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Button
            style={{
              backgroundColor: "#24695c",
              color: "#fff",
              marginTop: 10,
              margin: "auto",
              height: 45,
            }}
            variant="contained"
            fullWidth
            onClick={() => {
              firebaseGoogleLogin().then((user) => {
                setUserContext(setUserHelper(user));
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
