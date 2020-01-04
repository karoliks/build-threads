import * as React from "react";
import styled from "styled-components";

import { auth } from "../../firebase";

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

export class PasswordForgetForm extends React.Component {
  private static INITIAL_STATE = {
    email: "",
    error: null
  };

  private static propKey(propertyName: string, value: string) {
    return { [propertyName]: value };
  }

  constructor(props: any) {
    super(props);

    this.state = { ...PasswordForgetForm.INITIAL_STATE };
  }

  public onSubmit = (event: any) => {
    const { email }: any = this.state;

    auth
      .doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...PasswordForgetForm.INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(PasswordForgetForm.propKey("error", error));
      });

    event.preventDefault();
  };

  public render() {
    const { email, error }: any = this.state;
    const isInvalid = email === "";

    return (
      <StyledForm onSubmit={event => this.onSubmit(event)}>
        <StyledInput
          value={email}
          onChange={event => this.setStateWithEvent(event, "email")}
          type="text"
          placeholder="Email Address"
        />
        <StyledButton disabled={isInvalid} type="submit">
          Reset My Password
        </StyledButton>

        {error && <p>{error.message}</p>}
      </StyledForm>
    );
  }

  private setStateWithEvent(event: any, columnType: string): void {
    this.setState(
      PasswordForgetForm.propKey(columnType, (event.target as any).value)
    );
  }
}
