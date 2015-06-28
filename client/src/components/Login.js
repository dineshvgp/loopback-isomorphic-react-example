import React, { Component } from 'react';
import Nav from 'components/Nav';

export default class Login extends Component {
  render() {
    return (
      <div>
        <p>
          <input type='text' placeholder='email' />
        </p>
        <p>
          <input type='text' placeholder='password' />
        </p>
      </div>
    );
  }
}
