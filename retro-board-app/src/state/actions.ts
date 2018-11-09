import { useGlobalState } from './context';
import { Dispatch } from './types';

export const TOGGLE_PANEL = 'retrospected/panel/toggle';

const createAction = (type: string, payload?: any) => ({
  type,
  payload,
});

export const togglePanel = (dispatch: Dispatch) => () => {
  dispatch(createAction(TOGGLE_PANEL));
};
