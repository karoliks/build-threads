import * as React from "react";
import { withRouter } from "react-router-dom";

import styled from "styled-components";

import { PasswordForgetLink } from "../PasswordForget";
import { SignUpLink } from "../SignUp";
import { SignInForm } from "./SignInForm";

const SignInContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  background: white;
  /* justify-content: top; */
  flex-direction: column;
  width: 500px;
  margin: auto;
  margin-top: 70px;
  padding: 50px;
  align-items: center;
`;

const SignInComponent = ({ history }: { [key: string]: any }) => (
  <SignInContainer>
    <h1>Sign in</h1>
    <SignInForm history={history} />
    <SignUpLink />
    <PasswordForgetLink />
  </SignInContainer>
);

export const SignIn = withRouter(SignInComponent);
