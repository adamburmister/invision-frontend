// Frameworks
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, Redirect} from 'react-router';
import {history} from 'react-router/lib/HashHistory';

// Redux support
import * as reducers from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

// Views and Components
import Layout from './views/layout';
import Posts from './views/posts';
import Settings from './views/settings';
import Profile from './views/profile';

// Setup utils
const reducersApp = combineReducers(reducers);
const logger = createLogger({ level: 'info' });
const createStoreWithMiddleware = applyMiddleware(logger, thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducersApp);

// Routing
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() =>
          <Router history={history}>
            <Route component={Layout}>
              <Redirect from="/" to="/posts" />
              <Route component={Posts} path="posts"></Route>
              <Route component={Settings} path="settings"></Route>
              <Route component={Profile} path="profile/:username(/:tab)">
                {/*<Route component={ProfileFollowers} path="followers" />*/}
                {/*<Route component={ProfileFollowing} path="following" />*/}
              </Route>
            </Route>
          </Router>
        }
      </Provider>
    );
  }
}

// Render all the things!
ReactDOM.render(<App/>, document.getElementById('app'));
