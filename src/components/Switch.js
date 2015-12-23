'use strict';
import React, { Component, Platform } from 'react-native';

let {
	SwitchIOS,
	SwitchAndroid,
	PropTypes,
} = React;

class Switch extends Component {
	valueChangeHandler(value){
		const { onValueChange } = this.props;
		onValueChange(value);
	}

	render(){
		const os = Platform.OS,
			{ disabled, value } = this.props,
			SwitchIOSComponent = <SwitchIOS disabled={disabled} onValueChange={this.valueChangeHandler.bind(this)} value={value}/>,
			SwitchAndroidComponent = <SwitchAndroid disabled={disabled} value={value} onValueChange={this.valueChangeHandler.bind(this)}/>;

		return os === 'ios' ? SwitchIOSComponent : SwitchAndroidComponent;
	}
}

Switch.propTypes = {
	disabled: PropTypes.bool,
	onValueChange : PropTypes.func.isRequired,
	value : PropTypes.bool.isRequired,
};

export default Switch;