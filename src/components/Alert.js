import React from 'react'
import styled from 'styled-components';

import Container from '../components/Container';
import Button from '../components/Button'

const Shadow = styled(Container)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  background-color: #FAFAFE;

`

const Box = styled(Container)`
  background-color: #FAFAFE;
  text-align: center;
  border-radius: 6px;

  @media(max-width: 805px) {
    width: 100%;
    padding: 0;

    & br {
      display: none;
    }
  }

  & h2 {
    margin: .5rem 0;
    color: #383e56;
  }

  & p {
    margin: 1rem 0;
    color: #60698a;
  }

  & button {
    margin: 1rem 0;
  }

`

function Alert( {alert, completed} ) {
  return (
    <Shadow justify='center' align='center' padding='7%' >
      <Box column justify='center' align='center' padding='3rem 2rem' w='100%' >
        <h2> Thank You!</h2>
        <p>You have successfully registered to join our community, we look forward to <br/> meeting you on the workspace. An official invite will be sent to your <br/> email within the next 24hours. Welcome to Checkmate! </p>
        <Button padding='.7rem 4rem' onClick={() => [alert(false), completed(true)]} >Exit</Button>
      </Box>
    </Shadow>
  )
}

export default Alert
