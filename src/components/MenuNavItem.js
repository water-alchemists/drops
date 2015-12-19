'use strict';
import React, { Component, Navigator } from 'react-native';

import { navigateTo } from '../actions/navigation';

let {
	Text,
	TouchableOpacity,
	View,
	PropTypes,
	StyleSheet,
} = React;

class MenuNavItem extends Component {
	navigateTo(destination){
		const { dispatch, navigator } = this.props;
		if(destination) dispatch(navigateTo(destination, navigator));
	}

	render(){
		const { display, route } = this.props;

		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this.navigateTo.bind(this, route)}>
					<Text style={styles.text}>
						{display}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

MenuNavItem.propTypes = {
	dispatch : PropTypes.func.isRequired,
	display: PropTypes.string.isRequired,
	navigator: PropTypes.instanceOf(Navigator).isRequired,
	route: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
	container : {
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
	},
	text : {
		fontSize: 20,
		padding : 5,
	},
});

export default MenuNavItem;