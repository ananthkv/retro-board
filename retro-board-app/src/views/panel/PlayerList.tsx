import React, { useContext, useCallback } from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useTranslations, { LanguageContext } from '../../translations';
import useGlobalState from '../../state';

function PlayerList() {
  const translations = useTranslations();
  const { state } = useGlobalState();

  return (
    <>
      <Typography variant="subtitle1">{translations.Clients.header}</Typography>
      <List component="div">
        {state.players.map(player => (
          <ListItem>
            <ListItemText primary={player} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default PlayerList;
