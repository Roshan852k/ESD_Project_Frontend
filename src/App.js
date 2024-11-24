import React from "react";
import Login from "./Components/Login"; // Importing the Login component
import About from "./Components/Dashboard"; // Importing the Login component
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
    <Router>
      <div>
        {/* Add your navigation bar or links here if needed */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
