import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../Utils/AxiosInstance";

const useLogin = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (email, password) => {
    try {
      const response = await AxiosInstance.post("api/v1/auth/login", { email, password });

      if (response.status === 401) {
        setErrorMessage(response.message || "Unauthorized");
        return;
      }

      const token = response.headers.authorization; // Adjust based on your backend's response
      localStorage.setItem("jwtToken", token);

      alert("Login successful!");
      navigate("/form");
    } catch (err) {
      console.error("Login error:", err);
      if (err.response && err.response.data) {
        setErrorMessage(err.response.data.message || "Invalid email or password");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  return {
    errorMessage,
    handleSubmit,
  };
};

export default useLogin;
