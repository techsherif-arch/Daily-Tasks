import React from "react";

function ButtonGroup({ btnStyle }) {
  return (
    <div className="m-4 space-x-4">
      <button className={btnStyle}>Save</button>
      <button className={btnStyle}>Delete</button>
    </div>
  );
}

export default ButtonGroup;