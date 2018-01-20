import React from 'react';
import ReactDOM from 'react-dom';
// main app
import { Provider } from 'react-redux';
import AppRoutes from './routes/routes';
import store from './store';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>,
    document.getElementById('app'));
registerServiceWorker();
