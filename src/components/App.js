import React, { useState } from "react";
import "./../styles/App.css";
import Para from "./Para/Para";
import UserInput from "./UserInput";

function App() {
  const [state, setState] = useState({
    listItem: [{ UserInput: "", id: "1" }],
  });

  function changeHandler(event, Index) {
    const arr = [...state.listItem];
    arr[Index].UserInput = event.target.value;
    setState({ listItem: arr });
    console.log(Index);
  }

  function addListItem(Index) {
    const newArr = [...state.listItem];

    newArr.push({
      UserInput: "",
      id: Number(state.listItem[Index].id) + Number(1),
    });

    setState({ listItem: newArr });
  }

  return (
    <div id="main">
      {state.listItem.map((list, Index) => {
        return (
          <div>
            <UserInput
              click={() => changeHandler(event, Index)}
              value={state.UserInput}
            />
            <Para text={state.listItem[Index].UserInput} />
            <button id="btn" onClick={() => addListItem(Index)}>
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
