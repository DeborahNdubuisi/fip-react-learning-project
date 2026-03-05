import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background: #222;
  padding: 20px;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>Student Task Tracker</Title>
    </HeaderContainer>
  );
}

export default Header;