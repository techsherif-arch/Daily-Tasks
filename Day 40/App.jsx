import React, { useState } from "react";
import TextInput from "./Day40/TextInput";

function App() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [submittedData, setSubmittedData] = useState(null);

  // Validation
  const errors = {
    name: formData.name ? "" : "Name is required",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ? ""
      : "Valid email required",
    password: formData.password ? "" : "Password is required",
  };

  const isValid =
    !errors.name && !errors.email && !errors.password;

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  // Clear
  const handleClear = () => {
    setFormData(initialState);
    setSubmittedData(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Signup Form</h2>

      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />

        <TextInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <TextInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <button type="submit" disabled={!isValid}>
          Submit
        </button>

        <button
          type="button"
          onClick={handleClear}
          style={{ marginLeft: "10px" }}
        >
          Clear
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Preview Panel</h3>
          <p><b>Name:</b> {submittedData.name}</p>
          <p><b>Email:</b> {submittedData.email}</p>
          <p><b>Password:</b> {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}

export default App;