import React from "react";

function UserInput(props) {
  return <textarea id="task" onChange={props.click} />;
}

export default UserInput;
