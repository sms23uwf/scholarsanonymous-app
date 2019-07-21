import React from "react";

const Checkbox = ({ id, label, onCheckboxChange }) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        id={id}
        name={id}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      <p>{label}</p>
    </label>
  </div>
);

export default Checkbox;
