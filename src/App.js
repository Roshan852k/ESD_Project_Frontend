import React from "react";
import Login from "./Components/Login"; // Importing the Login component
import Form from "./Components/Form"; // Importing the Login component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css"; 

// function App() {
//   return (
//     <div>
//       <Login />
//     </div>
//   );
// }


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default route */}
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;


