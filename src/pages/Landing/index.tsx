import * as React from "react";
import logo from "src/build-threads-logo-v1-tomato.svg";
import ContentConatiner from "src/components/contentContainer/ContentContainer";
import styled from "styled-components";

import "../Pages.css";

const Image = styled.img.attrs({ src: logo })`
  height: 500px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 5em;
`;

export const Landing = () => {
  return (
    <ContentConatiner>
      <Content>
        <Image />
        <Title>Build Threads</Title>
      </Content>
    </ContentConatiner>
  );
};
