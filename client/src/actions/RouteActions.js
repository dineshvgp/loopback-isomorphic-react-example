import AppActions from 'actions/AppActions';

export function findActiveRoute(routeArray) {
  const length = routeArray.length;
  return routeArray[length - 1].name;
}

export function triggerRouteChange(routeName, params) {
  switch (routeName) {
    case 'article':
      return AppActions.fetchArticle(params.id);
    default:
      return AppActions.fetchArticleList();
  }
}
