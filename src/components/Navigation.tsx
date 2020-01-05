import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../build-threads-logo-v1-tomato.svg";
import * as routes from "../constants/routes";
import { AuthUserContext } from "../firebase/AuthUserContext";
import "./App.css";
import DropDown from "./DropDown";

const LogoStuff = styled.div`
  float: left;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Image = styled.img.attrs({ src: logo })`
  /* height: 400px; */
  height: 50px;
  width: 50px;
  margin: 20px;
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
  width: 100%;
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
        <LogoStuff>
          <Image />
          <h1>Build Threads</h1>
        </LogoStuff>
      </li>
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
        <DropDown />
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
