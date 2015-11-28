'use strict';

import React, { Component } from 'react-native';
import { navigateTo } from '../actions/navigation';

let {
	View,
	Text,
	PropTypes
} = React;

class Settings extends Component {
	static propTypes = {
		dispatch : PropTypes.func,
		navigator: PropTypes.object,
		state: PropTypes.object
	}

	render(){
		return (
			<View>
				<Text>This is Settings.</Text>
				<Text>Go to Dashboard</Text>
			</View>
		);
	}
}

export default Settings;