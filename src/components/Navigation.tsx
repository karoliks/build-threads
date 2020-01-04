import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import anonymous from "../anonymous.svg";
import * as routes from "../constants/routes";
import { AuthUserContext } from "../firebase/AuthUserContext";
import "./App.css";
import { SignOutButton } from "./SignOutButton";

const Image = styled.img.attrs({ src: anonymous })`
  /* height: 400px; */
  height: 50px;
  width: 50px;
  background: rgb(232, 240, 254);
  border-radius: 50%;
  border-style: solid;
  border-color: tomato;
  object-fit: contain;
  border-width: 2px;
  margin-right: 50px;
`;

const Nav = styled.nav`
  display: flex;
  background: rgb(39, 39, 39);
  color: white;
  min-height: 100px;
  justify-content: flex-end;
  /* width: 100vw; */
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  width: 50%;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2em;
  font-family: Arial;
`;

const ButtonLink = styled(Link)`
  background: tomato;
  border: none;
  color: white;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 1em;
  font-family: Arial;
`;

export const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const navStyle = {
  color: "white",
  textDecoration: "none"
};

const NavigationAuth = () => (
  <Nav>
    <NavList>
      <li>
        <Link style={navStyle} to={routes.LANDING}>
          Landing
        </Link>
      </li>
      <li>
        <Link style={navStyle} to={routes.HOME}>
          Home
        </Link>
      </li>
      <li>
        <Link style={navStyle} to={routes.ACCOUNT}>
          <Image />
        </Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </NavList>
  </Nav>
);

const NavigationNonAuth = () => (
  <Nav>
    <NavList>
      <li>
        <Link style={navStyle} to={routes.LANDING}>
          Landing
        </Link>
      </li>
      <li>
        <ButtonLink style={navStyle} to={routes.SIGN_IN}>
          Sign In
        </ButtonLink>
      </li>
    </NavList>
  </Nav>
);
