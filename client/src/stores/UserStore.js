import { Store } from 'flummox';

export default class UserStore extends Store {

  constructor(flux) {
    super();

    const userActions = flux.getActions('userActions');

    this.register(userActions.add, this.handleAdd);
    this.register(userActions.edit, this.handleEdit);
    this.register(userActions.remove, this.handleRemove);
  }

  handleAdd() {
    console.log('handle add');
  }

  handleEdit() {
    console.log('handle edit');
  }

  handleRemove() {
    console.log('handle remove');
  }

}
