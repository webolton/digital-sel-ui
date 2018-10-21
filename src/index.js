import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor, history } from './store/store';
import { App } from './components/App';
import './stylesheets/main.css';

import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <ConnectedRouter history={history}>
        <div className="">
          <App />
        </div>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  target
);

registerServiceWorker();
