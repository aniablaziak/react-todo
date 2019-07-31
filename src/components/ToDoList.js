import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 4em;
  padding: 2em;
  border: solid 2px ${props => props.theme.body};
`;

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

  &:hover {
    color: ${props => props.theme.hoverBody};
    background-color: ${props => props.theme.hoverBackground};
  }
`;

const StyledForm = styled.form`
  display: flex;
`;

class ToDoList extends React.Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }
  render() {
    return (
      <StyledDiv>
        <StyledHeading>To Do</StyledHeading>
        <StyledForm onSubmit={this.props.addItem}>
          <StyledInput
            placeholder="Task"
            ref={this.props.inputElement}
            value={this.props.currentItem.text}
            onChange={this.props.handleInput}
          />
          <StyledButton type="submit">Add</StyledButton>
        </StyledForm>
      </StyledDiv>
    );
  }
}

export default ToDoList;
