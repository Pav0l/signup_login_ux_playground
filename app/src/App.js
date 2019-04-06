import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Users from './components/Content';

const margin = {
  margin: '1rem',
};

/*
TODO:
- refactor everything to use Hooks
DONE - create separate folder for ALL HTTP requests
DONE - create separate folder to handle authentication
DONE - conditional navbar links
- protected content
- sanitize user inputs
- style navbar
- try out PASSPORT JS and implement social login

*/

function App() {
  const [isAuthed, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('user_token')) {
      setAuth(true);
    }
  }, []);

  const logoutUser = () => {
    localStorage.removeItem('user_token');
    setAuth(false);
  };

  return (
    <div style={margin}>
      <Navbar isAuthed={isAuthed} logoutUser={logoutUser} />

      <Route path='/signup' render={pr => <Signup {...pr} />} />

      <Route
        path='/login'
        render={pr =>
          !isAuthed ? (
            <Login {...pr} setAuth={setAuth} />
          ) : (
            <Redirect to='/users' {...pr} setAuth={setAuth} />
          )
        }
      />

      <Route
        path='/users'
        render={pr =>
          isAuthed ? (
            <Users {...pr} setAuth={setAuth} />
          ) : (
            <Redirect to='/login' />
          )
        }
      />
    </div>
  );
}

export default App;
