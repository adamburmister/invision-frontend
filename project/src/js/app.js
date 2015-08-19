import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import BrowserHistory from 'react-router/lib/BrowserHistory';

ReactDOM.render(
  <Root history={new BrowserHistory()} />,
  document.getElementById('app')
);
