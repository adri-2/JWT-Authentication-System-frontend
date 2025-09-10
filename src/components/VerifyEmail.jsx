import React, { useState } from "react";

function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otp.trim()) {
      setMessage("Please enter the OTP code.");
      return;
    }
    // Add your OTP verification logic here
    setMessage("OTP submitted!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <label htmlFor="otp" className="block mb-2 font-semibold">
          Enter your OTP code
        </label>
        <input
          id="otp"
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter your OTP code"
          className="border p-2 rounded w-full mb-4"
          autoComplete="one-time-code"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full font-semibold"
        >
          Verify
        </button>
        {message && (
          <div className="mt-4 text-center text-red-500">{message}</div>
        )}
      </form>
    </div>
  );
}

export default VerifyEmail;
