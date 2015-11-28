'use strict';

import React, { Component } from 'react-native';

//import actions
import { navigateBack } from '../actions/navigation';

//import common styles
import { navbarBackground } from '../styles';

let {
	Text,
	View,
	PropTypes,
	StyleSheet
} = React;

class Navbar extends Component {
	static propTypes = {
		dispatch : PropTypes.func,
		state: PropTypes.object,
		navigator: PropTypes.object
	}

	goBack(){
		let { dispatch, navigator } = this.props;
		dispatch(navigateBack(navigator));
	}

	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.button} onPress={this.goBack.bind(this)}>Back</Text>
			</View>
		);
	}
}

export default Navbar;

let styles = StyleSheet.create({
	container : {
		backgroundColor : navbarBackground,
		flexDirection : 'row',
		paddingTop : 40
	},
	button : {
		textAlign : 'center',
		padding: 5
	}
})
