'use strict';
import React, { Component } from 'react-native';
import Switch from './Switch';

let {
	Text,
	View,
	PropTypes,
	StyleSheet,
	TouchableOpacity,
} = React;

class Controls extends Component {
	constructor(props){
		super(props);
		this.state = {
			on: false,
		};
	}
	onValueChange(on){
		console.log('this is the value change', on);
		this.setState({ on });
	}
	render(){
		const { on } = this.state;

		return(
			<View>
				<View>
					<Text>Control LED</Text>
					<Switch onValueChange={this.onValueChange.bind(this)}
						value={on}
					/>
				</View>
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