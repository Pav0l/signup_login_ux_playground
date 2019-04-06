import React, { useState, useEffect } from 'react';
import getAllUsers from '../requests/protected';

export default function Users() {
  const [usersList, setUsers] = useState([]);
  const [isError, setError] = useState(null);

  useEffect(() => {
    getAllUsers(setUsers, setError);
  }, []);

  if (isError) {
    return <h3>Unfortunatelly, there was an error: ${isError}</h3>;
  }

  if (usersList.length < 1) {
    return <h3>Loading users...</h3>;
  }

  return (
    <div>
      <div>{usersList.length} users</div>
      {usersList &&
        usersList.map(user => <div key={user.user_id}>{user.username}</div>)}
    </div>
  );
}
