import React from 'react'
import styled from 'styled-components'

import Button from '../components/Button'

const Form = styled.form`
  width: 60%;
  box-sizing: border-box;

  @media(max-width: 875px) {
    width: 98%;
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

function form() {
  return (
    <Form>
      <Input placeholder='Your full name' />
      <Input placeholder='Your email address' />
      <Input placeholder='Phone number' />
      <Button type='submit' full> Sign Up </Button>
    </Form>
  )
}

export default form
