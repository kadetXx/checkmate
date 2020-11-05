import React from 'react'
import styled from 'styled-components'

import Button from '../components/Button'

const Form = styled.form`
  width: 60%;
  box-sizing: border-box;

  @media(max-width: 875px) {
    width: 98%;
  }

  & h3 {
    color: #383e56;
  }
`

const Input = styled.input`
  width: 100%;
  padding: .7rem 1rem;
  margin: .6rem 0;
  box-sizing: border-box;
  border: 1px solid #efefef;
  outline: none;
`

const Submit = styled(Button)`
  margin: .6rem 0;
`

function form() {
  return (
    <Form>
      <h3>Join Checkmate Community</h3>
      <Input placeholder='Your full name' />
      <Input placeholder='Your email address' />
      <Input placeholder='Phone number' />
      <Submit type='submit' full> Sign Up </Submit>
    </Form>
  )
}

export default form
