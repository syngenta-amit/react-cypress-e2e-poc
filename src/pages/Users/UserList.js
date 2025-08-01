// src/pages/Users/UserList.js
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./User.css";

function UserList() {
  const { users } = useContext(UserContext);

  return (
    <div className="list-container" data-cy="user-list-container">
      <h2 data-cy="user-list-heading">Users</h2>
      {users.length === 0 ? (
        <p data-cy="empty-message">No users added yet.</p>
      ) : (
        <ul className="user-list" data-cy="user-list">
          {users.map((user, index) => (
            <li key={index} data-cy={`user-item-${index}`}>
              <strong>{user.name}</strong> – {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
