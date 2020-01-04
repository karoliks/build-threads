import * as React from "react";
import styled from "styled-components";

import * as routes from "../../constants/routes";
import { auth, db } from "../../firebase";
const StyledInput = styled.input`
  box-sizing: border-box;
  border-style: none;
  /* width: 100%; */
  height: 50px;
  padding: 13px 15px;
  margin-bottom: 24px;
  background-color: rgb(232, 240, 254) !important;
`;

const StyledButton = styled.button`
  background: tomato;
  border: none;
  color: white;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 1em;
  font-family: Arial;
  /* width: 100px; */
  margin: auto;
  &:hover {
    cursor: pointer;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background: pink; */
`;
interface IInterfaceProps {
  email?: string;
  error?: any;
  history?: any;
  passwordOne?: string;
  passwordTwo?: string;
  username?: string;
}

interface IInterfaceState {
  email: string;
  error: any;
  passwordOne: string;
  passwordTwo: string;
  username: string;
}

export class SignUpForm extends React.Component<
  IInterfaceProps,
  IInterfaceState
> {
  private static INITIAL_STATE = {
    email: "",
    error: null,
    passwordOne: "",
    passwordTwo: "",
    username: ""
  };

  private static propKey(propertyName: string, value: any): object {
    return { [propertyName]: value };
  }

  constructor(props: IInterfaceProps) {
    super(props);
    this.state = { ...SignUpForm.INITIAL_STATE };
  }

  public onSubmit(event: any) {
    event.preventDefault();

    const { email, passwordOne, username } = this.state;
    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser: any) => {
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...SignUpForm.INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(SignUpForm.propKey("error", error));
          });
      })
      .catch(error => {
        this.setState(SignUpForm.propKey("error", error));
      });
  }

  public render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <StyledForm onSubmit={event => this.onSubmit(event)}>
        <StyledInput
          value={username}
          onChange={event => this.setStateWithEvent(event, "username")}
          type="text"
          placeholder="Full Name"
        />
        <StyledInput
          value={email}
          onChange={event => this.setStateWithEvent(event, "email")}
          type="text"
          placeholder="Email Address"
        />
        <StyledInput
          value={passwordOne}
          onChange={event => this.setStateWithEvent(event, "passwordOne")}
          type="password"
          placeholder="Password"
        />
        <StyledInput
          value={passwordTwo}
          onChange={event => this.setStateWithEvent(event, "passwordTwo")}
          type="password"
          placeholder="Confirm Password"
        />
        <StyledButton disabled={isInvalid} type="submit">
          Sign Up
        </StyledButton>

        {error && <p>{error.message}</p>}
      </StyledForm>
    );
  }

  private setStateWithEvent(event: any, columnType: string) {
    this.setState(SignUpForm.propKey(columnType, (event.target as any).value));
  }
}
