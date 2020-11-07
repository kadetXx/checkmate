import styled from "styled-components";

import Container from "../Container";
import Button from "../Button";

export const StyledForm = styled.form`
  width: 60%;
  box-sizing: border-box;

  @media (max-width: 875px) {
    width: 99%;
  }

  & h3 {
    color: #383e56;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.7rem 1rem;
  margin: 0.6rem 0;
  box-sizing: border-box;
  border: 1px solid #efefef;
  outline: none;
  -webkit-appearance: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const Submit = styled(Button)`
  margin: 0.6rem 0;
`;

export const Error = styled(Container)`
  margin: 0.6rem 0;
  background-color: #fff3cd;
  color: #8c6c10;

  & span {
    margin: 0 0.5rem 0 0;
    padding: 0;
    font-size: 1.1rem;
  }

  & p {
    margin: 0;
    font-size: 0.8rem;
  }

  & small {
    display: none;
  }
`;
