import React from "react";
import styled from "styled-components";

// components
import Header from "./Header";
import Content from "./Content";

const ComingSoonPage = () => {
  return (
    <Wrapper>
      <Header />
      <Content />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export default ComingSoonPage;
