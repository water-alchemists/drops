'use strict';
import { AppRegistry } from 'react-native';
import App from './src/App';

class Root extends App {
	static defaultProps = {
		...App.defaultProps,
	}
}

AppRegistry.registerComponent('Eddi', () => Root);
