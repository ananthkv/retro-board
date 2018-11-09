import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { LanguageContext } from './translations';
import { Provider as StateContext } from './state';
import Layout from './Layout';

function App() {
  const [language, setLanguage] = useState('fr');
  return (
    <BrowserRouter>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <StateContext>
          <GlobalStyles />
          <Layout />
        </StateContext>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
