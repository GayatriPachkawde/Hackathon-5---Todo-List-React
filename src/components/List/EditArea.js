import React from "react";

function EditArea(props) {
  return (
    <div>
      <textarea
        className="editTask"
        onChange={props.change}
        value={props.value}
      />
      <button className="saveTask" onClick={props.saveClicked}>
        Save
      </button>
    </div>
  );
}

export default EditArea;
