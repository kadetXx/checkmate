import React from 'react'
import styled from 'styled-components'

import Button from '../components/Button'

const Form = styled.form`
  width: 60%;
  box-sizing: border-box;

  @media(max-width: 875px) {
    width: 99%;
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
  -webkit-appearance: none;
`

const Submit = styled(Button)`
  margin: .6rem 0;
`

function form() {
  return (
    <Form>
      <h3>Join Checkmate Community</h3>
      <Input type='text' placeholder='Your full name' />
      <Input type='email' placeholder='Your email address' />
      <Input type='text' placeholder='Phone number' />
      <Input as='select' placeholder='Select your skillset'>
        <option disabled hidden selected>Skill category</option>
        <option value="Tech Enthusiast">Tech Enthusiast</option>
        <option value="Frontend">Frontend</option>
        <option value='Backend'>Backend</option>
        <option value="UI/UX Design">UI/UX Design</option>
        <option value="Graphics Design">Graphics Design</option>
        <option value="Technical Writing">Technical Writing</option>
        <option value="Developer Advocate">Developer Advocate</option>
      </Input>
      <Submit type='submit' full> Sign Up </Submit>
    </Form>
  )
}

export default form
