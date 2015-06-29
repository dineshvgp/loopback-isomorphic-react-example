import React from 'react';

export default class Test2 {
  render() {
    const { title } = this.props;

    return (
      <div>
        <h1>
          {title}
        </h1>

        <a href='test'>
          go to test 1
        </a>
      </div>
    );
  }
}
