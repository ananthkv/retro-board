import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Button } from '@material-ui/core';
import io from 'socket.io-client';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import useTranslations, { LanguageContext } from '../translations';
import useGlobalState from '../state';
import GameEngine, { Game } from './game/GameEngine';

interface Route {
  gameId: string;
}
interface GameProps extends RouteComponentProps<Route> {}

function GamePage({
  match: {
    params: { gameId },
  },
}: GameProps) {
  const translations = useTranslations();
  const languageContext = useContext(LanguageContext);
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
  const { state } = useGlobalState();
  const [game, setGame] = useState<Game>({
    players: [],
    session: {
      id: gameId,
      name: '(unknown)',
      posts: [],
    },
  });
  const [service, setService] = useState<GameEngine>(
    (null as unknown) as GameEngine
  );
  if (service) {
    service.init(setGame, () => game);
  }
  useEffect(
    () => {
      console.log('On mount');

      const socket = io();
      const service = new GameEngine(
        socket,
        setGame,
        () => game,
        gameId,
        state.username
      );
      setService(service);
      setSocket(socket);

      return () => {
        service.disconnect();
      };
    },
    [gameId, state.username]
  );

  const onAction = useCallback(() => {
    service.addPost('Hello ' + Math.random());
  });

  // const onDelete = useCallback(() => {
  //   service.deletePost()
  // });
  return (
    <div>
      <div>Game {gameId}</div>
      <div />
      <Button onClick={onAction}>Action</Button>
      <div>
        {game.session.posts.map(post => (
          <div>
            {post.content} {post.likes.length} {post.dislikes.length}
            <Button onClick={() => service.deletePost(post)}>Delete</Button>
            <Button onClick={() => service.like(post, true)}>Like</Button>
            <Button onClick={() => service.like(post, false)}>Dislike</Button>
          </div>
        ))}
      </div>
      <div>
        {game.players.map(player => (
          <div>{player}</div>
        ))}
      </div>
    </div>
  );
}

// const send = (
//   action: string,
//   socket: SocketIOClient.Socket | null,
//   sessionId: string,
//   user: string | null,
//   payload?: any
// ) => {
//   console.log('Send ', socket, user);
//   if (socket && user) {
//     socket.emit(action, {
//       sessionId,
//       payload: {
//         user,
//         ...payload,
//       },
//     });
//   }
// };

export default withRouter(GamePage);
