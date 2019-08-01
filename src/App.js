import React from "react";
import { useTheme } from "./components/ThemeContext";
import ToDoForm from "./components/ToDoForm";
import Global from "./components/Global";
import Toggle from "./components/Toggle";
import styled from "styled-components";
import ClearAll from "./components/ClearAll";

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
  const [currentItem, setCurrentItem] = React.useState({ text: "", key: "" });

  const handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    setCurrentItem(currentItem);
    console.log("handle input: ", currentItem.text);
  };

  const addItem = e => {
    e.preventDefault();
    // const newItem = currentItem;
    // create a new array
    // const allItems = [...items, newItem.text];
    // update the state with this array
    // setItems(allItems);
    // console.log(allItems, items);
    setItems(true);
    console.log(items);
  };

  return (
    <Wrapper>
      <Global />
      <Toggle onClick={() => themeState.toggle()}>
        {themeState.dark ? "🌝" : "🌚"}
      </Toggle>
      <ToDoForm
        addItem={addItem}
        inputElement={inputElement}
        handleInput={handleInput}
        currentItem={currentItem}
      />
      <ClearAll />
    </Wrapper>
  );
};

export default App;
