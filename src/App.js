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
  const [items, setItems] = React.useState([]);
  const [currentItem, setCurrentItem] = React.useState({ text: "", key: "" });

  React.useEffect(() => {
    const localStorageItems =
      JSON.parse(window.localStorage.getItem("items")) || [];
    const newItem = items[items.length - 1];
    const itemsToUpdate = [...localStorageItems, newItem];
    console.log(newItem);
    if (items.length !== itemsToUpdate.length) {
      window.localStorage.setItem("items", JSON.stringify(itemsToUpdate));
    }
  }, [items]);

  const handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    setCurrentItem(currentItem);
  };

  const addItem = e => {
    e.preventDefault();
    const allItems = [...items, currentItem.text];
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
        <StyledHeading>To Do</StyledHeading>
        <ToDoList items={items} />
        <ToDoForm
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
