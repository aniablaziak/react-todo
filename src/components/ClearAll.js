import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-self: flex-end;
`;

const StyledButton = styled.button`
  background-color: ${props => props.theme.background};
  border: solid ${props => props.theme.body} 2px;
  color: ${props => props.theme.body};
  font-family: Lato;
  padding: 0.2em;
  margin-top: 1em;
  font-size: 1.5em;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.hoverBody};
    background-color: ${props => props.theme.hoverBackground};
  }
`;

const ClearAll = () => {
  const clearLocalStorage = () => {
    localStorage.removeItem("items");
  };

  return (
    <StyledDiv>
      <StyledButton onClick={clearLocalStorage}>Clear all</StyledButton>
    </StyledDiv>
  );
};

export default ClearAll;
