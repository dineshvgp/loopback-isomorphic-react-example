import { Store } from 'flummox';

export default class UserStore extends Store {

  constructor(flux) {
    super();

    const userActions = flux.getActions('UserActions');

    this.register(userActions.add, this.handleAdd);
    this.register(userActions.edit, this.handleEdit);
    this.register(userActions.remove, this.handleRemove);
  }

  handleAdd() {

  }

  handleEdit() {

  }

  handleRemove() {

  }

}
