import React from 'react'
import styled from 'styled-components'

import Form from '../components/Form'
import Container from '../components/Container'

const FormContainer = styled(Container)`
  flex-grow: 1;
`

function signup() {
  return (
    <FormContainer justify='center' align='center' padding='4rem 7% 1rem' >
      <Form />
    </FormContainer>
  )
}

export default signup
