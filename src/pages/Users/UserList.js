import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./User.css";

function UserList() {
  const { users } = useContext(UserContext);

  return (
    <div className="list-container">
      <h2>Users</h2>
      {users.length === 0 ? (
        <p>No users added yet.</p>
      ) : (
        <ul className="user-list">
          {users.map((user, index) => (
            <li key={index}>
              <strong>{user.name}</strong> – {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
