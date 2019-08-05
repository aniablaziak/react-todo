import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  font-size: 3em;
  margin: 0.5em;
  border: none;
  background: ${props => props.theme.background};
  cursor: pointer;
`;

const Toggle = props => {
  return (
    <StyledDiv>
      <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
    </StyledDiv>
  );
};

export default Toggle;
