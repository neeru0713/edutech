import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Register from "./components/auth/Register.js";
import Login from "./components/auth/Login.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
