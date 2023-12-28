import { Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const nav = useNavigate();
  const handleSignin = () => {
    console.log("Signup");
  };

  const handleRedirectToSignin = () => {
    nav("/auth/signin");
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h6">Join Eventli</Typography>
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
          Create Account
        </Button>
      </form>
      <Button
        onClick={handleRedirectToSignin}
        sx={{
          textTransform: "none",
          display: "flex",
          margin: "0 auto",
          marginTop: "48px",
        }}
        variant="text"
      >
        Already have an 🎩Evently account?
      </Button>
    </Container>
  );
};
