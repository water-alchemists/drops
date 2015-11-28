'use strict';

import React, { Component, Navigator } from 'react-native';
import { connect } from 'react-redux/native';

//import first page
import Settings from './Settings';

//import actions
import { appStartup } from '../actions/appstate';

let {
	AsyncStorage,
	PropTypes
} = React;

function mapStateToProps (state) {
  return {state: state};
}

class Navigation extends Component {

	static propTypes = {
		dispatch : PropTypes.func,
		state: PropTypes.object
	}

	componentDidMount(){
		//This is for loading for previous application state
		let { dispatch } = this.props;
		AsyncStorage.getItem('state').then(stateString => {
			let state = JSON.parse(stateString);
			dispatch(appStartup(state));
		});
	}

	renderScene(route, navigator){
		let { state, dispatch } = this.props;
		if (route.component) return React.createElement(route.component, { navigator, state, dispatch });
	}

	configureScene(){
		return Navigator.SceneConfigs.HorizontalSwipeJump;
	}

	render() {
		return (
			<Navigator
				initialRoute={{name: 'Settings', component: Settings}}
				configureScene={this.configureScene.bind(this)}
				renderScene={this.renderScene.bind(this)} />
			);
	}
}

export default connect(mapStateToProps)(Navigation);