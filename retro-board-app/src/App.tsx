import React, { useState } from 'react';
import styled from 'styled-components';
import { getUniverse } from 'retro-board-common';
import GlobalStyles from './GlobalStyles';
import {
  Input,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LanguageContext from './translations/Context';
import languages from './translations/languages';
import Home from './views/Home';

const Title = styled(Typography)`
  flex-grow: 1;
`;

function App() {
  const [title, setTitle] = useState('hello');
  const [language, setLanguage] = useState('fr');
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <GlobalStyles />
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
          Empty {getUniverse()} {title}
        </h1>
        <p>
          {languages.map((lang, i) => (
            <Button
              variant="raised"
              color={i % 2 === 0 ? 'primary' : 'secondary'}
              onClick={() => setLanguage(lang.value)}
            >
              {lang.name}
            </Button>
          ))}
        </p>
        <p>
          <Input value={title} onChange={v => setTitle(v.target.value)} />
        </p>
        <div>
          <Home />
        </div>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
