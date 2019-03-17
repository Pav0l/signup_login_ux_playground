import React, { Component } from 'react';

// Components
import Signup from './components/Signup';
// import Login from './components/Login';
// import UserContent from './components/Content';

const margin = {
  margin: "1rem"
}

class App extends Component {
  render() {
    return (
      <div style={margin}>
        <p>Hello world!</p>
        <Signup />
        {/* <Login />
        <UserContent /> */}
      </div>
    );
  }
}

export default App;
