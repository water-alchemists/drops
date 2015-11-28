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

class Settings extends Component {
	static propTypes = {
		dispatch : PropTypes.func,
		navigator: PropTypes.object,
		state: PropTypes.object
	}

	constructor(props){
		super(props);
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
				<Text>This is Settings.</Text>
				<Text onPress={this.goTo.bind(this, 'Dashboard')}>Go to Dashboard</Text>
			</View>
		);
	}
}

export default Settings;