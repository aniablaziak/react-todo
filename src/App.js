import React from "react";
import { useTheme } from "./components/ThemeContext";
import ToDoForm from "./components/ToDoForm";
import Global from "./components/Global";
import Toggle from "./components/Toggle";
import styled from "styled-components";
import ClearAll from "./components/ClearAll";
import ToDoList from "./components/ToDoList";

const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  color: ${props => props.theme.body}
  width: 100vw;
  height: 100vh;
`;

const StyledHeading = styled.h1`
  font-size: 2em;
  color: ${props => props.theme.body};
  padding: 0 0 1em 0;
  letter-spacing: 5px;
  text-transform: uppercase;
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
  // Initialise items state from localStorage.
  // Initialise it here rather than in useEffect to avoid a needless re-render
  const [items, setItems] = React.useState(
    JSON.parse(window.localStorage.getItem("items")) || []
  );
  const [currentItem, setCurrentItem] = React.useState({ text: "", key: "" });

  const handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    setCurrentItem(currentItem);
  };

  const addItem = e => {
    e.preventDefault();
    const itemsToUpdate = [...items, currentItem.text];
    setItems(itemsToUpdate);
    window.localStorage.setItem("items", JSON.stringify(itemsToUpdate));
    setCurrentItem({ text: "", key: "" });
  };

  const deleteItem = e => {
    e.preventDefault();
    const filteredItems = items.filter(item => item !== e.target.value);
    setItems(filteredItems);
    window.localStorage.setItem("items", JSON.stringify(filteredItems));
  };

  return (
    <Wrapper>
      <Global />
      <Toggle onClick={() => themeState.toggle()}>
        {themeState.dark ? "🌝" : "🌚"}
      </Toggle>
      <StyledDiv>
        <StyledHeading>To Do</StyledHeading>
        <ToDoList items={items} setItems={setItems} deleteItem={deleteItem} />
        <ToDoForm
          addItem={addItem}
          inputElement={inputElement}
          handleInput={handleInput}
          currentItem={currentItem}
        />
        <ClearAll items={items} setItems={setItems} />
      </StyledDiv>
    </Wrapper>
  );
};

export default App;
