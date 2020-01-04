import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { PasswordForgetForm } from "./PasswordForgetForm";

const ForgotContainer = styled.div`
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

const linkStyle = {
  textDecoration: "none"
};

export const PasswordForget = () => (
  <ForgotContainer>
    <h1>Reset your password</h1>
    <p>
      Enter your mail below and we'll send you a link to reset your password.
    </p>
    <PasswordForgetForm />
  </ForgotContainer>
);

export const PasswordForgetLink = () => (
  <p>
    <Link style={linkStyle} to="/pw-forget">
      Forgot Password?
    </Link>
  </p>
);
