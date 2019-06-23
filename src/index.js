/* eslint "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }] */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'components/views/App';
import history from 'store/history';
import { store, persistor } from './store/store';
import './assets/stylesheets/main.css';

// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';
unregister(); // TODO: When site is more production ready, chunk caching better.

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <ConnectedRouter history={history}>
        <div>
          <App />
        </div>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  target,
);
