import React from "react";

const Signup = () => {
  const [form, setForm] = React.useState({
    name: "",
    firstName: "",
    password: "",
    passwordConfirm: "",
    email: "",
  });
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.firstName ||
      !form.password ||
      !form.passwordConfirm ||
      !form.email
    ) {
      setError("All fields are required.");
      return;
    }
    if (form.password !== form.passwordConfirm) {
      setError("Passwords do not match.");
      return;
    }
    // TODO: Add API call here
    setSuccess("Account created successfully!");
    setForm({
      name: "",
      firstName: "",
      password: "",
      passwordConfirm: "",
      email: "",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <div className="flex flex-col justify-center items-center p-8 shadow-2xl gap-y-4 bg-white rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2">Création de compte</h2>
        {error && <div className="text-red-600">{error}</div>}
        {success && <div className="text-green-600">{success}</div>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-full">
          <div className="flex flex-col items-start">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              className="border rounded text-gray-700 px-2 py-1 w-full"
              value={form.name}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="firstName">First Name:</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="border rounded text-gray-700 px-2 py-1 w-full"
              value={form.firstName}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              className="border rounded text-gray-700 px-2 py-1 w-full"
              value={form.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="passwordConfirm">Password Confirmation:</label>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              className="border rounded text-gray-700 px-2 py-1 w-full"
              value={form.passwordConfirm}
              onChange={handleChange}
              autoComplete="new-password"
              placeholder="*****"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="email">Email Address:</label>
            <input
              id="email"
              name="email"
              type="email"
              className="border rounded text-gray-700 px-2 py-1 w-full"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>
          <div className="flex gap-x-4 justify-center">
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-600 w-full p-2 rounded text-white font-semibold cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="my-2 text-gray-500">Or</div>
        <div className="flex flex-col gap-y-2 w-full">
          <button className="border-2 border-gray-800 hover:bg-gray-700 text-xl hover:text-white rounded p-2 w-full cursor-pointer">
            Sign up with Github
          </button>
          <button className="border-2 border-blue-800 hover:bg-blue-800 text-xl hover:text-white rounded p-2 w-full cursor-pointer">
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
