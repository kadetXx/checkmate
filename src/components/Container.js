import React from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: ${props => props.w};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) => props.justify};
  align-items: ${props => props.align};
  padding: ${(props) => props.padding};
`;

function Container(props) {
  return (
    <StyledContainer {...props}>
      {props.children}
    </StyledContainer>
  )
}

Container.propTypes = {
  w: PropTypes.string.isRequired,
  column: PropTypes.bool,
  justify: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired
}

Container.defaultProps = {
  w: '100%',
  justify: 'space-between',
  align: 'flex-start',
  padding: '0'
}

export default Container;
