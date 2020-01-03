import * as React from "react";
import { AuthUserContext } from "../../firebase/AuthUserContext";
import { withAuthorization } from "../../firebase/withAuthorization";
import slengbukser from "../../Slengbukser farger uten bakgrunn.svg";
import { PasswordForgetForm } from "../PasswordForget/PasswordForgetForm";
import { PasswordChangeForm } from "./PasswordChangeForm";

export const AccountComponent = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div className="User-Box">
        <img src={slengbukser} alt="Slengbukser" />
        <div>
          <h1>Account: {(authUser as any).email}</h1>
          <PasswordForgetForm />
          <PasswordChangeForm />
        </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = (authUser: any) => !!authUser;

export const Account = withAuthorization(authCondition)(AccountComponent);
