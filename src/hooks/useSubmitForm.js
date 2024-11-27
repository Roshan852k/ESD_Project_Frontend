import { useState } from "react";
import AxiosInstance from "../Utils/AxiosInstance";

const useSubmitForm = (url) => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = async (formData, onSuccess) => {
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await AxiosInstance.post(url, formData);
      if (response.status === 200) {
        setSuccessMessage("Course added successfully!!");
        onSuccess?.();    // Trigger the reset callback
      } else {
        setErrorMessage(response.data?.message || "Failed to submit form.");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return { submitForm, loading, successMessage, errorMessage };
};

export default useSubmitForm;
