import * as React from "react";
import ContentConatiner from "src/components/contentContainer/ContentContainer";
import styled from "styled-components";
import { AuthUserContext } from "../../firebase/AuthUserContext";
import { withAuthorization } from "../../firebase/withAuthorization";
import slengbukser from "../../Slengbukser farger uten bakgrunn.svg";
import { PasswordForgetForm } from "../PasswordForget/PasswordForgetForm";
import { PasswordChangeForm } from "./PasswordChangeForm";

const Image = styled.img.attrs({ src: slengbukser })`
  height: 400px;
`;

export const AccountComponent = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <ContentConatiner>
        {/* <img src={slengbukser} alt="Slengbukser" /> */}
        <Image />
        <div>
          <h1>Account: {(authUser as any).email}</h1>
          <PasswordForgetForm />
          <PasswordChangeForm />
        </div>
      </ContentConatiner>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = (authUser: any) => !!authUser;

export const Account = withAuthorization(authCondition)(AccountComponent);
