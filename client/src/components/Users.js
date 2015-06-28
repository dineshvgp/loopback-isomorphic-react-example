import React, { PropTypes } from 'react';

export default class Users {

  static contextTypes = {
    flux: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.actions = this.context.flux.getActions('userActions');
  }

  render() {
    return (
      <section>
        <button onClick={::this.handleLoadUsers}>
          Load Users
        </button>
        <button onClick={::this.handleAddUser}>
          Add User
        </button>
      </section>
    );
  }

  handleLoadUsers() {

  }

  handleAddUser() {

  }
}
