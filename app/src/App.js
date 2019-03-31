import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Login from './components/Login';
// import UserContent from './components/Content';

const margin = {
  margin: "1rem"
}

class App extends Component {
  render() {
    return (
      <div style={margin}>

        <Navbar />

        <Route
          path='/signup'
          component={Signup}
        />

        <Route
          path='/login'
          component={Login}
        />

        {/* <UserContent /> */}
      </div>
    );
  }
}

export default App;
