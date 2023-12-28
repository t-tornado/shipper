import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../application/auth.service";
import { RemotesEventsManager } from "../infrastructure/mfe-bindings/events/manager";

export const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [err, setErr] = useState();
  const nav = useNavigate();
  const handleSignin = async () => {
    try {
      if (!email || !password) throw new Error("Invalid Email/Password");
      const user = await AuthService.signup({ email, password });
      RemotesEventsManager.dispatchSigninSuccessEvent(user);
    } catch (error: any) {
      setErr(error.message);
    }
  };

  const handleOnChangeEmail = (ev: any) => {
    setEmail(ev.target.value);
  };

  const handleOnChangePassword = (ev: any) => {
    setPassword(ev.target.value);
  };

  const handleRedirectToSignin = () => {
    nav("/auth/signin");
  };

  return (
    <Container maxWidth='xs'>
      <Typography variant='h6'>Join Eventli</Typography>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
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
        variant='text'
      >
        Already have an 🎩Evently account?
      </Button>
    </Container>
  );
};
