import React from 'react';
import tools from 'redux-devtools';
import { createStore as initialCreateStore, compose } from 'redux';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';
export let createStore = initialCreateStore;

if(window.__DEV__) {
  createStore = compose(
    tools.devTools(),
    tools.persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
  );
}

export function renderDevTools(store) {
  if(window.__DEV__) {
    return (
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    );
  }
  return null;
}
