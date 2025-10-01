import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

import { toast } from "react-toastify";

function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const jwt_access = JSON.parse(localStorage.getItem("access"));
  useEffect(() => {
    if (jwt_access === null && !user) {
      navigate("/login");
    } else {
      getSomeData();
    }
  }, [jwt_access, user]);

  const refresh = JSON.parse(localStorage.getItem("refresh"));

  const getSomeData = async () => {
    const resp = await axiosInstance.get("/profile/");
    if (resp.status === 200) {
      console.log(resp.data);
    }
  };

  const handleLogout = async () => {
    const res = await axiosInstance.post("/logout/", {
      refresh_token: refresh,
    });
    if (res.status === 200) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("user");
      navigate("/login");
      toast.success("Logged out successfully");
    }
  };

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
      <button
        onClick={handleLogout}
        className="logout-btn bg-blue-600 rounded text-white px-4 py-2 mt-4 hover:bg-blue-700"
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
