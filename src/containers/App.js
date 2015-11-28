/**
 * React Native Webpack Starter Kit
 * https://github.com/jhabdas/react-native-webpack-starter-kit
 */
import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';

import thunk from 'redux-thunk';
import middlewares from '../middlewares';
import reducers from '../reducers';

import Navigation from './Navigation';

const createStoreWithMiddleware = applyMiddleware(thunk, ...middlewares)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <Provider store={store}>
        {() => <Navigation />}
      </Provider>
    );
  }
}

export default App;