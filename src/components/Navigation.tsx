import * as React from "react";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";
import { AuthUserContext } from "../firebase/AuthUserContext";
import "./App.css";
import { SignOutButton } from "./SignOutButton";

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
  <nav className="Navigation">
    <ul className="Nav-List">
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
          Account
        </Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  </nav>
);

const NavigationNonAuth = () => (
  <nav className="Navigation">
    <ul className="Nav-List">
      <li>
        <Link style={navStyle} to={routes.LANDING}>
          Landing
        </Link>
      </li>
      <li>
        <Link style={navStyle} to={routes.SIGN_IN}>
          Sign In
        </Link>
      </li>
    </ul>
  </nav>
);
