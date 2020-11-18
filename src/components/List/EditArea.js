import React from "react";

function EditArea(props) {
  return (
    <>
      <span style={{ display: "block" }}>
        <textarea
          className="editTask"
          onChange={props.change}
          value={props.value}
        />
      </span>
      <button className="saveTask" onClick={props.saveClicked}>
        Save
      </button>
    </>
  );
}

export default EditArea;
