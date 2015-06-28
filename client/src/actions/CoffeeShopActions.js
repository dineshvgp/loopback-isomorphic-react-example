import { Actions } from 'flummox';
import { CoffeeShopApi } from 'utils/api';
console.log(CoffeeShopApi)

export default class CoffeeShopActions extends Actions {

  find() {
    return CoffeeShopApi.find().then((response) => {
      return response.data;
    });
  }

  edit(id) {
    return id;
  }

  remove(id) {
    return id;
  }
}
