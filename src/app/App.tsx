import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import Join from "../pages/Join/Join";
import Lobby from "../pages/Lobby/Lobby";
import CallPage from "../pages/CallPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/lesson" element={<CallPage />} />
    </Routes>
  );
};

export default App;
