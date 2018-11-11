import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Actions, Session, Post } from 'retro-board-common';
import { Button } from '@material-ui/core';
import io from 'socket.io-client';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import useTranslations, { LanguageContext } from '../translations';
import useGlobalState from '../state';
import { v4 } from 'uuid';

interface Route {
  gameId: string;
}
interface GameProps extends RouteComponentProps<Route> {}

function Game({
  match: {
    params: { gameId },
  },
}: GameProps) {
  const translations = useTranslations();
  const languageContext = useContext(LanguageContext);
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
  const { state } = useGlobalState();
  const [game, setGame] = useState<Session>({
    id: gameId,
    name: '(unknown)',
    posts: [],
  });
  useEffect(
    () => {
      console.log('On mount');
      const socket = io();
      setSocket(socket);

      socket.on('disconnect', () => {
        console.warn('Server disconnected');
        //store.dispatch({ type: LEAVE_SESSION });
      });

      socket.on('connect', () => {
        console.log('Connected');
        send(Actions.LOGIN_SUCCESS, socket, gameId, state.username);
        send(Actions.JOIN_SESSION, socket, gameId, state.username);
      });

      socket.on(Actions.RECEIVE_CLIENT_LIST, (clients: any) => {
        console.log('Client list: ', clients);
      });

      socket.on(Actions.RECEIVE_BOARD, (board: any) => {
        console.log('Receive board: ', board);
      });

      return () => {
        console.log('Disconnect from App');
        socket.disconnect();
      };
    },
    [gameId, state.username]
  );

  const onAction = useCallback(() => {
    send(Actions.ADD_POST_SUCCESS, socket, gameId, state.username, {
      content: 'Foo',
      dislikes: [],
      likes: [],
      id: v4(),
      postType: 'well',
      user: state.username,
    } as Post);
  });
  return (
    <div>
      <div>Game {gameId}</div>
      <div />
      <Button onClick={onAction}>Action</Button>
    </div>
  );
}

const send = (
  action: string,
  socket: SocketIOClient.Socket | null,
  sessionId: string,
  user: string | null,
  payload?: any
) => {
  console.log('Send ', socket, user);
  if (socket && user) {
    socket.emit(action, {
      sessionId,
      payload: {
        user,
        ...payload,
      },
    });
  }
};

export default withRouter(Game);
