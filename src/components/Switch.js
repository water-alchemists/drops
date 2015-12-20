'use strict';
import React, { Component, Platform } from 'react-native';

let {
	SwitchIOS,
	SwitchAndroid,
	PropTypes,
} = React;

class Switch extends Component {
	onValueChange(value){
		const { onValueChange } = this.props;
		onValueChange(value);
	}

	render(){
		const os = Platform.OS,
			{ disabled, value } = this.props,
			SwitchIOSComponent = <SwitchIOS disabled={disabled} onValueChange={this.onValueChange.bind(this)} value={value}/>,
			SwitchAndroidComponent = <SwitchAndroid disabled={disabled} value={value} onValueChange={this.onValueChange.bind(this)}/>;
		console.log('this is the Platform', os);
		return os === 'ios' ? SwitchIOSComponent : SwitchAndroidComponent;
	}
}

Switch.propTypes = {
	disabled: PropTypes.bool,
	onValueChange : PropTypes.func.isRequired,
	value : PropTypes.bool.isRequired,
};

export default Switch;