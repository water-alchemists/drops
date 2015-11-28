import React, { Component } from 'react-native';
import { navigateBack } from '../actions/navigation';
import { navbarBackground } from '../styles';

let {
	Text,
	View,
	PropTypes
} = React;

class Navbar extends Component {
	static propTypes = {
		dispatch : PropTypes.func,
		state: PropTypes.object,
		navigator: PropTypes.object
	}
	
	render(){
		<View>
			<Text>Back</Text>
		</View>
	}
}

export default Navbar;