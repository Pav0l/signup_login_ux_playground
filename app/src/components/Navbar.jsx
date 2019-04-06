import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from './shared/Button';

export default function Navbar({ isAuthed, logoutUser }) {
  if (isAuthed) {
    return (
      <div>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/users'>Users</NavLink>
          <Button textValue='Log out' type='submit' onClick={logoutUser} />
        </nav>
      </div>
    );
  }
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/signup'>Signup</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </nav>
    </div>
  );
}
