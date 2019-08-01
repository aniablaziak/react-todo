import React from "react";
import styled from "styled-components";

const ToDoList = props => {
  return (
    <ul>
      {props.items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

export default ToDoList;
