import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app';
import registerServiceWorker from '../registerServiceWorker';
import { Provider } from 'react-redux'
import { configureStore, history } from '../app/redux/store';
import { ConnectedRouter } from 'react-router-redux';
import router from '../app/router';

ReactDOM.render(
    <Provider store={configureStore()}>
        <ConnectedRouter history={history}>
            <App>
              {router}
            </App>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
