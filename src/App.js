// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem" }}>
        <Link to="/" style={{ margin: 10 }}>
          Home
        </Link>
        <Link to="/about" style={{ margin: 10 }}>
          About
        </Link>
        <Link to="/users" style={{ margin: 10 }}>
          Users
        </Link>
        <Link to="/contact" style={{ margin: 10 }}>
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
