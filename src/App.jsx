// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  Signup,
  Login,
  VerifyEmail,
  ForgetPassword,
  Profile,
} from "./components";
import "./App.css";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp/verify-email" element={<VerifyEmail />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/dashboard" element={<Profile />} />
        </Routes>
      </Router>
      {/* <div className="bg-amber-950 h-40 w-40"></div> */}
    </>
  );
}

export default App;
