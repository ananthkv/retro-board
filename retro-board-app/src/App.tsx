import React, { useState } from 'react';
import { getUniverse } from 'retro-board-common';
import { Input, Button } from '@material-ui/core';
import LanguageContext from './translations/Context';
import languages from './translations/languages';
import Home from './views/Home';

function App() {
  const [title, setTitle] = useState('hello');
  const [language, setLanguage] = useState('fr');
  return (
    <LanguageContext.Provider value={language}>
      <div>
        <h1>
          Empty {getUniverse()} {title}
        </h1>
        <p>
          {languages.map(lang => (
            <Button onClick={() => setLanguage(lang.value)}>{lang.name}</Button>
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
