import React, { useEffect, useState } from "react";
import "./App.css";
import Chat from "./Pages/Chat";
import Login from "./Pages/Login/index";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App({ socket }) {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chat socket={socket} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
