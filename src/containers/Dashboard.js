'use strict';
import React, { Component, Navigator } from 'react-native';
import SideMenu from 'react-native-side-menu';

//Import Components
import Menu from '../components/Menu';
import MenuNavItem from '../components/MenuNavItem';
import Navbar from '../components/Navbar';
import Controls from '../components/Controls';

let {
	PropTypes,
} = React;

class Dashboard extends Component {
	render(){
		const { dispatch, navigator, state } = this.props,
			destinations = ['Settings'],
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
				<Navbar dispatch={dispatch} 
					navigator={navigator}
				/>
				<Controls dispatch={dispatch} 
					state={state}
				/>
			</SideMenu>
		);
	}
}

Dashboard.propTypes = {
	dispatch : PropTypes.func.isRequired,
	navigator: PropTypes.instanceOf(Navigator).isRequired,
	state: PropTypes.object.isRequired,
};

export default Dashboard;