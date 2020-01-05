import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import anonymous from "../anonymous.svg";
import * as routes from "../constants/routes";
import { SignOutButton } from "./SignOutButton";

const ImageButton = styled.button`
  background: none;
  border: none;

  &:focus {
    border: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const FullDropDown = styled.div`
  /* float: right; */
  /* right: 0; */
`;

const DropDownContent = styled.div`
  position: absolute;
  background: white;
  z-index: 1;
  width: 160px;
  right: 0;
  border-style: solid;
  border-color: #ddd;
  border-width: 1px;

  div {
    background: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    border-bottom-style: solid;
    border-bottom-color: #ddd;
    border-bottom-width: 1px;

    &:hover {
      background: #ddd;
      cursor: pointer;
    }
  }
`;

const Image = styled.img.attrs({ src: anonymous })`
  /* height: 400px; */
  height: 50px;
  width: 50px;
  background: rgb(232, 240, 254);
  border-radius: 50%;
  border-style: solid;
  border-color: tomato;
  object-fit: contain;
  border-width: 2px;
`;

function DropDown() {
  const [show, setShow] = useState(false);

  const showMenu = () => setShow(!show);

  //   const close = ()

  const linkStyle = {
    color: "black",
    textDecoration: "none"
  };

  return (
    <FullDropDown>
      <ImageButton onClick={showMenu}>
        {/* Show menu. Current state: {show.toString()} */}
        <Image />
      </ImageButton>
      {show ? (
        <DropDownContent>
          <div>
            <Link style={linkStyle} to={routes.ACCOUNT}>
              My account
            </Link>
          </div>

          <div>
            <SignOutButton />
          </div>
        </DropDownContent>
      ) : null}
    </FullDropDown>
  );
}

export default DropDown;
