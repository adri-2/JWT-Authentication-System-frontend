import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const accessToken = JSON.parse(localStorage.getItem("access"));
  useEffect(() => {
    if (!user || !accessToken) {
      navigate("/login");
    }
  }, []);
  if (!user || !accessToken) {
    return null;
  }

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        padding: "2rem",
        border: "1px solid #ddd",
        borderRadius: 8,
        background: "#fafafa",
      }}
    >
      <h2>Welcome, {user.names}!</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Username:</strong> {user.full_name}
      </p>
    </div>
  );
}

export default Profile;
