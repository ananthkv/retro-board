import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';
import styled from 'styled-components';
import {
  SentimentSatisfied,
  SentimentVeryDissatisfied,
  WbSunny,
} from '@material-ui/icons';
import io from 'socket.io-client';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { PostType, Post } from 'retro-board-common';
import useTranslations, { LanguageContext } from '../translations';
import useGlobalState from '../state';
import GameEngine from './game/GameEngine';
import Column from './game/Column';

interface Route {
  gameId: string;
}
interface GameProps extends RouteComponentProps<Route> {}

interface ColumnContent {
  type: PostType;
  posts: Post[];
  icon: React.ComponentType;
  label: string;
  color: string;
}

function GamePage({
  match: {
    params: { gameId },
  },
}: GameProps) {
  const translations = useTranslations();
  const languageContext = useContext(LanguageContext);
  const { state, setSession, setPlayers } = useGlobalState();
  const [service, setService] = useState<GameEngine>(
    (null as unknown) as GameEngine
  );
  if (service) {
    service.init(setSession, setPlayers, () => state);
  }
  useEffect(
    () => {
      if (state.username) {
        console.log('On mount');

        const socket = io();
        const service = new GameEngine(
          socket,
          setSession,
          setPlayers,
          () => state,
          gameId,
          state.username
        );
        setService(service);
      }

      return () => {
        if (service) {
          service.disconnect();
        }
      };
    },
    [gameId, state.username]
  );

  const columns: ColumnContent[] = useMemo(
    () => [
      {
        type: PostType.Well,
        posts: state.session.posts.filter(p => p.postType === PostType.Well),
        icon: SentimentSatisfied,
        label: translations.PostBoard.wellQuestion,
        color: '#a2cf6e',
      },
      {
        type: PostType.NotWell,
        posts: state.session.posts.filter(p => p.postType === PostType.NotWell),
        icon: SentimentVeryDissatisfied,
        label: translations.PostBoard.notWellQuestion,
        color: '#f6685e',
      },
      {
        type: PostType.Ideas,
        posts: state.session.posts.filter(p => p.postType === PostType.Ideas),
        icon: WbSunny,
        label: translations.PostBoard.ideasQuestion,
        color: '#ffef62',
      },
    ],
    [state.session.posts, languageContext.language]
  );

  return (
    <div>
      <div>Game {gameId}</div>
      {service && (
        <Columns>
          {columns.map(column => (
            <Column
              key={column.type}
              posts={column.posts}
              question={column.label}
              icon={column.icon}
              color={column.color}
              onAdd={post => service.addPost(column.type, post)}
              onDelete={service.deletePost.bind(service)}
              onLike={post => service.like(post, true)}
              onDislike={post => service.like(post, false)}
              onEdit={service.editPost.bind(service)}
            />
          ))}
        </Columns>
      )}
      <div>
        {state.players.map(player => (
          <div key={player}>{player}</div>
        ))}
      </div>
    </div>
  );
}

const Columns = styled.div`
  display: flex;
`;

export default withRouter(GamePage);
