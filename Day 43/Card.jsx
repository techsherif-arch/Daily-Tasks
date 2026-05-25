import React from "react";

function Card({ title, text }) {
  return (
    <div className="border p-6 rounded-lg shadow-md m-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

export default Card;