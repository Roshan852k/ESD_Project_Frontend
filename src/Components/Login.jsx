import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AxiosInstance from '../Utils/AxiosInstance';


// function Login() {
//   return (
//     <div className="login-container">
//       <div className="card p-4 shadow login-card">
//         <h4 className="text-center">Log In</h4>
//         <form>
//           <div className="mb-3">
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Email"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Password"
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary w-100">
//             Log In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setError] = useState("");
  const navigate = useNavigate(); // To redirect the user after login

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      // Send login request
      const response = await AxiosInstance.post("api/v1/auth/login", { email, password });

      if (response.status === 401) {
        setError(response.message); // Use the custom message
        return;
      }

      // Extract JWT token from response
      console.log("Data received:", response.data);
      console.log("Response Headers:", response.headers);
      const token = response.headers.authorization; ; // Adjust this based on your backend's response
      console.log("Token received:", token);

      // Save token to localStorage
      localStorage.setItem("jwtToken", token);

      // Success message
      alert("Login successful!");

      // Redirect to form
      navigate("/form");
    } 
    catch (err) {
      console.error("Login error:", err);

      // Check if the error has a response and a message
      if (err.response && err.response.data) {
        setError(err.response.data.message || "Invalid email or password");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };


  return (
    <div className="login-container">
      <div className="card p-4 shadow login-card">
        <h4 className="text-center">Log In</h4>
        {errorMessage && (
          <div className="alert alert-danger text-center">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

