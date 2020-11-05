import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'

const Text = styled.p`
  text-align: center;

`

const Footer = () => {
  return (
    <Container as='footer' justify='center' align='center' padding='1rem'>
      <Text>© checkmate africa 2020</Text>
    </Container>
  )
}

export default Footer
