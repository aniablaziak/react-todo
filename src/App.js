import React from "react";
import { useTheme } from "./components/ThemeContext";
import ToDoList from "./components/ToDoList";
import Global from "./components/Global";
import Toggle from "./components/Toggle";
import styled from "styled-components";

const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  color: ${props => props.theme.body}
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  const themeState = useTheme();
  const inputElement = React.createRef();
  const [items, setItems] = React.useState([]);
  const currentItem = React.useState({ text: "", key: "" });

  const handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    setItems({
      currentItem
    });
    console.log("handle input", currentItem);
  };

  const addItem = e => {
    e.preventDefault();
    console.log("add item");
  };

  return (
    <Wrapper>
      <Global />
      <Toggle onClick={() => themeState.toggle()}>
        {themeState.dark ? "🌝" : "🌚"}
      </Toggle>
      <ToDoList
        addItem={addItem}
        inputElement={inputElement}
        handleInput={handleInput}
        currentItem={currentItem}
      />
    </Wrapper>
  );
};

export default App;
