import React from 'react';
import 'components/Nav.css';

export default class Nav {
  render() {
    return (
      <ul>
        <li>
          <a href='#all-reviews'>
            all reviews
          </a>
        </li>
        <li>
          <a href='#my-reviews'>
            my reviews
          </a>
        </li>
        <li>
          <a href='#add-review'>
            add review
          </a>
        </li>
        <li>
          <a href='#login'>
            login
          </a>
        </li>
        <li>
          <a href='#logout'>
            logout
          </a>
        </li>
      </ul>
    );
  }
}
