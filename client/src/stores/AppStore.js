import { Store } from 'flummox';

export default class AppStore extends Store {

  constructor(flux) {
    super();

    const appActions = flux.getActions('appActions');

    this.register(appActions.login, this.handleLogin);
    this.register(appActions.logout, this.handleLogout);
  }

  handleLogin() {

  }

  handleLogout() {

  }

}
