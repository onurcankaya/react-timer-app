import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './components/Main';

// Load foundation
import foundation from 'style!css!foundation-sites/dist/foundation.min.css';
$(document).foundation();

// CSS
import css from 'style!css!sass!../styles/style.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);
