import React, { PropTypes } from 'react';

export default class CoffeeShops {

  static contextTypes = {
    flux: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.actions = this.context.flux.getActions('coffeeShopActions');
  }

  render() {
    return (
      <section>
        <button onClick={::this.handleLoadCoffeeShops}>
          Load Userssssssssss
        </button>
        <button onClick={::this.handleAddCoffeeShop}>
          Add User
        </button>
      </section>
    );
  }

  handleLoadCoffeeShops() {
    this.actions.find();
  }

  handleAddCoffeeShop() {

  }
}
