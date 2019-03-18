import React from 'react';
import styled from 'styled-components';
import Input from './Input';

export default class Signup extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
  }

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  clearInputValue = stateKey => {
    this.setState((prevState) => ({
      ...prevState,
      [stateKey]: '',
    }));
  }

  render () {
    return (
      <FormContainer>        
        <Input
          name='username'
          placeholder='username'
          type='text'
          onChange={this.onInputChange}
          value={this.state.username}
          clearInput={this.clearInputValue}
        />

        <Input
          name='email'
          placeholder='email'
          type='text'
          onChange={this.onInputChange}
          value={this.state.email}
          clearInput={this.clearInputValue}
        />

        <Input
          name='password'
          placeholder='password'
          type='password'
          onChange={this.onInputChange}
          value={this.state.password}
          clearInput={this.clearInputValue}
        />
      </FormContainer>
    );
  }
}

const FormContainer = styled.form`
  margin: 2rem auto;
  padding: 1rem 0;
  border-top: 1px solid grey;
`;
