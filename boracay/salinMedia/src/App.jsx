// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayPage from "./components/DisplayPage";
import LoginPage from "./components/LoginPage";
import SetupPage from "./components/SetupPage";
import "../src/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DisplayPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/:uniqueId" element={<DisplayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
