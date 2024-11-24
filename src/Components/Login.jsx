import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <div className="login-container">
      <div className="card p-4 shadow login-card">
        <h4 className="text-center">Log In</h4>
        <form>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
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
