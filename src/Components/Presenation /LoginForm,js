import React from "react";

const LoginForm = ({ email, password, errorMessage, onSubmit, setEmail, setPassword }) => {
  return (
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
  );
};

export default LoginForm;
