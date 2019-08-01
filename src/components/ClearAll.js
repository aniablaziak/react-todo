import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => props.theme.background};
  border: solid ${props => props.theme.body} 2px;
  color: ${props => props.theme.body};
  font-family: Lato;
  padding: 0.2em;
  font-size: 1.5em;
  margin-left: 0.2em;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.hoverBody};
    background-color: ${props => props.theme.hoverBackground};
  }
`;

const ClearAll = () => {
  const clearLocalStorage = () => {
    localStorage.clear();
    console.log(localStorage);
  };

  return (
    <div>
      <StyledButton onClick={clearLocalStorage}>Clear all</StyledButton>
    </div>
  );
};

export default ClearAll;
