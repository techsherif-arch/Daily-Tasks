import { useState } from "react";

function MoodBoard() {
  const [mood, setMood] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#1e1e2f" : "#fff8dc",
        color: darkMode ? "white" : "black",
        minHeight: "100vh",
        textAlign: "center",
        padding: "40px"
      }}
    >
      <h1>My Mood Board</h1>

      <h2>How are you feeling today?</h2>

      <input
        type="text"
        placeholder="Type your mood..."
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          fontSize: "16px"
        }}
      />

      <h3>
        Your Mood: {mood ? mood : "Waiting for your mood..."}
      </h3>

      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          fontSize: "16px"
        }}
      >
        {darkMode ? " Day Mode" : " Night Mode"}
      </button>
    </div>
  );
}

export default MoodBoard;