import React, { useContext, useReducer, createContext, SFC } from 'react';

const initialState: State = {
  panelOpen: false,
  username: null,
};

interface Action {
  type: string;
  payload?: any;
}

interface State {
  panelOpen: boolean;
  username: string | null;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'toggle-panel':
      return { ...state, panelOpen: !state.panelOpen };
    default:
      return state;
  }
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

export default function useGlobalState() {
  const context = useContext(Context);
  return context;
}
