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
  color: ${props => props.theme.body};
  cursor: pointer;
  &:hover {
    color: grey;
    text-decoration: line-through;
  }
`;

const ToDoList = props => {
  return (
    <StyledUl>
      {props.items.map((item, i) => (
        <StyledLi key={i}>{item}</StyledLi>
      ))}
    </StyledUl>
  );
};

export default ToDoList;
