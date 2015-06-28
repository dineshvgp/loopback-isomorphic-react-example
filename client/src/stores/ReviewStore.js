import { Store } from 'flummox';

export default class ReviewStore extends Store {

  constructor(flux) {
    super();

    const reviewActions = flux.getActions('reviewActions');

    this.register(reviewActions.add, this.handleAdd);
    this.register(reviewActions.edit, this.handleEdit);
    this.register(reviewActions.remove, this.handleRemove);
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
