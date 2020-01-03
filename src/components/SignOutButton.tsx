import * as React from "react";
import styled from "styled-components";
import { auth } from "../firebase";

const Button = styled.button`
  border: none;
`;

export const SignOutButton = () => (
  <div>
    <button type="button" onClick={auth.doSignOut}>
      Sign Out
    </button>
    <Button type="button">test</Button>
  </div>
);
