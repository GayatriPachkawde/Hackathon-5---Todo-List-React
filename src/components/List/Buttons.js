import React from "react";
import "./listStyle.css";

function Buttons(props) {
  return (
    <div>
      <button className="edit button" onClick={props.editClicked}>
        Edit
      </button>
      <button className="delete button" onClick={props.deleteClicked}>
        Delete
      </button>
    </div>
  );
}

export default Buttons;
