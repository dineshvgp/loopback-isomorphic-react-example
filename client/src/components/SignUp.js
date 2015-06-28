import React, { Component } from 'react';

export default class SignUp extends Component {
  // register()
  // user.email
  // user.password

  render() {
    return (
      <section>
        <form name="form">
          <fieldset>
            <legend>Sign up form</legend>

            <div className="form-group">
              <label>Email</label>
              <input name="email" type="text" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input name="password" type="password" />
            </div>

            <div className="actions">
              <label></label>
              <button>Sign up</button>
            </div>
          </fieldset>
        </form>
      </section>
    );
  }
}
