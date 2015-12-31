'use strict';
import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';

import thunk from 'redux-thunk';
import middlewares from './middlewares';
import reducers from './reducers';
import subscribers from './subscribers';

import Navigation from './containers/Navigation';

const createStoreWithMiddleware = applyMiddleware(thunk, ...middlewares)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

//Performs actions after reducers updated
store.subscribe(() => subscribers.forEach(listener => listener(store)));

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				{() => <Navigation />}
			</Provider>
		);
	}
}

export default App;