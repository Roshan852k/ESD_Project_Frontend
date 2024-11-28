import React, {useState } from "react";
// import {useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useLogin from "../../hooks/useLogin";
import LoginForm from "../Presenation/LoginForm";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { errorMessage, handleSubmit } = useLogin(); 
  
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(email, password);
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center min-vh-100">
      <LoginForm 
        email={email}
        password={password}
        errorMessage={errorMessage}
        onSubmit={onSubmit}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </div>
  );
};

export default Login;
