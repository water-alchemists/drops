import { NAVIGATE_TO, NAVIGATE_BACK } from './actionTypes';

export function navigateTo(destination, navigator) {
  return {
    type: NAVIGATE_TO,
    destination,
    navigator
  };
}

export function navigateBack(navigator) {
  return {
    type: NAVIGATE_BACK,
    navigator
  };
}