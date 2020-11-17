import React, { useState } from "react";
import "./../styles/App.css";
import Task from "./Task/Task";
import ListItem from "./List/ListItem";
import Buttons from "./List/Buttons";
import EditArea from "./List/EditArea";

function App() {
  const [listState, setlistState] = useState({
    listItem: [
      { task: "", showListItem: false, showButtons: false, editEnabled: false },
    ],
    inputField: "",
  });

  function addHandler() {
    console.log(listState.listItem);
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

      setlistState({ listItem: newArr, inputField: "" });
    }
  }

  function inputChangeHandler(event) {
    const newArr = [...listState.listItem];
    const length = newArr.length;
    newArr[length - 1].task = event.target.value;
    setlistState({ listItem: newArr, inputField: event.target.value });
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
        value={listState.inputField}
      />

      {listState.listItem.map((list, Index) => {
        return (
          <div key={Index}>
            {listState.listItem[Index].showListItem ? (
              <ListItem value={listState.listItem[Index].task} />
            ) : null}

            {listState.listItem[Index].showButtons ? (
              <Buttons
                deleteClicked={() => deleteHandler(Index)}
                editClicked={() => editHandler(Index)}
              />
            ) : null}

            {listState.listItem[Index].editEnabled ? (
              <>
                <textarea
                  className="editTask"
                  onChange={() => editChangeHandler(event, Index)}
                  value={listState.listItem[Index].task}
                />
                <button className="saveTask" onClick={() => saveHandler(Index)}>
                  Save
                </button>
              </>
            ) : // <EditArea
            //   change={() => editChangeHandler(event, Index)}
            //   value={listState.listItem[Index].task}
            //   saveClicked={() => saveHandler(Index)}
            // />
            null}
          </div>
        );
      })}
    </div>
  );
}

export default App;
