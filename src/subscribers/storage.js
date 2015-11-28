'use strict';

import { AsyncStorage } from 'react-native';

export default function(store){
	console.log('this is the store', store);
	console.log('this is the store to be saved', store.getState());
	let stateString = JSON.stringify(store.getState());
	AsyncStorage.setItem('state', stateString);
}