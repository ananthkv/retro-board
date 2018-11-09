import { State, Action } from './types';
import { TOGGLE_PANEL } from './actions';

export default (state: State, action: Action) => {
  switch (action.type) {
    case TOGGLE_PANEL:
      return { ...state, panelOpen: !state.panelOpen };
    default:
      return state;
  }
};
