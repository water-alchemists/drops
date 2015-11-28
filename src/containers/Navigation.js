'use strict';

import React, { Component, Navigator } from 'react-native';
import { connect } from 'react-redux/native';

import Settings from './Settings';

let {
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

	constructor(props) {
		super(props);
		let {state, dispatch} = this.props;
		this.dispatch = dispatch;
		this.state = state;
	}

	renderScene(route, navigator){
		let state = this.state,
			dispatch = this.dispatch;
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