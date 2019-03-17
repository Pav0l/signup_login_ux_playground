import React from 'react';

import Input from './shared/Input';

export default class Signup extends React.Component {

  render () {
    return (
      <div>
        Signup
        <Input
          name='username'
          placeholder='username'
          type='text'
        />
      </div>
    );
  }
}