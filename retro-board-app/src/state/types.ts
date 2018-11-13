import { Session } from 'retro-board-common';

export interface Action {
  type: string;
  payload?: any;
}

export interface State {
  panelOpen: boolean;
  username: string | null;
  players: string[];
  session: Session;
}

export type Dispatch = (action: Action) => void;
