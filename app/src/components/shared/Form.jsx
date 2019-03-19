import React from 'react';
import styled from 'styled-components';

import Input from './Input';
import Button from './Button';

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

  buttonClick = event => {
    event.preventDefault();
    // Add whatever you need to do with button click
    console.log(this.state);
  }

  render () {
    return (
      <FormContainer
        autoComplete="off"
        onSubmit={this.buttonClick}
      >        
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

        <LoginText>Already have an account? <a href="#">Log in!</a></LoginText>

        <Button
          textValue='Sign up'
          type="submit"
        />
      </FormContainer>
    );
  }
}

const FormContainer = styled.form`
  max-width: 200px;
  margin: 0.5rem auto 0;
  padding: 1rem 0;
  border-top: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginText = styled.div`
  max-width: 200px;
  font-size: 12px;
  text-align: center;
  color: rgb(180, 180, 180);
  line-height: 14px;
  margin: 0.5rem 0;

  a {
    text-decoration: none;
    color: rgb(121, 152, 166);

    &:hover {
      border-bottom: 1px solid #4183c4;
    }
  }
`;
