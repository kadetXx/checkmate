import React from "react";
import styled from "styled-components";

import Container from "../components/Container";
import Button from "../components/Button";

import { Link } from "react-router-dom";

const Hero = styled(Container)`
  flex-grow: 1;

  @media(max-width: 575px) {
    padding: 2rem 7% 0;
  }

  h2 {
    font-size: 2.2rem;
    color: #383e56;
    text-align: center;
    font-weight: 500;

    @media (max-width: 805px) {
      font-size: 1.5rem;
    }

    @media (max-width: 505px) {
      & br {
        display: none;
      }
    }

    span {
      font-weight: 700;
    }
  }
`;

const StyledButton = styled(Button)`
  @media (max-width: 805px) {
    padding: 0.6rem 3rem;
  }
`;


const landing = () => {
  return (
    <Hero column align='center' justify='center' padding='2rem 7% 0'>
      <h2>
        A New Way To Stay <span>Productive</span>! <br /> meet{" "}
        <span>like minds</span> and hangout in <br /> a{" "}
        <span>virtual community</span>
      </h2>

      <Link to='/join'>
        <StyledButton secondary padding='.8rem 5rem'>
          Sign Up To Join On Slack
        </StyledButton>
      </Link>

    </Hero>
  );
};

export default landing;
