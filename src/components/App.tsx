import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import * as routes from "../constants/routes";
import { firebase } from "../firebase";
import { withAuthentication } from "../firebase/withAuthentication";
import { Account } from "../pages/Account";
import { Home } from "../pages/Home";
import { Landing } from "../pages/Landing";
import { PasswordForget } from "../pages/PasswordForget";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import "./App.css";
import { Navigation } from "./Navigation";

const StyledApp = styled.div`
  padding: 0;
  background-image: linear-gradient(
    to top,
    #ebebeb 0%,
    rgb(176, 205, 255) 100%
  );
  min-height: 100vh;
`;

class AppComponent extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  public componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  public render() {
    return (
      <BrowserRouter>
        <StyledApp>
          <Navigation />
          {/* <hr /> */}
          <Switch>
            <Route exact={true} path={routes.LANDING} component={Landing} />
            <Route exact={true} path={routes.SIGN_UP} component={SignUp} />
            <Route exact={true} path={routes.SIGN_IN} component={SignIn} />
            <Route
              exact={true}
              path={routes.PASSWORD_FORGET}
              component={PasswordForget}
            />
            <Route exact={true} path={routes.HOME} component={Home} />
            <Route exact={true} path={routes.ACCOUNT} component={Account} />
          </Switch>
        </StyledApp>
      </BrowserRouter>
    );
  }
}

export const App = withAuthentication(AppComponent);
