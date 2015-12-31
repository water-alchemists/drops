'use strict';
import React, { Component, Navigator } from 'react-native';

//Import Components
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Controls from '../components/Controls';

const {
	View,
	PropTypes,
} = React;

class Dashboard extends Component {
	render(){
		const { dispatch, navigator, state } = this.props;

		return (
			<View>
				<Navbar dispatch={dispatch} 
					navigator={navigator}
				/>
				<Controls dispatch={dispatch} 
					state={state}
				/>
			</View>
		);
	}
}

Dashboard.propTypes = {
	dispatch : PropTypes.func.isRequired,
	navigator: PropTypes.instanceOf(Navigator).isRequired,
	state: PropTypes.object.isRequired,
};

export default Dashboard;