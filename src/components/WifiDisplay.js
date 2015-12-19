'use strict';
import React, { Component } from 'react-native';

let {
	Text,
	View,
	PropTypes,
	StyleSheet,
} = React;

class WifiDisplay extends Component {
	render(){
		return(
			<View>
			</View>
		);
	}
}

WifiDisplay.propTypes = {
	dispatch : PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	container : {
	},
});

export default WifiDisplay;