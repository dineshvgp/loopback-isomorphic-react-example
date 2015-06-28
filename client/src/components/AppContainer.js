import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import Nav from 'components/Nav';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Nav />
        </header>
        <div className='container'>
          <RouteHandler />
        </div>
      </div>
    );
  }
}
