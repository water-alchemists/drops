'use strict';
import React, { Component, Navigator } from 'react-native';

//Import Components
import Navbar from '../components/Navbar';
import WifiDisplay from '../components/WifiDisplay';

const {
	View,
	PropTypes,
} = React;

class Settings extends Component {
	render(){
		const { dispatch, navigator } = this.props;
		return (
			<View>
				<Navbar dispatch={dispatch} navigator={navigator} />
				<WifiDisplay dispatch={dispatch} />
			</View>
		);
	}
}

Settings.propTypes = {
	dispatch : PropTypes.func.isRequired,
	navigator: PropTypes.instanceOf(Navigator).isRequired,
	state: PropTypes.object.isRequired,
};

export default Settings;