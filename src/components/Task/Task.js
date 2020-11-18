import React from "react";
import App from "../App";
import "./task.css";

function Task(props) {
  return (
    <div className="heading">
      <span id="blockDisplay">
        <textarea
          id="task"
          onChange={props.change}
          value={props.value}
          placeholder="Enter a task"
        />
      </span>
      <button id="btn" onClick={props.buttonClicked}>
        Add
      </button>
    </div>
  );
}

export default Task;
