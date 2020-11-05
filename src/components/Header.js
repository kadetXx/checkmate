import React from "react";
import styled from "styled-components";
import Container from './Container'

const Header = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
`

const TextLogo = styled.h1`
  font-size: 2rem;
  margin: 0;
  color: #3F3784;
  text-align: center;
  font-weight: bolder;

  @media(max-width: 805px) {
    font-size: 1.5rem
  }
`;

const Icon = styled.a`
  color: #3F3784;
  text-decoration: none;
  font-size: 1.35rem;
  margin-left: 1rem;

  @media(max-width: 805px) {
    font-size: 1.1rem
  }

  &:hover {
    color: #383e56;
  }
`

const header = () => {
  return (
    <Header justify='space-between' align='center' padding='1.5rem 7%'>
      <TextLogo>Checkmate</TextLogo>
      <Container justify='space-between' align='center' padding='0 0 0 3rem' w='fit-content'>
        <Icon href='#'> <i class="fab fa-github"></i> </Icon>
        <Icon href='#'> <i class="fab fa-facebook-f"></i> </Icon>
        <Icon href='#'> <i class="fab fa-twitter"></i> </Icon>
        <Icon href='#'> <i class="fab fa-instagram"></i> </Icon>
      </Container>
    </Header>
  );
};

export default header;
