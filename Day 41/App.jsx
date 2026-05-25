// import React, { useState } from "react";
// import TextInput from "./Day40/TextInput";

// function App() {
//   const initialState = {
//     name: "",
//     email: "",
//     password: "",
//   };

//   const [formData, setFormData] = useState(initialState);
//   const [submittedData, setSubmittedData] = useState(null);

//   // Validation
//   const errors = {
//     name: formData.name ? "" : "Name is required",
//     email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
//       ? ""
//       : "Valid email required",
//     password: formData.password ? "" : "Password is required",
//   };

//   const isValid =
//     !errors.name && !errors.email && !errors.password;

//   // Handle input
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData(formData);
//   };

//   // Clear
//   const handleClear = () => {
//     setFormData(initialState);
//     setSubmittedData(null);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Signup Form</h2>

//       <form onSubmit={handleSubmit}>
//         <TextInput
//           label="Name"
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           error={errors.name}
//         />

//         <TextInput
//           label="Email"
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           error={errors.email}
//         />

//         <TextInput
//           label="Password"
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           error={errors.password}
//         />

//         <button type="submit" disabled={!isValid}>
//           Submit
//         </button>

//         <button
//           type="button"
//           onClick={handleClear}
//           style={{ marginLeft: "10px" }}
//         >
//           Clear
//         </button>
//       </form>

//       {submittedData && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>Preview Panel</h3>
//           <p><b>Name:</b> {submittedData.name}</p>
//           <p><b>Email:</b> {submittedData.email}</p>
//           <p><b>Password:</b> {submittedData.password}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;




import React, { useState, useEffect, useCallback, useMemo } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  // fetch users
  const fetchUsers = useCallback(() => {
    const controller = new AbortController();

    fetch(
      `https://jsonplaceholder.typicode.com/users?name_like=${filter}`,
      { signal: controller.signal }
    )
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.log(err);
        }
      });

    return () => {
      console.log("Cleanup running...");
      controller.abort();
    };
  }, [filter]);

  // useEffect on mount + filter change
  useEffect(() => {
    const cleanup = fetchUsers();
    return cleanup;
  }, [fetchUsers]);

  // useMemo for average id
  const averageId = useMemo(() => {
    if (users.length === 0) return 0;

    let total = users.reduce((sum, user) => sum + user.id, 0);
    return (total / users.length).toFixed(2);
  }, [users]);

  return (
    <div>
      <h1>Day 41 Task</h1>

      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <button onClick={fetchUsers}>Refresh</button>

      <h3>Average ID: {averageId}</h3>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;