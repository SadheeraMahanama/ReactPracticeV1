import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Routers from '../src/Router/Router'

//middleware
import thunk from 'redux-thunk'
import promise from 'redux-promise'

//redux
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from "./Reducers"
const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
       <Routers/>
    </Provider>,
    document.getElementById('root')

);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
