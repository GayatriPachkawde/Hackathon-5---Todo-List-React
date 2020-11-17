import React from "react";
import Buttons from "./Buttons/Buttons";

function EditArea(props) {
  return (
    <div>
      <textarea
        className="editTask"
        value={props.value}
        onChange={props.changed}
      />
      <button className="saveTask" onClick={props.saveClicked}>
        Save
      </button>
    </div>
  );
}

export default EditArea;
