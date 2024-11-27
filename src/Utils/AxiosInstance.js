import axios from "axios";


const AxiosInstance = axios.create({
    baseURL: "http://localhost:8080", 
    withCredentials: true, 
    headers: {
        "Content-Type": "application/json",
    },
});

AxiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("jwtToken"); 
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


AxiosInstance.interceptors.response.use(
    (response) => {
      // Simply return the response if no error
      console.log("No error in code");
      return response;
    },
    (error) => {
      // Check for 401 status
      if (error.response && error.response.status === 401) {
        console.log("Unauthorized access (401).");
        // Resolve the error as a custom response
        return Promise.resolve({
          data: null,
          status: 401,
          message: "Invalid email or password",
        });
      }

      // Check for 400 status
      if (error.response && error.response.status === 400) {
        console.log("Bad Request (400).");
        // Resolve the error as a custom response
        return Promise.resolve({
          data: null,
          status: 400,
          message: error.response.data?.message || "Bad request. Please check your input.",
        });
      }

      // For other errors, reject the promise
      return Promise.reject(error);
    }
  );
  

export default AxiosInstance;


