'use strict';
import React, { Component } from 'react-native';
import Dimensions from 'Dimensions';

const window = Dimensions.get('window');

let {
	ScrollView,
	PropTypes,
	StyleSheet,
} = React;

class Menu extends Component {
	render(){
		const { options } = this.props;
		return (
			<ScrollView style={styles.container}>
				{options}
			</ScrollView>
		);
	}
}

Menu.propTypes = {
	options : PropTypes.arrayOf(PropTypes.node).isRequired,
};

const styles = StyleSheet.create({
	container : {
		width: 2 * window.width / 3,
		height: window.height,
		left : window.width / 3,
		paddingTop: 10,
	},
});

export default Menu;