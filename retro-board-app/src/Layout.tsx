import React, { useCallback } from 'react';
import styled from 'styled-components';
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Game from './views/Game';
import Panel from './views/Panel';
import useGlobalState from './state';

const Title = styled(Typography)`
  flex-grow: 1;
`;

function App() {
  const { state, dispatch } = useGlobalState();
  const onTogglePanel = useCallback(() => dispatch({ type: 'toggle-panel' }));
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu" onClick={onTogglePanel}>
            <MenuIcon />
          </IconButton>
          <Title variant="title" color="inherit">
            Retrospected
          </Title>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Route path="/" exact component={Home} />
      <Route path="/game/" component={Game} />
      <Panel />
    </div>
  );
}

export default App;
