// src/pages/Users/AddUser.js
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import "./User.css";

function AddUser() {
  const { addUser } = useContext(UserContext);
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(form);
    setForm({ name: "", email: "" });
  };

  return (
    <div className="form-container" data-cy="add-user-form">
      <h2 data-cy="add-user-heading">Add User</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            id="name"
            data-cy="input-name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            id="email"
            type="email"
            data-cy="input-email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" data-cy="submit-button">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddUser;
