import { State, Action } from './types';
import {
  TOGGLE_PANEL,
  LOGIN,
  LOGOUT,
  SET_PLAYERS,
  SET_SESSION,
} from './actions';

export default (state: State, action: Action) => {
  switch (action.type) {
    case TOGGLE_PANEL:
      return { ...state, panelOpen: !state.panelOpen };
    case LOGIN:
      return { ...state, username: action.payload };
    case LOGOUT:
      return { ...state, username: null };
    case SET_PLAYERS:
      return { ...state, players: action.payload };
    case SET_SESSION:
      return { ...state, session: action.payload };
    default:
      return state;
  }
};
