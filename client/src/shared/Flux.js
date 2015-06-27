import Flummox from 'flummox';
import RouteActions from 'actions/RouteActions';
import AppActions from 'actions/AppActions';
import ReviewActions from 'actions/ReviewActions';
import AppStore from 'stores/AppStore';
import ReviewStore from 'stores/ReviewStore';

export default class Flux extends Flummox {
  constructor() {
    super();

    this.createActions('AppActions', AppActions);
    this.createActions('RouteActions', RouteActions);
    this.createActions('ReviewActions', ReviewActions);
    this.createStore('AppStore', AppStore, this);
    this.createStore('ReviewStore', ReviewStore, this);
  }
}
