'use strict';

import React, { Component } from 'react-native';

//Import Actions
import { navigateTo } from '../actions/navigation';

//Import Components
import Navbar from '../components/Navbar';

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

	goTo(destination){
		let { dispatch, navigator } = this.props;
		dispatch(navigateTo(destination, navigator));
	}

	render(){
		let { dispatch, navigator } = this.props;

		return (
			<View>
				<Navbar dispatch={dispatch} navigator={navigator}/>
				<Text>This is the Dashboard.</Text>
				<Text onPress={this.goTo.bind(this, 'Settings')}>Go to Settings</Text>
			</View>
		);
	}
}

export default Dashboard;