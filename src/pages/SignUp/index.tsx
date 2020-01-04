import * as React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

import * as routes from "../../constants/routes";
import { SignUpForm } from "./SingUpForm";

const linkStyle = {
  textDecoration: "none"
};

const SignUpContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  background: white;
  justify-content: center;
  flex-direction: column;
  width: 700px;
  margin: auto;
  margin-top: 70px;
  padding: 50px;
`;

const SignUpComponent = () => (
  <SignUpContainer>
    <h1>SignUp</h1>
    <SignUpForm />
  </SignUpContainer>
);

export const SignUpLink = () => (
  <p>
    <br />
    Don't have an account?{" "}
    <Link style={linkStyle} to={routes.SIGN_UP}>
      Sign Up
    </Link>
  </p>
);

export const SignUp = withRouter(SignUpComponent);
