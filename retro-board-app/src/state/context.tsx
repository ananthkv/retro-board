import React, { useContext, useReducer, createContext, SFC } from 'react';
import { State, Action } from './types';
import reducer from './reducer';
import { togglePanel } from './actions';

const initialState: State = {
  panelOpen: false,
  username: null,
};

const Context = createContext({
  state: initialState,
  dispatch: (action: Action) => {},
});

export const Provider: SFC = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export function useGlobalState() {
  const { state, dispatch } = useContext(Context);
  return {
    state,
    togglePanel: togglePanel(dispatch),
  };
}
