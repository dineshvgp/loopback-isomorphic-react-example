import React from 'react';
import Router from 'react-router';
import AppContainer from 'components/AppContainer';
import Login from 'components/Login';
import Logout from 'components/Logout';
import AllReviews from 'components/AllReviews';
import MyReviews from 'components/MyReviews';
import AddReview from 'components/AddReview';

const { DefaultRoute, Route } = Router;

const routes = (
  <Route handler={AppContainer}>
    <Route path="login" handler={Login} />
    <Route path="logout" handler={Logout} />
    <Route path="all-reviews" handler={AllReviews} />
    <Route path="my-reviews" handler={MyReviews} />
    <Route path="add-review" handler={AddReview} />
  </Route>
);

export default routes;
