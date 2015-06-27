import { Store } from 'flummox';

export default class ReviewStore extends Store {

  constructor(flux) {
    super();

    const reviewActions = flux.getActions('ReviewActions');

    this.register(reviewActions.add, this.handleAdd);
    this.register(reviewActions.edit, this.handleEdit);
    this.register(reviewActions.remove, this.handleRemove);
  }

  handleAdd() {

  }

  handleEdit() {

  }

  handleRemove() {

  }

}
