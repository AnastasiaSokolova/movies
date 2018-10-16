import React, {Component} from 'react';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer as oidcReducer } from 'redux-oidc';

import Home from './homeComponent/homeComponent.jsx';
import Movie from './movieComponent/movieComponent.jsx';

import CallbackPage from './components/callbackPage.jsx';

import {createBrowserHistory} from 'history';

import moviesData from './store/reducer';


import { OidcProvider } from 'redux-oidc';

import userManager  from './utils/userManager.jsx';

import { loadUser } from 'redux-oidc';


const initialState = {}

const store = createStore(
    combineReducers({
        moviesData,
        oidc: oidcReducer,
        routing: routerReducer
    }),
    initialState,
    applyMiddleware(thunk)
);

var user = loadUser(store, userManager);


const history = syncHistoryWithStore(createBrowserHistory(), store);

export default class  RootComponent extends Component {

    render() {
        return (
            <div>
                    <Provider history={history} store={store}>
                        <OidcProvider store={store} userManager={userManager}>
                        <Router>
                            <div>
                                <Route path="/" component={Home}/>
                                <Route path="/callback" component={CallbackPage} />
                                <Route path="/movie/:movie_id" component={Movie}/>
                            </div>
                        </Router>
                        </OidcProvider>
                    </Provider>
            </div>
        )
    }
}

