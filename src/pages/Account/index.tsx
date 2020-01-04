import * as React from "react";
import ContentConatiner from "src/components/contentContainer/ContentContainer";
import { firestore } from "src/firebase/firebase";
import styled from "styled-components";
import anonymous from "../../anonymous.svg";
import { AuthUserContext } from "../../firebase/AuthUserContext";
import { withAuthorization } from "../../firebase/withAuthorization";
import { PasswordForgetForm } from "../PasswordForget/PasswordForgetForm";
import { PasswordChangeForm } from "./PasswordChangeForm";
const useState = React.useState;

const Image = styled.img.attrs({ src: anonymous })`
  /* height: 400px; */
  height: 200px;
  width: 200px;
  background: rgb(232, 240, 254);
  border-radius: 50%;
  border-style: solid;
  border-color: tomato;
  object-fit: contain;
  margin-right: 50px;
`;

const UserInfoContainer = styled.div`
  /* margin-top: 50px; */
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  /* justify-content: space-between; */
  /* align-items: flex-start; */
  /* background: pink; */
  width: 100%;
`;

// const PicBox = styled.div`
//   height: 100px;
//   width: 100px;
//   background: pink;
// `;

export const AccountComponent = () => {
  const [displayName, setDisplayName] = useState("Loading...");
  return (
    <AuthUserContext.Consumer>
      {authUser => {
        const { uid } = authUser as any;
        const userDocument = firestore.collection("users").doc(uid);
        userDocument.get().then(doc => {
          if (doc.exists) {
            // tslint:disable-next-line
            const data = doc.data();
            if (data) {
              setDisplayName(data.displayName);
            }
          } else {
            // tslint:disable-next-line
            console.log("doc does not exist");
          }
        });
        return (
          <ContentConatiner>
            {/* <img src={slengbukser} alt="Slengbukser" /> */}
            <UserInfoContainer>
              <Image />
              <div>
                <h1>Username: {displayName} </h1>
                <h1>Account: {(authUser as any).email}</h1>
                <PasswordForgetForm />
                <PasswordChangeForm />
              </div>
            </UserInfoContainer>
          </ContentConatiner>
        );
      }}
    </AuthUserContext.Consumer>
  );
};

const authCondition = (authUser: any) => !!authUser;

export const Account = withAuthorization(authCondition)(AccountComponent);
