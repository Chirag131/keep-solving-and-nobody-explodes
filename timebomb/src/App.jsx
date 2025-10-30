import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import GamePage from "./pages/GamePage";
import RulesPage from "./pages/RulesPages";
import BackgroundMusic from "./components/BackgroundMusic";

export default function App() {
  return (
    <Router>
      {/* Persistent music across all routes */}
      <BackgroundMusic />

      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/rules" element={<RulesPage />} />
      </Routes>
    </Router>
  );
}
