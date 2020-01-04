import * as React from "react";
import styled from "styled-components";
import { auth } from "../firebase";

const Button = styled.button`
  background: tomato;
  border: none;
  color: white;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 1em;
  font-family: Arial;

  &:hover {
    cursor: pointer;
  }
`;

export const SignOutButton = () => (
  <Button onClick={auth.doSignOut}>Sign Out</Button>
);
