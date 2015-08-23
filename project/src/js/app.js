import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import HashHistory from 'react-router/lib/HashHistory';

ReactDOM.render(
  <Root history={new HashHistory()} />,
  document.getElementById('app')
);
