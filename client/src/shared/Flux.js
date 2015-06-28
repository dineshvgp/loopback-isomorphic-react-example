import Flummox from 'flummox';
import RouteActions from 'actions/RouteActions';
import AppActions from 'actions/AppActions';
import UserActions from 'actions/UserActions';
import ReviewActions from 'actions/ReviewActions';
import AppStore from 'stores/AppStore';
import UserStore from 'stores/UserStore';
import ReviewStore from 'stores/ReviewStore';

export default class Flux extends Flummox {
  constructor() {
    super();

    this.createActions('routeActions', RouteActions);
    this.createActions('appActions', AppActions);
    this.createActions('userActions', UserActions);
    this.createActions('reviewActions', ReviewActions);
    this.createStore('appStore', AppStore, this);
    this.createStore('userStore', UserStore, this);
    this.createStore('reviewStore', ReviewStore, this);
  }
}
