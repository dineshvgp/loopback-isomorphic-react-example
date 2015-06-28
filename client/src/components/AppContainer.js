import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import Nav from 'components/Nav';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className='container'>
          <RouteHandler />
        </div>
      </div>
    );
  }
}
