import { State, Action } from './types';
import { TOGGLE_PANEL, LOGIN, LOGOUT } from './actions';

export default (state: State, action: Action) => {
  switch (action.type) {
    case TOGGLE_PANEL:
      return { ...state, panelOpen: !state.panelOpen };
    case LOGIN:
      return { ...state, username: action.payload };
    case LOGOUT:
      return { ...state, username: null };
    default:
      return state;
  }
};
