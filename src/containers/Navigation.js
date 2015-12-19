'use strict';

import React, { Component, Navigator } from 'react-native';
import { connect } from 'react-redux/native';

//import first page
import Settings from './Settings';

//import actions
// import { appStartup } from '../actions/appstate';

let {
	// AsyncStorage,
	PropTypes,
} = React;

function mapStateToProps (state) {
	return {state};
}

class Navigation extends Component {

	componentDidMount(){
		//This is for loading for previous application state
		// let { dispatch } = this.props;
		// AsyncStorage.getItem('state').then(stateString => {
		// 	let state = JSON.parse(stateString);
		// 	dispatch(appStartup(state));
		// });
	}

	renderScene(route, navigator){
		const { state, dispatch } = this.props;
		if (route.component) return React.createElement(route.component, { navigator, state, dispatch });
	}

	configureScene(){
		return Navigator.SceneConfigs.HorizontalSwipeJump;
	}

	render() {
		return (
			<Navigator
				configureScene={this.configureScene.bind(this)}
				initialRoute={{name: 'Settings', component: Settings}}
				renderScene={this.renderScene.bind(this)} 
			/>
		);
	}
}

Navigation.propTypes = {
	dispatch : PropTypes.func.isRequired,
	state: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Navigation);