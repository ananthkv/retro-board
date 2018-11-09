export interface Action {
  type: string;
  payload?: any;
}

export interface State {
  panelOpen: boolean;
  username: string | null;
}

export type Dispatch = (action: Action) => void;
