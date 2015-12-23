'use strict';
import { Navigator } from 'react-native';
import * as routes from '../routes';

export default function() {
	return function (next) {
		return function (action) {
			const navigator = action.navigator;
			if (navigator && navigator instanceof Navigator) navigate(action);
			next(action);
		};
	};
}

function navigate (action) {
	const { navigator, destination } = action;
	if(!destination) return navigator.pop();
	navigator.push({
		name: destination,
		component: routes[destination],
	});
}
