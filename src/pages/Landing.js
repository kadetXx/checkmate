import React from "react";
import styled from "styled-components";

import Container from "../components/Container";
import Button from "../components/Button";

const Hero = styled(Container)`
  flex-grow: 1;

  h2 {
    font-size: 2.5rem;
    color: #383e56;
    text-align: center;
    font-weight: 500;

    span {
      font-weight: 700;
    }
  }
`;

const landing = () => {
  return (
    <Hero column align='center' justify='center' padding='1rem 7%'>
      <h2>
        A New Way To Stay <span>Productive</span>! <br /> Pair up with{" "}
        <span>like minds</span> and hangout in <br /> a{" "}
        <span>virtual community</span>
      </h2>
      <Button secondary padding='1rem 6rem'>
        Sign Up For Early access
      </Button>
    </Hero>
  );
};

export default landing;
