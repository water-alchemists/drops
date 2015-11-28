'use strict';

import * as routes from '../containers/routes';

export default function(store) {
  return function (next) {
    return function (action) {
      let navigator = action.navigator;
      if (navigator && navigator instanceof Object) navigate(action);
      next(action);
    };
  };
}

function navigate (action) {
  let { navigator, destination } = action;
  if(!destination) return navigator.pop();
  navigator.push({
    name: destination,
    component: routes[destination]
  });
}
