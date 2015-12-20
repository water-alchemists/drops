'use strict';
import React, { Component, NetInfo } from 'react-native';

let {
	Text,
	View,
	PropTypes,
	StyleSheet,
} = React;

class WifiDisplay extends Component {
	constructor(props){
		super(props);
		this.state = {
			wifi : null,
		};
	}
	componentWillMount(){
		const self = this;
		NetInfo.isConnected.fetch().then(wifi => {
			self.setState({ wifi });
		});
	}
	render(){
		const {wifi} = this.state;

		return(
			<View>
				<Text>Is the Wifi On?</Text>
				<Text>{`${wifi}`}</Text>
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