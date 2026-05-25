import React from "react";

function TextInput({ label, type, name, value, onChange, error }) {
  return (
    <div>
      <label>{label}: </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
}

export default TextInput;