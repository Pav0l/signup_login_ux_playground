import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

// Components
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Login from './components/Login';
// import UserContent from './components/Content';
import Button from './components/shared/Button';

const margin = {
  margin: "1rem"
}

class App extends Component {

  buttonClick = event => {
    event.preventDefault();
    console.log('click')
    axios.get('http://127.0.0.1:4000/api/users')
      .then(res => console.log(res))
      .catch(err => console.error('Error: ', err));

  }

  render() {
    return (
      <div style={margin}>

        <Navbar />

        <Button
          textValue='get request'
          onClick={this.buttonClick}
        />

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
