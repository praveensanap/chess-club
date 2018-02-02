import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import reducers from './reducers'
import {createStore ,applyMiddleware} from 'redux'
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import AppShell from "./components/App";


ReactDOM.render(
    <Provider store={createStore(reducers , composeWithDevTools(
          applyMiddleware(thunk)
    ))}>
        <AppShell />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
