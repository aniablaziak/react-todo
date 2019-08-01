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

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 4em;
  padding: 2em;
  border: solid 2px ${props => props.theme.body};
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
    const newItem = currentItem;
    const allItems = [...items, newItem.text];
    setItems(allItems);
    setCurrentItem({ text: "", key: "" });
  };

  return (
    <Wrapper>
      <Global />
      <Toggle onClick={() => themeState.toggle()}>
        {themeState.dark ? "🌝" : "🌚"}
      </Toggle>
      <StyledDiv>
        <ToDoForm
          items={items}
          addItem={addItem}
          inputElement={inputElement}
          handleInput={handleInput}
          currentItem={currentItem}
        />
        <ClearAll />
      </StyledDiv>
    </Wrapper>
  );
};

export default App;
