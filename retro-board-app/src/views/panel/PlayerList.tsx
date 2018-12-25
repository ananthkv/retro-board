import React, { useContext, useCallback } from 'react';
import md5 from 'md5';
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import useTranslations, { LanguageContext } from '../../translations';
import useGlobalState from '../../state';

const getGravatar = (client: string) =>
  `https://www.gravatar.com/avatar/${md5(client)}?d=retro`;

function PlayerList() {
  const translations = useTranslations();
  const { state } = useGlobalState();

  return (
    <>
      <Typography variant="caption">{translations.Clients.header}</Typography>
      <List component="div">
        {state.players.map(player => (
          <ListItem>
            <ListItemAvatar>
              <Avatar alt={player} src={getGravatar(player)} />
            </ListItemAvatar>
            <ListItemText primary={player} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default PlayerList;
