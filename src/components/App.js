import React, { useState } from "react";
import "./../styles/App.css";
import Para from "./Para/Para";
import UserInput from "./UserInput";
import Buttons from "./Buttons/Buttons";
import "./style.css";
import EditArea from "./EditArea";

function App() {
  const [state, setState] = useState({
    listItem: [
      {
        UserInput: "",
        id: "1",
        showTextArea: true,
        showEditandDlt: false,
        showAddBtn: true,
        showPara: true,
        showTextAreaforEdit: false,
        showSaveButton: true,
        showListItem: true,
        editEnabled: false,
      },
    ],
  });

  function changeHandler(event, Index) {
    const arr = [...state.listItem];
    arr[Index].UserInput = event.target.value;
    setState({ listItem: arr });
  }

  function addListItem(Index) {
    if (state.listItem[Index].UserInput.length > 0) {
      const newArr = [...state.listItem];
      newArr[Index].showTextArea = false;
      newArr[Index].showEditandDlt = true;
      newArr[Index].showAddBtn = false;

      newArr.push({
        UserInput: "",
        id: Number(state.listItem[Index].id) + Number(1),
        showTextArea: true,
        showEditandDlt: false,
        showEditandDlt: false,
        showAddBtn: true,
        showPara: true,
        showTextAreaforEdit: false,
        showSaveButton: true,
        showListItem: true,
        editEnabled: false,
      });

      setState({ listItem: newArr });
    }
  }

  function editHandler(Index) {
    const newArr = [...state.listItem];
    newArr[Index].showEditandDlt = false;
    newArr[Index].showSaveButton = true;
    newArr[Index].editEnabled = true;

    setState({ listItem: newArr });
  }

  function deleteHandler(Index) {
    const newArr = [...state.listItem];

    newArr[Index].showListItem = false;

    setState({ listItem: newArr });
  }

  function saveHandler(Index) {
    if (state.listItem[Index].UserInput.length > 0) {
      const newArr = [...state.listItem];
      newArr[Index].showTextArea = false;
      newArr[Index].showEditandDlt = true;
      newArr[Index].showAddBtn = false;
      newArr[Index].editEnabled = false;

      setState({ listItem: newArr });
    }
  }
  function changeHandler2(event, Index) {
    const arr = [...state.listItem];
    arr[Index].UserInput = event.target.value;
    setState({ listItem: arr });
  }

  return (
    <div id="main">
      {state.listItem.map((list, Index) => {
        return (
          <div className="list">
            {state.listItem[Index].showListItem ? (
              <div className="listItem">
                {state.listItem[Index].showTextArea ? (
                  <UserInput
                    click={() => changeHandler(event, Index)}
                    value={state.listItem[Index].UserInput}
                  />
                ) : null}
                {state.listItem[Index].editEnabled ? (
                  <EditArea
                    changed={() => changeHandler2(event, Index)}
                    value={state.listItem[Index].UserInput}
                    saveClicked={() => saveHandler(Index)}
                  />
                ) : null}

                {state.listItem[Index].showPara ? (
                  <Para text={state.listItem[Index].UserInput} />
                ) : null}
                {state.listItem[Index].showAddBtn ? (
                  <button id="btn" onClick={() => addListItem(Index)}>
                    Add
                  </button>
                ) : null}
                {state.listItem[Index].showEditandDlt ? (
                  <Buttons
                    editClicked={() => editHandler(Index)}
                    deleteClicked={() => deleteHandler(Index)}
                  />
                ) : null}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default App;
