import React, { Component } from 'react';

export default class MyReviews extends Component {
  // r in reviews.slice().reverse()
  // {{r.date | date}} | {{r.coffeeShop.name}}
  // {{r.reviewer.email}}
  // {{r.rating}}&#9733; - {{r.comments}}
  //  ng-show="currentUser"
  // edit-review({ id: r.id })
  // delete-review({ id: r.id })

  render() {
    return (
      <section>
        <article>
          <header>
            <h1></h1>
            <h2></h2>
          </header>

          <p></p>

          <div className="actions">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </article>
      </section>
    );
  }
}
