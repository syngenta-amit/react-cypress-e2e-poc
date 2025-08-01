// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact/Contact";
import AddUser from "./pages/Users/AddUsers";
import UserList from "./pages/Users/UserList";
import "./Navbar.css";

function App() {
  return (
    <Router>
      <nav className="navbar" data-cy="navbar">
        <h1 className="logo" data-cy="app-logo">
          My React App
        </h1>
        <ul className="nav-links" data-cy="nav-links">
          <li>
            <NavLink to="/" end data-cy="nav-home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-user" data-cy="nav-add-user">
              Add User
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" data-cy="nav-user-list">
              User List
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" data-cy="nav-contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
