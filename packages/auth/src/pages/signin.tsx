import { Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const nav = useNavigate();
  const handleSignin = () => {
    const details = {
      name: "Anthony Amponsah",
      id: "aisf-asdf-21a4-0oap",
      email: "anthonyamponsah@gmail.com",
    };
    window.postMessage(
      {
        type: "signin-success",
        payload: details,
      },
      "http://localhost:3005"
    );
  };

  const handleRedirectToSignup = () => {
    nav("/auth/signup");
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h6">Signin to Eventli</Typography>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button onClick={handleSignin} type="submit" variant="contained">
          Sign In
        </Button>
      </form>
      <Button
        onClick={handleRedirectToSignup}
        sx={{
          textTransform: "none",
          marginTop: "48px",
          display: "flex",
          margin: "0 auto",
        }}
        variant="text"
      >
        Join 🎩Evently
      </Button>
    </Container>
  );
};
