import React from "react";

function EditArea(props) {
  return (
    <div>
      <textarea id="editTask" onChange={props.change} value={props.value} />
      <button id="saveTask" onClick={props.saveClicked}>
        Save
      </button>
    </div>
  );
}

export default EditArea;
