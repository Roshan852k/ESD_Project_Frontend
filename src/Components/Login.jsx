import React, { useEffect, useState } from "react";
// import {useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useLogin from "../hooks/useLogin";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { errorMessage, handleSubmit } = useLogin();
  // const {navigate} = useNavigate;

//   useEffect(() => {
//     const handlePopState = () => {
//         // Clear localStorage and redirect to login
//         localStorage.clear();
//         navigate("/login", { replace: true });
//     };

//     window.addEventListener("popstate", handlePopState);

//     // Cleanup listener on unmount
//     return () => {
//         window.removeEventListener("popstate", handlePopState);
//     };
// }, [navigate])

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(email, password);
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow login-card" style={{ width: '300px' }}>
        <h4 className="text-center">Log In</h4>
        
        {errorMessage && (
          <div className="alert alert-danger text-center">{errorMessage}</div>
        )}

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
};


//   return (
//     <div className="login-container d-flex justify-content-center align-items-center min-vh-100">
//       <LoginForm 
//         email={email}
//         password={password}
//         errorMessage={errorMessage}
//         onSubmit={onSubmit}
//         setEmail={setEmail}
//         setPassword={setPassword}
//       />
//     </div>
//   );
// };

export default Login;
