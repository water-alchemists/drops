import { NAVIGATE_TO, NAVIGATE_BACK, APPSTATE_STARTUP } from '../actions/actionTypes';

const initialState = {
	stack: []
};

export default function(state = initialState, action = {}) {
	switch (action.type) {
		case NAVIGATE_TO:
			return {
				...state,
				stack: [...state.stack, action.destination],
			};
		case NAVIGATE_BACK:
			let stack = state.stack;
			return {
				...state,
				stack: stack.slice(0, stack.length - 2),
			};
		case APPSTATE_STARTUP:
			if (action.state && action.state.navigation) {
				return {
					...state,
					stack: [...action.state.navigation.stack],
				};
			}
			return state;
		default:
			return state;
		}
}