import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex flex-col md:flex-row justify-between">
      <h1 className="text-xl font-bold">My App</h1>
      <div className="space-x-4 mt-2 md:mt-0">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;