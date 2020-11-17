import React from "react";

function Buttons(props) {
  return (
    <div>
      <button className="edit" onClick={props.editClicked}>
        Edit
      </button>
      <button className="delete" onClick={props.deleteClicked}>
        Delete
      </button>
    </div>
  );
}

export default Buttons;
