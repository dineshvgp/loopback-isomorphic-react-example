import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <section>
        <h1>You are now registered.</h1>
        <p>Please <a href='#login'>log in</a> to perform
            more actions.</p>
      </section>
    );
  }
}
