import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div className="w-screen overflow-hidden">
      <Navbar />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
