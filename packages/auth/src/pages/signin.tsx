import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../application/auth.service";
import { RemotesEventsManager } from "../infrastructure/mfe-bindings/events/manager";

export const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [err, setErr] = useState();
  const nav = useNavigate();
  const handleSignin = () => {
    try {
      if (!email || !password) throw new Error("Invalid Email/Password");
      const user = AuthService.signin({ email, password });
      RemotesEventsManager.dispatchSigninSuccessEvent(user);
    } catch (error: any) {
      setErr(error.message);
    }
  };

  const handleRedirectToSignup = () => {
    nav("/auth/signup");
  };

  const handleOnChangeEmail = (ev: any) => {
    setEmail(ev.target.value);
  };

  const handleOnChangePassword = (ev: any) => {
    setPassword(ev.target.value);
  };

  return (
    <Container maxWidth='xs'>
      <Typography variant='h6'>Signin to Eventli</Typography>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='email'
          label={err ?? "Email Address"}
          name='email'
          autoComplete='email'
          autoFocus
          onChange={handleOnChangeEmail}
          error={!!err}
        />
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
          onChange={handleOnChangePassword}
        />
        <Button onClick={handleSignin} type='submit' variant='contained'>
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
        variant='text'
      >
        Join 🎩Evently
      </Button>
    </Container>
  );
};
