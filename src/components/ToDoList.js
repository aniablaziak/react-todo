import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 2;
  font-size: 1.5em;
`;

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.body};
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

const StyledButton = styled.button`
  background-color: ${props => props.theme.background};
  border: solid ${props => props.theme.body} 2px;
  color: ${props => props.theme.body};
  font-family: Lato;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.hoverBody};
    background-color: ${props => props.theme.hoverBackground};
  }
`;

const ToDoList = props => {
  return (
    <StyledUl>
      {props.items.map((item, i) => (
        <StyledLi onDelete={props.handleItemDelete} key={i}>
          {item}
          <StyledButton value={item} onClick={props.deleteItem}>
            Delete
          </StyledButton>
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default ToDoList;
