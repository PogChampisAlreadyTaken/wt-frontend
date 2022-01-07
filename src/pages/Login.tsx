import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SendIcon from "@mui/icons-material/Send";
import animationData from "../components/animations/login.json";
import { firebaseGoogleLogin } from "../firebase/firebase";
import Lottie from "react-lottie-player";

export function Login() {
  
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
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            autoComplete="new-password"
          />
          <TextField
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
            style={{ backgroundColor: "#6157f4" }}
            variant="contained"
            fullWidth
            endIcon={<SendIcon style={{ fill: "#6157f4" }} />}
            color="primary"
            onClick={()=>{
              console.log('Hallooooo');}}
          >
            Sign In
          </Button>
          <Button
            style={{ backgroundColor: "#6157f4" }}
            variant="contained"
            fullWidth
            endIcon={<SendIcon style={{ fill: "#6157f4" }} />}
            color="primary"
            onClick={() => {
              console.log("Hallooo");
              firebaseGoogleLogin();
            }}
          >
            Sign In with Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
