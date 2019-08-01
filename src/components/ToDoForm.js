import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: 2em;
  color: ${props => props.theme.body};
  padding: 0 0 1em 0;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

const StyledInput = styled.input`
  background-color: ${props => props.theme.background};
  border: solid ${props => props.theme.body} 2px;
  color: ${props => props.theme.body};
  font-family: Lato;
  padding: 0.2em;
  font-size: 1.5em;
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
`;

const ToDoForm = props => {
  // React.useEffect(() => {
  //   props.inputElement.current.focus();
  //   console.log(props);
  // }, []);
  return (
    <div>
      <StyledHeading>To Do</StyledHeading>
      <StyledForm onSubmit={props.addItem}>
        <StyledInput
          placeholder="Task"
          ref={props.inputElement}
          value={props.currentItem.text}
          onChange={props.handleInput}
        />
        <StyledButton type="submit">Add</StyledButton>
      </StyledForm>
    </div>
  );
};

export default ToDoForm;
