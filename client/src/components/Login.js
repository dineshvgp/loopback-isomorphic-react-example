import React, { Component } from 'react';
import Nav from 'components/Nav';

export default class Login extends Component {
  render() {
    return (
      <section>
        <form name="form">
          <fieldset>
            <legend>
              Login form
            </legend>

            <div className="form-group">
              <label>
                Email
              </label>
              <input type="text" />
              <p className="hint">
                Email is required
              </p>
            </div>

            <div className="form-group">
              <label>
                Password
              </label>
              <input type="password" />
              <p className="hint">
                Password is required
              </p>
            </div>

            <div className="actions">
              <button>
                Login
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    );
  }
}
