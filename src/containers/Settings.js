'use strict';
import React, { Component, Navigator } from 'react-native';
import SideMenu from 'react-native-side-menu';

//Import Components
import Menu from '../components/Menu';
import MenuNavItem from '../components/MenuNavItem';
import Navbar from '../components/Navbar';
import WifiDisplay from '../components/WifiDisplay';

let {
	PropTypes,
} = React;

class Settings extends Component {
	render(){
		const { dispatch, navigator } = this.props,
			destinations = ['Dashboard'],
			menuItems = destinations.map(destination => {
				return (
					<MenuNavItem dispatch={dispatch}
						display={destination}
						navigator={navigator}
						route={destination}
					/>
				);
			}),
			MenuComponent = <Menu options={menuItems} />;
		
		return (
			<SideMenu menu={MenuComponent}
				menuPosition={'right'} 
				touchToClose={true}
			>
				<Navbar dispatch={dispatch} navigator={navigator} />
				<WifiDisplay dispatch={dispatch} />
			</SideMenu>
		);
	}
}

Settings.propTypes = {
	dispatch : PropTypes.func.isRequired,
	navigator: PropTypes.instanceOf(Navigator).isRequired,
	state: PropTypes.object.isRequired,
};

export default Settings;