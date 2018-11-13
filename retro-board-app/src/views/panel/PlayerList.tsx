import React, { useContext, useCallback } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useTranslations, { LanguageContext } from '../../translations';
import useGlobalState from '../../state';

function PlayerList() {
  const translations = useTranslations();
  const { state } = useGlobalState();

  return (
    <>
      <p>{translations.Clients.header}</p>
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
