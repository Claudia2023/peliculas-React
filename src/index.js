import "font-awesome/css/font-awesome.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
//import promise from "redux-promise-middleware";
import { createPromise } from "redux-promise-middleware";

import App from './Componentes/App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';
import reducers from "./Redux/Reducers";

createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Amatic+SC|Anton|Rock+Salt|Cinzel');
    body{
        margin: 0;
    }
`;

const promise = createPromise({ types: { fulfilled: 'success' } });

const store = createStore(reducers, {}, applyMiddleware(promise, reduxThunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();