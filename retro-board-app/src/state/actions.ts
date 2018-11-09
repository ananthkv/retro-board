import { Dispatch } from './types';

export const TOGGLE_PANEL = 'retrospected/panel/toggle';
export const LOGIN = 'retrospected/user/login';
export const LOGOUT = 'retrospected/user/logout';

const createAction = (type: string, payload?: any) => ({
  type,
  payload,
});

export const togglePanel = (dispatch: Dispatch) => () => {
  dispatch(createAction(TOGGLE_PANEL));
};

export const login = (dispatch: Dispatch) => (username: string) => {
  dispatch(createAction(LOGIN, username));
};

export const logout = (dispatch: Dispatch) => () => {
  dispatch(createAction(LOGOUT));
};
