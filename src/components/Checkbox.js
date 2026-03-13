import React from "react";

function Checkbox({ label }) {
  return (
    <label>
      <input type="checkbox" />
      {label}
    </label>
  );
}

export default Checkbox;