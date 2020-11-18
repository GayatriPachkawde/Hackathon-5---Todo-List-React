import React, { useState } from "react";
import "./../styles/App.css";
import Task from "./Task/Task";
import ListItem from "./List/ListItem";
import Buttons from "./List/Buttons";
import EditArea from "./List/EditArea";

function App() {
  const [inputState, setInputstate] = useState({ inputField: "" });
  const [listState, setlistState] = useState({
    listItem: [
      { task: "", showListItem: false, showButtons: false, editEnabled: false },
    ],
  });

  function addHandler() {
    const newArr = [...listState.listItem];
    const length = newArr.length;
    if (listState.listItem[length - 1].task.length > 0) {
      newArr[length - 1].showListItem = true;
      newArr[length - 1].showButtons = true;
      newArr.push({
        task: "",
        showListItem: false,
        showButtons: false,
        editEnabled: false,
      });

      setlistState({ listItem: newArr });
      setInputstate({ inputField: "" });
    }
  }

  function inputChangeHandler(event) {
    const newArr = [...listState.listItem];
    const length = newArr.length;
    newArr[length - 1].task = event.target.value;
    setlistState({ listItem: newArr });
    setInputstate({ inputField: event.target.value });
  }

  function deleteHandler(Index) {
    const newArr = [...listState.listItem];
    newArr.splice(Index, 1);

    setlistState({ listItem: newArr });
  }

  function editHandler(Index) {
    const newArr = [...listState.listItem];
    newArr[Index].editEnabled = true;
    newArr[Index].showButtons = false;
    setlistState({ listItem: newArr });
  }

  function editChangeHandler(event, Index) {
    const newArr = [...listState.listItem];
    newArr[Index].task = event.target.value;
    setlistState({ listItem: newArr });
  }

  function saveHandler(Index) {
    if (listState.listItem[Index].task.length > 0) {
      const newArr = [...listState.listItem];
      newArr[Index].showButtons = true;
      newArr[Index].editEnabled = false;
      setlistState({ listItem: newArr });
    }
  }

  return (
    <div id="main">
      <Task
        buttonClicked={addHandler}
        change={inputChangeHandler}
        value={inputState.inputField}
      />

      {listState.listItem.map((list, Index) => {
        return (
          <div className="block" key={Index}>
            {listState.listItem[Index].editEnabled ? (
              <EditArea
                change={() => editChangeHandler(event, Index)}
                value={listState.listItem[Index].task}
                saveClicked={() => saveHandler(Index)}
              />
            ) : null}
            {listState.listItem[Index].showListItem ? (
              <ListItem value={listState.listItem[Index].task} />
            ) : null}

            {listState.listItem[Index].showButtons ? (
              <Buttons
                deleteClicked={() => deleteHandler(Index)}
                editClicked={() => editHandler(Index)}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default App;
