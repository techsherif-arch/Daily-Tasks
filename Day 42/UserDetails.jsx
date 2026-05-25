import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>User ID: {id}</h1>

      <button onClick={() => navigate("/users")}>
        Back to Users
      </button>
    </div>
  );
}

export default UserDetails;