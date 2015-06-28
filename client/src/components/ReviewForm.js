import React, { Component } from 'react';

export default class ReviewForm extends Component {
  // ng-submit="submitForm()"
  // {{action}} review form
  // shop as shop.name for shop in coffeeShops
  // selectedShop
  // review.rating
  // review.comments

  render() {
    return (
      <section>
        <form name="form" >
          <fieldset>
            <legend></legend>

            <div className="form-group">
              <label>Coffee shop name</label>
              <select>
              </select>
            </div>

            <div className="form-group">
              <label>Rating</label>
              <input type="radio" value="1" />1&#9733;
              <input type="radio" value="1" />1&#9733;
              <input type="radio" value="1" />1&#9733;
              <input type="radio" value="1" />1&#9733;
              <input type="radio" value="1" />1&#9733;
            </div>

            <div className="form-group">
              <label>Comments</label>
              <textarea></textarea>
            </div>

            <div className="actions">
              <label></label>
              <button>submit review</button>
            </div>
          </fieldset>
        </form>
      </section>
    );
  }
}
