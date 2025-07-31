import React, { useEffect, useState } from 'react';
import { fetchData } from '../api';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData('users?_limit=5').then(setUsers);
  }, []);

  return (
    <div>
      <h2>Users Page</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;