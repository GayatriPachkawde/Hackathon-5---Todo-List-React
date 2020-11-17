import React from "react";
import App from "../App";

function Task(props) {
  return (
    <div>
      <textarea id="task" onChange={props.change} value={props.value} />
      <button id="btn" onClick={props.buttonClicked}>
        Add
      </button>
    </div>
  );
}

export default Task;
