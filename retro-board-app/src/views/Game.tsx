import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import useTranslations, { LanguageContext } from '../translations';

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

  useEffect(
    () => {
      console.log('On mount');
      const socket = io();
      setSocket(socket);

      socket.on('disconnect', () => {
        console.warn('Server disconnected');
        //store.dispatch({ type: LEAVE_SESSION });
      });
    },
    [gameId]
  );
  return (
    <div>
      <div>Game {gameId}</div>
      <div />
    </div>
  );
}

export default withRouter(Game);
