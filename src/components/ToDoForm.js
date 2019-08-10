import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: ${props => props.theme.background};
  border: solid ${props => props.theme.body} 2px;
  color: ${props => props.theme.body};
  font-family: Lato;
  padding: 0.2em;
  font-size: 1.5em;
  width: 100%;
`;

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

const StyledForm = styled.form`
  display: flex;
  width: 100%;
`;

const ToDoForm = props => {
  React.useEffect(() => {
    props.inputElement.current.focus();
  }, []);
  return (
    <StyledForm onSubmit={props.addItem}>
      <StyledInput
        placeholder="Add new todo..."
        ref={props.inputElement}
        value={props.currentItem.text}
        onChange={props.handleInput}
      />
      <StyledButton type="submit">Add</StyledButton>
    </StyledForm>
  );
};

export default ToDoForm;
