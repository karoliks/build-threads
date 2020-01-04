import * as React from "react";
import ContentConatiner from "src/components/contentContainer/ContentContainer";
import styled from "styled-components";
import anonymous from "../../anonymous.svg";
import { AuthUserContext } from "../../firebase/AuthUserContext";
import { withAuthorization } from "../../firebase/withAuthorization";
import { PasswordForgetForm } from "../PasswordForget/PasswordForgetForm";
import { PasswordChangeForm } from "./PasswordChangeForm";

const Image = styled.img.attrs({ src: anonymous })`
  /* height: 400px; */
  height: 200px;
  width: 200px;
  background: rgb(232, 240, 254);
  border-radius: 50%;
  border-style: solid;
  border-color: tomato;
  object-fit: contain;
`;

// const PicBox = styled.div`
//   height: 100px;
//   width: 100px;
//   background: pink;
// `;

export const AccountComponent = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <ContentConatiner>
        {/* <img src={slengbukser} alt="Slengbukser" /> */}
        <Image />
        <div>
          <h1>Username: {(authUser as any).username} </h1>
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
