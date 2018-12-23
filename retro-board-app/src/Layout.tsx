import React, { useState, useCallback } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
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
import Login from './views/Login';
import useGlobalState from './state';
import useLoginFromLocalStorage from './effects/useLoginFromLocalStorage';

const Title = styled(Typography)`
  flex-grow: 1;
  color: white;
`;

interface AppProps extends RouteComponentProps {}

function App({ history }: AppProps) {
  useLoginFromLocalStorage();
  const { state, togglePanel, logout } = useGlobalState();
  const goToHome = useCallback(() => history.push('/'));
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu" onClick={togglePanel}>
            <MenuIcon />
          </IconButton>
          <Title variant="title" onClick={goToHome} style={{ color: 'white' }}>
            Retrospected
          </Title>
          <Button color="inherit" onClick={logout}>
            {state.username}
          </Button>
        </Toolbar>
      </AppBar>
      <Page>
        <Route path="/" exact component={Home} />
        <Route path="/game/:gameId" component={Game} />
        {!state.username && <Login />}
      </Page>
      <Panel />
    </div>
  );
}

const Page = styled.main`
  margin: 50px;
  @media screen and (max-width: 600px) {
    margin: 10px;
  }
`;

export default withRouter(App);
