import React from "react";
import Navbar from "./Day43/Navbar";
import Card from "./Day43/Card";
import ButtonGroup from "./Day43/ButtonGroup";

function App() {
  const commonBtn =
    "bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline active:scale-95";

  return (
    <div>
      <Navbar />

      <Card
        title="Day 43 Task"
        text="Learning Tailwind CSS in React"
      />

      <ButtonGroup btnStyle={commonBtn} />
    </div>
  );
}

export default App;