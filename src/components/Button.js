import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border: 1px solid ${props => props.secondary ? '#3F3784' : '#3F3784' };
  background: ${props => props.outline? 'transparent' : props.secondary? '#3F3784' : '#3F3784'};
  width: ${props => props.full ? '100%' : props.half ? '50%' : 'fit-content'};
  padding: ${props => props.padding};
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
`

const Button = (props) => {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
  secondary: PropTypes.bool,
  outline: PropTypes.bool,
  full: PropTypes.bool,
  half: PropTypes.bool,
  padding: PropTypes.string
}

Button.defaultProps = {
  padding: '.7rem 2rem'
}

export default Button
