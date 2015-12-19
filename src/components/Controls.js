'use strict';
import React, { Component } from 'react-native';

let {
	Text,
	View,
	PropTypes,
	StyleSheet,
	TouchableOpacity,
} = React;

class Controls extends Component {
	render(){
		return(
			<View>
				<Text>Control LED</Text>
				<Text>Read Analog</Text>
			</View>
		);
	}
}

Controls.propTypes = {
	dispatch : PropTypes.func.isRequired,
	state : PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
	container : {

	},
	button : {

	},
});

export default Controls;