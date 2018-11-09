import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { getUniverse } from 'retro-board-common';
import {
  Input,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Switch,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LanguageContext from './translations/Context';
import useGlobalState from './state';
import languages from './translations/languages';
import Home from './views/Home';

const Title = styled(Typography)`
  flex-grow: 1;
`;

function App() {
  const [title, setTitle] = useState('hello');
  const language = useContext(LanguageContext);
  const { state, dispatch } = useGlobalState();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Title variant="title" color="inherit">
            Retrospected
          </Title>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <h1>
        Empty {getUniverse()} {title} {state.panelOpen ? 'open' : 'closed'}
      </h1>
      <p>
        {languages.map((lang, i) => (
          <Button
            variant="raised"
            color={i % 2 === 0 ? 'primary' : 'secondary'}
            onClick={() => language.setLanguage(lang.value)}
          >
            {lang.name}
          </Button>
        ))}
      </p>
      <p>
        <Input value={title} onChange={v => setTitle(v.target.value)} />
      </p>
      <p>
        <Switch
          checked={state.panelOpen}
          onChange={() => dispatch({ type: 'toggle-panel' })}
        />
      </p>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
