'use strict';

import React, { Component } from 'react-native';
import { navigateTo } from '../actions/navigation';

let {
	View,
	Text,
	PropTypes
} = React;

class Dashboard extends Component {
	static propTypes = {
		dispatch : PropTypes.func,
		navigator: PropTypes.object,
		state: PropTypes.object
	}

	render(){
		return (
			<View>
				<Text>This is the Dashboard.</Text>
				<Text>Go to Settings</Text>
			</View>
		);
	}
}

export default Dashboard;