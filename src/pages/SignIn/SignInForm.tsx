import * as React from "react";
import styled from "styled-components";
import * as routes from "../../constants/routes";
import { auth } from "../../firebase";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  /* background: pink; */
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  border-style: none;
  width: 350px;
  height: 50px;
  padding: 13px 15px;
  margin-bottom: 24px;
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
  width: 100px;
  margin: auto;
  &:hover {
    cursor: pointer;
  }
`;

interface IInterfaceProps {
  email?: string;
  error?: any;
  history?: any;
  password?: string;
}

interface IInterfaceState {
  email: string;
  error: any;
  password: string;
}

export class SignInForm extends React.Component<
  IInterfaceProps,
  IInterfaceState
> {
  private static INITIAL_STATE = {
    email: "",
    error: null,
    password: ""
  };

  private static propKey(propertyName: string, value: any): object {
    return { [propertyName]: value };
  }

  constructor(props: IInterfaceProps) {
    super(props);

    this.state = { ...SignInForm.INITIAL_STATE };
  }

  public onSubmit = (event: any) => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...SignInForm.INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(SignInForm.propKey("error", error));
      });

    event.preventDefault();
  };

  public render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <StyledForm onSubmit={event => this.onSubmit(event)}>
        <StyledInput
          value={email}
          onChange={event => this.setStateWithEvent(event, "email")}
          type="text"
          placeholder="Email Address"
        />
        <StyledInput
          value={password}
          onChange={event => this.setStateWithEvent(event, "password")}
          type="password"
          placeholder="Password"
        />
        <StyledButton disabled={isInvalid} type="submit">
          Sign In
        </StyledButton>

        {error && <p>{error.message}</p>}
      </StyledForm>
    );
  }

  private setStateWithEvent(event: any, columnType: string): void {
    this.setState(SignInForm.propKey(columnType, (event.target as any).value));
  }
}
