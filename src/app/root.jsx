import React from 'react';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import Home from './homeComponent/homeComponent.jsx';
import Movie from './movieComponent/movieComponent.jsx';

import {createBrowserHistory} from 'history';

import reducer from './reducer/reducer';

const initialState = {}

const store = createStore(
    combineReducers({
        reducer,
        routing: routerReducer
    }),
    initialState
);

const history = syncHistoryWithStore(createBrowserHistory(), store);

export default function RootComponent() {
    return (
        <div>
            <Router>
                <Provider history={history} store={store}>
                  <div>
                    <Route path="/" component={Home}/>
                    <Route path="/movie/:movie_id" component={Movie}/>
                  </div>
                </Provider>
            </Router>
        </div>
    )
}

