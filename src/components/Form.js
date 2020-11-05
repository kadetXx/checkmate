import React from 'react'
import styled from 'styled-components'

import Button from '../components/Button'

const Form = styled.form`
  width: 50%;
  box-sizing: border-box;
`

const Input = styled.input`
  width: 100%;
  padding: .5rem 1rem;
  margin: .7rem 0;
  box-sizing: border-box;
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
