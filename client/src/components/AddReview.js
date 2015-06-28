import React, { Component } from 'react';

export default class AddReview extends Component {
  // r in reviews.slice().reverse()
  // {{r.date | date}} | {{r.coffeeShop.name}}
  // {{r.reviewer.email}}
  // {{r.rating}}&#9733; - {{r.comments}}

  render() {
    return (
      <section>
        <article>
          <header>
            <h1>add review</h1>
            <h2></h2>
          </header>
          <p></p>
        </article>
      </section>
    );
  }
}
