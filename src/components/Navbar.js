'use strict';

import React, { Component, Navigator } from 'react-native';

//import actions
import { navigateBack } from '../actions/navigation';

//import common styles
import { navbarBackground } from '../styles';

const {
	Text,
	View,
	PropTypes,
	StyleSheet,
} = React;

class Navbar extends Component {
	goBack(){
		const { dispatch, navigator } = this.props;
		dispatch(navigateBack(navigator));
	}

	toggleNav(){
		// const { menuActions } = this.context;
		// if(menuActions) return menuActions.toggle();
	}

	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.button} onPress={this.goBack.bind(this)}>Back</Text>
				<Text style={styles.button} onPress={this.toggleNav.bind(this)}>Menu</Text>
			</View>
		);
	}
}

Navbar.propTypes = {
	dispatch : PropTypes.func.isRequired,
	navigator: PropTypes.instanceOf(Navigator).isRequired,
};

let styles = StyleSheet.create({
	container : {
		backgroundColor : navbarBackground,
		flexDirection : 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop : 40,
	},
	button : {
		textAlign : 'center',
		padding: 5,
	},
});



export default Navbar;
