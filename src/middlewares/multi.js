//dispatches multiple actions
export default function ( { dispatch } ) {
	return next => action => {
		if(Array.isArray(action)) action.filter(Boolean).map(dispatch)
		else next(action);
	}
}